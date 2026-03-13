function simpleArraySum(ar) {
    let soma = 0;
    //laço de repetição
    for (let index = 0;
      //Esse é o loop, significa que enquanto o index (que são as posições) forem menores que o ar.length ele
      //  prosseguirá, quando igualar irá parar
       index < ar.length;
      //aqui isso significa que o index irá receber ele mesmo + 1, ou seja, se era 0 vira 1, 1 vira 2, 2 vira 3 etc...
      // é somente o contador andando basicamente, sem isso o loop travaria no 0.
       index += 1)
       //agora tudo que está dentro dessa chave é o que vai acontecer quando o loop rodar. Aqui ele pega o valor
       //  que tem em soma, pega o valor da posição atual do array, junta os dois e guarda de novo em soma, o soma = 0
       //  é como se fosse o "total" da conta
       {
      soma = soma + ar[index];
    }
    //Aqui fecha tudo, esse comando diz "terminou tudo?? então toma ai o resultado final".
    return soma;
  };
                        //isso é o array
console.log( simpleArraySum ([1, 2, 3]));
// o index são as posições,  (0, 1, 2) ar.length é a contagem de elementos dentro do array,
//então enquanto for menor que 3 irá prosseguir, esse é o laço de repetição!!
//O valor guardado dentro de cada posição são medidos pelo ar[index] isso sim mostra o valor digitado em cada posição
//Então o ar[index] que irá ver "okay, na posição 0 tem o valor x, na posição 1 tem valor y, e na posição
// 3 tem valor z".