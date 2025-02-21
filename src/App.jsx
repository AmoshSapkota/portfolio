import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const projects = [
  {
    title: "Distributed File RPC",
    description: "Implemented multi-threaded file servers supporting file management functionalities using RPC.",
    link: "https://github.com/AmoshSapkota/distributed-file-rpc",
  },
  {
    title: "Distributed Systems: Multicast & Vector Clocks",
    description: "Developed a distributed system with totally ordered multicast, vector clocks, and distributed locking.",
    link: "https://github.com/AmoshSapkota/Distributed-Systems-Implementing-Multicast-Vector-Clocks-and-Distributed-Locking",
  },
  {
    title: "Sentiment Analysis Using Large Language Models",
    description: "Implemented BERT with Whole Word Masking & Adversarial Training for sentiment analysis on car reviews.",
    link: "https://github.com/AmoshSapkota/Car-Review-Sentiment-Analysis-Using-BERT",
  },
  {
    title: "LeNet-5 Implementation on MNIST Dataset",
    description: "Implemented a LeNet-5 neural network from scratch using PyTorch for digit classification, achieving 99% accuracy.",
    link: "https://github.com/AmoshSapkota/LeNet-5-implementation-on-MNIST-dataset",
  },
  {
    title: "Rotten Tomatoes Movie Reviews Classifier",
    description: "Developed a Naive Bayes classifier from scratch, achieving approximately 80% accuracy.",
    link: "https://github.com/AmoshSapkota/Rotten-Tomato-Review-Using-Naive-Bayes-Classifier",
  },
  {
    title: "Mango Leaf Disease Classifier",
    description: "Developed a CNN model for mango leaf disease detection, achieving 95% validation accuracy.",
    link: "https://github.com/AmoshSapkota/Mango-Leaf-Disease",
  },
  {
    title: "Implementation of KNN Algorithm and K-Fold Cross-Validation",
    description: "Implemented KNN algorithm from scratch, achieving 90% accuracy on the Breast Cancer dataset.",
    link: "https://github.com/AmoshSapkota/KNN-Implementation-from-scratch",
  }];

export default function Portfolio() {
  return (
    <div style={{ minHeight: '100vh', width: '100vw', background: 'linear-gradient(to bottom right, #5A2A83, #1D1D3B)', color: 'white', padding: '2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <motion.h1
        style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#79B4F3' }}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Amosh Sapkota
      </motion.h1>
      
      <motion.div
        style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <img
          src="/profile.jpg"
          alt="Profile Picture"
          style={{ width: '150px', height: '150px', borderRadius: '50%', border: '5px solid #79B4F3', boxShadow: '0px 6px 12px rgba(0,0,0,0.3)' }}
        />
        <p style={{ fontSize: '1.2rem', color: '#E0E0E0', marginTop: '1rem', maxWidth: '800px', textAlign: 'center' }}>
          Passionate software engineer with 3 years of experience specializing in AI/ML, full-stack development, and distributed systems.
          Adept at crafting scalable and efficient software solutions.
        </p>
        {/* Social Media Buttons */}
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          {/*<a href="https://www.linkedin.com/in/amosh-sapkota-991812209" target="_blank" rel="noopener noreferrer" style={{ color: '#79B4F3', fontSize: '2rem' }}>
            <FaLinkedin />
          </a> */}
          <a href="https://github.com/AmoshSapkota" target="_blank" rel="noopener noreferrer" style={{ color: '#79B4F3', fontSize: '2rem' }}>
            <FaGithub />
          </a>
        </div>
        <div style={{ marginTop: '1rem', width: '80%', textAlign: 'center' }}>
          <h3 style={{ color: '#79B4F3' }}>Education</h3>
          <p style={{ color: '#E0E0E0' }}>
            <b>Master's in Computer Science</b> - University of Texas at Arlington
          </p>
        </div>
        <div style={{ marginTop: '1rem', width: '80%', textAlign: 'center' }}>
          <h3 style={{ color: '#79B4F3' }}>Skills</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', textAlign: 'left', justifyContent: 'center' }}>
            <p style={{ color: '#E0E0E0' }}><b>Programming:</b> Python, JavaScript, Java, C#, C++, SQL, NoSQL</p>
            <p style={{ color: '#E0E0E0' }}><b>Frameworks:</b> Django, Flask, React, Node.js, Spring, .NET</p>
            <p style={{ color: '#E0E0E0' }}><b>AI/ML:</b> TensorFlow, PyTorch, Scikit-learn, NLP, Deep Learning</p>
            <p style={{ color: '#E0E0E0' }}><b>Cloud & DevOps:</b> AWS (EC2, S3, RDS, Lambda, Glue, API Gateway), Docker, Kubernetes, CI/CD Pipelines</p>
            <p style={{ color: '#E0E0E0' }}><b>Databases:</b> PostgreSQL, MySQL, MongoDB, DynamoDB, Oracle</p>
            <p style={{ color: '#E0E0E0' }}><b>Other Tools:</b> Git, Jenkins, Postman, Agile/Scrum, RESTful APIs</p>
          </div>
        </div>
      </motion.div>
      
      <div style={{ marginTop: '3rem', width: '80%' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#79B4F3', marginBottom: '1rem' }}>Projects</h2>
        <motion.div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              style={{ padding: '1.5rem', background: '#303A52', borderRadius: '8px', boxShadow: '0px 4px 10px rgba(0,0,0,0.3)' }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#79B4F3' }}>{project.title}</h3>
              <p style={{ color: '#E0E0E0', margin: '1rem 0' }}>{project.description}</p>
              <a href={project.link} target="_blank" style={{ color: '#79B4F3', textDecoration: 'underline' }}>View Project</a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
