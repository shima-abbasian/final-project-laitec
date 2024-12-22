import React from "react";

function Landing() {
  return (
    <div className="w-[90%] m-auto flex pt-10 pb-32">
      <div className="w-1/2 justify-center flex flex-col text-left">
        <span className="text-5xl font-bold bebas">
          Experience the height of fashion with our exquisite designer pieces.
        </span>
        <p className=" mt-4 text-lg">
          Where style, sophistication, exclusivity is the forefront of our
          collection. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Repellat quaerat nostrum quia nam earum, libero, expedita impedit
          delectus provident quo eveniet.
        </p>
        <div className="mt-8">
        <button className="px-4 py-2  bg-black rounded-lg text-white hover:bg-blue-600">
          Discover Our Products
        </button>
        </div>
       
      </div>
      <div className="flex w-1/2">
        <div className="w-1/2 gap-y-6 flex flex-col ml-32">
          <img
            className=" rounded-[40%] h-52 w-40 grayscale hover:grayscale-0 transition duration-500"
            src="publicImages/home-photo-1-257jNod0.webp"
            alt=""
          />
          <img
            className=" rounded-b-[40%] h-52 w-40 grayscale hover:grayscale-0 transition duration-500"
            src="publicImages/home-photo-2--o4d97Ez.webp"
            alt=""
          />
        </div>
        <div className="w-1/2">
          <img
            className="rounded-t-[40%] h-96 w-60 grayscale hover:grayscale-0 transition duration-500"
            src="publicImages/home-photo-3-AyMlcsjR.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Landing;
