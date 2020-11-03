// let people  = {name: 'Ruslan',
//      posicson: 'Centre',
//      head: 'right'
//     } 
//     let dog = { 
//         poroda:  'pitBool',
//         girl: 'djessi',
//         home: 'myRoom' 
//     }
//     let car = {
//         color: 'Red',
//         model: 'V70',
//         marca: 'Volvo'};

//     let man  = { name: 'Ruslan',  wife: {name:'Maria'} , slilss: ['speak', 'run']};
//      dog = { name:'Charli', wife:  {name:'Merry'} , home: 'myRoom' };

//     console.log(man);

//     for( key in man){
//         console.log('key', key);
//     }
//     console.log(Object.keys(people))
//     console.log(Object.keys(car))


    // let cars = [
    //     { name: 'myCar', model: 'Audi', year: 2000, tyrbo: 'dizel'},
    //     { name: 'girlCar', model: 'Shkoda', year: 2003, tyrbo: 'benzin'},
    //     { name: 'bigCar', model: 'volvo', year: 1998, tyrbo: 'gaz'}
    // ];
//     let a = 0;
//     while(a < cars.length){
//            let cars1 = cars[a];
//         console.log(cars1);
//         a++;
//     }



// for ( let car of cars){
//     console.log(car);
// }
//  let a = JSON.stringify(cars);
//  console.log(a)
//  str = JSON.parse(a);
//  console.log(str)



// let New = [];
// for(i = 0; i < cars.length; i++ ){
//      New.push(JSON.stringify(cars[i]));
// }
// console.log(New);


// let New = [];
// for(i = 0; i < cars.length; i++ ){
//      New [i] = JSON.parse(JSON.stringify(cars[i]));
// }
// console.log(New)


// let user = [
//     {name: 'Vasiliy', age: 20, status:true, skills: ['run', 'wolk']},
//     {name: 'Vova', age: 30, status:false, skills: ['play', 'write']},
//     {name:'Artur', age: 19, status: true, skills:['eat', 'drink']},
//     {name: 'ivan', age: 8, status:false, skills:['game', 'make']}
// ] ; 
// for( use of user){
//     document.write(use.name);
//         for( let skill  of use.skills){
//             console.log(skill);
//     }
// }

// let newArr = [];
// for( use in user){
//     document.write(use.name);
//         for( let skill  of use.skills) {
//             newArr.push(skill);
//     }
// }
// console.log(newArr);

    
// let use = name['skills'];
// console.log( use)
    // let arrNew = [];
    // for ( const use of user ){
    //     console.log(use.skills);
    //     for ( const skill of use.skills){
    //         arrNew.push(skill)
    //     }
    // }
    // console.log(arrNew)

    // let users = [
    //     {name: 'vasya', age: 31, status: false, skills:['run', 'write']},
    //     {name: 'petya', age: 30, status: true,skills:['run', 'write']},
    //     {name: 'kolya', age: 29, status: true,skills:['run', 'write']},
    //     {name: 'olya', age: 28, status: false, skills:['run', 'write']},
    //     {name: 'max', age: 30, status: true, skills:['run', 'write']},
    //     {name: 'anya', age: 31, status: false, skills:['run', 'write']},
    //     {name: 'oleg', age: 28, status: false, skills:['run', 'write']},
    //     {name: 'andrey', age: 29, status: true, skills:['run', 'write']},
    //     {name: 'masha', age: 30, status: true, skills:['run', 'write']},
    //     {name: 'olya', age: 31, status: false, skills:['run', 'write']},
    //     {name: 'max', age: 31, status: true, skills:['run', 'write']}
    // ];
    //   let arrNew = [];
    //  for ( user of users){
    //      console.log('User'+' ' , user);
    //      for ( skill of user.skills){
    //          arrNew.push('Skill'+ ' ',  skill);
             
    //      }

    //  }    

    //  console.log(arrNew)

    // let arr = users.push([status])
    // console.log(arr);
    // console.log(users[5].age, users[5].status)
    // console.log( Object.keys(users));
    // let a = 0;
    // while( a < users.length){
    //     a++;
    //     console.log(users[a]);
    // }
    // let arrNew = [];
    
    // for ( let a = 0; a < users.length;a++){
    //     arrNew = users[a];
    //     console.log(JSON.stringify(arrNew));
    // }

//    for (use of users){
//        console.log(use)
// //    }
//  let a = [];
//  a = users[0];

// let json = JSON.stringify(a);
// console.log(json);
// let y = JSON.parse(json)
// console.log(y);
// let arr = [];
// arr = y;
// console.log(arr);
// let a = [];
// // user = a.push()
// let users = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
//   {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']}, 
//   {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']},
//   {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, 
// //   {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}
// // ];
// // for ( a = 0; a < users.length; a++){
// //     console.log(users[a]);
// //     for ( b = 0; b < users[0].length; b++){
// //         console.log(users[b]);
// //     }
// // }
// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];

// // let arr = [];
// // for( user of users){
// //     arr.push(user.address)
// // }
// // console.log(arr);
// for ( a = 0; a < users.length; a++){
//      let user = users[a];
//      let div = document.createElement('div');
//      div.innerText =  `${user.name} ${user.age} ${user.status}`;
//      document.body.appendChild(div)

// }
// let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false},
//  {id: 2, name: 'petya', age: 30, status: true},
//   {id: 3, name: 'kolya', age: 29, status: true}, 
//   {id: 4, name: 'olya', age: 28, status: false},];
// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'},
//  {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'},
//   {user_id: 4, country: 'USA', city: 'Miami'},];

//   for ( const user of usersWithId){
//       for ( const city of citiesWithId){
//           if ( user.id === city.user_id){
//                user.adsress = city;
//           }
//       }
//   }
// console.log(usersWithId);

// console.log(eleClass);

// let elementClass = document.getElementsById('content')
/*let eleClass = elementClass.innerText;*/

// let contex =    document.getElementById('content');
// let con = contex.innerText;
const  classRull = document.getElementsByClassName('rules rule1');
for (let classRullElement of classRull) {
 console.log(classRullElement)

}






