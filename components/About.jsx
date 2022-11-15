import Image from "next/image";
import { aboutImg } from "../public/about.jpg";

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">#I'm A Developer</p>
          <p className="py-2 text-gray-600">
            Dolor laborum et do nostrud velit dolor id fugiat id minim
            reprehenderit.Et laboris nostrud incididunt nisi fugiat magna aliqua
            id id eiusmod duis in.Quis elit quis laboris nostrud elit.Sit
            voluptate consequat ipsum anim commodo in dolore eiusmod nulla duis.
          </p>
          <p className="py-2 text-gray-600">
            Dolor laborum et do nostrud velit dolor id fugiat id minim
            reprehenderit.Et laboris nostrud incididunt nisi fugiat magna aliqua
            id id eiusmod duis in.Quis elit quis laboris nostrud elit.Sit
            voluptate consequat ipsum anim commodo in dolore eiusmod nulla duis.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            See my last Project
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img
            className="rounded-xl"
            src="https://source.unsplash.com/mGFflvKuekQ"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default About;
