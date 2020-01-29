import React from "react";
import { Pictures } from "./Pictures";
import { shallow } from "enzyme";
import { flickrTestData } from "../testUtils/testData";

describe("Pictures List", () => {
  const defaultProps = {
    photos: [],
    loading: false
  };
  it("should not render photos if not present", () => {
    const wrapper = shallow(<Pictures {...defaultProps} />);
    expect(
      wrapper.find("div.card-columns.photos-list").children()
    ).not.toExist();
  });

  it("should render photos if present", () => {
    const props = { ...defaultProps, photos: flickrTestData.items };
    const wrapper = shallow(<Pictures {...props} />);
    const children = wrapper.find("div.card-columns.photos-list").children();
    expect(children).toExist();
    expect(children.length).toEqual(flickrTestData.items.length);
  });
});
