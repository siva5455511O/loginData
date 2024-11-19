// import React from "react";
// import { json, Navigate, Outlet } from "react-router-dom";

// function Product() {
//   const allowed = JSON.parse(localStorage.getItem("token"));
//   return allowed !== null ? <Outlet /> : <Navigate to="/"  />;
// }

// export default Product;
import React, { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

function Product() {
  const navigate = useNavigate();
  const allowed = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    // Check if token is missing and redirect to login
    if (!allowed) {
      navigate("/", { replace: true });
    } else {
      // Prevent navigation back to the login page
      window.history.pushState(null, null, window.location.href);
      const handleBackButton = (event) => {
        event.preventDefault();
        window.history.pushState(null, null, window.location.href);
      };
      window.addEventListener("popstate", handleBackButton);

      return () => {
        window.removeEventListener("popstate", handleBackButton);
      };
    }
  }, [allowed, navigate]);

  return allowed !== null ? <Outlet /> : <Navigate to="/ replac"e />;
}

export default Product;
