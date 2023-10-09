import React from "react";

export default function About() {
  return (
    <>
      <div
        className="max-w-6xl lg:mx-auto my-20 pt-5 rounded-xl bg-gray-200 mx-4"
        id="About"
      >
        <h1 className="font-bold text-transparent text-3xl my-6 text-center italic bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">
          ABOUT ME
        </h1>
        <div className="container mx-auto border-t-4 border-white p-10">
          <ul className="max-w-5xl mx-auto text-center items-center justify-center grid grid-cols-1 gap-6 bg-gray-100 rounded-xl shadow-sm drop-shadow-lg">
            <li className="items-center m-3 p-3 text-justify rounded-3xl lg:text-3xl md:text-2xl sm:text-xl text-black">
              Hi I am Aashish Gulshan, living in Nalanda, India. <br /> I am a
              MCA Student, currently working as Junior Software Engineer at
              "Zehntech". I ❤️ to write code, share ideas, and made bad jokes! 🚀{" "}
              <br />
              <br /> Have a look at my skills or just connect with me on
              LinkedIn. I am always excited to learn new things and technology,
              lets discuss over coffee.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
