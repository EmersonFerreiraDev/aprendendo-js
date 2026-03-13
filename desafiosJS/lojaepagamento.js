// EXERCÍCIO 3 - Página 45 do livro Lógica de programação e algoritimos com JS de Edécio Iepsen 

// Elaborar um programa pra uma loja, o qual leia o preço de um produto e informe as opções de pagamento da loja.
//  Calcule e informe o valor para pagamento á vista com 10% de desconto e o valor em 3x.
//EXEMPLO:                                                                                                                    Preço: R$60,00 
// À vista: R$54.00
// Ou 3x de R$20,00


//Não nomeia como produto cabeçudo do caralho, SOMENTE AS OPÇÕES DE PAGAMENTO!!!! 
// coloca o preço cheio, o com desconto a vista que nesse caso é de 10% e o parcelado 
let preco = 60;
let aVista = 50;
let totalAVista = 0;

totalAVista = (preco - (aVista / 100) * preco);

console.log(`Preço: R$${preco},00`);

console.log(`À vista: R$${totalAVista},00`);

console.log(`Ou 3x de: R$${preco/3},00`);