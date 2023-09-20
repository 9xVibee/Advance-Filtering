/* eslint-disable react/prop-types */
// import React from "react";

import { BsFillBagHeartFill } from "react-icons/bs";

// eslint-disable-next-line no-unused-vars
const Card = ({img, star, prevPrice, newPrice, title, reviews }) => {
  return (
    <section className="card">
      <img src={img} alt="Shoe" className="card-img" />

      <div className="card-details">
        <h3 className="card-title">{title}</h3>
        <section className="card-reviews">
          {star}{star}{star}{star}
          <span className="total-review">{reviews}</span>
        </section>
        <section className="card-price">
          <div className="price">
            <del>{prevPrice}</del> {newPrice}
          </div>
          <div className="bag">
            <BsFillBagHeartFill className="bag-icons" />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Card;
