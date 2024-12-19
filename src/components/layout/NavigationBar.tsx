import React from 'react';
// import { Link } from 'react-router-dom';

interface NavigationBarProps {
  // Add props if needed in the future
}

const NavigationBar: React.FC<NavigationBarProps> = () => {
  return (
    <div className="sticky top-0 z-50">
      <nav className="flex items-center justify-between flex-wrap p-6 rounded-b-lg
                     bg-white/10 backdrop-blur-lg 
                     border border-white/20
                     shadow-xl
                     transition-all duration-300 min-w-96">
        {/* Socials */}
        <div className="flex items-center mx-3 lg:mx-8 lg:w-32">
          <div className="group">
            <a 
              href="https://linkedin.com/in/ping-wee"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <div className="relative transition-all duration-300 group-hover:-translate-y-1">
                <div className="absolute -inset-2 rounded-full bg-blue-500/0 blur-lg transition-all duration-300 group-hover:bg-blue-500/40" />
                <img 
                  src="/icons/linkedin-icon.svg"
                  alt="LinkedIn"
                  className="relative h-8 w-8 [color-scheme:normal]"
                />
              </div>
            </a>
          </div>
          <div className="group ml-4">
            <a 
              href="https://github.com/lpwee"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github Profile"
            >
              <div className="relative transition-all duration-300 group-hover:-translate-y-1">
                <div className="absolute -inset-2 rounded-full bg-gray-500/0 blur-lg transition-all duration-300 group-hover:bg-gray-500/40" />
                <img 
                  src="/icons/github-icon.svg"
                  alt="Github"
                  className="relative h-8 w-8"
                />
              </div>
            </a>
          </div>
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
