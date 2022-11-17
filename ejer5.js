// const porcentajeCalculator = (percent, number) => {
//     const result = (number * (percent/100));
//     return result;
// }

const porcentajeCalculator = (percent, number) => {
    let porcentaje = (number * 100) / percent
    return porcentaje
}

module.exports = porcentajeCalculator;
