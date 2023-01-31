
function generateMarkdown(data) {
  return `

# ${data.title}

## Table of contents

-[Description](#description)
-[Insatallation](#installation)
-[Email](#email)
-[Github](#github)


## Decription:
${data.description}

## Installation:
${data.installation}

## Email:
${data.email}

## Github:
${data.github}

## Contributing
${data.contributing}

`;
}
module.exports = generateMarkdown;
