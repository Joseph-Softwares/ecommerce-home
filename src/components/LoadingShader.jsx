import { shaderMaterial } from '@react-three/drei'
import { extend } from '@react-three/fiber'
import * as THREE from 'three'

const LoadingShaderMaterial = shaderMaterial(
  { time: 0, color: new THREE.Color(0.2, 0.6, 1.0) },
  `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
  `,
  `
  uniform float time;
  uniform vec3 color;
  varying vec2 vUv;
  
  void main() {
    float wave = sin(vUv.x * 10.0 + time * 2.0) * 0.5 + 0.5;
    float alpha = smoothstep(0.4, 0.6, wave);
    gl_FragColor = vec4(color, alpha * 0.8);
  }
  `
)

extend({ LoadingShaderMaterial })

export default function LoadingShader() {
  return (
    <mesh>
      <planeGeometry args={[3, 0.2]} />
      <loadingShaderMaterial key={LoadingShaderMaterial.key} time={0} />
    </mesh>
  )
}
