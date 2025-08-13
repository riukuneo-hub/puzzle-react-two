import { useState } from "react";
import { Link } from "react-router-dom";

export default function Puzzle7() {
    const [respuesta, setRespuesta] = useState("");
    const [paso, setPaso] = useState(false);

    const verificar = (e) => {
        const valor = e.target.value.trim().toUpperCase();
        setRespuesta(valor);
        if (valor === "CAOS") {
            setPaso(true);
        }
    };

    return (
        <div>
            <h2>🧩 Puzzle 7</h2>
            <p>Un rompecabezas sonoro… si escuchas con atención.</p>

            <p>“Canta una canción cada mañana...”</p>
            <p>“Haz que la A se note entre líneas…”</p>
            <p>“¿Oyes el susurro del silencio?”</p>
            <p>“Solo tú puedes verlo.”</p>

            <input
                type="text"
                onChange={verificar}
                placeholder="¿Qué palabra escuchas?"
            />

            {paso && <Link to="/puzzle8">✅ Siguiente Puzzle</Link>}
        </div>
    );
}
