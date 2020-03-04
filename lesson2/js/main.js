//zapis neskolkih peremennyh posle ed-ogoi obyavleniya

// var firstName = 'Jack', lastName = 'Johnson';
// console.log(firstName, lastName);

// otlichia var i let
// var hoistitsya let ne hoistitsya

// console.log(firstName); //undefined
// var firstName = 'Jack';

// console.log(firstName); // oshibka
// let firstName = 'Jack'; 

// //obyavlenyia 2h let nevozmojno
// var firstName = 'Jack';
// var firstName = 'John';
// console.log(firstName); //john

// let firstNAme = 'Jack';
// let firstNAme = 'John';
// console.log(firstNAme); //oshibka

//var zapisyvaetsya v globalnyi obekt window
// var firstNAme = 'Jack';
// console.log(window.firstNAme);
// let ne zapisyvaetsya v globalnyi obekt window
// let firstNAme = 'Jack';
// console.log(window.firstNAme);//undefined
// peremennya obyavlenna cherez const unasledovala vse principy 
//kotorye cvoistvenny dlya peremennoi let no s bolwimi otlichiyami

//peremennaya let vozmojno 
// let firstNAme = 'Jack';
// console.log(firstNAme);
// firstNAme = 'John';
// console.log(firstNAme);

//perenaznacheniya s const nevozmojno

// const firstNAme = 'Jack';
// firstNAme = 'John';
// console.log(firstNAme);//'firstNAme' has already been declared


//obekty 

// const person = {
//     name: 'Jack',
//     age: 28,
//     childs: ['John', 'Luci']
// }

// //nesdandartnyi znachenie kluchei
// const notStandartdFields = {
//     'kebab-kase': 'i can use it :D',
//     '0': 10
// }


// dostup k svoistam obekta

// console.log(person.name);
// console.log(notStandartdFields['kebab-kase']);
// console.log(notStandartdFields.kebab-kase);//nelzya obrawatsya tak

//perenaznacyeniya svoistv daje esli eto constanta
// person.name = "John";
// console.log(person);

//dobavleniya sv-va izvne
// person.weihgt = '80kg';
// console.log(person);

// //udaleniya polya is obektov
// delete person.name;
// console.log(person);




//massivy

// const arrNums = [1,2,3,4,5];
// console.log(arrNums);

//dlina massiva
// // console.log(aarNums.length)
// //dostup k 1 elementy=u massiva
// console.log(arrNums[2]);

// //dostup k poslednemu m,assivu
// console.log(arrNums[arrNums.length -1]);

// //perenaznacheniya elemta massiva
// arrNums[2] = 10;
// console.log(arrNums);

//operator inkrimenta
// let num = 0;
// console.log(num++);
// console.log(num);

// let num = 0;
// console.log(++num);
// console.log(num);


// //cikl
// for (let i = 1; i <=100; i++) {
//     console.log('interaciya' +i);
// }

const arrNums = [1,2,3,4,5];

// for (let i = 0; i <  arrNums.length; i++) {
// // console.log(arrNums[i]);
// // console.log(arrNums[i] * 2);
// }
// poisk elementa v massive ciklom s usloviem 
// let value = null;
// console.log(arrNums[i]);
// for (let i = 0; i < arrNums.length; i++){
//     if (arrNums[i] === 4)  value = arrNums[i];
// }
// console.log(value);


//vytaskivaem vse elementy

// const arrNums2 = [];
// for (let i = 0; i < arrNums.length; i++) {
//     if (arrNums[i] > 3) arrNums2.push(arrNums[i]);
// }

// console.log(arrNums2);

//cikl while   boolevoe znacheniye true or false. snachaloproveriaet usloviya potom block koda
// let i = 0;
// while (i < 10){
//     console.log('iteraciya' + i++)
// }

//cikl do while  block a potom proveryaet usloviya  
// let i = 0;
// do {
//     console.log('itaraciya'+ i++);
// } while (false);

// metody massiva stage 1

// const someFamily =[
//     {
//         name: 'March', 
//         position: 'Mother',
//         age: 36
//     },
//     {
//         name: 'Homer', 
//         position: 'Father',
//         age: 40
//     },
//     {
//         name: 'Bartr', 
//         position: 'son',
//         age: 10
//     },
//     {
//         name: 'Lisa', 
//         position: 'dauhgter',
//         age: 8
//     }
// ];


// //metod push / pop
// const newChild = {
//     name: 'Maggie',
//     position: 'daughter',
//     age: 22
// }
// console.log(someFamily);
// someFamily.push(newChild);
// // console.log(someFamily);
// someFamily.pop();
// console.log(someFamily);

//metod shift / unshift

// someFamily.shift();
// console.log(someFamily);

// someFamily.unshift(newChild);
// console.log(someFamily);

//metod splice
// someFamily.splice(1, 1) //udalenya
// console.log(someFamily);

// someFamily.splice(2, 0, newChild);
// console.log(someFamily);

//!!!!!!!!samostoyatelno uznat pro sobrata splice metod slice 
//jizn bez metoda forEach
// const simpsonsFamily = [];
// for (let i = 0; i < someFamily.length; i++) {
//     someFamily[i].lastName = 'Simpson';
//     simpsonsFamily.push(someFamily[i]);
//     }
//     console.log(simpsonsFamily);

//jizn' s metodom forEach
// someFamily.forEach(function(item){
//   item.lastName = 'simpson';
//     simpsonsFamily.push(item);
// })
// console.log(simpsonsFamily);


//jizn s metodom map
const simpsonsFamily = someFamily.map(function(item){
   item.lastName = 'simpson';
   return item;
})
console.log(simpsonsFamily);