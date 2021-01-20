import React from 'react';
import PropTypes from 'prop-types';
import PrevArrow from './arrow-left-square.svg';
import NextArrow from './arrow-right-square.svg';
import './style.css';

const Arrows = ({ goToPrevSlide, goToNextSlide }) => (
  <div className="carousel-arrows">
    <button
      type="button"
      className="carousel-arrow carousel-arrow--prev"
      onClick={goToPrevSlide}
    >
      <img src={PrevArrow} alt="prev" />
    </button>
    <button
      type="button"
      className="carousel-arrow carousel-arrow--next"
      onClick={goToNextSlide}
    >
      <img src={NextArrow} alt="next" />
    </button>
  </div>
);

Arrows.propTypes = {
  goToPrevSlide: PropTypes.func.isRequired,
  goToNextSlide: PropTypes.func.isRequired,
};

export default Arrows;
