function countNumbers(anyString) {
    let digitsFromString = '';
    let i = 0;
    for (i = 0; i < anyString.length; i++) {
        let currentChar = anyString.substring(i, i + 1);
        currentChar = parseInt(currentChar, 10);
        if (Number.isInteger(currentChar)) {
            digitsFromString = digitsFromString + currentChar.toString();
        } else {
            continue;
        }
    }
    // The ABOVE code extracts all digits from a string and makes a new string composed of these digits only (by excluding other characters).
    // The BELOW code comprises 1 primary and 1 nested loop. 
    // In these 2 loops each of the ordinal numbers from 0 to 9 is compared to each digit from a string. 
    // The comparison functions as follows: first, '0' is compared to each digit from the string one by one, then '1' is compared 
    // to each digit from the string, etc.
    // The number of occurances of each digit in the string is counted with the 'count' variable.
    let finalObject = {};
    let count;
    for (let ordinalNumber = 0; ordinalNumber < 10; ordinalNumber++) {
        count = 0;
        for (i = 0; i < digitsFromString.length; i++) {
            if (ordinalNumber === parseInt(digitsFromString[i])) {
                finalObject['\'' + ordinalNumber.toString() + '\''] = count + 1;
                count++;
            } else {
                continue;
            }
        } 
    }
    return finalObject;
}
countNumbers('1a2d3h231cdsdf9812');