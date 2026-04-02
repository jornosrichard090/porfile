import Photo from "../assets/image/Photo.png";
import { FaGithub, FaLinkedin, FaHackerrank, FaTwitter } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

export default function Homepage() {
  const socialLinks = [
    { icon: <FaGithub size={24} />, url: "https://github.com/jornosrichard", label: "GitHub" },
    { icon: <FaLinkedin size={24} />, url: "https://www.linkedin.com/in/jornosrichard/", label: "LinkedIn" },
    { icon: <FaHackerrank size={24} />, url: "https://www.hackerrank.com/jornosrichard", label: "HackerRank" },
    { icon: <FaTwitter size={24} />, url: "https://twitter.com/jornosrichard", label: "Twitter" }
  ];

  const floatingAnimation = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const floatingAnimation2 = {
    animate: {
      y: [0, 20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div id="Homepage" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-28">
      {/* Animated Background Orbs */}
      <motion.div
        variants={floatingAnimation}
        animate="animate"
        className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"
      />
      <motion.div
        variants={floatingAnimation2}
        animate="animate"
        className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"
      />
      <motion.div
        variants={floatingAnimation}
        animate="animate"
        className="absolute top-40 right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
        style={{ animationDelay: "1s" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 space-y-6 text-center lg:text-left"
          >
            <h2 className="text-xl text-purple-400 font-medium">HI THERE! I&apos;M</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              JORNOS RICHARD
            </h1>
            <div className="text-xl md:text-2xl text-gray-300">
              <span className="font-medium text-purple-400">
                A <strong className="text-violet-500">Software Engineer </strong>
                Crafting Custom Solutions for the Digital Era !
                <br />
                <strong className="text-fuchsia-500">
                  &nbsp; Tech Instructor &nbsp;
                </strong>
                Passionate About Emerging Technologies.
              </span>
            </div>
            <p className="text-lg text-gray-300 max-w-2xl">
              Crafting innovative solutions for the digital era and passionate about emerging technologies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://docs.google.com/document/d/1LLQAVvflQau3aLf_2A17OSCFtcBzQlJ5/edit?usp=sharing&ouid=107829980604156000839&rtpof=true&sd=true"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:shadow-lg hover:shadow-purple-500/30 transition duration-300"
              >
                Download Resume
              </a>
              <Link
                to="Contact" // Match the "to" value with the Contact section's ID
                spy={true}
                smooth={true}
                duration={500}
                className="px-8 py-3 rounded-full border-2 border-purple-400 text-purple-400 font-medium hover:bg-purple-400/10 transition duration-300 cursor-pointer"
              >
                Contact Me
              </Link>
            </div>
            
            <div className="flex gap-6 justify-center lg:justify-start">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <motion.div
              variants={floatingAnimation}
              animate="animate"
              className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-2xl opacity-30"></div>
              <img
                src={Photo}
                alt="Jornos Richard"
                className="relative w-full h-full object-cover rounded-full shadow-2xl border-4 border-purple-400/30"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}