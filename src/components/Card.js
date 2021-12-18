import React from "react";

const Card = ({ place }) => {
  return (
    <div className="card">
      <img src={place.PicURL} alt={place.Name} />
      <div className="filter"></div>
      <span>{place.City}</span>
      <div className="card_body">
        <em>{place.Town}</em>
        <h3>{place.Name}</h3>
        <hr />
        <p className="card_text">{place.HostWords}</p>
      </div>
    </div>
  );
};

export default Card;
