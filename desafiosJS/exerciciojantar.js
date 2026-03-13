// EXERCÍCIO 2 - Página 41 do livro de lógica de programação e algorítimos com JavaScript de Edécio Iepsen

// Elaborar um programa que leia o valor de um jantar. Calcule e informe o valor da taxa do garçom (10%)
// e o valor total a ser pago.
// EXEMPLO: 
//Valor do jantar: R$80,00
// Taxa do garçom: R$8,00
// Total a pagar: R$88,00

let valorjantar = 80;
let taxagarçom = 10;
let total = 0;

total = valorjantar + ((taxagarçom / 100) * valorjantar);

//Gambiarra
//console.log ("Valor do jantar: R$" + valorjantar + ",00") 
//Isso é meio gambiarra pois é mais complicado, o certo caso precise adicionar
//algo no final da frase seria com o uso de ( `` )

//Forma "correta"
console.log(`Valor do jantar: R$${valorjantar},00`);

//Porcentagem do garçom
console.log(`Taxa do Garçom: R$${(taxagarçom / 100) * valorjantar},00`);

// O total a pagar
console.log(`Total a Pagar: R$${total},00`);