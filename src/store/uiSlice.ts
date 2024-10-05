import { createSlice } from "@reduxjs/toolkit";

interface UIState {
  showMenu: boolean;
}

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    showMenu: false,
  },
  reducers: {
    toggleMenu(state: UIState) {
      state.showMenu = !state.showMenu;
    },
  },
});

export const { toggleMenu } = uiSlice.actions;

export default uiSlice.reducer;
