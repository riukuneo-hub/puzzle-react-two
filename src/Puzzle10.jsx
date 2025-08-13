import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Puzzle10() {
    const [answer, setAnswer] = useState("");
    const navigate = useNavigate();

    // Texto cifrado con César +3
    const cipherText = `Hq od rvfxulgdg eulood od yhu gdg. Nrqirud grqgh hv frprd ooxv qxphurv vhfuhwrv.`;

    /* Explicación del puzzle (no visible al jugador):
      - Desplazar -3 para descifrar
      - Resultado: "En la oscuridad brilla la ver dad. Confiar donde es como llu numeros secretos."
      - Dentro hay números escritos con palabras (uno, tres, cinco, etc.) que equivalen a posiciones.
      - Con esas posiciones tomar letras de la cadena base.
    */

    const baseString = "EN LA OSCURIDAD BRILLA LA VERDAD"; // se limpiará a mayúsculas y sin espacios

    const checkAnswer = () => {
        if (answer.trim().toUpperCase() === "TESORO") {
            navigate("/Amor"); // siguiente paso, o final
        } else {
            alert("Respuesta incorrecta, sigue intentando.");
        }
    };

    return (
        <div style={{ padding: "20px", maxWidth: "600px" }}>
            <h2>Puzzle 10 - El final del viaje</h2>
            <p>
                Este es el texto que encuentras grabado en una vieja pared:
            </p>
            <blockquote style={{ fontStyle: "italic" }}>{cipherText}</blockquote>
            <p>
                Una vez descifrado, revela algo más… pero solo si eres capaz de
                encontrar las posiciones correctas.
            </p>
            <input
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Escribe tu respuesta"
                style={{ marginRight: "10px" }}
            />
            <button onClick={checkAnswer}>Enviar</button>
        </div>
    );
}
