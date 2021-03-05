//Calls inquirer and fs modules.
const inquirer = require('inquirer');
const fs = require('fs');
//Links classes
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const renderHTML = require('./lib/renderHTML');

//Array that holds team members once created.
var currentStaff = [];

//User prompt questions to get data.
const selectStaff = () => {
    inquirer.prompt([
        {
            type: 'checkbox',
            name: 'otherEmployees',
            message: 'What employees would you like to your team? You can also hit done to finish building your team.',
            choices: ['Manager', 'Engineer', 'Intern', 'Done']
        }
    ]).then(response => {
        const choice = response.otherEmployees
        if (choice == 'Manager') {
            addManager();
        } else if (choice == 'Engineer') {
            addEngineer();
        } else if (choice == 'Intern') {
            addIntern();
        } else if (choice == 'Done') {
            renderHTML(currentStaff);
        }
    })
};

//Manager prompt questions.
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
        const manager = new Manager(response.managerName, response.managerID, response.managerEmail, 'Manager', response.officeNum);
        currentStaff.push(manager);
        selectStaff();
    })
    
};

//Engineer prompt questions
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
        const engineer = new Engineer(response.engineerName, response.engineerID, response.engineerEmail, 'Engineer', response.gitHub);
        currentStaff.push(engineer);
        selectStaff();
    })
    
}

//Prompts intern questions
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
        const intern = new Intern(response.internName, response.internID, response.internEmail, 'Intern', response.school);
        currentStaff.push(intern);
        selectStaff();
    }) 
};



//Starts application
const init = () => {
    selectStaff();
};

init();