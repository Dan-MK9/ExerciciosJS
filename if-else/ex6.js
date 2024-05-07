// Exercício 6: Verificação de idade
// Escreva um programa que solicita o ano de nascimento de uma pessoa e verifica se ela é maior
// de 18 anos. Exiba uma mensagem indicando se a pessoa é maior de idade ou não.

let ano = parseInt (prompt ("Digite o seu ano de nascimento"))

let idade = (2024 - ano)


if (idade >= 18) {
    alert ("Você é maior de idade.");
} else {
    alert ("Você NÃO é maior de idade");
}
