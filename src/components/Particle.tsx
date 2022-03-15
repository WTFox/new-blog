import Particles from "react-tsparticles";

import { Box, useColorModeValue } from "@chakra-ui/react";

const Particle = () => {
  const color = useColorModeValue("#D6BCFA", "#FBB6CE");
  return (
    <Box zIndex={-1} pos={"fixed"}>
      <Particles
        options={{
          fpsLimit: 30,
          particles: {
            color: {
              value: color,
            },
            links: {
              enable: true,
              opacity: 0.5,
            },
            move: {
              direction: "right",
              enable: true,
              outMode: "bounce",
              random: true,
              speed: 2,
              straight: false,
            },
            number: {
              value: 25,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
    </Box>
  );
};

export default Particle;
