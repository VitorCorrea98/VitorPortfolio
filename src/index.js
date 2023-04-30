import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Routes/Home/Home";
import About from "./Routes/About/About";
import ErrorPage from "./error-page";

const container = document.getElementById("root");
const root = createRoot(container);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/about",
        element: <About/>,
      },
    ],
  },
]);

root.render(<RouterProvider router={router} />);