import React from "react";

function ButtonsDescriptions({ Title, Href, BGColor }) {
  const ButtonEffect1 =
    "w-[200px] flex justify-center p-[6px] m-[6px] border-[1px] border-slate-800 bg-white text-black rounded-lg hover:bg-slate-200";
  const ButtonEffect2 =
    "w-[200px] flex justify-center p-[6px] m-[6px] border-[1px] border-neutral-800 bg-neutral-900 text-white rounded-lg hover:bg-neutral-950";
  if (BGColor == 1) {
    return (
      <a href={Href} className={ButtonEffect1}>
        <span>{Title}</span>
      </a>
    );
  } else {
    return (
      <a href={Href} className={ButtonEffect2}>
        <span>{Title}</span>
      </a>
    );
  }
}

export default ButtonsDescriptions;
