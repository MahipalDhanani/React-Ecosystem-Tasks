import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoute({ role }) {
  const user = JSON.parse(localStorage.getItem('user'));

  if (!user || user.role !== role) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}

export default PrivateRoute;
