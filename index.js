// packages
const fs = require('fs');
const inquirer = require('inquirer');
// local
const generateTemplate = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generate-site');
// classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
// array to hold team data
const teamData = [];
// ===========================================================================================================

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
    ])
};

const promptTeam = () => {
    console.log(`
=================
Add a Team Member
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

// function checkData(teamData, employeeData) {
//     console.log('test 1: ',teamData);
//     console.log('test 2: ', employeeData);
//     if (employeeData.addTeam === false) {
//         console.log('checkTeamData: ', teamData);
//         console.log('checkEmployeeData: ', employeeData);
//     }
// };


promptManager()
    // take data from promptManager()
    .then(managerData => {
        // use data to create new Manager object
        let newManager = new Manager(managerData.name, managerData.id, managerData.email, managerData.officeNumber);
        // push newManager object to teamData Array
        teamData.push(newManager);
    })

    // initiates promptTeam inquirer function
    .then(promptTeam)

    // take data from promptTeam()
    .then(employeeData => {
        // if Engineer selected
        if (employeeData.role === 'Engineer') {
            // use data to create new Engineer object
            let newEngineer = new Engineer(employeeData.name, employeeData.id, employeeData.email, employeeData.github)
            // push newEngineer to teamData Array
            teamData.push(newEngineer);
        // if Intern selected
        } else {
            // use data to create new Intern object
            let newIntern = new Intern(employeeData.name, employeeData.id, employeeData.email, employeeData.school);
            // push newIntern to teamData Array
            teamData.push(newIntern);
        }

        // if "yes" is selected for addTeam run promptTeam() again
        if (employeeData.addTeam === true) {
            promptTeam();
        } else {
            console.log('teamData: ', teamData);
        }
    });

module.exports = promptManager;
