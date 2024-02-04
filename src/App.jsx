import { Canvas } from '@react-three/fiber'
import './App.css'

const Cube = ({position, size, color}) => {
  return (
        <mesh position={position}>
          <boxGeometry args={size} />
          <meshStandardMaterial color={color} />
        </mesh>
  )
}


const App = () => {
  return (
    <Canvas>
      <directionalLight position={[0,0,2]} />
      <ambientLight />
      
      <Cube position={[1,0,0]} size={[1,1,1]} color={"#ffffff"} />
      <Cube position={[-1,0,0]} size={[1,1,1]} color={"red"} />

      <Cube position={[1,2,0]} size={[1,1,1]} color={"blue"} />
      <Cube position={[-1,2,0]} size={[1,1,1]} color={"pink"} />

    </Canvas>
  )
}

export default App
