// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string

function licenseBadge(licenseBadge) {
   if(licenseBadge === 'MIT') {
    license = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (licenseBadge === 'OpenFaas') {
    license = `[![OpenFaaS](https://img.shields.io/badge/openfaas-cloud-blue.svg)]`
  } else if (licenseBadge === 'GPL') {
    license = `![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)`
    else if (licenseBadge === 'GPL') {
      license = `![Apache license](https://ie`
    } 
  else {
      return '';
    }
    return chosenlicense;
  }
 


// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
function licenseLink(licenseLink) {
 
  if(licenseLink === 'MIT') {
    yourLicense = `![License: MIT](' https://opensource.org/licenses/MIT'`
  } else if (licenseLink === 'OpenFaaS') {
    yourLicense = `![OpenFaaS license](https://www.openfaas.com)`
  } else if (licenseLink === 'GPL') {
    yourLicense = `![GPL license](https://www.gnu.org/licenses/gpl-3.0.en.html)`
  }  else if (licenseLink === 'GPL') {
    yourLicense = `![Apache license](https://www.apache.org/licenses/)` 
   } else {
      return '';
    }
    return chosenlicense;
  }
  

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string

const renderLicenseSection = license => {
  if (!license) {
    return '';
  }

  return `
  ## License
  ${data.license}

  `;
};


function generateMarkdown(data) {
  console.log('data', data);
  console.log('data title', data.title);
  return `# ${data.title}     ###### ${data.license}
 ## ${data.description}
 
 ## Table of Contents:
  ${data.table}
 ## Installation
  ${data.installation}
 ## Usage
  ${data.usage}
## Contributing
 ${data.contributing}
## Questions
${data.gitHub}
${data.email}
${renderLicenseSection(licenseBadge, licenseLink)}
`;
}

module.exports = generateMarkdown;
