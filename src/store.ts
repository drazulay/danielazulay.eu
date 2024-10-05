import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./store/uiSlice";

const store = configureStore({
  reducer: {
    ui: uiReducer
  },
});

export default store;
