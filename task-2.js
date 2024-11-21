#!/usr/bin/env node

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const randNumber = Math.floor((Math.random() * 100) + 1);

console.log("Загадано число в диапазоне от 1 до 100");

rl.on('line', (input) => {
    const userGuess = Number(input);

    if (isNaN(userGuess)) {
        console.log("Вводите только числа.");
    } else if (userGuess === randNumber) {
        console.log("Ответ верный!");
        rl.close();
        return;
    } else if (userGuess < randNumber) {
        console.log("Больше");
    } else if (userGuess > randNumber) {
        console.log("Меньше");
    }
})
