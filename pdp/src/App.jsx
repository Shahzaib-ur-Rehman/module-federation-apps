import React from "react";
import ReactDOM from "react-dom";
import 'remixicon/fonts/remixicon.css'
import "./index.scss";

import Header from "home/Header";
import Footer from "home/Footer";
import PDPContent from "./PDPContent";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/products/:id",
    element: (
      <div className="my-10">
        <PDPContent />
      </div>
    ),
  },
]);
const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header />
    <main>
    <RouterProvider router={router} />
    </main>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
