import React from "react";
import Image, { StaticImageData } from "next/image";

interface AboutMe {
  heading: string; // Changed to 'string'
  image: StaticImageData;
  description: string; // Changed to 'string'
  image2: StaticImageData;
}

const AboutMe = (props: AboutMe) => {
  return (
    <div className="flex flex-col space-y-3 text-white md:items-center lg:items-start ">
      <div className="flex space-x-3 items-center lg:w-[80%] xl:w-[60%]">
        <h3 className=" font-port text-[20px] md:text-[25px] ">{props.heading}</h3>
        <Image src={props.image} alt="image" className="w-[10%] md:w-[11%] lg:w-[12%]" />
      </div>
      <div className="bg-gray opacity-[75%] md:w-[80%] lg:w-[100%] p-10 md:p-[15%] lg:p-[14%] text-sm leading-relaxed tracking-wide flex flex-col justify-center items-center space-y-5">
        <p className="md:text-xl lg:text-sm">{props.description}</p>
        <Image src={props.image2} alt="image" />
      </div>
    </div>
  );
};

export default AboutMe;
