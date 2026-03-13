// A idade é 20 anos, se for MENOR QUE 18 mostrar "Idade não permitida" se for igual ou superior a 18 mostrars "pode entrar"
function compararIdade (idade) {
    if (idade >= 0 && idade <= 12
) {
    console.log('criança');
    } else if (
        idade >=13 && idade <= 17
    ) {
        console.log('adolescente');
    } else if (
        idade >=18 && idade <=59
    ) {
        console.log('adulto');
    } else {
        console.log('idoso');
        
    }
}
compararIdade(27);