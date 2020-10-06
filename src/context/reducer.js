export const initialState = {
  countries: [],
  country: "Worldwide",
  countryData: {},
  history: {},
  location: { lat: 34.80746, lng: -40.4796 },
  mapCountries: [],
  sortCountries: [],
};

const reducer = (state, action) => {
  console.log(action); //debug tool to save lot of headache.
  switch (action.type) {
    case "SET_COUNTRIES":
      return { ...state, countries: action.countries };
    case "SET_COUNTRY":
      return { ...state, country: action.country };
    case "SET_COUNTRY_DATA":
      return { ...state, countryData: action.countryData };
    case "SET_HISTORY":
      return { ...state, history: action.history };
    case "SET_LOCATION":
      return { ...state, location: action.location };
    case "SET_MAP_COUNTRIES":
      return { ...state, mapCountries: action.mapCountries };
    case "SET_SORT_COUNTRIES":
      return { ...state, sortCountries: action.sortCountries };
    default:
      return { ...state };
  }
};

export default reducer;
