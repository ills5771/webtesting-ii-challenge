import React from "react";

import Dashboard from "./Dashboard";

import { render, fireEvent } from "react-testing-library";

describe("<Dashboard/>", () => {
  it("renders Dashboard header", () => {
    const { getByText } = render(<Dashboard />);

    getByText(/dashboard/i);
  });

  it("adds ball to display", () => {
    const { getByText } = render(<Dashboard />);

    const button = getByText(/ball/i);

    fireEvent.click(button);
    // getByText(/ball/i);
  });

  it("adds strike to display", () => {
    const { getByText } = render(<Dashboard />);

    const button = getByText(/strike/i);

    fireEvent.click(button);
    // getByText(/strike/i);
  });
  it("records foul", () => {
    const { getByText } = render(<Dashboard />);

    const button = getByText(/foul/i);

    fireEvent.click(button);
    // getByText(/foul/i);
  });

  it("records hit", () => {
    const { getByText } = render(<Dashboard />);

    const button = getByText(/hit/i);

    fireEvent.click(button);
    // getByText(/hit/i);
  });
});
