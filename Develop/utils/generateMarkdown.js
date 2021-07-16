// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
var licenseBadge;
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      licenseBadge = `
      [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
      `
      break;

    case 'Mozilla':
      licenseBadge = `
      [![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)
      `
      break;

    case 'Apache':
      licenseBadge = `
      [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
      `
      break;

    case 'BSD':
      licenseBadge = `
      [![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
      
      [![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)
      `
      break;

    case 'Unlicense':
      licenseBadge = `
      [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)
      `
      break;
    case 'Boost':
      licenseBadge = `
      [![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)
      `
      break;


    default:
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description 
  
  ${data.description}

  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation 
  
  ${data.install}

  ## Usage

  ${data.usage}
  
  ## License 
  
  ${renderLicenseBadge(data.license)}

  ## Contributing

  ${data.contributing}
  
  ## Tests

  ${data.tests}
  
  ## Questions

  ${data.gitHubUN}
  ${data.email}
  
`;
}

module.exports = {
  generateMarkdown,
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection
};
