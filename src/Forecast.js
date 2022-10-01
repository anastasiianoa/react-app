import React from "react";

export default function Forecast(props) {
  return (
    <div className="Forecast">
      <span className="weekday">{props.day}</span>
      <br />
      <img src="images/icons/01d.svg" width="25" alt="" />
      <br />
      {props.celsius}°
      <br />
      {props.fahrenheit}°
    </div>
  );
}
