import React from 'react';
import './style.css';

const Nav = ({ slidesCount, currentSlide, changeSlide }) => {
    const getPagination = () => {
        const pages = [];
        for (let i = 0; i < slidesCount; ++i) {
            pages.push(i);
        }
        return pages;
    }
    return (
        <div className="carousel-nav">
            {getPagination().map((page, index) => (
                page == currentSlide)
                ? <button className="carousel-nav-item carousel-nav-item--active" key={index}>
                    <img src="./src/components/Nav/circle-fill.svg" alt="circle--fill" />
                </button>
                : <button className="carousel-nav-item" key={index} onClick={() => changeSlide(index)}>
                    <img src="./src/components/Nav/circle.svg" alt="circle" />
                </button>
            )}


        </div>
    );
};

export default Nav;