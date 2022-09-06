import { useState } from "react";

const PriceDropdown = ({ setSelectedPrice }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Select Price");

  const prices = ["Range (Any)", "0 - 1000", "1000 - 2000", "3000 - 4000"];

  function handleClick(e) {
    setSelected(e.target.textContent);
    setSelectedPrice(e.target.textContent);
    setIsOpen(false);
  }

  return (
    <>
      <div className="query-container">
        <p className="query">Price Range</p>
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
            {prices.map((item, index) => {
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

export default PriceDropdown;
