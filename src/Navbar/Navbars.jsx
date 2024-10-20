import React, { useEffect, useRef, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
const Navbars = () => {
  const [MenuOpen, setMenuOpen] = useState(false);
  const handeMenuOpen = () => {
    setMenuOpen(!MenuOpen);
  };
  const menuRef = useRef();
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current?.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [menuRef]);
  return (
    <div className="text-white flex fixed right-0 md:py-1 z-50 left-0 items-center backdrop-blur-sm justify-between bg-[#000000c4] lg:px-32 md:px-16 py-5 px-10 md:border-none border-b border-gray-900">
      <a href="#home" className="text-xl">
        Portfolio
      </a>
      <span
        className="md:hidden text-3xl cursor-pointer text-white"
        onClick={handeMenuOpen}
      >
        {MenuOpen ? <AiOutlineClose /> : <BiMenu />}
      </span>
      <div
        className={`absolute top-16 md:relative md:top-0 w-[100%] md:w-auto md:left-0 transition-all bg-[#000000c4] md:bg-transparent ${
          MenuOpen
            ? "backdrop-blur-sm border-b md:border-none left-0"
            : "-left-[100rem]"
        }`}
        ref={menuRef}
      >
        <ul className="flex items-center lg:gap-10 md:gap-5 font-[cursive] flex-col md:flex-row md:leading-0 leading-[80px] ">
          <li>
            <a href="#home" className="hover:text-green-600 transition-all">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-green-600 transition-all">
              About
            </a>
          </li>
          <li>
            <a href="#service" className="hover:text-green-600 transition-all">
              Service
            </a>
          </li>
          <li>
            <a
              href="#collaborate"
              className="hover:text-green-600 transition-all"
            >
              Collaborate
            </a>
          </li>
          <li>
            <a href="#contuct" className="hover:text-green-600 transition-all">
              Contuct
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbars;
