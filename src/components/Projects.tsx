import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Project } from "../types";

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "AI-Powered Resume Generator",
      description:
        "A cloud-native microservice application that generates professional resumes using AI. Features Spring Boot backend, Azure Kubernetes Service deployment, and Infrastructure as Code with Terraform.",
      image:
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: [
        "Java",
        "Spring Boot",
        "Azure",
        "Kubernetes",
        "Terraform",
        "Docker",
        "Azure DevOps",
      ],
      githubUrl:
        "https://github.com/AmoshSapkota/AI-Powered-Resume-Generator---Cloud-Native-Microservice",
      category: "Cloud Native",
      highlights: [
        "Microservices architecture with Kubernetes orchestration",
        "Infrastructure as Code with Terraform",
        "CI/CD pipeline with Azure DevOps",
        "Multi-environment deployment (test/prod)",
        "Azure Container Registry integration",
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-blue-50"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-8">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-800 max-w-3xl mx-auto font-semibold">
            A showcase of my latest work in cloud computing, DevOps automation,
            and machine learning
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12 mb-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="card-hover bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 lg:p-8">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-6 line-clamp-3 text-base lg:text-lg">
                  {project.description}
                </p>

                {/* Key Highlights */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-blue-600 mb-3">
                    Key Features:
                  </h4>
                  <ul className="text-gray-600 space-y-2">
                    {project.highlights.slice(0, 3).map((highlight, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-blue-600 mr-3 text-lg">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex-1 justify-center font-semibold"
                  >
                    <FaGithub />
                    <span>View Code</span>
                  </a>
                  <button className="flex items-center gap-2 border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-300 flex-1 justify-center font-semibold">
                    <FaExternalLinkAlt />
                    <span>Details</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-20"
        >
          <div className="bg-white border border-gray-200 rounded-xl p-10 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Explore More Projects
            </h3>
            <p className="text-gray-600 mb-8 text-lg">
              Check out my GitHub profile for more projects and contributions
            </p>
            <a
              href="https://github.com/AmoshSapkota"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold text-lg"
            >
              <FaGithub className="text-xl" />
              <span>Visit GitHub Profile</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
