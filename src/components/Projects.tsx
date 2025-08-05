import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Project } from "../types";

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "AI Teleprompter App",
      description:
        "An AI Teleprompter App designed to assist professionals to build confidence during presentations. It features a desktop application with teleprompter functionality and a set of microservices that handle various backend tasks.\n\nTechnologies Used:\nFrontend: React, Electron, TypeScript, Tailwind CSS\nBackend: Java, Spring Boot, Maven, REST API, Spring Data JPA, Lombok, PostgreSQL\nMicroservices: Auth Service, Payment Service, AI Content Service, Notification Service, Analytics Service, API Gateway\nContainerization: Docker\nInfrastructure: Kubernetes (AKS), Terraform, Helm, Azure Key Vault, Azure Virtual Machines\nCI/CD: GitHub Actions, Argo CD\nDevSecOps: SonarQube SAST, OWASP ZAP DAST, JMeter, Trivy, Snyk\nMonitoring: Prometheus, Grafana, Jaeger, Application Insights, Log Analytics\nLogging: ELK Stack (Elasticsearch, Logstash, Kibana)\nAPI Documentation: SwaggerHub, OpenAPI\nOther: Ansible, Nginx, Docker Compose",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: [
        // Frontend
        "React",
        "Electron",
        "TypeScript",
        "Tailwind CSS",
        // Backend
        "Java",
        "Spring Boot",
        "Maven",
        "REST API",
        "Spring Data JPA",
        "Lombok",
        "PostgreSQL",
        // Microservices
        "Auth Service",
        "Payment Service",
        "AI Content Service",
        "Notification Service",
        "Analytics Service",
        "API Gateway",
        // Containerization
        "Docker",
        // Infrastructure
        "Kubernetes (AKS)",
        "Terraform",
        "Helm",
        "Azure Key Vault",
        "Azure Virtual Machines",
        // CI/CD
        "GitHub Actions",
        "Argo CD",
        // DevSecOps
        "SonarQube SAST",
        "OWASP ZAP DAST",
        "JMeter",
        "Trivy",
        "Snyk",
        // Monitoring
        "Prometheus",
        "Grafana",
        "Jaeger",
        "Application Insights",
        "Log Analytics",
        // Logging
        "ELK Stack (Elasticsearch, Logstash, Kibana)",
        // API Documentation
        "SwaggerHub",
        "OpenAPI",
        // Other
        "Ansible",
        "Nginx",
        "Docker Compose",
      ],
      githubUrl: "https://github.com/AmoshSapkota/AI-APP",
      //category: "AI & Productivity",
      highlights: [
        "Desktop teleprompter functionality",
        "Microservices backend",
        "Containerized with Docker",
        "Kubernetes orchestration",
        "Infrastructure as Code with Terraform",
        "CI/CD with GitHub Actions & Argo CD",
        "Monitoring with Prometheus, Grafana, ELK Stack",
      ],
    },
    {
      id: 2,
      title: "Resume Generator Application",
      description:
        "A cloud-native Spring Boot application that generates professional resumes, deployed in Kubernetes cluster. Features Spring Boot backend, Azure Kubernetes Service deployment, and Infrastructure as Code with Terraform.",
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
      //category: "Cloud Native",
      highlights: [
        "Microservices architecture with Kubernetes orchestration",
        "Infrastructure as Code with Terraform",
        "CI/CD pipeline with Azure DevOps",
        "Multi-environment deployment (test/prod)",
        "Azure Container Registry integration",
      ],
    },
    {
      id: 3,
      title: "Site Reliability Engineering for Spring Boot Application",
      description:
        "A production-ready Java Spring Boot application deployed on Azure Virtual Machine (VM) demonstrating Azure Site Reliability Engineering (SRE) best practices with comprehensive monitoring, automated testing, and secure deployment workflows.\n\nA complete Azure SRE demonstration featuring a Spring Boot application with Product CRUD operations, integrated with Application Insights, Log Analytics Workspace, OpenTelemetry instrumentation, and comprehensive testing suite (65+ test cases with Mockito). Built for Azure VM deployment with automated setup scripts and secure credential management.",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: [
        "Java",
        "Spring Boot 3.x",
        "Java 21",
        "REST API",
        "PostgreSQL Database",
        "Spring Data JPA",
        "Spring Boot Actuator",
        "Lombok",
        "Azure VM",
        "Application Insights",
        "Log Analytics",
        "OpenTelemetry",
        "Mockito",
        "Automated Setup Scripts",
        "Secure Credential Management",
      ],
      githubUrl: "https://github.com/AmoshSapkota/Azure-SRE",
      //category: "Azure SRE",
      highlights: [
        "Spring Boot 3.x with Java 21 runtime",
        "RESTful Product API with full CRUD operations (/api/products)",
        "PostgreSQL Database with persistent storage",
        "Spring Data JPA for data access layer",
        "Spring Boot Actuator for health checks and metrics",
        "Lombok for clean entity models",
        "Azure Monitoring Integration",
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
            Featured Projects{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-800 max-w-3xl mx-auto font-semibold">
            A showcase of my latest work in cloud computing, DevOps automation,
            AI and machine learning
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
                  className="w-full h-64 sm:h-72 md:h-80 lg:h-64 xl:h-72 object-cover rounded-t-xl"
                  style={{ objectFit: "cover" }}
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

                <p className="text-gray-600 mb-6 text-base lg:text-lg break-words">
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
      </div>
    </section>
  );
};

export default Projects;
