function primeiraPalavra(letra1) {
    //primeira parte do exercicio
    return letra1.charAt([0]);
}

// function segundaPalavra(letra2) {
//     return letra2[1];
// }

// function terceiraPalavra(letra3) {
//     return letra3[2];
// }

// function quartaPalavra(letra4) {
//     return letra4[3];
// }

// function quintaPalavra(letra5) {
//     return letra5[4];
// }

console.log(primeiraPalavra('Stands so high'));
console.log(primeiraPalavra('Huge hooves too'));
console.log(primeiraPalavra('Impatiently waits for'));
console.log(primeiraPalavra('Reins and harness'));
console.log(primeiraPalavra('Eager to leave'));

// function frontDoorPassword (word) {
//     return (word.charAt([0])).toUpperCase();
// }

function frontDoorPassword (word) {
    //segunda parte do exercicio
    if (word == word.toUpperCase()) {
        return (word.charAt([0]) + word.slice(1).toLowerCase());
    } else {
        return (word.charAt([0]).toUpperCase() + word.slice(1));
    }
    
}

console.log(frontDoorPassword('weller'));

// Terceira parte do exercicio

function backDoorResponse (line) {
    
    return line.charAt(line.length - 1);
    
        

    // return line.charAt(line.length - 1);


    // return line.trim();
    // if (line != line.trim()) {
    //     return line.trim();
    // } else {
    //     return line;
    // }

    // function lineLength (line) {
    //     return line.charAt(line.length - 1);
    // }
}

console.log(backDoorResponse('           Stands so high'.trim()));
console.log(backDoorResponse('Huge hooves too              '.trim()));
console.log(backDoorResponse('Impatiently waits for'.trim()));
console.log(backDoorResponse('Reins and harness'.trim()));
console.log(backDoorResponse('Eager to leave'.trim()));

// function response(line = lineTrim(line)) {
    //Isso aqui ta errado
//     function lineTrim(line) {
//         return line.trim();
//     }
//     console.log(lineTrim('stay'));
//     return line.charAt(line.length - 1);
// }

// console.log(response('stay'));

function response (line) {
    //EUREKA
    let trimed = line.trim();
    return trimed[trimed.length - 1];
    // return (line.charAt(line.length - 1));
}

console.log(response('stay'.trim()));

//Parte quatro do exercicio

// function backDoorPassword(word) {
//     if (word == word.toUpperCase()) {
//         return (word.charAt([0]) + word.slice(1).toLowerCase() + ', please');
//     } else {
//         return (word.charAt([0]).toUpperCase() + word.slice(1) + ', please');
//     }
// }

// console.log(backDoorPassword('HORSE'));