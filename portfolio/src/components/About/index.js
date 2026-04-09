import React from 'react';

const About = ({ data }) => (
  <div name='about' className='w-full py-20 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden'>
    {/* Background Pattern */}
    <div className='absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]'></div>

    <div className='relative z-10 max-w-screen-xl mx-auto px-4'>
      <div className='text-center mb-16'>
        <h2 className='text-5xl font-bold text-white mb-4'>About Me</h2>
        <div className='w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full'></div>
      </div>

      <div className='grid md:grid-cols-2 gap-12 items-center'>
        <div className='space-y-6'>
          <div className='bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10'>
            <h3 className='text-2xl font-semibold text-cyan-400 mb-4'>Who I Am</h3>
            <p className='text-gray-300 leading-relaxed text-lg'>
              {data.about}
            </p>
          </div>

          <div className='bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10'>
            <h3 className='text-2xl font-semibold text-cyan-400 mb-4'>Location</h3>
            <p className='text-gray-300 text-lg flex items-center'>
              <span className='text-2xl mr-3'>📍</span>
              Based in {data.location}
            </p>
          </div>
        </div>

        <div className='flex justify-center'>
          <div className='relative'>
            <div className='absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-lg opacity-20'></div>
            <div className='relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20'>
              <div className='text-center'>
                <div className='w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center text-6xl'>
                  👨‍💻
                </div>
                <h4 className='text-xl font-semibold text-white mb-2'>Passionate Developer</h4>
                <p className='text-gray-400'>Creating innovative solutions with AI and modern technologies</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats or Highlights */}
      <div className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div className='bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center hover:bg-white/10 transition-all duration-300'>
          <div className='text-3xl font-bold text-cyan-400 mb-2'>{data.age || '25'}</div>
          <div className='text-gray-300'>Years Old</div>
        </div>
        <div className='bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center hover:bg-white/10 transition-all duration-300'>
          <div className='text-3xl font-bold text-cyan-400 mb-2'>{data.experience || 50}+</div>
          <div className='text-gray-300'>Years Experience</div>
        </div>
        <div className='bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center hover:bg-white/10 transition-all duration-300'>
          <div className='text-3xl font-bold text-cyan-400 mb-2'>50+</div>
          <div className='text-gray-300'>Projects Completed</div>
        </div>
      </div>
    </div>
  </div>
);

export default About;