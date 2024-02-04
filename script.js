//? template string

// let age = 84;
// let firstName = "mina"

// let sentence  =  `Hi, this is ${firstName}, I'm ${age}`

// console.log(sentence);

//? string method

// let sentence  =  "Hi, this is Alireza, I'm 25"

// console.log(sentence.toLowerCase());

//?  function

// function great(a, b) {
//   console.log(a + b);
// }

// great(2, 3);

//? arrow function

// const sum = (a, b) => {
//   return a + b;
// };

// console.log(sum(2, 3));

//! scope

// const str = "ali";
// {
//   const str = "reza";
// }
// console.log(str);

// Array

// let myClass = ["Mahnaz", "Mina", " Ali", "Zahra", "Mamad"];

// console.log(myClass.join(" , "));
// console.log(myClass);
// console.log(typeof myClass.toString());

// myClass[5] = "Alireza";
// myClass.push("javad")
// console.log(myClass);
// myClass.pop()
// console.log(myClass);

// console.log(myClass[0]);

// Array method

//? join()
// console.log(myClass.join())

//? concat()

//? splice

// console.log(myClass.splice(1,1))
// myClass.splice(1, 2, "Omid", "Taghi");
// console.log(myClass)

//? slice

//? indexof

const num = [1, 2, 3, 4, 5, 6];

//! forEach

// num.forEach((n) => {
//   if (n % 2 == 0) {
//     console.log(n * 5);
//   }
// });

//! map
//  num.map((n) => {
//   if (n % 2 == 0) {
//     console.log(n * 5);
//   }
// });

//! filter

//? object

const person = {
  firstName: "alireza",
  lastName: "Mehrzad",
  age: 25,
  isMarried: true,
  childName: ["mina", " faezeh"],
  firstChild: {
    fullName: "mani borhani",
  },
};

// console.log(person.age);
// console.log(person.isMarried);
// console.log(person.firstChild.fullName);

let myClass = ["Mahnaz", "Mina", " Ali", "Zahra", "Mamad"];

console.log(myClass);
