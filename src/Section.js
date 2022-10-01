import React from "react";
import Humidity from "./Humidity";
import Wind from "./Wind";
import Icon from "./Icon";

export default function Section() {
  return (
    <div className="Section">
      <div className="row">
        <div className="col-4">
          <div className="d-flex justify-content-center">
            <Humidity />
          </div>
        </div>
        <div className="col-4">
          <div className="d-flex justify-content-center">
            <Icon />
          </div>
        </div>
        <div className="col-4">
          <div className="d-flex justify-content-center">
            <Wind />
          </div>
        </div>
      </div>
    </div>
  );
}
