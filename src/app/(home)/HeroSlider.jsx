"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Autoplay, EffectFade, Navigation } from "swiper";
import { slideData } from "@/data/slideData";
import SlideSingle from "./SlideSingle";

const HeroSlider = () => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        modules={[Navigation, Autoplay, EffectFade]}
        navigation
        autoplay
        loop
        effect="fade"
      >
        {
            slideData.map(slide=><SwiperSlide
            key={slide.id}
            ><SlideSingle slide={slide}></SlideSingle></SwiperSlide>)
        }
        ...
      </Swiper>
    </div>
  );
};

export default HeroSlider;
