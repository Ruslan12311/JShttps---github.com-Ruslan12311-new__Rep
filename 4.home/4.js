
// function funcs(num, ) {
//     console.log(num);
// }
// funcs([1,2,334,34,35454,5,654,64]);

// printArray(array)

// function arrMath( mass, min, max ) {
//     const array = [];
//     for( i = 0; i < ma; i++){
//         arrNew.push(Math.floor(Math.random() * (max - min)+ min))
//     }
//     return array;
// }
// const Arr1 = arrMath(10, 10, 100)
// console.log(Arr
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }
// function name (text) {
//     console.log(text);
// }
// name([1,'apple', 2, 3, 'yura', 34,35454 ])



// function newFunk(length, max, min) {
//     let arr = []
//     for (let index = 0; index <length; index++) {
//         arr.push(Math.floor(Math.random() *(max-min)+max))
        
//     }
//     return arr;
// }
// let num = newFunk(7,12,5)
// console.log(num);



// function funk(a,b,c){
//     let max = Math.max(a,b,c);
//     console.log(max);
// }
// // funk(32,2,5)
// function name(length, max, min) {
//     let arrNew =[]
//     for (let index = 0; index < length; index++) {
//         arrNew.push(Math.floor(Math.random()*(max-min) + max ))
        
        
//     }
//     return arrNew;
// }    let a = name(5, 10,2)
// console.log(a)

// function name(a,c,b ) {
    
//         let min;
//         a > c ? min = c : min = a
//         min > b? min = b : ""

        
        
//         return min
    
    
// } let min = name(6,10,7)
// console.log(min);



// function name(o,a,z) {
//     let max;
//     o > z ? max = o: max = z
//     a > max ? max = a : ""
//     return max 
// } let max = name( 28, 6, 30)
// console.log(max);



// function name1() {
//    let max = arguments[0];
//    let min = arguments[0];
//    for (const get of arguments) {
//         if (get > max) max = get;
//         if ( get < min) min =get;
//    }
//         console.log(max);
//         return min;
       
   
    
// }
// let min = name1(1,23,43,432,2455,456,6565,1)
// console.log(min);


// function num (array) {
//     let max = array[0]
//     for (const arr of array) {
        
//         if(max < arr) max =arr;
        
        
//     }return max
    
// }   let a = num ([ 12.3, 4,2,2,744,321,55])
//      console.log(a)



// function name(array) {
//     let nun = array[0]
//     for (const item of array) {
//     if (nun > item)  nun = item;
//     }return nun;
// }
// let nu = name([26632,1,2,612673627,0.8])
// console.log(nu);

// function name(array) {
//     let sum = 0;
//     for (const iterator of array) {
//         sum +=iterator;
//     } return sum/array.length
    
// } let a = name([2132,3123,23123,323])
// console.log(a);


// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     },

// ];

// function name(sum ) {
//     let su = 0;
//     for (const iter of sum) {
//         if (iter ==='Obgect');
//         for (const key in  iter) {
//             su++;
            
//         }
//     } 
//     return su;
// } 
// let tel = name(rules);
// console.log(tel)





function name(array1, array2) {
    let sum = [];
    for (let index = 0; index < array1.length; index++) {
        sum.push(array1[index]+array2[index])
        
    }return sum;
    
}  let nuw = name([1,2,3,4],[2,3,4,5])
console.log(nuw);