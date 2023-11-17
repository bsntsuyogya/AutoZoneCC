import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  year: null,
  make: null,
  model: null,
  currentScreen: "Year",
};

const setyear = (state, action) => {
  state.year = action.payload;
};

const setmake = (state, action) => {
  state.make = action.payload;
};

const setmodel = (state, action) => {
  state.model = action.payload;
};

const setcurrentScreen = (state, action) => {
  state.currentScreen = action.payload;
};

export const globalSlice = createSlice({
  name: "global",
  initialState: initialState,
  reducers: {
    setYear: setyear,
    setMake: setmake,
    setModel: setmodel,
    setCurrentScreen: setcurrentScreen,
  },
});

export const { setYear, setMake, setModel, setCurrentScreen } =
  globalSlice.actions;

export default globalSlice.reducer;
