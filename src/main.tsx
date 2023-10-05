import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./routes/ErrorPage.tsx";
import Root from "./routes/Root.tsx";
import Products from "./routes/Products.tsx";
import SingleProduct from "./routes/SingleProduct.tsx";
import { getAllProducts, getProduct } from "./lib/loader.ts";
import { HOME_PATH, PRODUCTS_PATH, SIGNIN_PATH } from "./lib/constants.ts";
import RootIndex from "./routes/RootIndex.tsx";
import SignIn from "./routes/SignIn.tsx";

const RAW_PRODUCTS_PATH = PRODUCTS_PATH.replace("/", "");
const RAW_SIGNIN_PATH = SIGNIN_PATH.replace("/", "");

const router = createBrowserRouter([
  {
    path: HOME_PATH,
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <RootIndex /> },
      {
        path: RAW_PRODUCTS_PATH,
        element: <Products />,
        loader: getAllProducts,
      },
      {
        path: `${RAW_PRODUCTS_PATH}/:productID`,
        element: <SingleProduct />,
        loader: getProduct,
      },
      {
        path: `${RAW_SIGNIN_PATH}`,
        element: <SignIn />,
        loader: getProduct,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
