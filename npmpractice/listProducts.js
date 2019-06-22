const faker = require('faker');
const fakeProduct = faker.commerce;

console.log("===========================");
console.log("WELCOME TO MY SHOP!");
console.log("===========================");

for (let i = 0; i < 10; i++) {
    console.log(`${fakeProduct.productName()} - £${fakeProduct.price()}`);
}