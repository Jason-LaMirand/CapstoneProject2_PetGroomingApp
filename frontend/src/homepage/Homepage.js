import React, { useContext } from 'react';
import UserContext from '../UserContext';
import { Link } from 'react-router-dom';
import { Button } from "reactstrap";
import "./Homepage.css";


const Homepage = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <div className="Homepage-container">
      <div className="Homepage">
        <div className="text-container">
          <h1 className="mb-4 font-weight-bold mt-5">Welcome to Doggies Mobile Day Spa!</h1>
          <p className="mb-4 font-weight-light">#1 spot for your pet's spa!.</p>
          {currentUser ? <h2>Welcome back, {currentUser.firstName}!</h2> : (
            <div>
              <Link to="/login">
                <Button color="primary">Login</Button>
              </Link>
              <Link to="/signup" className="ml-3">
                <Button color="primary">Sign up</Button>
              </Link>
            </div>
          )}
        </div>
        <div className="image-container">
          <img src='https://doggiesmobiledayspa.com/wp-content/uploads/2022/08/logo-2.png' alt="working illustration" className="homepage-image" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;