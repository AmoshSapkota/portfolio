type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Amosh Sapkota",
    fullName: "Amosh Sapkota",
    email: "amoshsapkota@gmail.com",
  },
  hero: {
    name: "Amosh Sapkota",
    p: [
      "Software Engineer",
    ],
  },
  contact: {
    p: "I'm always open to discussing new opportunities, interesting projects, or just having a tech chat.",
    h2: "Contact Me",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I'm a Full Stack Developer with extensive experience in cloud-native microservices architecture and DevOps practices. I specialize in Spring Boot, Java, TypeScript, React, and Azure/AWS cloud platforms. With expertise in containerization with Docker and Kubernetes, I've successfully deployed scalable applications serving millions of users with 99.9% uptime. I excel at building event-driven architectures using Kafka and RabbitMQ, implementing comprehensive CI/CD pipelines, and mentoring development teams. Currently pursuing my Master's in Computer Science while working on cutting-edge bioinformatics applications.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "Featured Projects",
      h2: "Projects.",
      content: `A showcase of my latest work in cloud computing, DevOps automation, and AI
      .`,
    },
  },
};
