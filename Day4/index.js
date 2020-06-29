// console.log("1.1 : ");
// console.log("x receives property from product");

// console.log("1.2 :");
// const product = {
//     name: 'Xiaomi rice cooker',
//     price: 1700,
//     brand: 'Xiaomi',
//     color: 'White',
// };
// for (let x in product) {
//     console.log(x + ' : ' + product[x]);
// }

// console.log('Ex2');
// const task = {
//     subject: 'Implement login feature',
//     createdBy: 'Hoang Ngoc Duc',
//     assignTo: 'Nguyen Phuong Nam',
//     dueDate: '2019-10-08T18:00:24+0000',
//     expectedHours: 0.5,
// };
// const {subject,dueDate,assignTo} = task;
// console.log(`Subject: ${subject} - Date: ${dueDate} - Assign: ${assignTo}`)

// console.log('Ex3');
// console.log('3.1');
// console.log('Object');
// console.log('3.2');
// console.log('Array');
// console.log('3.3');

// console.log('Ex4');
// const dictionary = {
//     debug: 'The process of figuring out why your program has a certain error and how to fix it',
//     done: 'When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)',
//     defect: 'The formal word for ‘error’',
//     pm: 'The short version of Project Manager, the person in charge of the final result of a project',
//     uiux: 'UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels'
// };

// alert("Hi there, this is dev dictiornary ");
// let keyword = prompt("Enter a keyword ");
// if(dictionary[keyword]){
//     alert(keyword + ' : ' + dictionary[keyword]);
// } else {
//     alert("We could not find your word : " + keyword);
// }

// alert("Hi there, this is dev dictiornary ");
// let keyword = prompt("Enter a keyword ");
// if(dictionary[keyword]){
//     alert(keyword + ' : ' + dictionary[keyword]);
// } else {
//     let explanation = prompt(`we could not found ${keyword}, please leave your explanation to add new key word`);
//     dictionary[keyword] = explanation;            
//     alert('done')            
//     alert(keyword + ' : ' + dictionary[keyword]);           
// };


// console.log('Ex5');
const product = [
    {
        name: 'Xiaomi portable charger 20000mah',
        brand: 'Xiaomi',
        price: '428',
        color: 'white',
        category: 'Charger'
    },
    {
        name: 'VSmart Active 1',
        brand: 'VSmart',
        price: '5487',
        color: 'Black',
        category: 'Phone'
    },
    {
        name: 'IPhone X',
        brand: 'Apple',
        price: '21490',
        color: 'Gray',
        category: 'Phone'
    },
    {
        name: 'Samsung Galaxy A9',
        brand: 'Samsung',
        price: '8490',
        color: 'Blue',
        category: 'Phone'
    }
]
// const [{name,brand,price,color,category}] = product;
// for (let i = 0; i <= product.length; i++) {
//         console.log('Name: '+ product[i].name);
//         console.log('Price: '+ product[i].price);
//         console.log('------------------------------');
// };
 //5.1
//  for (let i = 1; i <= product.length; i++) {
//     console.log('#' + i++ + '. ' + product[i].name);
//     console.log('    Price: '+ product[i].price);
//     console.log('------------------------------');
// };
// let userinput = Number(prompt('Enter product position: '));
// if (userinput <= product.length) {
//     userinput--;
//     console.clear();
//     console.log(`Name: ${product[userinput].name} \nBrand: ${product[userinput].brand} \nPrice: ${product[userinput].price} \nColor: ${product[userinput].color} \nCategory: ${product[userinput].category}`);
// } else {
//     alert('Please try again');
// }