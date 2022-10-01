import React from "react";

export default function Humidity() {
  return (
    <div className="humidity">
      <span id="humidity-percent">2</span>%
      <div className="picture">
        <img src="images/icons/humidity.svg" alt="true" />
      </div>
    </div>
  );
}
