import { useState, useEffect } from "react";
import Header from "./components/Header";
import Cards from "./components/Cards";
import LoadingImage from "./components/LoadingImage";
import "./styles/style.css";

function App() {
  const [places, setPlaces] = useState([]);
  const [cities, setCities] = useState([]);
  const [towns, setTowns] = useState([]);
  const [city, setCity] = useState(null);
  const [town, setTown] = useState(null);
  const [filteredPlaces, setFilterdPlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const url =
    "https://data.coa.gov.tw/Service/OpenData/ODwsv/ODwsvTravelFood.aspx";

  const getData = async () => {
    try {
      let res = await fetch(url);
      let data = await res.json();
      // console.log(data);
      setPlaces(data);
      getCities(data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const getCities = (data) => {
    const _cities = data.map((d) => d.City);
    const result = _cities.filter(
      (city, index, arr) => index === arr.indexOf(city)
    );
    setCities(result);
  };

  const getTowns = (city) => {
    // 1. render cards: places of current city
    const _places = places.filter((place) => place.City === city);
    setFilterdPlaces(_places);
    // 2. to render townSelect: get the towns of current city
    const _towns = _places.map((place) => place.Town);
    const result = _towns.filter(
      (town, index, arr) => index === arr.indexOf(town)
    );
    setTowns(result);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getTowns(city);
  }, [city]);

  useEffect(() => {
    // render cards: places of current town
    const _places = places.filter((place) => place.Town === town);
    setFilterdPlaces(_places);
  }, [town]);

  return (
    <div className="App">
      {isLoading ? <LoadingImage /> : null}
      <Header
        cities={cities}
        towns={towns}
        setCity={setCity}
        setTown={setTown}
      />
      <Cards places={places} filteredPlaces={filteredPlaces} />/
    </div>
  );
}

export default App;
