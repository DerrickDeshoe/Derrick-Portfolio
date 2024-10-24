"use client";

import Image from "next/image";
import Hero from "../public/images/herro.svg";
import React from "react";
import Button from "./Components/Button";

export default function Home() {
  return (
    <div className=" lg:bg-grayishBlack h-[100vh] relative lg:px-10 flex flex-col items-center justify-center lg:items-start">
      <div className="hidden lg:flex lg:w-[70%] xl:w-[60%] absolute bottom-0 right-0">
        <Image src={Hero} alt="image" />
      </div>
      <div className="hidden lg:flex lg:flex-col justify-between items-center lg:justify-between lg:items-start space-y-10 z-10">
        <div className="flex relative justify-center mb-8 lg:mb-0">
          <h1 className="text-lightGray hover:text-hoverGray text-2xl lg:text-5xl xl:text-6xl w-[100%] lg:w-[100%] font-light leading-tight">
            Transforming Visions Into
          </h1>
          <div className="flex space-x-3 absolute top-[33px] left-[5px] lg:top-[120%] lg:left-[0%] w-[100%]">
            <h1 className="text-2xl lg:text-5xl xl:text-6xl text-red font-nunito">
              Vibrant
            </h1>
            <h1 className="text-2xl lg:text-5xl xl:text-6xl w-[120%] text-red font-nuniBold">
              Digital Realities
            </h1>
          </div>
        </div>
        <div className="lg:pt-[80px]">
          <p className="text-lightGray hover:text-hoverGray text-xs lg:text-[17px] text-center lg:text-left lg:pl-2 lg:w-[45%] tracking-wide lg:leading-normal">
            Hi! I am Derrick, I&apos;m passionate about bringing concepts into
            dynamic and captivating realities that resonate with creativity and
            innovation. Let&apos;s embark on this exciting adventure together
            and turn your vision into something extraordinary!
          </p>
        </div>
      </div>
      <div className="hidden lg:flex mt-20 lg:mt-15 lg:ml-[5%]">
        <Button />
      </div>
      <div className="bg-about lg:hidden relative px-10 flex flex-col items-center justify-center h-[100vh] ">
        <div className="absolute top-0 w-full h-full bg-black bg-opacity-50"></div>
        <div className="flex flex-col justify-between items-center space-y-[25%] md:space-y-[15%] z-10">
          <div className="flex flex-col md:space-y-4 relative justify-center ">
            <h1 className="text-white hover:text-gray text-2xl md:text-5xl w-[100%] lg:w-[100%] font-nunito leading-tight">
              Transforming Visions Into
            </h1>
            <div className="flex space-x-2 absolute top-[30px] left-[5px] w-[100%]">
              <h1 className="text-2xl md:text-5xl text-red font-nunito">
                Vibrant
              </h1>
              <h1 className="text-2xl md:text-5xl w-[80%] text-red font-nuniBold">
                Digital Realities
              </h1>
            </div>
          </div>
          <div className="flex justify-center">
            <p className="text-lightGray hover:text-hoverGray text-xs text-center tracking-wider font-nunito md:text-sm md:w-[60%]">
              Hi! I am Derrick, I&apos;m passionate about bringing concepts into
              dynamic and captivating realities that resonate with creativity
              and innovation. Let&apos;s embark on this exciting adventure
              together and turn your vision into something extraordinary!
            </p>
          </div>
        </div>
        <div className="mt-20 lg:mt-15 lg:ml-[5%]">
          <Button />
        </div>
      </div>
    </div>
  );
}
