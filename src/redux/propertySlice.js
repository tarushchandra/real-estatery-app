import { createSlice } from "@reduxjs/toolkit";
import { housesData } from "../data/data";

export const propertySlice = createSlice({
  name: "property",
  initialState: {
    properties: housesData,
    country: "Select Location",
    tempCountry: "",
    date: "Select Move-in Date",
    price: "Select Price",
    propertyType: "Select Type",
  },
  reducers: {
    updateCountry: (state, action) => {
      state.country = action.payload;
    },
    updateTempCountry: (state, action) => {
      state.tempCountry = action.payload;
    },
    updatePrice: (state, action) => {
      state.price = action.payload;
    },
    updatePropertyType: (state, action) => {
      state.propertyType = action.payload;
    },
    updateProperties: (state, action) => {
      state.properties = action.payload;
    },
  },
});

export const {
  updateCountry,
  updateTempCountry,
  updatePrice,
  updatePropertyType,
  updateProperties,
} = propertySlice.actions;
export const getProperties = (state) => state.property.properties;
export const getCountry = (state) => state.property.country;
export const getTempCountry = (state) => state.property.tempCountry;
export const getDate = (state) => state.property.date;
export const getPrice = (state) => state.property.price;
export const getPropertyType = (state) => state.property.propertyType;
export default propertySlice.reducer;
