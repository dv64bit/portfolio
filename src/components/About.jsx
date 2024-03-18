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
        <div className="border-t-[1px] border-b-[1px] font-NeueMontreal font-medium md:text-lg border-black border-opacity-50 flex flex-col justify-center md:flex-row md:gap-7 px-7 md:px-14 md:pt-4 md:pb-32">
          <div className="text-2xl md:w-[45%] mt-6">What you can expect:</div>
          <div className="md:w-[30%] md:px-2 mt-5 flex flex-col gap-6">
            <div className="md:w-[90%]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Similique, recusandae? Voluptates tenetur fugiat voluptatum amet
              ipsa optio, dolores expedita dolore nesciunt, consectetur tempora,
              beatae iusto.
            </div>
            <div className="md:w-[90%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
              animi.
            </div>
          </div>
          <div className="w-full md:w-[25%] my-6 md:my-0 flex flex-col gap-4 justify-start md:justify-end md:px-[8vw] text-left">
            <h1 className="text-2xl font-normal md:text-xl md:font-semibold">
              Socials
            </h1>
            <div>
              <ul className="flex md:flex-col gap-3">
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
        <div className="approach h-[65vh] flex flex-col md:flex-row gap-3 px-6 md:px-14 pt-4 w-full pb-8">
          <div
            id="About me"
            className="md:w-[50%] flex flex-col gap-4 font-NeueMontreal items-start justify-start"
          >
            <h1 className="text-[4vw]">About Me:</h1>
            <button className=" flex gap-8 items-center justify-between uppercase bg-gray-900 text-white text-base py-5 px-6 rounded-full">
              Read More
              <div className="w-2 h-2 rounded-full bg-white  hover:scale-[5] duration-200 transform-gpu"></div>
            </button>
          </div>
          <div className="w-full md:w-[50%] h-[70vh] rounded-lg bg-red-700 overflow-hidden">
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
