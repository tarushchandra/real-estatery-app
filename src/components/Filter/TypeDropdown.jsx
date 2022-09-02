import { useSelector, useDispatch } from "react-redux";
import { getPropertyType, updatePropertyType } from "../../redux/propertySlice";

const TypeDropdown = () => {
  const type = useSelector(getPropertyType);
  const dispatch = useDispatch();
  const types = ["Select Type", "House", "Apartment"];

  function handleChange(e) {
    dispatch(updatePropertyType(e.target.value));
  }

  return (
    <>
      <div className="query-container">
        <div>
          <p className="query">Property Type</p>
          <select onChange={handleChange}>
            {types.map((country) => {
              return <option>{country}</option>;
            })}
          </select>
        </div>
      </div>
    </>
  );
};

export default TypeDropdown;
