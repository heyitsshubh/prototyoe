import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows, PerspectiveCamera, Float, Sparkles } from "@react-three/drei";
import { Suspense } from "react";
import ProductModel from "./ProductModel";

// Loading component for 3D model
function LoadingFallback() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#7877c6" wireframe />
    </mesh>
  );
}

export default function Scene({ product, color, material }) {
  return (
    <div style={{ 
      width: '100%', 
      height: 'calc(100vh - 400px)', // Account for chat panel height
      background: 'linear-gradient(135deg, rgba(15, 15, 35, 1) 0%, rgba(26, 26, 46, 0.95) 50%, rgba(15, 15, 35, 1) 100%)',
      position: 'relative'
    }}>
      <Canvas
        camera={{ position: [0, 1.5, 4], fov: 50 }}
        shadows
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        {/* Enhanced Lighting Setup */}
        <ambientLight intensity={0.3} color="#ffffff" />
        
        {/* Key Light */}
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1.5} 
          color="#ffffff"
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-near={0.1}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        
        {/* Fill Light */}
        <directionalLight 
          position={[-5, 5, -8]} 
          intensity={0.8} 
          color="#7877c6"
        />
        
        {/* Rim Light */}
        <directionalLight 
          position={[0, 2, -10]} 
          intensity={1.2} 
          color="#ff77c6"
        />

        {/* Premium HDR Environment */}
        <Environment 
          preset="warehouse" 
          background={false}
          blur={0.8}
        />

        {/* Floating Animation Wrapper */}
        <Float
          speed={1.5}
          rotationIntensity={0.2}
          floatIntensity={0.1}
        >
          <Suspense fallback={<LoadingFallback />}>
            <ProductModel 
              model={product?.model} 
              color={color} 
              material={material} 
            />
          </Suspense>
        </Float>

        {/* Ground Shadows */}
        <ContactShadows
          position={[0, -1.4, 0]}
          opacity={0.4}
          scale={8}
          blur={2.5}
          far={4.5}
          color="#000000"
        />

        {/* Ambient Sparkles */}
        <Sparkles
          count={50}
          scale={[8, 4, 8]}
          size={3}
          speed={0.3}
          opacity={0.6}
          color="#7877c6"
        />

        {/* Enhanced Camera Controls */}
        <OrbitControls 
          enablePan={false} 
          enableZoom={true}
          enableRotate={true}
          minDistance={2}
          maxDistance={8}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI - Math.PI / 6}
          autoRotate={true}
          autoRotateSpeed={0.5}
          dampingFactor={0.05}
          enableDamping
        />
      </Canvas>

      {/* Overlay gradients for premium look */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(circle at 20% 20%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(255, 119, 198, 0.05) 0%, transparent 50%)
        `,
        pointerEvents: 'none',
        zIndex: 1
      }} />
    </div>
  );
}
