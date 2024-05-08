// 5. Imprimir os primeiros 10 números da sequência de Fibonacci.

let numA = 0
let numB = 1
let numC 

for(let contador = 0; contador < 10; contador++){
    console.log(numA)

    numC = numA + numB
    numA = numB
    numB = numC
}