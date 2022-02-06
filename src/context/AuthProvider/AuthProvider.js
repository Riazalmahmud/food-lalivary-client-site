import React, { createContext } from "react";
import useFirebase from "./../../Hooks/useFirebase";
export const authContext = createContext(null);
const AuthProvider = ({ children }) => {
  const allProvider = useFirebase();
  return (
    <authContext.Provider value={allProvider}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
