import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <main className="container mx-auto py-5 px-4">
      <div className="relative group">
        {/* Glass Effect Card */}
        <div className="p-8 rounded-2xl 
                      bg-white/10 backdrop-blur-lg 
                      border border-white/20
                      shadow-xl
                      hover:bg-white/20 
                      transition-all duration-300">
          
          {/* Content */}
          <h2 className="text-2xl font-bold text-white mb-4">
            Hi! I am Ping Wee.
          </h2>
          
          <p className="text-white/90 mb-4">
            I'm an aspiring software engineer.
          </p>
          
          <Link to="/resume" className="inline-block px-4 py-2 
                           bg-white/20 
                           hover:bg-white/30 
                           rounded-lg 
                           text-white 
                           transition-all 
                           duration-300">
            Resume
          </Link>
        </div>
        
        {/* Light reflection effect */}
        <div className="absolute -inset-1 
                       bg-gradient-to-br from-[#2C5364]/20 to-[#0F2027]/20 
                       rounded-2xl blur-xl 
                       group-hover:blur-2xl 
                       transition-all 
                       duration-300 
                       -z-10">
        </div>
      </div>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    </main>
  );
};

export default HomePage;
