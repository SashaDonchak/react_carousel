import React, {useState} from 'react'

const Carousel = () => {
    const [currentSlide, changeSlide] = useState(1);
    const slidesCount = 7;

    const goToPrevSlide = event => {
        event.preventDefault();
        (currentSlide <= 1) 
        ? changeSlide(slidesCount)
        : changeSlide(currentSlide - 1);
    }

    const goToNextSlide = event => {
        event.preventDefault();
        (currentSlide === slidesCount) 
        ? changeSlide(1)
        : changeSlide(currentSlide + 1);
    }

    return (
        <div className="carousel">
            <div className="carousel-items">
                <div className="carousel-item">
                    {currentSlide}
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