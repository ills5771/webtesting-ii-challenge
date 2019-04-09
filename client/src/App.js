import React, { Component } from "react";
import Display from "./Display/Display";
import Dashboard from "./Dashboard/Dashboard";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <h2>Welcome</h2>
        <Display />
        <Dashboard />
      </>
    );
  }
}

export default App;
