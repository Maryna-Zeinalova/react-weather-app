import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city.."
              className="form-control"
            ></input>
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary"
            ></input>
          </div>
        </div>
      </form>
      <h1>New York</h1>
      <ul>
        <li>Thursday 21:42</li>
        <li>Clear Sky</li>
      </ul>

      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="weather"
          ></img>{" "}
          6°C
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: 42%</li>
            <li>Wind: 8.23 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
