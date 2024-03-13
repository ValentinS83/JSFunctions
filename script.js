// fuctii simple

function printDigits() {
    for (let i = 0; i <= 9; i++) {
        console.log('digit: ', i);
    }
}

printDigits();
printDigits();
printDigits();


// functii cu parametri
function arrayHasElement(arrayToCheck, element) {
    let found = false;
    for (const el of arrayToCheck) {
        if (el === element) {
            found = true;
            break;
        }
    }

    if (found) {
        console.log(`Aray ${arrayToCheck} has element ${element}`);
    } else {
        console.log(`Aray ${arrayToCheck} does not have element ${element}`);
    }
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 10, 21];
const valueToCheck1 = 10;
const valueToCheck2 = 30;

arrayHasElement(array1, valueToCheck1);
arrayHasElement(array2, valueToCheck1);
arrayHasElement(array1, valueToCheck2);
arrayHasElement(['ala', 'bala', 'portocala'], 'ala');


// functie cu parametri si return
function removeEvenNumbers(arrayToModify) {
    const newArray = [];

    for (const num of arrayToModify) {
        if (num % 2 > 0) {
            newArray.push(num);
        }
    }

    return newArray;
}

const array1Modified = removeEvenNumbers(array1);
console.log(`Modified array1 is : ${array1Modified}`);

const array2Modified = removeEvenNumbers(array2);
console.log(`Modified array1 is : ${array2Modified}`);

const shoppingBasket = [];
const stockProducts = [
    {
        name:'Hat',
        price: 22.99,
        stock: 12
    },
    {
        name: 'Tricou',
        price: 30.99,
        stock: 40
    }
];

function moveFromStockToBascket(productName) {
    for (const product of stockProducts) {
        if (product.name === productName) {
            shoppingBasket.push({name: product.name, quantity: 1});
            product.stock -=1;
        }
    }
}
console.log(`Current stock: `, stockProducts);
console.log(`shopping basket: `, shoppingBasket);

moveFromStockToBascket('Hat');
console.log(`Current stock: `, stockProducts);
console.log(`shopping basket: `, shoppingBasket);

