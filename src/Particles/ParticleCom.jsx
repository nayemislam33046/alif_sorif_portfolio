import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import ParticleConfig from "./ParticlesConfig";
const ParticleCom = () => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  const particlesLoaded = (container) => {
    console.log(container);
  };
  const [modes, setmodes] = useState("light");
  useEffect(() => {
    if (modes === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [modes]);
  return (
    <div>
      {init && (
        <Particles
          id="tsparticles"
          theme={modes}
          particlesLoaded={particlesLoaded}
          options={ParticleConfig}
        />
      )}
    </div>
  );
};
export default ParticleCom;
