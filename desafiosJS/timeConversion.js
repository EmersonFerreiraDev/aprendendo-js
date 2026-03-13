function timeConversion(s) {
    let hours = parseInt(s[0] + s[1]);
    let minutes = s[3] + s[4];
    let seconds = s[6] + s[7];
    let ampm = s[8] + s[9];

    if (ampm === 'PM' && hours !== 12) {
        hours = hours + 12;
    }
    
    if (ampm === 'AM' && hours === 12) {
        hours = 0;
    }

    if (hours < 10) {
        return ("0" + hours + ":" + minutes + ":" + seconds);
    } else {
        return (hours + ":" + minutes + ":" + seconds);
    }
}

console.log(timeConversion('12:00:00AM'));