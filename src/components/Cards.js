import React from "react";
import Card from "./Card";

const Cards = ({ places, filteredPlaces }) => {
  return (
    <main className="cards">
      {filteredPlaces.length > 0
        ? filteredPlaces.map((showPlace) => (
            <Card place={showPlace} key={showPlace.ID} />
          ))
        : places &&
          places.map((place) => <Card place={place} key={place.ID} />)}
    </main>
  );
};

export default Cards;
