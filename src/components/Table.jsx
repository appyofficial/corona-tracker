import React from "react";
import "../styles/TableStyle.css";
import { useDataLayerValue } from "../context/DataLayer";
import globe from "../images/globe.png";
import formatNumber from "../utils/formatNumber";

export default function Table() {
  const [{ countries }] = useDataLayerValue();

  return (
    <table className="table">
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          paddingBottom: "10px",
          position: "sticky",
          top: "-20px",
          backgroundColor: "white",
        }}
      >
        <img src={globe} alt="globe" width="40px" />
        <div style={{ marginLeft: "5px" }}>
          <h3>List of Countries</h3>
          <p>with most covid 19 cases.</p>
        </div>
      </div>

      <tbody>
        {countries
          .sort((a, b) => b.cases - a.cases)
          ?.map(({ country, cases, countryInfo }, id) => (
            <tr key={id}>
              <div style={{ display: "flex" }}>
                <span>
                  <img
                    src={country === "Worldwide" ? "" : countryInfo.flag}
                    alt={country}
                    width="25px"
                    style={{ marginRight: "8px" }}
                  />
                </span>
                <td>{country}</td>
              </div>
              <td>{formatNumber(cases)}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
