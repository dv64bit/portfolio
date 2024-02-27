import React from "react";

const CompanyCard = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.1"
      className="w-full h-fit py-11 px-14 flex flex-row gap-3"
    >
      <div className="w-1/2 h-[60vh] bg-[#163e45] relative rounded-lg overflow-hidde flex items-center justify-center">
        <img
          className="w-2/3 h-2/3 object-contain"
          src="https://i.postimg.cc/3wRCz8s7/2-cropped.png"
          alt=""
        />
        <div className="absolute bottom-0 left-0 px-8 py-8">
          <h1 className="px-3 py-1 uppercase border border-[#dbc49f] text-[#dbc49f] rounded-full text-sm tracking-widest font-['Neue_Montreal']">
            Dv64bit
          </h1>
        </div>
      </div>
      <div className="w-1/2  h-[60vh] flex gap-3">
        <div className="w-1/2 h-full bg-[#FBF6EE] relative rounded-lg overflow-hidde flex items-center justify-center">
          <img
            className="w-2/3 h-2/3 object-contain"
            src="https://i.postimg.cc/rpc0Hxp7/without-bg.png"
            alt=""
          />
          <div className="absolute bottom-0 left-0 px-8 py-8">
            <h1 className="px-3 py-1 uppercase border border-[#001317] text-[#001317] rounded-full text-sm tracking-widest font-['Neue_Montreal']">
              Studentflow
            </h1>
          </div>
        </div>
        <div className="w-1/2 h-full bg-[#F3EDC8] relative rounded-lg overflow-hidde flex items-center justify-center">
          <img
            className="w-2/3 h-2/3 object-contain"
            src="https://i.postimg.cc/NF3XdnSw/Vector.png"
            alt=""
          />
          <div className="absolute bottom-0 left-0 px-8 py-8">
            <h1 className="px-3 py-1 uppercase border border-[#461309] text-[#461309] rounded-full text-sm tracking-widest font-['Neue_Montreal']">
              yana
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
