#! /usr/bin/env node     
     
     import inquirer from "inquirer";



const randomNumber = Math.floor(Math.random() * 10 + 1);


const answers = await inquirer.prompt([
    {
        name: "userGuesseNumber",
        type: "number",
        message: "please guess a number between 1-10: ",
    },




]);
if(answers.userGuesseNumber === randomNumber){
    console.log("congragulations! you guesse right number.")
}else {
    console.log("you guess wrong number");
}


