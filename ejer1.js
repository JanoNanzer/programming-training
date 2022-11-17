// const multiplyTable = (number) => {
//     let result = "";

//     for (let i = 1; i <= 10; i++){
//         var operation = i*number;
//         result += `${i} x ${number} = ${operation} `
//     }

//     return result;
// }

const multiplyTable = (number) => {
  let answer = "";
  for (let i = 1; i <= 10; i++) {
    answer += `${i} x ${number} = ${i * number} `;
  }
  return answer;
};

// Exportamos para los tests
module.exports = multiplyTable;
