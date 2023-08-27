module.exports = function reverse (n) {
    const digits = String(n).split('');
    const reversedDigits = digits.reverse();
    return parseInt(reversedDigits.join(''), 10);
}
