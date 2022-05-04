// SWITCH

let day;

switch(new Date().getDay()){
    case 0:
        day = "Domingo"
        break;
    case 1:
        day = "Segunda-feira"
        break;
    case 2:
        day = "Terca-feira"
        break;
    case 3:
        day = "Quarta-feira"
        break;
    case 4: 
        day = "Quinta-feira"
        break;
    case 5:
        day = "Sexta-feira"
        break;
    case 6:
        day = "Sabado"
        break;        

};
console.log(day);