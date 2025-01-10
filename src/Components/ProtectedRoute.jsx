import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isLogin, Component }) => {
  if (!isLogin) {
    return <Navigate to="/login" />;
  }

  return <Component />;
};

export default ProtectedRoute;
