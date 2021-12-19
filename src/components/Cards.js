import React from "react";
import Card from "./Card";

const Cards = ({ places, showPlaces }) => {
  return (
    <main className="cards">
      {showPlaces.length > 0
        ? showPlaces.map((showPlace) => (
            <Card place={showPlace} key={showPlace.ID} />
          ))
        : places &&
          places.map((place) => <Card place={place} key={place.ID} />)}
    </main>
  );
};

export default Cards;
