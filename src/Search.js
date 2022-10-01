import React from "react";

export default function Search() {
  return (
    <div className="Search">
      <form className="search-form" id="search-form">
        <input
          type="search"
          placeholder="Type a city..."
          className="form-control form-control-sm"
          id="search-input"
          autoComplete="off"
        />

        <input type="submit" value="Search" className="btn btn-outline-light" />
        <i className="bi bi-geo-alt location-button" id="location-button"></i>
      </form>
    </div>
  );
}
