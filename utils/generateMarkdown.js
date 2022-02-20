const ListPrompt = require("inquirer/lib/prompts/list");

//Based off of the license they choose it will call the badge url
function licenseBadge(license) {
   if(license) {
     return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
   
    } 
  else {
      return '';
    }
  };
 
// // If there is no license, return an empty string
function licenseLink(license) {
  if(license){
  return `[${license}](https:choosealicense.com/licenses/${license})`; 
   } else {
      return '';
    }
   
  };

function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  return `
  ## License
  ${licenseBadge(license)}
  ${licenseLink(license)} 
  `;
};


function generateMarkdown(data) {
  return `# ${data.title}   
  ${renderLicenseSection(data.license)}
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
