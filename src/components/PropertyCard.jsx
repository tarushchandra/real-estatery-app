import React from "react";

const PropertyCard = (props) => {
  return (
    <div className="property-card">
      <img src={props.img} alt="prop-img" />
      <div className="property-info">
        <div className="primary">
          <div className="price">
            <p>
              <span>${props.price}</span>/month
            </p>
          </div>
          <div className="name-country">
            <p>
              <span className="name">{props.name}</span> in{" "}
              <span className="country">{props.country}</span>
            </p>
          </div>
          <div className="address">{props.address}</div>
          <div className="type">{props.type}</div>
        </div>
        <div className="secondary">
          <div className="secondary-item beds secondary-border-right">
            <i className="fa-solid fa-bed"></i>
            <p>{props.bedrooms} Beds</p>
          </div>
          <div className="secondary-item bathrooms secondary-border-right">
            <i className="fa-solid fa-shower"></i>
            <p>{props.bathrooms} Bathrooms</p>
          </div>
          <div className="secondary-item size">
            <i className="fa-sharp fa-solid fa-square"></i>
            <p>{props.surface}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
