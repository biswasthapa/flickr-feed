import {
  FETCH_PICTURES_START,
  FETCH_PICTURES_SUCCESS,
  FETCH_PICTURES_FAILURE
} from "../constants";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_PICTURES_START:
      return {
        ...state,
        loading: true,
        tags: action.tags,
        photos: []
      };
    case FETCH_PICTURES_SUCCESS:
      return {
        ...state,
        loading: false,
        photos: action.photos
      };
    case FETCH_PICTURES_FAILURE:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};
