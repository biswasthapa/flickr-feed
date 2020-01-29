import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FETCH_PICTURES_START,
  FETCH_PICTURES_SUCCESS,
  FETCH_PICTURES_FAILURE
} from "../constants";
import flickrUtils from "../utils/flickrUtils";

export const fetchPicturesStart = tags => ({
  type: FETCH_PICTURES_START,
  tags
});

export const fetchPicturesSuccess = res => ({
  type: FETCH_PICTURES_SUCCESS,
  photos: res
});

export const fetchPicturesFailure = () => ({
  type: FETCH_PICTURES_FAILURE
});

export function fetchPictures(tags) {
  return async dispatch => {
    dispatch(fetchPicturesStart(tags));
    try {
      await flickrUtils
        .getFlickrPictures(tags)
        .then(function(response) {
          return response.json();
        })
        .then(function(json) {
          if (!json.items.length) {
            toast.warning("No images found for the search criteria", {
              position: toast.POSITION.TOP_CENTER
            });
          }
          dispatch(fetchPicturesSuccess(json.items));
        })
        .catch(function(ex) {
          toast.error("Error getting data from flickr!", {
            position: toast.POSITION.TOP_CENTER
          });
          dispatch(fetchPicturesFailure());
        });
    } catch (err) {
      toast.error("Internal Server Error! Please Contact Administrator", {
        position: toast.POSITION.TOP_CENTER
      });
      dispatch(fetchPicturesFailure());
    }
  };
}
