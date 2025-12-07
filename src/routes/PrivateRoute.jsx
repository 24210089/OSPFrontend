// src/routes/PrivateRoute.jsx

import React from "react";
import { Outlet } from "react-router-dom";

// Auth is temporarily disabled; always render the protected content.
const PrivateRoute = () => {
  return <Outlet />;
};

export default PrivateRoute;
