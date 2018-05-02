// for (let i = 100; i >= 0; i--) {
//     if (i % 2) { 
//       continue
//     }
//     document.write(i + '<br>');  
// }
// let i = 0;
// while (i <= 100) {
//     document.write(i + '<br>')
//     i++
// }


// let j = 0;
// do {
//     document.write(j + '<br>');
//     j++;
// } while (j <=100); 

// let a;
// do {
//     alert('Please Enter a number');
//     parseFloat(prompt('Enter A'));
// } while (isNaN(a))
// document.write(a);
function prn(value) {
    document.write(value + '<br>');
}

let products = ['Tesla Model X','Porshe Panamera', 'McLaaren F1'];
products.push('Ferrari laFerrari');
products[4] = 'Buggati';
products[5] = 'ZAZ Lanos';
prn(products.length);

// for (let i = 0; i < products.length; i++) {
//     if (products[i]=== undefined) {
//     continue;
//     }
//     prn(products[i]);
// }

// products.forEach(function(element){
//     document.write(element + '<br>');
// })

// products.forEach(el => document.write(el + '<br'));

// const printVal = function(element){
//     document.write(element + '<br>');
// };

// products.forEach(printVal);

// while(products.length > 0) {
//     prn(products.pop());
// }

// prn(products.length);

// products.sort();
// prn(products);

// let cars = {};

// cars['favourite'] = 'McLaren F1';
// cars['everyday'] = 'Nissan Leaf';
// cars['holiday'] = 'Jeep Wrangler';

// let carsLength = 0;
// for (let key in cars) {
//     carsLength++;
//     prn(key + ': ' + cars[key]);
// }
// prn(carsLength);

// cars['holiday'] = 'Toyota Tundra';
// for (let key in cars) {
//     carsLength++;
//     prn(key + ': ' + cars[key]);
// }
// prn(carsLength);

let teslaX = {};
teslaX.year = 2017;
teslaX.make = 'Tesla';
teslaX.model = 'X';
teslaX.color = 'red';
teslaX.run = function()
{
    prn(this.make + ' ' + this.model + ' is running!!!');
}
teslaX.run();
