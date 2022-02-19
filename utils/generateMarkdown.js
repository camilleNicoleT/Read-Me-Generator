// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string

const ListPrompt = require("inquirer/lib/prompts/list");

function licenseBadge(data) {
   if(chosenLicense === 'MIT') {
    licenseBadge = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (chosenLicense === 'OpenFaas') {
    licenseBadge = `[![OpenFaaS](https://img.shields.io/badge/openfaas-cloud-blue.svg)]`
  } else if (chosenLicense === 'GPL') {
    licenseBadge = `![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)`
  }  else if (chosenLicense === 'GPL') {
    licenseBadge = `![Apache license](https://www.apache.org/licenses/)`
    } 
  else {
      return '';
    }
    return licenseBadge;
  };
 
// // If there is no license, return an empty string
function licenseLink(data) {
 
  if(chosenLicense === 'MIT') {
    licenseLink = `![License: MIT](' https://opensource.org/licenses/MIT'`
  } else if (chosenLicense === 'OpenFaaS') {
    licenseLink = `![OpenFaaS license](https://www.openfaas.com)`
  } else if (chosenLicense === 'GPL') {
    licenseLink = `![GPL license](https://www.gnu.org/licenses/gpl-3.0.en.html)`
  }  else if (chosenLicense === 'GPL') {
    licenseLink = `![Apache license](https://www.apache.org/licenses/)` 
   } else {
      return '';
    }
    return licenseLink;
  };
  

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string

function renderLicenseSection(data) {
  if (!license) {
    return '';
  }
  return `
  ## License

  ${data.license}
  ${renderLicenseSection(data.licenseBadge, data.licenseLink)}
  `;
};


function generateMarkdown(data) {
  return `# ${data.title}    
 ## ${data.description}
 
 ## Table of Contents:
  ${data.table}
 ## Installation
  ${data.installation}
 ## Test
  ${data.tests}
## Contributing
 ${data.contributing}
## Questions
${data.gitHub}
${data.email}
`;
}

module.exports = generateMarkdown;
