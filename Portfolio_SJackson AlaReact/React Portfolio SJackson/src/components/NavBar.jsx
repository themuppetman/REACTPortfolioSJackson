import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

export const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="custom_navbar" class="container-xxl" >
      <Container>
        <Navbar.Brand href="#Seth">Seth Jackson</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#TTK">Things To Know</Nav.Link>
            <Nav.Link href="#Portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#Contact">Connect</Nav.Link>
            <Nav.Link href="#Resume">Resume</Nav.Link>
          </Nav>
          {/* <span className="navbar-text">
            <div className="social-links">
              <a href="#"><img src={} alt="" /></a>
              <a href="#"><img src={} alt="" /></a>
              <a href="#"><img src={} alt="" /></a>
            </div>
          </span> */}
      </Container>
    </Navbar>
  );
}

export default NavBar;
