import React from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';
import '../css/Navbar2.css';

//loading image before the navbar is loaded
const isteLogo = require('../assets/iste.png'); // eslint-disable-line

const Navbar2 = () => {
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark" sticky="top">
        <div className="left-nav">
          
          <Navbar.Brand href="/" className="iste-text" style={{ margin: "7px 30px 7px 15px" }}>
            <Image src={isteLogo} alt="ISTE Logo" style={{width: "50px", height: "50px", marginRight: "10px"}} /> ISTE-RAIT
          </Navbar.Brand>
        </div>
        <div className="right-nav">
          <Nav className='redirects-area'>
            <Nav.Link href='/about' className="nav-redirects-custom">About</Nav.Link>
            <Nav.Link href='/team' className="nav-redirects-custom">Team</Nav.Link> 
            <Nav.Link href='/gallery' className="nav-redirects-custom">Gallery</Nav.Link>
            <Nav.Link href='/blog' className="nav-redirects-custom">Blogs</Nav.Link>
            <Nav.Link href='/events' className="nav-redirects-custom">Events</Nav.Link> 
            <Nav.Link href='/contact' className="nav-redirects-custom contact-us">CONTACT US</Nav.Link>
          </Nav>
        </div>
      </Navbar>
    </>
  )
}


export default Navbar2;