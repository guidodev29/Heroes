import React, { useState, useEffect } from 'react';
import HeroCard from '../../components/HeroCard/HeroCard';
import { fetchMultipleHeroes } from '../../services/apiService';

function Home() {
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadHeroes = async () => {
      try {
        setLoading(true);
        const data = await fetchMultipleHeroes(1, 15); // Obtiene los primeros 15 héroes
        setHeroes(data.filter(hero => hero.response === 'success')); // Filtra los resultados exitosos
      } catch (err) {
        setError('Failed to load heroes');
      } finally {
        setLoading(false);
      }
    };

    loadHeroes();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="home">
      <h1>Superhéroes</h1>
      <div className="hero-list">
        {heroes.map(hero => (
          <HeroCard key={hero.id} hero={hero} />
        ))}
      </div>
    </div>
  );
}

export default Home;