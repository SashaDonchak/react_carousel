import React from 'react';
import Carousel from './Carousel';
import Image1 from '../images/image1.jpg';
import Image2 from '../images/image2.jpg';
import './app.css';

const App = () => (
  <>
    <div className="container">
      <h1>Hello, carousel!</h1>
      <Carousel arrows nav slidesToShow={1}>
        <img src={Image1} alt="test" />
        <div>
          <img src={Image2} alt="test" />
          <span>Wonderful!</span>
        </div>
        <div>Slide 3</div>
        <div>Slide 4</div>
      </Carousel>
    </div>
  </>
);

export default App;
