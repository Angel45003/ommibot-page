import NodeJS from "../../assets/Nodejs.svg";
import TurboPacks from "../../assets/TurboPack.svg";
import TS from "../../assets/LogoTS.svg";
import React from "react";
import CardMotors from "../elements/CardMotors";

function MotorsBanner() {
  return (
    <>
      <div className="bg-gradient-to-t to-transparent from-black" id="motors">
        <div class="inset-0 -z-10 w-full bg-transparent bg-[linear-gradient(to_right,#121212_1px,transparent_1px),linear-gradient(to_bottom,#121212_1px,transparent_1px)] bg-[size:6rem_4rem] flex justify-center items-center h-[80vh] flex-col">
          <h1 className="text-5xl font-bold">Ommibot</h1>
          <p className="text-xl w-[590px] text-center">
            Ommibot tienes unos muy buenos motores desarrollados, para hacer que
            la creación y la edición de un Bot, sea <span>1.000</span> veces más
            rápido!
          </p>
          <div className="w-[400px] bg-zinc-900 flex justify-center p-[20px] text-3xl font-bold rounded-lg shadow-lg m-[10px]">
            <p>Created By..</p>
          </div>
          <div className="grid grid-cols-3">
            <CardMotors
              Title="TypeScript."
              Description="Este Bot se a desarrollado con los motores de TypeScript"
              Image={TS}
            />
            <CardMotors
              Title="TurboPacks."
              Description="Este Bot se a desarrollado con los motores de TypeScript y con TurboPacks."
              Image={TurboPacks}
            />
            <CardMotors
              Title="NodeJS."
              Description="Este Bot se a desarrollado con los motores de NodeJS + Typescript"
              Image={NodeJS}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default MotorsBanner;
