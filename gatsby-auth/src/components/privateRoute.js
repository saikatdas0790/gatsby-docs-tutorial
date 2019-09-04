import React, { useEffect } from "react";
import { navigate } from "gatsby";
import { isLoggedIn } from "../services/auth";

const PrivateRoute = ({ location, component: Component, ...rest }) => {
  useEffect(() => {
    let notOnLoginPage = location.pathname !== `/app/login`;
    if (!isLoggedIn() && notOnLoginPage) {
      navigate("/app/login");
      return null;
    }
  });

  return <Component {...rest}></Component>;
};

export default PrivateRoute;
