import React, { Component } from "react";
import Dashboard from "./Dashboard/Dashboard";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <h2 style={{ color: "darkBlue", fontSize: "28px" }}>Go Dodgers!</h2>

        <Dashboard />
      </>
    );
  }
}

export default App;
