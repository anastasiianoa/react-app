import React from "react";
import Header from "./Header";
import Section from "./Section";
import Forecast from "./Forecast";
import Footer from "./Footer";

import "./index.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="wrapper">
          <div className="weather-app formation shadow p-3 bg-body rounded">
            <Header />
            <br />
            <Section />
            <br />
            <br />
            <h2>Sunny</h2>
            <br />
            <h3>(A WEEK)</h3>
            <hr className="divider" />
            <div className="row">
              <div className="col col-lg-2">
                <h4>Kyiv</h4>
              </div>

              <div className="col col-lg-2">
                <Forecast day="mon" celsius={20} fahrenheit={60} />
              </div>
              <div className="col col-lg-2">
                <Forecast day="tue" celsius={25} fahrenheit={70} />
              </div>
              <div className="col col-lg-2">
                <Forecast day="wed" celsius={22} fahrenheit={66} />
              </div>
              <div className="col col-lg-2">
                <Forecast day="thu" celsius={15} fahrenheit={45} />
              </div>
              <div className="col col-lg-2">
                <Forecast day="fri" celsius={19} fahrenheit={33} />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}