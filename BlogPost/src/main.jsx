import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import About from "./components/pages/About.jsx";
import Contact from "./components/pages/Contact.jsx";
import Home from "./components/pages/Home.jsx";
import FullBlog from "./components/pages/FullBlog.jsx";
import EditBlog from "./components/pages/EditBlog.jsx";
import NotFound from "./components/Notfound.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="blog/:Id" element={<FullBlog />} />
      <Route path="blog/:Id/edit" element={<EditBlog />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
