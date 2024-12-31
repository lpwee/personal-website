import React, { useEffect, useState } from 'react';

interface Repository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
}


const HomePage: React.FC = () => {

  // Generated Code
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await fetch('https://api.github.com/users/lpwee/repos?sort=updated&per_page=6');
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        const data = await response.json();
        setRepositories(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch repositories');
      } finally {
        setLoading(false);
      }
    };

    fetchRepositories();
  }, []);

  // End Generated Code

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


      {/* Generated Code  for Github Projects*/}
      <div className="my-5 min-w-80 rounded-lg border border-white/20 bg-white/10 p-6 shadow-xl">
        <h2 className="mb-4 text-2xl font-bold text-white">Recent GitHub Projects</h2>
        {loading && <p className="text-white">Loading repositories...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}
        {!loading && !error && (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {repositories.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/20 bg-white/10 p-4 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/40"
              >
                <h3 className="mb-2 text-lg font-semibold text-white">{repo.name}</h3>
                {repo.description && (
                  <p className="mb-3 text-sm text-white/80">{repo.description}</p>
                )}
                <div className="flex items-center gap-4">
                  {repo.language && (
                    <span className="text-sm text-white/60">
                      <span className="mr-1">•</span>
                      {repo.language}
                    </span>
                  )}
                  {repo.stargazers_count > 0 && (
                    <span className="flex items-center text-sm text-white/60">
                      <svg
                        className="mr-1 h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                        />
                      </svg>
                      {repo.stargazers_count}
                    </span>
                  )}
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
      {/* End Generated Code */}

    </main>
  );
};

export default HomePage;
