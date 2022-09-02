import React from "react";

const Appbar = () => {
  return (
    <div className="appbar">
      <div className="heading">
        <i className="fa-solid fa-building"></i>
        <h2>Estatery</h2>
      </div>
      <div className="menu-container">
        <h3>Rent</h3>
        <h3>Buy</h3>
        <h3>Sell</h3>
        <h3>Manage Property</h3>
        <h3>Resources</h3>
      </div>
      <div className="buttons">
        <button className="btn login">Login</button>
        <button className="btn sign-up">Sign up</button>
      </div>
    </div>
  );
};

export default Appbar;
