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
                    width="0"
                    height="0"
                    src="https://www.youtube.com/embed/uoX_3HE8ScI?autoplay=1&loop=1&playlist=uoX_3HE8ScI"
                    title="Canción de amor"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
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

                    <br />
                    <br />

                    Se que la vida y el tiempo que tenemos no alcanzara para todo lo que tienes en mente, pero de a poco podremos
                    Se que te tiene mal todo lo que hemos pasado pero nunca dudes que te amo.
                    <br />
                    Y recuerda que si preguntas si te amo la respuesta es Siempre.
                    Mi niña
                    Mi Mu
                    Mi todo.
                </div>
            )}
        </div>
    );
}
