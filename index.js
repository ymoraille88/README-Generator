const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

inquirer
    .prompt([
        {
            type: 'input',
            message: "What is the title of your project?",
            name: 'title',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('please enter the title of your project.');
                    return false;
                }
            }
        },

        {
            type: 'input',
            message: "A description of your project",
            name: 'description',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('please provide a description if you do');
                    return false;
                }
            }

        },
        {
            type: 'input',
            message: "what are the steps to install the project?",
            name: 'installation',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('how do we install your project?');
                    return false;

                }
            }
        },
        {
            type: 'input',
            message: "what is your Email?",
            name: 'email',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('input your email address');
                    return false;

                }
            }
        },
        {
            type: 'input',
            message: "what is your Github?",
            name: 'github',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please input your github account');
                    return false;

                }
            }
        },

        {
            type: 'input',
            message: "Put additional contribution details.",
            name: 'contribution',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please  provide additional contribution information.');
                    return false;

                }
            }
        },
        {
            type: 'list',
            message: "which License are you choosing?",
            name: 'license',
            choices: ['IBM', 'MIT', 'Mozilla', 'ODbL'],
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please choose a license');
                    return false;

                }
            }
        },
    ]);


const writeToFile = data => {
    fs.writeToFile('readmeExample', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log(success)


        }
    })
};

function init() {
    inquirer(questions)
    .then(function(data){
writeToFile(generateMarkdown(data));
    })
 }


init();



