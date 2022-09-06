import React from "react";

const Subheading = ({ setSearchText }) => {
  return (
    <div className="subheading">
      <h1>Search properties to rent</h1>
      <div className="search">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default Subheading;
