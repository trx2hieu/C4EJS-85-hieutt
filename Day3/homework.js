// console.log('Ex1');
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

// console.log('Ex2');
// const s = 'Hello beauty there';
// let a = Array(s);
// a = s.split(" ");
// console.log(a);
// console.log('Example');
// const x = 'a,b,c,d,e,f,g,h';
// let y = Array(x);
// y = x.split(",");
// console.log(y);

// console.log('Ex3');
// const x = 'a,b,c,d,e,f,g,h';
// let y = Array(x);
// y = x.split(",");
// console.log(...y);

// console.log('Ex4');
// let clothes = ['Jeans', 'T-Shirt', 'Socks'];
// let choice;
// let check = true;
// let getchoice = function(){
//     choice = prompt('Hi there, welcome to shop admin chanel, what do you want? (C, R, U, D)').toLocaleLowerCase();
//     while(choice != 'c' && choice != 'r' && choice != 'u' && choice != 'd') {
//         alert('This command is not supported');
//         choice = prompt('Hi there, welcome to shop admin chanel, what do you want? (C, R, U, D)').toLocaleLowerCase();
//     }
// };
// do{
// getchoice();
// switch(choice){
//     case 'r' :
//         console.log('the current items are: ');
//         for(let i=0; i<clothes.length; i++){
//             console.log(`${i+1}. ${clothes [i]}`);
//         }
//             check=false;
//             break;
        
//     case 'c' :
//         let newitems = prompt('Enter the name of the new item: ');
//         clothes.push(newitems);
//         alert('Done');
//         break;
//     case 'u' :
//         let so = prompt('Enter the position you want to update: ');
//         let newclothe = prompt('Enter the new name: ');
//         clothes[so-1] = newclothe;
//         alert('done');
//         break;
//     case 'd' :
//         i = prompt('Enter the position you want to delete: ');
//         clothes.splice(i-1,1);
//         alert('done');
//         break;
//  }
// } 
// while(check);

// console.log('Ex5')
// let a = prompt('Enter a sequence of number, seperated by commas (,)');
// let number = a.split(",");
// let sum = 0;
// for (let i = 0; i<number.length; i++) {
//     sum = sum + Number(number[i])
// }
// alert('The sum is ' + sum)

