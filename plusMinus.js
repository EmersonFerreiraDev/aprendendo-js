function plusMinus(arr) {
    let positivos = 0;
    let negativos = 0;
    let zero = 0;
     
      for(let index = 0; index < arr.length; index += 1){
        if(arr[index] > 0){
          positivos += 1
        }
        else if(arr[index] < 0){
         negativos += 1
        }
        else{zero += 1}
      }
      const total = arr.length;
      console.log((positivos / total).toFixed(6));
      console.log((negativos / total).toFixed(6));
      console.log((zero / total).toFixed(6));
}
plusMinus([-1, 3, -9, -6, 0, 2]);