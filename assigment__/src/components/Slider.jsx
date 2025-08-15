import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Style/slider.css";

function SimpleSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="part-1 ">
                <div className="vertical-line"></div>
          <h3>BEST PLACE TO RELAX & ENJOY</h3>
          <h2>A Luxurious Way To </h2>
          <h2>Enjoy Your Life</h2>
          <p>Discover Rooms</p>
        </div>
        <div className="part-1 ">
                <div className="vertical-line"></div>
          <h3>BEST PLACE TO RELAX & ENJOY</h3>
          <h2>A Luxurious Way To </h2>
          <h2>Enjoy Your Life</h2>
          <p>Discover Rooms</p>
        </div>
        <div className="part-1 ">
                <div className="vertical-line"></div>
          <h3>BEST PLACE TO RELAX & ENJOY</h3>
          <h2>A Luxurious Way To </h2>
          <h2>Enjoy Your Life</h2>
          <p>Discover Rooms</p>
        </div>
        <div className="part-1 ">
                <div className="vertical-line"></div>
          <h3>BEST PLACE TO RELAX & ENJOY</h3>
          <h2>A Luxurious Way To </h2>
          <h2>Enjoy Your Life</h2>
          <p>Discover Rooms</p>
        </div>
        <div className="part-1 ">
                <div className="vertical-line"></div>
          <h3>BEST PLACE TO RELAX & ENJOY</h3>
          <h2>A Luxurious Way To </h2>
          <h2>Enjoy Your Life</h2>
          <p>Discover Rooms</p>
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;
