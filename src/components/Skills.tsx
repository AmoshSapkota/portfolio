import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaDatabase,
  FaLinux,
} from "react-icons/fa";
import {
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiKubernetes,
  SiTerraform,
  SiSpringboot,
  SiMysql,
  SiTailwindcss,
  SiFramer,
  SiVite,
  SiRedis,
  SiElasticsearch,
  SiJenkins,
  SiGraphql,
  SiNextdotjs,
  SiExpress,
  SiFlask,
  SiJavascript,
  SiTensorflow,
  SiOpenai,
} from "react-icons/si";
import { TbBrandAzure } from "react-icons/tb";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", icon: FaReact, color: "text-blue-400" },
        { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
        { name: "Framer Motion", icon: SiFramer, color: "text-pink-500" },
        { name: "Vite", icon: SiVite, color: "text-purple-500" },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Java", icon: FaJava, color: "text-orange-500" },
        { name: "Spring Boot", icon: SiSpringboot, color: "text-green-500" },
        { name: "Node.js", icon: FaNodeJs, color: "text-green-400" },
        { name: "Express.js", icon: SiExpress, color: "text-gray-600" },
        { name: "Python", icon: FaPython, color: "text-yellow-400" },
        { name: "Flask", icon: SiFlask, color: "text-pink-600" },
      ],
    },
    {
      title: "Database & Storage",
      skills: [
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-700" },
        { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
        { name: "MySQL", icon: SiMysql, color: "text-blue-500" },
        { name: "Redis", icon: SiRedis, color: "text-red-500" },
        {
          name: "Elasticsearch",
          icon: SiElasticsearch,
          color: "text-yellow-500",
        },
        { name: "Database Design", icon: FaDatabase, color: "text-gray-500" },
      ],
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS", icon: FaAws, color: "text-orange-400" },
        { name: "Azure", icon: TbBrandAzure, color: "text-blue-500" },
        { name: "Docker", icon: FaDocker, color: "text-blue-400" },
        { name: "Kubernetes", icon: SiKubernetes, color: "text-blue-600" },
        { name: "Terraform", icon: SiTerraform, color: "text-purple-500" },
        { name: "GitHub Actions", icon: FaGitAlt, color: "text-blue-500" },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
        { name: "Linux", icon: FaLinux, color: "text-black" },
      ],
    },
    {
      title: "Artificial Intelligence",
      skills: [
        { name: "Computer Vision", icon: SiTensorflow, color: "text-yellow-400" },
        { name: "LLMs", icon: SiOpenai, color: "text-green-500" },
        { name: "RAG", icon: SiTensorflow, color: "text-red-500" },
        { name: "Neural Networks", icon: SiTensorflow, color: "text-orange-400" },
        { name: "AI Agents", icon: SiOpenai, color: "text-blue-400" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 lg:py-28 bg-gradient-to-b from-gray-900 to-gray-800 text-white"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-8">
            Technical Skills{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-800 max-w-3xl mx-auto font-semibold">
            A comprehensive toolkit of technologies I use to build robust,
            scalable solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-white rounded-xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
            >
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => {
                  const IconComponent = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.4,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                      whileHover={{ scale: 1.05 }}
                      className="flex flex-col items-center p-4 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors duration-300 border border-gray-100"
                    >
                      <IconComponent
                        className={`text-4xl ${skill.color} mb-3`}
                      />
                      <span className="text-base font-bold text-gray-800 text-center">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
