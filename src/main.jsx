import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Chocolate from "./assets/Components/Chocolate";
import AddNewChocolate from "./assets/Components/AddNewChocolate";
import Main from "./assets/Components/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Chocolate></Chocolate>,
        loader: () => fetch("http://localhost:5000/chocolate"),
      },
      {
        path: "/addnew",
        element: <AddNewChocolate></AddNewChocolate>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
