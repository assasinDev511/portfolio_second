import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import Sliderbar from './JobHeader';
import JobHeader from './sdaf';
const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <>
      {/* ✅ NAVBAR */}
      <div className='fixed w-full h-20 px-4 bg-[#0a192f]/90 backdrop-blur-md text-gray-300 flex justify-between items-center z-50'>

        <JobHeader
          title="Senior AI Engineer"
          companyName="OpenAI"
          logoSrc="/icon.png"
        />

        <ul className='hidden md:flex space-x-8'>
          {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
            <li key={item}>
              <Link
                to={item}
                smooth
                duration={500}
                spy={true}
                activeClass="text-blue-500"
                className="cursor-pointer"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

        <div onClick={() => setNav(!nav)} className='md:hidden cursor-pointer'>
          {!nav ? <FaBars size={25} /> : <FaTimes size={25} />}
        </div>

        <ul className={!nav ? 'hidden' : 'md:hidden absolute top-20 w-full bg-[#0a192f] flex flex-col p-4'}>
          {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
            <li key={item} className='py-2'>
              <Link onClick={() => setNav(false)} to={item} smooth duration={500}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* ✅ SLIDERBAR (NOW WORKS CORRECTLY) */}
      <div className="hidden lg:flex fixed flex-col top-[250px] left-4 z-50">
        <Sliderbar />
      </div>
    </>
  );
};

export default Navbar;