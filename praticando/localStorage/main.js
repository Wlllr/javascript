// localStorage.setItem('name', 'weller');

// const nome = localStorage.getItem('name');

// localStorage.clear();

const person = {
    name: "Weller",
    age: 24,
    job: "student",
};

localStorage.setItem('person', person); // tentando salvar um objeto assim nao vai funcionar.

// Acontece que quando passado um objeto, ou array para o localStorage, o LS vai armazenar esse dado como String. Convertendo de obj,array para string.

// Entao a maneira certa de passar o dado, e o convertendo para string, com um metodo do JSON.

localStorage.setItem('person', JSON.stringify(person));
// Agora deu certo.

const getPerson = localStorage.getItem('person');

console.log(getPerson.age); // Assim, tambem nao dara certo. O resultado sera undifined. Pois mais uma vez precisa ser convertido com o JSON.

const persObject = JSON.parse(getPerson);

console.log(persObject.job);