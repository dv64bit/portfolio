const About = () => {
  return (
    <>
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="-0.1"
        className="w-full h-fit py-28 bg-[#cdea68] rounded-t-3xl text-black"
      >
        <h1 className="px-14 w-[95%] tracking-tight text-[4vw] font-NeueMontreal leading-[4.5vw] pb-16">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et saepe, vel
          culpa natus suscipit esse, itaque totam officiis, perferendis eum
        </h1>
        <div className="border-t-[1px] border-b-[1px] font-NeueMontreal font-medium text-lg border-black border-opacity-50 flex gap-7 px-14 pt-4 pb-32">
          <div className="w-[45%]">What you can expect:</div>
          <div className="w-[30%] px-2 flex flex-col gap-6">
            <div className="w-[90%]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Similique, recusandae? Voluptates tenetur fugiat voluptatum amet
              ipsa optio, dolores expedita dolore nesciunt, consectetur tempora,
              beatae iusto.
            </div>
            <div className="w-[90%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
              animi.
            </div>
          </div>
          <div className="w-[25%] flex flex-col gap-4 justify-end px-[8vw] text-left">
            <div>Socials:</div>
            <div>
              <ul className="flex flex-col ">
                <li>
                  <a
                    className="underline"
                    target="_blank"
                    href="https://www.linkedin.com/in/dv64bit/"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    className="underline"
                    target="_blank"
                    href="https://github.com/dv64bit"
                  >
                    Github
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    className="underline"
                    target="_blank"
                    href="https://www.instagram.com/dv64bit/"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="approach h-[65vh] flex gap-3 px-14 pt-4 w-full pb-8">
          <div
            id="About me"
            className="w-[50%] flex flex-col gap-4 font-NeueMontreal items-start justify-start"
          >
            <h1 className="text-[4vw]">About Me:</h1>
            <a href="https://drive.google.com/file/d/1854NWg9uAUr_brKJlDDBvfFvRsKn71U7/view?usp=sharing" className=" flex gap-8 items-center justify-between uppercase bg-gray-900 text-white text-base py-5 px-6 rounded-full">
              Read More
              <div className="w-2 h-2 rounded-full bg-white  hover:scale-[5] duration-200 transform-gpu"></div>
            </a>
          </div>
          <div className="w-[50%] h-[70vh] rounded-lg bg-red-700 overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://i.postimg.cc/QCGsCMZB/PXL-20231001-104811005-PORTRAIT.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
