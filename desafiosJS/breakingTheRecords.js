function breakingRecords(scores) {

    let max = scores[0];
    let min = scores[0];
    let countMax = 0;
    let countMin = 0;

    for(let index = 0; index < scores.length; index += 1){
        if(scores[index] > max){
            max = scores[index];
            countMax += 1;
        };

    if(scores[index] < min){
            min = scores[index];
            countMin += 1;        
    };
}
}