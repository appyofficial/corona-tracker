import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./views/HomePage";
import "./App.css";
import { useDataLayerValue } from "./context/DataLayer";
import { getCountriesData, getCountryDetail, getSortList } from "./api";
import { Switch, Route } from "react-router-dom";
import ListPage from "./views/ListPage";
import MapPage from "./views/MapPage";

function App() {
  const [{ country }, dispatch] = useDataLayerValue();

  useEffect(() => {
    //fetching countries
    getCountriesData(dispatch);
    //fetching countries details like cases etc
    getCountryDetail(dispatch, country);
    //getting sorted list based on the most coronavirus cases
    getSortList(dispatch);
  }, [country, dispatch]);

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/map">
          <MapPage />
        </Route>
        <Route exact path="/list">
          <ListPage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
