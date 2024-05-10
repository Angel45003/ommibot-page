import React from "react";
import CardElement from "../elements/CardElement";

function WhatUsageBanner() {
  return (
    <>
      <div
        className="flex justify-center flex-col items-center h-[70vh]"
        id="what"
      >
        <div className="flex *:p-[6px] items-center">
          <h1 className="text-5xl text-transparent bg-gradient-to-r from-zinc-200 to-white font-semibold bg-clip-text">
            ¿Que es OmmiBot?
          </h1>
          <p className="text-gray-300">Que és y para qué funciona Ommibot?</p>
        </div>
        <div className="grid grid-cols-3">
          <CardElement
            Title="Rendimiento"
            Description="OmmiBot te da un mayor rendimiento y flexibilidad en usar."
            IconsClass="fa-solid fa-rocket bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text"
          />
          <CardElement
            Title="Flexibilidad"
            Description="OmmiBot te da una mayor flexibilidad y fácilidad en usar.."
            IconsClass="fa-solid fa-palette bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text"
          />
          <CardElement
            Title="Comodidad"
            Description="OmmiBot es muy fácil de usar y muy comodo."
            IconsClass="fa-solid fa-code bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text"
          />
        </div>
      </div>
    </>
  );
}

export default WhatUsageBanner;
