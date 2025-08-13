import { useState } from "react";
import { Link } from "react-router-dom";

export default function Puzzle6() {
    const [respuesta, setRespuesta] = useState("");
    const [paso, setPaso] = useState(false);

    const cadenaADN = [
        "AAC", "TTA", "GGA", "CCG", "AGT", "GCT",  // GCT → A
        "TTA", "GGA", "ATC", "CGA", "GAA", "ATG",  // ATG → M
        "CTA", "GGG", "TTA", "ACC", "CAA", "TGC",  // TGC → O
        "ATT", "CGA", "GAG", "TGA", "CCA", "CGT",  // CGT → R
        "TTA", "GGA"
    ];

    const codonesCorrectos = ["GCT", "ATG", "TGC", "CGT"]; // A M O R
    const palabraOculta = "AMOR";

    const handleChange = (e) => {
        const valor = e.target.value.toUpperCase().replace(/\s/g, "");
        setRespuesta(valor);
        if (valor === palabraOculta) {
            setPaso(true);
        }
    };

    return (
        <div>
            <h2>🧩 Puzzle 6</h2>
            <p><strong>Dificultad 8/10</strong></p>
            <p>
                Esta cadena de ADN contiene una palabra muy especial.
                La información verdadera está <strong>oculta en un patrón regular</strong> dentro del ruido.
                Cada cierto número de codones, uno contiene una letra real.
                Si logras encontrar esos codones clave y traducirlos correctamente… descubrirás la palabra.
            </p>

            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(60px, 1fr))",
                gap: "8px",
                fontFamily: "monospace",
                margin: "20px 0"
            }}>
                {cadenaADN.map((codon, index) => (
                    <div key={index} style={{
                        background: "#e0e0e0",
                        color: "#000",
                        fontWeight: "bold",
                        fontSize: "18px",
                        padding: "12px",
                        borderRadius: "6px",
                        textAlign: "center",
                        boxShadow: "0 2px 4px rgba(0,0,0,0.2)"
                    }}>
                        {codon}
                    </div>
                ))}
            </div>

            <input
                type="text"
                placeholder="¿Palabra oculta?"
                onChange={handleChange}
                style={{ padding: "10px", fontSize: "16px", width: "200px" }}
            />

            {paso && (
                <>
                    <p>✅ ¡Correcto! Has encontrado la emoción enterrada: <strong>AMOR</strong>.</p>
                    <Link to="/puzzle7">Continuar al Puzzle 7</Link>
                </>
            )}
        </div>
    );
}
