//  Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");

// Create an array of questions for user input
const questions = [
    { type: "input", message: "What is the project title?", name: "title" },
    { type: "input", message: "Please enter a project description", name: "description" },
    { type: "input", message: "Please enter the application installation instructions:", name: "installation" },
    { type: "input", message: "Please enter the usage information:", name: "usage" },
    { type: "input", message: "Please enter the test cases:", name: "tests" },
    { type: "input", message: "Please enter GitHub username:", name: "username" },
    { type: "list", message: "Please select a licence", name: "license",choices: ['N/A', 'GPLv3', 'GPL', 'MIT',] },
]

// Create a function to write README file
    // function writeToFile(fileName, data) {
    // return new Promise((resolve, reject) => {
    // const dir = "./dist"})
    // }

// Create a function to initialize app
function init() { 
    inquirer.prompt(questions)
    .then((inquirerResponse) => { 
        var markdown = generateMarkdown(inquirerResponse); 
        console.log("Making ReadMe"); 
        fs.writeFileSync("ReadMe.md", markdown);
    })
    .catch((err) => {
        console.log(err);
    })
}

// Function call to initialize app
init();
