import React from "react";
import Card from "./Card";

const Cards = ({ places }) => {
  console.log(places);
  return (
    <main className="cards">
      {places.map((place) => (
        <Card place={place} key={place.ID} />
      ))}
    </main>
  );
};

export default Cards;
