import React from 'react';
import Carousel from './Carousel';
import './app.css';

const App = () => (
  <>
    <div className="container">
      <h1>Hello, carousel!</h1>
      <Carousel arrows nav slidesToShow={2}>
        <img src="./src/images/image1.jpg" alt="test" />
        <div>
          <img src="./src/images/image2.jpg" alt="test" />
          <span>Wonderful!</span>
        </div>
        <div>Slide 3</div>
        <div>Slide 4</div>
      </Carousel>
    </div>
  </>
);

export default App;
