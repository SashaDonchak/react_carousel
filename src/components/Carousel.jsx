import React, { useState, Children, useEffect } from 'react';

const Carousel = ({ children }) => {
  const [currentSlide, changeSlide] = useState(0);
  const [touchStartPoint, setTouchStartPoint] = useState(0);
  const [touchEndPoint, setTouchEndPoint] = useState(0);
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

  const handleTouchStart = (event) => {
    setTouchStartPoint(event.touches[0].clientX);
  };

  const handleTouchEnd = event => {
    setTouchEndPoint(event.changedTouches[0].clientX);
  };

  useEffect(() => {
    if (touchStartPoint - touchEndPoint >= 20) {
      goToNextSlide();
    } else if (touchStartPoint - touchEndPoint <= -20) {
      goToPrevSlide();
    }

    setTouchStartPoint(0);
    setTouchEndPoint(0);
  }, [touchEndPoint])

  const trackStyle = {
    width: `${400 * slidesCount}px`,
    transform: `translate3d(-${200 * currentSlide}px, 0px, 0px)`,
    transition: '0.3s',
  };

  return (
    <div className="carousel">
      <div className="carousel-items-list">
        <div
          className="carousel-track"
          style={trackStyle}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {Children.map(children, (child) => (
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
