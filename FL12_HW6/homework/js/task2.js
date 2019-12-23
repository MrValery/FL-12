let a = +prompt('Please enter the first side of triangle:');
let b = +prompt('Please enter the second side of triangle:');
let c = +prompt('Please enter the third side of triangle:');
if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert('Input values should be ONLY numbers');
} else if (a <= 0 || b <= 0 || c <= 0) {
    alert('A triangle must have 3 sides with a positive definite length');
} else if (a + b <= c || a + c <= b || b + c <= a) {
    alert('Triangle doesn’t exist');
} else if (a === b && b === c) {
    console.log('Equilateral triangle. Each side of triangle is equal to ' + a);
} else if (a === b || b === c || a === c) {
    console.log('Isosceles triangle: side a = ' + a + '; side b = ' + b + '; side c = ' + c);
} else if (a !== b && a !== c && b !== c) {
    console.log('Scalene triangle: side a = ' + a + '; side b = ' + b + '; side c = ' + c);
}