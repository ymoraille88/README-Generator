const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    {
        type: 'input',
        message: "What is the title of your project?",
        name: 'title',

    },

    {
        type: 'input',
        message: "A description of your project",
        name: 'description',
    },


    {
        type: 'input',
        message: "what are the steps to install the project?",
        name: 'installation',

    },
    {
        type: 'input',
        message: "what is your Email?",
        name: 'email',

    },
    {
        type: 'input',
        message: "what is your Github?",
        name: 'github',

    },

    {
        type: 'input',
        message: "Put additional contribution details.",
        name: 'contribution',

    },
    {
        type: 'list',
        message: "which License are you choosing?",
        name: 'license',
        choices: ['IBM', 'MIT', 'Mozilla', 'ODbL'],

    },
];


const writeToFile = data => {
    fs.writeFile('dist/README.md', data, err => {
        if (err) {
            console.log(err);
        } else {
            console.log('success');
        }
    })
};

function init() {
    inquirer.prompt(questions)
        .then(function (data) {
            writeToFile(generateMarkdown(data));
        })
}


init();



