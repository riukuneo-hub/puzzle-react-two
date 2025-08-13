import { Link } from 'react-router-dom';
import { useState} from "react";

export default function Puzzle3(){
    const [mensaje,setMensaje] = useState("")
    const [respuesta,setRespuesta] = useState("")
    return(
        <div>
            <h2>🧩 Puzzle 3</h2>
            <p>Dificultad 3/10</p>
            <p>En este ejercicio no existe diferencia de mayusculas o minusculas</p>
            <p>No existen las virgulillas,acentos faltas de ortografia</p>
            <p>Solo existen letras comunes que encontrarias en un diccionario ingles.</p>
            <p>No existen las Ñ,las Д o cualquier modificacion de una letra.</p>
            <p>N-F-I-X-R-V-O-Z-T-L = M-U-R-C-I-E-L-A-G-O</p>
            <p>Z-W-R-L-H = A-D-I-O-S</p>
            <p>Q-Z-Z-A = J-A-Z-Z</p>
            <p>9871236540 = 9871236540</p>
            <p>C-I-E-N = X-R-V-M</p>
            <p>Resuelve el  siguiente mensaje.</p>
            <p>hV GiZgz yZy Wv GvGvNRnZm jFV hVi, KiLrGhl Wv f mLf hLzO ElC, xZnRmZ kIGvnWl Wv 4 kzgZh klI OzNvZm, wVkHkLh hLYIv WlV 2 kzgZh zo NvWlOlDz b lRmUzOVgXl xLm giVr KzGZh zo zGzIvWvx?</p>
            <input type="text" onChange={(e) =>setRespuesta(e.target.value)}/>
            <button onClick={() => {
                let palabra = respuesta.toUpperCase()
                if(palabra === "HOMBRE"){
                setMensaje("En hora buena, Vamos a subir mas nivel a esto.")
                } else {
                 setMensaje("Error : Pista, 5 letras.")
                }
            }}>Verificar</button>
            <p>{mensaje}</p>
            {mensaje.startsWith("En hora buena") && (
                <Link to="/puzzle4">Ir al puzzle 4</Link>
            )}
        </div>
    )
}