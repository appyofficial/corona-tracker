import React from "react";
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import "../styles/MapStyles.css";
import showDataOnMap from "../utils/showDataOnMap";

function Map({ countries, casesType, center, zoom, width, height, maxZoom }) {
  return (
    <div className="map" style={{ width: width, height: height }}>
      <LeafletMap
        center={center}
        zoom={zoom}
        maxZoom={maxZoom}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {showDataOnMap(countries, casesType)}
      </LeafletMap>
    </div>
  );
}

export default Map;
