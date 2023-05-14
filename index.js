const inquirer = require('inquirer');
const fs = require('fs');
const { error } = require('console');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter the title of your project:',
            name: 'title',
            default: 'N/A',
        },
        {
            type: 'input',
            message: 'Enter a description of your project (You can press Enter for N/A):',
            name: 'description', 
            default: 'N/A',
        },
        {
            type: 'input',
            message: 'Enter the installation instructions (You can press Enter for N/A):',
            name: 'installation',
            default: 'N/A', 
        },
        {
            type: 'input',
            message: 'Enter the usage information (You can press Enter for N/A):',
            name: 'usage', 
            default: 'N/A',
        },
        {
            type: 'input',
            message: 'Enter the contribution guidelines (You can press Enter for N/A):',
            name: 'contributing', 
            default: 'N/A',
        },
        {
            type: 'input',
            message: 'Enter the test instructions (You can press Enter for N/A):',
            name: 'tests', 
            default: 'N/A',
        },
        {
            type: 'list',
            message: 'Choose a license for your project:',
            name: 'license', 
            choices: [
                'MIT',
                'Apache 2.0',
                'GPL 3.0',
                'BSD 3-Clause',
                'None',
              ],
        },
        {
            type: 'input',
            message: 'Enter your GitHub username:',
            name: 'username',
            default: 'N/A',   
        },
        {
            type: 'input',
            message: 'Enter your email address:',
            name: 'email',
            default: 'N/A',
        },
    ])
    .then((Response)=>{
        const Badge = `https://img.shields.io/badge/license-${encodeURIComponent(Response.license)}-blue`;
        var content=`
# ${Response.title}
![License](${Badge})

## Description
${Response.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${Response.installation}

## Usage
${Response.usage}

## Contributing
${Response.contributing}

## Tests
${Response.tests}

## License
This project is covered under the (${Response.license}) license.

## Questions
For additional questions, contact me through GitHub or email:
- GitHub: [${Response.username}](https://github.com/${Response.username})
- Email: ${Response.email}
`;
        fs.writeFile('README.md', content,(error) =>
            error ? console.error(error) : console.log('README.md file has been successfully created!'));
    });