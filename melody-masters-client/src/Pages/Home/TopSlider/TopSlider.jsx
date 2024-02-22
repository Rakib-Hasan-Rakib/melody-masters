import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./topslider.css";
import { Autoplay, Navigation, FreeMode, Thumbs } from "swiper";

import slider_1 from "../../../assets/images/top-slider-image/slider-1.jpg";
import slider_2 from "../../../assets/images/top-slider-image/slider-2.jpg";
import slider_3 from "../../../assets/images/top-slider-image/slider-3.jpg";
import slider_4 from "../../../assets/images/top-slider-image/slider-4.jpg";
import slider_5 from "../../../assets/images/top-slider-image/slider-5.jpg";
import slider_6 from "../../../assets/images/top-slider-image/slider-6.jpg";

const TopSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 h-[90vh] -z-50"
      >
        <SwiperSlide>
          <img src={slider_1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider_2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider_3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider_4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider_5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider_6} alt="" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slider_1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider_2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider_3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider_4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider_5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider_6} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default TopSlider;
