// TODO  includes packages needed for this application
const fs = require ("fs");
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO create an array of questions for user input 
// generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Describe your project"
    },
    {
        type: "input",
        name: "install",
        message: "What does the user need to know to install your program?"
    },
    {
        type: "input",
        name: "usage",
        message: "What usage notes would you like to share with the user?"
    },
    {
        type: "list",
        name: "license",
        message: "What license are you using?",
        choices: ["MIT", "APACHE", "Mozzila Public License", "Boost Software License"]
    },
    {
        type: "input",
        name: "contribute",
        message: "Who contributed to your app?"
    },
    {
        type: "input",
        name: "test",
        message: "What tests did you run?"
    },
    {
        type: "input",
        name: "github",
        message: "What's your Github username?"
    },

    {
        type: "input",
        name: "email",
        message: "What's your email address?"
    }
    
];

// TODO create a function to write ReadMe file using the user input from our choices above
function writeToFile(filename, data) {
    return fs.writeFileSync(path.join(process.cwd(), filename), data);
}

// TODO create a function to intialize the app 
function init () {
    inquirer.prompt(questions)
    .then((response) => {
            console.log("your readMe is being created....");
            writeToFile("./README.md", generateMarkdown({...response}))
        })
}

// function call to initialize app 
init ();