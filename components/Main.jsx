import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Let's build something together
          </p>
          <h1 className="py-4 text-gray-700">
            Hello, My Name <span className="text-[#5651e5]">Tegar</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Back-End Web developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            Dolor laborum et do nostrud velit dolor id fugiat id minim
            reprehenderit.Et laboris nostrud incididunt nisi fugiat magna aliqua
            id id eiusmod duis in.Quis elit quis laboris nostrud elit.Sit
            voluptate consequat ipsum anim commodo in dolore eiusmod nulla duis.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <Link href="https://www.linkedin.com/in/tegarsatriya03/">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </Link>
            <Link href="https://github.com/Tegarsw17">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </Link>
            <Link href="mailto:tegarsatriyawiguna99@gmail.com">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
            <Link href="https://wa.me/6285156007037">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaWhatsapp />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
