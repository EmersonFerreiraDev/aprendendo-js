function bonAppetit(bill, K, b) {
let sum = 0;
let final = 0;

bill.forEach(price => sum += price);

sum = sum - bill[K];
final = sum / 2;
if(final != b){
    console.log(b - final);
} else {
    console.log(`Bon appetit`);
    
};
}

bonAppetit([72, 53, 60, 66, 90, 62, 12, 31, 36, 94], 6, 288)