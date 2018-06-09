import React from "react";

import { LoginContainer } from "./styles";

import Button from "../../components/Button";
import A from "../../components/A";
import config from "../../config";

const Login = () => (
  <LoginContainer>
    <Button>
      <A href={config.CLIENT_URL}>LOGIN</A>
    </Button>
  </LoginContainer>
);

export default Login;
