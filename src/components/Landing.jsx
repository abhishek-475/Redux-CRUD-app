import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Landing() {
  return (
    <>
      <div className="container-fluid mb-3">
        <Row>
          <Col className="p-5" sm={12} md={7}>
            <h2>
              <i className="fa-solid fa-users" /> Employee Management App
            </h2>
            <p style={{ textAlign: "justify" }}>
              An Employee Management App is a simple and efficient tool designed
              to manage employee information. It allows users to add, edit, and
              delete employee records such as name, email, and phone number. The
              app also provides a responsive interface, ensuring a seamless
              experience across devices, including mobile. With built-in
              features like user-friendly forms and table views, it streamlines
              the process of maintaining employee data, making it ideal for
              businesses of all sizes.
            </p>
            <div className="d-grid">
              <Link to={"/home"} className="btn btn-success">
                Let's Go
              </Link>
            </div>
          </Col>
          <Col className="py-4" sm={12} md={5}>
            <img
              src="https://img.freepik.com/premium-vector/vector-professional-icon-business-illustration-line-symbol-people-management-career-set-c_1013341-67135.jpg"
              alt=""
              className="img-fluid rounded-4"
            />
          </Col>
        </Row>
      </div>
      {/* <div className="container-fluid mt-5 bg-secondary text-light  ">
        <h3 className="m-3  text-center text-dark ">Features</h3>
        <div className="p-4 d-flex justify-content-around">
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Upload Youtube Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Add Categories</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Watch History</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div> */}
    </>
  );
}

export default Landing;
