import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'
import ProductModel from './ProductModel'
import LoadingShader from './LoadingShader'

const HeroCarousel = ({ products }) => (
  <Canvas camera={{ position: [0, 0, 3] }}>
    <Environment preset="studio" />
    <Suspense fallback={<LoadingShader />}>
      {products.map((product, i) => (
        <ProductModel 
          key={product.id}
          position={[(i - 1) * 2.5, 0, 0]}
          modelPath={product.glb}
        />
      ))}
    </Suspense>
    <OrbitControls enableZoom={false} autoRotate />
  </Canvas>
)

export default HeroCarousel
