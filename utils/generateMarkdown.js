
function generateMarkdown(data) {
  return `# ${data.title}

## title:
${data.title}

## Table of contents

-[Description](#description
-[Insatallation](#installation)
-[Email](#Email)
-[Github](#github)
-[License](#license)


## Decription:
# ${data.description}

## Installation:
# ${data.installation}

## Email:
# ${data.email}

## Github:
# ${data.github}

## License:
# ${data.license}

`;
console.log(data)
}
module.exports = generateMarkdown;
