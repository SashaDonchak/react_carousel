import React, { useState, Children, useEffect, useRef } from 'react';

const Carousel = ({ children }) => {
  const [currentSlide, changeSlide] = useState(0);
  const [touchStartPoint, setTouchStartPoint] = useState(0);
  const [currentPoint, setCurrentPoint] = useState(0);
  const [width, setWidth] = useState(0);

  const container = useRef(null);
  const track = useRef(null);

  const slidesCount = Children.count(children);

  const deltaX = currentPoint === 0 ? 0 : touchStartPoint - currentPoint;

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
    const { clientX } = (event.touches && event.touches[0]) || event
    setTouchStartPoint(clientX);
  };

  const handleTouchMove = event => {
    const { clientX } = (event.touches && event.touches[0]) || event
    setCurrentPoint(clientX);
  }

  const handleTouchEnd = () => {
    console.log(touchStartPoint);
    if (deltaX >= 20) {
      goToNextSlide();
    } else if (deltaX <= -20) {
      goToPrevSlide();
    }

    setTouchStartPoint(0);
    setCurrentPoint(0);
  };

  useEffect(() => {
    setWidth(container.current.clientWidth);
  }, [])

  const trackStyle = {
    width: `${width * slidesCount}px`,
    transform: `translate3d(-${width * currentSlide + deltaX}px, 0px, 0px)`,
    transition: deltaX === 0 ? '.3s' : 'none'
  };

  return (
    <div className="carousel" ref={container}>
      <div className="carousel-items-list">
        <div
          className="carousel-track"
          ref={track}
          style={trackStyle}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchMove={handleTouchMove}
        >
          {Children.map(children, (child) => (
            <div className="carousel-item" style={{ width }}>{child}</div>
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
