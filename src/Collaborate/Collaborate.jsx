import React, { useEffect } from "react";
import Collcard from "./Collcard";
import planning from "../assets/planning.svg";
import Analysis from "../assets/analysis.svg";
import Launching from "../assets/launch.svg";
import AOS from "aos";
import "aos/dist/aos.css";
const Collaborate = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1500,
      easing: "ease-in-sine",
    });
  }, []);
  return (
    <div
      className="w-full bg-white lg:px-32 md:px-16 px-10 py-20"
      id="collaborate"
    >
      <p className="text-center text-green-500">MY WORK PROCESS</p>
      <p className="text-3xl text-bold text-center py-3">How I Collaborate</p>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8">
        <div data-aos="fade-right">
          <Collcard
            src={planning}
            title={"Planning"}
            contents={
              "First I will research your industry and market and gather relevant data for the project."
            }
            alt={"planning"}
          />
        </div>
        <div data-aos="fade-up">
          <Collcard
            src={Analysis}
            title={"Analysis"}
            contents={
              "Next we will analyze the data collected and decide on the best course of action for your business."
            }
            alt={"Analysis"}
          />
        </div>
        <div data-aos="fade-right">
          <Collcard
            src={Launching}
            title={"Launching"}
            contents={
              "Next we will analyze the data collected and decide on the best course of action for your business."
            }
            alt={"Launching"}
          />
        </div>
      </div>
    </div>
  );
};
export default Collaborate;
