import React, { Component } from "react";
import Slider from "react-slick";
import smoothie_SLIDE_01 from "../../image/slider/smoothie_SLIDE_01.jpg";
import smoothie_SLIDE_02 from "../../image/slider/smoothie_SLIDE_02.jpg";
import smoothie_SLIDE_03 from "../../image/slider/smoothie_SLIDE_03.jpg";
export default class HeaderSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img
              className="img-fluid image-size-fix"
              src={smoothie_SLIDE_01}
              alt=""
            />
          </div>
          <div>
            <img
              className="img-fluid image-size-fix"
              src={smoothie_SLIDE_02}
              alt=""
            />
          </div>
          <div>
            <img
              className="img-fluid image-size-fix"
              src={smoothie_SLIDE_03}
              alt=""
            />
          </div>
        </Slider>
      </div>
    );
  }
}
