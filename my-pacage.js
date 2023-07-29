import { say } from 'cowsay';
import chalk from 'chalk';
import art from "ascii-art";

const hello = 'Hello, World!';
const eyes = chalk.blue.bold('oO');
const tongue = chalk.rgb(255, 51, 153).italic(' U');
const ar = art.style("Хто здесь?", 'green', true)

console.log(say({
  text: ar,
  e: eyes,
  T: tongue,
  mode: 'b',
}));




