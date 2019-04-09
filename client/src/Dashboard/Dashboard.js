import React, { Component } from "react";

export default class Dashboard extends Component {
  state = {};
  render() {
    return (
      <div>
        <h3 style={{ color: "blue" }}>Dashboard</h3>
        <button>Strike</button>
        <button>Ball</button>
        <button>Foul</button>
        <button>Hit</button>
      </div>
    );
  }
}
