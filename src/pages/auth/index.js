import React, { Component } from "react";
import queryString from "query-string";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { logInUser } from "./actions";

class Auth extends Component {
  componentDidMount() {
    const data = queryString.parse(this.props.location.hash);
    this.props.logInUser(data);
  }

  render() {
    if (this.props.isLoggedIn) {
      return <Redirect to="/" />;
    }
    return null;
  }
}

const mapStateToProp = ({ auth }) => ({
  isLoggedIn: auth.isLoggedIn
});

const mapDispatchToProp = dispatch => ({
  logInUser: data => dispatch(logInUser(data))
});

export default connect(
  mapStateToProp,
  mapDispatchToProp
)(Auth);
