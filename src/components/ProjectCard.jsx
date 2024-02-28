import { useContext } from "react";
import { ProjectContext } from "../context/Context";
import { motion, useAnimation } from "framer-motion";

const ProjectCard = () => {
  const { projects } = useContext(ProjectContext);
  const animationControls = projects.map(() => useAnimation());

  const handleHover = (index) => {
    animationControls[index].start({ y: "0" });
  };

  const handleHoverEnd = (index) => {
    animationControls[index].start({ y: "100%" });
  };

  return (
    <>
      {projects.map((project, index) => (
        <div
          key={index}
          className="w-1/2 p-2 relative flex flex-col items-start"
        >
          <h1 className="flex gap-3 uppercase items-center py-5 text-base font-Neue_Montreal">
            <div className="w-3 h-3 rounded-full bg-white"></div>
            {project.projectName}
          </h1>
          <motion.div
            initial={{ y: "100%" }}
            animate={animationControls[index]}
            className="absolute uppercase translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none text-8xl tracking-tighter font-Founders_Grotesk_X_light"
            onMouseEnter={() => handleHover(index)}
            onMouseLeave={() => handleHoverEnd(index)}
          >
            {project.projectName.split("").map((item, i) => (
              <motion.span
                key={i}
                transition={{ ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
                className="inline-block"
              >
                {item}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            onHoverStart={() => handleHover(index)}
            onHoverEnd={() => handleHoverEnd(index)}
            className="card w-full h-[75vh] tracking-tighter rounded-md bg-red-50 overflow-hidden font-['Founders_Grotesk_X']"
          >
            <img
              src={project.imgUrl}
              alt="project1"
              className="w-full h-full object-cover bg-stone-800 hover:opacity-75 cursor-pointer"
            />
          </motion.div>
          <div className="tags w-fit flex gap-4 my-5">
            {project.tags.map((tag, i) => (
              <h1
                key={i}
                className="px-3 py-1 uppercase border rounded-full text-sm tracking-widest"
              >
                {tag}
              </h1>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectCard;
