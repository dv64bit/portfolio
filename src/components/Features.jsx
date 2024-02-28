import ProjectCard from "./ProjectCard";

const Features = () => {
  const tags = ["NextJS", "Typescript", "Reactjs"];
  return (
    <div id="Projects" className="w-full py-20">
      <div className="w-full px-14 border-b-[1px] border-zinc-700 pb-16">
        <h1 className="text-6xl font-Neue_Montreal tracking-tight">
          Featured projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full mt-10 flex flex-wrap relative">
          <ProjectCard />
        </div>
      </div>
    </div>
  );
};

export default Features;
