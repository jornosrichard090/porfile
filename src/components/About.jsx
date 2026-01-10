import { motion } from "framer-motion";
import { FaCode, FaLightbulb, FaCoffee } from "react-icons/fa";

export default function About() {
  const features = [
    {
      icon: <FaCode className="w-6 h-6" />,
      title: "Full Stack Software Engineer",
      description:
        "Building scalable and frontend-heavy web applications using modern JavaScript technologies at Zehntech."
    },
    {
      icon: <FaLightbulb className="w-6 h-6" />,
      title: "Problem Solver",
      description:
        "Passionate about turning complex engineering challenges into clean, maintainable solutions."
    },
    {
      icon: <FaCoffee className="w-6 h-6" />,
      title: "Collaborative Team Player",
      description:
        "Always eager to learn, collaborate with cross-functional teams, and share technical knowledge."
    }
  ];

  return (
    <section className="min-h-screen bg-gray-900 py-24" id="About">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* SECTION HEADING */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-4">
            About Aashish Gulshan
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto mb-8 rounded-full"></div>
        </motion.header>

        {/* MAIN ABOUT CONTENT */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 max-w-3xl mx-auto text-center"
        >
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            Hi, I’m <strong>Aashish Gulshan</strong>, a Full Stack Software Engineer based in
            Nalanda, India, with over 2 years of experience building modern web
            applications using React, Node.js, and TypeScript.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed">
            Aashish Gulshan currently works at Zehntech, where he focuses on
            creating scalable, frontend-driven solutions and integrating APIs
            for real-world production applications.
          </p>
        </motion.article>

        {/* FEATURE CARDS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {features.map((feature, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              viewport={{ once: true }}
              className="relative p-6 bg-gray-800 rounded-xl"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                  {feature.icon}
                </div>
              </div>

              <h3 className="mt-8 text-xl font-semibold text-white text-center mb-2">
                {feature.title}
              </h3>

              <p className="text-gray-300 text-center">
                {feature.description}
              </p>
            </motion.article>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="https://www.linkedin.com/in/aashishgulshan/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:shadow-lg hover:shadow-purple-500/30 transition duration-300"
          >
            Connect with Aashish Gulshan
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>

      </div>
    </section>
  );
}