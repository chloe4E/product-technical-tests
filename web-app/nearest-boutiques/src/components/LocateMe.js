import React, { useState } from "react";
import GetFive from "./GetFive.js";

function LocateMe() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [posLatitude, setPosLatitude] = useState(false);
  const [posLongitude, setPosLongitude] = useState(false);
  const geoFindMe = () => {
    const status = document.querySelector("#status");
    const currentLatitude = document.querySelector("#current-latitude");
    const currentLongitude = document.querySelector("#current-longitude");

    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      setPosLatitude(latitude);
      setPosLongitude(longitude);
      status.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
      setIsSuccess(true);
    }

    function error() {
      status.textContent = "Unable to retrieve your location";
      // default Lisbon: 38.736946, -9.142685.
      const defaultlLtitude = 38.736946;
      const defaultLongitude = -9.142685;
      currentLatitude.textContent = `The default latitude is: ${defaultlLtitude} °`;
      currentLongitude.textContent = `The default longitude is: ${defaultLongitude} °`;
    }

    if (!navigator.geolocation) {
      status.textContent = "Geolocation is not supported by your browser";
    } else {
      status.textContent = "Locating…";
      navigator.geolocation.getCurrentPosition(success, error);
    }
  };
  const showMeFive = () => {};

  return (
    <div>
      <button id="find-me" onClick={geoFindMe}>
        Locate me
      </button>
      <br />
      <p id="status"></p>
      <p id="current-latitude"></p>
      <p id="current-longitude"></p>
      {isSuccess ? (
        <>
          <button id="show-me-five" onClick={showMeFive}>
            Show me the nearest 5 boutiques
          </button>
          <GetFive posLat={posLatitude} posLon={posLongitude} />
        </>
      ) : (
        <>***</>
      )}
    </div>
  );
}

export default LocateMe;
