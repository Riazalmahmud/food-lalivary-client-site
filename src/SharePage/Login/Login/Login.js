import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import useAuth from "../../../context/AuthProvider/useAuth.js";
const Login = () => {
  const [loadData, setLoadData] = useState({});
  const {
    user,
    googleSignIn,
    facebookSignIn,
    isloading,
    authError,
    signInEmailPassword,
  } = useAuth();

  let location = useLocation();
  let history = useHistory();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newData = { ...loadData };
    newData[field] = value;
    setLoadData(newData);
  };

  const handleSubmitLogin = (e) => {
    signInEmailPassword(loadData.email, loadData.password, location, history);
    e.preventDefault();
    e.target.reset();
    console.log(e);
  };
  return (
    <div>
      <div className="container">
        <div className="login-from-style w-50 text-center mx-auto shadow-lg p-3 rounded mb-5 mt-5 ">
          {!isloading && (
            <form onSubmit={handleSubmitLogin} className="login-design">
              <Form.Control
                placeholder="Enter email"
                className="bg-transparent mt-3"
                name="email"
                type="email"
                onBlur={handleOnBlur}
              />

              <Form.Control
                placeholder="Enter password"
                className="bg-transparent mt-3"
                name="password"
                type="password"
                onBlur={handleOnBlur}
              />

              <Button variant="primary" className="mt-3" type="submit">
                Submit
              </Button>
            </form>
          )}
          <p className="my-3">or signIn</p>
          <Button variant="outline-secondary" onClick={googleSignIn}>
            SignIn with google
          </Button>{" "}
          <br />
          <NavLink style={{ textDecoration: "none" }} to="/register">
            <Button variant="text">New User? Please Register</Button>
          </NavLink>
          {isloading && <h1>Loading...</h1>}
          {user?.email && <alert severity="success">Successfully login </alert>}
          {authError && (
            <alert severity="error">
              {authError} sorry ! already created account{" "}
            </alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
