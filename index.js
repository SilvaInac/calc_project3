const Calculadora = require('./src/cal');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

function Example(){
    let somador = Calculadora.somar(2,3);
    let subtrator = Calculadora.subtrair(3,1);
    let multiplicador = Calculadora.multiplicar(2,3);
    let divisor = Calculadora.dividir(6,2);
    let potencia = Calculadora.elevar(2,3);
    
    console.log(somador)
    console.log(subtrator)
    console.log(multiplicador)
    console.log(divisor)
    console.log(potencia)
}

console.log("Entre com número para realizar operação:\n 1 - Exemplo \n 2 - Somar \n 3 - Subtrair \n 4 - Multiplicar")
console.log(" 5 - Dividir\n 6 - Elevar")

var inputUser;
rl.question("",(inputUser));

console.log(inputUser)

if(inputUser == 1){
    Example();
}
else if(inputUser == 2){
    var A = rl.question("Valor A :");
    var B = rl.question("Valor B :");
    var result = Calculadora.somar(A,B);
    console.log("Resultado:",result);
}
else if(inputUser == 3){
    var A = rl.question("Valor A :");
    var B = rl.question("Valor B :");
    var result = Calculadora.subtrair(A,B);
    console.log("Resultado:",result);
}
else if(inputUser == 4){
    var A = rl.question("Valor A :");
    var B = rl.question("Valor B :");
    var result = Calculadora.multiplicar(A,B);
    console.log("Resultado:",result);
}
else if(inputUser == 5){
    var A = rl.question("Valor A :");
    var B = rl.question("Valor B :");
    var result = Calculadora.dividir(A,B);
    console.log("Resultado:",result);
}
else if(inputUser == 6){
    var A = rl.question("Valor A :");
    var B = rl.question("Valor B :");
    var result = Calculadora.elevar(A,B);
    console.log("Resultado:",result);
}

Example();




