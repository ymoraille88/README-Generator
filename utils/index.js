const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: "What is your name?",
      name: 'name',
    },
    {
      type: 'list', 
      message: "What languages do you know?",
      name: 'languages',
      choices: ['English', 'French', 'German', 'Spanish', 'Klingon']
    },
    {
      type: 'rawlist',
      message: "What is your preferred method of communication?",
      name: 'communications',
      choices: ['email', 'phone', 'pidgeon', 'mail-runner', 'garbage heap']
    },
  ])
  .then((response) =>
    fs.appendFile('info.txt', `${JSON.stringify(response)}\n`, (err) => 
    err ? console.log('Yoinks!') : console.log('Got your info my friend!')));