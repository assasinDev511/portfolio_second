import React from 'react';

const Skills = ({ data }) => {
  // Skill icons mapping (you can expand this)
  const getSkillIcon = (skill) => {
    const icons = {
      'JavaScript': '🟨',
      'React': '⚛️',
      'Python': '🐍',
      'Node.js': '🟢',
      'AI': '🤖',
      'Machine Learning': '🧠',
      'default': '💻'
    };
    return icons[skill] || icons.default;
  };

  return (
    <div name='skills' className='w-full py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden'>
      {/* Background Pattern */}
      <div className='absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.04"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]'></div>

      <div className='relative z-10 max-w-screen-xl mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-5xl font-bold text-white mb-4'>Skills & Expertise</h2>
          <div className='w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full'></div>
          <p className='text-gray-300 mt-4 max-w-2xl mx-auto'>
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {data.skills.map((skill, i) => (
            <div
              key={i}
              className='group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 cursor-pointer'
            >
              <div className='text-center'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform duration-300'>
                  {getSkillIcon(skill)}
                </div>
                <h3 className='text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300'>
                  {skill}
                </h3>
                <div className='w-0 h-0.5 bg-cyan-400 mx-auto mt-2 group-hover:w-full transition-all duration-500'></div>
              </div>
            </div>
          ))}
        </div>

        {/* Skill Categories */}
        <div className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 text-center'>
            <div className='text-3xl mb-4'>🚀</div>
            <h4 className='text-xl font-semibold text-cyan-400 mb-2'>Frontend</h4>
            <p className='text-gray-300'>Building responsive and interactive user interfaces</p>
          </div>
          <div className='bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 text-center'>
            <div className='text-3xl mb-4'>⚙️</div>
            <h4 className='text-xl font-semibold text-cyan-400 mb-2'>Backend</h4>
            <p className='text-gray-300'>Developing robust server-side applications and APIs</p>
          </div>
          <div className='bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 text-center'>
            <div className='text-3xl mb-4'>🤖</div>
            <h4 className='text-xl font-semibold text-cyan-400 mb-2'>AI & ML</h4>
            <p className='text-gray-300'>Implementing intelligent solutions and data-driven insights</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;