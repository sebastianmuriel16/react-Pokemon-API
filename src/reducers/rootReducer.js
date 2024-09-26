import { combineReducers } from "redux-immutable";
import { pokemonsReducer } from "./pokemons.js";
import { uiReducer } from "./Ui.js";

const rootReducer = combineReducers({
  data: pokemonsReducer,
  ui: uiReducer,
});

export { rootReducer };
