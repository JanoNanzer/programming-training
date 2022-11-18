// const getOddNumbers = (number1, number2) => {
//     let result = [];
//     for (let i = number1; i <= number2; i++) { //while(number1 < number2)
//         if (i % 2 !== 0) {
//             result.push(i);
//         }
        
//         // number1++
//     }

//     const howManyoddNumbersAre = result.length;
//     return howManyoddNumbersAre;
// }

// Comentado en el ejercicio hay otras opciones que se pueden tomar dentro del bucle si queremos usar un while

const getOddNumbers = (n1, n2) => {
    let contador = n1
    let numImpares = 0
    while(contador < n2){
        if(contador % 2 !== 0){
            numImpares++
        }
        contador++
    }
    return numImpares
}

module.exports = getOddNumbers;
