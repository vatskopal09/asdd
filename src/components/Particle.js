import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 160,
            density: {
              enable: true,
              value_area: 1000,
            },
          },
          line_linked: {
            enable: true,
            opacity: 0.03,
          },
          move: {
            direction: "right",
            speed: 0.1,
          },
          size: {
            value: 1,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.05,
            },
          },
        },
        interactivity: {
          // detect_on: "canvas",
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
            onhover: {
             enable: true,
              mode: "repulse"
            }
            
          },
          modes: {
            push: {
              particles_nb: 10,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
