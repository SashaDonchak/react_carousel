import React from 'react';
import PropTypes from 'prop-types';
import CircleIcon from './circle.svg';
import CircleFillIcon from './circle-fill.svg';
import './style.css';

const Nav = ({ slidesCount, currentSlide, changeSlide }) => {
  const getPagination = () => {
    const pages = [];
    for (let i = 0; i < slidesCount; i += 1) {
      pages.push(i);
    }
    return pages;
  };
  return (
    <div className="carousel-nav">
      {getPagination().map((page, index) =>
        page === currentSlide ? (
          <button
            type="button"
            className="carousel-nav-item carousel-nav-item--active"
            key={index}
          >
            <img
              src={CircleFillIcon}
              alt="circle--fill"
            />
          </button>
        ) : (
          <button
            type="button"
            className="carousel-nav-item"
            key={index}
            onClick={() => changeSlide(index)}
          >
            <img src={CircleIcon} alt="circle" />
          </button>
        )
      )}
    </div>
  );
};

Nav.propTypes = {
  slidesCount: PropTypes.number.isRequired,
  currentSlide: PropTypes.number.isRequired,
  changeSlide: PropTypes.func.isRequired,
};

export default Nav;
