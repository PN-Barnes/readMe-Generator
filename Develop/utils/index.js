// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
//const generateMarkdown = require('generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'What is the title of the Readme?',
    name: "title",
},
{
    type: 'input',
    message: 'Please Write the description of your project.',
    name: 'description'
},
{
    type:'input',
    message: 'Please write the install instructions needed for this application. preferable step-by-step details.',
    name: 'install'

},
{
    type: 'input',
    message: 'Please add the usage examples for the application, format for including screenshots: ![title](filePath)',
    name: 'usage'
},
{
    type: 'list',
    message: 'Please select a license used for this project application',
    choices:['MIT', 'Unlicense', 'Mozilla', 'Apache', 'BSD'],
    name: 'license'
},
{
    type: 'input',
    message: 'Please specify the guidelines for implementing contributions to this project', 
    name: 'contributing'
},
{
    type: 'input',
    message: 'what is your github Username?',
    name: 'gitHubUN'
}
];
inquirer
    .prompt(questions)
    .then((Response)=>{
        console.log(Response)
    })

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, (err) =>
//       err ? console.error(err) : console.log('Success!')
//     );

// }

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
// init();
