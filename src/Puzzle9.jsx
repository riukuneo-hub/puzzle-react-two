import { useState } from "react";
import { Link } from "react-router-dom";

export default function Puzzle9() {
    const [respuesta, setRespuesta] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [correcto, setCorrecto] = useState(false);

    const encriptado = "SUXHED MXHJR GHEH";

    function desencriptar(texto) {
        return texto
            .split("")
            .map((char) => {
                if (/[A-Z]/.test(char)) {
                    let codigo = char.charCodeAt(0) - 3;
                    if (codigo < 65) codigo += 26;
                    return String.fromCharCode(codigo);
                }
                return char;
            })
            .join("");
    }

    const solucion = desencriptar(encriptado); // "PRUEBA JUEGO DEBE"

    function verificarRespuesta() {
        if (respuesta.trim().toUpperCase() === solucion) {
            setMensaje("✅ ¡Correcto! Descifraste el mensaje.");
            setCorrecto(true);
        } else {
            setMensaje("❌ Respuesta incorrecta, intenta de nuevo.");
            setCorrecto(false);
        }
    }

    return (
        <div>
            <h2>🧩 Puzzle 9 – El Mensaje Oculto</h2>
            <p>
                El siguiente mensaje ha sido encriptado con un cifrado César
                desplazando las letras 3 posiciones hacia adelante. Descifra el
                mensaje original.
            </p>
            <p style={{ fontWeight: "bold" }}>{encriptado}</p>
            <input
                type="text"
                placeholder="Escribe el mensaje original"
                value={respuesta}
                onChange={(e) => setRespuesta(e.target.value)}
            />
            <button onClick={verificarRespuesta}>Verificar</button>
            <p>{mensaje}</p>

            {/* Mostrar link a Puzzle10 solo si la respuesta es correcta */}
            {correcto && (
                <Link to="/Puzzle10" style={{ display: "inline-block", marginTop: "1em" }}>
                    👉 Ir a Puzzle 10
                </Link>
            )}
        </div>
    );
}
