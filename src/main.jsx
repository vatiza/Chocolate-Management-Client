import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Chocolate from "./assets/Components/Chocolate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Chocolate></Chocolate>,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
