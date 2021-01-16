import React, { useState, Children } from 'react'

const Carousel = ({ children }) => {
    const [currentSlide, changeSlide] = useState(0);
    const [pixelsToSlide, changePixels] = useState(0);
    const slidesCount = Children.count(children);

    let touchedX = 0;
    let touchingX = 0;

    const goToPrevSlide = event => {
        event.preventDefault();
        
        (currentSlide <= 0)
            ? changeSlide(slidesCount-1)
            : changeSlide(currentSlide - 1);
    }

    const handleTouchMove = event => {
        const rect = event.target.getBoundingClientRect();
        touchingX = event.touches[0].clientX - rect.left;

        (touchedX > touchingX)
        ? changePixels(touchedX - touchingX)
        : changePixels(touchingX - touchedX)
    }

    const handleTouchEnd = event => {
        event.preventDefault();

        if (changePixels >= 100) {
            (touchedX > touchingX)
            ? goToNextSlide()
            : goToPrevSlide()
        }

        changePixels(0);
    }

    const handleTouchStart = event => {
        const rect = event.target.getBoundingClientRect();
        touchedX = event.touches[0].clientX - rect.left;
    }

    const goToNextSlide = event => {
        event.preventDefault();

        (currentSlide === slidesCount-1)
            ? changeSlide(0)
            : changeSlide(currentSlide + 1);
    }

    const defaultStyle = {
        width: `${400*slidesCount}px`,
        transition: '0.3s',
    }

    console.log(pixelsToSlide)

    const trackCurrentStyle = {
        transform: `translate3d(-${200*(currentSlide)+pixelsToSlide}px, 0px, 0px)`,
    }

    return (
        <div className="carousel">
            <div className="carousel-items-list">
                <div
                    className="carousel-track"
                    style={{...defaultStyle, ...trackCurrentStyle}}
                    onTouchMove={handleTouchMove}
                    onTouchStart={handleTouchStart}
                    onTouchStart={handleTouchEnd}
                >
                    {Children.map(children, (child, i) => (
                        <div className="carousel-item">{child}</div>
                    ))}
                </div>
            </div>
            <div className="carousel-nav">
                <button className="carousel-nav__prev" onClick={goToPrevSlide}>Prev</button>
                <button className="carousel-nav__next" onClick={goToNextSlide}>Next</button>
            </div>
        </div>
    )
}

export default Carousel;