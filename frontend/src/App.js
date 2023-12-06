import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import useLocalStorage from './common/useLocalStorage';
import jwt from 'jsonwebtoken';
import 'bootstrap/dist/css/bootstrap.min.css';

import PGAApi from './common/api';
import NavBar from './routes-nav/NavBar';
import Routes from './routes-nav/Routes';
import UserContext from './UserContext';
import LoadingSpinner from './common/LoadingSpinner';


// Key name for storing token in localStorage for "remember me" re-login
export const TOKEN_STORAGE_ID = 'PGA-token';


const App = () => {
  const [infoLoaded, setInfoLoaded] = useState(false);
  const [petApplicationIds, setPetApplicationIds] = useState(new Set([]));
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);

  console.debug(
    'App',
    'infoLoaded=',
    infoLoaded,
    'petApplicationIds=',
    petApplicationIds,
    'currentUser=',
    currentUser,
    'token=',
    token
  );

  // Load user info from API. Until a user is logged in and they have a token,
  // this should not run. It only needs to re-run when a user logs out, so
  // the value of the token is a dependency for this effect.

  useEffect(() => {
    async function getCurrentUser() {
      if (token) {
        try {
          let { username } = jwt.decode(token);
          // put the token on the Api class so it can use it to call the API.
          PGAApi.token = token;
          let currentUser = await PGAApi.getCurrentUser(username);
          setPetApplicationIds(new Set(currentUser.applications));
          setCurrentUser(currentUser);
        } catch (err) {
          console.error('App getCurrentUser: problem loading', err);
          setCurrentUser(null);
        }
      }
      setInfoLoaded(true);
    }
    // set infoLoaded to false while async getCurrentUser runs; once the
    // data is fetched (or even if an error happens!), this will be set back
    // to false to control the spinner.
    setInfoLoaded(false);
    getCurrentUser();
  }, [token]);

  // Handles site-wide signup.
  async function signup(signupData) {
    try {
      let token = await PGAApi.signup(signupData);
      setToken(token);
      PGAApi.token = token;
      setCurrentUser(token);
      return { success: true };
    } catch (errors) {
      console.error('signup failed', errors);
      return { success: false, errors };
    }
  }

  //  Handles site-wide login. 
  async function login(loginData) {
    try {
      let token = await PGAApi.login(loginData);
      setToken(token);
      setCurrentUser(token);
      return { success: true };
    } catch (errors) {
      console.error('login failed', errors);
      return { success: false, errors };
    }
  }

  // Deletes a user and all their data 
  async function deleteUser() {
    try {
      await PGAApi.deleteProfile(currentUser.username);
      logout();
      return { success: true };
    } catch (errors) {
      console.error('delete failed', errors);
      return { success: false, errors };
    }
  }

  // Checks if a pet has been added. 
  function hasAddedPet(id) {
    return petApplicationIds.has(id);
  }

  // Add a pet: make API call and update set of application IDs.
  function addPet(id) {
    if (hasAddedPet(id)) return;
    PGAApi.applyToJob(currentUser.username, id);
    setPetApplicationIds(new Set([...petApplicationIds, id]));
  }

  // Handles site-wide logout. 
  const logout = () => {
    setPetApplicationIds(null);
    setCurrentUser(null);
    setToken('token');
  };

  if (!infoLoaded) {
    return <LoadingSpinner />;
  }

  return (
    <div className="App mb-5">
      <BrowserRouter>
        <UserContext.Provider
          value={{ currentUser, setCurrentUser, hasAddedPet, addPet }}
        >
          <NavBar logout={logout} />
          <Routes login={login} signup={signup} deleteUser={deleteUser} />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;
