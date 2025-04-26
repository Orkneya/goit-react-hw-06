import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: {
    items: [],
  },
};

const slice = createSlice({
  name: "contacts",
  initialState,
  redusers: {
    addContact(state, action) {
      state, items.push(action.poyload);
    },
    deleteContact(state, action) {
      state.items = state.items.filter((item) => item.id !== action.poyload);
    },
  },
});

export const { addContact, deleteContact } = slice.actions;
export default slice.reducer;
