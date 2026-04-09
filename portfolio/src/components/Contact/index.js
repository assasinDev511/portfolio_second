import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter, FaPaperPlane, FaGlobe } from 'react-icons/fa';

const Contact = ({ data }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactMethods = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email",
      value: data.email,
      link: `mailto:${data.email}`,
      description: "Send me an email"
    },
    {
      icon: <FaPhone className="text-2xl" />,
      title: "Phone",
      value: data.phone,
      link: `tel:${data.phone}`,
      description: "Call me directly"
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Location",
      value: data.location,
      link: "#",
      description: `Based in ${data.location.split(',')[0]}`
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin className="text-2xl" />,
      name: "LinkedIn",
      link: data.linkedin,
      color: "hover:text-blue-400"
    },
    {
      icon: <FaGithub className="text-2xl" />,
      name: "GitHub",
      link: data.github,
      color: "hover:text-gray-300"
    },
    {
      icon: <FaTwitter className="text-2xl" />,
      name: "Twitter",
      link: data.twitter,
      color: "hover:text-blue-300"
    }
  ];

  return (
    <div name='contact' className='w-full py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden'>
      {/* Background Pattern */}
      <div className='absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.04"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]'></div>

      <div className='relative z-10 max-w-screen-xl mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-5xl font-bold text-white mb-4'>Get In Touch</h2>
          <div className='w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full'></div>
          <p className='text-gray-300 mt-4 max-w-2xl mx-auto'>
            I'm always interested in new opportunities and collaborations. Let's discuss how we can work together!
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-12'>
          {/* Contact Information */}
          <div className='space-y-8'>
            <div>
              <h3 className='text-2xl font-semibold text-cyan-400 mb-6'>Contact Information</h3>
              <div className='space-y-4'>
                {contactMethods.map((method, index) => (
                  <div key={index} className='flex items-center space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300'>
                    <div className='text-cyan-400'>
                      {method.icon}
                    </div>
                    <div>
                      <h4 className='text-lg font-medium text-white'>{method.title}</h4>
                      <a
                        href={method.link}
                        className='text-gray-300 hover:text-cyan-400 transition-colors duration-300'
                      >
                        {method.value}
                      </a>
                      <p className='text-sm text-gray-400'>{method.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Awards and Affiliations */}
            <div className='bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10'>
              <h4 className='text-lg font-medium text-white mb-4'>Awards & Recognition</h4>
              <div className='space-y-2'>
                {data.awards?.map((award, index) => (
                  <div key={index} className='flex items-center space-x-2'>
                    <div className='w-2 h-2 bg-cyan-400 rounded-full'></div>
                    <span className='text-gray-300 text-sm'>{award}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Affiliations */}
            <div className='bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10'>
              <h4 className='text-lg font-medium text-white mb-4'>Current Affiliations</h4>
              <div className='space-y-2'>
                {data.affiliations?.map((affiliation, index) => (
                  <div key={index} className='flex items-center space-x-2'>
                    <div className='w-2 h-2 bg-blue-400 rounded-full'></div>
                    <span className='text-gray-300 text-sm'>{affiliation}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Website */}
            {data.website && (
              <div className='bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10'>
                <div className='flex items-center space-x-3 mb-4'>
                  <FaGlobe className='text-cyan-400 text-xl' />
                  <h4 className='text-lg font-medium text-white'>Personal Website</h4>
                </div>
                <a
                  href={data.website}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-cyan-400 hover:text-cyan-300 transition-colors duration-300 underline'
                >
                  {data.website}
                </a>
              </div>
            )}

            {/* Social Links */}
            <div>
              <h4 className='text-lg font-medium text-white mb-4'>Follow Me</h4>
              <div className='flex space-x-4'>
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={`p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 text-gray-400 transition-all duration-300 hover:bg-white/10 hover:border-cyan-400/50 ${social.color}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className='bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10'>
            <h3 className='text-2xl font-semibold text-cyan-400 mb-6'>Send a Message</h3>
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div className='grid md:grid-cols-2 gap-4'>
                <div>
                  <label htmlFor='name' className='block text-sm font-medium text-gray-300 mb-2'>
                    Full Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300'
                    placeholder='Your full name'
                  />
                </div>
                <div>
                  <label htmlFor='email' className='block text-sm font-medium text-gray-300 mb-2'>
                    Email Address
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300'
                    placeholder='your.email@example.com'
                  />
                </div>
              </div>

              <div>
                <label htmlFor='subject' className='block text-sm font-medium text-gray-300 mb-2'>
                  Subject
                </label>
                <input
                  type='text'
                  id='subject'
                  name='subject'
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300'
                  placeholder='Project inquiry, collaboration, etc.'
                />
              </div>

              <div>
                <label htmlFor='message' className='block text-sm font-medium text-gray-300 mb-2'>
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  rows='5'
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none'
                  placeholder='Tell me about your project or how we can work together...'
                />
              </div>

              <button
                type='submit'
                className='w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-4 px-6 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105'
              >
                <FaPaperPlane />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;