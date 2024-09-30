import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
    <div className="container-fluid p-4 ">
      
    <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
          <i className="fa-solid fa-users" />
            {' '}
            Employee Management
          </Navbar.Brand>
        </Container>
      </Navbar>
      </div></>
  )
}

export default Header