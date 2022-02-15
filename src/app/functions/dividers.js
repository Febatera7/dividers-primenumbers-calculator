/* eslint-disable no-plusplus */
module.exports = function dividers(num) {
    const divedersNumbers = [];
    const primeNumbers = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            divedersNumbers.push(i);
        }
    };

    divedersNumbers.forEach(number => {
        for (let d = 2; d < number; d++)
            if (number % d === 0) return false;
        return primeNumbers.push(number);
    });

    return {
        divedersNumbers,
        primeNumbers,
    };
};
