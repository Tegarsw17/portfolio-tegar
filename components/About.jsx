import Image from 'next/image';
import Link from 'next/link';
import { aboutImg } from '../public/about.jpg';
import { profilePicture } from '../public/profile.png';
import { pict } from '../public/pict.jpg';

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-6 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">#I'm A Developer</p>
          <p className="py-2 text-gray-600">
            Hello I'm Fullstack developer. I loved learning about technologies
            and because in this field always change. stack i use is{' '}
            <span className="font-bold">javascript, typescript, Python</span>.
          </p>
          <p className="py-2 text-gray-600">
            I still learning about technologies, for now i ust have personal
            project experience. hope i have chance for learning in real world.
          </p>
          <Link href="#project">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              See my last Project
            </p>
          </Link>
        </div>
        <div className="w-[250px] h-[350px] bg-blue-100 m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          {/* <img className="rounded-xl" src={pict}></img> */}
          {/* <Image className="rounded-xl" src={profilePicture} alt="/" /> */}
          <Image
            src="https://res.cloudinary.com/daw1nuqgv/image/upload/v1744684174/1629861345480_uqlz28.jpg"
            alt="/"
            width={190}
            height={290}
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
