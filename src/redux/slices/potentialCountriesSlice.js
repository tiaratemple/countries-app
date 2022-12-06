import { createSlice } from "@reduxjs/toolkit";

export const potentialCountriesSlice = createSlice({
  name: "potentialCountries",
  initialState: {
    value: [
      {
        name: {
          common: "America",
        },
      },
    ],
  },
  reducers: {
    setPotentialCountries: (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
    },
    deletePotentialCountries: (state) => {
      state.value = null;
    },
  },
});

export const { setPotentialCountries, deletePotentialCountries } =
  potentialCountriesSlice.actions;

export const selectPotentials = (state) => state.potentialCountries.value;

export default potentialCountriesSlice.reducer;
