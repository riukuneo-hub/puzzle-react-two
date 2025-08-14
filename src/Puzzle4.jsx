import { Link } from 'react-router-dom';
import {useState} from "react";

export default function Puzzle4(){
    const [respuestas,setRespuestas] = useState(["","","","",""])
    const [mensaje,setMensaje] = useState("")
    const [puedeAvanzar,setPuedeAvanzar] = useState(false)

    return(
        <div>
            <h2>🧩 Puzzle 4</h2>
            <p>Dificultad 4/10</p>
            <p>Menor a mayor.</p>
            <p>Cada vez que un numero esta bien se te dira si esta mal se te dira.</p>
            <p>∛1728 x (15-9)</p>
            <input type="text" onChange={(e) => {
                const number = Number(e.target.value)
                const nuevas = [...respuestas]
                nuevas[0] = number
                setRespuestas(nuevas)
                if(number === 72){
                    setMensaje("Primera correcta")
                } else {
                    setMensaje("Primera incorrecta")
                }
                }
            }/>
            <p>(25²−400)÷5</p>
            <input type="text" onChange={(e) =>{
            const number = Number(e.target.value)
            const nuevas = [...respuestas]
                nuevas[1] = number
                setRespuestas(nuevas)
                if(number === 45){
                    setMensaje("Segunda correcta")
                } else {setMensaje("Segunda incorrecta")}
            }}/>
            <p>(12×14)+(200÷4)</p>
            <input type="text" onChange={(e) =>{
                const number = Number(e.target.value)
                const nuevas = [...respuestas]
                nuevas[2] = number
                setRespuestas(nuevas)
                if(number === 218){
                    setMensaje("Tercera Correcta")
                } else {setMensaje("Tercera incorrecta")}
            }}/>
            <p>(7³+50)÷9</p>
            <input type="text" onChange={(e) =>{
                const number = Number(e.target.value)
                const nuevas = [...respuestas]
                nuevas[3] = number
                setRespuestas(nuevas)
                if(number === 43.66){
                    setMensaje("Cuarta Correcta")
                } else {setMensaje("Cuarta incorrecta")}
            }}/>
            <p>(1000÷25)+√784
                </p>
            <input type="text" onChange={(e) =>{
                const number = Number(e.target.value)
                const nuevas = [...respuestas]
                nuevas[4] = number
                setRespuestas(nuevas)
                if(number === 68){
                    setMensaje("Quinta Correcta")
                } else {setMensaje("Quinta incorrecta")}
            }}/>
            <br/>
            {mensaje}
            <br/>
            {respuestas[0]+" "+ respuestas[1] + " " + respuestas[2] + " "+respuestas[3] + " "+ respuestas[4]}
            <br/>
            <input
                type="text"
                onChange={(e) => {
                    const valor = e.target.value.trim();
                    const correcto = [43.66 ,45,68,72,218];

                    if (valor === correcto.join(" ")) {
                        setPuedeAvanzar(true);
                    }
                }}
            />
            {puedeAvanzar && <Link to="/puzzle5">Ir al puzzle 5</Link>}
        </div>
    )
}