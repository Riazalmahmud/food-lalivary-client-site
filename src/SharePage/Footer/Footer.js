import React from "react";
import footer_banner from "../../image/footer-banner.jpg";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import brandLogo from "../../image/Brand.png";
import "./Footer.css";
import { Nav } from "react-bootstrap";
const Footer = () => {
  return (
    <div className="footer-section">
      <div className="container-fluid my-5 py-5">
        <footer className="footer-aria">
          <div className="d-flex justify-content-center">
            <div className="footer-image">
              <img src={footer_banner} alt="" />
            </div>
            <div className="footer-text ">
              <p className="phone-style-bg rounded rounded-circle">
                <BsFillTelephoneFill
                  size={40}
                  color={"#fd8c13"}
                  className="phone-style rounded-circle"
                />
              </p>
              <div className="call-style rounded">
                <h6 className="call-us">Call us to make order now</h6>
                <h4>+8801861594793</h4>
              </div>
            </div>
          </div>

          <div className="barand-logo py-3 my-3">
            <img
              className="img-fluid image-size-fix"
              src={brandLogo}
              alt=""
              width="92px"
              height="82px"
            />

            <p className="text-white">
              Etiam consequat sem ullamcorper, euismod metus sit amet, tristique
              justo. Vestibulum <br /> mattis, nisi ut faucibus commodo, risus
              ex commodo.
            </p>

            <div className="social-icon ">
              <Nav className="text-dark d-flex justify-content-center ">
                <Nav.Link href="#features">
                  <BsFacebook color={"#fd8c13"} />
                </Nav.Link>
                <Nav.Link href="#pricing">
                  <BsTwitter color={"#fd8c13"} />
                </Nav.Link>
                <Nav.Link href="#pricing">
                  <BsLinkedin color={"#fd8c13"} />
                </Nav.Link>
                <Nav.Link href="#pricing">
                  <BsInstagram color={"#fd8c13"} />
                </Nav.Link>
              </Nav>

              <div className="dash-line"></div>
              <p className="text-white py-3">
                Riazalmahmud &copy; All Rights Reserved - 2022
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
