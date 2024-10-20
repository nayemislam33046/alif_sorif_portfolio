import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1500,
      easing: "ease-in-sine",
    });
  }, []);
  return (
    <div className="w-full my-20 lg:px-32 md:px-16 px-10" id="about">
      <div className="backdrop-blur-sm py-10 flex gap-10 md:justify-between md:items-center flex-col md:flex-row justify-center items-center">
        <div className="relative" data-aos="fade-right">
          <img
            src="https://lh3.googleusercontent.com/p/AF1QipMgmH5V2PQKwu5bXQXY3WjDP8Sc-cq1x_PXAnWY=s680-w680-h510"
            alt="alif_sorif"
            className="rounded-full w-80 h-80 md:w-64 md:h-64 lg:w-60 lg:h-60 scale-75 md:scale-100 "
          />
          <div className="absolute -top-10 w-20 h-20 bg-green-600 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 bg-violet-600 blur-3xl"></div>
        </div>
        <div className="md:w-[450px] lg:w-[600px]" data-aos="fade-left">
          <p className="text-violet-500 text-xl py-3">ABOUT ME</p>
          <p className="text-yellow-500 text-2xl lg:text-4xl font-semibold py-5">
            How Can I Help{" "}
            <span className="font-normal">Your Business To Grow?</span>
          </p>
          <p className="text-white text-sm ">
            Hey Boss, I am Alif Shorif. I am a professional Digital Marketer and
            SEO expert. I am a seasoned SEO expert with a passion for driving
            online success through strategic search engine optimization. With a
            proven track record in enhancing the online visibility of various
            businesses, I bring a unique blend of technical expertise and
            creative thinking to the table. I am experienced in on page SEO, off
            page SEO, technical SEO,Backlink and others. Expert in Facebook ads
            campaign, lead generation, bulk email collection, instagram
            marketing, SMM, Canva, and any Digital Marketing Stuffs.
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
