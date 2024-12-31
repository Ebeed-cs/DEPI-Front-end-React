// const num = prompt("Enter the number!");
// console.log(num);
// --------------------------- 2 ---------------------------

// const num = Number(prompt("Enter the number"));
// if((num % 3 === 0) && (num % 4 === 0))
//     console.log("Yes");
// else    
//     console.log("No");

// ---------------------------------- 3 ---------------------

// const num1 = Number(prompt('Enter the first number'));
// const num2 = Number(prompt('Enter the second number'));

// if(num1 > num2)
//     console.log(num1);
// else
//     console.log(num2);

// ------------------------------------ 4 -------------------

// const num = Number(prompt("Enter the number!"));
// if(num < 0)
//     console.log('negative');
// else    
//     console.log('positive');

// --------------------------------  5 ---------------------
// const num = Number(prompt("Enter the number!"));
// if(num % 2 === 0)
//     console.log('even');
// else    
//     console.log('odd');

// ----------------------------------- 6 -------------------

// const character = prompt('Enter your character');
// if((character === 'a') || (character === 'e') || (character === 'i') || (character === 'o') || (character === 'u') )
//     console.log('vowel');
// else 
//     console.log('Consonant');

// ---------------------------------------- 7 ----------------
// let num = Number(prompt("Enter the number!"));
// let counter = 0;
// const arr = [];
// while(num --){
//     arr.push(++counter)
// }
// console.log(arr.join(' '));
// ------------------------------------- 8 ------------------
// let num = Number(prompt("Enter an integer: "));
// let result = [];
// for (let i = 1; i <= 12; i++) {
//     result.push(num * i);
// }
// console.log(result.join(' '));
// ---------------------------------------- 9 ----------------
// let num = Number(prompt("Enter an integer: "));
// let result = [];
// for (let i = 2; i <= num; i+=2) {
//     result.push(i);
// }
// console.log(result.join(' '));
// ---------------------------------------- 10 ----------------
// let base = Number(prompt("Enter the base: "));
// let power = Number(prompt("Enter the power: "));
// let result = 1;
// for (let i = 1; i <= power; i++) {
//     result *= base;
// }
// console.log(result);
// ---------------------------------------- 11 ----------------
// console.log("Enter Marks for five subjects");
// let total = 0;
// for(let i = 0; i < 5 ; i++)
// {
//     total += Number(prompt())
// }
// console.log('Total Marks = ' ,total );
// console.log('Average Marks = ' ,total/5 );
// console.log('Precentage = ' ,(total / 500)*100 );
// ---------------------------------------- 12 ----------------
// console.log("Enter Marks for five subjects");
// let total = 0;
// for(let i = 0; i < 5 ; i++)
// {
//     total += Number(prompt())
// }
// console.log('Total Marks = ' ,total );
// console.log('Average Marks = ' ,total/5 );
// console.log('Precentage = ' ,(total / 500)*100 );
// ---------------------------------------- 13 ----------------
// let month = Number(prompt("Enter month number: "));
// let days;

// if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
//     days = 31;
// } else if (month === 4 || month === 6 || month === 9 || month === 11) {
//     days = 30;
// } else if (month === 2) {
//     days = 28;
// } else {
//     days = "Invalid month";
// }

// console.log(`Days in Month: ${days}`);


// ---------------------------------------- 14 ----------------
// const subjects = ["Physics", "Chemistry", "Biology", "Mathematics", "Computer"];
// let total = 0;
// for (let i = 0; i < 5; i++) {
//     total += (Number(prompt(`Enter marks for ${subjects[i]}:`)));
// }
// const percentage = (total / 500) * 100;
// let grade;

// switch (true) {
//     case percentage >= 90:
//         grade = "A";
//         break;
//     case percentage >= 80:
//         grade = "B";
//         break;
//     case percentage >= 70:
//         grade = "C";
//         break;
//     case percentage >= 60:
//         grade = "D";
//         break;
//     case percentage >= 40:
//         grade = "E";
//         break;
//     default:
//         grade = "F";
// }

// console.log(`Percentage = ${percentage}%`);
// console.log(`Grade = ${grade}`);

// ---------------------------------------- 15 ----------------
// let month = Number(prompt("Enter month number: "));
// let days;

// switch (month) {
//     case 1: case 3: case 5: case 7: case 8: case 10: case 12:
//         days = 31;
//         break;
//     case 4: case 6: case 9: case 11:
//         days = 30;
//         break;
//     case 2:
//         days = 28; 
//         break;
//     default:
//         days = "Invalid month";
// }
// console.log(`Days in Month: ${days}`);

// ---------------------------------------- 16 ----------------
// let char = prompt("Enter an alphabet: ");
// switch (char) {
//     case 'a': case 'e': case 'i': case 'o': case 'u':
//         console.log(`${char} is a vowel`);
//         break;
//     default:
//         console.log(`${char} is a consonant`);
// }
// ----------------- 17 -----------------------------------------
// const num1 = prompt("Enter the first number");
// const num2 = prompt("Enter the second number");

// switch(true){
//     case (num1 > num2):
//         console.log("the first number is bigger than the second number");
//         break;
//     case(num2 > num1):
//         console.log("the second number is bigger than the first number");
//         break;
//     default:
//         console.log("the both numbers are equal");
// }
// ----------------- 18 -----------------------------------------
// let number = Number(prompt("Enter a number: "));
// switch (number % 2 === 0) {
//     case true:
//         console.log(`${number} is even`);
//         break;
//     case false:
//         console.log(`${number} is odd`);
// }
//--------------------------- 19 -----------
// let num = Number(prompt("Enter a number: "));
// switch (true) {
//     case num > 0:
//         console.log(`${num} is positive`);
//         break;
//     case num < 0:
//         console.log(`${num} is negative`);
//         break;
//     default:
//         console.log("The number is zero");
// }
//--------------------------- 20 -----------
// let num1 = parseFloat(prompt("Enter first number: "));
// let num2 = parseFloat(prompt("Enter second number: "));
// let operator = prompt("Enter an operator (+, -, *, /): ");

// switch (operator) {
//     case '+':
//         console.log(`${num1} + ${num2} = ${num1 + num2}`);
//         break;
//     case '-':
//         console.log(`${num1} - ${num2} = ${num1 - num2}`);
//         break;
//     case '*':
//         console.log(`${num1} * ${num2} = ${num1 * num2}`);
//         break;
//     case '/':
//         if (num2 !== 0) {
//             console.log(`${num1} / ${num2} = ${num1 / num2}`);
//         } else {
//             console.log("Division by zero is not allowed");
//         }
//         break;
//     default:
//         console.log("Invalid operator");
// }
