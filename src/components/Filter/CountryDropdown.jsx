import { useState } from "react";

const CountryDropDown = ({ setSelectedCountry }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Select Location");

  const countries = [
    "Location (Any)",
    "United States",
    "Canada",
    "Brazil",
    "Mexico",
    "Cuba",
  ];

  function handleClick(e) {
    setSelected(e.target.textContent);
    setSelectedCountry(e.target.textContent);
    setIsOpen(false);
  }

  return (
    <>
      <div className="query-container">
        <p className="query">Location</p>
        <div onClick={() => setIsOpen(!isOpen)} className="query-selector">
          <p>{selected}</p>
          {isOpen ? (
            <i className="fa-solid fa-angle-up"></i>
          ) : (
            <i className="fa-solid fa-angle-down"></i>
          )}
        </div>
        {isOpen && (
          <div className="query-list">
            {countries.map((item, index) => {
              return (
                <li key={index} onClick={handleClick}>
                  {item}
                </li>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default CountryDropDown;
