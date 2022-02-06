import React from "react";
import { Carousel } from "react-bootstrap";
import smoothie_SLIDE from "../../image/slider/smoothie_SLIDE_02.jpg";
import team_02 from "../../image/team-02-140x140.jpg";
import "./Testimonial.css";
const Testimonial = () => {
  return (
    <div>
      <div>
        <Carousel variant="dark">
          <Carousel.Item className="testimonial">
            {/* <img
              className="d-block w-100"
              src={smoothie_SLIDE}
              alt="First slide"
            /> */}
            <Carousel.Caption>
              <p>
                Nullam orci dui, dictum et magna sollicitudin, tempor blandit
                erat. Maecenas suscipit tellus sit amet augue placerat fringilla
                a id lacus. Morbi viverra volutpat ex, id pellentesque felis
                volutpat eu. Etiam mattis laoreet leo sed accumsan. Fusce
                tincidunt in leo lacinia condimentum..
              </p>
              <p>-----------------------------------</p>
              <img
                src={team_02}
                alt=""
                className="d-block rounded-circle"
                width={"100px"}
                height={"100px"}
              />
              <h5>Riaz</h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="testimonial">
            {/* <img
              className="d-block w-100"
              src={smoothie_SLIDE}
              alt="Second slide"
            /> */}
            <Carousel.Caption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="testimonial">
            {/* <img
              className="d-block w-100"
              src={smoothie_SLIDE}
              alt="Third slide"
            /> */}
            <Carousel.Caption>
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonial;
