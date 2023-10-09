import { React, useState } from "react";

export default function Test() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div class="bg-gradient-to-r from-pink-600 to-blue-600 fixed w-full z-50">
      <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
        <header class="flex items-center justify-between py-4 md:py-6">
          <a
            href="/"
            class="inline-flex items-center gap-2.5 text-3xl font-bold text-white md:text-4xl"
            aria-label="logo"
          >
            <span className=" hidden lg:flex">Aashish Gulshan</span>
            <span className="lg:hidden">AG</span>
          </a>

          <nav class="hidden gap-10 lg:flex">
            <a
              href="#Homepage"
              class="text-lg font-semibold text-white transition duration-300 hover:text-gray-100 hover:scale-125 active:text-indigo-700"
            >
              Home
            </a>
            <a
              href="#About"
              class="text-lg font-semibold text-white transition duration-300 hover:text-gray-100 hover:scale-125 active:text-indigo-700"
            >
              About
            </a>
            <a
              href="#Skills"
              class="text-lg font-semibold text-white transition duration-300 hover:text-gray-100 hover:scale-125 active:text-indigo-700"
            >
              Skills
            </a>

            <a
              href="#Projects"
              class="text-lg font-semibold text-white transition duration-300 hover:text-gray-100 hover:scale-125 active:text-indigo-700"
            >
              Work
            </a>
            <a
              href="#Contact"
              class="text-lg font-semibold text-white transition duration-100 hover:text-gray-100 hover:scale-125 active:text-indigo-700"
            >
              Contact
            </a>
          </nav>

          <button
            onClick={toggleMenu}
            type="button"
            class="inline-flex items-center gap-2 rounded-lg shadow-lg px-2.5 py-2 text-sm font-semibold text-gray-100 ring-indigo-300 bg-gradient-to-r from-pink-600 to-blue-600 hover:from-blue-600 hover:to-pink-600 focus-visible:ring active:text-gray-700 md:text-base lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-100"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19 18H5V16H19V18ZM19 13H5V11H19V13ZM19 6H5V4H19V6Z"
                />
              ) : (
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                />
              )}
            </svg>
            <span className="animate-bounce">.</span>
          </button>
        </header>
        {isOpen && (
          <div className="block lg:hidden font-semibold text-center text-white">
            <a
              href="#About"
              className="block hover:text-gray-200 hover:underline underline-offset-4 animate-pulse mb-4"
            >
              About
            </a>
            <a
              href="#Contact"
              className="block hover:text-gray-200 hover:underline underline-offset-4 animate-pulse mb-6"
            >
              Contact Us
            </a>

            <a
              href="https://drive.google.com/file/d/10_KNoQ_B8k_-NeCwpAxmTNC8HYn97kXV/view?usp=sharing"
              target={"_blank"}
            >
              <button className="px-10 py-2 rounded-lg shadow-lg bg-gradient-to-r from-pink-600 to-blue-600 hover:from-blue-600 hover:to-pink-600 animate-bounce mb-4">
              
                Resume
              </button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
