import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import {
  FaBed,
  FaCalendarDay,
  FaCar,
  FaPlane,
  FaTaxi,
} from "react-icons/fa";
import { GiPerson } from "react-icons/gi";
import { DateRange } from "react-date-range";
import { format } from "date-fns";

import "./header.scss";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const Header = ({ type }) => {
  const [openDate, setOpenDate] = useState(false);

  const [destination, setDestination] = useState("");

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);

  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]:
          operation === "i"
            ? options[name] + 1
            : options[name] - 1,
      };
    });
  };
  const handleSearch = () => {
    navigate("/hotels", {
      state: { destination, date, options },
    });
  };

  return (
    <div className="header">
      <div
        className={
          type === "list"
            ? "header__container list-mode"
            : "header__container"
        }
      >
        <div className="header__list">
          <div className="header__list__item">
            <FaBed />
            <span>Stays</span>
          </div>
          <div className="header__list__item">
            <FaPlane />
            <span>Flights</span>
          </div>
          <div className="header__list__item">
            <FaCar />
            <span>Car rentals</span>
          </div>
          <div className="header__list__item">
            <FaBed />
            <span>Attractions</span>
          </div>
          <div className="header__list__item">
            <FaTaxi />
            <span>Airport taxis</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className="header__title">
              A lifetime of discounts? It's Genius
            </h1>
            <p className="header__desc">
              Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Ipsum voluptates repellendus
              porro ea hic ducimus numquam necessitatibus
              totam esse repudiandae rem voluptas alias,
              aspernatur dolor tempore mollitia iste in
              facere.
            </p>
            <button className="header__btn">
              Sign in / Register
            </button>
            <div className="header__search">
              <div className="header__search__item">
                <FaBed className="header__search__item__icon" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="header__search__item__input"
                  onChange={(e) =>
                    setDestination(e.target.value)
                  }
                />
              </div>
              <div className="header__search__item">
                <FaCalendarDay className="header__search__item__icon" />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="header__search__item__text"
                >{`${format(
                  date[0].startDate,
                  "MM/dd/yyyy"
                )} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) =>
                      setDate([item.selection])
                    }
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="header__search__item__date"
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className="header__search__item">
                <GiPerson className="header__search__item__icon" />
                <span
                  className="header__search__item__text"
                  onClick={() =>
                    setOpenOptions(!openOptions)
                  }
                >
                  {`${options.adult} adult . ${options.children} children . ${options.room} rooms`}
                </span>
                {openOptions && (
                  <div className="header__search__item__options">
                    <div className="header__search__item__options__item">
                      <div className="header__search__item__options__item__text">
                        Adult
                      </div>
                      <div className="header__search__item__options__item__counter">
                        <button
                          className="header__search__item__options__item__counter__btn"
                          onClick={() =>
                            handleOption("adult", "d")
                          }
                          disabled={options.adult <= 1}
                        >
                          -
                        </button>
                        <span className="header__search__item__options__item__counter-number">
                          {options.adult}
                        </span>
                        <button
                          className="header__search__item__options__item__counter__btn"
                          onClick={() =>
                            handleOption("adult", "i")
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="header__search__item__options__item">
                      <div className="header__search__item__options__item__text">
                        Children
                      </div>
                      <div className="header__search__item__options__item__counter">
                        <button
                          className="header__search__item__options__item__counter__btn"
                          onClick={() =>
                            handleOption("children", "d")
                          }
                          disabled={options.children <= 0}
                        >
                          -
                        </button>
                        <span className="header__search__item__options__item__counter-number">
                          {options.children}
                        </span>
                        <button
                          className="header__search__item__options__item__counter__btn"
                          onClick={() =>
                            handleOption("children", "i")
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="header__search__item__options__item">
                      <div className="header__search__item__options__item__text">
                        Room
                      </div>
                      <div className="header__search__item__options__item__counter">
                        <button
                          className="header__search__item__options__item__counter__btn"
                          onClick={() =>
                            handleOption("room", "d")
                          }
                          disabled={options.room <= 1}
                        >
                          -
                        </button>
                        <span className="header__search__item__options__item__counter-number">
                          {options.room}
                        </span>
                        <button
                          className="header__search__item__options__item__counter__btn"
                          onClick={() =>
                            handleOption("room", "i")
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="header__search__item">
                <button
                  className="header__search__item__btn"
                  onClick={handleSearch}
                >
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
