import {useRef} from "react";
import {Stats, useHelper} from "@react-three/drei";
import * as THREE from "three";
import {Leva, useControls} from "leva";

const Box = () => {
    const boxRef = useRef(null!);
    useHelper(boxRef, THREE.BoxHelper, "red");

    const {position, color, opacitiy, transparent} = useControls({
        position: {
            x: 0,
            y: 0,
            z: 0
        },
        color: "green",
        opacitiy: {
            value: 0.5,
            min: 0,
            max: 1,
            step: 0.01
        },
        transparent: true,
    })
    return (
        <mesh ref={boxRef} position={[position.x, position.y, position.z]}>
            <Leva hidden/>
            <Stats/>
            <boxGeometry/>
            <meshBasicMaterial transparent={transparent} color={color} opacity={opacitiy}/>
        </mesh>
    );
}

export default Box;