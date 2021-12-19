import { useState, useEffect } from "react";
import Header from "./components/Header";
import Cards from "./components/Cards";
import "./styles/style.css";

function App() {
  const [cities, setCities] = useState([]);
  const [towns, setTowns] = useState([]);
  const [city, setCity] = useState(null);
  const [town, setTown] = useState(null);
  const [places, setPlaces] = useState([]);
  const [showPlaces, setShowPlaces] = useState([]);

  const url =
    "https://data.coa.gov.tw/Service/OpenData/ODwsv/ODwsvTravelFood.aspx";

  const getData = async () => {
    try {
      let res = await fetch(url);
      let data = await res.json();
      // console.log(data);
      setPlaces(data);
      getCities(data);
    } catch (err) {
      console.log(err);
    }
  };

  const getCities = (data) => {
    // return the city have not pushed yet
    if (data.length > 0) {
      const _cities = data.map((d) => d.City);
      const result = _cities.filter(
        // retun if current index = the index of current element show up first time
        (city, index, arr) => index === arr.indexOf(city)
      );
      // console.log(result);
      setCities(result);
    }
  };

  const getTowns = (city) => {
    // 1. get and show the places of current city
    const _places = places.filter((place) => place.City === city);
    setShowPlaces(_places);
    // 2. get the towns of current city
    const _towns = _places.map((place) => place.Town);
    const result = _towns.filter(
      (town, index, arr) => index === arr.indexOf(town)
    );
    // console.log(result);
    setTowns(result);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getTowns(city);
  }, [city]);

  useEffect(() => {
    const _places = places.filter((place) => place.Town === town);
    setShowPlaces(_places);
  }, [town]);

  return (
    <div className="App">
      <Header
        cities={cities}
        towns={towns}
        setCity={setCity}
        setTown={setTown}
      />
      <Cards places={places} showPlaces={showPlaces} />
    </div>
  );
}

export default App;
