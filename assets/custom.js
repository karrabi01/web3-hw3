// Do ... While examples------------------------------------------
// ---------------------------------------------------------------
// Example 1 -----------------------------------------------------
// let option;
// do {
//   console.log("1. Option 1");
//   console.log("2. Option 2");
//   console.log("3. Exit");
//   option = prompt("Enter your choice:");

//   switch (option) {
//     case "1":
//       console.log("you choose option 1");
//       break;
//     case "2":
//      console.log("you choose option 2");
//       break;
//   }
// } while (choice !== "3");
// ---------------------------------------------------------------
// Example 2 -----------------------------------------------------
// let userPassword = "Lilac";
// let enteredPassword;
// do {
//   enteredPassword = prompt("Enter your password:");
// } while (enteredPassword !== userPassword);
// console.log("Welcome!");
// ---------------------------------------------------------------
// Example 3 -----------------------------------------------------
// let sunnyInput, windyInput, isSunny, isWindy;

// do {
//   sunnyInput = prompt("Is it sunny outside? (true or false)");
// } while (sunnyInput !== "true" && sunnyInput !== "false");

// do {
//   windyInput = prompt("Is it windy outside? (true or false)");
// } while (windyInput !== "true" && windyInput !== "false");

// isSunny = sunnyInput === "true";
// isWindy = windyInput === "true";

// if (isSunny && !isWindy) {
//   console.log("It's a great day for outdoor activities.");
// } else if (isSunny && isWindy) {
//   console.log("It's sunny but windy. Be cautious.");
// } else {
//   console.log("The weather is not suitable for outdoor activities.");
// }
// ---------------------------------------------------------------
// Example 4 -----------------------------------------------------
// let userDayOfWeek;

// do {
//   const userInput = prompt("Enter the day of the week (0-6, where 0 is Sunday):");
//   userDayOfWeek = (userInput);
//   if ((userDayOfWeek) || userDayOfWeek < 0 || userDayOfWeek > 6) {
//     alert("Invalid input. Please enter a valid day of the week (0-6).");
//   }
// } while ((userDayOfWeek) || userDayOfWeek < 0 || userDayOfWeek > 6);

// if (userDayOfWeek === 0 || userDayOfWeek === 6) {
//   console.log("It's the weekend. Enjoy!");
// } else {
//   console.log("It's a weekday. Keep working.");
// }
// ---------------------------------------------------------------
// Example 5 -----------------------------------------------------
// let age;
// let canVote;

// do {
//   const ageInput = prompt("Please enter your age:");
//   age = parseInt(ageInput);
//   if (age) {
//     alert("Invalid input. Please enter a valid age.");
//   }
// } while (age);

// canVote = (age >= 18) ? "You can vote!" : "You are not eligible to vote.";
// alert(canVote);
// ---------------------------------------------------------------
// Example 6 -----------------------------------------------------
// let number = 5;
// let factorial = 1;
// let i = 1;
// do {
//   factorial *= i;
//   i++;
// } while (i <= number);
// console.log("Factorial of " + number + " is " + factorial);
// ---------------------------------------------------------------
// Example 7 -----------------------------------------------------
// let sum = 0;
// let i = 1;
// do {
//   sum += i;
//   i++;
// } while (i <= 100);
// console.log("Sum of numbers from 1 to 100: " + sum);
// // ---------------------------------------------------------------
// Example 8 -----------------------------------------------------
// let numbers = [3, 6, 9, 12, 15];
// let sum = 0;
// let i = 0;
// while (i < numbers.length) {
//   sum += numbers[i];
//   i++;
// }
// let average = sum / numbers.length;
// console.log("Average of the numbers: " + average);
// ---------------------------------------------------------------
// Example 9 -----------------------------------------------------
// let number = 2;
// let sum = 0;
// do {
//   sum += number;
//   number += 2;
// } while (number <= 20);
// console.log(`Sum of even numbers from 1 to 20: ${sum}`);
// ---------------------------------------------------------------
// Example 10 -----------------------------------------------------
// let n = 10;
// let a = 0, b = 1, temp, i = 0;
// do {
//   console.log(a);
//   temp = a + b;
//   a = b;
//   b = temp;
//   i++;
// } while (i < n);
// ---------------------------------------------------------------
// Sum of the number from 1 to 100--------------------------------
// let sum = 0;

// for (let i = 1; i <= 100; i++) {
//   sum += i;
// }

// console.log("The sum of numbers from 1 to 100 is: " + sum);
// ---------------------------------------------------------------
// Power of three ------------------------------------------------
for (let number = 1; number <= 100; number++) {
     const result = number ** 3;
     console.log(`${number}^3 = ${result}`);
}