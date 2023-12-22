import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FaSearch, FaBell, FaUser } from "react-icons/fa";
import logo from "../assets/netflix_logo.png";

const MainNavBar = () => {
  return (
    <div>
      <title>Netflix</title>
      <div>
        <Navbar className="navbar navbar-expand-lg navbar-dark">
          <Navbar.Brand>
            <img src={logo} alt="Netflix Logo" style={{ width: "100px", height: "55px" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarSupportedContent" aria-label="Toggle navigation" />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#tv">TV Shows</Nav.Link>
              <Nav.Link href="#movies">Movies</Nav.Link>
              <Nav.Link href="#recently-added">Recently Added</Nav.Link>
              <Nav.Link href="#my-list">My List</Nav.Link>
            </Nav>
            <FaSearch className="icons ms-auto" />
            <div id="kids">KIDS</div>
            <FaBell className="icons" />
            <FaUser className="icons" />
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default MainNavBar;
