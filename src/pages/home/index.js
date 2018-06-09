import React from "react";
import { Redirect } from "react-router-dom";

import WithAuth from "../../components/withAuth";

const Home = ({ location }) => (
  <WithAuth>
    {({ isLoggedIn }) => {
      if (isLoggedIn) {
        return <h1>Home</h1>;
      } else {
        return (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        );
      }
    }}
  </WithAuth>
);

export default Home;
