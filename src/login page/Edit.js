import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useNavigate, useParams } from "react-router-dom";
import { GetUsersData, UpdateUserData, UpdateUsersData } from "./Url"; // Assuming URLs are in a file
import { Bounce, toast } from "react-toastify";

function Edit() {
  const { id } = useParams(); // Get the user id from URL params
  const navigate = useNavigate(); // Initialize navigation
  const [UsersData, SetUsersData] = useState({
    Name: "",
    FatherName: "",
    Number: "",
    Address: "",
    City: "",
    State: "",
  });

  // Fetch user data from backend
  function GetUserData(id) {
    axios.get(`${GetUsersData}/${id}`).then((res) => {
      SetUsersData(res.data); // Assuming res.data contains the user object
    });
  }

  // Update the user data on the backend
  function handleSubmit(e) {
    e.preventDefault(); // Prevent the default form submission behavior
    axios
      .put(`${UpdateUsersData}/${id}`, UsersData)
      .then((res) => {
        setTimeout(() => {
        console.log( res.data);
          navigate("/SecondPage");
          toast.success('🦄  update Data successfully!', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
            });
        }, 1000);
       
      })
      .catch((error) => {
        console.error("There was an error updating the user!", error);
      });
  }

  useEffect(() => {
    GetUserData(id); // Fetch user data when the component loads
  }, [id]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={UsersData.Name}
              onChange={(e) => {
                SetUsersData({ ...UsersData, Name: e.target.value });
              }}
              placeholder="Enter your name"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Father Name</Form.Label>
            <Form.Control
              type="text"
              value={UsersData.FatherName}
              placeholder="Enter your father name"
              onChange={(e) => {
                SetUsersData({ ...UsersData, FatherName: e.target.value });
              }}
            />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
            <Form.Label>Number</Form.Label>
            <Form.Control
              type="number"
              value={UsersData.Number}
              onChange={(e) => {
                SetUsersData({ ...UsersData, Number: e.target.value });
              }}
              placeholder="Enter your number"
            />
          </Form.Group>

          <Form.Group as={Col} className="mb-3" controlId="formGridAddress2">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              value={UsersData.Address}
              onChange={(e) => {
                SetUsersData({ ...UsersData, Address: e.target.value });
              }}
              placeholder="Apartment, studio, or floor"
            />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Select
              value={UsersData.City}
              onChange={(e) => {
                SetUsersData({ ...UsersData, City: e.target.value });
              }}
            >
              <option>Choose...</option>
              <option>kovai</option>
              <option>Dharmapuri</option>
              <option>Selam</option>
              <option>Chennai</option>
              <option>Pollachi</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Select
              value={UsersData.State}
              onChange={(e) => {
                SetUsersData({ ...UsersData, State: e.target.value });
              }}
            >
              <option>Choose...</option>
              <option>TamilNadu</option>
              <option>Andhra</option>
              <option>Kerala</option>
              <option>Jammu</option>
              <option>Karnataka</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Update
        </Button>
      </form>
    </div>
  );
}

export default Edit;
