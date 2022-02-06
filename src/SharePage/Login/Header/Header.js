import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { GoLocation } from "react-icons/go";
import { BsFillTelephoneFill } from "react-icons/bs";
import Box from "@mui/material/Box";
import {
  AiOutlineMail,
  AiFillShopping,
  AiFillDollarCircle,
} from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import brandLogo from "../../../image/Brand.png";
import { Link } from "react-router-dom";
import useAuth from "../../../context/AuthProvider/useAuth.js";
const Header = () => {
  const { user, logOut } = useAuth();
  console.log(user);
  return (
    <div>
      <div className="container-fluid bg-light border border-1">
        <div className="container">
          <Navbar bg="light" expand="lg">
            <Container fluid>
              <Navbar.Brand href="#">
                <p className="low-green-text">
                  <GoLocation />
                  <span className="text-dark top-text-slogan">
                    Riaz Hossen,sodar,Noakhali,Bangladesh
                  </span>
                </p>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <Nav.Link href="#action1">
                    <p className="low-green-text">
                      <BsFillTelephoneFill />
                      <span className="text-dark ml-1">+8801861594793</span>
                    </p>
                  </Nav.Link>
                  <Nav.Link href="#action2">
                    <p className="low-green-text">
                      <AiOutlineMail />
                      <span className="text-dark ml-1">
                        riazHossen043@gmail.com
                      </span>
                    </p>
                  </Nav.Link>
                </Nav>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                  <Nav.Link href="#action2">
                    <p className="text-dark">
                      <BsSearch size={23} />
                    </p>
                  </Nav.Link>
                  <Nav.Link href="#action2">
                    {user?.email ? (
                      <img
                        src={user.photoURL}
                        alt="user picture"
                        width={"30px"}
                        height={"30px"}
                        className="rounded-circle"
                      />
                    ) : (
                      <p className="text-dark">
                        <FaUserAlt size={22} />
                      </p>
                    )}
                  </Nav.Link>
                  <Nav.Link href="#action2">
                    <p className="text-dark">
                      <AiFillShopping size={24} />
                    </p>
                  </Nav.Link>
                  <Nav.Link href="#action2">
                    <p className=" fs-6 circle-icons">
                      <AiFillDollarCircle size={22} color={"#da2424"} />
                    </p>
                  </Nav.Link>
                </Navbar.Collapse>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </div>

      {/* main navigation  */}
      <div className="container-fluid bg-light">
        <div className="container text-dark">
          <Navbar collapseOnSelect expand="lg" bg="light" variant="dark">
            <Container>
              <Navbar.Brand href="#home">
                <img
                  className="img-fluid image-size-fix"
                  src={brandLogo}
                  alt=""
                  width="92px"
                  height="82px"
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="m-auto text-dark">
                  <Nav.Link as={Link} to="/home">
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to="/About">
                    About
                  </Nav.Link>
                  <Nav.Link as={Link} to="/Blog">
                    Blog
                  </Nav.Link>

                  <Nav.Link as={Link} to="/Contact">
                    Contact
                  </Nav.Link>
                  {}

                  {user?.email ? (
                    <Box className="d-flex justify-content-between">
                      <Nav.Link as={Link} to="/Dashboard">
                        Dashboard
                      </Nav.Link>
                      <Button variant="danger" onClick={logOut}>
                        logOut
                      </Button>
                    </Box>
                  ) : (
                    <Nav.Link as={Link} to="/login">
                      login
                    </Nav.Link>
                  )}
                </Nav>
                <Nav>
                  {user?.email ? (
                    <Button variant="danger">{user.displayName}</Button>
                  ) : (
                    <Nav.Link href="#deets" className="getmenu">
                      your name
                    </Nav.Link>
                  )}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>

        {/* slider section */}
      </div>
    </div>
  );
};

export default Header;
