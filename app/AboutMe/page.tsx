"use client";

import React, { useState } from "react";
import Image from "next/image";
import About from "../../public/images/Group 3689.svg";
import AboutMe from "../Components/AboutMe";
import Philosophy from "../../public/images/about me/Philosophy.svg";
import Learning from "../../public/images/about me/Learning.svg";
import Skills from "../../public/images/about me/Skills.svg";
import WhiteSkills from "../../public/images/about me/SkillsWhite.svg";
import LearningWhite from "../../public/images/about me/LearningWhite.svg";
import PhilosophyWhite from "../../public/images/about me/PhilosophyWhite.svg";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const variant = {
  hidden: { filter: "blur(10px)", opacity: 0 },
  visible: { filter: "blur(0px)", opacity: 1 },
};

const Page = () => {
  // State to track the current slide
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of AboutMe components (you can add more items)
  const slides = [
    {
      heading: "My Philosophy",
      image: Philosophy,
      description:
        "I believe in the power of collaboration. Working alongside other creative minds not only enhances the quality of the project but also fosters personal growth. I thrive in team environments where ideas can be shared and developed together.",
      image2: PhilosophyWhite,
    },
    {
      heading: "Continuous Learning",
      image: Learning,
      description:
        "I am committed to staying updated with the latest technologies and best practices in web development. Whether it's exploring new frameworks, diving into performance optimization, or understanding UX principles, I am always eager to learn and expand my skill set.",
      image2: LearningWhite,
    },
    {
      heading: "My Skills",
      image: Skills,
      description: `
        Bootstrap&Tailwind : Utilizing responsive frameworks for efficient and aesthetic design.
        JavaScript : Building interactive and dynamic web applications.
        React&Next.js : Developing high-performance user interfaces and server-rendered applications.`,
      image2: WhiteSkills,
    },
  ];

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="bg-about h-[100vh] w-full relative text-white flex justify-center items-center lg:flex lg:flex-col lg:items-start">
      <div className="absolute top-0 w-full h-full bg-black bg-opacity-50"></div>

      <div className=" z-10 flex flex-col justify-between mt-10 items-center w-full lg:w-[80%] px-5 lg:px-0 space-y-5 lg:space-y-3 lg:space-x-10 lg:items-start lg:mt-[8%]">
        {/* Image on the left */}
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 3.5 }}
          variants={variant}
          className="w-[60%] lg:w-[25%] absolute top-[12%] md:top-[9%] lg:top-[10%] lg:left-0"
        >
          <Image src={About} alt="image" />
        </motion.div>

        {/* Slider content */}
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 3.5 }}
          variants={variant}
          className="w-full lg:w-[50%] text-center lg:text-left lg:flex lg:flex-col"
        >
          <AboutMe
            heading={slides[currentIndex].heading}
            image={slides[currentIndex].image}
            description={slides[currentIndex].description}
            image2={slides[currentIndex].image2}
          />
        </motion.div>

        {/* Slider Controls */}
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 3.5 }}
          variants={variant}
          className="flex justify-center w-full lg:w-[50%] space-x-5 "
        >
          <button
            onClick={prevSlide}
            className="bg-gray hover:bg-red text-white py-2 px-4 rounded-lg text-xs"
          >
            Prev
          </button>
          <button
            onClick={nextSlide}
            className="bg-gray hover:bg-red text-white py-2 px-4 rounded-lg text-xs"
          >
            Next
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Page;
