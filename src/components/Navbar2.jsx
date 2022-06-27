import React from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/Navbar2.css";

//loading image before the navbar is loaded
const isteLogo = require("../assets/iste.png"); // eslint-disable-line

const Navbar2 = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        bg="dark"
        expand="lg"
        variant="dark"
        sticky="top"
      >
        <div className="left-nav">
          <Navbar.Brand
            as={Link}
            to="/"
            className="iste-text"
            style={{ margin: "7px 30px 7px 15px" }}
          >
            <Image
              src={isteLogo}
              alt="ISTE Logo"
              style={{ width: "50px", height: "50px", marginRight: "10px" }}
            />{" "}
            ISTE-RAIT
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* <div className="right-nav"> */}
          <Nav className="redirects-area">
            <Nav.Link as={Link} to="/about" className="nav-redirects-custom">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/team" className="nav-redirects-custom">
              Team
            </Nav.Link>
            <Nav.Link as={Link} to="/gallery" className="nav-redirects-custom">
              Gallery
            </Nav.Link>
            <Nav.Link as={Link} to="/blog" className="nav-redirects-custom">
              Blogs
            </Nav.Link>
            <Nav.Link as={Link} to="/events" className="nav-redirects-custom">
              Events
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              className="nav-redirects-custom contact-us"
            >
              CONTACT US
            </Nav.Link>
          </Nav>
          {/* </div> */}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navbar2;
