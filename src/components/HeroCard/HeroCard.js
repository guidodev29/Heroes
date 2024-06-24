import React from 'react';

function HeroCard({ hero }) {
  return (
    <div className="hero-card">
      <h2>{hero.name}</h2>
      {hero.image && hero.image.url && <img src={hero.image.url} alt={hero.name} />}
      <p>Inteligencia: {hero.powerstats.intelligence}</p>
      <p>Fuerza: {hero.powerstats.strength}</p>
      <p>Velocidad: {hero.powerstats.speed}</p>
      <p>Durabilidad: {hero.powerstats.durability}</p>
      <p>Poder: {hero.powerstats.power}</p>
      <p>Combate: {hero.powerstats.combat}</p>
    </div>
  );
}

export default HeroCard;