import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";

import "./styles.css";

function App() {
  return (
    <div>
      <HomePage />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
