import React from "react";

function CardElement({ Title, IconsClass, Description }) {
  return (
    <>
      <article
        id="box__card"
        className="w-[400px] text-center flex cursor-pointer hover:bg-zinc-950 m-[6px] justify-center rounded-md border-[1px] border-zinc-900 hover:scale-110 transition-transform duration-100"
      >
        <div className="w-[80%] mx-auto flex items-center text-5xl ml-[10px] text-center">
          <i className={IconsClass}></i>
        </div>
        <div className="p-[10px] text-left">
          <h1 className="text-2xl">{Title}</h1>
          <p className="opacity-50">{Description}</p>
        </div>
      </article>
    </>
  );
}

export default CardElement;
