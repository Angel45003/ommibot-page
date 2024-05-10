import React from "react";
import ButtonsDescriptions from "../elements/ButtonsDescriptions";

function HomeBanner() {
  return (
    <>
      <div
        class="inset-0 -z-10 h-full w-full bg-black bg-[linear-gradient(to_right,#121212_1px,transparent_1px),linear-gradient(to_bottom,#121212_1px,transparent_1px)] bg-[size:6rem_4rem]"
        id="home"
      >
        <div className="bg-gradient-to-b from-zinc-900/55 to-black size-full">
          {/* bg colors */}
          <div className="flex justify-center items-center h-[80vh] flex-col">
            <p className="text-xl font-semibold text-transparent bg-gradient-to-r from-slate-400 to-white bg-clip-text">
              Nuevo Bot de Telegram
            </p>
            <h1 className="text-5xl font-semibold text-transparent bg-gradient-to-r from-slate-200 to-white bg-clip-text p-[6px] uppercase">
              El mejor Bot para Telegram
            </h1>
            <p className="opacity-50 text-[15px]">
              ¿Buscas un Bot de Telegram?, Bueno acá llego tu solución, Ommibot
            </p>
            <div className="grid grid-cols-2 p-[6px]">
              <ButtonsDescriptions Href="/docs" Title="Empezar" BGColor={1} />
              <ButtonsDescriptions
                Href="/docs"
                Title="Documentación"
                BGColor={2}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeBanner;
