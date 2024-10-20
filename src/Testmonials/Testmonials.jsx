import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import Content from "./Content";
const Testmonials = () => {
  return (
    <div className="h-[100vh] text-white">
      <div className="lg:px-32 md:px-16 px-10 mt-10">
        <p className="text-3xl md:text-4xl text-green-600">
          Here Are Happy Client's
        </p>
        <p className="text-xl font-[cursive] pt-2 text-violet-300">
          Testmonials
        </p>
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="h-[80vh]"
      >
        <SwiperSlide className="lg:px-32 md:px-16 px-10">
          <Content
            src={
              "https://study.com/cimages/user-profile-images/phauser.20210504-101230.png"
            }
            names={"Philipp Hauser"}
            alt={"Philipp"}
            contents={
              "Delivered excellent work on time with great communication throughout the project. Highly professional and skilled. Would definitely hire again!"
            }
            proffesion={"Product Manager"}
          />
        </SwiperSlide>
        <SwiperSlide className="lg:px-32 md:px-16 px-10">
          <Content
            src={
              "https://study.com/cimages/user-profile-images/smachajewski.20130726-183601.jpg"
            }
            names={"Szymon Machajewski"}
            alt={"Szymon"}
            contents={
              "I am so glad I worked with Michael to grow my business. He is creative, innovative and has brilliant ideas. I look forward to working with him some more"
            }
            proffesion={"CEO"}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Testmonials;
