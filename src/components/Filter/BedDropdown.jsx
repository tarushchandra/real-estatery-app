import { useState } from "react";

const BedDropdown = ({ setSelectedBeds }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Select Beds");

  const bedrooms = ["Bedrooms (Any)", "1", "2", "3", "4", "more than 4"];

  function handleClick(e) {
    setSelected(e.target.textContent);
    setSelectedBeds(e.target.textContent);
    setIsOpen(false);
  }

  return (
    <>
      <div className="query-container">
        <p className="query">Bedrooms</p>
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
            {bedrooms.map((item, index) => {
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
