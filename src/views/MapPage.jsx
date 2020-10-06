import React from "react";
import Map from "../components/Map";
import { useDataLayerValue } from "../context/DataLayer";

export default function MapPage() {
  const [{ countries, location }] = useDataLayerValue();
  return (
    <div
      style={{
        width: "100vw",
        height: "calc(100vh - 55px)",
        marginTop: "55px",
      }}
    >
      <Map
        zoom={5}
        countries={countries}
        center={location}
        casesType="cases"
        width="100%"
        height="100%"
        maxZoom={20}
      />
    </div>
  );
}
