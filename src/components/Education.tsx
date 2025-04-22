

import { motion } from "framer-motion";
import { FaUniversity } from "react-icons/fa";

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

const educationData: EducationItem[] = [
  {
    degree: "Ingeniería en sistemas",
    institution: "Universidad Nacional de Costa Rica",
    period: "2025",
    description: "Especialización en desarrollo de software y sistemas distribuidos.",
  },
  {
    degree: "Scrum Fundamentals",
    institution: "Scrumstudy",
    period: "2024",
    description: "Metodología agíl ",
  },
  {
    degree: "Diplomado en programación de aplicaciones informáticas ",
    institution: "Universidad Nacional",
    period: "2024",
    description: "Programa intensivo de desarrollo web",
  },
  
];

const EducationCard = ({ degree, institution, period, description }: EducationItem) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl p-6"
  >
    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{degree}</h3>
    <p className="flex items-center text-gray-600 dark:text-gray-300 mb-1">
      <FaUniversity className="mr-2" />
      {institution}
    </p>
    <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">{period}</p>
    <p className="text-gray-700 dark:text-gray-300">{description}</p>
  </motion.div>
);

const Education = () => {
  return (
    <section id="education" aria-labelledby="education-heading" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="education-heading"
          className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Educación
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {educationData.map((item, index) => (
            <EducationCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;


