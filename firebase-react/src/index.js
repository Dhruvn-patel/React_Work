import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Signup from "./components/auth/Signup";
import Signin from "./components/auth/Signin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "auth",
    children: [
      {
        path: "Signup",
        element: <Signup />,
      },
      {
        path: "Signin",
        element: <Signin />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <RouterProvider router={router} />
  </>
);
