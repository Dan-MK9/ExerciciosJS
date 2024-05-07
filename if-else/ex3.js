//Exercício 3: Ímpar ou par
//Faça um programa que receba um número do usuário e informe se este número é par ou
//ímpar.

let number = prompt("Digite um número.");

let total=number/2;

if(number & 1){
    alert("Impar");
} else {
    alert("par");
}

// O operador & é usado aqui como uma operação de bitwise AND 
// para verificar se o último bit do número é 1, indicando que o número é ímpar.

// A explicação em exemplo para este operador (bitwise AND):

// 1
// 00000001

// 2
// 00000010

// 3
// 00000011

// 4
// 00000100

// 5
// 00000101

// 6
// 00000110