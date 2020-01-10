const inquirer = require('inquirer');
const render = require('./lib/generateHTML');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamMembers = [];

function createManager() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: "Input manager's name: "
      },
      {
        type: 'input',
        name: 'id',
        message: "Input manager's id: "
      },
      {
        type: 'input',
        name: 'email',
        message: "Input manager's email: "
      },
      {
        type: 'input',
        name: 'office',
        message: "Input manager's office number: "
      }
    ])
    .then(function(answers) {
      const manager = new Manager(
        answers.name,
        parseInt(answers.id),
        answers.email,
        parseInt(answers.office)
      );
      teamMembers.push(manager);
      addMember();
    });
}

function addMember() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'type',
        message: 'Which type of team member would you like to add?',
        choices: [
          'Engineer',
          'Intern',
          "I don't want to add anymore else team members."
        ]
      }
    ])
    .then(function(answer) {
      if (answer.type === 'Engineer') {
        createEngineer();
      } else if (answer.type === 'Intern') {
        createIntern();
      } else {
        render(teamMembers);
      }
    });
}

function createEngineer() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: "Input engineer's name: "
      },
      {
        type: 'input',
        name: 'id',
        message: "Input engineer's id: "
      },
      {
        type: 'input',
        name: 'email',
        message: "Input engineer's email: "
      },
      {
        type: 'input',
        name: 'github',
        message: "Input engineer's github: "
      }
    ])
    .then(function(answers) {
      const engineer = new Engineer(
        answers.name,
        parseInt(answers.id),
        answers.email,
        answers.github
      );
      teamMembers.push(engineer);
      addMember();
    });
}

function createIntern() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: "Input intern's name: "
      },
      {
        type: 'input',
        name: 'id',
        message: "Input intern's id: "
      },
      {
        type: 'input',
        name: 'email',
        message: "Input intern's email: "
      },
      {
        type: 'input',
        name: 'school',
        message: "Input intern's school: "
      }
    ])
    .then(function(answers) {
      const intern = new Intern(
        answers.name,
        parseInt(answers.id),
        answers.email,
        answers.school
      );
      teamMembers.push(intern);
      addMember();
    });
}
createManager();
