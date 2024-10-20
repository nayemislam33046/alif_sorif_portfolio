import React, { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";
import manlaptop from "../assets/new_handsome.png";
import graph from "../assets/graphtwo.jpg";
import check from "../assets/check.png";
import graphtwo from "../assets/ghaphincrease.jpg";
import ParallaxLayer from "../Parallax/UseParallax";
import AOS from "aos";
import "aos/dist/aos.css";
const Home = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 2000,
      easing: "ease-in-sine",
    });
  }, []);
  return (
    <div
      className="mt-16 flex flex-col no-scrollbar md:justify-between items-center gap-10 md:gap-0 lg:gap-20 md:flex-row"
      id="home"
    >
      <div
        className="sm:w-[450px] md:w-[350px] xl:w-[500px]"
        data-aos="fade-right"
      >
        <p className="text-2xl sm:text-4xl lg:text-3xl xl:text-4xl md:text-2xl font-bold text-red-500 font-[cursive]">
          Build Your Brand The Right Way
        </p>
        <p className="text-xl sm:text-2xl lg:text-2xl md:text-xl font-bold mt-8 text-green-500 ">
          {" "}
          <Typewriter
            words={[
              "SEO (Search Engine Optimization)",
              "Content Marketing",
              "Social Media Marketing",
              "Email Marketing",
              "Analytics and Data Interpretation",
              "Conversion Rate Optimization",
              "Affiliate and Influencer Marketing",
              "Video Marketing",
            ]}
            loop={true}
            cursor
            deleteSpeed={40}
            typeSpeed={50}
          />{" "}
        </p>
        <p className="text-gray-400 text-sm mt-5">
          Unlock the power of digital marketing to elevate your brand. From SEO
          and social media to content creation and paid advertising, we offer
          customized strategies that drive traffic, boost engagement, and
          increase conversions. Let’s grow your online presence and achieve
          measurable success together.{" "}
        </p>
        <button className="bg-orange-500 mt-10 cursor-pointer hover:bg-transparent hover:border-orange-500 hover:border hover:shadow-orange-500 hover:shadow px-3 py-1 rounded-lg text-white font-[cursive]">
          Contuct Me
        </button>
        <div className="flex items-center mt-10 gap-3">
          <a
            href="https://www.facebook.com/profile.php?id=100082287638823"
            className="text-sm w-8 hover:text-white"
          >
            <img src={facebook} alt="facebook" />
          </a>
          <a
            href="https://www.instagram.com/mdalifsorif/"
            className="text-sm w-8 hover:text-white"
          >
            <img src={instagram} alt="instagram" />
          </a>
          <a
            href="https://bd.linkedin.com/in/alif-shorif"
            className="text-sm w-8 hover:text-white"
          >
            <img src={linkedin} alt="linkedin" />
          </a>
        </div>
      </div>
      <div className="flex justify-center mt-14 md:mt-0" data-aos="fade-down">
        <div className="relative">
          <div className="absolute -top-10 w-20 h-20 bg-green-600 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 bg-violet-600 blur-3xl"></div>
          <img
            src={manlaptop}
            alt="man_with_laptop"
            className="w-64 sm:w-72 scale-[1.6] sm:scale-[1.7] md:scale-x-[1.4] lg:scale-[1.6] lg:w-96 "
          />
          <ParallaxLayer
            id={1}
            src={check}
            offset={0.1}
            color={
              "absolute -top-5 xsm:top-0 -left-3 md:left-5 xsm:-left-12 flex justify-center items-center bg-white w-10 h-10 rounded-xl"
            }
          />
          <ParallaxLayer
            id={2}
            src={graph}
            offset={0.2}
            color={
              "absolute top-10 -right-5 flex justify-center items-center w-16 h-10 "
            }
          />
          <ParallaxLayer
            id={3}
            src={graphtwo}
            offset={0.3}
            color={
              "absolute -bottom-5 -left-5 xsm:-left-12 flex justify-center h-10 w-20 items-center"
            }
          />
        </div>
      </div>
    </div>
  );
};
export default Home;