"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

import Style from '../style/Slider.module.css'

export default function SliderImage() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const imageArray = [
    "/images/sliderimage_1.jpeg",
    "/images/sliderimage_2.jpeg",
    "/images/sliderimage_3.jpeg",
    "/images/sliderimage_4.jpeg",
    "/images/sliderimage_5.jpeg", 
    "/images/sliderimage_6.jpeg",
    "/images/sliderimage_7.jpeg",
    "/images/sliderimage_8.jpeg",
  ];

  return (
    <div className="container m-auto py-10">
      <Slider {...settings}>
        {imageArray.map((image, index) => (
          <div key={index}>
            <Image 
              src={image}
              width={250}
              height={250}
              layout="responsive" 
              alt={`Image ${index + 1}`} 
              className={`${Style.image_set}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
