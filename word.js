#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
const answers = await inquirer.prompt([
    {
        name: 'sentence',
        type: 'input',
        message: chalk.red('\n \t Enter your sentences ')
    }
]);
const words = answers.sentence.trim().split(" ");
console.log(words);
console.log(`\n \t ${words}`);
console.log(chalk.yellow(`\n \t Your sentence count the word is ${words.length}`));
