import * as chalk from "chalk";

export const warn = (...text: unknown[]) => {
  console.log(chalk.yellow(text));
};

export const info = (...text: unknown[]) => {
  console.log(chalk.cyan(text));
};

export const error = (...text: unknown[]) => {
  console.log(chalk.bgRed(text));
};
