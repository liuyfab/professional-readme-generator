// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseType = license; 
  let yourLicense = ''
  if(licenseType === 'GPLv3') {
    yourLicense = `![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  } else if (licenseType === 'MIT') {
    yourLicense = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (licenseType === 'GPL') {
    yourLicense = `![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)`
  } else {
    license.license = "N/A"
  }
  return yourLicense;
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description
  # ${data.description}
## Content
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
## Installation 
  # ${data.installation}
## Usage
  # ${data.usage}
## Tests
  # ${data.tests}
## Username
  # ${data.username}
## License
  # ${data.license}
  ${renderLicenseBadge(data.license)}
`;
}

module.exports = generateMarkdown;
