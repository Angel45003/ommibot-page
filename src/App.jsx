import React from "react";
import HomeBanner from "./components/pages/HomeBanner";
import WhatUsageBanner from "./components/pages/WhatUsageBanner";
import ModeDeveloper from "./components/pages/ModeDeveloper";
import MotorsBanner from "./components/pages/MotorsBanner";
import Navbar from "./components/pages/Navbar";

function App() {
  return (
    <main>
      <Navbar />
      <section>
        <article>
          <HomeBanner />
          <WhatUsageBanner />
          <ModeDeveloper />
          <MotorsBanner />
        </article>
      </section>
    </main>
  );
}

export default App;
