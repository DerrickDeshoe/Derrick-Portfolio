import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface Projects {
  projectDescription: string; // Changed to 'string'
  image: StaticImageData;
  link: string; // Changed to 'string'
}

const Projects = (props: Projects) => {
  return (
    <div className='flex flex-col space-y-3 lg:space-y-0 lg:flex-row md:items-center lg:items-center lg:space-x-5 w-[100%]'>
      <div className='bg-gray opacity-[90%] relative px-3 md:w-[80%] lg:w-[65%]'>
        <Image src={props.image} alt='image' className='' />
        <Link href={`${props.link}`}>
          <button className='absolute bottom-2 left-3 bg-white text-black rounded-xl text-xs px-4 py-1'>
            Visit Project
          </button>
        </Link>
      </div>
      <div className='text-xs xl:text-sm leading-normal tracking-normal md:w-[80%] lg:w-[35%]'>
        <p>{props.projectDescription}</p>
      </div>
    </div>
  );
};

export default Projects;
