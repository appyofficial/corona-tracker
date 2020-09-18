export const initialState = {
  countries: [],
  country: "Worldwide",
  countryData: {},
  history: {},
  location: { lat: 34.80746, lng: -40.4796 },
  mapCountries: [],
  //remove token after done
  //token:
  //"BQACPfV0TyRs55HDi7An5McMuHyKvw7ttqG08FxpX0Lb_8eVorXmAV8TeFgrF-IMfuDao8WT79aJ66gP7g4Teos0Wno0l35iahu1EKSL9IAeU5AqQEUqvAoE4WgJagTq5nTKw1xSd576jMW-u0JjjqmLCEYEEkw895sIsQ",
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
    default:
      return { ...state };
  }
};

export default reducer;
