import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

export const NavBar = () => {

    return (
        <NavBar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <NavBar.Brand href="#Seth">Seth Jackson</NavBar.Brand>
          <NavBar.Toggle aria-controls="responsive-navbar-nav" />
          <NavBar.Collapse id="responsive-navbar-nav">
            <NavBar className="me-auto">
              <Nav.Link href="#TTK">Things To Know</Nav.Link>
              <Nav.Link href="#Portfolio">Portfolio</Nav.Link>
              <Nav.Link href="#Contact">Connect</Nav.Link>
              <Nav.Link href="#Resume">Resume</Nav.Link>
            </NavBar>
            {/* <span className="navbar-text">
              <div className="social-links">
                <a href="#"><img src={} alt="" /></a>
                <a href="#"><img src={} alt="" /></a>
                <a href="#"><img src={} alt="" /></a>
              </div>
            </span> */}
          </NavBar.Collapse>
        </Container>
      </NavBar>
    );
}

export default NavBar;
