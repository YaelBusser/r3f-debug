import './App.css'
import {Canvas} from "@react-three/fiber";
import {Grid, OrbitControls, useHelper} from "@react-three/drei";
import React, {useRef} from "react";
import * as THREE from "three";
import {useControls} from "leva";

// useHelper pour voir un objet invisible
const Box = () =>{
    const boxRef = useRef<any>(null);
    useHelper(boxRef, THREE.BoxHelper, "red");

    const {position} = useControls({
        position: {
            x: 0,
            y: 0,
            z: 0
        }
    })
    return (
        <mesh ref={boxRef}>
            <boxGeometry position={[position.x, position.y, position.z]}/>
            <meshBasicMaterial transparent color={"white"} opacity={0} />
            <Grid
                sectionSize={1}
                sectionColor={"black"}
                sectionThickness={1}
                cellSize={0.5}
                cellColor={"black"}
                cellThickness={0.8}
                infiniteGrid
                fadeDistance={50}
                fadeStrength={10}
            />
        </mesh>
    );
}

function App() {
    return (
        <Canvas camera={{
            position: [3, 3, 3]
        }}>
            <OrbitControls/>
            {
                /*
                    - Représentation visuelle axes X, Y et Z
                        <axesHelper/>
                    - Représentation du sol
                        <gridHelper args={[10, 10, "red", "green"]}/>
                    - Représentation du sol plus détaillée
                        <Grid
                            sectionSize={1}
                            sectionColor={"red"}
                            sectionThickness={1}
                            cellSize={0.5}
                            cellColor={"green"}
                            cellThickness={0.8}
                            infiniteGrid
                            fadeDistance={50}
                            fadeStrength={10}
                        />
                 */
            }
            <Box/>
        </Canvas>
    )
}

export default App
