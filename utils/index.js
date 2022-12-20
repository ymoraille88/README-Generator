const inquirer = require('inquirer');
const fs = require('fs');

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
                    console.log('please enter the title of your project.')
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
                    console.log('please provide a description if you do')
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
                    console.log('how do we install your project?')
                    return false;

                }
            }
        },
    ])
