import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./reducer";

export const store = configureStore({
  reducer: {
    todoSlice: todoSlice,
  },
});
