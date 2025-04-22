import { ExternalLink, Github } from 'lucide-react';
import { useState } from 'react';
import BOT from "../assets/BOT.png";
import CEDIAM from "../assets/CEDIAM.png";
import dash from "../assets/dash.png";
const Projects = () => {
  const projects = [
    {
      title: "Dashboard",
      description: "Plataforma para gestionar solicitudes en tiempo real y que permite la visualización de datos personales.",
      image: dash,
      technologies: ["React", "Node.js", "MySQL Workbench", "vite", "typescript"],
      github: "https://github.com/Josue2406/DashboardCediam.git",
      live: "https://dashboard-cediam.vercel.app/login"
    },
    {
      title: "CEDIAM",
      description: "Aplicativo informativo y de donde se envian solicitudes de manera segura.",
      image: CEDIAM,
      technologies: ["React", "Node.js", "MySQL Workbench", "vite", "typescript"],
      github: "https://github.com/Josue2406/pGCed2danier.git",
      live: "https://p-g-ced2danier.vercel.app/"
    },
    {
      title: "Asistente de programación",
      description: "Responde a preguntas como que es UseState y otros temas de programación, utilizamos un chatbot.",
      image: BOT,
      technologies: ["HTML","CSS"],
      github: "https://github.com/Josue2406/Lab2.git",
      live: "https://lab2-black.vercel.app/"
    }
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Proyectos
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  >
                    <Github size={20} className="mr-2" />
                    Código
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                  >
                    <ExternalLink size={20} className="mr-2" />
                    Link
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;