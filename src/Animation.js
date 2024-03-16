// import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import  './Animation.css';
import d1 from './icons/01d.png';
import n1 from './icons/01n.png';

const Animation= () => {
 
 
  return (
    <>
   {/* <Navbar expand="sm" className="bg-body" variant="outline-success" bg='dark' data-bs-theme='dark'>
      <Container >
        <Navbar.Brand href="/home" ><span className='text-light h2'>S</span><span className='text-success h2'>M</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" type='button' />
        <Navbar.Collapse id="navbarScroll">
          <Nav className='text m-auto'>
            <Nav.Link href="#home" className='f-w nav-space'>Home</Nav.Link>
            <Nav.Link href="#about"  className='f-w nav-space'>About</Nav.Link>
            <Nav.Link href="#skills"  className='f-w nav-space'>Skills</Nav.Link>
            <Nav.Link href="#project"  className='f-w nav-space'>Project</Nav.Link>
            <Nav.Link href="#contact"  className='f-w nav-space'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}
    <Weather images={[d1,n1]}/>
    </>
  );
};

export default Animation;






