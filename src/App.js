import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import Login from "./pages/login";
import Auth from "./pages/auth";

class App extends Component {
  render() {
    return (
      <Switch>
        <PrivateRoute path="/" exact component={() => <h1>Holla</h1>} />
        <Route path="/login" exact component={Login} />
        <Route path="/auth" exact component={Auth} />
      </Switch>
    );
  }
}

export default App;
