import React, { Component } from "react";
import { connect } from "react-redux";
import { get } from "lodash";
import ClipLoader from "react-spinners/ClipLoader";
import { fetchPictures } from "../actions/photosActions";
import { Pictures } from "../components/Pictures";
import { SearchComponent } from "../components/SearchComponent";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: ""
    };
  }
  async searchFlickr(e, tags) {
    e.preventDefault();
    if (tags !== "") {
      await this.props.fetchPictures(tags);
    }
  }
  updateSearchText(newValue) {
    this.setState({ tags: newValue });
  }
  render() {
    return (
      <div className="container">
        <form>
          <SearchComponent
            displayTop={this.props.tags.length}
            onChange={e => this.updateSearchText(e.target.value)}
            onClick={e => this.searchFlickr(e, this.state.tags)}
          />
        </form>
        {this.props.photos.length > 0 && (
          <Pictures photos={this.props.photos} />
        )}
        {this.props.loading && (
          <div className="spinner-loading">
            <ClipLoader
              size={100}
              color={"#0063dc"}
              loading={this.props.loading}
            />
          </div>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = { fetchPictures };

const mapStateToProps = store => {
  return {
    tags: get(store, "flickrPhotos.tags", ""),
    photos: get(store, "flickrPhotos.photos", []),
    loading: get(store, "flickrPhotos.loading", false)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
