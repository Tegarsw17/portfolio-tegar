import Link from 'next/link';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import ReactTypingEffect from 'react-typing-effect';

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
          <h1 className="py-2 text-gray-700">
            <ReactTypingEffect
              text={['Back-End', 'Front-End', 'Full-Stack']}
              speed={200}
              eraseDelay={3000}
              // eraseSpeed={50}
              typingDelay={1000}
              cursorRenderer={(cursor) => <h1>{cursor}</h1>}
              displayTextRenderer={(text, i) => {
                return (
                  <h1 className="text-gray-500">
                    {/* {text.split("").map((char, i) => {
                    const key = `${i}`;
                    return <span>{char}</span>;
                  })} */}
                    {text}
                  </h1>
                );
              }}
            />
            Web developer
          </h1>

          {/* <h1 className="text-red-500 uppercase">Testing</h1> */}
          <p className="py-4 text-gray-600 max-w-[80%] m-auto">
            I'm Fullstack Web Developer focus on building your company online
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
