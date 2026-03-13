let horaBrasil = 19;
let minutos = 52;
horaBrasil = horaBrasil % 24;
let HoraFranca = horaBrasil + 5;

HoraFranca >= 24 ? HoraFranca = HoraFranca - 24 : HoraFranca;

console.log(`Brasil: ${horaBrasil}:${minutos}
França:${HoraFranca}:${minutos}`);