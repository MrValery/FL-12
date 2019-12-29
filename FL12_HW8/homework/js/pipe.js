function multiplyByFour(x) {
    return x * 4;
}
function divideByThree(x) {
    return x / 3;
}
function pipe() {
    let y = arguments[0];
    let i;
    for (i = 1; i < arguments.length; i++) {
        y = arguments[i](y);
    }
    return y;
}
pipe(5, multiplyByFour, divideByThree, multiplyByFour);