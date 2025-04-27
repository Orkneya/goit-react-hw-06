import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

const slice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setStatusFilters(state, action) {
      state.name = action.payload;
    },
  },
});

export const { setStatusFilters } = slice.actions;
export default slice.reducer;
