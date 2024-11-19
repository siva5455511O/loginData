import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import {
  DeletUserData,
  DeletUserDataUrl,
  GetUserData,
  GetUsersData,
  PostUserData,
} from "./Url";
import { Alert } from "react-bootstrap";
import { Bounce, toast } from "react-toastify";
import Table from "react-bootstrap/Table";

import { FaUserEdit } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

import "./login.css";
import { useNavigate } from "react-router-dom";
import { CiDeliveryTruck } from "react-icons/ci";

function SecondPage() {
  //  navicate to next page

  const Navigate = useNavigate();

  // refresh data

  const [RefData, SetRefData] = useState(true);

  //  Userdata collect

  const [UserData, SetUserdata] = useState({
    Name: "",
    FatherName: "",
    Number: "",
    Address: "",
    City: "",
    State: "",
  });

  // console.log(UserData);

  function handel(e) {
    e.preventDefault();

    if (
      UserData.Name === "" ||
      UserData.FatherName === "" ||
      UserData.Number === "" ||
      UserData.Address === "" ||
      UserData.City === "" ||
      UserData.State === ""
    ) {
      alert("Please Fill The From");
    } else {
      // post userdata in mockapi
      axios
        .post(PostUserData, UserData)
        .then((res) => {
          // console.log(res);
          toast.success("🦄 Data Added Succesfully!", {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
          });

          SetRefData(!RefData);
        })
        .catch((err) => {
          alert("error");
        });
    }
    //  from emty method

    SetUserdata((UserData) => ({
      ...UserData,
      Name: "",
      FatherName: "",
      Number: "",
      Address: "",
      City: "",
      State: "",
    }));
  }

  const [UserDataCollect, SetUserDataCollect] = useState([]);

  function GetApiData() {
    axios
      .get(GetUsersData)
      .then((res) => {
        // console.log(res.data);
        SetUserDataCollect(res.data);
        SetRefData(!RefData);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // refresh data

  useEffect(() => {
    GetApiData();
  }, [RefData]);

  // delete userdata

  function Del(id) {
    console.log(id);

    axios
      .delete(`${DeletUserData}/${id}`)
      .then((res) => {
        alert("Data delete succesfully");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Edit function

  function Editfun(id) {
    Navigate(`/Edit/${id}`);
  }

  // singel User data view

  function Status_fun(id) {
    Navigate(`/Status/${id}`);
  }

  return (
    <>
      <div>
        <div id="bgimg1">
          <Form>
            <div id="frm">
              <div id="formcontrol">
                <Row className="mb-3">
                  <Form.Group controlId="formGridEmail">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control
                      type="text"
                      value={UserData.Name}
                      placeholder="Enter your name"
                      onChange={(e) => {
                        SetUserdata((UserData) => ({
                          ...UserData,
                          Name: e.target.value,
                        }));
                      }}
                    />
                  </Form.Group>

                  <Form.Group controlId="formGridPassword">
                    <Form.Label>Father Name:</Form.Label>
                    <Form.Control
                      type="text"
                      value={UserData.FatherName}
                      placeholder="Enter your father name"
                      onChange={(e) => {
                        SetUserdata((UserData) => ({
                          ...UserData,
                          FatherName: e.target.value,
                        }));
                      }}
                    />
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Number:</Form.Label>
                    <Form.Control
                      type="Number"
                      value={UserData.Number}
                      placeholder="Enter your number"
                      onChange={(e) => {
                        SetUserdata((UserData) => ({
                          ...UserData,
                          Number: e.target.value,
                        }));
                      }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Address:</Form.Label>
                    <Form.Control
                      type="text "
                      value={UserData.Address}
                      placeholder="Apartment, studio, or floor"
                      onChange={(e) => {
                        SetUserdata((UserData) => ({
                          ...UserData,
                          Address: e.target.value,
                        }));
                      }}
                    />
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group controlId="formGridState">
                    <Form.Label>City:</Form.Label>
                    <Form.Select
                      defaultValue="Choose..."
                      value={UserData.City}
                      onChange={(e) => {
                        SetUserdata((UserData) => ({
                          ...UserData,
                          City: e.target.value,
                        }));
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
                  <br />
                  <Form.Group controlId="formGridState">
                    <Form.Label>State:</Form.Label>
                    <Form.Select
                      defaultValue="Choose..."
                      value={UserData.State}
                      onChange={(e) => {
                        SetUserdata((UserData) => ({
                          ...UserData,
                          State: e.target.value,
                        }));
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
                <br />
                <div id="btngroup">
                  <Button
                    id="btn1"
                    onClick={handel}
                    variant="primary"
                    type="submit"
                  >
                    submit
                  </Button>

                  <button
                    id="child1"
                    onClick={() => {
                      localStorage.removeItem("token");
                      Navigate("/");
                    }}
                  >
                    logout
                  </button>
                </div>
              </div>
            </div>
            <div>
              <br />
              <br />
              <br />

              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Father Name</th>
                    <th>Number</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>state</th>
                    <th>Functions</th>
                  </tr>
                </thead>
                <tbody>
                  {UserDataCollect &&
                    UserDataCollect?.map((v, i) => {
                      // console.log(v, i);
                      let {
                        Name,
                        FatherName,
                        Number,
                        Address,
                        City,
                        State,
                        id,
                      } = v;
                      return (
                        <tr key={i}>
                          <td>{i + 1}</td>
                          <td>{Name}</td>
                          <td>{FatherName}</td>
                          <td>{Number}</td>
                          <td>{Address}</td>
                          <td>{City}</td>
                          <td>{State}</td>
                          <td>
                            <FaUserEdit
                              onClick={() => {
                                Editfun(id);
                              }}
                            />
                            <FaEye
                              onClick={() => {
                                Status_fun(id);
                              }}
                            />{" "}
                            <AiFillDelete
                              onClick={() => {
                                Del(id);
                              }}
                            />
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </Table>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}

export default SecondPage;
