// Criar um sistema que aprove ou reprove alunos com base nas notas!! Bora seu bosta cria essa porra logo

// Aqui eu tinha criado tudo usando notas <0 && notas >5, oq não é tão necessário pois você pode simplificar mais ainda

function sistemadeNotas (notas) {
    if (notas < 0 || notas > 10) return 'nota inválida';
    if (notas <5) {
        return 'reprovado otário';
    }
    if (notas <7) {
        return 'recuperação';   
    }
        return 'aprovado' ;
}
let resultado = sistemadeNotas (9)
console.log(resultado);