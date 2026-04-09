import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaGlobe } from 'react-icons/fa';

const SocialSidebar = ({ data }) => {
  const links = [
    {
      name: 'LinkedIn',
      href: data?.linkedin || 'https://linkedin.com',
      icon: <FaLinkedin size={18} />,
      bg: 'bg-blue-600 hover:bg-blue-700',
      color: 'text-blue-100'
    },
    {
      name: 'GitHub',
      href: data?.github || 'https://github.com',
      icon: <FaGithub size={18} />,
      bg: 'bg-gray-800 hover:bg-gray-900',
      color: 'text-gray-100'
    },
    {
      name: 'Twitter',
      href: data?.twitter || 'https://twitter.com',
      icon: <FaTwitter size={18} />,
      bg: 'bg-sky-500 hover:bg-sky-600',
      color: 'text-sky-100'
    },
    {
      name: 'Website',
      href: data?.website || 'https://www.cs.toronto.edu/~hinton/',
      icon: <FaGlobe size={18} />,
      bg: 'bg-emerald-600 hover:bg-emerald-700',
      color: 'text-emerald-100'
    }
  ];

  return (
    <div className="hidden lg:flex fixed top-1/2 left-6 transform -translate-y-1/2 z-40">
      <div className="space-y-4">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              group flex items-center justify-center
              w-12 h-12 rounded-full
              ${link.bg} ${link.color}
              shadow-lg hover:shadow-xl
              transform hover:scale-110
              transition-all duration-300 ease-out
              hover:-translate-y-1
            `}
            title={link.name}
          >
            <span className="transform group-hover:rotate-12 transition-transform duration-300">
              {link.icon}
            </span>
          </a>
        ))}

        {/* Vertical line */}
        <div className="w-px h-16 bg-gradient-to-b from-cyan-400 to-blue-500 mx-auto rounded-full opacity-50"></div>
      </div>
    </div>
  );
};

export default SocialSidebar;