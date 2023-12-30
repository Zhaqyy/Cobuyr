import * as THREE from 'three'
import { useMemo, useRef } from 'react'
import { MeshLineGeometry, MeshLineMaterial } from 'meshline'
import { extend, Canvas, useFrame } from '@react-three/fiber'
// import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { easing } from 'maath'
// import { useControls } from 'leva'

extend({ MeshLineGeometry, MeshLineMaterial })

export default function LineHero() {
  const { dash, count, radius }= ({
    dash: Math.round(((Math.random() * 0.7) + 0.4) * 10) / 10, 
    count: 200,
    radius: 50,
  })
  return (
    <Canvas camera={{ position: [0, 0, 50], fov: 75 }}>
      <color attach="background" args={['#101020']} />
      <Lines dash={dash} count={count} radius={radius} colors={[[10, 0.5, 2], [1, 2, 10], '#A2CCB6', '#FCEEB5', '#EE786E', '#e0feff']} />
      <Rig />
      {/* <EffectComposer>
        <Bloom mipmapBlur luminanceThreshold={1} radius={0.2} />
      </EffectComposer> */}
    </Canvas>
  )
}

// function Lines({ dash, count, colors, radius = 50 }) {
//   const lines = useMemo(() => {
//     const Z_INCREMENT = 0.08
//     const ANGLE_INCREMENT = 0.025
//     const RADIUS_INCREMENT = 0.05

//     return Array.from({ length: count }, (_, index) => {
//       const points = []
//       let z = 0
//       let radiusStart = Math.random() > 0.8 ? 0.9 : 0.3
//       let angle = Math.random() * Math.PI * 2

//       while (z < radius) {
//         const x = Math.cos(angle) * radiusStart
//         const y = Math.sin(angle) * radiusStart

//         points.push(x, y, z)

//         z += Z_INCREMENT
//         angle += ANGLE_INCREMENT
//         radiusStart += RADIUS_INCREMENT
//       }

//       return {
//         color: colors[parseInt(colors.length * Math.random())],
//         width: Math.max(radius / 500, (radius / 250) * Math.random()),
//         speed: Math.max(0.1, 1 * Math.random()),
//         curve: points
//       }
//     })
//   }, [colors, count, radius])

//   return lines.map((props, index) => <Fatline key={index} dash={dash} {...props} />)
// }

// Zigzag Lines Pattern kinda good

// function Lines({ dash, count, colors, radius = 50 }) {
//   const lines = useMemo(() => {
//     const Z_INCREMENT = 0.08;
//     const ANGLE_INCREMENT = 0.1; // Increase the angle increment for more prominent zigzag
//     const RADIUS_INCREMENT = 0.15; // Increase the radius increment for a larger zigzag pattern

//     return Array.from({ length: count }, (_, index) => {
//       const points = [];
//       let z = 0;
//       let radiusStart = Math.random() > 0.8 ? 0.9 : 0.3;
//       let angle = Math.random() * Math.PI * 2;

//       while (z < radius) {
//         const x = Math.cos(angle) * radiusStart;
//         const y = Math.sin(angle) * radiusStart;

//         points.push(x, y, z);

//         z += Z_INCREMENT;
//         angle += ANGLE_INCREMENT;
//         radiusStart += RADIUS_INCREMENT;
//       }

//       return {
//         color: colors[parseInt(colors.length * Math.random())],
//         width: Math.max(radius / 500, (radius / 250) * Math.random()),
//         speed: Math.max(0.1, 1 * Math.random()),
//         curve: points,
//       };
//     });
//   }, [colors, count, radius]);

//   return lines.map((props, index) => <Fatline key={index} dash={dash} {...props} />);
// }


// // Lissajous Curve Pattern
// function Lines({ dash, count, colors, radius = 50 }) {
//   const lines = useMemo(() => {
//     const Z_INCREMENT = 0.08;
//     const ANGLE_INCREMENT_X = 0.1;
//     const ANGLE_INCREMENT_Y = 0.15;
//     const RADIUS_INCREMENT_X = 0.1;
//     const RADIUS_INCREMENT_Y = 0.1;

//     return Array.from({ length: count }, (_, index) => {
//       const points = [];
//       let z = 0;
//       let radiusStartX = Math.random() > 0.5 ? 0.9 : 0.3;
//       let radiusStartY = Math.random() > 0.5 ? 0.9 : 0.3;
//       let angleX = Math.random() * Math.PI * 2;
//       let angleY = Math.random() * Math.PI * 2;

//       while (z < radius) {
//         const x = Math.cos(angleX) * radiusStartX;
//         const y = Math.sin(angleY) * radiusStartY;

//         points.push(x, y, z);

//         z += Z_INCREMENT;
//         angleX += ANGLE_INCREMENT_X;
//         angleY += ANGLE_INCREMENT_Y;
//         radiusStartX += RADIUS_INCREMENT_X;
//         radiusStartY += RADIUS_INCREMENT_Y;
//       }

//       return {
//         color: colors[parseInt(colors.length * Math.random())],
//         width: Math.max(radius / 500, (radius / 250) * Math.random()),
//         speed: Math.max(0.1, 1 * Math.random()),
//         curve: points,
//       };
//     });
//   }, [colors, count, radius]);

//   return lines.map((props, index) => <Fatline key={index} dash={dash} {...props} />);
// }


function Fatline({ curve, width, color, speed, dash }) {
  const ref = useRef()
  useFrame((state, delta) => (ref.current.material.dashOffset -= (delta * speed) / 20))

  return (
    <mesh ref={ref}>
      <meshLineGeometry points={curve} />
      <meshLineMaterial transparent lineWidth={width} color={color} depthWrite={false} dashArray={0.25} dashRatio={dash} toneMapped={false} />
    </mesh>
  )
}


function Rig({ radius = 20 }) {
  useFrame((state, dt) => {
    const multiplier = 0.2 // Adjust this value to control sensitivity

    // Reduce the impact of mouse movement directly
    const mouseX = -state.pointer.x * multiplier
    const mouseY = -state.pointer.y * multiplier

    easing.damp3(state.camera.position, [Math.sin(mouseX) * radius, Math.atan(mouseY) * radius, Math.cos(mouseX) * radius], 0.9, dt)

    state.camera.lookAt(0, 0, 0)
  })
}