import { Canvas } from "@react-three/fiber";
import { useGLTF, PerspectiveCamera } from "@react-three/drei";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* --------------------------------
   SECTION → WAYPOINT MAPPING
--------------------------------- */

const WAYPOINTS = [
  {
    trigger: "#hero",
    position: [0, -1.2, 0],
    rotation: [0, 0, 0],
  },
  {
    trigger: "#stats",
    position: [1.2, -1.6, -1.8],
    rotation: [0, 0.4, 0],
  },
  {
    trigger: "#capabilities",
    position: [-1.0, -1.0, -2.6],
    rotation: [0.1, -0.6, 0],
  },
  {
    trigger: "#scrolly",
    position: [0.8, -0.6, -3.2],
    rotation: [0, 0.6, 0],
  },
  {
    trigger: "#cta",
    position: [0, -2.2, -3.8],
    rotation: [0, 0, 0],
  },
];

function Robot() {
  const group = useRef();
  const { scene } = useGLTF("/drossel/scene.gltf");

  useEffect(() => {
    if (!group.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    WAYPOINTS.forEach((wp) => {
      const section = document.querySelector(wp.trigger);
      if (!section) return;

      tl.to(group.current.position, {
        x: wp.position[0],
        y: wp.position[1],
        z: wp.position[2],
        ease: "power2.inOut",
      });

      tl.to(
        group.current.rotation,
        {
          x: wp.rotation[0],
          y: wp.rotation[1],
          z: wp.rotation[2],
          ease: "power2.inOut",
        },
        "<"
      );
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <group ref={group} scale={0.015} position={[0, -1.2, 0]}>
      <primitive object={scene} />
    </group>
  );
}

export default function RobotCanvas() {
  return (
    <div className="robot-layer">
      <Canvas
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 1.5]}
        style={{ pointerEvents: "none" }}
      >
        <PerspectiveCamera
          makeDefault
          fov={42}
          position={[0, 0, 10]}
        />

        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={0.6} />
        <directionalLight position={[-5, -5, -5]} intensity={0.3} />

        <Robot />
      </Canvas>
    </div>
  );
}

useGLTF.preload("/drossel/scene.gltf");
