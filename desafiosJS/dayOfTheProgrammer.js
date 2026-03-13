function dayOfProgrammer(year) {

    // Fora do intervalo permitido
    if (year < 1700 || year > 2700) {
        return `please, input a year between 1700 and 2700.`;
    }

    // Ano da transição na Rússia
    if (year === 1918) {
        return `26.09.${year}`;
    }

    // Calendário Juliano (até 1917)
    if (year <= 1917) {
        if (year % 4 === 0) {
            return `12.09.${year}`;
        } else {
            return `13.09.${year}`;
        }
    }

    // Calendário Gregoriano (1919 em diante)
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return `12.09.${year}`;
    } else {
        return `13.09.${year}`;
    }
}

console.log(dayOfProgrammer(2017));