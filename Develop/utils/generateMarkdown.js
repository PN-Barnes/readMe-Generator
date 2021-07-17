// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      license = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)" 
      break;

    case 'Mozilla':
      license = 
      "![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)"
      
      break;

    case 'Apache':
      license = 
      
      "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)"
      
      break;

    case 'BSD-2':
      license =
      '![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)'

      break;

    case 'BSD-3':
      license = 
      "![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)"
      break;

    case 'Unlicense':
      license = 
       "![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)"
      break;
    case 'Boost':
      license = 
      "![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)"
      
      break;

    default:
      license = ''
      break;
  }
  return license
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
       license = 
       "[License: MIT](https://opensource.org/licenses/MIT)" 
      
      break;

    case 'Mozilla':
      license = 
      "[License: MPL 2.0](https://opensource.org/licenses/MPL-2.0)"
      
      break;

    case 'Apache':
      license = 
      
      "[License: Apache-2.0](https://opensource.org/licenses/Apache-2.0)"
      
      break;
    case 'BSD-2':
      license = 
      '[License](https://opensource.org/licenses/BSD-2-Clause)'

      break;

    case 'BSD-3':
      license = 
      "[License: BSD-3](https://opensource.org/licenses/BSD-3-Clause)"
      
      break;

    case 'Unlicense':
      license = 
      "[License: Unlicense](http://unlicense.org/)"
      
      break;

    case 'Boost':
      license = 
      "[License](https://www.boost.org/LICENSE_1_0.txt)"
      
      break;


    default:
      license = ''
      break;
  }
  return license;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ${renderLicenseBadge(data.license)}

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
  
  This application is covered under the ${renderLicenseLink(data.license)} license. Please click the link to be taken to what this license covers for the application.

  ## Contributing

  ${data.contributing}
  
  ## Tests

  ${data.tests}
  
  ## Questions

  [${data.gitHubUN}](https://github.com/${data.gitHubUN})
  
  ${data.email}
  
`;
}

module.exports = {
  generateMarkdown,
};
