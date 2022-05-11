import React from "react";
import "./searchItem.scss";

const SearchItem = () => {
  return (
    <div className="result">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className="result__img"
      />
      <div className="result__desc">
        <h1 className="result__desc__title">
          Tower Street Apartments
        </h1>
        <span className="result__desc__distance">
          500m from center
        </span>
        <span className="result__desc__taxi-op">
          Free airport taxi
        </span>
        <span className="result__desc__subtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="result__desc__features">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="result__desc__cancel-op">
          Free cancellation{" "}
        </span>
        <span className="result__desc__cancel-op-subtitle">
          You can cancel later, so lock in this great price
          today!
        </span>
      </div>
      <div className="result__detail">
        <div className="result__detail__rating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="result__detail__texts">
          <span className="result__detail__texts__price">
            $112
          </span>
          <span className="result__detail__texts__tax-op">
            Includes taxes and fees
          </span>
          <button className="result__detail__texts__check-button">
            See availability
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
