import React from "react";
import { Redirect } from "react-router-dom";

import { LoginContainer } from "./styles";

import WithAuth from "../../components/withAuth";

import Button from "../../components/Button";
import A from "../../components/A";

import config from "../../config";

const Login = ({ location }) => (
  <WithAuth>
    {({ isLoggedIn }) => {
      if (isLoggedIn) {
        return (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        );
      } else {
        return (
          <LoginContainer>
            <Button>
              <A href={config.CLIENT_URL}>LOGIN</A>
            </Button>
          </LoginContainer>
        );
      }
    }}
  </WithAuth>
);

export default Login;
