import React, { useEffect, useState } from "react";
import "../styles/HomePage.css";
import Table from "../components/Table";
import InfoBox from "../components/InfoBox";
import { useDataLayerValue } from "../context/DataLayer";
import { Card, CardContent } from "@material-ui/core";
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
        style={{ width: "100px", borderRadius: "10px", marginRight: "10px" }}
      />
      <div style={{ marginLeft: "15px" }}>
        <h1
          style={{
            fontSize: "60px",
            marginBottom: "5px",
            color: "#454545",
          }}
        >
          {countryData.country || "Worldwide"}
        </h1>
        <p>
          Coronavirus cases
          {countryData.country ? ` in ${countryData.country}` : " global"}
        </p>
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

  return (
    <div className="homePage">
      <main className="homePage__main">
        <Heading country={country} countryData={countryData} flagSrc={flag} />
        <div className="homePage__infobox">
          <InfoBox
            title="Infected"
            total={countryData.cases}
            imgSrc={infected}
          />
          <InfoBox title="Active" total={countryData.active} imgSrc={active} />
          <InfoBox
            title="Recovered"
            total={countryData.recovered}
            imgSrc={recovered}
          />
          <InfoBox title="Deaths" total={countryData.deaths} imgSrc={deaths} />
        </div>
        <Map
          center={location}
          zoom={country === "Worldwide" ? 3 : 4}
          countries={countries}
          casesType="cases"
        />
        <div>
          <h3>Global daily cases</h3>
          <p>Last 120 days</p>
          <LineGraph />
        </div>
      </main>
      {/*Sidebar */}
      <div className="sidebar">
        <Card>
          <CardContent style={{ height: "600px", overflow: "scroll" }}>
            <Table />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;
