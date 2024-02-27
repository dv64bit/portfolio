import React from "react";

const Button = () => {
  return (
    <div className="flex items-center justify-center px-2 py-1 my-4">
      <div className="bg-stone-200 px-7 py-4 uppercase rounded-full flex items-center gap-7">
        <h1 className="text-stone-900 text-base tracking-wide">
          {" "}
          View all Projects
        </h1>

        <div className="w-[10px] h-[10px] rounded-full bg-stone-900"></div>
      </div>
    </div>
  );
};

export default Button;
