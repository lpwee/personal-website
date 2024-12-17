import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <main className="container mx-auto py-5 px-2">
      <div className="relative group">
        <div className="rounded-lg border border-white/20 p-6 shadow-xl bg-white/10 min-w-80">
          <div className="flex justify-center pb-4">
            <img src="/img/pingw.jpg" alt="Profile Picture" className='h-64 w-64 rounded-full'></img>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">
            👋🏻 Hi! I am Ping Wee.
          </h2>
          <p className="text-white/90 mb-4">
            I'm an aspiring software engineer.
          </p>
          <Link to="/resume" className="inline-block px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-white transition-all duration-300">
            Resume
          </Link>
        </div>

        <div className="rounded-lg border border-white/20 p-6 shadow-xl bg-white/10 min-w-80 my-5">
          <div className="flex flex-col md:flex-row gap-4">
            <div className='flex-1 rounded-lg border border-white/20 p-6 shadow-xl bg-white/10'>
              <p className="bold text-white mb-4">Languages</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className='flex items-center justify-start gap-3 rounded-lg border border-white/20 px-4 py-2 shadow-xl bg-slate-700 h-12'>
                  <img src="/icons/java.svg" alt="Java" className='w-6 h-6 flex-shrink-0'/>
                  <p className="text-white truncate">Java</p>
                </div>
                <div className='flex items-center justify-start gap-3 rounded-lg border border-white/20 px-4 py-2 shadow-xl bg-slate-700 h-12'>
                  <img src="/icons/python.svg" alt="Python" className='w-6 h-6 flex-shrink-0'/>
                  <p className="text-white truncate">Python</p>
                </div>
                <div className='flex items-center justify-start gap-3 rounded-lg border border-white/20 px-4 py-2 shadow-xl bg-slate-700 h-12'>
                  <img src="/icons/html-5.svg" alt="HTML" className='w-6 h-6 flex-shrink-0'/>
                  <p className="text-white truncate">HTML</p>
                </div>
                <div className='flex items-center justify-start gap-3 rounded-lg border border-white/20 px-4 py-2 shadow-xl bg-slate-700 h-12'>
                  <img src="/icons/css.svg" alt="CSS" className='w-6 h-6 flex-shrink-0'/>
                  <p className="text-white truncate">CSS</p>
                </div>
              </div>
            </div>

            <div className='flex-1 rounded-lg border border-white/20 p-6 shadow-xl bg-white/10'>
              <p className="bold text-white mb-4">Frameworks</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className='flex items-center justify-start gap-3 rounded-lg border border-white/20 px-4 py-2 shadow-xl bg-slate-700 h-12'>
                  <img src="/icons/react.svg" alt="React" className='w-6 h-6 flex-shrink-0'/>
                  <p className="text-white truncate">React</p>
                </div>
                <div className='flex items-center justify-start gap-3 rounded-lg border border-white/20 px-4 py-2 shadow-xl bg-slate-700 h-12'>
                  <img src="/icons/spring-icon.svg" alt="Spring" className='w-6 h-6 flex-shrink-0'/>
                  <p className="text-white truncate">Spring</p>
                </div>
                <div className='flex items-center justify-start gap-3 rounded-lg border border-white/20 px-4 py-2 shadow-xl bg-slate-700 h-12'>
                  <img src="/icons/fastapi-icon.svg" alt="FastAPI" className='w-6 h-6 flex-shrink-0'/>
                  <p className="text-white truncate">FastAPI</p>
                </div>
              </div>
            </div>

            <div className='flex-1 rounded-lg border border-white/20 p-6 shadow-xl bg-white/10'>
              <p className="bold text-white mb-4">Tools</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className='flex items-center justify-start gap-3 rounded-lg border border-white/20 px-4 py-2 shadow-xl bg-slate-700 h-12'>
                  <img src="/icons/tailwindcss-icon.svg" alt="Tailwind" className='w-6 h-6 flex-shrink-0'/>
                  <p className="text-white truncate">Tailwind</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br></br><br></br><br></br><br></br><br></br><br></br>
      </div>
    </main>
  );
};

export default HomePage;
