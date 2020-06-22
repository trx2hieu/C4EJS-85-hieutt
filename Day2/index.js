// Ex1
// a. trong js, var và const là từ khóa để khai báo 1 biến
// b. sự khác biệt giữa var và let là : 
// - let có phạm vi hoạt động nhỏ hơn var rất nhiều
// - let bị giới hạn ở trong cặp {} chứa nó
// - còn var có thể hoạt động ngoài cặp {} chứa nó
// c. sự khác biệt giữa let và const :
// - khi khai báo bằng let thì giá trị của biến có thể thay đổi
// - khi khai báo bằng const thì giá trị của biến là cố định
// d. dùng biến gì trong trường hợp nào :
//  - sử dụng const khi khai báo 1 biến mặc định
// sử dụng let nếu biến cần cập nhật giá trị
// hạn chế dùng var trừ khi muốn chia sẻ biến đó qua nhiều scope khác nhau
// Ex2
// a. Boolean là kiểu dữ liệu giúp kiểm tra giá trị đúng hay sai
// b. Boolean trả về 2 kiểu giá trị là TRUE hoặc FALSE

// Ex3
// a/
// for (let a = 0; a < 7; a++) {console.log(a)}
// b/ 
// let n = Number(prompt('Enter a number?'))
// for (let a = 0; a < n; a++) {console.log(a)}
// c/ 
// let n = Number(prompt('Enter a number?'))
// for (let a = 3; a < n; a++) {console.log(a)}
// d/ 
// let n = Number(prompt('Enter n '))
// let c = Number(prompt('Enter c '))
// if (c<n)
// {
// for (let a = c; a < n; a++) {console.log(a)}
// }
// else 
// alert('n must be greater than c.')
// e/ 
// let c = Number(prompt('Enter c '))
// let n = Number(prompt('Enter n '))
// if (c<n)
// {
// for (let a = c; a < n; a+=3) {console.log(a)}
// }
// else 
// alert('n must be greater than c.')
// f 
// let c = Number(prompt('Enter c '))
// let n = Number(prompt('Enter n '))
// let s = Number(prompt('Enter s '))
// if (c<n)
// {
// for (let a = c; a < n; a+=s) {console.log(a)}
// }
// else 
// alert('n must be greater than c.')

// Ex4
// let a = Number(prompt('Enter a number : '))
// let b = 1
// if (a == 0 || a == 1)
// {
// alert('The factorial of ' + a + ' is 1')
// }
// else 
// {
//     for ( x = a; x >= 2; x--)
//     b = b * x
//     alert('The factorial of ' + a + ' is ' + b)
// }

// Ex5
// let a = prompt('How old are you?')
// if (a>14)
// {
//     alert('Enjoy!')
// }
// else
// alert('You are not old enough to view this content')

// Ex6
// let a = Number(prompt('Enter a number :'))
// if (a>5)
// {
//     alert('Higher half of 9')
// }
// else
// alert('Lower half of 9')    

// Ex7
// let x = Number(prompt('Enter x :'))
// let n = Number(prompt('Enter n :'))
// if (x > n)
// {
//     alert(x + ' is in higher half of ' + n)
// }
// else
// alert(x + ' is in lower half of ' + n)

// Ex8
// let a = Number(prompt('Enter a number :'))
// if (a%2==0)
// {
//     alert(a + ' is an even number')
// }
// else
// alert(a + ' is an odd number')

// Ex9
// a/
// let a = 'H';
// let b = 'L';
// for (let x = 0; x<(6/2); x++) {console.log(a)}
// for (let x = 0; x<(6/2); x++) {console.log(b)}
// b/
// let a = 'H';
// let b = 'L';
// let n = Number(prompt('Enter the number of H and L '))
// for (let x = 0; x<Math.ceil(n/2); x++) {console.log(a)}
// for (let x = 0; x<Math.floor(n/2); x++) {console.log(b)}
// c/
// let a = '0';
// let b = '1';
// for (let x = 0; x<(8/2); x++) {console.log(a) + console.log(b)}
// d/
// let a = '0';
// let b = '1';
// let n = Number(prompt('Enter a number '))
// for (let x = 0; x <(n/2);) {console.log(a) + console.log(b)}

// Ex10
// let a = Number(prompt('Your weight in kg'))
// let b = Number(prompt('Your height in cm'))
// BMI = a/((b/100)*(b/100))
// alert(BMI)
// if(BMI<16){
//     alert('You are severely')
//  }else if(BMI<18.5){
//     alert('You are underweight')
//  }else if(BMI<25){
//      alert('you are normal')
//  }else if(BMI<30){
//      alert('You are overweight')
//  }else{
//      alert('You are obese')
//  }

//Ex11
//a/
// function square (){
// for(let i=1;i<=4;i++){
// fd(90)
// lt(90)
// }
// }
// square()
//b/
// function triangle() {
// for (var i=1; i <= 3; i++) {
// fd(90)
// lt(120)
// }
// }
// triangle()
//c/
// function pentagon(){
// for(let i =1;i<=5;i++){
// fd(90)
// lt(72)
// }
// }
// pentagon()
//d/
// function hexagon(){
// for(let i =1;i<=6;i++){
// fd(90)
// lt(60)
// }
// }
// hexagon()

// Ex12
// clear();
// function draw(){
// let x = prompt("Enter number of edge:")
// for(let i = 1; i <= x; i++){
// 	fd(150);
//   	rt(360/x);
// }
// }
// draw();

// Ex13
// clear();
// function draw() {
//   let x = prompt("Enter number of polygons: ");
//   for (let i = 1; i <= x; i++) {
//     for (let j = 1; j <= i + 2; j++) {
//       fd(100);
//       rt(360 / (i + 2));
//     }
//   }
// }
// draw();