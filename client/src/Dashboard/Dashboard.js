import React, { Component } from "react";
import Display from "../Display/Display";

export default class Dashboard extends Component {
  state = {
    strike: 0,
    ball: 0,
    foul: 0,
    hit: 0
  };
  strikeAction = ev => {
    console.log(ev);
    this.setState({
      ...this.state,
      strike:
        this.state.strike < 2
          ? this.state.strike + 1
          : (this.state.strike = 0)
          ? this.state.strike === 3
          : (this.state.ball = 0)
    });
  };
  ballAction = ev => {
    console.log(ev);
    this.setState({
      ...this.state,
      ball:
        this.state.ball < 3
          ? this.state.ball + 1
          : (this.state.ball = 0)
          ? this.state.ball === 4
          : (this.state.strike = 0)
    });
  };
  foulAction = ev => {
    console.log(ev);
    this.setState({
      ...this.state,
      strike:
        this.state.strike < 2 ? this.state.strike + 1 : (this.state.strike = 2)
    });
  };
  hitAction = ev => {
    console.log(ev);
    this.setState({
      ...this.state,
      ball: 0,
      strike: 0
    });
  };

  render() {
    return (
      <div>
        <Display
          strike={this.state.strike}
          ball={this.state.ball}
          foul={this.state.foul}
          hit={this.state.hit}
        />
        {/* <div>
          <h3 style={{ color: "teal" }}>Display</h3>
          <div>Balls:{this.state.ball}</div>
          <div style={{ marginBottom: "15%" }}>Strikes:{this.state.strike}</div>
        </div> */}
        <h3 style={{ color: "blue" }}>Dashboard</h3>
        <button onClick={this.strikeAction}>Strike</button>
        <button onClick={this.ballAction}>Ball</button>
        <button onClick={this.foulAction}>Foul</button>
        <button onClick={this.hitAction}>Hit</button>
      </div>
    );
  }
}
