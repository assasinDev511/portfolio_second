import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className='fixed w-full h-20 px-4 bg-[#0a192f]/90 backdrop-blur-md text-gray-300 flex justify-between items-center z-50'>
      <div><h1 className='text-2xl font-bold text-cyan-500 left-5'>Senior AI Engineer</h1></div>
      <ul className='hidden md:flex space-x-8'>
        <li><Link to='home' smooth duration={500}>Home</Link></li>
        <li><Link to='about' smooth duration={500}>About</Link></li>
        <li><Link to='skills' smooth duration={500}>Skills</Link></li>
        <li><Link to='projects' smooth duration={500}>Projects</Link></li>
        <li><Link to='contact' smooth duration={500}>Contact</Link></li>
      </ul>
      <div onClick={() => setNav(!nav)} className='md:hidden cursor-pointer'>
        {!nav ? <FaBars size={25} /> : <FaTimes size={25} />}
      </div>
      <ul className={!nav ? 'hidden' : 'md:hidden absolute top-20 w-full bg-[#0a192f] flex flex-col p-4'}>
        <li className='py-2'><Link onClick={() => setNav(false)} to='home' smooth duration={500}>Home</Link></li>
        {/* Add other links similarly */}
      </ul>
      <div className='hidden lg:flex fixed flex-col top-1/2 left-4'>
        <ul>
          <li className='mb-4 w-40 h-12 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-cyan-500 hover:bg-cyan-600'>
            <a href='https://linkedin.com' className='flex w-full px-4 text-gray-900 font-bold'>LinkedIn <FaLinkedin className='ml-2' /></a>
          </li>
          <li className='w-40 h-12 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-800 hover:bg-gray-700'>
            <a href='https://github.com' className='flex w-full px-4'>GitHub <FaGithub className='ml-2' /></a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;