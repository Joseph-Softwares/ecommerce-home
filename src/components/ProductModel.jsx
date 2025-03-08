import { useDetectGPU } from '@react-three/drei'
import * as THREE from 'three'

const ProductModel = ({ modelPath, ...props }) => {
  const { isMobile } = useDetectGPU()
  const geometry = new THREE.BoxGeometry(1, 1, 1)
  const material = new THREE.MeshStandardMaterial({ 
    color: new THREE.Color(Math.random() * 0xffffff),
    metalness: 0.9,
    roughness: 0.1
  })

  return (
    <mesh
      {...props}
      geometry={geometry}
      material={material}
      scale={isMobile ? 0.8 : 1.2}
    />
  )
}

export default ProductModel
