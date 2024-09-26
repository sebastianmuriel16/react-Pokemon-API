import { SET_POKEMONS, SET_LOADING, SET_FAVORITE } from "./types";

export const setPokemons = (payload) => ({
  type: SET_POKEMONS,
  payload,
});

export const setLoading = (payload) => ({ type: SET_LOADING, payload });

export const setFavorite = (payload) => ({ type: SET_FAVORITE, payload });

export const getPokemonsWithDetails =
  (pokemons = []) =>
  async (dispatch) => {
    const pokemonsDetailed = await Promise.all(
      pokemons.map(async (pokemon) => {
        const pokemosResponse = await fetch(pokemon.url);
        const pokemosData = await pokemosResponse.json();

        return {
          id: pokemosData.id,
          name: pokemosData.name,
          image: pokemosData.sprites.other.dream_world.front_default,
          abilities: pokemosData.abilities,
          types: pokemosData.types,
        };
      })
    );

    dispatch(setPokemons(pokemonsDetailed));
  };
