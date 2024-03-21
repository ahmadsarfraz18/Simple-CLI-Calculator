#!/usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter first Number", type: "number", name: "firstNumber" },
  { message: "Enter second Number", type: "number", name: "secondNumber" },
  {
    message: "Select one of the operators to perform operation",
    type: "list",
    name: "operators",
    choices: ["Addition", "Subtraction", "Multiplication", "Division", "Modulus", "Exponention"],
  },
]);

if (answer.operators === "Addition"){
console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operators === "Subtraction") {
  console.log(answer.firstNumber - answer.secondNumber); 
}  else if (answer.operators === "Multiplication") {
  console.log(answer.firstNumber * answer.secondNumber);
}  else if (answer.operators === "Division") {
  console.log(answer.firstNumber / answer.secondNumber);
}  else if (answer.operators === "Modulus") {
  console.log(answer.firstNumber % answer.secondNumber);
} else if (answer.operators === "Exponention") {
  console.log(answer.firstNumber ** answer.secondNumber);
} else {
  console.log("Please select a valid operator");

}
 

