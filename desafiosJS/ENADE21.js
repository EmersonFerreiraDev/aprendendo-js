let alturas = [];
function criaPessoa (num) {
    for(let index = 0; index < num; index += 1){
      alturas.push(Math.random() * (2.5 - 1.3) + 1.3);
    }
}
criaPessoa(1000);

let soma = 0;
alturas.forEach((altura) => soma += altura);

const media = soma / alturas.length;


let menorMedia = 0;
alturas.forEach((altura) => {
if(altura < media) menorMedia += 1;
});

console.log(`A menor altura será: ${(alturas.sort()[0]).toFixed(2)}`);
console.log(`A maior  altura será: ${(alturas.sort((a, b) => b - a)[0]).toFixed(2)}`);
console.log(`Pessoas com altura menor que a média: ${menorMedia}`);
console.log(`Média: ${(media).toFixed(2)}`);