import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import "./config";
import { shallow } from "enzyme";
let appComponent = shallow(<App />);

describe("Render App Component", () => {
  it("Match App Component Snapshot", () => {
    expect(appComponent).toMatchSnapshot();
  });

  it("App Component Text", () => {
    expect(appComponent.find(".Apptext").text()).toBe("App Component Changed");
  });
});
