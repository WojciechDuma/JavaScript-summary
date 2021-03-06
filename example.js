// Pobranie wszystkich zdjęć ze strony:
const img = [...document.images];

// Zamiana pseudotablicy na tablice:
const liList = document.querySelectorAll("li");
const liArray = [...liList];

// Sprawdzenie czy element ma daną klase, zwraca true lub false
h2.classList.contains("nazwaKlasy");

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

// Zwracanie wartości z określonego zakresu wersja z rekurencją:
function rangeOfNumbers(startNum, endNum) {
  let numbers = [];

  if (startNum === endNum) {
    numbers.push(startNum);
    return numbers;
  } else {
    numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}

rangeOfNumbers(5, 10); // [5,6,7,8,9,10]

/* ####################################### */

// Sprawdzanie czy wprowadzono wartość i czy nie jest undefined

if (typeof name !== "undefine") {
  // do this
} else {
  // do this
}

/* ####################################### */

// Odwrócenie napisu
const text = "abcdefgh";
text
  .split("")
  .reverse()
  .join("");

console.log(text); // "hgfedcba"

/* ####################################### */

// Recursion - sum of elements in array from 0 to n
// Tak samo można zrobić z odejmowaniem, mnożeniem i dzieleniem, zamiast znaku "+" wstawiamy inny

function sum(arr, n) {
  if (n <= 0) {
    return arr[0];
  } else {
    return sum(arr, n - 1) + arr[n];
  }
}

sum([2, 3, 4], 1); // Return 5

/* ####################################### */

// Obliczenie silni n!

const factorial = num => {
  if (num <= 1) {
    return num;
  } else {
    return num * factorial(n - 1);
  }
};

factorial(5); // 120;

/* ####################################### */

// Znalezienie najdłuższego wyrazu (liczby liter) w otrzymanym zdaniu - stringu.

const longestWord = str => {
  str = str.split(" "); // rozbicie zdania na tablice z każdym słowem oddzielnie
  let wordLength = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].length > wordLength) {
      wordLength = str[i].length;
    }
  }
  return wordLength;
};

longestWord("Jakie jest najdłuższe słowo w tym zdaniu?"); // 10

/* ####################################### */

// Zamiana każdej pierwszej litery słowa na dużą

function titleCase(str) {
  str = str.toLowerCase().split(" ");
  let result = str.map(word =>
    word.replace(word.charAt(0), word.charAt(0).toUpperCase())
  );

  return result.join(" ");
}

titleCase("Jakieś przyKŁAdowe zdanie z RÓŹNYMI liTERamI."); // Jakieś Przykładowe Zdanie Z Różnymi Literami.

/* ####################################### */

//  Sprawdzanie czy pierwsza element z tablicy ma wszystkie litery drugiego elementu

function mutation(arr) {
  let regex = new RegExp("[^" + arr[0] + "]", "ig");
  return !regex.test(arr[1]);
}

console.log(mutation(["hello", "hey"])); // false

/* ####################################### */

// Sortowanie liter alfabetycznie

function alphabeticalOrder(arr) {
  return arr.sort((a, b) => {
    return a === b ? 0 : a < b ? -1 : 1;
  });
}

alphabeticalOrder(["a", "d", "c", "a", "z", "g"]); // ["a", "a", "c", "d", "g", "z"]

/* ####################################### */

// Sortowanie liter alfabetycznie od końca

function reverseAlphabeticalOrder(arr) {
  return arr.sort((a, b) => {
    return a === b ? 0 : a < b ? 1 : -1;
  });
}

reverseAlphabeticalOrder(["a", "d", "c", "a", "z", "g"]); // ["z", "g", "d", "c", "a", "a"]

/* ####################################### */

// Sprawdzanie palindromu. Funkcja pomija wszystkie spacje i znaki specjalne
// Funkcja zwraca true albo false

function palindrome(str) {
  const original = str.toLowerCase().match(/[a-zA-Z0-9]/g);

  const copy = () => {
    let arr = [];
    for (let i = 0; i < original.length; i++) {
      arr.push(original[i]);
    }
    return arr.join("");
  };

  console.log(copy());
  console.log(original.reverse().join(""));

  if (copy() == original.reverse().join("")) {
    return true;
  } else {
    return false;
  }
}

palindrome("A man, a plan, a canal. Panama"); // return true

/* ####################################### */

// Sprawdzanie palindromu wersja 2. Funkcja pomija wszystkie spacje i znaki specjalne
// Funkcja zwraca true albo false

function palindrome(str) {
  return (
    str.replace(/[\W_]/g, "").toLowerCase() ===
    str
      .replace(/[\W_]/g, "")
      .toLowerCase()
      .split("")
      .reverse()
      .join("")
  );
}

/* ####################################### */

// https://medium.com/dailyjs/how-to-remove-array-duplicates-in-es6-5daa8789641c
// Zwrócenie nowej tablicy bez powtórzeń:

let arr = ["a", "b", "c", "a", "d", "b", "e"];

// 1
const uniqArr = [...new Set(arr)];
// ["a", "b", "c", "d", "e"]

// 2
const uniqArr2 = arr.filter((item, index) => arr.indexOf(item) === index);
// ["a", "b", "c", "d", "e"]

// 3
const uniqArr3 = arr.reduce(
  (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
  []
);
// ["a", "b", "c", "d", "e"]

/* ####################################### */

// Aby zwrócić wszystkie powtórzenia:

const duplicate = arr.filter((item, index) => arr.indexOf(item) !== index);
