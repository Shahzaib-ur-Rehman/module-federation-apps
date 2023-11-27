import React from "react";
import ReactDOM from "react-dom";
import 'remixicon/fonts/remixicon.css'
import "./index.scss";
import Header from "./Header";
import Footer from "./Footer";
import HomeContent from "./HomeContent";
import MainLayout from "./MainLayout";
const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header />
    <main>
      <div className="my-10">
        <HomeContent />
      </div>
    </main>
    <Footer />
  </div>
);
ReactDOM.render(<MainLayout />, document.getElementById("app"));
