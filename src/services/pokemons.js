const getPokemons = async () => {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=151";
  const response = await fetch(url);
  const data = await response.json();

  const pokemons = await Promise.all(
    data.results.map(async (pokemon) => {
      const pokemosResponse = await fetch(pokemon.url);
      const pokemosData = await pokemosResponse.json();

      return {
        id: pokemosData.id,
        name: pokemosData.name,
        image: pokemosData.sprites.other.dream_world.front_default,
        types: pokemosData.types,
      };
    })
  );

  return pokemons;
};

export { getPokemons };
