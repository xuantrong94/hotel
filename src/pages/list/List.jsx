import React, { useState } from "react";
import { format } from "date-fns";

import "./list.scss";

import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import { useLocation } from "react-router-dom";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";

const List = () => {
  const location = useLocation();

  const [destination, setDestination] = useState(
    location.state.destination
  );
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(
    location.state.options
  );

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="list__container">
        <div className="list__wrapper">
          <div className="list__search">
            <h1 className="list__search__title">Search</h1>
            <div className="list__search__item">
              <label htmlFor="">Destination</label>
              <input
                type="text"
                placeholder={destination ? "" : destination}
              />
            </div>
            <div className="list__search__item">
              <label htmlFor="">Check-in date</label>
              <span
                onClick={() => setOpenDate(!openDate)}
              >{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(
                date[0].endDate,
                "MM/dd/yyyy"
              )}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) =>
                    setDate([item.selection])
                  }
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="list__search__item">
              <label>Options</label>
              <div className="list__search__item__option__container">
                <div className="list__search__item__option">
                  <span className="list__search__item__option__text">
                    Min price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    className="list__search__item__option__input"
                  />
                </div>
                <div className="list__search__item__option">
                  <span className="list__search__item__option__text">
                    Max price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    className="list__search__item__option__input"
                  />
                </div>
                <div className="list__search__item__option">
                  <span className="list__search__item__option__text">
                    Adult
                  </span>
                  <input
                    type="number"
                    className="list__search__item__option__input"
                    placeholder={options.children}
                    min={1}
                  />
                </div>
                <div className="list__search__item__option">
                  <span className="list__search__item__option__text">
                    Children
                  </span>
                  <input
                    type="number"
                    className="list__search__item__option__input"
                    placeholder={options.rooms}
                    min={0}
                  />
                </div>
                <div className="list__search__item__option">
                  <span className="list__search__item__option__text">
                    Rooms
                  </span>
                  <input
                    type="number"
                    className="list__search__item__option__input"
                    placeholder={options.adult}
                    min={1}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="list__result"><SearchItem /></div>
        </div>
      </div>
    </div>
  );
};

export default List;
