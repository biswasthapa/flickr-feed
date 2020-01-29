import React from "react";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { mount } from "enzyme";

export default (defaultState = {}) => {
  const mockStore = configureMockStore([thunk]);

  return {
    mountWithProvider: (component, initialState = {}) => {
      const store = mockStore(Object.assign({}, defaultState, initialState));
      return mount(<Provider store={store}>{component}</Provider>);
    }
  };
};
