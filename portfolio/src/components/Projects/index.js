const Projects = ({ data }) => (
    <div name='projects' className='w-full py-16 bg-[#0a192f]'>
      <div className='max-w-screen-lg mx-auto px-4'>
        <h2 className='text-4xl font-bold border-b-4 border-cyan-500 text-center pb-8'>Featured Projects</h2>
        <div className='grid md:grid-cols-2 gap-8 mt-12'>
          {data.projects.map((project, i) => (
            <div key={i} className='group bg-[#112240] rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500'>
              {/* <div className='h-48 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform' /> */}
              <img src={project.image} className='w-full h-[300px] bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform' />
              <div className='p-6'>
                <h3 className='text-2xl font-bold text-white mb-2'>{project.name}</h3>
                <p className='text-gray-400 mb-4'>{project.description}</p>
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.tech.map(t => <span key={t} className='px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm'>{t}</span>)}
                </div>
                <div className='flex space-x-4'>
                  <a href={project.demo} className='px-6 py-2 bg-cyan-500 text-white rounded-md hover:bg-cyan-600'>Demo</a>
                  <a href={project.github} className='px-6 py-2 border border-gray-600 text-gray-400 rounded-md hover:bg-gray-700'>Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  export default Projects;