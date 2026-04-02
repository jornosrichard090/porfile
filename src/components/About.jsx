import { motion } from "framer-motion";
import { FaCode, FaLightbulb, FaCoffee } from "react-icons/fa";

export default function About() {
  const features = [
    {
      icon: <FaCode className="w-6 h-6" />,
      title: "Full-Stack Web & Mobile Architect",
      description:
        "Designing and developing scalable enterprise applications spanning full-stack web platforms, mobile solutions, and cloud infrastructure with modern frameworks and technologies."
    },
    {
      icon: <FaLightbulb className="w-6 h-6" />,
      title: "AI & Automation Specialist",
      description:
        "Leveraging machine learning, artificial intelligence, and automation technologies to solve complex business challenges and drive operational efficiency."
    },
    {
      icon: <FaCoffee className="w-6 h-6" />,
      title: "Strategic Technology Leader",
      description:
        "Delivering high-impact solutions through collaborative innovation, technical expertise, and a commitment to excellence in enterprise software development."
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
            About Jornos Richard
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
            Hello, I'm <strong>Jornos Richard</strong>, a Full-Stack Web, Mobile & AI Development specialist based in Melbourne, Australia. With over 6 years of professional experience, I architect scalable solutions across web, mobile, and AI-driven automation technologies.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed">
            I specialize in designing and implementing robust, enterprise-grade applications leveraging modern frameworks such as React, Node.js, TypeScript, and machine learning technologies. My expertise extends to AI automation, cloud infrastructure, and delivering high-performance solutions that drive measurable business impact for organizations worldwide.
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



      </div>
    </section>
  );
}