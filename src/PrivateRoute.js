import React from "react";
import { Redirect, Route } from "react-router-dom";

import { TOKEN } from "./pages/auth/actions";
import { get } from "./utils/localStorage";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      get(TOKEN) ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export default PrivateRoute;
