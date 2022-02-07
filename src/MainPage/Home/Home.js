import React from "react";
import health from "../../image/service/health-bottle-cut.jpg";
import avocado from "../../image/product/avocado.png";
import fruits from "../../image/01_fruits-280x355.jpg";
import vegetables from "../../image/02_vegetables-280x355.jpg";
import nuts from "../../image/04_nuts-280x355.jpg";
import berries from "../../image/03_berries-280x355.jpg";
import "./Home.css";
import { GiBurningTree } from "react-icons/gi";
import { BiDish } from "react-icons/bi";
import { GoPackage } from "react-icons/go";
import { BsCupStraw } from "react-icons/bs";
import Testimonial from "../../SharePage/Testimonial/Testimonial.js";
import HeaderSlider from "../../SharePage/Slider/HeaderSlider.js";
import PopularPds from "../../AllProduct/PopularPds/PopularPds.js";
const Home = () => {
  return (
    <div>
      {/* Healthy and tasty foods */}
      <HeaderSlider></HeaderSlider>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12 healthy-style">
            <h1 className="healthy-title">
              Healthy and tasty foods with <span>natural ingredients</span>
            </h1>
            <p>
              Quisque pretium dolor turpis, quis blandit turpis semper ut. Nam
              malesuada eros nec luctus laoreet. Fusce sodales consequat velit
              eget dictum. Integer ornare magna vitae ex eleifend congue. Morbi
              sit amet nisi iaculis, fringilla orci nec.
            </p>

            <button type="button" class="btn btn-danger my-2 ">
              Read more
            </button>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <img
              className="img-fluid "
              src={health}
              alt="healthlty food image"
            />
          </div>
        </div>
      </div>
      {/* Only  food service */}
      <div className="container-fluid my-5 py-5 service-section">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-6 service-style">
            <h2>
              <GiBurningTree
                size={50}
                color={"#fff"}
                backgroundColor={"#83c52f"}
                borderRadiu={"100%"}
                s
              />
            </h2>
            <h5 className="service-title">Only natural food</h5>
            <p>Nam malesuada eros nec luctus laoreet fusce sodales consequat</p>
          </div>
          <div className="col-lg-3 col-md-3 col-6 service-style">
            <h2>
              <BiDish
                size={50}
                color={"#fff"}
                backgroundColor={"#83c52f"}
                borderRadiu={"100%"}
                s
              />
            </h2>
            <h5 className="service-title">Only natural food</h5>
            <p>Nam malesuada eros nec luctus laoreet fusce sodales consequat</p>
          </div>
          <div className="col-lg-3 col-md-3 col-6 service-style">
            <h2>
              <GoPackage
                size={50}
                color={"#fff"}
                backgroundColor={"#83c52f"}
                borderRadiu={"100%"}
                s
              />
            </h2>
            <h5 className="service-title">Only natural food</h5>
            <p>Nam malesuada eros nec luctus laoreet fusce sodales consequat</p>
          </div>
          <div className="col-lg-3 col-md-3 col-6 service-style">
            <h2>
              <BsCupStraw
                size={50}
                color={"#fff"}
                backgroundColor={"#83c52f"}
                borderRadiu={"100%"}
                s
              />
            </h2>
            <h5 className="service-title">Only natural food</h5>
            <p>Nam malesuada eros nec luctus laoreet fusce sodales consequat</p>
          </div>
        </div>
      </div>
      {/* container section end */}

      {/* Popular Smoothies start  */}
      <div className="container my-5 py-5 popular-title">
        <h1 className="healthy-title py-3 ">Popular Smoothies</h1>
        <div className="row">
          <div
            className="col-lg-3 col-md-3 col-6 service-style popular-product"
            id="popular-product-rgba"
          >
            <div className="bg-rgba"></div>
            <div className="product-info">
              <h5 className="service-title fs-5">Pineapple Splash</h5>
              <p>Pineapple, mango & min</p>
              <button type="button" className="btn btn-danger fw-bold ">
                Add to cart
              </button>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-3 col-6 service-style popular-product02"
            id="popular-product-rgba"
          >
            <div className="bg-rgba"></div>
            <div className="product-info">
              <h5 className="service-title fs-5">Watermelon Cooler</h5>
              <p>Watermelon, lime and apple</p>
              <button type="button" className="btn btn-danger fw-bold ">
                Add to cart
              </button>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-3 col-6 service-style popular-product03"
            id="popular-product-rgba"
          >
            <div className="bg-rgba"></div>
            <div className="product-info">
              <h5 className="service-title fs-5">Violet Banana</h5>
              <p>Blackberry, banana & kiwi</p>
              <button type="button" className="btn btn-danger fw-bold ">
                Add to cart
              </button>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-3 col-6 service-style popular-product04"
            id="popular-product-rgba"
          >
            <div className="bg-rgba"></div>
            <div className="product-info">
              <h5 className="service-title fs-5">Pineapple Splash</h5>
              <p>Pineapple, mango & min</p>
              <button type="button" className="btn btn-danger fw-bold ">
                add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* container section end */}
      <div className="container-fluid organic-food-style">
        <div className="organic-food">
          <img className="img-fluid organic-food" src={avocado} alt="" />
        </div>
      </div>
      {/* container organic section start */}
      <div class="container-fluid organic-section-main">
        <div class="container organic-section-style">
          <h1 className="healthy-title text-center">
            We use only <span>organic products grown </span> on private farms,
            without nitrates and additives
          </h1>
          <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 pt-3 mt-3">
            <div class="col-lg-3 col-md-3 col-6">
              <div class="p-3 border bg-light organic-section rounded-circle ">
                <img
                  className="img-fluid image-size-fix rounded-circle"
                  src={fruits}
                  alt=""
                  width={"250px"}
                  height={"250px"}
                />
              </div>
              <div className="organic-title">
                <h5 className="service-title">Only natural food</h5>
                <p>
                  Nam malesuada eros nec luctus laoreet fusce sodales consequat
                </p>
              </div>
            </div>
            <div class="col-lg-3 col-md-3 col-6">
              <div class="p-3 border bg-light organic-section rounded-circle ">
                <img
                  className="img-fluid image-size-fix rounded-circle"
                  src={vegetables}
                  alt=""
                  width={"250px"}
                  height={"250px"}
                />
              </div>
              <div className="organic-title">
                <h5 className="service-title">Vegetables</h5>
                <p>
                  Donec ultricies gravida ex non rhoncus donec pulvinar leo eu.
                </p>
              </div>
            </div>
            <div class="col-lg-3 col-md-3 col-6">
              <div class="p-3 border bg-light organic-section rounded-circle ">
                <img
                  className="img-fluid image-size-fix rounded-circle"
                  src={nuts}
                  alt=""
                  width={"250px"}
                  height={"250px"}
                />
              </div>
              <div className="organic-title">
                <h5 className="service-title">Nuts and Greens</h5>
                <p>
                  Aliquam fermentum nisl et leo congue sollicitudin placerat
                  ante vitae.
                </p>
              </div>
            </div>
            <div class="col-lg-3 col-md-3 col-6">
              <div class="p-3 border bg-light organic-section rounded-circle ">
                <img
                  className="img-fluid image-size-fix rounded-circle"
                  src={berries}
                  alt=""
                />
              </div>
              <div className="organic-title">
                <h5 className="service-title">Organic Berries</h5>
                <p>
                  Maecenas metus arcu, lacinia nec magna vel, ultrices aliquet
                  justo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popular section end */}

      <div class="container-fluid ">
        <div class="container">
          <h1 className="healthy-title text-center mt-5">Popular Goods</h1>
          <PopularPds></PopularPds>
        </div>
      </div>
      {/* Popular section end */}

      <div className="container">
        <h6 className="healthy-title text-center">Testimonials</h6>
        <h1 className="pt-3 fw-bold">Why Our Clients Choose Us?</h1>
        <Testimonial></Testimonial>
      </div>
    </div>
  );
};

export default Home;
