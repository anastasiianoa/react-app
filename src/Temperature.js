import React from "react";

export default function Temperature() {
  return (
    <h1 className="head">
      <span id="number">20</span>
      <a href="/" className="active" id="celsius-option">
        °C
      </a>
      <span className="slash">/</span>
      <a href="/" id="fahrenheit-option">
        °F
      </a>
    </h1>
  );
}
