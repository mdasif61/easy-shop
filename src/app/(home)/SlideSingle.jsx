import Image from "next/image";
import React from "react";

const SlideSingle = ({ slide }) => {
  return (
    <div>
      <h1>{slide.title}</h1>
      <Image width={500} height={300} src={slide.img} alt="" />
    </div>
  );
};

export default SlideSingle;
