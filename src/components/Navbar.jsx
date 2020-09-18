import React, { useEffect } from "react";
import "../styles/NavbarStyle.css";
import { FormControl, MenuItem, Select } from "@material-ui/core";
import logo from "../images/logo.png";
import { useDataLayerValue } from "../context/DataLayer";

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
  }, [countryData]);

  return (
    <div className="header">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={logo} alt="coronavirus tracker" width="50px" height="auto" />
        <h4 style={{ marginLeft: "5px", color: "black" }}>Covid-19 Tracker</h4>
      </div>
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
  );
};

export default Navbar;
