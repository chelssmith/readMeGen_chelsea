// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'none') {
  return ''
};
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
////function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description  
${data.description}

## Table of Contents

* [Installation](#installation)
### Installation
${data.install}

* [Usage](#usage)
### Usage
${data.usage}

* [License](#license)
### License
${data.license}

* [Contributing](#contributing)
### Contributing
${data.contribute}

* [Tests](#tests)
### Tests
${data.test}

* [Questions](#questions)
### Contact Me
You can reach me at..\n
${data.github}
${data.email}
`;
}

module.exports = generateMarkdown;
renderLicenseBadge();
