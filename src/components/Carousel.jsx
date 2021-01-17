import React, { useState, Children } from 'react';

const Carousel = ({ children }) => {
  const [currentSlide, changeSlide] = useState(0);
  const [pixelsToSlide, changePixels] = useState(0);
  const [touchedX, setTouchedPoint] = useState(0);
  const [touchingX, setTouchingPoint] = useState(0);
  const slidesCount = Children.count(children);

  const goToPrevSlide = () => {
    currentSlide <= 0
      ? changeSlide(slidesCount - 1)
      : changeSlide(currentSlide - 1);
  };

  const goToNextSlide = () => {
    currentSlide === slidesCount - 1
      ? changeSlide(0)
      : changeSlide(currentSlide + 1);
  };

  const handleTouchMove = (event) => {
    setTouchingPoint(event.touches[0].clientX);

    touchedX > touchingX
      ? changePixels(touchedX - touchingX)
      : changePixels(touchingX - touchedX);
  };

  const handleTouchEnd = () => {
    if (pixelsToSlide >= 10) {
      touchedX > touchingX ? goToNextSlide() : goToPrevSlide();
    }

    changePixels(0);
  };

  const handleTouchStart = (event) => {
    setTouchedPoint(event.touches[0].clientX);
  };



  const defaultStyle = {
    width: `${400 * slidesCount}px`,
    transition: '0.3s',
  };

  const trackCurrentStyle = {
    transform: `translate3d(-${
      200 * currentSlide - pixelsToSlide
    }px, 0px, 0px)`,
  };

  return (
    <div className="carousel">
      <div className="carousel-items-list">
        <div
          className="carousel-track"
          style={{ ...defaultStyle, ...trackCurrentStyle }}
          onTouchMove={handleTouchMove}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {Children.map(children, (child, i) => (
            <div className="carousel-item">{child}</div>
          ))}
        </div>
      </div>
      <div className="carousel-nav">
        <button className="carousel-nav__prev" onClick={goToPrevSlide}>
          Prev
        </button>
        <button className="carousel-nav__next" onClick={goToNextSlide}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
