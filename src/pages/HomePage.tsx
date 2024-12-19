import React from 'react';

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
          <a href="/resume.html" className="inline-block px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-white transition-all duration-300" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </div>

        <div className="rounded-lg border border-white/20 p-6 shadow-xl bg-white/10 min-w-80 my-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className='rounded-lg border border-white/20 p-6 shadow-xl bg-white/10'>
              <p className="bold text-white mb-4">Programming Languages</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className='flex items-center justify-start gap-3 rounded-lg border border-white/20 px-4 py-2 shadow-xl bg-slate-700 h-12'>
                  <img src="/icons/python.svg" alt="Python" className='w-6 h-6 flex-shrink-0'/>
                  <p className="text-white truncate">Python</p>
                </div>
                <div className='flex items-center justify-start gap-3 rounded-lg border border-white/20 px-4 py-2 shadow-xl bg-slate-700 h-12'>
                  <img src="/icons/java.svg" alt="Java" className='w-6 h-6 flex-shrink-0'/>
                  <p className="text-white truncate">Java</p>
                </div>
                <div className='flex items-center justify-start gap-3 rounded-lg border border-white/20 px-4 py-2 shadow-xl bg-slate-700 h-12'>
                  <img src="/icons/typescript-icon.svg" alt="TypeScript" className='w-6 h-6 flex-shrink-0'/>
                  <p className="text-white truncate">TypeScript</p>
                </div>
                <div className='flex items-center justify-start gap-3 rounded-lg border border-white/20 px-4 py-2 shadow-xl bg-slate-700 h-12'>
                  <img src="/icons/c-plusplus.svg" alt="C++" className='w-6 h-6 flex-shrink-0'/>
                  <p className="text-white truncate">C++</p>
                </div>
                <div className='flex items-center justify-start gap-3 rounded-lg border border-white/20 px-4 py-2 shadow-xl bg-slate-700 h-12'>
                  <img src="/icons/r-lang.svg" alt="R" className='w-6 h-6 flex-shrink-0'/>
                  <p className="text-white truncate">R</p>
                </div>
              </div>
            </div>

            <div className='rounded-lg border border-white/20 p-6 shadow-xl bg-white/10'>
              <p className="bold text-white mb-4">Web Development</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className='flex items-center justify-start gap-3 rounded-lg border border-white/20 px-4 py-2 shadow-xl bg-slate-700 h-12'>
                  <img src="/icons/html-5.svg" alt="HTML" className='w-6 h-6 flex-shrink-0'/>
                  <p className="text-white truncate">HTML</p>
                </div>
                <div className='flex items-center justify-start gap-3 rounded-lg border border-white/20 px-4 py-2 shadow-xl bg-slate-700 h-12'>
                  <img src="/icons/css.svg" alt="CSS" className='w-6 h-6 flex-shrink-0'/>
                  <p className="text-white truncate">CSS</p>
                </div>
                <div className='flex items-center justify-start gap-3 rounded-lg border border-white/20 px-4 py-2 shadow-xl bg-slate-700 h-12'>
                  <img src="/icons/react.svg" alt="React" className='w-6 h-6 flex-shrink-0'/>
                  <p className="text-white truncate">React</p>
                </div>
                <div className='flex items-center justify-start gap-3 rounded-lg border border-white/20 px-4 py-2 shadow-xl bg-slate-700 h-12'>
                  <img src="/icons/tailwindcss-icon.svg" alt="Tailwind" className='w-6 h-6 flex-shrink-0'/>
                  <p className="text-white truncate">Tailwind</p>
                </div>
              </div>
            </div>

            <div className='rounded-lg border border-white/20 p-6 shadow-xl bg-white/10'>
              <p className="bold text-white mb-4">Backend Development</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className='flex items-center justify-start gap-3 rounded-lg border border-white/20 px-4 py-2 shadow-xl bg-slate-700 h-12'>
                  <img src="/icons/spring-icon.svg" alt="Spring" className='w-6 h-6 flex-shrink-0'/>
                  <p className="text-white truncate">Spring</p>
                </div>
                <div className='flex items-center justify-start gap-3 rounded-lg border border-white/20 px-4 py-2 shadow-xl bg-slate-700 h-12'>
                  <img src="/icons/fastapi-icon.svg" alt="FastAPI" className='w-6 h-6 flex-shrink-0'/>
                  <p className="text-white truncate">FastAPI</p>
                </div>
                <div className='flex items-center justify-start gap-3 rounded-lg border border-white/20 px-4 py-2 shadow-xl bg-slate-700 h-12'>
                  <img src="/icons/postgresql.svg" alt="PostgreSQL" className='w-6 h-6 flex-shrink-0'/>
                  <p className="text-white truncate">PostgreSQL</p>
                </div>
                <div className='flex items-center justify-start gap-3 rounded-lg border border-white/20 px-4 py-2 shadow-xl bg-slate-700 h-12'>
                  <img src="/icons/firebase.svg" alt="Firebase" className='w-6 h-6 flex-shrink-0'/>
                  <p className="text-white truncate">Firebase</p>
                </div>
              </div>
            </div>

            <div className='rounded-lg border border-white/20 p-6 shadow-xl bg-white/10'>
              <p className="bold text-white mb-4">Development Tools</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className='flex items-center justify-start gap-3 rounded-lg border border-white/20 px-4 py-2 shadow-xl bg-slate-700 h-12'>
                  <img src="/icons/git-icon.svg" alt="Git" className='w-6 h-6 flex-shrink-0'/>
                  <p className="text-white truncate">Git</p>
                </div>
                <div className='flex items-center justify-start gap-3 rounded-lg border border-white/20 px-4 py-2 shadow-xl bg-slate-700 h-12'>
                  <img src="/icons/docker-icon.svg" alt="Docker" className='w-6 h-6 flex-shrink-0'/>
                  <p className="text-white truncate">Docker</p>
                </div>
                <div className='flex items-center justify-start gap-3 rounded-lg border border-white/20 px-4 py-2 shadow-xl bg-slate-700 h-12'>
                  <img src="/icons/vitejs.svg" alt="Vite" className='w-6 h-6 flex-shrink-0'/>
                  <p className="text-white truncate">Vite</p>
                </div>
                <div className='flex items-center justify-start gap-3 rounded-lg border border-white/20 px-4 py-2 shadow-xl bg-slate-700 h-12'>
                  <img src="/icons/vercel-icon.svg" alt="Vercel" className='w-6 h-6 flex-shrink-0'/>
                  <p className="text-white truncate">Vercel</p>
                </div>
              </div>
            </div>

            <div className='rounded-lg border border-white/20 p-6 shadow-xl bg-white/10'>
              <p className="bold text-white mb-4">Cloud Services</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className='flex items-center justify-start gap-3 rounded-lg border border-white/20 px-4 py-2 shadow-xl bg-slate-700 h-12'>
                  <img src="/icons/aws.svg" alt="AWS" className='w-6 h-6 flex-shrink-0'/>
                  <p className="text-white truncate">AWS</p>
                </div>
                <div className='flex items-center justify-start gap-3 rounded-lg border border-white/20 px-4 py-2 shadow-xl bg-slate-700 h-12'>
                  <img src="/icons/microsoft-azure.svg" alt="Azure" className='w-6 h-6 flex-shrink-0'/>
                  <p className="text-white truncate">Azure</p>
                </div>
              </div>
            </div>

            <div className='rounded-lg border border-white/20 p-6 shadow-xl bg-white/10'>
              <p className="bold text-white mb-4">AI/ML</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className='flex items-center justify-start gap-3 rounded-lg border border-white/20 px-4 py-2 shadow-xl bg-slate-700 h-12'>
                  <img src="/icons/Langchain--Streamline-Simple-Icons.svg" alt="LangChain" className='w-6 h-6 flex-shrink-0'/>
                  <p className="text-white truncate">LangChain</p>
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
