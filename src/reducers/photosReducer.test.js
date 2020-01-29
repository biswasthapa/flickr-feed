import photosReducer from "./photosReducer";
import {
  fetchPicturesStart,
  fetchPicturesSuccess,
  fetchPicturesFailure
} from "../actions/photosActions";
import { flickrTestData } from "../testUtils/testData";

describe("photosReducer", () => {
  const tags = "tag";
  describe("FETCH_PICTURES_START", () => {
    it("adds tags to state and sets loading true", () => {
      const initialState = {
        loading: false,
        tags: "",
        photos: []
      };
      const expectedState = {
        loading: true,
        tags,
        photos: []
      };

      expect(photosReducer(initialState, fetchPicturesStart(tags))).toEqual(
        expectedState
      );
    });
  });

  describe("FETCH_PICTURES_SUCCESS", () => {
    it("updates photos and sets loading false", () => {
      const initialState = {
        loading: true,
        tags,
        photos: []
      };
      const expectedState = {
        loading: false,
        tags,
        photos: flickrTestData.items
      };

      expect(
        photosReducer(initialState, fetchPicturesSuccess(flickrTestData.items))
      ).toEqual(expectedState);
    });
  });

  describe("FETCH_PICTURES_FAILURE", () => {
    it("updates photos and sets loading false", () => {
      const initialState = {
        loading: true,
        tags,
        photos: []
      };
      const expectedState = {
        loading: false,
        tags,
        photos: []
      };

      expect(photosReducer(initialState, fetchPicturesFailure())).toEqual(
        expectedState
      );
    });
  });
});
