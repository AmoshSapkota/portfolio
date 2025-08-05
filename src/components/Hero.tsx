import { motion } from "framer-motion";
import { FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen bg-cover bg-center flex items-center justify-center relative overflow-hidden bg-gray-900 text-white"
      style={{ backgroundImage: "url('/assets/dark-pattern-bg.jpg')" }}
    >
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl py-16 sm:py-20">
        <div className="text-center">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 leading-tight drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I'm Amosh Sapkota
            </motion.h1>

            <motion.p
              className="text-xl sm:text-2xl lg:text-3xl mb-8 font-medium drop-shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Full Stack Development | Cloud Computing | AI Engineering
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-10 max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <a
                href="#projects"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-center"
              >
                View My Projects
              </a>
              <a
                href="#contact"
                className="border-2 border-gray-300 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-gray-200 hover:border-gray-400 transition-all duration-300 text-center"
              >
                Get In Touch
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
