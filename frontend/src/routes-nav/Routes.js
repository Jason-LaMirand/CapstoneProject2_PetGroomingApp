import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Homepage from '../homepage/Homepage';
import LoginForm from '../forms/LoginForm';
import addPet from '../forms/MyDogForm';
import SignUpForm from '../forms/SignUpForm';
import ProfileForm from '../forms/ProfileForm';
import Protected from './ProtectedRoute';
import Gallery from '../Pages/gallery';
import Services from '../Pages/services';
import AboutUs from '../Pages/aboutUs';
import Appointment from '../Pages/appointment';

/** Site-wide routes.
 *Provides protected access to different pages.
 */

const Routes = ({ login, signup, deleteUser }) => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>

        <Route exact path="/login">
          <LoginForm login={login} />
        </Route>

        <Route exact path="/signup">
          <SignUpForm signup={signup} />
        </Route>

        <Route exact path="/gallery">
          <Gallery />
        </Route>

        <Route exact path="/services">
          <Services />
        </Route>

        <Route exact path="/appointment">
          <Appointment />
        </Route>

        <Route exact path="/aboutUs">
          <AboutUs />
        </Route>

        <Route exact path="/myPet">
          <myPetsCard />
        </Route>

        <Route exact path="/addPet">
          <addPet addPet={addPet} />
        </Route>

        <Protected exact path="/profile">
          <ProfileForm deleteUser={deleteUser} />
        </Protected>

        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default Routes;
