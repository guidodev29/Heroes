const BASE_URL = 'https://www.superheroapi.com/api.php/2383bfbdf5c2dc8858f50e4c358b5f8d';

export const fetchHeroById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    return await response.json();
  } catch (error) {
    console.error(`Error fetching hero with id ${id}:`, error);
    throw error;
  }
};

export const fetchMultipleHeroes = async (start = 1, count =15) => {
  console.log("Fetching heroes from", start, "to", start + count - 1);
  try {
    const heroes = [];
    for (let i = start; i < start + count; i++) {
      const hero = await fetchHeroById(i);
      if (hero.response === 'success') {
        heroes.push(hero);
      }
    }
    console.log("Fetched heroes:", heroes);
    return heroes;
  } catch (error) {
    console.error('Error fetching multiple heroes:', error);
    throw error;
  }
};

export const fetchHeroes = fetchMultipleHeroes; // Alias para mantener compatibilidad