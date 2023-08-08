// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    name: "title",
    message: "Which is your project title?"
},
{
    type: "input",
    name: "description",
    message: "Make a short description of your project (what, why, how)."
},
{
    type: "input",
    name: "installation",
    message: "How do you install the app?"
},
{
    type: "input",
    name: "usage",
    message: "How do we use your app?"
},
{
    type: "input",
    name: "credits",
    message: "List collaborators, if any."
},
{
    type: "list",
    name: "license",
    message: "Chose a license for your app.",
    choices: ["MIT License", "Apache Licence 2.0", "GNU GPLv3"]
},
{
    type: "input",
    name: "github",
    message: "Which is your GitHub username?",
},
{
    type: "input",
    name: "email",
    message: "Which is your email?"
},
{
    type: "input",
    name: "tests",
    message: "Write tests for your application and provide examples on how to run them."
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
