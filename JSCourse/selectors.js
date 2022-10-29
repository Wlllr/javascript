// // document.getElementById()

// console.log(document.getElementById('task-title'));

// // get things from the element

// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);


// const taskTitle = document.getElementById('task-title');

// // chage styling

// taskTitle.style.background = '#333';
// taskTitle.style.color = '#fff';
// taskTitle.style.padding = '5px';
// // document.getElementById('task-title').style.display = 'none';

// // change the content

// taskTitle.textContent = 'Hello Weller';
// taskTitle.innerText = 'My tasks';
// taskTitle.innerHTML = '<span style ="color: red">Task List</span>';

// document.querySelector() 

// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5'));

// document.querySelector('li').style.color = 'red';
// document.querySelector('ul li').style.color = 'blue';

// document.querySelector('li:last-child').style.color = 'red';
// document.querySelector('li:nth-child(3)').style.color = 'yellow';
// document.querySelector('li:nth-child(4)').textContent = 'Hello World';
// document.querySelector('li:nth-child(odd)').style.background = '#ccc';
// document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';


// document.getElementsByClassName

// const items = document.getElementsByClassName('collection-item');
// // Aqui vai ver os collection-item de maneira global


// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';
// items[3].textContent = 'Hello';


// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// // Aqui so vai ver os collection-item dentro dessa ul


// console.log(listItems); 

// document.getElementByTagName

// let lis = document.getElementsByTagName('div');
// console.log(lis);
// console.log(lis[0]);

// // Convert HTML Collection into Array

// lis = Array.from(lis);

// lis.reverse();

// lis.forEach(function(li) {
//     console.log(li.className)
// });



// console.log(lis);

// document.querySelectorAll()

const items = document.querySelectorAll('ul.collection li.collection-item');

console.log(items);