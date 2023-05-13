import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./icons.js";
import Untitled from "./screens/Untitled";
import Untitled1 from "./screens/Untitled1";
import Untitled2 from "./screens/Untitled2";
import "./style.css";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Untitled} />
      <Route path="/Untitled/" exact component={Untitled} />
      <Route path="/Untitled1/" exact component={Untitled1} />
      <Route path="/Untitled2/" exact component={Untitled2} />
    </Router>
  );
}

export default App;
