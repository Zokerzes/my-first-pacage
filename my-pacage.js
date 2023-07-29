import { say } from 'cowsay';
import chalk from 'chalk';

const hello = 'Hello, World!';
const eyes = chalk.blue.bold('oO');
const tongue = chalk.rgb(255, 51, 153).italic(' U');

console.log(say({
  text: 'Хто здесь?',
  e: eyes,
  T: tongue,
  mode: 'b',
}));




