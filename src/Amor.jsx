import { useState } from "react";

export default function CartaDeAmor() {
    const [mostrarCarta, setMostrarCarta] = useState(false);

    const handleClick = () => {
        setMostrarCarta(true);
    };

    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <h1>❤️</h1>

            {/* Botón para mostrar la carta y reproducir la música */}
            <button
                onClick={handleClick}
                style={{
                    padding: "10px 20px",
                    fontSize: "16px",
                    cursor: "pointer",
                    backgroundColor: "#f08080",
                    border: "none",
                    borderRadius: "5px"
                }}
            >
                ClickMe
            </button>

            {/* Reproductor de YouTube oculto */}
            {mostrarCarta && (
                <iframe
                    width="1"
                    height="1"
                    src="https://www.youtube.com/embed/bLLBmCygftI?autoplay=1"
                    title="Canción de amor"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    style={{ position: "absolute", left: "-9999px" }} // Oculto pero presente
                ></iframe>

            )}

            {/* Carta de amor */}
            {mostrarCarta && (
                <div
                    style={{
                        marginTop: "20px",
                        padding: "15px",
                        border: "2px solid #f08080",
                        borderRadius: "8px",

                        maxWidth: "600px",
                        whiteSpace: "pre-wrap",
                        fontSize: "18px",
                        lineHeight: "1.5",
                    }}
                >
                    {/* Aquí puedes escribir tu carta */}
                    Siempre

                    <br />
                    <br />

                   Se que no es mucho pero no pude  contenerme mas para darte esto y solo te lo paso ahora
                    No se si batallaste en llegar aquí pero quiero que sepas que te amo.
                    Se que no es la mejor canción pero uff como me encantas (SISISI aqui te burlas de que dice Dios)

                    <br />
                    <br />

                    Se que la vida y el tiempo que tenemos no alcanzara para todo lo que tienes en mente, pero de a poco podremos
                    Se que te tiene mal todo lo que hemos pasado pero nunca dudes que te amo.
                    <br />
                    Y recuerda que si preguntas si te amo la respuesta es Siempre.
                    Mi niña
                    Mi Mu
                    Mi todo.
                    <br />
                    Sigo pensando si todo lo que hago es suficiente porque tu das tanto y no te das cuenta.
                    <br />
                    Me calmas me tienes paciencia me das amor cuidados atención
                    <br />
                    Espero que los años que nos queda de vida sean suficiente para demostrarte que iba enserio
                    <br />
                    Gracias por motivarme cada dia , cada noche cada vez que me bajoneo espero poder regreasrte todo eso algun dia.
                    <br />
                    No tengo palabras para decirte porque ya viste soy mas de acciones mi niña grande.
                    <br />
                    Aunque queda 1 pregunta mas y es mas complicada que todas las demas juntas y no dicho por mi, Dicho por todos los demas a lo largo de la historia de la humanidad.
                    <br />
                    Revisa en la carpeta TrueCrime de las de Xbox Clasico
                </div>
            )}
        </div>
    );
}
