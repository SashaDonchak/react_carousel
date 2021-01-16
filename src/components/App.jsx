import React from 'react'
import Carousel from './Carousel'
import './app.css'

const App = () => (
    <>
        <div className="container">
            <h1>Hello, carousel!</h1>
            <Carousel>
                <img src="./src/images/image1.jpg" alt="test" />
                <div>
                    <img src="./src/images/image2.jpg" alt="test" />
                    <span>Wondeful!</span>
                </div>
                <div>
                    test2
                </div>
                <div>
                    test3
                </div>
            </Carousel>
        </div>
    </>
)


export default App;