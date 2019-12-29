function isBigger(x, y) {
    return (x > y);
}
function isSmaller(x, y) {
    return isBigger(y, x);
}
let x = 5;
let y = 10;
isSmaller(x, y);