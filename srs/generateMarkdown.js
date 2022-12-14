// Function that returns a license badge based on which license is passed in
// If there is no license, it returns an empty string
function renderLicenseBadge(license) {
  var badge = "";
  if (badge === "None") {
    badge = ""
  } else if (license === 'Apache 2.0') {
    badge = "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)"
  } else if (license === "GNU GPL v3") {
    badge = "![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)"
  } else if (license === "Eclipse Public License 1.0") {
    badge = "![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)"
  } else if (license === "The MIT License") {
    badge = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"
  }
  return badge;
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  var licenseLink = "";
  if (licenseLink === "None") {
    licenseLink = ""
  } else if (license === "Apache 2.0") {
    licenseLink = 'http://www.apache.org/licenses/LICENSE-2.0'
  } else if (license === "GNU GPL v3") {
    licenseLink = "https://www.gnu.org/licenses/gpl-3.0"
  } else if (license === "Eclipse Public License 1.0") {
    licenseLink = "https://opensource.org/licenses/EPL-1.0"
  } else if (license === "The MIT License") {
    licenseLink = "https://opensource.org/licenses/MIT"
  } else {
    licenseLink = ""
  }
  return licenseLink;
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  var licenseSection = "";
  if (licenseSection === "None") {
    return licenseSection = "";
  } else {
    licenseSection = `License: ${license}`
  }
  return licenseSection;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## ${renderLicenseSection(data.license)} ${renderLicenseBadge(data.license)}
  ### ${renderLicenseLink(data.license)}
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Testing](#testing)
  - [Additional Info](#additional-info)

  ## Description:
  ${data.description}
  
  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## Testing:
  ${data.testing}

  ## Additional Info:
  - Github: https://github.com/${data.github}
  - Email: ${data.email}
`;
}

module.exports = generateMarkdown;
