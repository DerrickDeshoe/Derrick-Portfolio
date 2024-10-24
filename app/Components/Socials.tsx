import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface SocialsProps {
  image: StaticImageData;
  details: string; // Changed to 'string'
}

const Socials = (props: SocialsProps) => {
  return (
    <div className='flex items-center space-x-2 mt-5 lg:mt-0'>
      <Image src={props.image} alt='image' className='w-[12%] lg:w-[10%]' />
      <p className='text-xs md:text-sm'>{props.details}</p>
    </div>
  );
};

export default Socials;
