import React, { useEffect, useState } from "react";
import "../styles/TableStyle.css";
import { useDataLayerValue } from "../context/DataLayer";
import globe from "../images/globe.png";
import formatNumber from "../utils/formatNumber";

export default function Table() {
  const [{ countries }] = useDataLayerValue();
  const [sortCountries, setSortCountries] = useState([]);

  useEffect(() => {
    const sorted = [...countries].sort((a, b) => b.cases - a.cases);
    setSortCountries(sorted);
  }, [countries]);

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
        {sortCountries?.map(({ country, cases }, id) => (
          <tr key={id}>
            <td>{country}</td>
            <td>{formatNumber(cases)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
