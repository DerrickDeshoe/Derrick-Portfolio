"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/images/Logo.svg";
import Github from "../../public/images/GitHub.svg";
import LinkedIN from "../../public/images/LinkedIn.svg";
import WhatsApp from "../../public/images/WhatsApp.svg";

const NavBar = () => {
  
  return (
    
      <div className="flex flex-col space-y-3 lg:space-y-0 items-center space-x-2 px-10 py-5 lg:flex-row justify-between w-[100%] text-white bg-transparent absolute top-0 z-10">
        <div className="w-[50%] md:w-[40%]">
          <Image src={Logo} alt="Logo" className="lg:w-[35%]" />
        </div>
        <div className=" flex space-x-4 w-[30%] md:w-[15%] lg:w-[7%]">
          <Link href="#">
            <Image src={LinkedIN} alt="LinkedIN" />
          </Link>
          <Link href="#">
            <Image src={Github} alt="Github" />
          </Link>
          <Link href="#">
            <Image src={WhatsApp} alt="WhatsApp" />
          </Link>
        </div>
      </div>
    
  );
};

export default NavBar;