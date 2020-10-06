import React, { useEffect } from "react";
import "../styles/NavbarStyle.css";
import { FormControl, MenuItem, Select } from "@material-ui/core";
import logo from "../images/logo.png";
import { useDataLayerValue } from "../context/DataLayer";
import buildChartData from "../utils/buildChartData";
import { Link } from "react-router-dom";
import list from "../images/icons/list.png";
import home from "../images/icons/home.png";
import map from "../images/icons/map.png";

const Navbar = () => {
  const [{ countries, country, countryData }, dispatch] = useDataLayerValue();

  const onCountryChange = async (e) => {
    const countryCode = e.target.value;
    dispatch({ type: "SET_COUNTRY", country: countryCode });
  };

  useEffect(() => {
    country !== "Worldwide"
      ? dispatch({
          type: "SET_LOCATION",
          location: {
            lat: countryData.countryInfo.lat,
            lng: countryData.countryInfo.long,
          },
        })
      : console.log("failed");

    //GET HISTORY OF CASES
    const getHistory = async () => {
      let url = "https://disease.sh/v3/covid-19/historical/all?lastdays=120";

      await fetch(url)
        .then((res) => res.json())
        .then((data) => {
          dispatch({
            type: "SET_HISTORY",
            history: buildChartData(data, "cases"),
          });
          console.log(data);
        });
    };
    getHistory();
  }, [countryData]);

  return (
    <>
      <div className="header">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={logo}
            alt="coronavirus tracker"
            width="50px"
            height="auto"
          />
          <h4 style={{ marginLeft: "5px", color: "white" }}>
            Covid-19 Tracker
          </h4>
        </div>
        <nav className="navbar">
          <Link to="/">
            <img src={home} alt="home" />
            <span>Home</span>
          </Link>
          <Link to="/list">
            <img src={list} alt="home" />
            <span>Countries</span>
          </Link>
          <Link to="/map">
            <img src={map} alt="home" />
            <span>Map</span>
          </Link>
        </nav>
        <FormControl className="header_dropdown">
          <Select onChange={onCountryChange} variant="outlined" value={country}>
            <MenuItem value="Worldwide">Worldwide</MenuItem>
            {countries?.map((country, id) => (
              <MenuItem key={id} value={country.countryInfo.iso2}>
                {country.country}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <nav className="navbarMobile">
        <Link to="/">
          <img src={home} alt="home" />
          <span>Home</span>
        </Link>
        <Link to="/list">
          <img src={list} alt="home" />
          <span>Countries</span>
        </Link>
        <Link to="/map">
          <img src={map} alt="home" />
          <span>Map</span>
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
