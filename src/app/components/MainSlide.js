"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js
import Button from "./Button"; // Assuming Button is a custom component
import Style from "../style/MainSlider.module.css";
import Navbar from "./Navbar";

function SimpleSlider() {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const slideContents = [
    {
      image: "/images/mainslider_1.jpg",
      text: "The Fastest Way to Send Money Worldwide",
    },
    {
      image: "/images/mainslider_2.jpeg",
      text: "Where You Know Your Banker and Your Banker Knows You",
    },
    {
      image: "/images/mainslider_3.jpeg",
      text: "Our Quest to Make Banking Better Starts Here",
    },
  ];
  return (
    <div className="relative ">
      <div className="navbar  absolute top-0 left-0 right-0 p-5 z-10">
      <Navbar />
      </div>
      <Slider {...settings}>
        {slideContents.map((content, index) => (
          <div key={index} className="">
            <div className="h-screen  w-screen items-center flex justify-center flex-col ">
              <Image
                src={content.image}
                width={1000} 
                height={1000} 
                alt={content.alt} 
                className={`${Style.Man_image_set}`}
              />
              <div className="absolute flex justify-center flex-col text-center items-center ">
                <p className="text-white  text-center w-[80%] text-6xl font-serif leading-[80px] z-20 ">
                  {content.text}
                </p>
                <div className="pt-5 z-20 flex justify-center">
                  <Button />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SimpleSlider;
