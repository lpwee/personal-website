import React from 'react';

const HomePage: React.FC = () => {
  return (
    <main className="container mx-auto px-2 py-5">
      <div className="group relative">
        <div className="min-w-80 rounded-lg border border-white/20 bg-white/10 p-6 shadow-xl">
          <div className="flex justify-center pb-4">
            <img
              src="/img/pingw.jpg"
              alt="Profile Picture"
              className="h-64 w-64 rounded-full"
            ></img>
          </div>
          <h2 className="text-3xl font-bold text-white">👋🏻 Hi! I am Ping Wee.</h2>
          <p className="mb-4 text-white/90">I'm an aspiring software engineer.</p>
          <p className="text-white/90">Currently studying Computer Science in Nanyang Technological University.</p>
          <p className="mb-4 text-white/90">In my free time, I am studying cloud technologies.</p>
          <a
            href="/resume.html"
            className="inline-block rounded-lg bg-white/20 px-4 py-2 text-white transition-all duration-300 hover:bg-white/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>

        <div className="my-5 min-w-80 rounded-lg border border-white/20 bg-white/10 p-6 shadow-xl">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div className="rounded-lg border border-white/20 bg-white/10 p-6 shadow-xl">
              <p className="bold mb-4 text-white">Programming Languages</p>
              <div className="grid grid-cols-1 gap-4 [&>*]:w-full min-[500px]:grid-cols-2">
                <div className="flex h-12 items-center justify-start gap-3 rounded-lg border border-white/20 bg-slate-700 px-4 py-2 shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-white/40 hover:shadow-2xl">
                  <img src="/icons/python.svg" alt="Python" className="h-6 w-6 flex-shrink-0" />
                  <p className="truncate text-white">Python</p>
                </div>
                <div className="flex h-12 items-center justify-start gap-3 rounded-lg border border-white/20 bg-slate-700 px-4 py-2 shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-white/40 hover:shadow-2xl">
                  <img src="/icons/java.svg" alt="Java" className="h-6 w-6 flex-shrink-0" />
                  <p className="truncate text-white">Java</p>
                </div>
                <div className="flex h-12 items-center justify-start gap-3 rounded-lg border border-white/20 bg-slate-700 px-4 py-2 shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-white/40 hover:shadow-2xl">
                  <img
                    src="/icons/typescript-icon.svg"
                    alt="TypeScript"
                    className="h-6 w-6 flex-shrink-0"
                  />
                  <p className="truncate text-white">TypeScript</p>
                </div>
                <div className="flex h-12 items-center justify-start gap-3 rounded-lg border border-white/20 bg-slate-700 px-4 py-2 shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-white/40 hover:shadow-2xl">
                  <img src="/icons/c-plusplus.svg" alt="C++" className="h-6 w-6 flex-shrink-0" />
                  <p className="truncate text-white">C++</p>
                </div>
                <div className="flex h-12 items-center justify-start gap-3 rounded-lg border border-white/20 bg-slate-700 px-4 py-2 shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-white/40 hover:shadow-2xl">
                  <img src="/icons/r-lang.svg" alt="R" className="h-6 w-6 flex-shrink-0" />
                  <p className="truncate text-white">R</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-white/20 bg-white/10 p-6 shadow-xl">
              <p className="bold mb-4 text-white">Web Development</p>
              <div className="grid grid-cols-1 gap-4 [&>*]:w-full min-[500px]:grid-cols-2">
                <div className="flex h-12 items-center justify-start gap-3 rounded-lg border border-white/20 bg-slate-700 px-4 py-2 shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-white/40 hover:shadow-2xl">
                  <img src="/icons/html-5.svg" alt="HTML" className="h-6 w-6 flex-shrink-0" />
                  <p className="truncate text-white">HTML</p>
                </div>
                <div className="flex h-12 items-center justify-start gap-3 rounded-lg border border-white/20 bg-slate-700 px-4 py-2 shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-white/40 hover:shadow-2xl">
                  <img src="/icons/css.svg" alt="CSS" className="h-6 w-6 flex-shrink-0" />
                  <p className="truncate text-white">CSS</p>
                </div>
                <div className="flex h-12 items-center justify-start gap-3 rounded-lg border border-white/20 bg-slate-700 px-4 py-2 shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-white/40 hover:shadow-2xl">
                  <img src="/icons/react.svg" alt="React" className="h-6 w-6 flex-shrink-0" />
                  <p className="truncate text-white">React</p>
                </div>
                <div className="flex h-12 items-center justify-start gap-3 rounded-lg border border-white/20 bg-slate-700 px-4 py-2 shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-white/40 hover:shadow-2xl">
                  <img
                    src="/icons/tailwindcss-icon.svg"
                    alt="Tailwind"
                    className="h-6 w-6 flex-shrink-0"
                  />
                  <p className="truncate text-white">Tailwind</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-white/20 bg-white/10 p-6 shadow-xl">
              <p className="bold mb-4 text-white">Backend Development</p>
              <div className="grid grid-cols-1 gap-4 [&>*]:w-full min-[500px]:grid-cols-2">
                <div className="flex h-12 items-center justify-start gap-3 rounded-lg border border-white/20 bg-slate-700 px-4 py-2 shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-white/40 hover:shadow-2xl">
                  <img
                    src="/icons/spring-icon.svg"
                    alt="Spring"
                    className="h-6 w-6 flex-shrink-0"
                  />
                  <p className="truncate text-white">Spring</p>
                </div>
                <div className="flex h-12 items-center justify-start gap-3 rounded-lg border border-white/20 bg-slate-700 px-4 py-2 shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-white/40 hover:shadow-2xl">
                  <img
                    src="/icons/fastapi-icon.svg"
                    alt="FastAPI"
                    className="h-6 w-6 flex-shrink-0"
                  />
                  <p className="truncate text-white">FastAPI</p>
                </div>
                <div className="flex h-12 items-center justify-start gap-3 rounded-lg border border-white/20 bg-slate-700 px-4 py-2 shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-white/40 hover:shadow-2xl">
                  <img
                    src="/icons/postgresql.svg"
                    alt="PostgreSQL"
                    className="h-6 w-6 flex-shrink-0"
                  />
                  <p className="truncate text-white">PostgreSQL</p>
                </div>
                <div className="flex h-12 items-center justify-start gap-3 rounded-lg border border-white/20 bg-slate-700 px-4 py-2 shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-white/40 hover:shadow-2xl">
                  <img src="/icons/firebase.svg" alt="Firebase" className="h-6 w-6 flex-shrink-0" />
                  <p className="truncate text-white">Firebase</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-white/20 bg-white/10 p-6 shadow-xl">
              <p className="bold mb-4 text-white">Development Tools</p>
              <div className="grid grid-cols-1 gap-4 [&>*]:w-full min-[500px]:grid-cols-2">
                <div className="flex h-12 items-center justify-start gap-3 rounded-lg border border-white/20 bg-slate-700 px-4 py-2 shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-white/40 hover:shadow-2xl">
                  <img src="/icons/git-icon.svg" alt="Git" className="h-6 w-6 flex-shrink-0" />
                  <p className="truncate text-white">Git</p>
                </div>
                <div className="flex h-12 items-center justify-start gap-3 rounded-lg border border-white/20 bg-slate-700 px-4 py-2 shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-white/40 hover:shadow-2xl">
                  <img
                    src="/icons/docker-icon.svg"
                    alt="Docker"
                    className="h-6 w-6 flex-shrink-0"
                  />
                  <p className="truncate text-white">Docker</p>
                </div>
                <div className="flex h-12 items-center justify-start gap-3 rounded-lg border border-white/20 bg-slate-700 px-4 py-2 shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-white/40 hover:shadow-2xl">
                  <img src="/icons/vitejs.svg" alt="Vite" className="h-6 w-6 flex-shrink-0" />
                  <p className="truncate text-white">Vite</p>
                </div>
                <div className="flex h-12 items-center justify-start gap-3 rounded-lg border border-white/20 bg-slate-700 px-4 py-2 shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-white/40 hover:shadow-2xl">
                  <img
                    src="/icons/vercel-icon.svg"
                    alt="Vercel"
                    className="h-6 w-6 flex-shrink-0"
                  />
                  <p className="truncate text-white">Vercel</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-white/20 bg-white/10 p-6 shadow-xl">
              <p className="bold mb-4 text-white">Cloud Services</p>
              <div className="grid grid-cols-1 gap-4 [&>*]:w-full min-[500px]:grid-cols-2">
                <div className="flex h-12 items-center justify-start gap-3 rounded-lg border border-white/20 bg-slate-700 px-4 py-2 shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-white/40 hover:shadow-2xl">
                  <img src="/icons/aws.svg" alt="AWS" className="h-6 w-6 flex-shrink-0" />
                  <p className="truncate text-white">AWS</p>
                </div>
                <div className="flex h-12 items-center justify-start gap-3 rounded-lg border border-white/20 bg-slate-700 px-4 py-2 shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-white/40 hover:shadow-2xl">
                  <img
                    src="/icons/microsoft-azure.svg"
                    alt="Azure"
                    className="h-6 w-6 flex-shrink-0"
                  />
                  <p className="truncate text-white">Azure</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-white/20 bg-white/10 p-6 shadow-xl">
              <p className="bold mb-4 text-white">AI/ML</p>
              <div className="grid grid-cols-1 gap-4 [&>*]:w-full min-[500px]:grid-cols-2">
                <div className="flex h-12 items-center justify-start gap-3 rounded-lg border border-white/20 bg-slate-700 px-4 py-2 shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-white/40 hover:shadow-2xl">
                  <img
                    src="/icons/Langchain--Streamline-Simple-Icons.svg"
                    alt="LangChain"
                    className="h-6 w-6 flex-shrink-0"
                  />
                  <p className="truncate text-white">LangChain</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
