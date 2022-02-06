import React from "react";
import { Redirect, Route } from "react-router-dom";
import useAuth from "../../context/AuthProvider/useAuth.js";

const AdminRoute = ({ children, ...rest }) => {
  let { user, isloading } = useAuth();
  if (isloading) {
    return <h1>Loading....</h1>;
  }
  return (
    <div>
      <Route
        {...rest}
        render={({ location }) =>
          user?.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location },
              }}
            />
          )
        }
      />
    </div>
  );
};

export default AdminRoute;
