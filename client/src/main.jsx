import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import AdminLoginComponent from "./AdminLoginComponent.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AdminLoginComponent />
    <App />
  </React.StrictMode>
);
