import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  redux,
  nodejs,
  mongodb,
  git,
  docker,
  uta,
  xelwel,
  java,
  python,
  postgresql,
  spring,
  kubernetes,
  azure,
  tensorflow,
  pytorch,
  openai,
  rag,
  llm,
  aiagents,
  langchain,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "tech",
    title: "Skills",
  },
  {
    id: "works",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "Cloud Solutions",
    icon: backend,
  },
  {
    title: "Mobile Applications",
    icon: mobile,
  },
  {
    title: "AI & Machine Learning",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Spring Boot",
    icon: spring,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Kubernetes",
    icon: kubernetes,
  },
  {
    name: "Azure",
    icon: azure,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "TensorFlow",
    icon: tensorflow,
  },
  {
    name: "PyTorch",
    icon: pytorch,
  },
  {
    name: "OpenAI",
    icon: openai,
  },
  {
    name: "RAG",
    icon: rag,
  },
  {
    name: "LLMs",
    icon: llm,
  },
  {
    name: "AI Agents",
    icon: aiagents,
  },
  {
    name: "LangChain",
    icon: langchain,
  },
];

const experiences: TExperience[] = [
  {
    title: "Full Stack Developer",
    companyName: "University of Texas at Arlington",
    icon: uta,
    iconBg: "#E6DEDD",
    date: "Sep 2022 - May 2025",
    points: [
      "Modernized bioinformatics data integration application into modular Spring Boot microservices architecture, deployed on Azure Kubernetes Service (AKS) with 99.9% uptime.",
      "Developed REST APIs with Spring Boot and Spring Data JPA (Hibernate), enforcing Java 21 functional programming best practices and OOP principles to reduce legacy technical debt.",
      "Achieved 90%+ unit test coverage across services with 500+ unit tests using JUnit 5 and Mockito, with SonarQube quality gates integrated into GitHub Actions CI/CD pipelines.",
      "Implemented Apache Kafka-based event streaming to connect bioinformatics ETL, annotation, and visualization microservices, reducing pipeline latency by 35%.",
    ],
  },
  {
    title: "Software Engineer",
    companyName: "Xelwel Innovation",
    icon: xelwel,
    iconBg: "#383E56",
    date: "Jun 2021 - Jul 2022",
    points: [
      "Designed and implemented 8 Spring Boot microservices for an organization with 1M+ daily users, containerized and deployed to Azure Kubernetes Service (AKS), resulting in 99.9% uptime.",
      "Built event-driven architecture using RabbitMQ for real-time notification and Kafka for streaming user activity data, ensuring guaranteed message delivery across 15M+ daily events.",
      "Developed secure authentication and authorization with Spring Security, OAuth2, and JWT, supporting Google/Facebook logins and Redis-backed session management for 10,000+ concurrent users.",
      "Transformed legacy React JavaScript application into robust TypeScript framework, structured around Redux state management pattern, improving predictability and scalability across 20+ components.",
    ],
  },
];


const projects: TProject[] = [
  {
    name: "AI Teleprompter App",
    description:
      "Revolutionary AI-powered teleprompter application that transforms public speaking. Built with React & Electron, it features intelligent text scrolling, speech recognition for pace adjustment, and real-time AI suggestions. The backend microservices architecture handles user analytics, content optimization, and seamless cross-platform synchronization for professional presenters.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Electron", color: "green-text-gradient" },
      { name: "TypeScript", color: "pink-text-gradient" },
    ],
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    sourceCodeLink: "https://github.com/AmoshSapkota/AI-APP",
  },
  {
    name: "Resume Generator Service In Kubernetes",
    description:
      "Enterprise-grade cloud-native resume generation platform built with Spring Boot microservices. Deployed on Kubernetes with auto-scaling capabilities, it processes 1000+ resume requests simultaneously. Features Azure DevOps CI/CD pipelines, Terraform infrastructure automation, Redis caching, and ML-powered content optimization for ATS compatibility.",
    tags: [
      { name: "Java", color: "blue-text-gradient" },
      { name: "Spring Boot", color: "green-text-gradient" },
      { name: "Azure", color: "pink-text-gradient" },
    ],
    image:
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80",
    sourceCodeLink: "https://github.com/AmoshSapkota/Resume-Generator-Service-In-Kubernetes",
  },
  {
    name: "Azure SRE Demo",
    description:
      "Production-grade Site Reliability Engineering implementation showcasing 99.9% uptime with Spring Boot on Azure. Features comprehensive monitoring with Prometheus/Grafana, automated incident response, chaos engineering tests, performance optimization, and real-time alerting. Demonstrates enterprise SRE practices with infrastructure as code and zero-downtime deployments.",
    tags: [
      { name: "Azure", color: "blue-text-gradient" },
      { name: "Spring Boot", color: "green-text-gradient" },
      { name: "Kubernetes", color: "pink-text-gradient" },
    ],
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    sourceCodeLink: "https://github.com/AmoshSapkota/Azure-SRE",
  },
];

export { services, technologies, experiences, projects };
