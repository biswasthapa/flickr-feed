import React from "react";
import { SearchComponent } from "./SearchComponent";
import { shallow } from "enzyme";

describe("Search Component", () => {
  const defaultProps = {
    displayTop: false,
    onChange: jest.fn(),
    onClick: jest.fn()
  };

  it("should render", () => {
    const wrapper = shallow(<SearchComponent {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render search component at middle of page if displayTop is false", () => {
    const wrapper = shallow(<SearchComponent {...defaultProps} />);
    expect(wrapper.find("div.search-container")).toExist();
    expect(wrapper.find("div.search-container.search-top")).not.toExist();
  });

  it("should render search component at top of page if displayTop is true", () => {
    const props = { ...defaultProps, displayTop: true };
    const wrapper = shallow(<SearchComponent {...props} />);
    expect(wrapper.find("div.search-container.search-top")).toExist();
  });

  it("calls onChange function when someone starts typing in search input", () => {
    const wrapper = shallow(<SearchComponent {...defaultProps} />);
    wrapper
      .find("input.form-control.search-text")
      .simulate("change", { target: { value: "sydney" } });
    expect(defaultProps.onChange).toBeCalledTimes(1);
  });

  it("calls onClick function when someone submits the search", () => {
    const wrapper = shallow(<SearchComponent {...defaultProps} />);
    wrapper
      .find("input.form-control.search-text")
      .simulate("change", { target: { value: "sydney" } });
    wrapper.find("button.btn.btn-primary.search-btn").simulate("click");
    expect(defaultProps.onClick).toBeCalledTimes(1);
  });
});
