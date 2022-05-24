// Create element
const p = document.createElement("span");
const sobrenome = document.createElement('span');

//Add id
p.id = "new-item";
sobrenome.id = 'sobrenome'

//add attribute
p.setAttribute('title', 'New item');
sobrenome.setAttribute('title' , 'Second item')

//create text node and append
p.appendChild(document.createTextNode('Weller'));
sobrenome.appendChild(document.createTextNode(' Pereira'));

//append p as child to div
document.querySelector('.aqui').appendChild(p);
document.querySelector('.aqui').appendChild(sobrenome);
