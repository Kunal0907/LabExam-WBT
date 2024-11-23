import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShowArticle from "./components/ShowArticle";
import AddArticle from "./components/AddArticle";
import UpdateArticle from "./components/UpdateArticle";
import App from "./components/App";

const projectRoute = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "showarticles",
        element: <ShowArticle />,
      },
      {
        path: "addarticles",
        element: <AddArticle />,
      },
      {
        path: "updatearticles",
        element: <UpdateArticle />,
      },
    ],
  },
]);

export default projectRoute;
