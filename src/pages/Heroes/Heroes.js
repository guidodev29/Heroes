import React, { useState, useEffect } from 'react';
import { fetchMultipleHeroes } from '../../services/apiService';
import HeroCard from '../../components/HeroCard/HeroCard';

function Heroes() {
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadHeroes();
  }, []);

  const loadHeroes = async () => {
    try {
      setLoading(true);
      const fetchedHeroes = await fetchMultipleHeroes(1, 15);
      setHeroes(fetchedHeroes);
      setError(null);
    } catch (err) {
      console.error('Error loading heroes:', err);
      setError('Failed to load heroes. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading heroes...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="heroes-page">
      <h1>Superhéroes</h1>
      {heroes.length === 0 ? (
        <p>No heroes found.</p>
      ) : (
        <div className="heroes-grid">
          {heroes.map(hero => (
            <HeroCard key={hero.id} hero={hero} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Heroes;