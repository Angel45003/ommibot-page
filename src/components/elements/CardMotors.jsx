import React from "react";

function CardMotors({ Title, Image, AltImage, Description }) {
  return (
    <>
      <article
        id="box__card"
        className="w-[400px] text-center flex bg-black cursor-pointer hover:bg-zinc-950 m-[6px] justify-center rounded-md border-[1px] border-zinc-900 hover:scale-110 transition-transform duration-100"
      >
        <div className="w-[80%] mx-auto flex items-center text-5xl ml-[10px] text-center">
          <img src={Image} className="w-[150px]" alt={AltImage} />
        </div>
        <div className="p-[10px] text-left">
          <h1 className="text-2xl">{Title}</h1>
          <p className="opacity-50 text-xs">{Description}</p>
        </div>
      </article>
    </>
  );
}

export default CardMotors;
