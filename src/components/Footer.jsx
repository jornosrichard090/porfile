import Facebook_icon from "../assets/icons/facebook.png";
import github_icon from "../assets/icons/github.png";
import linkedin_icon from "../assets/icons/linkedin.png";
import instagram_icon from "../assets/icons/instagram.png";

export default function Footer() {
  return (
    <div className='bg-gradient-to-r py-4 from-pink-600 to-blue-600 text-center text-white'>


      {/* <a href="mailto:aashishgulshan@gmail.com"> aashishgulshan@gmail.com</a> */}
      <div className='flex gap-2 justify-center items-center'>
        {/* <a href="https://www.linkedin.com/in/aashishgulshan/" target="_blank"> <img src={linkedin_icon} width={35} alt="" /></a> */}

        {/* <a href="https://github.com/aashishgulshan" target="_blank"><img src={github_icon} width={35} alt="" /></a> */}
      </div>
      <p>Crafted with ❤️ in India by Aashish Gulshan.
      </p>
      No copyright—feel free to copy! Ping me if you need any help

    </div>
  )
}
