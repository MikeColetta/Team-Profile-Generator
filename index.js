//Calls inquirer and fs packages.
const inquirer = require('inquirer');
const fs = require('fs');


//User prompt questions to get data.
const promptUser = () =>
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "What is the Team Manager's name?"
        },
        {
            type: 'input',
            name: 'managerID',
            message: "What is the Team Manager's employee ID?"
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "What is the Team Manager's email?"
        },
        {
            type: 'input',
            name: 'officeNum',
            message: "what is the Team Manager's office number?"
        },
        {
            type: 'checkbox',
            name: 'otherEmployees',
            message: 'What other employees would you like to register? You can also hit done to finish building your team.',
            choices: [, 'Engineer', 'Intern', 'Done'],
            validate: (answer) => {
                if(answer === 'Engineer') {
                    prompt([
                        {
                            type: 'input',
                            name: 'engineerName',
                            message: "What is the engineer's name?"  
                        },
                        {
                            type: 'input',
                            name: 'engineerID',
                            message: "What is the engineer's employee ID?"
                        },
                        {
                            type: 'input',
                            name: 'engineerEmail',
                            message: "What is the engineer's email?"
                        },
                        {
                            type: 'input',
                            name: 'engineerGitHub',
                            message: "What is the engineer's GitHub username?"
                        },
                    ]).then () => {
                        
                    }
                }
                return true;
            }
        },
    ]);

const init = () => {
    promptUser().then((response) => {
        try {
            const renderHTML = renderHTML(response);
            fs.writeFileSync('GeneratedHTML.html', renderHTML);
            console.log('Success, Team Profile generated!');
        } catch (error) {
            console.log(error);
        }
    })
};

init();
