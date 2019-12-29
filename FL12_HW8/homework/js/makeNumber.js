function makeNumber(anyString) {
    let currentString = '';
    for (let i = 0; i < (anyString.length - 1); i++) {
        let currentChar = anyString.substring(i, i + 1);
        currentChar = parseInt(currentChar, 10);
        if (Number.isInteger(currentChar)) {
            currentString = currentString + currentChar.toString();
        } else {
            continue;
        }
    }
    return currentString;
}
let anyString = '2234l;5k2j345klj23;l45kj2344l5kj23;l54kj23;4l5kj423;l54k3j'
makeNumber(anyString);