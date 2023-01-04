/* VARIABLES */

// let dogName = "Frank";

let dogOwner = "Weller"; dogName = "Frank"; dogAge = 4;

console.log(dogOwner, dogName, dogAge);

dogOwner = "Yuri";
/*Variables can change values. They exclude the old value, and the new one remains*/

console.log(dogOwner);

const dogLove = "Forever";
console.log(dogLove);

// let scoops = 5;

// while (scoops > 0) {
//     document.write("Another scoop!<br>");
//     scoops = scoops - 1;
// }
// document.write("Life without ice cream isn't the same");

let scoops = 4;

if (scoops >= 5) {
    alert("Eat faster the ice cream is going to melt!");
} else if (scoops == 3) {
    alert("Ice cream running low!");
} else if (scoops == 2) {
    alert("Going once");
} else if (scoops == 1) {
    alert("Going twice");
} else if (scoops == 0) {
    alert("Gone!");
} else {
    alert("Still lots of ice cream left, come and get it");    
}