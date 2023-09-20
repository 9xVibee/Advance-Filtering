/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import React from 'react'

const Input = ({ handleChange, title, value, name, color, className }) => {
  return (
    <label className="sidebar-label-container">
      <input
        onChange={handleChange}
        type="radio"
        name={name}
        value={value}
        className={className}
      />
      <span
        className="checkmark"
        style={{
          backgroundColor: color,
        }}
      ></span>
      {title}
    </label>
  );
};

export default Input;
