import { Github, Linkedin, Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  /*const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }; */
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const stored = localStorage.getItem('darkMode');
    return stored === 'true'; // por defecto es false si no hay valor guardado
  });
  const toggleDarkMode = () => {
    setDarkMode(prev => {
      const newValue = !prev;
      localStorage.setItem('darkMode', String(newValue));
      return newValue;
    });
  };
  useEffect(() => {
    // Esto asegura que la clase se agregue correctamente en el primer render
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <nav className="fixed w-full bg-white dark:bg-gray-800 shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-gray-800 dark:text-white">Bienvenido</span>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/Josue2406"
                target="_blank"
                rel="noopener noreferrer"
                className="relative p-2 rounded-full text-gray-600 dark:text-gray-300 hover:text-[#2ecc71] dark:hover:text-[#2ecc71] transition-all duration-300 hover:drop-shadow-[0_0_12px_rgba(46,204,113,0.8)] group hover:-translate-y-1 hover:scale-110"
              >
                <Github
                  size={20}
                  className="relative z-10 transition-transform duration-300 group-hover:rotate-12"
                />
                <div className="absolute inset-0 bg-[#2ecc71] rounded-full opacity-0 scale-0 group-hover:opacity-10 group-hover:scale-100 transition-all duration-300"></div>
              </a>
              <a
                href="https://www.linkedin.com/in/josue-fernandez-7128b5208/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative p-2 rounded-full text-gray-600 dark:text-gray-300 hover:text-[#0077b5] dark:hover:text-[#0077b5] transition-all duration-300 hover:drop-shadow-[0_0_12px_rgba(0,119,181,0.8)] group hover:-translate-y-1 hover:scale-110"
              >
                <Linkedin
                  size={20}
                  className="relative z-10 transition-transform duration-300 group-hover:rotate-12"
                />
                <div className="absolute inset-0 bg-[#0077b5] rounded-full opacity-0 scale-0 group-hover:opacity-10 group-hover:scale-100 transition-all duration-300"></div>
              </a>
              <a
  href="/CvDanier.pdf"
  download
  className="relative p-2 rounded-full text-gray-600 dark:text-gray-300 hover:text-[#e74c3c] dark:hover:text-[#e74c3c] transition-all duration-300 hover:drop-shadow-[0_0_12px_rgba(231,76,60,0.8)] group hover:-translate-y-1 hover:scale-110"
>
  <span className="font-semibold text-sm">CV</span>
  <div className="absolute inset-0 bg-[#e74c3c] rounded-full opacity-0 scale-0 group-hover:opacity-10 group-hover:scale-100 transition-all duration-300"></div>
</a>
{/*
              <button
                onClick={toggleDarkMode}
                className="relative p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-400/20 dark:hover:shadow-gray-900/30"
              >
                {darkMode ? (
                  <Sun size={20} className="transition-transform duration-300 hover:rotate-90" />
                ) : (
                  <Moon size={20} className="transition-transform duration-300 hover:-rotate-12" />
                )}
              </button> */}
            <button
  onClick={toggleDarkMode}
  className="relative p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-400/20 dark:hover:shadow-gray-900/30"
>
  <span className="inline-block transition-all duration-500 ease-in-out">
    {darkMode ? (
      <Sun size={20} className="rotate-0 transition-all duration-300 hover:rotate-90" />
    ) : (
      <Moon size={20} className="rotate-0 transition-all duration-300 hover:-rotate-12" />
    )}
  </span>
</button>

            </div>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        <Header />
        {/*<About/> */}
        <Education />
        <Experience />
        <Skills />
        <Projects />
      </main>

      <Contact />
    </div>
  );
}

export default App;