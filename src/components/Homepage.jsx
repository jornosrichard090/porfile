import Photo from "../assets/image/Photo.jpg";
import { FaGithub, FaLinkedin, FaHackerrank, FaTwitter } from "react-icons/fa";

export default function Homepage() {
  const socialLinks = [
    { icon: <FaGithub size={24} />, url: "https://github.com/aashishgulshan", label: "GitHub" },
    { icon: <FaLinkedin size={24} />, url: "https://www.linkedin.com/in/aashishgulshan/", label: "LinkedIn" },
    { icon: <FaHackerrank size={24} />, url: "https://www.hackerrank.com/aashishgulshan", label: "HackerRank" },
    { icon: <FaTwitter size={24} />, url: "https://twitter.com/aashishgulshan", label: "Twitter" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-28">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div
            className="lg:w-1/2 space-y-6 text-center lg:text-left"
          >
            <h2 className="text-xl text-purple-400 font-medium">HI THERE! I&apos;M</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              AASHISH GULSHAN
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
                href="https://docs.google.com/document/d/1O4Szf_0eW6-6AoYCuP5zNGgNQ__UjLTScz5cDzm-BS0/export?format=pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:shadow-lg hover:shadow-purple-500/30 transition duration-300"
              >
                Download Resume
              </a>
              <a
                href="#contact"
                className="px-8 py-3 rounded-full border-2 border-purple-400 text-purple-400 font-medium hover:bg-purple-400/10 transition duration-300"
              >
                Contact Me
              </a>
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
          </div>

          <div
            className="lg:w-1/2"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-2xl opacity-30"></div>
              <img
                src={Photo}
                alt="Aashish Gulshan"
                className="relative w-full h-full object-cover rounded-full shadow-2xl border-4 border-purple-400/30"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
