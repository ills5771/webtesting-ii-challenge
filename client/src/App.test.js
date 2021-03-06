import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";
import App from "./App";

describe("<App />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders App", () => {
    render(<App />);
  });

  it("renders Go Dodgers!", () => {
    const { getByText } = render(<App />);

    getByText(/go dodgers!/i);
  });
});
