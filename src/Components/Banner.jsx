import AOS from "aos";
import React, { useEffect } from "react";



const Banner = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, 
          once: true,  
        });
      }, []);

  return (
    <div
      data-aos="zoom-in"
      style={{
        background: "url('/images/more/6.jpeg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="min-h-[70vh] p-8 md:p-8 lg:p-16 flex justify-center items-center"
    >
      <div className="md:w-2/4 text-white">
        <h1 className="text-5xl font-semibold font-font2 mb-6">
          Would you like a Cup of Delicious Coffee?
        </h1>
        <p className="text-gray-300 font-font1 mb-6">
          It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! 
          Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.
        </p>
        <button className="bg-[#E3B577] px-6 py-3 text-black font-medium">
          Learn More
        </button>
      </div>
      <div className="md:w-2/4"></div>
    </div>
  );
};

export default Banner;
