import React from "react";

import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const Rewviews = () => {
  return (
    <div className="p-8 flex flex-col gap-8 bg-gray-100">
      <h1 className="text-[40px] text-center font-black">
        Let's Hear What They Says
      </h1>
      <div className="flex justify-center gap-4">
        <span className="text-7xl text-primary">
          <RiDoubleQuotesL />
        </span>
        <p className="max-w-2xl text-center text-gray-500">
          Lorem ipsum dolor sir amet, consectetur adipsicing elit. Risus vel
          lobortis tincidunt fames quisque mauris at diam. nullam morbi ipsum
          turpis amet id posuere torto quis nostrud exercitation uliamco loboris
          nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in
          reprehenderit in valuptate valit esse cilum dolore.
        </p>
        <span className="text-7xl text-primary">
          <RiDoubleQuotesR />
        </span>
      </div>
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="flex items-center justify-center gap-8 md:gap-12">
          <img
            src="https://img.freepik.com/foto-gratis/apuesto-joven-brazos-cruzados-sobre-fondo-blanco_23-2148222620.jpg"
            className="w-8 h-8 md:w-14 md:h-14 object-contain rounded-full "
            alt=""
          />
          <img
            src="https://img.freepik.com/psd-gratis/empleado-escribiendo-portatil_1154-367.jpg"
            className="w-10 h-10 md:w-16 md:h-16 object-contain rounded-full "
            alt=""
          />
          <img
            src="https://img.freepik.com/psd-premium/hombre-joven-camisa-blanca-manteniendo-brazos-cruzados-posicion-lateral-mientras-sonrie_1368-25983.jpg"
            className="w-12 h-12 md:w-20 md:h-20 object-contain rounded-full ring-4 ring-primary p-1 bg-white"
            alt=""
          />
          <img
            src="https://img.freepik.com/psd-premium/hombre-joven-inconformista-brazos-cruzados_1368-25112.jpg"
            className="w-10 h-10 mdl:w-16 md:h-16 object-contain rounded-full "
            alt=""
          />
          <img
            src="https://img.freepik.com/foto-gratis/guapo-joven-alegre_171337-1155.jpg"
            className="w-8 h-8 md:w-14 md:h-14 object-contain rounded-full "
            alt=""
          />
        </div>
        <div>
          <h3 className="text-center text-[24px] font-bold">Richy Aprilia</h3>
          <h5 className="text-center text-[20px] text-gray-500">
            Founder of Varibo
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Rewviews;
