import { Routes, Route, Link } from 'react-router-dom';
import Puzzle1 from './Puzzle1';
import Puzzle2 from "./Puzzle2";
import { useState } from "react";

function App() {
    const [acertado, setAcertado] = useState(false);
    const [respuesta, setRespuesta] = useState("");

    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <h3>🔍 Bienvenida a este puzzle prueba que cree y tu lo resolverás cada vez sera mas complicado o no</h3>
                            <p>Resuelve los acertijos para avanzar al siguiente nivel.</p>
                            <p>Este primer acertijo es el mas fácil y te ira guiando</p>
                            <p>Una vez que lo resuelvas se abrirá un link para el siguiente</p>
                            <p>Resuelve ¿Cuánto es (√144 + 12) × (3² − 4)</p>
                            <input type="text" onChange={(e) => setRespuesta(e.target.value)} />
                            <button onClick={() => {
                                if (Number(respuesta) === 120) {
                                    setAcertado("¡Correcto! Pulsa para ir al siguiente puzzle.");
                                } else {
                                    setAcertado("Numero incorrecto.")
                                }
                            }}>
                                Verificar.
                            </button>
                            <p>{acertado}</p>
                            {acertado === "¡Correcto! Pulsa para ir al siguiente puzzle." &&
                                <nav>
                                    <Link to="/puzzle1">Primer puzzle</Link>
                                </nav>
                            }
                        </>
                    }
                />
                <Route path="/puzzle1" element={<Puzzle1 />} />
                <Route path="/puzzle2" element={<Puzzle2 />} />
            </Routes>
        </>
    );
}

export default App;
