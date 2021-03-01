//Calls inquirer and fs packages.
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

var currentStaff = [];
//User prompt questions to get data.
const promptUser = () =>
    inquirer.prompt([
        {
            type: 'checkbox',
            name: 'otherEmployees',
            message: 'What employees would you like to your team? You can also hit done to finish building your team.',
            choices: [, 'Manager', 'Engineer', 'Intern', 'Done']
        }
    ]).then(response => {
        if (response === 'Manager') {
            addManager()
        } else if (response === 'Engineer') {
            addEngineer()
        } else if (response === 'Intern') {
            addIntern()
        } else if (response === 'Done') {
            //function to render HTML
        }
    })

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

const addManager = () => {
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
    ]).then(response => {
        const manager = new Manager(response.managerName, response.managerID, response.managerEmail, response.officeNum);
        currentStaff.push(manager);
    })
}

const addEngineer = () => {
    inquirer.prompt([
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
            name: 'gitHub',
            message: "What is the engineer's GitHub username?"
        },
    ]).then(response => {
        const engineer = new Engineer(response.engineerName, response.engineerID, response.engineerEmail, response.gitHub);
        currentStaff.push(engineer);
    })
}

const addIntern = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: "What is the intern's name?"
        },
        {
            type: 'input',
            name: 'internID',
            message: "What is the intern's employee ID?"
        },
        {
            type: 'input',
            name: 'internEmail',
            message: "What is the intern's email?"
        },
        {
            type: 'input',
            name: 'school',
            message: "What is the intern's school?"
        },
    ]).then(response => {
        const intern = new Intern(response.internName, response.internID, response.internEmail, response.school);
        currentStaff.push(intern);
    }