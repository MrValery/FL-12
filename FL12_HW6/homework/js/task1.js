let a = prompt('Please enter the coefficient \'a\'\nof the following quadratic equation:\n   ax\u00B2 + bx + c.');
alert('You have entered the following \'a\' value: ' + a);
let b = prompt('Please enter the coefficient \'b\'\nof the following quadratic equation:\n   ax\u00B2 + bx + c.');
alert('You have entered the following \'b\' value: ' + b);
let c = prompt('Please enter the coefficient \'c\'\nof the following quadratic equation:\n   ax\u00B2 + bx + c.');
alert('You have entered the following \'c\' value: ' + c);
if (isNaN(a) || isNaN(b) || isNaN(c) || a === 0 || !a || !b || !c) {
    console.log('Invalid input data'); 
} else {
      let x, x1, x2, D;
      console.log(a + 'x\u00B2 + ' + b + 'x + ' + c + ' = 0' );
      D = b * b - 4 * a * c;
      if (D < 0) {
        console.log('No solution (Discriminant < 0)'); 
        } else if (D === 0) {
            x = -b / (2 * a);
            console.log('Discriminant = 0, x = ' + Math.round(x)); 
            } else {
            x1 = (-b + Math.sqrt(D))/(2 * a);
            x2 = (-b - Math.sqrt(D))/(2 * a);
            console.log('x\u2081 = ' + Math.round(x1) + ' and x\u2082 = ' + Math.round(x2)); 
    }
}