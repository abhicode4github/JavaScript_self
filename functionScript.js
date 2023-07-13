// functions

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}
console.log(fruitProcessor(5, 4));

// Output:
// Juice with 5 apples and 4 oranges

// Function Declaration   - we can call a function before its declaration also

function calcAge(birthYear) {
  return 2030 - birthYear;
}
const Age1 = calcAge(2001);
console.log(Age1);

// output - 29

// Anonymous function(function expression)  but we cannot call a function expression before its initilaization

const calcAge2 = function (birthYear) {
  return 2030 - birthYear;
};

const Age2 = calcAge2(2001);
console.log(Age2);

// output - 29

// Arrow function - arrow functions provides us with 'this' functionalities which is not present
//                   other types of functions.

const calcAge3 = (birthYear) => 2037 - birthYear;
const Age3 = calcAge3(2001);
console.log(Age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2024 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(2001, "Abhishek"));
console.log(yearsUntilRetirement(1985, "monu"));

// output:
// Abhishek retires in 42 years.
// monu retires in 26 years.

// Function Calling Other function

function cutFruitPieces(fruit) {
  return fruit * 6;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  return `Fruit Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
}

const final = fruitProcessor(4, 5);
console.log(final);

// Fruit Juice with 24 pieces of apple and 30 pieces of orange.

// example

const newcalcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntillRetirement = function (birthYear, firstName) {
  const age = newcalcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years.`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
};

console.log(yearsUntillRetirement(1991, "jonas"));
console.log(yearsUntillRetirement(1950, "carlos"));

// Output :-

// jonas retires in 19 years.
// 19

// carlos has already retired.
// -1
