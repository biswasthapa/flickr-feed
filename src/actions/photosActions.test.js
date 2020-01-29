import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { fetchPictures } from "./photosActions";
import { flickrTestData } from "../testUtils/testData";

import {
  FETCH_PICTURES_START,
  FETCH_PICTURES_SUCCESS,
  FETCH_PICTURES_FAILURE
} from "../constants";

import flickrUtils from "../utils/flickrUtils";

jest.mock("../utils/flickrUtils");

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const createStore = () =>
  mockStore({ flickrPhotos: { tags: "", photos: [], loading: false } });

describe("photoActions", () => {
  let store;
  const tags = "tag";
  beforeEach(() => {
    store = createStore();
    jest.clearAllMocks();
  });

  describe("/GET fetchPictures", () => {
    it("successfully calls correct actions on success", async () => {
      const expectedActions = [
        {
          type: FETCH_PICTURES_START,
          tags
        },
        {
          type: FETCH_PICTURES_SUCCESS,
          photos: flickrTestData.items
        }
      ];

      flickrUtils.getFlickrPictures.mockImplementation(() => {
        return Promise.resolve({
          status: 200,
          json: () => {
            return Promise.resolve(flickrTestData);
          }
        });
      });

      await store.dispatch(fetchPictures(tags));
      expect(store.getActions()).toEqual(expectedActions);
    });

    it("calls failure action on failure", async () => {
      const expectedActions = [
        {
          type: FETCH_PICTURES_START,
          tags
        },
        {
          type: FETCH_PICTURES_FAILURE
        }
      ];
      const store = createStore();

      flickrUtils.getFlickrPictures.mockImplementation(() => {
        return Promise.resolve({
          status: 500,
          json: () => {
            return Promise.resolve({ error: "Some error" });
          }
        });
      });

      await store.dispatch(fetchPictures(tags));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
