import { fromJS } from "immutable";
import { SET_LOADING } from "../actions/types";

const initialState = fromJS({
  loading: false,
});

export const uiReducer = (state = initialState, action) => {
  const { type, payload } = action;
  if (type === SET_LOADING) {
    // return {
    //   ...state,
    //   loading: payload,
    // };
    return state.setIn(["loading"], fromJS(payload));
  }
  return state;
};
