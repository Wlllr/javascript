// FUNCTIONS

const todo = {
    add: function(){
        console.log("Add todo...");
    },
    delete: function(){
        console.log("delete todo...");
    },
    retrieve: function(){
        console.log("retreive todo...");
    }
}

todo.add();
todo.delete();
todo.retrieve();

const square = function(x){
    return x*x;
}
console.log(square(6));

function greet(nome){
    return "hello " + nome;
}

console.log(greet("Weller"))

// loops 

for(i = 0; i < 10; i++){
    if(i === 5){
        console.log("number 5 is my favorite")
        continue; 
    }
    console.log(i)

}

const cars = ["Ford","Chevy","Honda","Toyota"]

cars.forEach(function(car , index){
    console.log(`${index} : ${car}`)
});




function myFunction(p1,p2){
    return p1 * p2;
}

console.log(myFunction(15,3))
console.log(myFunction(4,3))

function toCelcius(fahrenheit) {
    return (5/9) * (fahrenheit - 32);
}

console.log(`the result is ${toCelcius(77)}`);
console.log(toCelcius(135))

console.log(toCelcius)

let text = `the temperature is ${toCelcius(74)} Celcius`;
console.log(text)

function greet(name){
    return (`Hello World! ${name}`);
}

console.log(greet("Weller"))

const car = {
    type: "Fiat",
    model: "500",
    color: "white"
};

console.log(car)

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 46,
    eyeColor: "brown",
    city: "Seattle",
    fullName: function () {
        return (this.firstName + " " + this.lastName);
    }
};
console.log(person)
console.log(person.lastName)
console.log(person.city)
console.log(person.age)
console.log(person.fullName())

