import React from "react";
import Card from "./Card";

const Cards = ({ places }) => {
  return (
    <main className="cards">
      {places && places.map((place) => <Card place={place} key={place.ID} />)}
    </main>
  );
};

export default Cards;
