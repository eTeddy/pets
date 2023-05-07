import React from "react";
import { createRoot } from "react-dom/client";
import {
  createHashRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
  createRoutesFromElements,
} from "react-router-dom";
import Products from "./routes/Products";
import Home from "./routes/Home";
import Reports from "./routes/Eye";
import Navbar from "./components/Navbar";
import "./App.css";

/* Pages */
import Cat from "./routes/Cat";
import Dog from "./routes/Dog";
import Fox from "./routes/Fox";
import CatFact from "./routes/CatFact";
import Eye from "./routes/Eye";
import Anime from "./routes/Anime";

const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route element={<AppLayout />}>
//       <Route path="/" element={<Home />} />
//       <Route path="/products" element={<Products />} />
//       <Route path="/reports" element={<Reports />} />
//     </Route>
//   )
// );

const router = createHashRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "anime",
        element: <Anime />,
      },
      {
        path: "cat",
        element: <Cat />,
      },
      {
        path: "dog",
        element: <Dog />,
      },
      {
        path: "fox",
        element: <Fox />,
      },
      {
        path: "cat_fact",
        element: <CatFact />,
      },
      {
        path: "eye",
        element: <Eye />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);