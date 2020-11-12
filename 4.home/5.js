// if (value/3){
//     console.log(filt)
// }
// let numbers = [22,1,23,323,4454,7,8,89,557,98,3243,4,7,543,92,1232,44,5];
// let sort = numbers.sort((a,b )=>{
//     console.log(a);
//     console.log(b);
//     console.log('------');
// });
// console.log(sort);
// let numbers = [22,1,23,323,4454,7,8,89,557,98,3243,4,7,543,92,1232,44,5];
// let sort = numbers.sort((a,b )=>{
//     console.log(a);
//     console.log(b);
//     console.log('------');
//     return a - b;
// });
// let filter  = numbers.filter (( value ,  i,  number) => {
//     return value / 3;
// }); console.log(filter);
// console.log(sort);
// let numbers = [22,1,23,333,4454,7,8,89,557,98,3243,4,7,543,92,1232,44,5];
// let filt = numbers.filter(value =>value % 3===0 )
// console.log(filt)

// let numbers = [100,1,23,333,4454,7,8,89,557,98,3243,4,20,543,92,1232,44,5];
// let filt = numbers.filter(value =>value % 10 ===0 )
// console.log(filt)

// let numbers = [100,1,23,333,4454,7,8,89,557,98,3243,4,20,543,92,1232,44,5];
// let forEtch = numbers.forEach((value => console.log(value)
//     ));
// console.log(numbers);
// let numbers = [100,1,23,333,4454,7,8,89,557,98,3243,4,20,543,92,1232,44,5];
// let map = numbers.map((value ) =>{
//     return value * 3;
    
// });console.log(map);


// let name = ['Vova', 'Ivan', 'Ruslan', 'Vasiliy', 'Petro', 'Vitalik', 'Vika', 'Yulia', 'Maria', 'Liza']
// let sort1 = name.sort((a,b) => {
//     if (a, b){
//         return 1;    
// }});
// console.log(sort1);
// let name = ['Vova', 'Ivan', 'Ruslan', 'Vasiliy', 'Petro', 'Vitalik', 'Vika', 'Yulia', 'Maria', 'Liza']
// let sort1 = name.sort((a,b) => {
//     if (a, b){
//         return -1;    
// }});
// console.log(sort1);



// let name = ['Vova', 'Ivan', 'Ruslan', 'Vasiliy', 'Petro', 'Vitalik', 'Vika', 'Yulia', 'Maria', 'Liza'];
// let filt = name.filter(value => value.length > 4)
    

// console.log(filt);
// let name = ['Vova', 'Ivan', 'Ruslan', 'Vasiliy', 'Petro', 'Vitalik', 'Vika', 'Yulia', 'Maria', 'Liza'];
// let map = name.map(value => value += '!')
//     console.log(map);

// let users = [ {name: 'vasya', age: 31, status: false},
//         {name: 'petya', age: 30, status: true},
//         {name: 'kolya', age: 29, status: true},
//         {name: 'olya', age: 28, status: false},
//         {name: 'max', age: 30, status: true}, 
//         {name: 'anya', age: 31, status: false},
//         {name: 'oleg', age: 28, status: false},
//         {name: 'andrey', age: 29, status: true},
//         {name: 'masha', age: 30, status: true},
//         {name: 'olya', age: 31, status: false},
//         {name:'max', age: 31, status: true} ];
// // let age = users.sort((a, b) => a.age - b.age);
// // console.log(age);


// // let age = users.sort((a, b) => a.name.length - b.name.lenght);
// // console.log(age);
// // let age = users.sort((a, b) => b.name.length - a.name.length);
// // console.log(age);


// let map = users.map((user, index)=>{
//     user.id = index;
//     return users

// }); console.log(map);


// function calculator(a, b, callback){
//     return callback(a,b)
// }
// let rel = calculator(10,20, function( a,b){
//     return a + b;
    
// }); console.log(rel);


// function calculator(a, b, c, callback){
//     return callback(a,b,c)
// }
// let rel = calculator(10,20, 3, function( a,b,c){
//     return (a + b) *c;
    
// }); console.log(rel);

// let cars = [ {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400}, {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
// {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300}, 
// {producer:"subaru", model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140}, 
// {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
//  {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
//   {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120}, 
//  {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
//   {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
//    {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
//     {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180}, {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400}, {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} ];
// // let diz = cars.filter(value => value.volume>= 3)
// console.log(diz);

// let diz = cars.filter(value => value.volume === 2)
// console.log(diz);
// let diz = cars.filter(value => value.producer ==='mercedes' && value.volume >= 3)
// console.log(diz);
// 
// let diz = cars.filter(value => value.power >300)
//  console.log(diz);

let usersWithAddress = [{id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
 {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}}, 
 {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}, 
 {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}},
  {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
   {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}}, 
   {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
     {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}},
      {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
       {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}];

// let sor = usersWithAddress.sort( (value)=>{
//     return value.id
// });
// console.log(sor);