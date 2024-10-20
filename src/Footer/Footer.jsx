import React from "react";
import {
  BiLogoFacebook,
  BiLogoInstagramAlt,
  BiLogoLinkedin,
} from "react-icons/bi";
const Footer = () => {
  return (
    <div className="bg-white py-20 pt-20 lg:px-32 md:px-16 px-10 flex justify-between flex-col md:flex-row gap-5 md:gap-0 border-t">
      <div>
        <div className="xsm:w-[400px] w-[250px] md:w-[300px] lg:w-[400px]">
          <p className="text-3xl font-[cursive]">Portfolio</p>
          <p className="pt-3 text-gray-600 sm:text-lg text-base">
            {" "}
            Get professional marketing consultation services for your brand and
            grow exponentially{" "}
          </p>
        </div>
        <div className="flex gap-3 mt-2">
          <span>
            <a
              href="https://www.facebook.com/profile.php?id=100082287638823"
              className="text-2xl text-gray-600 hover:text-gray-400"
            >
              <BiLogoFacebook />
            </a>
          </span>
          <span>
            <a
              href="https://www.instagram.com/mdalifsorif/"
              className="text-2xl text-gray-600 hover:text-gray-400"
            >
              <BiLogoInstagramAlt />
            </a>
          </span>
          <span>
            <a
              href="https://bd.linkedin.com/in/alif-shorif"
              className="text-2xl text-gray-600 hover:text-gray-400"
            >
              <BiLogoLinkedin />
            </a>
          </span>
        </div>
      </div>
      <div className="flex gap-10 xsm:gap-20 md:gap-10 md:pt-0 pt-10">
        <div className="flex flex-col">
          <p className="xsm:text-2xl text-lg font-[cursive]">Company</p>
          <a href="" className="py-2 text-sm xsm:text-base">
            My Account
          </a>
          <a href="" className="text-sm xsm:text-base">
            Service
          </a>
        </div>
        <div className="flex flex-col">
          <p className="xsm:text-2xl text-lg font-[cursive]">Contuct</p>
          <p className="py-2 xsm:text-base text-sm">+880 1714-722366</p>
          <p className="text-sm xsm:text-base">alifshorif124@gmail.com</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;