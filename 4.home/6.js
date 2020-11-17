//  let bat = document.getElementById('button');
//  let text = document.getElementById('text');
// //  bat.onclick = ev =>{
// //      text.hidden
// //      ? text.hidden === false
// //      : text.hidden === true;
// //  }
// bat.onclick = event => {
//     console.log(event);
//     bat.style.display === 'none'
// }

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// let bat = document.getElementById('button')
// bat.onclick = event =>{
// let myInput = document.getElementById('myInput')
// let value = myInput.value
// if (value > 18 && value<70){
//     alert('You are wellcom)...')
// }

// }

// let a1 = document.getElementById('a1');
// let subMenu = document.getElementById('subMenu');
// let flag = false;
//  a1.onclick = event => {
//      if(flag){
//         subMenu.style.display = 'block'; 
//          flag = false;

//      } else{
//         subMenu.style.display = 'none';
//         flag = true;

//      }


//      - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.


// let comentArr = [
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'}
// ];
// let content = document.getElementById('content');
// comentArr.forEach(item => {
//     let div = document.createElement('div');
//     let h2 = document.createElement('h2');
//     let p = document.createElement('p');
//     let button = document.createElement('button')
//     button.innerText = 'hide';
//     h2.innerText = item.title;
//     p.innerText = item.body;
//     button.onclick = () =>{
//         p.hidden = 'false'
//         ? p.hidden = false :  p.hidden = true;
//     }
//     div.appendChild(h2);
//     div.appendChild(p);
//     div.appendChild(button);
//     content.appendChild('div')
// })

// let a = '2' + '2' - '2';
// console.log(a); 







// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.



// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
// let btn = document.getElementById('btn')
// let name1 = document.getElementById('name1')
// let name2 = document.getElementById('name2')
// let name21 = document.getElementById('name21')
// let name22 = document.getElementById('name22')
// btn.onclick = event =>{
//     console.log(input1.value)
//     console.log(input2.value)
//     console.log(input21.value)
//     console.log(input22.value)
// }

// - Створити функцію, яка генерує таблицю.
// Перший аргумент визначає кількість строк.
// Другий параметр визначає кліькіть ячеєк в кожній строці.
// Третій параметр визначає елемент в який потрібно таблицю додати.

// let content = document.getElementById('content')
// function createTable(rows, cols, tag){
//     const table = document.createElement('table');
//     for (let i = 0; i < rows; i++) {
//         const tr = document.createElement('tr');
//         for (let j = 0; j < cols; j++) {
//             const td = document.createElement('td');
//             td.innerHTML = i.toString() + j.toString()
//             tr.appendChild(td)
//         }
//         table.appendChild(tr)
//     }
//     tag.appendChild(table)
// }
// createTable(4, 5, content)

// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.


// let imgArray = [
//     {
//         id: 1,
//         img_url: 'https://fcrukh.com/upload/images/IMG_8344.JPG'
//     }, 
//     {
//         id: 2,
//         img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXcY6K8JJvvUneg2RUk7NaP2NP0ya5Om01Gg&usqp=CAU'
//     }, 
//     {
//         id: 3,
//         img_url: 'https://football24.ua/resources/photos/football/players/160x160_DIR/201607/13436.jpg?202008160852'
//     }, 
//     {
//         id: 4,
//         img_url: 'https://lh3.googleusercontent.com/proxy/uj5KYVDl-kZbTQzZnbNuDV4a_0NYwPIIZhXt0eENCuQq2RplAMfaNLQJX_F4os0ypS3MVHNkeXSbgwlSItI1RwCAV8Ch0wDznG5cUgbmZrVq'
//     } 
// ];

// let content = document.getElementById('content')
//  let img = document.createElement('img')
//  let button = document.createElement('button')
//  let button1 = document.createElement('button')

// button.innerText = 'left';
// button1.innerText = 'right';
// let index = 0;
// img.width = 300;
// img.src = imgArray[index].img_url;
// content.appendChild(img)
// content.appendChild(button)
// content.appendChild(button1)

// button.onclick = () =>{
//     index -1 < 0
//     ?index = imgArray -1
//     : index = index -1
//     img.src = imgArray[index].img_url
// }
// button1.onclick = () =>{
//     index +1 > imgArray -1
//     ?index = 0
//     : index = index + 1
//     img.src = imgArray[index].img_url
// }







// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку
 

// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку



// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
// При клике на пункт оглавления вы должны отправляться к этому пункту в тексте

// -- взять массив пользователей
// let usersWithAddress = [
//                 {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//                 {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//                 {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//                 {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//                 {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//                 {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//                 {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//                 {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//                 {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//                 {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//                 {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
//             ];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ



// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
// Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне


// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан

//  } 
// let user = [{name: 'ruslan', age: 30, skills: 'plsy', wife: {ima: 'meri', vik:40}}]
// console.log(name, age, skills, vik);
// let usersWithAddress = [
//                     {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//                      {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//                     {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//                     {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//                     {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//                     {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//                      {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//                      {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//                      {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//                      {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//                      {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
//                ];
//                let [a,b,c,v] = usersWithAddress
//                console.log(a  b);
               

// let num = [10,3,5,6]
// Math.max(...num)
// console.log(num);
// console.log(Math.max(...num));


// 
//  let use = user.map(users => {users.rand  = Math.random()
// return users;
// } )
// console.log(use);
 

// function increment (startValue) {
//    
//     startValue ++;
//     console.log(startValue);
//     if(startValue === 10){
//         return;
//     }
//     increment(startValue)
// }
// increment(1)


// function calk (a, b, callback){
//     callback(a,b)
// }
// calk(10, 20, (a,b) => console.log(a+b))