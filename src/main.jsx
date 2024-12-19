import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Login from "./Login";
import ErrorPage from "./ErrorPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/callback",
    element:
    <>
    <h1>1</h1>
    <Login />
    </>,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);