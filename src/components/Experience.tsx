import { motion } from "framer-motion";
import { Briefcase, Building, Calendar } from "lucide-react";

const experiences = [
    {
      position: "Scrum Master",
      company: "Proyecto Centro Diurno .",
      period: "2024 - Presente",
      description:
      "Lider en el desarrollo de un sistema para la gestion de solicitudes utilizando React. spring boot y workbench.",
    },
    {
      position: "QA",
      company: "Coopeguanacaste santa cruz .",
      period: "2023-2024",
      description:
        "Asegurando la calidad del software mediante pruebas automatizadas y revisión de código, creando reportes de defectis del producto.",
    },
  ];
const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white tracking-tight">
          Experiencia Profesional
        </h2>

        <ol className="relative border-l border-gray-300 dark:border-gray-700">
          {experiences.map((exp, index) => (
            <motion.li
              key={index}
              className="mb-12 ml-6"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
            >
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full -left-3 ring-8 ring-white dark:ring-gray-950">
                <Briefcase className="w-3.5 h-3.5 text-white" />
              </span>

              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl shadow-md
                border border-transparent hover:border-blue-500 dark:hover:border-blue-400
                transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {exp.position}
                </h3>
                <div className="flex flex-wrap text-sm text-gray-500 dark:text-gray-400 mt-1 mb-3 gap-4">
                  <span className="flex items-center gap-1">
                    <Building className="w-4 h-4" />
                    {exp.company}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed tracking-tight">
                  {exp.description}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;

