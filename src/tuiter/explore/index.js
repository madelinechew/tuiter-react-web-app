import React from "react";
import PostSummaryList from "../post-summary-list";
import "./index.css";

const ExploreComponent = () => {
  return (
    <>
      <div className="row">
        {/* search field and cog  */}
        <div>
          <div className="d-flex align-items-center">
            <div className="input-group">
              <span className="input-group-text bg-white wd-span-search-bar">
              <i className="bi bi-search"></i>
              </span>
              <input type="text" className="form-control wd-input-search-bar" />
            </div>
            <a className="ms-auto" href="explore-settings.html">
            <i className="bi bi-gear"></i>
            </a>
          </div>
        </div>
      </div>
      <ul className="nav mb-2 nav-tabs">
        <div className="mt-2">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link active" href="for-you.html">
                For You{" "}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="trending.html">
                Trending
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="news.html">
                News
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="sports.html">
                Sports
              </a>
            </li>
            <li className="nav-item d-none d-md-block" >
              <a className="nav-link" href="entertainment.html">
                Entertainment
              </a>
            </li>
          </ul>
        </div>
      </ul>
      {/* image with overlaid text */}
      <div className="wd-image-container">
        <img className="wd-main-image" src="/images/spaceship.png" />
        <b className="wd-image-title wd-bottom-left">SpaceX's Starship</b>
      </div>
      <PostSummaryList />
    </>
  );
};
export default ExploreComponent;
