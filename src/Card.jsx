import React from "react";
import "./card.css";

const Card = ({ value, img, setSelected, selected }) => {
  const handleChange = (e) => {
    let value = e.target.value;
    setSelected(value);
    // setSelected({ value: value });
  };
  return (
    <>
      <div className="label">
        <input
          type="radio"
          id="momo"
          name="momo"
          value={value}
          onChange={handleChange}
        />
        <label htmlFor={value}>{value}</label>

        <div className="image">
          <img src={img} alt="payments" />
        </div>
      </div>
    </>
  );
};

export default Card;
