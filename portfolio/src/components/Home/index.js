import React from 'react';
import { Link } from 'react-scroll';

const Home = ({ data }) => (
  <div name='home' className='h-screen w-full bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden'>
    {/* Background Pattern */}
    <div className='absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]'></div>

    <div className='relative z-10 max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4'>
      <div className='md:w-1/2 text-center md:text-left mb-8 md:mb-0'>
        <div className='mb-6'>
          <h1 className='text-5xl sm:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-4 leading-tight'>
            {data.name || 'Your Name'}
          </h1>
          <h2 className='text-2xl sm:text-4xl font-semibold text-white mb-2'>
            {data.title}
          </h2>
          <p className='text-lg text-gray-300 max-w-lg mx-auto md:mx-0 leading-relaxed'>
            {data.about.split('.')[0]}. Pioneering researcher in artificial neural networks and deep learning.
          </p>
        </div>

        <div className='flex flex-col sm:flex-row gap-4 justify-center md:justify-start'>
          <Link
            to='projects'
            smooth
            duration={500}
            className='group bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold inline-flex items-center justify-center cursor-pointer hover:shadow-2xl hover:shadow-cyan-500/25 hover:scale-105 transition-all duration-300'
          >
            View My Work
            <span className='ml-2 group-hover:translate-x-1 transition-transform'>→</span>
          </Link>
          <Link
            to='contact'
            smooth
            duration={500}
            className='border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full font-semibold inline-flex items-center justify-center cursor-pointer hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300'
          >
            Get In Touch
          </Link>
        </div>
      </div>

      <div className='md:w-1/2 flex justify-center md:justify-end'>
        <div className='relative'>
          <div className='absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-lg opacity-30 animate-pulse'></div>
          <img
            src='/me.png'
            alt='Professional headshot'
            className='relative w-80 h-96 object-cover rounded-2xl shadow-2xl border-4 border-white/10'
          />
        </div>
      </div>
    </div>
  </div>
);

export default Home;