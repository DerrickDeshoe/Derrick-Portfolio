
"use client"

import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiEnvelope,
} from "react-icons/hi2";

// nav data
export const navData = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/AboutMe", icon: <HiUser /> },
  { name: "work", path: "/MyWork", icon: <HiViewColumns /> },
  {
    name: "contact",
    path: "/Contact",
    icon: <HiEnvelope />,
  },
];

import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex flex-col items-center lg:justify-center gap-y-5 fixed h-max bottom-0 mt-auto lg:right-[2%] z-50 top-0 w-full lg:w-16 lg:max-w-md lg:h-screen ">
      {/* inner */}
      <div className="flex w-full lg:w-[70%] lg:flex-col items-center justify-evenly lg:justify-center gap-y-10 px-2 md:px-40 lg:px-0 h-[40px] bg-gray bg-blur-md lg:h-max py-6 text-[15px] lg:text-[18px] lg:rounded-3xl text-white ">
        {navData.map((link, index) => {
          return (
            <Link
              className={`${
                link.path === pathname && "text-accent"
              } relative flex items-center group hover:text-red transition-all duration-300 `}
              href={link.path}
              key={index}
            >
              {/* tool tip */}
              <div className="absolute pr-14 right-0 hidden lg:group-hover:flex">
                <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[6px]">
                  <div className="text-[12px] leading-none font-semibold capitalize ">
                    {link.name}
                  </div>
                  {/* triangle */}
                </div>
              </div>

              <div>{link.icon}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
