import React from "react";
import growthstr from "../assets/growth_str.svg";
import socialmedia from "../assets/social_media.svg";
import brandstrategy from "../assets/brand_strategy.svg";
import growthhand from "../assets/growth_hand.svg";
import seo from "../assets/seo.svg";
import digitalmarketing from "../assets/digital_marketing.svg";
import Card from "./Card";
const Expertise = () => {
  return (
    <div
      className="bg-[#d1dada] w-full py-20 lg:px-32 md:px-16 px-10"
      id="service"
    >
      <p className="text-pink-500 font-bold">WHAT I DO</p>
      <p className="text-4xl font-semi-bold py-3 font-[cursive] text-violet-800">
        Areas Of Expertise
      </p>
      <div className="grid grid-cols-1 relative sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-5">
        <div className="absolute -top-10 w-20 h-20 bg-green-600 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 bg-violet-600 blur-3xl"></div>
        <Card
          src={socialmedia}
          alt={"social_media"}
          title={"Social Media Marketing"}
          contents={
            "can help you boost your social media engagement and conversion rates."
          }
        />
        <Card
          src={growthstr}
          alt={"growthstrategy"}
          title={"Market Analysis"}
          contents={
            "I offer research services to help you analyze market trends and predictions."
          }
        />
        <Card
          src={brandstrategy}
          alt={"brandstrategy"}
          title={"Branding Strategy"}
          contents={
            "Grow your brand exponentially with my consultation services."
          }
        />
        <Card
          src={seo}
          alt={"seo"}
          title={"SEO Consultancy"}
          contents={
            "Boost your page ranking and engagement rates with the best SEO practices."
          }
        />
        <Card
          src={growthhand}
          alt={"growthhand"}
          title={"Growth Strategy"}
          contents={
            "I can help your business grow sustainably with my growth strategies."
          }
        />
        <Card
          src={digitalmarketing}
          alt={"growthstr"}
          title={"Digital Marketing"}
          contents={
            "Use my digital marketing services to connect with your target customers."
          }
        />
      </div>
    </div>
  );
};
export default Expertise;