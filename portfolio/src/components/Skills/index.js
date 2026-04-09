const Skills = ({ data }) => (
    <div name='skills' className='w-full py-16 bg-gradient-to-r from-[#0a192f] to-[#1e3a8a]'>
      <div className='max-w-screen-lg mx-auto px-4'>
        <h2 className='text-4xl font-bold border-b-4 border-cyan-500 text-center pb-8'>Skills</h2>
        <div className='grid grid-cols-2 md:grid-cols-5 gap-8 mt-12'>
          {data.skills.map((skill, i) => (
            <div key={i} className='shadow-lg shadow-cyan-500/25 hover:scale-110 duration-500 p-6 rounded-xl bg-[#112240]/50'>
              <h3 className='text-2xl font-bold text-white'>{skill}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  export default Skills;