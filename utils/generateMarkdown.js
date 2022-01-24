// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(License) {
  if(License === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  else if(License ==="Apache"){
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if(License ==="GPL"){
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  } else
  return `"not licensed"`
 }


// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.Title}
  https://github.com/${data.Username}/${data.Title}

  ## Description
  ${data.Description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  The user will need to install the following dependencies to run the application: ${data.Installation}

  ## Usage
  ${data.Usage}
  
  ## Contributing
  Contributors: ${data.Contributing}

  ## Tests
  The following is needed to run the test: ${data.Tests}

  ![alt text](./assets/images/screenshot.png)

  ## License
  ${renderLicenseBadge(data.License)}

  ## Questions
  If you have any question about this application, please contact ${data.Username} at ${data.Email}. 

`;
}

module.exports = generateMarkdown;
