// Boas práticas
// Case sensitive
// Sintaxe básica e comentário
// Declaração de variáveis(var, let, const)
let nome = 'Henrique'
let idade = 34

// Console e Debug
console.log(nome)
console.log(idade)
nome = 'Arthur'
idade = "6"
console.log(nome, idade)

// Tipos de dados
// texto == string
let cidade = "Americana"

// numérico == number
let salario = 1500.35

// booleano == boolean
let fumante = false

console.log(typeof cidade)
console.log(typeof salario)
console.log(typeof fumante)

// Operadores
//     Operador Atribuição ( = )
//     Operadores aritméticos ( +, -, /, *)
console.log(10 + 5)

let n1 = 10, n2 = 5

console.log("soma", n1 + n2) // soma
console.log("subtração", n1 - n2) // subtração
console.log("multiplicação", n1 * n2) // multiplicação
console.log("divisão", n1 / n2) // divisão
console.log("módulo", n1 % n2) // módulo

//     Operadores relacionais8 ( >, <, >=, <=, !=, ==)
console.log(n1 == n2) // igualdade
console.log(n1 != n2) // diferente
console.log(n1 > n2) // maior
console.log(10 < 10) // menor
console.log(10 <= 10) // menor ou igual
console.log(150 >= 175) // maior ou igual

//     Operadores lógicos (!, &&, ||)
console.log(!10 > 2) 
console.log(!false)

console.log(10 > 2 && 35 < 100 && n1 > n2 && 100 < 90) // E - todas as verificações precisam ser verdadeiras para o resultado ser verdadeiro
console.log(10 < 2 || 100 == 150 || 57 == 57) // OU - apenas uma verificação precisa ser verdadeira para o resultado ser verdadeiro, o resultado só será falso quando TODAS as verificações forem falsas

// DESAFIO
let preco = 100
let precoAcrescimo = 0
let precoDesconto = 0
// faça um código que acrescente 17% ao preço e imprima

precoAcrescimo = preco + preco * 0.17
console.log(precoAcrescimo)
console.log("Preço com acréscimo: " + precoAcrescimo.toFixed(2))

// faça um código que desconte 7% do preço e imprima

precoDesconto = preco - preco * 0.07
console.log(precoDesconto)
console.log("Preço com desconto: " + precoDesconto.toFixed(2))

// Estrutura
//     Estrutura de controle/decisão
if ( 10 > 100 ) {
    console.log("10 é maior que 5")
} else {
    console.log("10 é menor que 100")
}

let idadeDoCandidato = 20
if (idadeDoCandidato >= 18) {
    console.log("Pode dirigir")
} else {
    console.log("Volte mais tarde")
}

let salarioFunc = 3000
// DESAFIO
// faça um código que verifique se o salário do funcionário é maior que 5000, se for mostre a mensagem "salário OK" se não mostre a mensagem "Precisa de um aumento de x reais"

if (salarioFunc > 5000) {
    console.log("Salário OK")
} else {
    console.log("Precisa de aumento de R$ " + (5000 - salarioFunc).toFixed(2).replace(".",",") + " reais.")
}

//     Laços de repetição

let controle = 11
while(controle <= 10){
    controle = controle + 1
    console.log("Senac Americana")
}

controle = 1 // definição da variável de controle
while(controle <= 100){ // condição
    console.log(controle)
    controle = controle + 2 // incremento
}

// mostrar 10 vezes "Senac Americana"

for(let i = 1; i <= 10; i++) {
    console.log("Senac Americana")
}

for(let i = 1; i <= 50; i = i + 1) {
    console.log(i)
    iii += "i"
}

// Arrays 

// Funções básicas
// Escopo

// Alterar conteúdo e atributos *
// incluir js em página html *
// Eventos *
// DOM *
// Objeto
// parâmetros e retorno*

// Programação assíncrona***
// API Fetch ***

// JSON ****
// funções modernas (arrow functions) ****


// Spread e REST  ************
 