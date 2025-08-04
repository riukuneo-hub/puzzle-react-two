import { Link} from 'react-router-dom';
import {useState} from "react";

export default function Puzzle1() {
    const [respuesta, setRespuesta] = useState("");
    const [acertado, setAcertado] = useState("");

    return (
        <div>
            <h2>🧩 Puzzle 1</h2>
            <p>Esta es la página del primer puzzle.</p>
            <p>Nivel 1/10, fácilmente podrás resolverlo en menos de 1 minuto.</p>
            <p>Como recomendación, ten contigo una libreta a partir de ahora...</p>
            <p>Sumanos.</p>
            <p>(5 × (2³ + 1))</p>
            <p>(√225 × 2)</p>
            <input type="text" onChange={(e) => setRespuesta(e.target.value)} />
            <button onClick={() => {
                if(Number(respuesta) === 75){
                    setAcertado("Eso guapa <3 , Continuemos.")
                } else {
                    setAcertado("Kipasho? Respuesta incorrecta")
                }
            }}>Verificar</button>
            <p>{acertado}</p>
            {acertado === "Eso guapa <3 , Continuemos." &&
                <nav>
                    <Link to="/puzzle2">Segundo Puzzle</Link>
                </nav>
            }
        </div>
    );
}

