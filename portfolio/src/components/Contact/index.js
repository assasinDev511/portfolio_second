const Contact = ({ data }) => (
    <div name='contact' className='w-full h-screen bg-gradient-to-b from-[#0a192f] to-black flex items-center justify-center p-4'>
      <div className='max-w-md w-full bg-[#112240] p-8 rounded-2xl shadow-2xl'>
        <h2 className='text-3xl font-bold border-b-4 border-cyan-500 pb-4 mb-8 text-center'>Get In Touch</h2>
        <form className='space-y-4'>
          <input type='text' placeholder='Your Name' className='w-full p-4 bg-[#ccd6f6]/20 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500' />
          <input type='email' placeholder='Your Email' className='w-full p-4 bg-[#ccd6f6]/20 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500' />
          <textarea rows='5' placeholder='Your Message' className='w-full p-4 bg-[#ccd6f6]/20 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500' />
          <button type='submit' className='w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-4 px-6 rounded-lg font-bold hover:scale-105 transition-all'>Send Message</button>
        </form>
        <p className='mt-8 text-center text-gray-500'>Or email me at <a href={`mailto:${data.email}`} className='text-cyan-500 hover:underline'>{data.email}</a></p>
      </div>
    </div>
  );
  export default Contact;