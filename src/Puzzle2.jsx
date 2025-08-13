import { Link} from 'react-router-dom';
import {useState} from "react";

export default function Puzzle2() {
    const [letras, setLetras] = useState(["", "", "", "", ""]);
    const [mensaje, setMensaje] = useState("");
    const [desbloqueado, setDesbloqueado] = useState(false);

    function verificar(){
        if(letras.join("" )=== "1FSRM"){
            setMensaje("Correcto 3er Puzzle desbloqueado")
            setDesbloqueado(true)
        } else {
            setDesbloqueado(false)
            alert("Respuesta incorrecta")
        }
    }

    return(
        <div>
            <h2>🧩 Puzzle 2</h2>
            <p>Dificultad 2/10</p>
            <p>Te toca escribir y pensar </p>
            <h2>🧩 Ejercicio Prueba 🧩</h2>
            <p>Soy lo que salgo por la mañana</p>
            <p>Sin mi mueres de manera super rápida.</p>
            <p>Si la luz no existiría yo existiría</p>
            <p>🧩La respuesta al ejercicio prueba es = SAO (Siempre en mayúsculas)</p>
            <h2>🧩Ejercicio real.</h2>
            <p>(12 x 100) x (1500 - 1)</p>
            <input type="text" onChange={(e) => {
            const letra = e.target.value[0]?.toUpperCase() || ""
                const nuevas = [...letras]
                nuevas[0] = letra
                setLetras(nuevas)
                }
            }/>
            <p>Siempre estoy llegando , pero no llegare hoy.</p>
            <input type="text" onChange={(e) => {
                const letra = e.target.value[0]?.toUpperCase() || ""
                const nuevas = [...letras]
                nuevas[1] = letra
                setLetras(nuevas)
            }}/>
            <p>Soy un principe mestizo.</p>
            <input type="text" onChange={(e) => {
                const letra = e.target.value[0]?.toUpperCase()|| ""
                const nuevas = [...letras]
                nuevas[2] = letra
                setLetras((nuevas))
            }}/>
            <p>La reina que nunca fue.</p>
            <input type="text" onChange={(e) => {
                const letra = e.target.value[0]?.toUpperCase()|| ""
                const nuevas = [...letras]
                nuevas[3] = letra
                setLetras((nuevas))
            }}/>
            <p>Cucaracha</p>
            <input type="text" onChange={(e) => {
                const letra = e.target.value[0]?.toUpperCase()|| ""
                const nuevas = [...letras]
                nuevas[4] = letra
                setLetras((nuevas))
            }}/>
            <br/>
            <button onClick={verificar}>Verificar</button>
            <p>{mensaje}</p>
            {desbloqueado &&  <nav>
                <Link to="/puzzle3">Tercer Puzzle</Link>
            </nav>}
        </div>
    );
}