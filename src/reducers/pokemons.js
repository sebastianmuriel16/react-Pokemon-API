import { SET_POKEMONS, SET_LOADING } from "../actions/types";

const initialState = {
  pokemons: [],
  loading: false,
};

export const pokemonsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  if (type === SET_POKEMONS) {
    return {
      ...state,
      pokemons: payload,
    };
  }
  if (type === SET_LOADING) {
    return {
      ...state,
      loading: payload,
    };
  }
  return state;
};
