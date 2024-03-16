const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Square, Circle } = require('./shapes');

class CLI {
    run() {
        return inquirer
            .prompt([
                // Text prompt
                {
                    type: "input",
                    message: "Enter text for logo? (3 characters max)",
                    name: "text",
                    validate: function (input) {
                        // Validate input to ensure it's not more than 3 characters
                        return input.length <= 3 ? true : "Please enter at most 3 characters.";
                    }
                },
                // Text color prompt
                {
                    type: "input",
                    message: "Enter text color",
                    name: "textColor",
                },
                // Shape choice prompt
                {
                    type: "list",
                    message: "Enter logo shape?",
                    choices: ["Triangle", "Square", "Circle"],
                    name: "shape",
                },
                // Shape color prompt
                {
                    type: "input",
                    message: "Enter shape color",
                    name: "shapeColor",
                },
            ])
            .then((answers) => {
                // Create an instance of the selected shape class based on user's choice
                let shape;
                switch (answers.shape) {
                    case 'Triangle':
                        shape = new Triangle(answers.shapeColor);
                        break;
                    case 'Square':
                        shape = new Square(answers.shapeColor);
                        break;
                    case 'Circle':
                        shape = new Circle(answers.shapeColor);
                        break;
                    default:
                        throw new Error("Invalid shape choice");
                }

              // Generate SVG content using the provided answers and selected shape instance
              const svgContent = `
              <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg" alignment-baseline="middle">
                  ${shape.render()}
                  <text x="50%" y="50%" dy="0.6em" text-anchor="middle" font-size="50" fill="${answers.textColor}">${answers.text}</text>
              </svg>
              `;


                // Write SVG content to file named 'logo.svg'
                fs.writeFileSync('logo.svg', svgContent);
                console.log("Generated logo.svg.");
            })
            .catch((error) => {
                console.error(error.message);
            });
    }
}

module.exports = CLI;