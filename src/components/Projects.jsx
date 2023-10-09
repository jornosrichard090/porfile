import ecom from "../assets/image/Project1.jpg";
import EvmProject from "../assets/image/Evm_Project.png";
import CppProject from "../assets/image/Cpp_Project.png";
import Portfolio from "../assets/image/portfolio.png";
import NewsVia from "../assets/image/newsvia.png";

const ProjectCard = ({ image, title, description, githubLink, liveLink }) => (
  <div className="container max-w-5xl bg-gray-50 mx-auto grid grid-cols-1 md:grid-cols-3 mb-10 p-4 bg-gray-100 rounded-xl shadow-sm drop-shadow-lg duration-500">
    <div className="md:w-[80%] text-center">
      <img
        src={image}
        alt={title}
        className="space-x-2 bg-gradient-to-r from-pink-600 to-blue-600 hover:from-blue-600 hover:to-pink-600  drop-shadow-2xl h-[200px] rounded-lg shadow-fuchsia-400 inline"
      />
    </div>
    <div className="col-span-2 flex flex-col justify-center">
      <h1 className="text-fuchsia-500 font-mono font-bold text-xl m-2">
        {title}
      </h1>
      <p className="my-2 text-justify text-black">
        <ul className="list-disc mx-3">
          {description.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </p>
      <div className="text-white gap-2">
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <button className="lg:w-[25%] md:w-[35%] shadow-xl text-white px-3 py-2 mx-2 rounded-md bg-gradient-to-r from-pink-600 to-blue-600 hover:from-blue-600 hover:to-pink-600">
            Github REPO
          </button>
        </a>
        <a href={liveLink} target="_blank" rel="noopener noreferrer">
          <button className="px-6 py-2 rounded text-wite shadow-lg bg-gradient-to-r from-pink-600 to-blue-600 hover:from-blue-600 hover:to-pink-600 mb-4">
            LIVE
          </button>
        </a>
      </div>
    </div>
  </div>
);

export default function Projects() {
  const projectsData = [
    {
      image: ecom,
      title: "E-Commerce Website",
      description: [
        "Successfully designed and deployed a web application utilizing React.js, Tailwind CSS, Axios, and RESTful API.",
        "Handled API calls and responses from the server, and extracted JSON object data to view product details on a webpage.",
        "Ensured optimal user experience by hosting the website on Vercel, providing a seamless real-time experience to all users.",
      ],
      githubLink: "https://github.com/aashishgulshan/e-commerce-website",
      liveLink: "https://rashail.vercel.app",
    },
    {
      image: NewsVia,
      title: "NewsVia-API",
      description: [
        "Proficiently designed and deployed the News Via-API web application utilizing React.js, Tailwind CSS, Axios, and API.",
        "Demonstrated expertise in creating a Single Page Application (SPA) that automatically updates at regular minute intervals.",
        "Implemented a user-friendly interface with multiple news categories, ensuring a visually appealing and responsive designacross all devices.",
      ],
      githubLink: "https://github.com/aashishgulshan/NewsVia-API",
      liveLink: "https://news-via-api.vercel.app/",
    },
    {
      image: Portfolio,
      title: "Portfolio Website",
      description: [
        "Developed this project using HTML, CSS, ReactJS, and Tailwind-CSS.",
        "Single page responsive application and compatible with every device's screen.",
      ],
      githubLink: "https://github.com/aashishgulshan/portfolio",
      liveLink: "https://aashish-gulshan.netlify.app/",
    },
    {
      image: EvmProject,
      title: "Electronic Voting Machine",
      description: [
        "Developed a virtual Electronic Voting Machine desktop application using Python and MySQL.",
        "We designed multiple modules for user convenience as well as for admin.",
        "Generate a unique ID for every voter at the time of registration and store voter details in the Voter list.",
        "Worked smoothly on every activity of the election similar to the voting machine at the time of voting.",
      ],
      githubLink: "https://github.com/aashishgulshan/EVM_Project_Python",
      liveLink: "https://github.com/aashishgulshan/EVM_Project_Python",
    },
    {
      image: CppProject,
      title: "Bank Management System",
      description: [
        "Developed this project in C++ programming language and used file handling for the database.",
        "Capable to opening different types of accounts as per the user demand like Saving, Current, FD, etc.",
        "It has the functionality to credit, debit, passbook, and many more features for customers.",
      ],
      githubLink:
        "https://github.com/aashishgulshan/C-With-class-Programming/blob/main/SBI.CPP",
      liveLink:
        "https://github.com/aashishgulshan/C-With-class-Programming/blob/main/SBI.CPP",
    },
  ];

  return (
    <div
      className="max-w-6xl lg:mx-auto my-20 pt-5 rounded-xl bg-gray-200 mx-4"
      id="Projects"
    >
      <h1 className="font-bold text-transparent text-3xl my-6 text-center italic bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">
        WORK EXPERIENCE AND PROJECTS
      </h1>
      <div className="container mx-auto  bg-gray-200 rounded-b-xl border-t-4 border-white p-10">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
