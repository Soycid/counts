import React, { useState } from "react";

//import Jumbotron from 'react-bootstrap/Jumbotron';
//import Toast from 'react-bootstrap/Toast';
//import Container from 'react-bootstrap/Container';
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavItem from "react-bootstrap/NavItem";


import Container from "react-bootstrap/Container";

const HeaderNav = () => (
  <div className="Small-Header">
    <Navbar sticky="top">
      <Container>
        <Navbar.Brand href="https://github.com/ketanjog/graphiti">
          <div className="white_text">counts 📝 </div>
        </Navbar.Brand>
        <Nav>
	    <NavItem eventKey={1} href="#">
		  Link
		</NavItem>
		
		</Nav>
		</Container>
    </Navbar>
  </div>
);
export default HeaderNav;
