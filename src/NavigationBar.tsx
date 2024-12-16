import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface NavigationBarProps {
  // Add props if needed in the future
}

const NavigationBar: React.FC<NavigationBarProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex sticky top-0 items-center justify-between flex-wrap bg-zinc-500 p-6 rounded-b-lg drop-shadow-lg">
      {/* Socials */}
      <div className="flex items-center mx-3 lg:mx-8 lg:gap-4 lg:w-32">
        <a 
          href="https://linkedin.com/in/ping-wee"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
        >
          <svg 
            className="fill-current h-8 w-8 mr-2" 
            width="54" 
            height="54" 
            viewBox="0 0 54 54" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/>
          </svg>
        </a>
      </div>

      {/* Responsive Hamburger */}
      <div className="block lg:hidden">
        <button 
          onClick={toggleMenu}
          className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white transition-colors duration-200"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <svg 
            className="fill-current h-3 w-3" 
            viewBox="0 0 20 20" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <div 
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
          isMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="text-sm lg:flex-grow">

          <Link to="/docs" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white m-2 transition-colors duration-200">
            Docs
          </Link>
          
          <Link to="/examples" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white m-2 transition-colors duration-200">
            Examples
          </Link>

          <Link to="/blog" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white m-2 transition-colors duration-200">
            Blog
          </Link>

          <Link to="/form" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white m-2 transition-colors duration-200">
            Contact Form
          </Link>
          
          <a href="/resume/LooPingWee_Resume_Dec24.pdf" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white m-2 transition-colors duration-200" target="_blank" rel="noopener noreferrer">
            Resume
          </a>

        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
