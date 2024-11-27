/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: xenadus (https://sketchfab.com/xenadus)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/react-logo-76174ceeba96487f9863f974636f641e
Title: React logo
*/

import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { gsap } from 'gsap';

const ReactLogo = (props) => {
  const groupRef = useRef();
  const { nodes, materials } = useGLTF('/models/react.glb');

  useEffect(() => {
    if (!groupRef.current) return;

    // Kill any existing animations to prevent duplicates
    gsap.killTweensOf(groupRef.current.rotation);

    // Set up the rotation animation
    gsap.to(groupRef.current.rotation, {
      y: `+=${Math.PI * 2}`, // Rotate 360 degrees around Y-axis
      x: `-=${Math.PI * 2}`, // Rotate -360 degrees around X-axis
      duration: 15,
      ease: 'power1.inOut',
      repeat: -1, // Repeat indefinitely
      repeatDelay: 0, // Delay between repeats
    });
  }, []);

  return (
    <group
      ref={groupRef}
      {...props}
      dispose={null}
      scale={0.01}
      position={[-15, 3, -7]}
    >
      <group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['React-Logo_Material002_0'].geometry}
          material={materials['Material.002']}
          position={[0, 7.935, 18.102]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[39.166, 39.166, 52.734]}
        />
      </group>
    </group>
  );
};

useGLTF.preload('/models/react.glb');

export default ReactLogo;