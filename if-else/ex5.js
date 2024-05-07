//Exercício 5: Verificação de números em ordem crescente
//Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem
//crescente. Exibindo uma mensagem indicando se os números estão em ordem crescente ou
//não.

let num1 = prompt("Digite o primeiro número")
let num2 = prompt("Digite o segundo o número")
let num3 = prompt("Digite o terceiro número")

if (num1 < num2 && num2 < num3) {
    alert("Os números estão em ordem crescente")
} else {
    alert("Os números NÃO estão em ordem crescente")
}