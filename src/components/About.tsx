import yo from "../assets/img/kk.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Sobre Mí</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <img
              src={yo}
              alt="Profile"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Soy un desarrollador Full Stack apasionado por crear soluciones tecnológicas innovadoras.
              Con experiencia en desarrollo web y móvil, me especializo en crear aplicaciones
              escalables y mantenibles utilizando las últimas tecnologías.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Mi objetivo es combinar mi conocimiento técnico con mi creatividad para
              desarrollar productos que marquen la diferencia en la vida de las personas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;