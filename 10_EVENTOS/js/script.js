// 1 - adicionando eventos
const btn = document.querySelector("#my-button")

btn.addEventListener("click", function () {
    console.log("clicou aqui!")
})

// 2 - removendo evento
const seconBtn = document.querySelector("#btn");

function imprimirMensagem() {
    console.log("Teste");
}

seconBtn.addEventListener("click", imprimirMensagem);

const thirdBtn = document.querySelector("#other-btn");

thirdBtn.addEventListener("click", () => {
    console.log("Evento removido");
    seconBtn.removeEventListener("click", imprimirMensagem)
})

// 3 - argumento do evento 
const myTitle = document.querySelector("#my-title");

myTitle.addEventListener("click", (event) => {
    console.log(event);
    console.log(event.offsetX);
    console.log(event.pointerType);
    console.log(event.target)
} );

// 4 - propagação
const containerBtn = document.querySelector("#btn-container");
const btnInsideContainer = document.querySelector("#div-btn");

containerBtn.addEventListener("click", () => {
    console.log("Evento 1");
})

btnInsideContainer.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("Evento 2");
})