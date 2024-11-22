import React from "react";
import PlanetCard from "./PlanetCard";

const planets = [
  {
    name: "Mercúrio",
    description: "O menor planeta do sistema solar e o mais próximo do Sol.",
    image: "https://via.placeholder.com/100/0000FF?text=Mercúrio",
  },
  {
    name: "Vênus",
    description: "O planeta mais quente, com uma atmosfera densa de dióxido de carbono.",
    image: "https://via.placeholder.com/100/FF69B4?text=Vênus",
  },
  {
    name: "Terra",
    description: "Nosso lar azul e o único planeta conhecido com vida.",
    image: "https://via.placeholder.com/100/00FF00?text=Terra",
  },
  {
    name: "Marte",
    description: "Conhecido como o planeta vermelho, é um dos favoritos para exploração.",
    image: "https://via.placeholder.com/100/FF0000?text=Marte",
  },
];

const PlanetList = () => {
  return (
    <div className="planet-list">
      {planets.map((planet, index) => (
        <PlanetCard
          key={index}
          name={planet.name}
          description={planet.description}
          image={planet.image}
        />
      ))}
    </div>
  );
};

export default PlanetList;
