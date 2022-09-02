import { useSelector, useDispatch } from "react-redux";
import { updateTempCountry, getTempCountry } from "../../redux/propertySlice";

const CountryDropDown = () => {
  const tempCountry = useSelector(getTempCountry);
  const dispatch = useDispatch();
  const countries = [
    "Select Location",
    "United States",
    "Canada",
    "Brazil",
    "Mexico",
    "Cuba",
  ];

  function handleClick(e) {
    const { value } = e.target;
    dispatch(updateTempCountry(value));
  }

  console.log("Temp Country -", tempCountry);

  return (
    <>
      <div className="query-container">
        <div>
          <p className="query">Location</p>
          <select onClick={handleClick}>
            {countries.map((country) => {
              return <option value={country}>{country}</option>;
            })}
          </select>
        </div>
      </div>
    </>
  );
};

export default CountryDropDown;
