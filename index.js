// Include packages needed for this application
const fs = require('fs');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


// Create an array of questions for user input
const questions = [{
    type: "input",
    name: "Username",
    message: "What is your Github username?",
},
{
    type: "input",
    name: "Title",
    message: "What is the title of the project?",
},
{
    type: "input",
    name: "Description",
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
    name: "Tests",
    message: "How to test this app?",
},

{
    type: "input",
    name: "Email",
    message: "What is your email address?",

},
];

// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if(err) {
            return console.log(err)
        }else {
            console.log("check out the new README file")
        }
    })
 }

//  Create a function to initialize app
function init() { 
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("README.md", generateMarkdown(data));
    })
}

// Function call to initialize app
init();
