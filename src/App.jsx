import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { useRef } from 'react'
import HeroCarousel from './components/HeroCarousel'
import { useScrollAnimation } from './hooks/useScrollAnimation'

const demoProducts = [
  { id: 1, glb: null },
  { id: 2, glb: null },
  { id: 3, glb: null }
]

export default function App() {
  const sectionRef = useRef()
  useScrollAnimation(sectionRef)
  return (
    <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
      <Environment preset="sunset" background />
      <OrbitControls makeDefault />
      
      <section ref={sectionRef}>
        <HeroCarousel products={demoProducts} />
      </section>
    </Canvas>
  )
}
