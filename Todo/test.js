const entrada = document.querySelector("#entrada");

const saida = document.querySelector("#saida");

entrada.addEventListener("keyup", display);

saida.innerHTML = localStorage.getItem('value');

entrada.value = "";

function display() {
    // saida.innerHTML = entrada.value;
    localStorage.setItem('value', entrada.value);
    saida.innerHTML = localStorage.getItem('value');
};