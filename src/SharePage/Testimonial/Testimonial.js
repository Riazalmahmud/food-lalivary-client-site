import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";

import smoothie_SLIDE from "../../image/slider/smoothie_SLIDE_02.jpg";
import team_02 from "../../image/team-02-140x140.jpg";
import "./Testimonial.css";
const Testimonial = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/feedbacks")
      .then((res) => res.json())
      .then((data) => {
        setReview(data);
      });
  }, []);

  return (
    <div>
      <div>
        <Carousel variant="dark">
          <Carousel.Item className="testimonial">
            {review.map((custer) => (
              <div key={custer._id}>
                <Carousel.Caption>
                  <p>{custer.description}</p>
                  <p>-----------------------------------</p>
                  <img
                    src={custer.img}
                    alt=""
                    className="d-block rounded-circle"
                    width={"100px"}
                    height={"100px"}
                  />
                  <h5>Riaz</h5>
                </Carousel.Caption>
              </div>
            ))}

            {/* <img
              className="d-block w-100"
              src={smoothie_SLIDE}
              alt="First slide"
            /> */}
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonial;
