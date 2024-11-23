import './App.css'
import {Canvas} from "@react-three/fiber";
import {Grid, OrbitControls} from "@react-three/drei";
import Box from "./components/Box";
import {DoubleSide} from "three";


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
                side={DoubleSide}
            />
        </Canvas>
    )
}

export default App
