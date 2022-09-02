import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { housesData } from "../../data/data";
import {
  getCountry,
  getTempCountry,
  updateCountry,
  updateProperties,
} from "../../redux/propertySlice";

import CountryDropDown from "./CountryDropdown";
import DateDropdown from "./DateDropdown";
import PriceDropdown from "./PriceDropdown";
import TypeDropdown from "./TypeDropdown";

const Filter = () => {
  const country = useSelector(getCountry);
  const tempCountry = useSelector(getTempCountry);
  const dispatch = useDispatch();

  function handleSubmit(e) {
    dispatch(updateCountry(tempCountry));

    const filteredCountries = housesData.filter((house) => {
      return house.country === country;
    });

    console.log(filteredCountries);
    dispatch(updateProperties(filteredCountries));
    e.preventDefault();
  }

  console.log("Country state -", country);

  return (
    <form onSubmit={handleSubmit} className="filter">
      <CountryDropDown />
      <DateDropdown />
      <PriceDropdown />
      <TypeDropdown />
      <div>
        <button className="filter-search">Search</button>
      </div>
    </form>
  );
};

export default Filter;
