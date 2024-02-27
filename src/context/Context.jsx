import { createContext, useState } from "react";

export const ProjectContext = createContext();

const Context = (props) => {
  const [projects, setProjects] = useState([
    {
      _id: 1,
      projectName: "StudentFlow",
      tags: ["NextJS", "reactjs"],
      imgUrl:
        "https://images.unsplash.com/photo-1613053341085-db794820ce43?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      _id: 2,
      projectName: "YANA",
      tags: ["NextJS", "Html"],
      imgUrl:
        "https://images.unsplash.com/photo-1498757581981-8ddb3c0b9b07?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG9sZCUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      _id: 3,
      projectName: "SocialClones",
      tags: ["Mongodb", "Expressjs", "nodejs"],
      imgUrl:
        "https://images.unsplash.com/photo-1554177255-61502b352de3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGluc3RhZ3JhbXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      _id: 4,
      projectName: "whatfilm",
      tags: ["NextJS", "Html"],
      imgUrl:
        "https://images.unsplash.com/photo-1512070750041-b9479c107194?q=80&w=2010&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ]);

  // console.log(props);
  return (
    <ProjectContext.Provider value={{ projects, setProjects }}>
      {props.children}
    </ProjectContext.Provider>
  );
};

export default Context;
