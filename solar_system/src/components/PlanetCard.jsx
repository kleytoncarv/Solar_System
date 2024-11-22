import React from "react";
import "./PlanetCard.css";

const PlanetCard = ({ name, description, image }) => {
  return (
    <div className="planet-card">
      <img src={image} alt={name} className="planet-image" />
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
};

export default PlanetCard;
