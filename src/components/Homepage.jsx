import Photo from "../assets/image/Photo.jpg";
import Facebook_icon from "../assets/color_icon/facebook.png";
import github_icon from "../assets/color_icon/github.png";
import linkedin_icon from "../assets/color_icon/linkedin.png";
import HackerRank_icon from "../assets/color_icon/hackerrank.png";
import Instagram_icon from "../assets/color_icon/instagram.png";

export default function Homepage() {
  return (
    <div className="pt-28">
      <div
        className="max-w-6xl lg:mx-auto mx-4 px-5 py-10 gap-5 md:grid grid-cols-3 shadow-lg bg-gray-200 rounded-xl"
        id="Homepage"
      >
        <div className="col-span-1 m-4 md:w-[70%] text-center rounded-3xl">
          <img
            src={Photo}
            alt=""
            className="border-4 border-fuchsia-500 inline w-full max-w-sm mx-auto md:w-[70%] sm:w-[40%] shadow-2xl p-1 shadow-fuchsia-300 rounded-tl-3xl rounded-br-3xl"
          />
        </div>

        <div className="col-span-2 flex flex-col sm:mx-auto text-center md:text-left text-black">
          <p className="ml-2">HI THERE! I'M</p>
          <h1 className="font-bold font-mono lg:text-4xl md:text-3xl sm:text-2xl text-xl m-2">
            AASHISH GULSHAN
          </h1>
          <h3 className="m-2 lg:text-xl md:text-lg text-base">
            A <strong className="text-violet-500">Jr. Software Engineer </strong>
            and a
            <strong className="text-fuchsia-500">
               &nbsp;Full-Stack Web Developer
            </strong>
            <br /> passionate about new technologies
          </h3>
          <div className="max-w-[400px] my-10 md:grid grid-cols-2 items-center justify-center mx-auto">
            <div className="col-span-1 md:w-[70%] text-center md:text-left">
              <a
                href="https://drive.google.com/file/d/10_KNoQ_B8k_-NeCwpAxmTNC8HYn97kXV/view?usp=sharing"
                target={"_blank"}
              >
                <button className="px-10 py-2 rounded text-wite shadow-lg text-white bg-gradient-to-r from-pink-600 to-blue-600 hover:from-blue-600 hover:to-pink-600 mb-4">
                  Resume
                </button>
              </a>
            </div>
            <div className="flex gap-2 justify-center mb-5 items-center">
              <a
                className="hover:scale-125 duration-[500ms]"
                href="https://github.com/aashishgulshan"
                target="_blank"
              >
                <img src={github_icon} width={50} alt="" />
              </a>
              <a
                className="hover:scale-125 duration-[500ms]"
                href="https://www.hackerrank.com/aashishgulshan"
                target="_blank"
              >
                <img src={HackerRank_icon} width={50} alt="" />
              </a>
              <a
                className="hover:scale-125 duration-[500ms]"
                href="https://www.facebook.com/aashishgulshan"
                target="_blank"
              >
                <img src={Facebook_icon} width={50} alt="" />
              </a>
              <a
                className="hover:scale-125 duration-[500ms]"
                href="https://www.instagram.com/aashish_gulshan/"
                target="_blank"
              >
                <img src={Instagram_icon} width={50} alt="" />
              </a>
              <a
                className="hover:scale-125 duration-[500ms]"
                href="https://www.linkedin.com/in/aashish-gulshan/"
                target="_blank"
              >
                <img src={linkedin_icon} width={50} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
