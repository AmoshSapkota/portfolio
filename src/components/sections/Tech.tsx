import { motion } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";
import { Header } from "../atoms/Header";

const TechCard = ({ technology, index }: { technology: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{ 
        scale: 1.1, 
        rotate: 5,
        transition: { duration: 0.3 }
      }}
      whileTap={{ scale: 0.95 }}
      className="group relative flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#232631] to-[#1d1836] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-purple-500/50"
    >
      {/* Animated Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:to-blue-500/10 rounded-2xl transition-all duration-500" />
      
      {/* Tech Icon */}
      <motion.div
        className="relative z-10 mb-4 p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10"
        whileHover={{ 
          rotateY: 180,
          transition: { duration: 0.6 }
        }}
      >
        <img
          src={technology.icon}
          alt={technology.name}
          className="w-16 h-16 object-contain filter drop-shadow-lg"
        />
      </motion.div>
      
      {/* Tech Name */}
      <motion.h3
        className="relative z-10 text-lg font-semibold text-white text-center tracking-wide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.1 + 0.3 }}
      >
        {technology.name}
      </motion.h3>
      
      {/* Animated Underline */}
      <motion.div
        className="mt-2 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  );
};

const Tech = () => {
  return (
    <>
      <Header 
        useMotion={true} 
        p="Technologies I work with"
        h2="Skills & Tools."
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8"
      >
        {technologies.map((technology, index) => (
          <TechCard
            key={technology.name}
            technology={technology}
            index={index}
          />
        ))}
      </motion.div>

      {/* Floating Particles Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-500/20 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0 
            }}
            animate={{ 
              y: [null, -window.innerHeight],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");