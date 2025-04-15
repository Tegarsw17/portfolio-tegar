import Image from 'next/image';
import React from 'react';
import manageImg from '../public/projects/lab_manage.jpeg';
import schoolManageImg from '../public/projects/schoolManage.png';
import rentCarImg from '../public/projects/binarrentcarre.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const school = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={schoolManageImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">School Management App</h2>
          <h3>NextJs / Supabase / Tailwind</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            A role-based school management backend designed to support multiple
            user roles: Admin, Teacher, Student, and Parent. Built using Next.js
            API routes, Supabase, and Prisma ORM, it powers dashboards,
            scheduling, and data management functionalities for a school
            platform.
            <br></br>
            <Link
              href="mailto:tegarsatriyawiguna99@gmail.com"
              className="text-[#5651e5]"
            >
              Contact me for the credential{' '}
              <span className="text-black">tegarsatriyawiguna99@gmail.com</span>
            </Link>
          </p>
          <Link
            href="https://github.com/Tegarsw17/hlt-binarcarrental-platinum"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </Link>
          <Link href="https://hlt-binarcarrental-platinum.vercel.app">
            <button className="px-8 py-2 mt-4">Demo</button>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> NextJs
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Supabase
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Supabase
              </p>
            </div>
          </div>
        </div>
        <Link href="/#project">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default school;
