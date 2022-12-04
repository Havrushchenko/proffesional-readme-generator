// Include packages needed for this application
const inquirer = require('inquirer');
const FileSystem = require('fs');
const generateMarkdown = require('/Users/volodya/Desktop/projects/proffesional-readme-generator/srs/generateMarkdown.js');

// An array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is a title of your project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('You need to enter a title of your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('You need to enter a project description!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How to install your project? (Required)',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('You need to enter an installation description!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How to use your project? (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('You need to enter an description of how to use your project!');
                return false;
            }
        }
    },
    // Contribution
    {
        type: 'input',
        name: 'testing',
        message: 'Testing instructions: (Required)',
        validate: testingInput => {
            if (testingInput) {
                return true;
            } else {
                console.log('You need to enter an instruction of how to trest your project!');
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'licensing',
        message: 'Choose a license for your project: (Required)',
        choices: ['Eclipse Public License', 'BSD', 'Affero General Public License', 'Artistic License', 'CDDL', 'Microsoft Public License', 'None'],
        validate: licensingCheckbox => {
            if (licensingCheckbox) {
                return true;
            } else {
                console.log('You must pick a license for the project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username: (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project: (Required)',
        validate: linkInput => {
            if (linkInput) {
                return true;
            } else {
                console.log('You need to enter a project GitHub link!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email adress: (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('You need to enter your email adress!');
                return false;
            }
        }
    }
];

// Function to generate a README.md
function writeToFile(fileContent) {
    return new Promise((resolve, reject) => {
        FileSystem.writeFile('./README.md', fileContent, err => {
            if (err) {
                reject(err);
                return
            }
            resolve
            console.log('Success! Information transferred to the README!')
        })
    })
}

// Function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (answer) {
            console.log(answer)
            var fileContent = generateMarkdown(answer);
            writeToFile(fileContent);
        });
};

// Function call to initialize app
init();


