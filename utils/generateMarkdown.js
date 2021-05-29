// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
${data.description}

## Table of Contents

* [Installation](#installation)

## Installation

To installl....

${data.install}

* [Usage](#usage)

## Usage

To use...

${data.usage}

* [License](#license)

## License

Licenses used...

${data.license}

* [Contributing](#contributing)

## Contributing

Contributions...

${data.contributing}

* [Tests](#tests)

## Tests

Tests ran...

${data.tests}

* [Questions](#questions)

## Questions

Questions asked...

${data.questions}
`;
}

module.exports = generateMarkdown;
