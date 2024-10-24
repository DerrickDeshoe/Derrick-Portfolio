

import React from "react";
import Link from "next/link";

const Button = () => {
  return (
    <div className="relative flex justify-center items-center">
      {/* Outer Circle 2 */}
      <div className="absolute w-[120px] h-[120px] xl:w-[130px] xl:h-[130px] rounded-full border-4 border-red animate-growCircle delay-150"></div>

      {/* Outer Circle 3 (newly added, slightly larger) */}
      <div className="absolute w-[150px] h-[150px] xl:w-[160px] xl:h-[160px] rounded-full border-4 border-red animate-growCircle delay-300"></div>

      {/* Button (smallest size) */}
      <div className="relative bg-red text-white font-semibold py-[28px] px-[40px] xl:py-[25px] xl:px-[35px] rounded-full w-[60px] xl:w-[70px] flex justify-center lg:mt-[3px] tracking-wide z-10 animate-distressSignal">
        <Link href="#">
          <p className="text-sm">Resumé</p>
        </Link>
      </div>
    </div>
  );
};

export default Button;
