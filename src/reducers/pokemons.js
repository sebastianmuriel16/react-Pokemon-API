import { fromJS } from "immutable";
import { SET_POKEMONS, SET_FAVORITE } from "../actions/types";

const initialState = fromJS({
  pokemons: [],
});

export const pokemonsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  if (type === SET_POKEMONS) {
    // return {
    //   ...state,
    //   pokemons: payload,
    // };
    return state.setIn(["pokemons"], fromJS(payload));
  }

  if (type === SET_FAVORITE) {
    const id = payload;

    const indexPokemon = state.get("pokemons").findIndex((pokemon) => {
      return pokemon.get("id") === id;
    });
    if (indexPokemon < 0) {
      console.warn(indexPokemon);
      console.warn("Pokemon not found");
      return state;
    }
    const isFavorite = state.getIn(["pokemons", indexPokemon, "favorite"]);

    return state.setIn(["pokemons", indexPokemon, "favorite"], !isFavorite);
  }
  return state;
};
