import AzureLogo from "../assets/img/Azure.jpeg";
import tsLogo from "../assets/img/descarga.jpeg";
import EsLogo from "../assets/img/Es.jpeg";
import FLogo from "../assets/img/Flutter.jpeg";
import gitLogo from "../assets/img/git.jpeg";
import sqLogo from "../assets/img/my.jpeg";
import reactLogo from "../assets/img/React-icon.svg.png";
import qLogo from "../assets/img/SServer.jpeg";
import IngLogo from "../assets/img/USA.jpeg";
import viteLogo from "../assets/logos/icons8-rápidamente.svg";
import bootLogo from "../assets/logos/icons8-spring-boot.svg";
import JsLogo from "../assets/logos/javascript.svg";
import nodeLogo from "../assets/logos/nodejs-logo.svg";

const Skills = () => {
  const skills = {
    frontend: [
      { name: "React", logo: reactLogo },
      { name: "Vite", logo: viteLogo },
      { name: "TypeScript", logo: tsLogo },
      { name: "JavaScript", logo: JsLogo },
      { name: "Flutter", logo: FLogo },
    ],
    backend: [
      { name: "Spring Boot", logo: bootLogo },
      { name: "Node.js", logo: nodeLogo },
    ],
    database: [{ name: "MySQL", logo: sqLogo },
      {name: "SQL Server", logo: qLogo}
    ],
    tools: [{ name: "GitHub", logo: gitLogo },
      { name: "Azure", logo: AzureLogo }
    ],
    languages: [
      { language: "Español",logo: EsLogo, level: "Nativo" },
      { language: "Inglés", logo: IngLogo,level: "Básico" },
    ],
  };

  const renderCategory = (title: string, data: { name: string; logo: string }[]) => (
    <div>
      <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{title}</h3>
      <div className="grid grid-cols-2 gap-4">
        {data.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 h-full flex items-center space-x-3 border border-transparent hover:border-blue-500 transition-all hover:-translate-y-1 hover:shadow-md"
          >
            <img src={skill.logo} alt={skill.name} className="w-6 h-6 object-contain" />
            <span className="text-gray-800 dark:text-gray-200">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          Habilidades
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {renderCategory("Frontend", skills.frontend)}
          {renderCategory("Backend", skills.backend)}
          {renderCategory("Base de Datos", skills.database)}
          {renderCategory("Herramientas", skills.tools)}
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Idiomas</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.languages.map((lang, index) => (
              <div
                key={index}
                className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 flex justify-between items-center border border-transparent hover:border-indigo-500 transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <span className="text-gray-800 dark:text-gray-200">{lang.language}</span>
                <span className="text-gray-600 dark:text-gray-400">{lang.level}</span>
                <img src={lang.logo} alt={lang.language} className="w-6 h-6 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
