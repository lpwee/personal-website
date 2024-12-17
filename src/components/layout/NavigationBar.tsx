import React from 'react';
// import { Link } from 'react-router-dom';

interface NavigationBarProps {
  // Add props if needed in the future
}

const NavigationBar: React.FC<NavigationBarProps> = () => {
  return (
    <div className="group sticky top-0 z-50">
      <nav className="flex items-center justify-between flex-wrap p-6 rounded-b-lg
                     bg-white/10 backdrop-blur-lg 
                     border border-white/20
                     shadow-xl
                     transition-all duration-300 min-w-96">
        {/* Socials */}
        <div className="flex items-center mx-3 lg:mx-8 lg:gap-4 lg:w-32">
          <a 
            href="https://linkedin.com/in/ping-wee"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <img 
              src="/icons/linkedin-icon.svg"
              alt="LinkedIn"
              className="h-8 w-8 mr-2 [color-scheme:normal]"
            />
          </a>
          <a 
            href="https://github.com/lpwee"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github Profile"
          >
            <img 
              src="/icons/github-icon.svg"
              alt="Github"
              className="h-8 w-8 mr-2"
            />
          </a>
        </div>

        {/* Navigation Links */}
        {/* <div className="flex items-center">
          <div className="flex">
            <Link to="/" className="text-white hover:text-white/80 mx-2 transition-colors duration-200">
              Home
            </Link>
            <Link to="/form" className="text-white hover:text-white/80 mx-2 transition-colors duration-200">
              Form
            </Link>
          </div>
        </div> */}
      </nav>

      {/* Light reflection effect */}
      <div className="absolute -inset-1 
                     bg-gradient-to-br from-[#2C5364]/20 to-[#0F2027]/20 
                     rounded-b-lg blur-xl 
                     transition-all 
                     duration-300 
                     -z-10">
      </div>
    </div>
  );
};

export default NavigationBar;
