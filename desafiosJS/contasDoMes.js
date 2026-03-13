let salario = 2480;
let gastos = {
    'Aluguel' : 800,
    'Água' : 45,
    'luz' : 90,
    'internet' : 120,
};

const total = Object.values(gastos).reduce((a, b) => a + b); 
console.log(`O salário é igual a: R$${salario},00
Total de gastos: R$${total},00
Saldo atual: R$${salario - total},00`);
