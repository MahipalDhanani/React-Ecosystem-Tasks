import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function PublicRoute({ role }) {
  const user = JSON.parse(localStorage.getItem('user'));

  if (!user || user.role !== role) {
    return <Navigate to="/dashboard" />;
  }
  

  return <Outlet />;
}

export default PublicRoute;
