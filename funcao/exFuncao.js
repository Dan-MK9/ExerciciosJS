//Fazer um menu de exercícios utilizando exemplos dado em aula. Criar um menu, onde é possível executar 6 dos exercícios anteriores.
//Cada exercício deve ser encapsulado em uma função, e o menu deve executar essas funções.
//O usuário poderá escolher qual exercício ele quer visualizar.
//O usuário deverá digitar 0 para sair do menu.  

function ex1() {
    console.log("Exercício 1: ");
    let peso = parseFloat(prompt("Informe o seu peso (em kg): "));

    let altura = parseFloat(prompt("Informe o seu altura (em metros): "));

    let imc = peso / (altura * altura);

    console.log("Seu IMC é:" + imc.toFixed(2));

    if (imc < 18.5) {
        console.log("Abaixo do peso");
    }

    else if (imc >= 18.5 && imc <= 24.9) {
        console.log("Peso normal");
    }

    else if (imc >= 25.0 && imc <= 29.9) {
        console.log("Sobrepeso");
    }

    else if (imc >= 30.0 && imc <= 34.9) {
        console.log("Obsidade grau 1");
    }

    else if (imc >= 35.0 && imc <= 39.9) {
        console.log("Obsidade grau 2");
    }

    else {
        console.log("Obsidade grau 3");
    }
}

function ex2() {
    let number = prompt("Digite um número que represente um dia da semana.")

    switch (number) {
        case "1":
            console.log("Segunda-feira");
            break;

        case "2":
            console.log("Terça-feira");
            break;

        case "3":
            console.log("Quarta-feira");;
            break;

        case "4":
            console.log("Quinta-feira");
            break;

        case "5":
            console.log("Sexta-feira");
            break;

        case "6":
            console.log("Sabado");
            break

        case "7":
            console.log("Domingo");
            break;
    }
}

function ex3() {
    while (true) {
        let idade = parseInt(prompt("Digite a sua idade: "));
        if (idade >= 18) {
            console.log("Você é de maior, sua idade é: " + idade)
            break
        }
    }
}

function ex4() {
    let num = parseInt(prompt("Digite um numero: "))

    while (num >= 0) {
        console.log(num)
        num--
    }
}

function ex5() {
    let number = prompt("Digite um número.");

    let total = number / 2;

    if (number & 1) {
        alert("Impar");
    } else {
        alert("par");
    }
}

function ex6() {
    let numA = 0
    let numB = 1
    let numC

    for (let contador = 0; contador < 10; contador++) {
        console.log(numA)

        numC = numA + numB
        numA = numB
        numB = numC
    }
}

function mostrarMenu() {
    do {
        opcao = parseInt(prompt("Digite uma opção: \n1 - CÁLCULO DE IMC: \n2 - DIA DA SEMANA: \n3 - ANO DE NASCIMENTO: \n4 - CONTAGEM REGRESSIVA: \n5 - NÚMERO IMPAR OU PAR: \n6 - SEQUÊNCIA FIBONACCI: \n\n - Digite 0 para sair. "))

        switch (opcao) {
            case 1:
                ex1()
                break;

            case 2:
                ex2()
                break;

            case 3:
                ex3()
                break;

            case 4:
                ex4()
                break;

            case 5:
                ex5()
                break;

            case 6:
                ex6()
                break;

            case 0:
                console.log("Você será lembrado. 😾\n Iremos te achar! ☠️")
                break;

            default:
                console.log("Opção invalida. Tente novamente.")
        }
    } while (opcao !== 0);
}

mostrarMenu ();