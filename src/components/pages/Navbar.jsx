import React from "react";

function Navbar() {
  return (
    <nav className="bg-black/55 sticky top-0 backdrop-blur-md p-[6px]">
      <ul className="flex justify-around items-center">
        <li>
          <a
            href="/"
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500"
          >
            Ommibot
          </a>
        </li>
        <div className="flex items-center *:p-[6px]">
          <li>
            <a href="#home">Inicio</a>
          </li>
          <li>
            <a href="#what">Que es?</a>
          </li>
          <li>
            <a href="#developer">Developer Mode</a>
          </li>
          <li>
            <a href="#motors">Motores</a>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
