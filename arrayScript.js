// ARRAYS IN JAVASCript

const friends = ["mukesh", "gautam", "cyrus"];
console.log(friends);

// output - mukesh gautam cyrus

console.log(friends[0]);
console.log(friends[2]);

// output :
//  mukesh
//  cyrus

// to find the length of the array
console.log(friends.length);

//. output 3

// to get the last element of an array
console.log(friends[friends.length - 1]);

// output - cyrus

// To mutate or Change the element of an array

friends[2] = "daud";
console.log(friends);

// output 'mukesh' 'gautam' 'cyrus'

const firstName = "Abhishek";
const detail = [firstName, "Jha", 2024 - 2001, "Student", friends];
console.log(detail);

// output - 'Abhishek', 'Jha', 23, 'Student', Array(3)

// Exercise

const calcAge4 = function (birthyearr) {
  return 2037 - birthyearr;
};

const years4 = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge4(years4[0]);
const age2 = calcAge4(years4[1]);
const age3 = calcAge4(years4[years4.length - 1]);

console.log(age1, age2, age3);

// output - 47 70 19

const ages4 = [
  calcAge4(years4[0]),
  calcAge4(years4[1]),
  calcAge4(years4[years4.length - 1]),
];
console.log(ages4);

// output - 47 70 19

// add an element in an array using push

const friend2 = ["vijay", "prakash", "yash", "disha"];
friend2.push("miya");
console.log(friend2);

// output ['vijay', 'prakash', 'yash', 'disha', 'miya']

// To add element in the starting of an array

friend2.unshift("sunny");
console.log(friend2);

// output
/* (6) ['sunny', 'vijay', 'prakash', 'yash', 'disha', 'miya']
0
: 
"sunny"
1
: 
"vijay"
2
: 
"prakash"
3
: 
"yash"
4
: 
"disha"
5
: 
"miya"
length
: 
6
[[Prototype]]
: 
Array(0)
*/

// Remove last  element from the array

friend2.pop();
console.log(friend2);

// output
/* (5) ['sunny', 'vijay', 'prakash', 'yash', 'disha']
0
: 
"sunny"
1
: 
"vijay"
2
: 
"prakash"
3
: 
"yash"
4
: 
"disha"
length
: 
5
[[Prototype]]
: 
Array(0)  */

const popped = friend2.pop();
console.log(popped);

// output - disha

// Remove first element from the array

friend2.shift();
console.log(friend2);

// output ['vijay', 'prakash', 'yash']

/// To find the index of an element in an array

console.log(friend2.indexOf("yash"));

// output - 2

// includes method -    it follows  strict equality  , because it does not do typeCoercion

friend2.push(23);
console.log(friend2.includes("yash"));
console.log(friend2.includes("sachin"));
console.log(friend2.includes("23"));

// output   true
//          false
//          false

// Includes can also be used for conditions

if (friend2.includes("yash"));
console.log("i love honest people.");

// output - i love honest people.
