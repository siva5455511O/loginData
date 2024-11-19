import React, { useState } from "react";
import { json, useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";

import "./login.css";

function Login() {
  const Navigate = useNavigate();

  const [UserData, SetUserdata] = useState({
    email: "",
    password: "",
  });
  //  console.log(UserData);

  function handel(e) {
    e.preventDefault();
    console.log(UserData);

    if (UserData.email === "sk@gmail.com" && UserData.password === "123") {
      localStorage.setItem("token", JSON.stringify("allowed"));
      setTimeout(() => {
        Navigate("/SecondPage");
        toast.success("🦄 login success!", {
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
    } else {
      console.log(" enter your email & password");
    }
  }

  return (
    <div id="bgimg">
      <form id="box" onSubmit={handel}>
        <br />
        <br />
        <br />
        <br />
        <br />

        <input
          id="input1"
          type="email"
          value={UserData.email}
          placeholder="enter your email"
          onChange={(e) => {
            SetUserdata((UserData) => ({ ...UserData, email: e.target.value }));
          }}
        />
        <br />
        <br />
        <br />
        <input
          id="input1"
          type="password"
          value={UserData.password}
          placeholder="enter your password"
          onChange={(e) => {
            SetUserdata((UserData) => ({
              ...UserData,
              password: e.target.value,
            }));
          }}
        />

        <br />
        <br />
        <br />
        <button id="btn">Login</button>
      </form>
    </div>
  );
}

export default Login;
