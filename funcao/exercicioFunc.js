let opcao = true;

while (opcao) {
    let menu = prompt("Digite 0 para sair. \n\nMENU DE EXERCICÍOS\n\n Digite uma opção: \n1 - CÁLCULO DE IMC: \n2 - DIA DA SEMANA: \n3 - ANO DE NASCIMENTO: \n4 - CONTAGEM REGRESSIVA: \n5 - NÚMERO IMPAR OU PAR: \n6 - SEQUÊNCIA FIBONACCI:")

    if (isNaN(menu)) {
        console.log("Digite números")
        continue
    }

    switch (menu) {
        case 0:
            console.log("Digite 0 para sair.")
            opcao = false
            break;
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

        default: console.log("Valor incorreto.")
            break;
    }
}

function ex1() {
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

function ex3(){
    while (true){
        let idade = parseInt(prompt("Digite a sua idade: "));
        if (idade >= 18) {
            console.log ("Você é de maior, sua idade é: " + idade)
            break
        }
    }
}