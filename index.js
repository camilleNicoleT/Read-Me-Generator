const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const copyFile = require('./utils/generateMarkdown.js');

const questions = () => {
    console.log(`
    ============================================================
    Answer these questions to create your professional README!
    ============================================================
    `);
  return inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('Please enter a title!');
            return false;
          }
        },
      },
      {
      type: 'input',
      name: 'description',
      message: 'Describe your project. (Required)',
      validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('Please enter a description for your project!');
          return false;
        }
      },
    },
    {
      type: 'input',
      name: 'gitHub',
      message: 'What is your Github Username?',
      validate: gitHub => {
        if (gitHub) {
          return true;
        } else {
          console.log('Please enter your GitHub Username!');
          return false;
        }
      },
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the best email for people to reach you for inquiries?',
      validate: email => {
        if (email) {
          return true;
        } else {
          console.log('Please enter your email!');
          return false;
        }
      },
    },
    {
        type: 'checkbox',
        name: 'table',
        message: 'What would you like in your Table of Contents? Check all that apply (<a> for all, <space> to select, <enter> to submit)',
        choices: [
         ' - [Installation](#installation) ',
         ' - [Contributing](#contributing) ',
         ' - [Tests](#tests) ',
         ' - [License](#license) ',
         ' - [Questions](#Questions) ',         
        ]
    },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
        validate: installation => {
          if (installation) {
            return true;
          } else {
            console.log('Please enter the installation instructions!');
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'How does someone contribute to your project?',
        validate: contributing => {
            if (contributing) {
              return true;
            } else {
              console.log('Please enter contributing information!');
              return false;
        }
      },
      },
   {
     type: 'checkbox',
     name: 'license',
     message: 'What license did you use for this project?',
     choices: ['MIT', 'OpenFaas', 'GPL', 'Apache'],
       validate: chosenLicense => {
      if (chosenLicense) {
        return true;
      } else {
        console.log('Please choose a license!');
        return false;
      }
      }
    },
     {
    type: "input",
    name: 'tests',
     message: "How can someone run a test of your project?",
      },
  ])
  .then(data => {
    return data;
  });
};



function init() {
  questions()
  .then(data => {
    return generateMarkdown(data)
  })
  .then (createdReadMe => {
    return writeToFile(createdReadMe)
  })
  .then (writeToFileResponse => {
    console.log(writeToFileResponse)
  })
  .then(copyFileResponse => {
    console.log(copyFileResponse);
    return copyFile();
  })
  .catch (err => {
    console.log(err)
  })
};
const writeToFile = createdREADME => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./dist/README.md', createdREADME, err => {
        if (err) { reject (err)
          return;
        }
       resolve ({ ok:true,
      message:'README complete! Check out README.md to see the output!'})
    })
    });
  };
  

init();



