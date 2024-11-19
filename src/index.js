import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Login from "./login page/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SecondPage from "./login page/SecondPage";
import Product from "./login page/Product";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Edit from "./login page/Edit";
import Status from "./login page/Status";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route element={<Product />}>
          <Route path="/SecondPage" element={<SecondPage />} />
          <Route path="/Edit/:id" element={<Edit />} />
          <Route path="/Status/:id" element={<Status />} />


        </Route>
      </Routes>

      <ToastContainer/>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
