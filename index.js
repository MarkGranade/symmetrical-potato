const fs = require('fs');
const inquirer = require('inquirer');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// array to hold team data
const teamData = [];

const promptManager = () => {
    return inquirer.prompt([
        // manager's name
        {
            type: 'input',
            name: 'name',
            message: 'Enter team manager (Required)',
            validate: managerInput => {
                if (managerInput) {
                    return true;
                } else {
                    console.log('Please enter team manager');
                    return false;
                }
            }
        },
        // manager's ID
        {
            type: 'input',
            name: 'id',
            message: 'Enter employee id',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter employee ID (Required');
                    return false;
                }
            } 
        },
        // manager's email
        {
            type: 'input',
            name: 'email',
            message: "Please enter employee's email address.",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        // manager's office number
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter team manager's office number.",
            validate: phoneInput => {
                if (phoneInput) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'confirmAddTeam',
            message: 'Would you like to add another team member?',
            choices: ['Engineer', 'Inter', 'Finish building your team']
        }
    ])
};

const promptTeam = () => {
    console.log(`
=================
Add a New Project
=================
`);
    return inquirer.prompt([
        // employee's role
        {
            type: 'list',
            name: 'role',
            message: "What is the employee's role?",
            choices: ['Engineer', 'Intern']
        },
        // employee's name
        {
            type: 'input',
            name: 'name',
            message: "Please enter the employee's name",
            validate: (nameInput) => {
                if (nameInput) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        // employee's ID
        {
            type: 'input',
            name: 'id',
            message: "Please enter the employee's ID",
            validate: (idInput) => {
                if (idInput) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        // employee's email
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email address",
            validate: (emailInput) => {
                if (emailInput) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter github',
            when: answers => answers.role === 'Engineer'
        },
        {
            type: 'input',
            name: 'school',
            message: 'Please enter school',
            when: answers => answers.role === 'Intern'
        },
        {
            type: 'confirm',
            name: 'addTeam',
            message: 'Would you like to add another team memeber?',
            default: false,
        },
    ])
};

promptManager()
    .then(managerData => {
        let newManager = new Manager(managerData.name, managerData.id, managerData.email, managerData.officeNumber);
        teamData.push(newManager);
    })
    .then(promptTeam)
    .then(employeeData => {
        console.log(employeeData);

        if (employeeData.role === 'Engineer') {
            let newEngineer = new Engineer(employeeData.name, employeeData.id, employeeData.email, employeeData.github)
            teamData.push(newEngineer);
        } else {
            let newIntern = new Intern(employeeData.name, employeeData.id, employeeData.email, employeeData.school);
            teamData.push(newIntern);
        }

        if (employeeData.addTeam === true) {
            promptTeam();
        }
        console.log(teamData);
    });

module.exports = promptManager;
