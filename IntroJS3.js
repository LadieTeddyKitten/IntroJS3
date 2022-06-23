/* Actividad 3 => Con ayuda de ciclos imprime los primeros 50 números de la sucesión de Fibonacci   */

console.clear();

console.log(' \n Programa que imprime los 50 primeros números de la sucesión de Fibonacci \n');

let valor1 = 0; 
let valor2 = 1; 
let valor3;


for (let i = 1; i <= 50; i++) {
    console.log(valor1);
    valor3 = valor1 + valor2;
    valor1 = valor2;
    valor2 = valor3;
}
