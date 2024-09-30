import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="container-fluid bg-dark text-white p-4">
        <Row>
          <Col sm={12} md={6}>
            <h2>Employee Management</h2>
            <p>
            An Employee Management App is a simple and efficient tool designed to manage employee information. It allows users to add, edit, and delete employee records such as name, email, and phone number. 
            </p>
          </Col>
          <Col sm={12} md={2}>
            <h2>Links</h2>
            <div className="d-flex flex-column">

            <Link to={'/'} style={{color:"teal" , textDecoration:'none'}} >Home</Link>
            <Link to={'/home'} style={{color:"teal" , textDecoration:'none'}} >Dashboard</Link>
            </div>
          </Col>
          <Col sm={12} md={4}>
            <h2>Feedback</h2>
            <textarea className="form-control mb-3" name="" id=""></textarea>
            <button className="btn btn-success">Submit</button>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Footer;
