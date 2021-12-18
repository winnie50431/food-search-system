import React from "react";

const Header = ({ cities, towns, setCity, setTown }) => {
  return (
    <header className="header">
      <h1>農村小吃美食地方特色料理</h1>
      <div className="menu">
        <select
          className="menu_select"
          name="citySelect"
          id="citySelect"
          onChange={(e) => setCity(e.target.value)}
        >
          <option value="" selected disabled>
            請選擇行政區域...
          </option>
          {cities && cities.map((city) => <option value={city}>{city}</option>)}
        </select>
        <select
          className="menu_select"
          name="townSelect"
          id="townSelect"
          onChange={(e) => setTown(e.target.value)}
        >
          <option value="" selected disabled>
            請選擇鄉鎮區...
          </option>
          {towns && towns.map((town) => <option value={town}>{town}</option>)}
        </select>
      </div>
    </header>
  );
};

export default Header;
