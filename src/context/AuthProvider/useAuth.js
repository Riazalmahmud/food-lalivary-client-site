import React, { useContext } from "react";
import { authContext } from "./AuthProvider.js";

const useAuth = () => {
  const auth = useContext(authContext);
  return auth;
};

export default useAuth;
