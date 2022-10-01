import React from "react";
import Date from "./Date";
import Temperature from "./Temperature";
import Search from "./Search";

export default function Header() {
  return (
    <div className="Header">
      <div className="row">
        <div className="col-3 time-date">
          <Date />
        </div>
        <div className="col-6">
          <Temperature />
        </div>
        <div className="col-3">
          <Search />
        </div>
      </div>
    </div>
  );
}
