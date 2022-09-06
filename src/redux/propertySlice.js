import { createSlice } from "@reduxjs/toolkit";
import { housesData } from "../data/data";

export const propertySlice = createSlice({
  name: "property",
  initialState: {
    properties: housesData,
    country: "Location (Any)",
    bedroom: "Bedrooms (Any)",
    price: "Price (Any)",
    propertyType: "Type (Any)",
  },
  reducers: {
    updateCountry: (state, action) => {
      state.country = action.payload;
    },
    updateBedroom: (state, action) => {
      state.bedroom = action.payload;
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
  updateBedroom,
  updatePrice,
  updatePropertyType,
  updateProperties,
} = propertySlice.actions;
export const getProperties = (state) => state.property.properties;
export const getCountry = (state) => state.property.country;
export const getBedrooms = (state) => state.property.bedroom;
export const getPrice = (state) => state.property.price;
export const getPropertyType = (state) => state.property.propertyType;
export default propertySlice.reducer;
