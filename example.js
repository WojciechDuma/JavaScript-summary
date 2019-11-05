// Pobranie wszystkich zdjęć ze strony:
const img = [...document.images];

// Zamiana pseudotablicy na tablice:
const liList = document.querySelectorAll('li');
const liArray = [...liList];

// Sprawdzenie czy element ma daną klase, zwraca true lub false
h2.classList.contains('nazwaKlasy');

// Sprawdzenie czy przescrolowaliśmy do samego dołu strony
if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
  // You reach the bottom
}

/* ####################################### */

// Funkcja zwraca wartości większe niż n
let n = 20;
let arr = [1, 4, 10, 30, 0, 67, 39, -7, -10, 28];

let moreThanN = arr.filter(value => value > n);

/* ####################################### */

// Dodanie wszystkich podanych liczb

// 1. Operator arguments:
const addAllNumbers = function() {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
};

const myNumbers = addAllNumbers(20, 50, 100, 100, 200);

// 2. Operator rest:
const addAllNumbers2 = function(...numbers) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return result;
};

const myNumbers2 = addAllNumbers2(20, 50, 100, 100, 200);

// 3. Z użyciem reduce
const addNumber = (...numbers) => {
  return numbers.reduce((sum, value) => sum + value);
};

// Tak samo można zrobić z odejmowaniem, mnożeniem i dzieleniem, zamiast znaku "+" wstawiamy inny

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

/* ####################################### */

// Odwrócenie napisu
const text = 'abcdefgh';
text
  .split('')
  .reverse()
  .join('');

console.log(text); // "hgfedcba"
