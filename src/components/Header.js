import React from "react";

const Header = () => {
  return (
    <header className="header">
      <h1>農村小吃美食地方特色料理</h1>
      <div className="menu">
        <select className="menu_select" name="citySelect" id="citySelect">
          <option value="" disabled>
            請選擇行政區域...
          </option>
          <option value="">南投縣</option>
        </select>
        <select className="menu_select" name="townSelect" id="townSelect">
          <option value="" disabled>
            請選擇鄉鎮區...
          </option>
          <option value="" disabled>
            竹山鎮
          </option>
          <option value="">名間鄉</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
