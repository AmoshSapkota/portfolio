import { motion } from "framer-motion";
import { FaGraduationCap, FaMapMarkerAlt } from "react-icons/fa";
import { Education as EducationType } from "../types";

const Education = () => {
  const education: EducationType[] = [
    {
      institution: "University of Texas at Arlington",
      degree: "Master of Science in Computer Science",
      period: "",
      location: "Arlington, TX, USA",
      gpa: "",
      description:
        "Specialized in Cloud Computing, Software Engineering, and Machine Learning. Completed advanced coursework in distributed systems, microservices architecture, and AI/ML algorithms.",
    },
  ];

  return (
    <section
      id="education"
      className="py-20 lg:py-28 bg-gradient-to-b from-blue-50 to-purple-50"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-8">
            Education
          </h2>
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-800 max-w-3xl mx-auto font-semibold">
            Academic foundation and continuous learning journey in technology
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="max-w-5xl mx-auto mb-24">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-2 lg:left-1/2 lg:transform lg:-translate-x-1/2 h-full w-1 bg-blue-600"></div>

            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-2 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content card */}
                <div
                  className={`ml-8 lg:ml-0 lg:w-5/12 ${
                    index % 2 === 0 ? "lg:mr-8" : "lg:ml-8"
                  }`}
                >
                  <div className="bg-white border border-gray-200 rounded-xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center gap-3 text-blue-600 mb-4">
                      <FaGraduationCap className="text-xl lg:text-2xl" />
                      <span className="font-bold text-base lg:text-lg">
                        {edu.degree}
                      </span>
                    </div>

                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                      {edu.institution}
                    </h3>

                    <div className="flex flex-wrap gap-4 text-gray-600 mb-6">
                      <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-blue-600" />
                        <span className="text-base lg:text-lg">
                          {edu.location}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Learning Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-10 text-white">
            <h3 className="text-3xl font-bold mb-6">
              Continuous Learning Mindset
            </h3>
            <p className="text-xl max-w-4xl mx-auto leading-relaxed">
              Technology evolves rapidly, and I believe in staying current with
              the latest trends, tools, and best practices. My education
              provides the foundation, but continuous learning through hands-on
              projects and industry certifications keeps me at the cutting edge.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
