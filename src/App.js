import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./views/HomePage";
import "./App.css";
import { useDataLayerValue } from "./context/DataLayer";
import buildChartData from "./utils/buildChartData";

function App() {
  const [{ country }, dispatch] = useDataLayerValue();

  useEffect(() => {
    //GET COUNTRIES DATA
    fetch("https://disease.sh/v3/covid-19/countries")
      .then((res) => res.json())
      .then((data) =>
        dispatch({
          type: "SET_COUNTRIES",
          countries: data,
        })
      );

    //GET SELECTED COUNTRY DETAIL
    const getCountryDetail = () => {
      let url =
        country === "Worldwide"
          ? "https://disease.sh/v3/covid-19/all"
          : `https://disease.sh/v3/covid-19/countries/${country}`;

      fetch(url)
        .then((res) => res.json())
        .then((data) =>
          dispatch({ type: "SET_COUNTRY_DATA", countryData: data })
        );
    };
    getCountryDetail();

    //GET HISTORY OF CASES
    const getHistory = async () => {
      await fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120")
        .then((res) => res.json())
        .then((data) => {
          dispatch({
            type: "SET_HISTORY",
            history: buildChartData(data, "cases"),
          });
        });
    };
    getHistory();
  }, [country]);

  return (
    <div className="App">
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
