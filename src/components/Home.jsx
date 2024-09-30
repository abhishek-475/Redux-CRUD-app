import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Users from "./Users";
import { addUser, updateUser } from "../redux/employeSlice";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const [show, setShow] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (!data.name || !data.email || !data.phone) {
      toast.error("All fields are required.");
      return;
    }

    if (editMode) {
      dispatch(updateUser(data));
    } else {
      dispatch(addUser(data));
    }
    setShow(false);
  };

  const handleEdit = (employee) => {
    setData(employee);
    setEditMode(true);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    setEditMode(false);
    setData({ name: "", email: "", phone: "" });
  };

  const handleShow = () => {
    
    setEditMode(false);
    setData({ name: "", email: "", phone: "" });
    setShow(true);
  };

  return (
    <>
      <div className="container-fluid  mb-3">
        <div className="d-flex justify-content-center align-items-center">
          <button className="btn btn-dark " onClick={handleShow}>
            Add Employee +
          </button>
        </div>

        <Users handleEdit={handleEdit} />
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}>
        <Modal.Header closeButton className="bg-dark text-light ">
          <Modal.Title>
            {editMode ? "Edit Employee" : "Add Employee"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark">
          <FloatingLabel
            controlId="floatingInput"
            label="Name"
            className="mb-3">
            <Form.Control
              type="text"
              placeholder="JohnDoe"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3">
            <Form.Control
              type="email"
              placeholder="name@example.com"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              disabled={editMode}
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput" label="Phone Number">
            <Form.Control
              type="text"
              placeholder="Phone"
              value={data.phone}
              onChange={(e) => setData({ ...data, phone: e.target.value })}
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer className="bg-dark">
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleSubmit}>
            {editMode ? "Update" : "Save"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Home;
