import { useState, useEffect } from "react";
import Header from "./components/Header";
import Cards from "./components/Cards";
import "./styles/style.css";

function App() {
  const [city, setCity] = useState(null);
  const [town, setTown] = useState(null);
  const [places, setPlaces] = useState([]);
  const url =
    "https://data.coa.gov.tw/Service/OpenData/ODwsv/ODwsvTravelFood.aspx";

  const getData = async () => {
    try {
      let res = await fetch(url);
      let data = await res.json();
      console.log(data);
      setPlaces(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // useEffect(() => {

  // }, [places]);

  return (
    <div className="App">
      <Header />
      <Cards places={places} />
    </div>
  );
}

export default App;
