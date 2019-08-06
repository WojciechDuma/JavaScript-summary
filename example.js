// Funkcja zwraca wartości większe niż n
let n = 20;
let arr = [1, 4, 10, 30, 0, 67, 39, -7, -10, 28];

let moreThanN = arr.filter(value => value > n);

/* ####################################### */

// Dodanie wszystkich podanych liczb

// Operator arguments:
const addAllNumbers = function () {
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}

const myMoneyArg = addAllNumbers(20, 50, 100, 100, 200);

//Operator rest:
const addAllNumbers2 = function (...numbers) {
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }
    return result;
}

const myMoneyRest = addAllNumbers2(20, 50, 100, 100, 200);

/* ####################################### */

// Zwracanie wartości z określonego zakresu:
function* range(from, to) {
    while (from <= to) {
        yield from++;
    }
}
for (let value of range(5, 10)) {
    console.log(value); // 5,6,7,8,9,10
}

/* ####################################### */

// Sprawdzanie czy wprowadzono wartość i czy nie jest undefined

if (typeof name !== 'undefine') {
    // do this
} else {
    // do this
}