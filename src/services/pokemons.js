const getPokemons = async () => {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=151";
  const response = await fetch(url);
  const pokemons = await response.json();
  return pokemons.results;
};

export { getPokemons };
