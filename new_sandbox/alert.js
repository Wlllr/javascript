// Variables 

/*
let userName = 'john';
let admin = userName;

alert(userName);


let userName = prompt('What is your name?');

alert(`Your name is ${userName}`);

let a = prompt('first number?', 1);
let b = prompt('second number?', 2);

alert(Number(a) + Number(b));
*/

/*
let year = prompt('What year are we on?', '');

if (year < 2022) {
    alert('wrong, unless u have a time-machine');
} else if (year > 2022) {
    alert('wrong, u traveled to the future');
}
else {
    alert('exactly!');
}


let accessAllowed;

let age = prompt('How old are you?');

if (age > 18) {
    accessAllowed = true;
} else {
    accessAllowed = false;
}

alert(accessAllowed);
console.log(accessAllowed);

let age = prompt('age?');

let message = (age < 3) ? 'Hi, kid!' : 
    (age < 18) ? 'hello' :
    (age < 100) ? 'greetings' :
    'what a unusual age!' ;

alert(message);
console.log(`the age is ${age} years old!.`, message);

let age = prompt('How old are you?');

if (age < 3) {
    let message = ('Hey kid');
    alert(message);
    console.log(age, message);
} else if (age < 18) {
    let message = ('Hello');
    alert(message);
    console.log(age, message);
} else if (age < 100) {
    let message = ('Greetings');
    alert(message);
    console.log(age, message);
} else {
    let message = ('What a unusual age!');
    alert(message);
    console.log(age, message);
}

let productName = prompt('what is the official name of JavaScript?');

if (productName == 'ECMAScript') {
    alert('You are right.');
    console.log(`You are right it is${productName}`);
} else {
    alert('You dont know? Its ECMAScript!');
    console.log('You didnt know. Its ECMAScript!');
}

let login = prompt('Who are u?');

if (login == 'employee') {
    let message = 'Hello';
    console.log(message);
} else if (login == 'Director') {
    let message = 'Greetings';
    console.log(message);
} else if (login == '') {
    let message = 'No login';
    console.log(message);
} else {
    let message = '';
    console.log(`hello ${login}`);
}

let userName = prompt('Who are you?');

if (userName == 'weller') {
    console.log('bem-vindo, weller');
} else {
    console.log('voce nao e weller.');
}

let userName = prompt('Who are you?');
let age = prompt('How old are you?');

if (userName == '' || age == '') {
    alert('try again');
    console.log('try again');
} else {
    if (age < 10) {
        console.log(`${userName} has ${age} years old. Its a kid!`);
    } else if (age < 21) {
        console.log(`${userName} has ${age} years old. Its a teen!`);
    } else if (age < 65) {
        console.log(`${userName} has ${age} years old. Its a adult!`)
    } else {
        console.log(`${userName} has ${age} years old. Its an elder!`)
    }
}

*/
/*
let i = prompt('enter a number:');

while (i < 3) {
    console.log(i);
    i++;
}*/

/*
let i = 0;

do {
    console.log(i);
    i++;
} while (i < 3)

for (let i = 0; i < 3; i++) {
    alert(i);
    console.log(i);
}

let sum = 0;

while (true) {
    let value = +prompt('enter a number:');
    
    if (!value) break;

    sum += value;
}

alert('sum: ' + sum);

let i = prompt('add a number: ');

for (i; i < 5 ; i++) {
    console.log('ola numero' + i);
}

let numero = 0;
let valor = +prompt('add um valor');

while (valor < 5) {
    alert('O valor é menor que 5'); break
}

alert('o valor é' + ' ' + valor);

outer: for (let i = 0; i < 3; i++) {
    for(let j = 0; j < 3; j++) {

        let input = prompt(`add dois valores (${i},${j})`);
            console.log(input);

            if (!input) break outer;

    }
    
}
alert('done');

let browser = prompt('what browser?');

if (browser == 'Edge') {
    alert('Youve got the Edge!');
} else if (browser == 'Chrome') {
    alert('Okay we support these browsers too');
} else if (browser == 'Firefox') {
    alert('Okay we support these browsers too');
} else if (browser == 'Safari') {
    alert('Okay we support these browsers too');
} else if (browser == 'Opera') {
    alert('Okay we support these browsers too');
} else {
    alert('We hope that this page looks ok!');
}

let browser = prompt('what browser?');

if (browser == 'Edge') {
    alert('Youve got the Edge!')
} else if (browser == 'Chrome'
    || browser == 'Firefox'
    || browser == 'Safari'
    || browser == 'Opera'
) {
    alert('Okay we support these browsers too');
} else {
    alert('We hope that this page looks ok!');
}

let a = +prompt('a?');

switch(a) {
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert('2,3');
        break;
    default:
        alert('idk this number');
}

let userName = 'John';

function showMessage() {
    userName = 'Bob';

    let message = "Hello, " + userName;

    alert(message);
    console.log(message);
}

alert(userName);
console.log(userName);

for (let i = 0; i < 3; i++) {
    showMessage();
}

alert(userName);
console.log(userName);

function showMessage(from, text) {
    alert(from + ': ' + text);
}

showMessage('ann','Hello!');

function showMessage (from, text = 'no text given') {
    alert( from + ": " + text);
}

showMessage('weller');

function sum (a, b) {
    return a + b;
}

let result = sum(4, 3);
alert(result);

function checkAge(age) {
    if (age >= 18) {
        return true;
    } else {
        confirm('do you have permission from your parents?');
    }
}

let age = prompt('How old are you?');

if (checkAge(age)) {
    alert('Access granted');
} else {
    alert('Access denied');
}

function showPrimes(n) {
    nextPrime: for (let i = 2; i < n; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) continue nextPrime;
        }
        alert(i);
        console.log(i);
    }
}

showPrimes(8);

function checkAge(age) {
    if (age > 18 ) {
        return true;
    } else {
        return confirm('Did parents allow you?');
    }
}

function checkAge(age) {
    return (age > 18) ? true : confirm('did parents allow you?'); 
}

function checkAge(age) {
    return (age > 18) || confirm('did parents allow you?');
}

function min(a, b) {
    if (a < b) {
        return alert(`a = ${a}`);
    } else if (b < a) {
        return alert(`b = ${b}`);
    } else {
        return alert('a == b');
    }
}

function power(x, n) {
    let result = (x **n);
    return alert(result);
}

power(1, 100);

let x = prompt('valor de X: ');
let n = prompt('valor de N: ');  

function power(x, n) {
    let result = (x ** n);
    return alert(result);
}

power(x, n); //(3,2) (3,3) (1, 100)


function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

function showOk () {
    alert('You agreed!');
}

function showCancel () {
    alert('You canceled the execution.');
}

ask('Do you agree?', showOk, showCancel);

let sum = function (a, b) {
    return a + b;
}

alert (sum (1,1));*/

// function ask(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
// }

// ask(
//     'do you agree?',
//     () => alert('You agreed.'),
//     () => alert('You canceled the execution.')
// );


// function fazConta (primeiroNumero, segundoNumero) {
//     let conta = primeiroNumero + segundoNumero;
//     return conta;
// }

// // fazConta(2, 3);

// console.log(fazConta(2, 3));

// function frontDoorResponse(line) {
    
//     return line[0];
// }


// console.log(frontDoorResponse('stay'));
// console.log(frontDoorResponse('weller'));