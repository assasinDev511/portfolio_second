import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import JobHeader from './sdaf';
import SocialSidebar from './JobHeader';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
];

const Navbar = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Main Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/95 backdrop-blur-lg shadow-2xl border-b border-white/10'
          : 'bg-slate-900/90 backdrop-blur-md'
      }`}>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo/Brand Section */}
            <div className="flex-shrink-0">
              <JobHeader
                title={data.title.split(',')[0]}
                companyName="Google"
                logoSrc="/icon.png"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.id}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  activeClass="bg-cyan-500/20 text-cyan-400 border-cyan-500/50"
                  className="relative px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-white/5 hover:text-white border border-transparent hover:border-white/20 cursor-pointer"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                aria-label="Toggle menu"
              >
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`} onClick={() => setIsOpen(false)} />

        {/* Mobile Menu Panel */}
        <div className={`lg:hidden fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-slate-900/95 backdrop-blur-lg shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h2 className="text-xl font-semibold text-white">Menu</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                <FaTimes size={20} />
              </button>
            </div>

            {/* Mobile Menu Items */}
            <div className="flex-1 px-6 py-8">
              <div className="space-y-2">
                {navItems.map((item, index) => (
                  <Link
                    key={item.id}
                    to={item.id}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-80}
                    activeClass="bg-cyan-500/20 text-cyan-400 border-l-4 border-cyan-400"
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 transform ${
                      isOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                    } text-gray-300 hover:text-white hover:bg-white/5 hover:translate-x-2 cursor-pointer`}
                    style={{ transitionDelay: isOpen ? `${index * 100}ms` : '0ms' }}
                  >
                    <span className="flex items-center justify-between">
                      {item.label}
                    </span>
                  </Link>
                ))}
              </div>

              {/* Mobile Contact Info */}
              <div className="mt-12 pt-8 border-t border-white/10">
                <h3 className="text-lg font-semibold text-white mb-4">Get In Touch</h3>
                <div className="space-y-3">
                  <a
                    href="mailto:hinton@cs.toronto.edu"
                    className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                  >
                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                    <span>hinton@cs.toronto.edu</span>
                  </a>
                  <a
                    href="tel:+14169785188"
                    className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                  >
                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                    <span>+1 (416) 978-5188</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Social Sidebar */}
      <SocialSidebar data={data} />
    </>
  );
};

export default Navbar;