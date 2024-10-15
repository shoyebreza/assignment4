
function checkDigitsInName(name) {
    if (typeof name !=='string') {
        return "Invalid Input";
    }
    let isDigit = /\d/.test(name);
    return isDigit;
}