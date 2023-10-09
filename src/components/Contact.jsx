import React from "react";
import Email from "../assets/color_icon/email.png";
import Linkedin from "../assets/color_icon/linkedin.png";

export default function Contact() {
  return (
    <div
      className="max-w-6xl lg:mx-auto pt-5 rounded-xl bg-gray-200 mx-4"
      id="Contact"
    >
      <h1 className="font-bold text-transparent text-3xl py-6 border-b-4 border-white text-center italic bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">
        CONTACTS
      </h1>

      <div className="max-w-5xl mx-auto mb-10 bg-gray-200 rounded-b-xl p-4">
        <ul className=" md:grid grid-cols-2 gap-6 rounded-xl">
          <a href="mailto:aashishgulshan@gmail.com" target={"_blank"}>
            <li className="bg-white items-center m-8 p-5 shadow-lg shadow-primary rounded-xl h-[300px] hover:scale-90 duration-[500ms] ">
              <img
                className=" mx-auto mt-16 hover:scale-125 duration-[500ms]"
                src={Email}
                alt="Email_icon"
                width={70}
              />
              <p className=" text-center text-black"> Send Email</p>
            </li>
          </a>
          <a
            href="https://www.linkedin.com/in/aashishgulshan/"
            target={"_blank"}
          >
            <li className="bg-white items-center m-8 p-5 shadow-lg shadow-primary rounded-xl h-[300px] hover:scale-90 duration-[500ms]">
              <img
                className=" mx-auto mt-16 hover:scale-110 duration-[500ms]"
                src={Linkedin}
                alt="Email_icon"
                width={70}
              />
              <p className=" text-center text-black">Let's Connect on Linked In</p>
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
}
