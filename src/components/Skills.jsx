import React from 'react';
import cp from "../assets/color_icon/c.png";
import cpp from "../assets/color_icon/c++.png";
import html from "../assets/color_icon/html.png";
import css3 from "../assets/color_icon/css3.png";
import hackerrank from "../assets/color_icon/hackerrank.png";
import python from "../assets/color_icon/python.png";
import vs_code from "../assets/color_icon/vs_code.png";
import javascript from "../assets/color_icon/javascript.png";
import tailwind_css from "../assets/color_icon/tailwind-css.png";
import github from "../assets/color_icon/github.png";
import mysql from "../assets/color_icon/mysql.png";
import reactjs from "../assets/color_icon/react.png";
import nodejs from "../assets/color_icon/node-js.png";

export default function Skills() {
  const skillsData = [
    { icon: cp, title: " C " },
    { icon: cpp, title: "C++" },
    { icon: python, title: "Python" },
    { icon: hackerrank, title: "Hacker Rank" },
    { icon: html, title: "HTML" },
    { icon: css3, title: "CSS3" },
    { icon: javascript, title: "JavaScript" },
    { icon: tailwind_css, title: "Tailwind CSS" },
    { icon: mysql, title: "MySQL" },
    { icon: reactjs, title: "React JS" },
    { icon: nodejs, title: "Node JS" },
    { icon: github, title: "Github" },
    { icon: vs_code, title: "VS-Code" },
  ];

  return (
    <div className='max-w-6xl lg:mx-auto pt-5 rounded-xl bg-gray-200 mx-4' id='Skills'>
      <h1 className="font-bold text-transparent text-3xl my-6 text-center italic bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">SKILLS</h1>
           
      <div className='container mx-auto bg-gray-200 border-t-4 rounded-b-xl border-white p-10'>
        <ul className="max-w-5xl mx-auto grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6 lg:grid-cols-6 text-center items-center justify-center">
          {skillsData.map(skill => (
            <li key={skill.title} className='p-4 shadow-lg drop-shadow-2xl bg-gray-100 rounded-xl hover:scale-90 duration-500 '>
              <img src={skill.icon} alt={skill.title} width={60} className='m-auto' />
              <p className="mt-2 font-semibold text-black">{skill.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
