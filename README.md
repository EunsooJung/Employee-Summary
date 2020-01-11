# Employee-Summary

- Template Engine - Employee Summary with Node.js server

- You will build a software engineering team generator command line application. The application will prompt the user for information about the team manager and then information about the team members. The user can input any number of team members, and they may be a mix of engineers and interns.

- [Applied to My Reponsive Portfolio](https://eunsoojung.github.io/Unit-02-Responsive-Portfolio/portfolio.html)

## Getting Started

These instructions will get you a copy of the project setup and running on your local machine for development and testing purposes.
See deployment for notes on how to install, run, test the project on a live system.

```bash
# Install
npm i jest
npm i fs
npm i inquirer
npm i path

# test
npm run test

# Run
node index.js
```

## Preview

[![Template Engine - Employee Summary](https://github.com/EunsooJung/Employee-Summary/blob/master/assets/images/Emp-Summ.gif)](https://github.com/EunsooJung/Employee-Summary/blob/master/assets/images/Emp-Summ.gif)

## Usage

### Basic Usage

After downloading, simply edit the HTML, CSS and Javascript files included with the template in your favorite text editor to make changes. These are the only files you need to worry about, you can ignore everything else! To preview the changes you make to the code, you can open the `generateHTML.js` file in your web browser.

## Guidelines:

- Proceeds as follows:

1. Run tests
2. Run application
3. Input employee's data
4. Repeat

## The project structure:

[![Project Structure](https://github.com/EunsooJung/Employee-Summary/blob/master/assets/images/Proejct-Structure.png)](https://github.com/EunsooJung/Employee-Summary/blob/master/assets/images/Proejct-Structure.png)

## HTML

- Created Multiple HTML templates to render for each type of user.
  - main.html
  - engineer.html
  - intern.html
  - manager.html

## Classes

- The project has the these classes: Employee, Manager, Engineer, Intern.
- These classes passed all tests in the tests directory.
- The first class is an Employee parent class with the followed properties and methods:
  - name
  - id
  - title
  - getName()
  - getId()
  - getEmail()
  - getRole() // Returns 'Employee'
- The other three classes will extend Employee.

## User input

The project applied prompt the user to build an engineering team. An engineering team consists of a manager, and any number of engineers and interns.

## Roster output

The project generated a index.html page in the output directory, that displays a nicely formatted team roster. Each team member should display the following in no particular order:

- Name
- Role
- ID

Role-specific property (School, link to GitHub profile, or office number)

## Code Snippet

```javascript

- generateHTML.js check point

...
// setup templates and output folder
const templatesDir = path.resolve(__dirname, '../templates');
const outputDir = path.resolve(__dirname, '../output/');
...
// Define render function to render html files
async function render(employees) {
  const html = [];

  const [
    managerTemplate,
    internTemplate,
    engineerTemplate,
    mainTemplate
  ] = await Promise.all([
    readFile(path.resolve(templatesDir, 'manager.html'), 'utf8'),
    readFile(path.resolve(templatesDir, 'intern.html'), 'utf8'),
    readFile(path.resolve(templatesDir, 'engineer.html'), 'utf8'),
    readFile(path.resolve(templatesDir, 'main.html'), 'utf8')
  ]);

  html.push(
    employees
      .filter(employee => employee instanceof Manager)
      .map(employee => {
        let template = managerTemplate;
        for (const key in employee) {
          template = replacePlaceholder(template, key, employee[key]);
        }
        return template;
      })
      .join('')
  );
...

```

## Built With

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [jest](https://jestjs.io/): Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
- [path.js](https://nodejs.dev/the-nodejs-path-module): This module provides path.sep which provides the path segment separator (\ on Windows, and / on Linux / macOS), and path.delimiter which provides the path delimiter (; on Windows, and : on Linux / macOS).

## Authors

- **Michael(Eunsoo)Jung**

* [Template Engine - Employee Summary: Node.js and ES6](https://eunsoojung.github.io/Employee-Summary/)
* [My Portfolio](https://eunsoojung.github.io/Unit-02-Responsive-Portfolio/portfolio.html)
* [Link to Github](https://github.com/)
* [Link to LinkedIn](www.linkedin.com/in/eun-soo-jung/)

## License

This project is licensed under the MIT License
