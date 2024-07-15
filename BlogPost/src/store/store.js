import { configureStore } from "@reduxjs/toolkit";
import reducer from "./blogSlice";
export const store = configureStore({
  reducer,
});
