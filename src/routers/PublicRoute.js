import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import LoginPage from '../Components/LoginPage';

export const PublicRoute = ({ isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    component={(props) =>
      isAuthenticated ? <Redirect to='/dashboard' /> : <LoginPage />
    }
  />
);

const mapStatesToProps = (state) => ({
  isAuthenticated: !!state.auth.uid,
});

export default connect(mapStatesToProps)(PublicRoute);
