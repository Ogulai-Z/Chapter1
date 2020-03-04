//function DECLARATION

// name    arguments
// function square (a,b) {
//     console.log(a*b);
// }
// square(2,2);
// square(5,5);

// function checkArg() {
//     console.log(arguments);
//     console.log(arguments[0]); ili 

// }
// checkArg('John', 20);

// //return
// function square(a,b){
//     return a * b;    //funcia vozvrawaet 
//     console.log('does not work');
// }
// const firstResult = square(2,2);
// const secondResult = square(5,5);

// console.log(firstResult, secondResult);

//example 1

// function lineShortener(str,chars = 5) {
//     let arr = [];
//     for (let i = 0; i <= chars; i++) arr.push(str[i]);
//     return arr.join('') + '...';

// }
// const longStr = ' its very long string';
// const shortStr = lineShortener(longStr);
// const secondShortStr = lineShortener ('hello its me');
// console.log(shortStr, secondShortStr);

//examole2   pustoi li massiv ili net.

// function isAmptyArray(value){
//     return Array.isArray(value) && value.length === 0;

// }
// console.log(isAmptyArray({ name: 'Jack'}));
// console.log(isAmptyArray([]));

// 2 vid zapisi function expression  eto anonimnaya funciya 


// const multiple = function(a,b) {
//     console.log(a * 2, b * 2);
// }
// multiple(3,6);

//methods
//this obrawenie k  roditelskomu obektu
// const person = {
//     name: "Jack",
//     birthYaer: 1980,
//     getAge: function(){
//         console.log(this);
//         return 2020 - this.birthYear;
//     },
//     sayHello: function(){
//         console.log(this.name + ' say Hello');
//     },
//     changeName: function(newName) {
//         if (typeof newName !== 'string') {
//             console.error('to change the name, enter the line');
//             return;
//         }
//     this.name = newName;
//     }

// }

// const ageOfPerson = person.getAge();
// // console.log(ageOfPerson);
// // person.sayHello();
// person.changeName('JAck');
// console.log(person.name);


function scope() {
    let firstName = 'Jack';
    let lastName = 'Jackson';
console.log(firstName, lastName);
return firstName
}
scope();
const firstName