
const Header = () => {
  return (
    <section className="bg-gradient-to-r from-green-800 to-indigo-700 text-white py-12 md:py-11">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
        {/*  <div className="w-48 h-48 mb-5 rounded-full overflow-hidden border-4 border-white shadow-xl mt-5">
            <img
              src={yoImg}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div> */}
          <h3 className="text-    md:text-6xl font-bold mb-2">Josue Fernandez</h3>
          <p className="text-xl md:text-2xl mb-5">Estudiante de Ingeniería en sistemas de información en Costa Rica
          </p>
          <div className="flex justify-center space-x-8 mb-5">
            <a
              href="#form"
              className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition-colors"
            >
              Contáctame
            </a>
            <a
              href="#projects"
              className="border-2 border-white text-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Ver Proyectos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;