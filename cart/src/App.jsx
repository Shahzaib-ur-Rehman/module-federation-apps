import React from "react";
import ReactDOM from "react-dom";
import 'remixicon/fonts/remixicon.css'
import "./index.scss"; 
import CartContent from "./CartContent";
const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    {/* <Header /> */}
    <main>
      <div className="my-10">
        <CartContent />
      </div>
    </main>
    {/* <Footer /> */}
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
