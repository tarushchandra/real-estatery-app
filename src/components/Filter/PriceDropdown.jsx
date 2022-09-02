import { useSelector, useDispatch } from "react-redux";
import { getPrice, updatePrice } from "../../redux/propertySlice";

const PriceDropdown = () => {
  const price = useSelector(getPrice);
  const dispatch = useDispatch();
  const prices = [
    "Select Price",
    "$0 - $1000",
    "$1000 - $2000",
    "$2000 - $3000",
    "$3000 - $4000",
  ];

  function handleChange(e) {
    dispatch(updatePrice(e.target.value));
  }

  return (
    <>
      <div className="query-container">
        <div>
          <p className="query">Price Range</p>
          <select onChange={handleChange}>
            {prices.map((price) => {
              return <option>{price}</option>;
            })}
          </select>
        </div>
      </div>
    </>
  );
};

export default PriceDropdown;
