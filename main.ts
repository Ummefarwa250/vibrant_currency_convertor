#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

// explain the list of currencies and the exchange rates
let exchange_rate: any = {
    "USD": 1,     //Base amount
    "EUR": 0.9,
    "CAD": 1.3,
    "JYP": 113,
    "AUD": 1.65,
    "PKR": 280,
} 

//protect the user to select currencies to convert from and to
let user_answer = await  inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "Select the currecy to convert from",
        choices: ["USD", "EUR", "CAD", "JYP", "AUD", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "Select the currency to convert into",
        choices:  ["USD", "EUR", "CAD", "JYP", "AUD", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert:"
    }
]);

//Perfom currency conversion by using Formula
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount

//formula of conversion 
let base_amount = amount / from_amount
let converted_amount = base_amount * to_amount

// display the converted amount 
console.log(`Converted Amount = ${converted_amount.toFixed(3)}`);