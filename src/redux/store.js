import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./GlobalSlice";

export default configureStore({
  reducer: {
    global: globalReducer,
  },
});
