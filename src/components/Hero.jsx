import React from "react";

import {
  RiCheckboxBlankCircleFill,
  RiPlayFill,
  RiStarFill,
  RiCheckboxBlankFill,
} from "react-icons/ri";

function Hero() {
  return (
    <section className="min-h-[90vh] grid grid-cols-1 xl:grid-cols-8">
      {/* Information */}
      <div className="md:col-span-5 flex items-center justify-center p-8 xl:p-16">
        <div className="flex flex-col gap-8">
          <h1 className="text-5xl xl:text-7xl font-bold xl:leading-[7.5rem]">
            Web Desing Impactful Digital{" "}
            <span className="text-primary py-2 px-8 border-8 border-primary relative inline-block">
              Products
              <RiCheckboxBlankCircleFill className="text-white text-base absolute -left-5 -top-5 p-2 bg-primary rounded-full box-content" />
              <RiCheckboxBlankCircleFill className="text-white text-base absolute -right-5 -top-5 p-2 bg-primary rounded-full box-content" />
              <RiCheckboxBlankCircleFill className="text-white text-base absolute -left-5 -bottom-5 p-2 bg-primary rounded-full box-content" />
              <RiCheckboxBlankCircleFill className="text-white text-base absolute -right-5 -bottom-5 p-2 bg-primary rounded-full box-content" />
            </span>
          </h1>
          <p className="text-gray-500 text-2xl leading-[2.5rem]">
            Help find solutions with intitutive and in accordance with client
            business goals. we provide a high-quality services.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <button className="w-full xl:w-auto bg-primary text-white py-2 px-8 rounded-xl text-xl">
              Contact US
            </button>
            <button className="w-full xl:w-auto flex items-center justify-start text-left gap-4 py-2 px-8 rounded-xl text-xl">
              <RiPlayFill className="bg-secondary text-primary p-4 rounded-full box-content" />
              Watch our <br /> introduction video
            </button>
          </div>
        </div>
      </div>
      {/* Image */}
      <div className="md:col-span-3 flex items-center justify-center relative">
        {/* Content image */}
        <div>
          <img
            src="hero.png"
            alt="imagen hero"
            className="w-[250px] h-[250px] md:w-[450px] md:h-[450px] object-cover xl:-mt-28"
          />
          <div className="">
            <div className="relative bg-white p-4 rounded-lg shadow-xl flex flex-col justify-center gap-2 max-w-[250px] mx-auto -mt-12">
              <div className="flex items-center">
                <img
                  src="https://img.freepik.com/foto-gratis/apuesto-joven-brazos-cruzados-sobre-fondo-blanco_23-2148222620.jpg"
                  className="w-10 h-10 object-contain rounded-full ring-2 ring-gray-300"
                  alt=""
                />
                <img
                  src="https://img.freepik.com/psd-gratis/empleado-escribiendo-portatil_1154-367.jpg"
                  className="w-10 h-10 object-contain rounded-full ring-2 ring-gray-300 -ml-4 bg-white"
                  alt=""
                />
                <img
                  src="https://img.freepik.com/psd-premium/hombre-joven-camisa-blanca-manteniendo-brazos-cruzados-posicion-lateral-mientras-sonrie_1368-25983.jpg"
                  className="w-10 h-10 object-contain rounded-full ring-2 ring-gray-300 -ml-4 bg-white"
                  alt=""
                />
                <img
                  src="https://img.freepik.com/psd-premium/hombre-joven-inconformista-brazos-cruzados_1368-25112.jpg"
                  className="w-10 h-10 object-contain rounded-full ring-2 ring-gray-300 -ml-4 bg-white"
                  alt=""
                />
                <img
                  src="https://img.freepik.com/foto-gratis/guapo-joven-alegre_171337-1155.jpg"
                  className="w-10 h-10 object-contain rounded-full ring-2 ring-gray-300 -ml-4 bg-white"
                  alt=""
                />
              </div>
              <h2 className="text-xl font-bold tracking-[1px] text-gray-800">
                120+ Employees
              </h2>
              <div className="flex items-center gap-2 text-lg text-gray-600 font-medium">
                <RiStarFill className="text-primary" /> 5.0 (3.1k Reviews)
              </div>
              <div className="absolute -right-12 -bottom-12 -z-10">
                <div className="relative">
                  <RiCheckboxBlankCircleFill className=" text-primary text-8xl" />
                  <RiCheckboxBlankFill className="absolute -left-7 -top-7 text-white text-8xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Circle */}
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[280px] h-[280px] md:w-[380px] md:h-[380px] bg-secondary border-[10px] border-primary rounded-full -z-10"></div>
        {/* Logos */}
        <img
          src="figma.png"
          alt=""
          className="w-10 h-10 md:w-20 md:h-20 object-cover rounded-full border-l-8 border-gray-600 absolute top-[12%] right-[20%] xl:right-[10%]"
        />
        <img
          src="adobe.png"
          alt=""
          className="w-10 h-10 md:w-20 md:h-20 object-cover rounded-full border-l-8 border-gray-600 absolute top-[10%] xl:top-[2%] left-[20%] xl:left-[10%]"
        />
        <img
          src="sketch.png"
          alt=""
          className="w-10 h-10 md:w-20 md:h-20 object-cover rounded-full border-l-8 absolute bottom-[5%] xl:left-[3%] left-[15%] -rotate-16"
        />
      </div>
    </section>
  );
}

export default Hero;
