import { useState } from "react";

const BedDropdown = ({ setSelectedType }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Select Type");

  const types = ["Type (Any)", "House", "Apartment"];

  function handleClick(e) {
    setSelected(e.target.textContent);
    setSelectedType(e.target.textContent);
    setIsOpen(false);
  }

  return (
    <>
      <div className="query-container">
        <p className="query">Property Type</p>
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
            {types.map((item, index) => {
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

export default BedDropdown;
