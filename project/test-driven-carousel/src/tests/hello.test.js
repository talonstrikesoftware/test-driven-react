import React from "react";

describe("JSX", () => {
  it("calls React.createElment", () => {
    const createElementSpy = jest.spyOn(React, "createElement");
    <h1>Hello, JSX!</h1>;
    expect(createElementSpy).toHaveBeenCalledWith("h1", null, "Hello, JSX!");
  });
});
