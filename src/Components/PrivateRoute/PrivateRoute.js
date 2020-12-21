import React from 'react';
import { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { DestinationContext } from '../../App';

const PrivateRoute = ({ children, ...rest}) => {
    
    const [loggedInUser, setLoggedInUser] = useContext(DestinationContext);


    return (
        <Route
        {...rest}
      render={({ location }) =>
        loggedInUser.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;