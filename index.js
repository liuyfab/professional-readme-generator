// TODO: Include packages needed for this application
const fs = require(fs);
const inquirer = require("inquirer");
const markdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    { type: "input", message: "What is the project title?", name: "title" },
    { type: "input", message: "Please enter a project description", name: "description" },
    { type: "input", message: "Please enter the application installation instructions:", name: "installation" },
    { type: "input", message: "Please enter the usage information:", name: "usage" },
    { type: "input", message: "Please enter the test instructions:", name: "tests" },
    { type: "input", message: "Please enter GitHub username:", name: "username" },
    { type: "list", message: "Please select a licence", name: "license" },
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
    const dir = "./dist"})

// TODO: Create a function to initialize app
function init() {inquirer.prompt(questions)
    .then((inquirerResponse, data) => {   
        console.log("Making ReadMe");
        fs.writeFileSync("ReadMe.md", inquirerResponse, data);
    })
    .catch((err) => {
        console.log(err);
    })
}

// Function call to initialize app
init();
