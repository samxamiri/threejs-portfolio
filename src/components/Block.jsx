import React, { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { gsap } from 'gsap';

const GrassBlock = () => {
  const grassBlockRef = useRef();

  // Load the GLTF model
  const { nodes, materials } = useGLTF('/models/grassBlock.glb');

  useEffect(() => {
    // Continuous rotation animation around the Y-axis
    gsap.to(grassBlockRef.current.rotation, {
      y: '+=' + Math.PI * 2, // Rotate 360 degrees
      duration: 10,
      ease: 'linear',
      repeat: -1, // Repeat indefinitely
    });

    const initialY = grassBlockRef.current.position.y; // Get initial Y position

    // Up and down movement along the Y-axis using absolute values
    gsap.fromTo(
      grassBlockRef.current.position,
      { y: initialY }, // Start at initial Y position
      {
        y: initialY + 1, // Move up to initialY + 1
        duration: 2,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1, // Repeat indefinitely
      }
    );
  }, []);

  return (
    <group
      ref={grassBlockRef}
      scale={0.8}
      position={[9, -7, 1]}
      dispose={null}
    >
      <mesh
        geometry={nodes.Object_2.geometry}
        material={materials.Grass_Block_TEX}
        rotation={[-Math.PI / 2, 0, 1]}
      />
    </group>
  );
};

// Preload the GLTF model
useGLTF.preload('/models/grassBlock.glb');

export default GrassBlock;
