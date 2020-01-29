import React from "react";
import strftime from "strftime";
import { Icon } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import "./Pictures.css";

export const Pictures = ({ photos }) => (
  <div className="row">
    <div className="card-columns photos-list">
      {photos.map(photo => (
        <div key={photo.media.m} className="card">
          <div className="card-header bg-light">
            <small>
              <Icon icon={IconNames.USER} />
              &nbsp;
              {photo.author}
            </small>
          </div>
          <a href={`${photo.link}`} target="_blank" rel="noopener noreferrer">
            <img
              className="card-img-top img-fluid"
              src={photo.media.m}
              alt={photo.title}
            />
          </a>
          <div className="card-body">
            <p className="card-text">
              <small className="text-tag">
                #{photo.tags.split(" ").join(" #")}
              </small>
            </p>
          </div>
          <div className="card-footer">
            <small className="text-muted">
              Added on {strftime("%Y-%m-%d", new Date(photo.date_taken))}
            </small>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Pictures;
