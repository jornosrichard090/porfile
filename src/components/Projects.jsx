import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCalendar } from "react-icons/fa";
import PropTypes from "prop-types";
import SEO from './SEO';
import { seoData } from '../config/seo';

const ProjectCard = ({ image, title, description, githubLink, liveLink, date, tags, featured }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className={`group relative isolate ${featured ? 'md:col-span-2' : ''}`}
  >
    <div className="h-full overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-sm ring-1 ring-gray-700/50 hover:ring-purple-500/30 transition-all duration-300">
      {/* Image Container */}
      <div className="relative">
        <div className="aspect-[16/9] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/60 to-gray-900/90 group-hover:via-gray-900/70 group-hover:to-gray-900/95 transition-colors duration-300"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative p-6 md:p-8">
        {/* Header */}
        <div className="flex flex-col gap-4 mb-8">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
              {title}
            </h3>
            {featured && (
              <span className="px-3 py-1 text-xs font-medium text-purple-400 border border-purple-400 rounded-full whitespace-nowrap bg-purple-400/10">
                Featured
              </span>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-medium text-purple-300 bg-purple-500/10 rounded-full border border-purple-500/20 hover:bg-purple-500/20 transition-colors duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <FaCalendar className="w-4 h-4 text-purple-400" />
            <span>{date}</span>
          </div>
          <ul className="space-y-3">
            {description.map((point, index) => (
              <li key={index} className="text-gray-300 text-sm leading-relaxed flex items-start gap-3 group/item">
                <span className="text-purple-400 mt-1">•</span>
                <span className="group-hover/item:text-purple-200 transition-colors duration-300">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-4">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 bg-purple-600 hover:bg-purple-500 text-white rounded-lg text-sm font-medium transition-all duration-300 hover:translate-y-[-2px]"
          >
            <FaGithub className="w-4 h-4" />
            View Code
          </a>
          {liveLink && liveLink !== githubLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 bg-pink-600 hover:bg-pink-500 text-white rounded-lg text-sm font-medium transition-all duration-300 hover:translate-y-[-2px]"
            >
              <FaExternalLinkAlt className="w-4 h-4" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  </motion.div>
);

ProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
  githubLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  featured: PropTypes.bool
};

export default function Projects() {
  const projectsData = [
    {
      image: "https://images.unsplash.com/photo-1592589185394-1849d2e75d75?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      title: "Sampatti Satna – Real Estate & Retail Marketplace",
      description: [
        "Designed and developed a full-fledged web application for property listings using React.js, Firebase, and Tailwind CSS",
        "Migrated from an Android-only platform to a responsive, SEO-friendly web interface with enhanced UX",
        "Supports various property types including plots, houses, flats, shops, and rooms with dynamic filtering and search features",
        "Integrated Firebase Firestore and Authentication for real-time data handling and user access control"
      ],
      githubLink: "https://github.com/aashishgulshan/sampatti-satna", 
      liveLink: "https://sampatti-satna.web.app/",
      date: "February 2025",
      tags: ["React", "Firebase", "Tailwind CSS", "Firestore", "Authentication"],
      featured: false
    },
    {
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      title: "Modern E-Commerce Platform",
      description: [
        "Built a full-featured e-commerce platform using React.js, Redux for state management, and Tailwind CSS for responsive design",
        "Implemented secure payment integration, real-time inventory tracking, and user authentication with JWT",
        "Achieved 40% faster page load times through code splitting and lazy loading techniques",
        "Integrated RESTful APIs for product management and order processing with 99.9% uptime"
      ],
      githubLink: "https://github.com/aashishgulshan/e-commerce-website",
      liveLink: "https://rashail.vercel.app",
      date: "March 2024",
      tags: ["React", "Redux", "Tailwind CSS", "RESTful API", "JWT", "Vercel"],
      featured: false
    },
    {
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      title: "Real-time News Aggregator",
      description: [
        "Developed a dynamic news platform that aggregates and displays real-time news from multiple sources",
        "Implemented auto-refresh functionality and category-based filtering for enhanced user experience",
        "Optimized performance with React Query for efficient data caching and state management",
        "Achieved 95% Lighthouse performance score through image optimization and lazy loading"
      ],
      githubLink: "https://github.com/aashishgulshan/NewsVia-API",
      liveLink: "https://news-via-api.vercel.app/",
      date: "February 2024",
      tags: ["React", "React Query", "News API", "Performance Optimization", "Vercel"],
      featured: false
    },
    {
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      title: "Personal Portfolio Website",
      description: [
        "Designed and developed a modern portfolio website using React.js and Tailwind CSS",
        "Implemented smooth animations and transitions using Framer Motion for enhanced UX",
        "Achieved 100% responsive design across all devices with mobile-first approach",
        "Optimized for SEO with meta tags, semantic HTML, and structured data"
      ],
      githubLink: "https://github.com/aashishgulshan/portfolio",
      liveLink: "https://aashish-gulshan.netlify.app/",
      date: "March 2024",
      tags: ["React", "Tailwind CSS", "Framer Motion", "SEO", "Netlify"],
      featured: false
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      title: "Secure Electronic Voting System",
      description: [
        "Engineered a secure electronic voting system using Python and MySQL with role-based access control",
        "Implemented robust voter authentication and data encryption for maximum security",
        "Developed an intuitive admin dashboard for real-time election monitoring and result generation",
        "Successfully tested with 10,000+ simulated voters with zero security vulnerabilities"
      ],
      githubLink: "https://github.com/aashishgulshan/EVM_Project_Python",
      liveLink: "https://github.com/aashishgulshan/EVM_Project_Python",
      date: "December 2023",
      tags: ["Python", "MySQL", "Security", "Authentication", "Desktop App"],
      featured: false
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      title: "Advanced Banking Management System",
      description: [
        "Developed a comprehensive banking system in C++ with support for multiple account types",
        "Implemented secure transaction processing and account management features",
        "Created an efficient file-based database system for persistent data storage",
        "Integrated detailed transaction history and automated interest calculation"
      ],
      githubLink: "https://github.com/aashishgulshan/C-With-class-Programming/blob/main/SBI.CPP",
      liveLink: "https://github.com/aashishgulshan/C-With-class-Programming/blob/main/SBI.CPP",
      date: "November 2023",
      tags: ["C++", "File Handling", "OOP", "Data Structures", "Console App"],
      featured: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 py-24" id="Projects">
      <SEO 
        title={seoData.projects.title}
        description={seoData.projects.description}
        name="@aashishgulshan"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-4">
            Featured Projects & Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A curated collection of my professional work and personal projects, showcasing expertise in full-stack development, system design, and modern web technologies.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-10"
        >
          {projectsData.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
