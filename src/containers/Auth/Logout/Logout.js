import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { logout } from "../../../store/actions/auth";

const toLogout = props => {
  useEffect(() => {
    props.logout();
  }, []);

  return <Redirect to="/" />;
};

export default connect(
  null,
  { logout }
)(toLogout);
