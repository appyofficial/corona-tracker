import React, { useEffect, useState } from "react";
import "../styles/ListPage.css";
import formatNumber from "../utils/formatNumber";
import { useDataLayerValue } from "../context/DataLayer";
import { Divider, Input, InputGroup } from "@chakra-ui/core";
import SortIcon from "@material-ui/icons/Sort";

export default function ListPage() {
  const [{ countries }] = useDataLayerValue();
  const [countryList, setCountryList] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setCountryList(countries);
  }, [countries]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  let filteredList = countryList.filter((country) =>
    country.country.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="listpageContainer">
      <div className="listpageContainerController">
        <div> List</div>
        <SortIcon />
      </div>
      <InputGroup
        style={{
          width: "100%",
          height: "50px",
          marginBottom: "40px",
          position: "sticky",
          top: "69px",
          zIndex: 100,
        }}
      >
        <Input
          onChange={handleChange}
          style={{
            height: "50px",
            fontSize: "16px",
            border: "0.5px lightgrey solid",
            borderRadius: "100px",
          }}
          placeholder="Search country"
          size="lg"
        />
      </InputGroup>
      {filteredList?.map(({ country, cases, countryInfo }, id) => (
        <>
          <div key={id} className="listpageCountry">
            <div className="listpageCountryRight">
              <div className="listpageCountryRightImageContainer">
                <img
                  src={country === "Worldwide" ? "" : countryInfo.flag}
                  alt={country}
                />
              </div>

              <h3>{country}</h3>
            </div>
            <div className="listpageCountryLeft">
              <h5>Total cases</h5>
              <p>{formatNumber(cases)}</p>
            </div>
          </div>
          <Divider color="lightgrey" width="100%" />
        </>
      ))}
    </div>
  );
}
