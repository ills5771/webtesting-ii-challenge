import React from "react";

import { render } from "react-testing-library";

import Display from "./Display";

describe("<Display />", () => {
  it("renders header and divs", () => {
    const { getByText } = render(<Display />);

    getByText(/display/i);
    getByText(/balls:/i);
    getByText(/strikes:/i);
  });
});
