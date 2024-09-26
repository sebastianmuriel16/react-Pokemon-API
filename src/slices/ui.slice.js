import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      const { payload } = action;
      state.loading = payload;
    },
  },
});

export const { setLoading } = uiSlice.actions;

export default uiSlice.reducer;
