function getMin() {
    let i = 0;
    let currentMinValue = arguments[0];
    for (i = 0; i < arguments.length; i++) {
        if (currentMinValue <= arguments[i]) {
            continue;
        } else {
            currentMinValue = arguments[i];
        }
    }
    return currentMinValue;
} 
getMin(10, 20, 50, -10, -100);