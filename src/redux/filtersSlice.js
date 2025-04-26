import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: {
    name: "",
  },
};

const slice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setStatusFilters(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setStatusFilters } = slice.actions;
export default slice.reducer;
