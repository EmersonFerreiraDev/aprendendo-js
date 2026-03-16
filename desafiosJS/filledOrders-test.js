function filledOrders(order, K){
    let sum = 0;
    order.sort((a, b) => a - b);
    for(let index = 0; index < order.length; index += 1) {
        if(order[index] <= K){
            sum += 1;
            K -= order[index];
        }
    }
    return sum;
}
console.log(filledOrders([10, 30, 1, 3, 4, 5, 6], 40));
