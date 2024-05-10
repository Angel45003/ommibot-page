import React from "react";

function ModeDeveloper() {
  return (
    <>
      <div
        className="size-full h-[80vh] bg-gradient-to-b from-black to-neutral-950 flex justify-center items-center flex-col"
        id="developer"
      >
        <h1 className="text-5xl p-[6px] font-bold">Ommibot Developer</h1>
        <div className="flex items-center p-[6px]">
          <p className="text-xl">
            Esta herramienta tambien se puede usar como modo{" "}
            <span>Developer</span>Y es para editarlo
          </p>
          <span className="p-[6px] opacity-50 text-xs">
            Por ahora este modo se esta creando.
          </span>
        </div>
        <div>
          <h1 className="opacity-50 text-xl">
            Esto ofrece mucho más configuraciones, para un developer.
          </h1>
        </div>
      </div>
    </>
  );
}

export default ModeDeveloper;
