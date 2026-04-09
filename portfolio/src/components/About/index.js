const About = ({ data }) => (
    <div name='about' className='w-full py-16 bg-[#0a192f]'>
      <div className='max-w-screen-lg mx-auto px-4 flex flex-col items-center'>
        <h2 className='text-4xl font-bold border-b-4 border-cyan-500 pb-4'>About Me</h2>
        <p className='text-xl text-gray-400 mt-8 max-w-2xl text-center'>{data.about}</p>
        <p className='text-lg text-gray-500 mt-4'>Based in {data.location}</p>
      </div>
    </div>
  );
  export default About;