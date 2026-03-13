function kangaroo(x1, v1, x2, v2) {
    let distanciaInicial = x2 - x1;
    let diferencaVelocidade = v1 - v2;
     if(v2 >= v1){
        return "NO";
     }
     if(distanciaInicial % diferencaVelocidade === 0){
        return "YES"
     }
     return "NO";

}