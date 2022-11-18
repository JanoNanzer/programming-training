// const invertNumber = (number) => {
//     if (number > 10 && number <= 0) {
//         // si el numero se encuentra en el rango de 0 a 10, no se puede invertir
//         return number
//     }
//     else {
//         // Lo multiplicamos por su signo para conservarlo
//         const inverted = parseInt(number.toString().split('').reverse().join('')) * Math.sign(number);
//         return inverted;
//     }
// }

const invertNumber = (number) => {
    if(number > 0){    
        let num2 = number.toString().split('').reverse().join('')
        return Number(num2)
    } else {
        let num2 = number.toString().split('').reverse()
        let minus = num2.pop(num2.lenght-1)
        num2 = num2.join('')
        num2 = `${minus}${num2}`
        return Number(num2)
    }
}

module.exports = invertNumber;
