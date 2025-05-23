import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const variant = {
  hidden: { filter: "blur(10px)", opacity: 0 },
  visible: { filter: "blur(0px)", opacity: 1 },
};



const Button = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay: 4 }}
      variants={variant}
      className="relative flex justify-center items-center"
    >
      {/* Outer Circle 2 */}
      <div className="absolute w-[120px] h-[120px] xl:w-[130px] xl:h-[130px] rounded-full border-4 border-red animate-growCircle delay-150"></div>

      {/* Outer Circle 3 (newly added, slightly larger) */}
      <div className="absolute w-[150px] h-[150px] xl:w-[160px] xl:h-[160px] rounded-full border-4 border-red animate-growCircle delay-300"></div>

      {/* Button (smallest size) */}
      <div className="relative bg-red text-white font-semibold py-[28px] px-[40px] xl:py-[25px] xl:px-[35px] rounded-full w-[60px] xl:w-[70px] flex justify-center lg:mt-[3px] tracking-wide z-10 animate-distressSignal">
        <Link href="https://drive.google.com/file/d/1WrJIOmXEeUGhm1-EwxpN6rQ6zQ94DqUf/view?usp=drive_link">
          <p className="text-sm">Resumé</p>
        </Link>
      </div>
    </motion.div>
  );
};

export default Button;
