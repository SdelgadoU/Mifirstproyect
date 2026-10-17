const consejos = [
    "Toma descansos cortos y evita pasar muchas horas seguidas frente a la pantalla.",
    "Guarda tus archivos con nombres claros para encontrarlos con facilidad.",
    "Antes de compartir información, revisa si la fuente es confiable.",
    "Practica con proyectos pequeños y mejora una cosa a la vez."
];

const mensajeConsejo = document.querySelector("#mensaje-consejo");
const botonConsejo = document.querySelector("#cambiar-consejo");
const fecha = document.querySelector("#fecha");
let posicion = 0;

botonConsejo.addEventListener("click", () => {
    posicion = (posicion + 1) % consejos.length;
    mensajeConsejo.textContent = consejos[posicion];
});

fecha.textContent = `Año ${new Date().getFullYear()}`;
