import React from 'react';
import { Link } from 'react-scroll';

const Home = ({ data }) => (
  <div name='home' className='h-screen w-full bg-gradient-to-r from-[#0a192f] to-[#1e3a8a] flex items-center justify-center px-4'>
    <div className='max-w-screen-lg mx-auto flex flex-col md:flex-row items-center h-full'>
      <div className='md:w-1/2 text-center md:text-left'>
        <h2 className='text-4xl sm:text-6xl font-bold text-white mb-4'>Senior AI Engineer</h2>
        <p className='text-xl text-gray-400 mb-8 max-w-md mx-auto md:mx-0'>{data.title}, {data.age} years old</p>
        <Link to='projects' smooth duration={500} className='group bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-md inline-flex items-center cursor-pointer hover:shadow-lg hover:scale-105 transition-all'>
          View Projects <span className='ml-2 group-hover:rotate-90 transition-transform'>→</span>
        </Link>
      </div>
      <div className='md:w-1/2 mt-8 md:mt-0'>
        {/* <div className='w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl animate-pulse mx-auto' /> */}
        <img src='./me.png' className='w-80 h-90' alt="Description of the image" />
      </div>
    </div>
  </div>
);
export default Home;