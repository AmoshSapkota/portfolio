import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-blue-50 text-gray-900">
      {/* Simple Navigation Section */}
      <nav className="bg-slate-900 py-6">
        <div className="container mx-auto px-4">
          <div className="flex justify-evenly items-center">
            <a
              href="#home"
              className="text-white hover:text-blue-400 transition-colors duration-300 font-bold text-xl"
            >
              Home
            </a>
            <a
              href="#skills"
              className="text-white hover:text-blue-400 transition-colors duration-300 font-bold text-xl"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-white hover:text-blue-400 transition-colors duration-300 font-bold text-xl"
            >
              Projects
            </a>
            <a
              href="#education"
              className="text-white hover:text-blue-400 transition-colors duration-300 font-bold text-xl"
            >
              Education
            </a>
            <a
              href="#contact"
              className="text-white hover:text-blue-400 transition-colors duration-300 font-bold text-xl"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

export default App;
