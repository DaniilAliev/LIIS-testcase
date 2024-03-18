import { FC } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import currentWeather from '../../stores/currentWeatherStore';
import { ICubeFace } from '../../types/types';


const CubeFace: FC<ICubeFace> = ({ index, weatherData }) => {
  const createTextTexture = (text:string) => {
    const canvas = document.createElement('canvas');

    canvas.width = 512;
    canvas.height = 512;

    const context = canvas.getContext('2d');

    if (context) {
      context.fillStyle = '#8ada75';
      context.fillRect(0, 0, canvas.width, canvas.height);

      const fontSize = 40;
      context.font = `${fontSize}px Arial`;
      context.fillStyle = 'white';

      const textWidth = context.measureText(text).width;
      context.fillText(text, canvas.width / 2 - textWidth / 2, canvas.height / 2);

      context.textAlign = 'center';
      context.textBaseline = 'middle';
    }    

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;

    return texture;
  };

  const dayTexture = createTextTexture(`${weatherData.day} ${weatherData.average} °C`);

  return (
    <mesh>
      <boxGeometry args={[2.5, 2.5, 2.5]} />
      <meshPhongMaterial attach={`material-${index}`} map={dayTexture} />
    </mesh>
  );
};

const Cube = observer(() => {
  const { forecast } = currentWeather;

  return (
    <Canvas>
      <directionalLight position={[2, 1, 1]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls enableZoom={false} />
      {[0, 1, 2, 3, 4, 5].map((index) => (
        <CubeFace key={index} index={index} weatherData={toJS(forecast)[index]} />
      ))}
    </Canvas>
  )
})

export { Cube };
