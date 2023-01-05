const subtrair = document.querySelector('#subtrair');
const somar = document.querySelector('#somar');
const braco = document.querySelector('#braco');

const controle = document.querySelectorAll(".controle-ajuste");
console.log(controle);

somar.addEventListener("click", (event) => {
    manipulaDados("somar");
})

subtrair.addEventListener("click", (event) => {
    manipulaDados("subtrair");
})

function manipulaDados(operacao) {
    if (operacao === "subtrair") {
        braco.value = parseInt(braco.value) - 1;
    } else {
        braco.value = parseInt(braco.value) + 1;
    }
}