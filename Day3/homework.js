// Ex1;
// console.log('1st example');
// let a = 5;
// let b = 6;
// console.log(a, b);
// [a, b] = [b, a];
// console.log(a, b);
// console.log('2nd example');
// let a = 5;
// let b = 6;
// console.log(a, b);
// a = b + (b=a, 0);
// console.log(a, b);

// Ex2;
// const s = 'Hello beauty there';
// let a = Array(s);
// a = s.split(" ");
// console.log(a);
// console.log('Example');
// const x = 'a,b,c,d,e,f,g,h';
// let y = Array(x);
// y = x.split(",");
// console.log(y);

// Ex3;
// const x = 'a,b,c,d,e,f,g,h';
// let y = Array(x);
// y = x.split(",");
// console.log(...y);

// Ex4;
// let clothes = ['Jeans', 'T-Shirt', 'Socks']
// let choice
// let check = true
// let getchoice = function(){
//     choice = prompt('Hi there, welcome to shop admin chanel, what do you want? (C, R, U, D)').toLocaleLowerCase()
//     while(choice != 'c' && choice != 'r' && choice != 'u' && choice != 'd') {
//         alert('This command is not supported')
//         choice = prompt('Hi there, welcome to shop admin chanel, what do you want? (C, R, U, D)').toLocaleLowerCase()
//     }
// };
// while (check){
// getchoice()
// switch(choice){
//     case 'r' :
//         console.log('The current items are: ')
//         for(let i=0; i<clothes.length; i++){
//             console.log(`${i+1}. ${clothes [i]}`)
//         }
//         break
        
//     case 'c' :
//         let newitems = prompt('Enter the name of the new item: ')
//         clothes.push(newitems)
//         alert('Done')
//         break
//     case 'u' :
//         let index = Number(prompt('Enter the position you want to update: '))
//         let newclothes = prompt('Enter the new name: ')
//         clothes[index-1] = newclothes
//         alert('done')
//         break
//     case 'd' :
//         let index_d = prompt('Enter the position you want to delete: ')
//         clothes.splice(index_d-1,1)
//         alert('done')
//         break
//  }
// } 


// Ex5
// let list = prompt('Enter a sequence of number, seperated by commas (,)');
// let number = list.split(",");
// let sum = 0;
// for (let i = 0; i<number.length; i++) {
//     sum = sum + Number(number[i])
// }
// alert('The sum is ' + sum)

//  Ex6
// let list = prompt('Enter a sequence of number, seperated by commas (,)');
// let number = list.split(',');
// let number_2 = number.map(Number);
// let minNumber = Math.min(...number_2);
// alert( `The smallest number is ${minNumber} `);

// Ex7
// const arr = [3, 4, 6, -9, 10, -88, 2];
// let number = Number(prompt('Enter a number'));
// let check;
// for (let item of arr) {
//     if (number === item) {
//         check = true;
//         break;
//     }
// }
// if (check == true) {
//     let indexNumber = arr.indexOf(number);
//     alert(`${number} is found in my array at index ${indexNumber}`);
// } else {
//     alert(`${number} is NOT found in my array`);
// }

// Ex8
// // 8.1
// const size = [5, 7, 300, 90, 24, 50, 75]
// console.log('Hello,my name is Thái An and here is my sheep sizes: ')
// console.log(...size)

// // 8.2
// let maxSize = Math.max(...size)
// console.log(`Now my biggest sheep has size ${maxSize}, let's shave it`)

// // 8.3
// let indexMax = size.indexOf(maxSize)
// size[indexMax] = 8
// console.log(`After shearing, here is my flock: `)
// console.log(...size)

// // 8.4 
// let size_2 = []
// for( let item of size ){
//     item += 50
//     size_2.push(item)
// }
// console.log('MONTH 1 \nOne month has passed, my sheeps have grown, here are their sizes: ')
// console.log(...size_2)

// // // 8.5 
// let month = Number(prompt('Enter the months you want:'))
// for( let i = 2; i <= month; i++ ){
//     for( let i = 0; i < size_2.length ; i++ ){
//         size_2[i] += 50
//     }
//     console.log(`MONTH ${i} \nOne month has passed,my sheeps have grown, here are their sizes`)
//     console.log(...size_2)
//     let biggestSize = Math.max(...size_2); 
//     console.log(`Now my biggest sheep has size ${biggestSize}, let's shave it`)
//     let indexMax = size_2.indexOf(biggestSize)
//     size_2[indexMax] = 8
//     console.log(`After shearing, here is my flock: `);
//     console.log(...size_2)
// }

// // 8.6 
// let sum = 0;
// for( let item of size_2 ){
//     sum += item;
// }
// console.log(`My flock has size in total: ${sum} \nI would get ${sum} * 2$ = ${sum*2}`);

// Ex9

// Ex10
// let name = String(prompt('Enter a sequence of names seperated by commas (,): '))
// nameArr = name.split(',')
// let nameArr2 = []
// for(let item of nameArr){
//     item =`<${item}>`
//     nameArr2.push(item)
// }
// alert(`${nameArr} => ${nameArr2}`)

// Ex11
// let list = prompt('Enter a sequence of numberseperated by commas (,): ')
// numbers = list.split(',')
// let numbers2 = []
// for(let item of numbers){
//     if(item%2!==0){
//         numbers2.push(item)
//     }
// }
// alert(`${numbers} => ${numbers2}`)

// Ex12
// let list = ['Hiếu', 'Hà', 'Hoàng', 'Mai']
// let choice
// let check = true;
// let getchoice = function(){
//     choice = prompt('Bạn muốn làm gì? (C, R, U, D, Q)').toLocaleLowerCase();
//     while(choice != 'c' && choice != 'r' && choice != 'u' && choice != 'd' && choice != 'q') {
//         alert('Vui lòng thử lại')
//         choice = prompt('Bạn muốn làm gì? (C, R, U, D, Q)').toLocaleLowerCase()
//     }
// };
// while (check){
// getchoice();
// switch(choice){
//     case 'r' :
//         let index = Number(prompt('Bạn muốn xem học sinh ở vị trí nào? '))
//         if(index < list.length){
//             alert(`Đó là bạn ${list[index-1]}`)
//         } else {
//             alert('Không hợp lệ, vui lòng thử lại')
//         }
//         break

//     case 'c' :
//         let newStudent = prompt('Nhập tên học sinh bạn muốn thêm: ')
//         list.push(newStudent)
//         alert('Hoàn Thành')
//         break

//     case 'u' :
//         let newIndex_u = Number(prompt('Nhập vị trí bạn muốn thay đổi: '))
//         let newStudent_u = prompt('Nhập tên học sinh mới: ')
//         list[newIndex_u-1] = newStudent_u
//         alert('Hoàn Thành')
//         break

//     case 'd' :
//         let newIndex_d = Number(prompt('Nhập vị trí bạn muốn xóa: '))
//         list.splice(newIndex_d-1,1)
//         alert('Hoàn Thành')
//         break

//     case 'q' :
//         check = false
//         console.log('Danh sách lớp hiện có là: ')
//         for(let i=0; i<list.length; i++){
//             console.log(`${i+1}. ${list[i]}`)
//         }
//         break
//  }
// } 
