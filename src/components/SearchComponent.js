import React from "react";
import cx from "classnames";

import "./SearchComponent.css";

export const SearchComponent = ({ displayTop, onChange, onClick }) => {
  return (
    <div className={cx("search-container", { "search-top": displayTop })}>
      <h1>
        Search <b>Flickr!</b>
      </h1>
      <input
        type="text"
        className="form-control search-text"
        onChange={onChange}
        placeholder="Search using image tags..."
      />
      <span className="input-group-btn">
        <button
          className="btn btn-primary search-btn"
          type="submit"
          onClick={onClick}
        >
          Go!
        </button>
      </span>
    </div>
  );
};

export default SearchComponent;
