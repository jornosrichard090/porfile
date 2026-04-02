import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaCalendar } from "react-icons/fa";
import PropTypes from "prop-types";
import SEO from './SEO';
import { seoData } from '../config/seo';

const ProjectCard = ({ image, title, description, liveLink, date, tags, featured }) => (
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
          {liveLink && (
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
  liveLink: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  featured: PropTypes.bool
};

export default function Projects() {
  const projectsData = [
    {
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      title: "Panorama Education",
      description: [
        "Leading AI-powered platform for student insight and action trusted by 2000+ districts",
        "Supports 15 million students with data-driven decision making and student success tools",
        "Provides comprehensive solutions including Panorama Solara, Student Success, Surveys, and Pathways",
        "Achieved 8% reduction in student absences with proven impact on educational outcomes"
      ],
      liveLink: "https://www.panoramaed.com/",
      date: "2025",
      tags: ["AI", "EdTech", "Data Analytics", "Platform"],
      featured: false
    },
    {
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      title: "Mutual Vision",
      description: [
        "Modern cloud-native core banking platform built for mutuals by technology experts",
        "Provides MV Hub, MV Engage, MV Shield, and MV Originate solutions for financial institutions",
        "Enables Building Societies and mutuals to compete, thrive, and stay true to their mission",
        "Trusted by growing network of institutions with secure, scalable infrastructure"
      ],
      liveLink: "https://mutualvision.co.uk/",
      date: "2025",
      tags: ["Banking", "FinTech", "Cloud", "B2B"],
      featured: false
    },
    {
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      title: "AssistRx",
      description: [
        "Healthcare platform combining technology and talent to improve patient access and adherence",
        "Serves 100M+ annual transactions supporting patients, healthcare providers, and life sciences",
        "Provides electronic prior authorization with decisions returned in minutes",
        "Improves speed to therapy with comprehensive patient coverage data"
      ],
      liveLink: "https://www.assistrx.com/",
      date: "2025",
      tags: ["Healthcare", "HealthTech", "Patient Support", "B2B"],
      featured: false
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      title: "Inspiren",
      description: [
        "Innovative platform designed to inspire and empower organizations worldwide",
        "Delivers cutting-edge solutions for modern business challenges and digital transformation",
        "Focuses on creating transformative experiences for users and clients",
        "Combines technology expertise with strategic insights for sustainable growth"
      ],
      liveLink: "https://www.inspiren.com/",
      date: "2025",
      tags: ["Innovation", "SaaS", "Enterprise", "Platform"],
      featured: false
    },
    {
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      title: "Jersey Watch",
      description: [
        "All-in-one sports management platform trusted by 2,800+ sports organizations worldwide",
        "Provides website builder, online registration, payment collection, and scheduling features",
        "Enables communication tools for teams, divisions, and entire organizations",
        "Includes background checks, donation collection, and comprehensive youth sports support"
      ],
      liveLink: "https://www.jerseywatch.com/",
      date: "2025",
      tags: ["Sports Tech", "SaaS", "Management Platform", "B2B"],
      featured: false
    },
    {
      image: "https://images.unsplash.com/photo-1592589185394-1849d2e75d75?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      title: "Sampatti Satna – Real Estate & Retail Marketplace",
      description: [
        "Full-fledged web application for property listings using React.js, Firebase, and Tailwind CSS",
        "Migrated from Android-only platform to responsive, SEO-friendly web interface",
        "Supports plots, houses, flats, shops, and rooms with dynamic filtering and search",
        "Integrated Firebase Firestore and Authentication for real-time data handling"
      ],
      liveLink: "https://sampatti-satna.web.app/",
      date: "February 2025",
      tags: ["React", "Firebase", "Tailwind CSS", "Firestore"],
      featured: false
    },
    {
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      title: "Modern E-Commerce Platform",
      description: [
        "Full-featured e-commerce platform using React.js, Redux, and Tailwind CSS",
        "Implemented secure payment integration, real-time inventory tracking, and JWT authentication",
        "Achieved 40% faster page load times through code splitting and lazy loading",
        "Integrated RESTful APIs with 99.9% uptime for product management and orders"
      ],
      liveLink: "https://rashail.vercel.app",
      date: "March 2024",
      tags: ["React", "Redux", "Tailwind", "API", "Vercel"],
      featured: false
    },
    {
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      title: "Real-time News Aggregator",
      description: [
        "Dynamic news platform that aggregates and displays real-time news from multiple sources",
        "Implemented auto-refresh functionality and category-based filtering for UX",
        "Optimized performance with React Query for efficient data caching and state management",
        "Achieved 95% Lighthouse performance score through optimization and lazy loading"
      ],
      liveLink: "https://news-via-api.vercel.app/",
      date: "February 2024",
      tags: ["React", "React Query", "News API", "Performance", "Vercel"],
      featured: false
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      title: "Secure Electronic Voting System",
      description: [
        "Secure electronic voting system using Python and MySQL with role-based access control",
        "Implemented robust voter authentication and data encryption for maximum security",
        "Developed intuitive admin dashboard for real-time election monitoring and results",
        "Successfully tested with 10,000+ simulated voters with zero vulnerabilities"
      ],
      liveLink: "https://github.com/aashishgulshan/EVM_Project_Python",
      date: "December 2023",
      tags: ["Python", "MySQL", "Security", "Authentication"],
      featured: false
    },
    {
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      title: "Advanced Banking Management System",
      description: [
        "Comprehensive banking system in C++ with support for multiple account types",
        "Implemented secure transaction processing and account management features",
        "Created efficient file-based database system for persistent data storage",
        "Integrated transaction history and automated interest calculation"
      ],
      liveLink: "https://github.com/aashishgulshan/C-With-class-Programming/blob/main/SBI.CPP",
      date: "November 2023",
      tags: ["C++", "File Handling", "OOP", "Data Structures"],
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
    <div className="min-h-screen bg-gray-900 py-16 md:py-24" id="Projects">
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
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-4">
            Projects & Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Featured client projects and personal work showcasing expertise in full-stack development, innovative platforms, and modern web technologies.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 xl:gap-10"
        >
          {projectsData.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
