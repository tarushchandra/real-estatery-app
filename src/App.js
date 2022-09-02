import React from "react";
import Appbar from "./components/Appbar";
import Filter from "./components/Filter/Filter";
import PropertyCard from "./components/PropertyCard";
import Subheading from "./components/Subheading";

import { getProperties } from "./redux/propertySlice";
import { useSelector } from "react-redux";

function App() {
  const totalProperties = useSelector(getProperties);

  return (
    <div className="app">
      <Appbar />
      <div className="main-container">
        <Subheading />
        <Filter />
        <div className="card-container">
          {totalProperties.map((property) => {
            return (
              <PropertyCard
                key={property.id}
                img={property.image}
                price={property.price}
                name={property.name}
                country={property.country}
                address={property.address}
                type={property.type}
                bedrooms={property.bedrooms}
                bathrooms={property.bathrooms}
                surface={property.surface}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
