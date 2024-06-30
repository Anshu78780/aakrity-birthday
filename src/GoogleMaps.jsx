import React, { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const SimpleMap = () => {
  useEffect(() => {
    const loader = new Loader({
      apiKey: "AIzaSyC76PLofPsgqNWL7nYuC0oEbWIYdXUMkEw",
      version: "weekly",
    });

    loader.load().then(() => {
      const google = window.google;
      const myLatlng = { lat: 24.0426651, lng: 84.0741579 };
      const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: myLatlng,
      });
      const marker = new google.maps.Marker({
        position: myLatlng,
        map,
        title: "Click to zoom",
      });

      map.addListener("center_changed", () => {
        window.setTimeout(() => {
          map.panTo(marker.getPosition());
        }, 3000);
      });

      marker.addListener("click", () => {
        map.setZoom(8);
        map.setCenter(marker.getPosition());
      });
    });
  }, []);

  return <div id="map" style={{ height: "100vh", width: "100%" }}></div>;
};

export default SimpleMap;
