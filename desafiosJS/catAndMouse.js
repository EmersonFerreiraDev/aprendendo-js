function catAndMouse(x, y, z) {
    let A = Math.abs(x - z);
    let B = Math.abs(y - z);
    if (A < B ) {
        return "Cat A"
}
    if (A > B) {
        return "Cat B"
    }
        return "Mouse C"
}
console.log(catAndMouse(1, 2, 3)); // Cat B
console.log(catAndMouse(1, 3, 2)); // Mouse C
console.log(catAndMouse(2, 7, 8)); // Cat B