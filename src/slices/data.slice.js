import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemons } from "../services/pokemons.js";
import { setLoading } from "../slices/ui.slice";
const initialState = {
  pokemons: [],
};

export const fetchPokemonsWithDetails = createAsyncThunk(
  "data/fetchPokemonsWithDetails",
  async (_, { dispatch }) => {
    dispatch(setLoading(true));
    const pokemonsRes = await getPokemons();
    const pokemonsDetailed = await Promise.all(
      pokemonsRes.map(async (pokemon) => {
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

    setTimeout(() => {
      dispatch(setLoading(false));
    }, 1000);

    dispatch(setPokemons(pokemonsDetailed));
  }
);

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      const { payload } = action;
      state.pokemons = payload;
    },
    setFavorite: (state, action) => {
      const { payload } = action;
      const id = payload;

      const indexPokemon = state.pokemons.findIndex((pokemon) => {
        return pokemon.id === id;
      });
      if (indexPokemon >= 0) {
        const isFavorite = state.pokemons[indexPokemon].favorite;

        state.pokemons[indexPokemon].favorite = !isFavorite;
      }
    },
  },
});

export const { setPokemons, setFavorite } = dataSlice.actions;

export default dataSlice.reducer;
