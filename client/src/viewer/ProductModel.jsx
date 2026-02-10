import { useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ProductModel({ model, color = "#111111", material = "cotton" }) {
  const { scene } = useGLTF(model || "/models/jacket.glb"); // Default model path
  const modelRef = useRef();

  const materials = {
    cotton: {
      roughness: 0.8,
      metalness: 0.1,
      envMapIntensity: 0.5
    },
    leather: {
      roughness: 0.3,
      metalness: 0.2,
      envMapIntensity: 0.8
    },
    silk: {
      roughness: 0.1,
      metalness: 0.05,
      envMapIntensity: 1.2
    },
    denim: {
      roughness: 0.9,
      metalness: 0.05,
      envMapIntensity: 0.4
    },
    shiny: {
      roughness: 0.05,
      metalness: 0.9,
      envMapIntensity: 1.5
    }
  };

  useEffect(() => {
    if (scene) {
      const materialProps = materials[material] || materials.cotton;
      const colorObj = new THREE.Color(color);

      scene.traverse((obj) => {
        if (obj.isMesh && obj.material) {
          // Clone the material to avoid affecting other instances
          obj.material = obj.material.clone();
          
          // Apply color
          obj.material.color = colorObj;
          
          // Apply material properties
          obj.material.roughness = materialProps.roughness;
          obj.material.metalness = materialProps.metalness;
          obj.material.envMapIntensity = materialProps.envMapIntensity;
          
          // Enable shadows
          obj.castShadow = true;
          obj.receiveShadow = true;
          
          // Mark for update
          obj.material.needsUpdate = true;
        }
      });
    }
  }, [scene, color, material]);

  if (!scene) {
    return null; // Loading fallback
  }

  return (
    <group ref={modelRef}>
      <primitive 
        object={scene} 
        scale={[1.8, 1.8, 1.8]} 
        position={[0, -1.2, 0]} 
        rotation={[0, 0.2, 0]}
      />
    </group>
  );
}
