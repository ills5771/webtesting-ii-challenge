import React from "react";

export default function Display(props) {
  return (
    <div>
      <h3 style={{ color: "teal" }}>Display</h3>
      <div>Balls:{props.ball}</div>
      <div style={{ marginBottom: "15%" }}>Strikes:{props.strike}</div>
    </div>
  );
}
