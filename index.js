// TODO: Include packages needed for this application
const inquirer = require("inquirer");
// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    name: "Username",
    message: "What is your Github username?",
},
{
    type: "input",
    name: "Tilte",
    message: "What is the title of the project?",
},
{
    type: "input",
    name: "Desription",
    message: "Provide a description of the project",
},

{
    type: "input",
    name: "Installation",
    message: "What dependencies do user need to install to run this app?",
},
{
    type: "input",
    name: "Usage",
    message: "Provide instructions to use the app.",

},
{
    type: "input",
    name: "Contributing",
    message: "Who contributed to this project?",
},
{
    type: "input",
    name: "License",
    message: "What license did you use?",
},
{
    type: "input",
    name: " Tests",
    message: "How to test this app?",
},

{
    type: "input",
    name: "Email",
    message: "What is your email address?",

},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
