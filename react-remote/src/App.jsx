import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Sidebar from "./Components/Sidebar";

const App = () => (
  <div className="flex h-screen mt-10 mx-auto max-w-6xl">
   <Sidebar title={"React Sidebar"} color="red"/>
      <div className="w-full text-3xl m-12 text-center">
          <div>APP 1 build with React.js </div>
      </div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
