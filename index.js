import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.css";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import projectRoute from "./projectRoute";
import "./css/style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={projectRoute} />);
