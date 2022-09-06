import React, { useEffect, useState } from "react";

import CountryDropDown from "./CountryDropdown";
import BedDropdown from "./BedDropdown";
import PriceDropdown from "./PriceDropdown";
import TypeDropdown from "./TypeDropdown";
import { useDispatch, useSelector } from "react-redux";
import {
  getBedrooms,
  getCountry,
  getPrice,
  getPropertyType,
  updateBedroom,
  updateCountry,
  updatePrice,
  updateProperties,
  updatePropertyType,
} from "../../redux/propertySlice";
import { housesData } from "../../data/data";

const Filter = ({ searchText }) => {
  const [selectedCountry, setSelectedCountry] = useState("Location (Any)");
  const [selectedBeds, setSelectedBeds] = useState("Bedrooms (Any)");
  const [selectedPrice, setSelectedPrice] = useState("Price (Any)");
  const [selectedType, setSelectedType] = useState("Type (Any)");

  const countryState = useSelector(getCountry);
  const bedroomState = useSelector(getBedrooms);
  const priceState = useSelector(getPrice);
  const typeState = useSelector(getPropertyType);

  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    dispatch(updateCountry(selectedCountry));
    dispatch(updateBedroom(selectedBeds));
    dispatch(updatePrice(selectedPrice));
    dispatch(updatePropertyType(selectedType));
  }

  const isDefault = (str) => {
    return str.split(" ").includes("(Any)");
  };

  useEffect(() => {
    let filteredProperties = housesData;

    console.log(searchText);

    if (searchText !== "") {
      filteredProperties = filteredProperties.filter((item) => {
        return item.name.toLowerCase().includes(searchText);
      });
    }

    // Country Filter
    if (!isDefault(countryState)) {
      filteredProperties = filteredProperties.filter((item) => {
        return item.country === countryState;
      });
    }

    // Bedroom Filter
    if (!isDefault(bedroomState)) {
      filteredProperties = filteredProperties.filter((item) => {
        const noOfBedrooms = parseInt(item.bedrooms);
        if (isNaN(bedroomState)) {
          return noOfBedrooms > 4;
        }
        return noOfBedrooms === parseInt(bedroomState);
      });
    }

    // Price Filter
    if (!isDefault(priceState)) {
      const minPrice = parseInt(priceState.split(" ")[0]);
      const maxPrice = parseInt(priceState.split(" ")[2]);
      filteredProperties = filteredProperties.filter((item) => {
        const itemPrice = parseInt(item.price);
        return itemPrice > minPrice && itemPrice < maxPrice;
      });
    }

    // Type Filter
    if (!isDefault(typeState)) {
      filteredProperties = filteredProperties.filter((item) => {
        return item.type === typeState;
      });
    }

    dispatch(updateProperties(filteredProperties));
  }, [dispatch, countryState, bedroomState, priceState, typeState, searchText]);

  return (
    <form className="filter">
      <CountryDropDown setSelectedCountry={setSelectedCountry} />
      <BedDropdown setSelectedBeds={setSelectedBeds} />
      <PriceDropdown setSelectedPrice={setSelectedPrice} />
      <TypeDropdown setSelectedType={setSelectedType} />
      <div>
        <button onClick={handleClick} className="filter-search">
          Search
        </button>
      </div>
    </form>
  );
};

export default Filter;
