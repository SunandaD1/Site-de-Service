import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../images/slide1.jpg'; 
import slide2 from '../images/slide2.jpg';
import slide3 from '../images/slide3.jpg';


function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <img
        className="d-block w-100"
        src= {slide1}
        alt="Welcome to Learnanda's Tutoring services!"
      />
        <Carousel.Caption>
          <h3>Welcome to Learnanda's Tutoring services!</h3>
          <p>We are here to help, every step of the way</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        className="d-block w-100"
        src= {slide2}
        alt="We are here to help, every step of the way"
        />
        <Carousel.Caption>
          <h3>We know how confusing it can get</h3>
          <p>So we are here for whatever you need</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        className="d-block w-100"
        src={slide3}
        alt="Pick from our many tutors!"
        />
        <Carousel.Caption>
          <h3>Pick from our many tutors!</h3>
          <p>
            We are here to make it happen
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;