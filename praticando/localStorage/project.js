const formulario = document.querySelector('#name-form');
const welcomeContainer = document.querySelector('#wellcome');
const logoutBtn = document.querySelector('#logout');



formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputName = document.querySelector('#name');

    localStorage.setItem('name', inputName.value);

    inputName.value = "";
    checkUser();
});

logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('name');
    checkUser();
});

function checkUser () {
    const userName = localStorage.getItem('name');

    if (userName) {
        formulario.style.display = "none";
        welcomeContainer.style.display = "block";
        
        const userNameElement = document.querySelector('#username');
        
        userNameElement.textContent = userName;

    } else {
        formulario.style.display = "block";
        welcomeContainer.style.display = "none";
    }
};

// app start
checkUser();
