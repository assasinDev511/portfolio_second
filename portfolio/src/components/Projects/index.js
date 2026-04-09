import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Projects = ({ data }) => (
  <div name='projects' className='w-full py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden'>
    {/* Background Pattern */}
    <div className='absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.04"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]'></div>

    <div className='relative z-10 max-w-screen-xl mx-auto px-4'>
      <div className='text-center mb-16'>
        <h2 className='text-5xl font-bold text-white mb-4'>Featured Projects</h2>
        <div className='w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full'></div>
        <p className='text-gray-300 mt-4 max-w-2xl mx-auto'>
          A showcase of my recent work and creative solutions
        </p>
      </div>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {data.projects.map((project, i) => (
          <div
            key={i}
            className='group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25'
          >
            <div className='relative overflow-hidden'>
              <img
                src={project.image}
                alt={project.name}
                className='w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              <div className='absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100'>
                <div className='flex space-x-3'>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center justify-center w-10 h-10 bg-cyan-500/90 hover:bg-cyan-500 text-white rounded-full transition-colors duration-300'
                    >
                      <FaExternalLinkAlt size={16} />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center justify-center w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors duration-300'
                    >
                      <FaGithub size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className='p-6'>
              <h3 className='text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300'>
                {project.name}
              </h3>
              <p className='text-gray-300 mb-4 leading-relaxed'>
                {project.description}
              </p>
              <div className='flex flex-wrap gap-2'>
                {project.tech.map((t, techIndex) => (
                  <span
                    key={techIndex}
                    className='px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium border border-cyan-500/30'
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className='text-center mt-16'>
        <div className='bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-md mx-auto'>
          <h3 className='text-2xl font-semibold text-cyan-400 mb-4'>Want to see more?</h3>
          <p className='text-gray-300 mb-6'>
            Check out my GitHub for additional projects and contributions.
          </p>
          <a
            href='https://github.com'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300'
          >
            <FaGithub className='mr-2' />
            View GitHub
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Projects;