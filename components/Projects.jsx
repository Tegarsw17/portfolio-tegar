import Image from "next/image";
import Link from "next/link";
import manageImg from "../public/projects/lab_manage.jpeg";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="project" className="w-full lg:h-screen">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Build</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Management Lab"
            backgroundImg={manageImg}
            projectUrl="/managelab"
          />
          <ProjectItem
            title="Management Lab"
            backgroundImg={manageImg}
            projectUrl="/managelab"
          />
          <ProjectItem
            title="Management Lab"
            backgroundImg={manageImg}
            projectUrl="/managelab"
          />
          <ProjectItem
            title="Management Lab"
            backgroundImg={manageImg}
            projectUrl="/managelab"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
