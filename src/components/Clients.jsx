import React from "react";

const Clients = () => {
  return (
    <div id="My work" className="w-full py-20">
      <div className="w-full px-14 border-b-[1px] border-zinc-700 pb-16">
        <h1 className="text-6xl font-NeueMontreal tracking-tight">
          Clients’ Feedback
        </h1>
      </div>
      <div className="flex max-md:flex-col mt-9">
        <div className="basis-1/3">
          <h1 className="pl-14 font-NeueMontreal  text-lg">
            AntStudio | CoolAnt
          </h1>
        </div>
        <div className="pl-14 basis-1/3">
          <div className="flex flex-col gap-16">
            <h3 className=" font-NeueMontreal  text-lg">Services:</h3>
            <div className=" font-NeueMontreal  text-lg">
              <div className="w-fit my-3 px-3 py-1 uppercase border rounded-full text-sm tracking-widest">
                Frontend Design
              </div>
              <div className="w-fit my-3 px-3 py-1 uppercase border rounded-full text-sm tracking-widest">
                Website Optimization
              </div>
            </div>
          </div>
        </div>
        {/* Main Clients */}
        <div className="pl-14 basis-1/2">
          <div className="flex flex-col gap-16">
            <div className=" font-NeueMontreal text-lg">Pranjal Maheshwari</div>
            <div className="flex flex-col gap-4 pb-16">
              <div className="w-32 h-32 rounded-lg overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1570158268183-d296b2892211?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
              <div className="w-[80%] font-NeueMontreal text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                maiores pariatur doloribus corporis suscipit architecto
                reiciendis, molestias perspiciatis sapiente in, dolorem
                inventore minus ea nam exercitationem enim sint! Eius adipisci
                perspiciatis maiores dolorum corrupti odio earum repellat,
                inventore assumenda. Harum quas cumque dicta fuga blanditiis
                impedit velit adipisci, tenetur nostrum!
              </div>
            </div>
          </div>
        </div>
        <div className="pl-14 basis-1/6 font-NeueMontreal text-lg uppercase">
          Read
        </div>
      </div>

      {/* Extra Clients */}
      <div className="flex border-t-[1px] py-4 border-zinc-700">
        <div className="basis-1/3 pl-12 font-NeueMontreal text-lg">
          Lorem, ipsum.
        </div>
        <div className="basis-1/3 pl-12 font-NeueMontreal text-lg"></div>
        <div className="basis-1/2 pl-12 font-NeueMontreal text-lg">
          Keith Holland
        </div>
        <div className="basis-1/6 pl-12 font-NeueMontreal text-lg uppercase">
          Read
        </div>
      </div>
      <div className="flex border-t-[1px] py-4 border-zinc-700">
        <div className="basis-1/3 pl-12 font-NeueMontreal text-lg">
          Lorem, ipsum.
        </div>
        <div className="basis-1/3 pl-12 font-NeueMontreal text-lg"></div>
        <div className="basis-1/2 pl-12 font-NeueMontreal text-lg">
          Caleb Jordan
        </div>
        <div className="basis-1/6 pl-12 font-NeueMontreal text-lg uppercase">
          Read
        </div>
      </div>
      <div className="flex border-y-[1px] py-4 border-zinc-700">
        <div className="basis-1/3 pl-12 font-NeueMontreal text-lg">
          Lorem, ipsum.
        </div>
        <div className="basis-1/3 pl-12 font-NeueMontreal text-lg"></div>
        <div className="basis-1/2 pl-12 font-NeueMontreal text-lg">
          Brent Barton
        </div>
        <div className="basis-1/6 pl-12 font-NeueMontreal text-lg uppercase">
          Read
        </div>
      </div>
    </div>
  );
};

export default Clients;
