// 4. Faça um programa que imprima na tela a tabuada de um número
// qualquer escolhido pelo usuário até o 10.

let num = parseInt (prompt("Digite um numero para a tabuada"))

if(!isNaN(num)){

    for (let nx = 1; nx <= 10; nx++){
        console.log(nx + " x " + nx + " = " + (nx * num))
    }

} else{
    console.log("Numero invalidade. Por favor, digite um numero valido.")
}

console.log(isNaN("Ola")) // retorna true
console.log(isNaN(123)) // retorna false


// invertendo "!"
// console.log(isNaN("Ola")) // retorna false
// console.log(isNaN(123)) // retorna true