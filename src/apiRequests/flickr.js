import fetchJsonP from "fetch-jsonp";
import queryString from "query-string";
import config from "../config";

const getFlickrPictures = async tags => {
  const query = queryString.stringify({
    tags,
    format: "json"
  });

  const url = `${config.flickr_api.endpoint}${query}`;

  const pictures = await fetchJsonP(url, {
    method: "GET",
    headers: { Accept: "application/json" },
    jsonpCallbackFunction: "jsonFlickrFeed"
  });

  return pictures;
};

export default {
  getFlickrPictures
};
