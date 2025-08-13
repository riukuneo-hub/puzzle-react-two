import { useState } from "react";
import { Link } from "react-router-dom";

export default function Puzzle8() {
    const [respuesta, setRespuesta] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [completado, setCompletado] = useState(false);

    // Números para el puzzle (suman a A=1, M=13, O=15, R=18)
    const numeros = [10, 49, 78, 99];

    // Función para decodificar la palabra sumando dígitos
    function decodificar(nums) {
        return nums
            .map((num) => {
                const sumaDigitos = String(num)
                    .split("")
                    .reduce((acc, curr) => acc + Number(curr), 0);
                // Convertir número a letra (A=1)
                return String.fromCharCode(sumaDigitos + 64);
            })
            .join("");
    }

    const palabraCorrecta = decodificar(numeros); // "AMOR"

    function verificarRespuesta() {
        if (respuesta.trim().toUpperCase() === palabraCorrecta) {
            setMensaje("¡Correcto! La palabra es AMOR.");
            setCompletado(true);
        } else {
            setMensaje("Respuesta incorrecta, intenta de nuevo.");
        }
    }

    return (
        <div>
            <h2>🧩 Puzzle 8 – El Código de los Números</h2>
            <p>
                Decodifica la palabra sumando los dígitos de cada número y usando
                la posición en el alfabeto (A=1).
            </p>
            <p>
                ¿Suma resta division multiplicación? Abajo la primer letra es A pero
                está escrito un 10...
            </p>
            <p>Números:</p>
            <ul>
                {numeros.map((num, i) => (
                    <li key={i}>{num}</li>
                ))}
            </ul>
            <input
                type="text"
                placeholder="Escribe la palabra decodificada"
                value={respuesta}
                onChange={(e) => setRespuesta(e.target.value)}
            />
            <button onClick={verificarRespuesta}>Verificar</button>
            <p>{mensaje}</p>

            {completado && (
                <div style={{ marginTop: "20px" }}>
                    <Link to="/puzzle9">➡ Ir al Puzzle 9</Link>
                </div>
            )}
        </div>
    );
}
