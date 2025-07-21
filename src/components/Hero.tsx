import { motion } from "framer-motion";
import { FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center relative overflow-hidden"
    >
      {/* Simple overlay for depth */}
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl py-16 sm:py-20">
        <div className="text-center">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 text-white leading-tight drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I'm Amosh Sapkota
            </motion.h1>

            <motion.p
              className="text-xl sm:text-2xl lg:text-3xl mb-8 text-white font-medium drop-shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Software Engineer & Cloud Computing Specialist
            </motion.p>

            <motion.p
              className="text-lg sm:text-xl lg:text-2xl mb-12 text-gray-100 max-w-4xl mx-auto leading-relaxed drop-shadow-md font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              I'm a passionate software engineer with a Master's in Computer
              Science from the University of Texas at Arlington, specializing in
              cloud-native architectures and modern web development. With
              expertise in building scalable microservices, implementing DevOps
              pipelines, and creating innovative AI-powered solutions, I thrive
              on solving complex technical challenges and bringing ideas to life
              through code.
              <br />
              <br />
              My technical journey encompasses full-stack development with
              React, TypeScript, and Spring Boot, database design and
              optimization with PostgreSQL and MongoDB, and cloud infrastructure
              management using AWS and Azure. I have hands-on experience with
              containerization using Docker, orchestration with Kubernetes,
              infrastructure as code with Terraform, and CI/CD pipeline
              automation with Jenkins. I'm passionate about writing clean,
              maintainable code, implementing microservices architectures, and
              leveraging the latest technologies to build robust, scalable
              applications that make a real impact.
              <br />
              <br />
              Beyond coding, I enjoy exploring emerging technologies,
              contributing to open-source projects, and continuously learning
              new frameworks and tools. Let's create something amazing together.
            </motion.p>

            {/* CTA Buttons */}
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
                className="border-2 border-white/20 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-white/5 hover:border-white/40 transition-all duration-300 text-center"
              >
                Get In Touch
              </a>
            </motion.div>

            {/* Contact Info & GitHub - All on same level horizontally */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <a
                href="mailto:amoshsapkota@gmail.com"
                className="flex items-center gap-3 text-gray-300 bg-white/5 backdrop-blur-sm px-4 sm:px-6 py-3 rounded-full hover:bg-white/10 transition-all duration-300 text-sm sm:text-base"
              >
                <FaEnvelope className="text-blue-400 flex-shrink-0" />
                <span className="truncate">amoshsapkota@gmail.com</span>
              </a>
              <a
                href="tel:+12142084198"
                className="flex items-center gap-3 text-gray-300 bg-white/5 backdrop-blur-sm px-4 sm:px-6 py-3 rounded-full hover:bg-white/10 transition-all duration-300 text-sm sm:text-base"
              >
                <FaPhone className="text-blue-400 flex-shrink-0" />
                <span>+1 (214) 208-4198</span>
              </a>
              <motion.a
                href="https://github.com/AmoshSapkota"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:text-blue-400 hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub className="text-2xl" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
