import React, { useEffect, useState } from "react";
import "../styles/HomePage.css";
import InfoBox from "../components/InfoBox/InfoBox";
import { useDataLayerValue } from "../context/DataLayer";
import LineGraph from "../components/LineGraph";
import "leaflet/dist/leaflet.css";
import Map from "../components/Map";
import infected from "../images/infected.png";
import deaths from "../images/deaths.png";
import recovered from "../images/recovered.png";
import active from "../images/active.png";
import world from "../images/world.png";

const Heading = ({ flagSrc, countryData }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "10px",
        marginBottom: "20px",
      }}
    >
      <img
        src={flagSrc}
        alt="flag"
        style={{ width: "50px", borderRadius: "10px", marginRight: "5px" }}
      />
      <div style={{ marginLeft: "15px" }}>
        <h1
          style={{
            fontSize: "30px",
            marginBottom: "5px",
            color: "#454545",
          }}
        >
          {countryData.country || "Worldwide"}
        </h1>
      </div>
    </div>
  );
};

const HomePage = () => {
  const [{ countryData, country, location, countries }] = useDataLayerValue();
  const [flag, setFlag] = useState("");

  useEffect(() => {
    if (country !== "Worldwide") {
      return setFlag(countryData?.countryInfo.flag);
    } else {
      return setFlag(world);
    }
  }, [countryData]);

  let mapZoom;
  country === "Worldwide" ? (mapZoom = 1) : (mapZoom = 5);

  return (
    <div className="homepageContainer">
      <div className="hp__title">
        <Heading country={country} countryData={countryData} flagSrc={flag} />
      </div>
      <div className="hp__stats">
        <div className="hp__infoboxes">
          <InfoBox
            title="Total Infected"
            total={countryData.cases}
            imgSrc={infected}
          />
          <InfoBox
            title="Active cases"
            total={countryData.active}
            imgSrc={active}
          />
          <InfoBox
            title="Total recovered"
            total={countryData.recovered}
            imgSrc={recovered}
          />
          <InfoBox
            title="Total deaths"
            total={countryData.deaths}
            imgSrc={deaths}
          />
        </div>
        <div className="hp__statsmap">
          <Map
            center={location}
            zoom={mapZoom}
            maxZoom={10}
            countries={countries}
            casesType="cases"
            width="100%"
            height="100%"
          />
        </div>
      </div>
      <div className="hp__linegraph">
        <div className="hp__linegraphTitle">
          <h3>Daily cases : Global</h3>
          <span>Last 120 days</span>
        </div>
        <LineGraph />
      </div>
    </div>
  );
};

export default HomePage;

/*
<p>
          Coronavirus cases
          {countryData.country ? ` in ${countryData.country}` : " global"}
        </p>
*/
