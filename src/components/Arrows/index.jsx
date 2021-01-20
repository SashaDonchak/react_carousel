import React from 'react';
import './style.css';

const Arrows = ({ goToPrevSlide, goToNextSlide }) => {
    return (
        <div className="carousel-arrows">
            <button className="carousel-arrow carousel-arrow--prev" onClick={goToPrevSlide}>
                <img src="./src/components/Arrows/arrow-left-square.svg" alt="prev" />
            </button>
            <button className="carousel-arrow carousel-arrow--next" onClick={goToNextSlide}>
                <img src="./src/components/Arrows/arrow-right-square.svg" alt="next" />
            </button>
        </div>
    );
};

export default Arrows;