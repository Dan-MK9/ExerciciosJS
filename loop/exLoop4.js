// 4. Faça um programa que imprima na tela a tabuada de um número
// qualquer escolhido pelo usuário até o 10.

let num = parseInt (prompt("Digite um numero para a tabuada"))

for (let nx = 1; nx <= 10; nx++){
    console.log(nx + " x " + nx + " = " + (nx * num))
}