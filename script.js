/*
Understanding Data Types in JavaScript

Objective: The objective of this assignment is to help students grasp the concept 
    of data types in JavaScript and practice working with different types of data.

Problem Statement: Imagine you are developing a student management system for a school.
    Your task is to create a JavaScript program that declares variables to store information about students,
    such as their names, ages, grades, and attendance status.*/

// Task 1: Declare variables to represent student information such as name, age, grade, and attendance status.

let studentName, studentAge, studentGrade, studentAttendance;

// Task 2: Assign sample values to the student information variables.

studentName = "Bart Simpson";
studentAge = 10;
studentGrade = 4;
studentAttendance = "late";

// Task 3: Display the student information using console.log() statements.

console.log(`Student ${studentName} is ${studentAge} years old. He is in ${
    studentGrade}th grade and today he was ${studentAttendance}.`);




/*Exploring JavaScript Operators

Objective: The objective of this assignment is to familiarize students with different
    types of operators in JavaScript and reinforce their understanding through practical exercises.


Problem Statement: You are tasked with developing a simple calculator program in JavaScript.
    Your program should be able to perform basic arithmetic operations such as
    addition, subtraction, multiplication, and division.*/

// Task 1: Declare variables to store two numeric values for performing arithmetic operations.

let num1, num2;

// Task 2: Assign sample numeric values to the variables declared in Task 1.

num1 = 3, num2 = 7;

// Task 3: Perform arithmetic operations on your numeric values using various operators and display the results.

console.log("Sum:", num1 + num2);
console.log("Difference:", num1 - num2);
console.log("Product:", num1 * num2);
console.log("Quotient:", num1 / num2);

// Task 4: Explore assignment operators and update the values of variables.

num1 = 4, num2 = 29;
console.log("Updated num1:", num1);
console.log("Updated num2:", num2);

// Task 5: Use comparison operators to compare the values of variables.

console.log("Is num1 equal to num2?", num1 == num2 ? "Yes" : "No");
console.log("Is num1 greater than num2?", num1 > num2 ? "Yes" : "No");
console.log("Is num1 not equal to num2?", num1 != num2 ? "Yes" : "No");

// Task 6: Apply logical operators to combine conditions and display the results.

let isPositive = num1 > 0 && num2 > 0;
let isEven = num1%2 == 0 || num2%2 == 0;
console.log("Are both numbers positive?", isPositive ? "Yes" : "No");
console.log("Is at least one number even?", isEven ? "Yes" : "No");
