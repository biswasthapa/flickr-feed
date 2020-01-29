import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Home from "./Home";
import { Pictures } from "../components/Pictures";
import TestProviderSupport from "../testUtils/testRender";
import { flickrTestData } from "../testUtils/testData";
const { mountWithProvider } = TestProviderSupport();

describe("Home Container", () => {
  const state = {
    flickrPhotos: { tags: "", photos: [], loading: false }
  };

  it("should render", () => {
    const wrapper = mountWithProvider(<Home />, state);
    expect(wrapper).toMatchSnapshot();
  });

  it("should not render Pictures component if photos list is empty", () => {
    const wrapper = mountWithProvider(<Home />, state);
    expect(wrapper.find(Pictures)).not.toExist();
  });

  it("should render Pictures component if photos list is not empty", () => {
    const updatedState = {
      ...state,
      flickrPhotos: {
        ...state.flickrPhotos,
        photos: flickrTestData.items
      }
    };
    const wrapper = mountWithProvider(<Home />, updatedState);
    expect(wrapper.find(Pictures)).toExist();
  });

  it("should not render the spinner if loading is false", () => {
    const wrapper = mountWithProvider(<Home />, state);
    expect(wrapper.find(ClipLoader)).not.toExist();
  });

  it("should render the spinner if loading is true", () => {
    const updatedState = {
      ...state,
      flickrPhotos: {
        ...state.flickrPhotos,
        loading: true
      }
    };
    const wrapper = mountWithProvider(<Home />, updatedState);
    expect(wrapper.find(ClipLoader)).toExist();
  });
});
