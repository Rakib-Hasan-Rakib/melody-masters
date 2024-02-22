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
        className="mySwiper2 h-[90vh]"
      >
        <SwiperSlide>
          <img
            src={slider_1}
            alt=""
            className="h-[100%] w-full object-cover object-center"
          />
          <div className="bg-red-500">
            <h1>Harmonize Your Journey</h1>
            <p className="text-black">
              -Unlock Your Musical Potential with Our Instrument Learning
              School!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slider_2}
            alt=""
            className="h-[100%] w-full object-cover object-center"
          />
          <p className="z-10">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
            deleniti esse quos distinctio illum est odit cumque voluptas, error
            autem dolor ipsa, sequi aperiam earum corrupti debitis! Maiores sunt
            molestias hic minus dolorem! Explicabo debitis quam molestiae
            accusantium asperiores quasi quis quisquam, modi ut expedita id sed
            eaque! Ad at quam saepe unde, ea illum doloribus numquam nostrum,
            porro quod sint. Earum aperiam impedit fuga libero, similique quo id
            repudiandae deleniti ullam dolores mollitia qui illum amet! Animi
            maiores ipsam, eius in tenetur voluptatum, voluptates, doloremque
            officiis qui nostrum expedita. Eligendi dignissimos sapiente itaque
            error soluta sed animi officia nam dolore aliquid, repellendus non
            eaque aspernatur illo corporis maiores suscipit est. Culpa eligendi
            dolorem reiciendis omnis deleniti facilis tempora dicta. Tenetur
            earum, veniam sunt, rem laborum ratione eveniet blanditiis, illo
            ducimus laudantium ullam ipsam doloribus? Esse illo sed recusandae
            possimus, repellat, ducimus dolorum sapiente eius dolor nam nihil!
            Animi, quis! Quae, ipsam dolorum culpa dolore cupiditate quisquam,
            aspernatur maxime modi quis asperiores odio nostrum? Incidunt
            necessitatibus ex, fugit nemo odit maxime sequi impedit veritatis
            esse error, debitis odio accusantium cumque. Voluptatibus blanditiis
            ex eum omnis nisi, hic tempora fugiat nostrum vel? Accusantium
            praesentium inventore, voluptatem atque asperiores, rerum ipsam
            alias eveniet ipsa ab velit adipisci doloribus quo ipsum molestias
            vel ullam ducimus officia placeat, dolor tempore quasi fuga numquam
            soluta. Deserunt saepe eos cupiditate ipsam perferendis laborum
            aliquam assumenda dicta culpa obcaecati, officiis autem ducimus sunt
            aut quae. Eum facilis, officia, eius voluptates consectetur ea ad
            aliquam voluptatum consequuntur nesciunt culpa debitis labore
            doloremque amet laboriosam obcaecati hic ducimus non reiciendis
            eaque! Fuga voluptatum, quos, eveniet odit quis corrupti tenetur sit
            ut amet aliquid magni ab culpa consequatur incidunt, vero aspernatur
            reiciendis dignissimos corporis ipsum dolorem placeat? Adipisci ab
            voluptates deleniti maiores consequatur, reprehenderit minus ea
            dolorem at sed asperiores id deserunt cumque numquam debitis
            expedita ipsa impedit quibusdam odit suscipit quos. Perferendis in
            eum tenetur quae vel est officiis quasi suscipit ratione, nesciunt
            beatae facere officia porro excepturi corporis aut numquam placeat
            reiciendis hic! Totam, quos beatae neque temporibus amet debitis.
            Temporibus adipisci dolorem laboriosam. Vel suscipit maiores ipsum
            officiis ea hic atque sit animi ex repudiandae! Soluta inventore
            ducimus illum eaque dolorum perspiciatis! Quis, deleniti reiciendis
            perspiciatis aperiam enim officia voluptatum? Quo, officia nobis
            labore iste explicabo et incidunt architecto modi, repellendus
            expedita natus ut, accusantium commodi dignissimos molestias
            voluptatem recusandae alias laboriosam velit error quae. Praesentium
            recusandae sapiente eaque obcaecati amet sed repellendus minus sequi
            nisi ducimus cum doloribus atque similique dicta consequuntur
            numquam, ratione quisquam impedit laboriosam incidunt perferendis
            odio libero corporis omnis. Ipsum qui labore praesentium odio
            obcaecati cumque asperiores ab officiis ea. Totam, aperiam
            necessitatibus quibusdam tempora repudiandae perferendis tempore
            blanditiis, tenetur provident eligendi fugit cum eius, nihil
            pariatur harum beatae libero repellendus ducimus voluptates nulla
            atque itaque omnis. Blanditiis exercitationem sapiente dolorem ex
            saepe harum asperiores est perspiciatis optio maiores quas veritatis
            voluptas dignissimos ipsum officia reiciendis fugit, placeat
            explicabo aperiam! Numquam rem qui ut facere itaque rerum molestiae
            quia! Aspernatur, fugit repellendus.
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slider_3}
            alt=""
            className="h-[100%] w-full object-cover object-center"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slider_4}
            alt=""
            className="h-[100%] w-full object-cover object-center"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slider_5}
            alt=""
            className="h-[100%] w-full object-cover object-center"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slider_6}
            alt=""
            className="h-[100%] w-full object-cover object-center"
          />
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
