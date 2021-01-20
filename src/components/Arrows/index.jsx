import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Arrows = ({ goToPrevSlide, goToNextSlide }) => (
  <div className="carousel-arrows">
    <button
      type="button"
      className="carousel-arrow carousel-arrow--prev"
      onClick={goToPrevSlide}
    >
      <img src="./assets/images/arrow-left-square.svg" alt="prev" />
    </button>
    <button
      type="button"
      className="carousel-arrow carousel-arrow--next"
      onClick={goToNextSlide}
    >
      <img src="./assets/images/arrow-right-square.svg" alt="next" />
    </button>
  </div>
);

Arrows.propTypes = {
  goToPrevSlide: PropTypes.func.isRequired,
  goToNextSlide: PropTypes.func.isRequired,
};

export default Arrows;
