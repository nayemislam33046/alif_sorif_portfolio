import React from "react";
const Card = ({ src, alt, title, contents }) => {
  return (
    <div className="">
      <div className="bg-white h-48 p-5 rounded">
        <img src={src} alt={alt} className="w-10" />
        <p className="py-2 text-lg font-semibold">{title}</p>
        <p className="text-sm sm:text-base text-gray-600">{contents}</p>
      </div>
    </div>
  );
};
export default Card;