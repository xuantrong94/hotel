import React from "react";

import "./hotel.scss";

import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { FaLocationArrow } from "react-icons/fa";

const Hotel = () => {
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotel__container">
        <div className="hotel__wrapper">
          <h1 className="hotel__title">Grand Hotel</h1>
          <div className="hotel__address">
            <FaLocationArrow />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
