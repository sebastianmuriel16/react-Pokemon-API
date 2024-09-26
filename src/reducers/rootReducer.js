// import { combineReducers } from "redux-immutable";
// import { pokemonsReducer } from "./pokemons.js";
// import { uiReducer } from "./Ui.js";
import { combineReducers } from "redux";
import dataReducer from "../slices/data.slice";
import uiReducer from "../slices/ui.slice";

const rootReducer = combineReducers({
  data: dataReducer,
  ui: uiReducer,
});

export { rootReducer };
