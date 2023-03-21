import 'zx/globals';
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";
import chalk from "chalk";
import fs from 'fs';
import main from "./cmds/main";
import hello from "./cmds/hello";

const pkg = JSON.parse(fs.readFileSync('./package.json').toString());

// const pkg = import('../package.json');

process.env.FORCE_COLOR = "true";

const parser = yargs(hideBin(process.argv))
  .strict()
  .command(main)
  .command(hello)
  .fail(function (msg, err, yargs) {
    if (err) throw err // preserve stack
    console.error(yargs.help());
    console.error(chalk.red(`\n\n\n===== Execute failed. =====\n\n${msg}\n`));
    process.exit(1);
  })
  .showHelpOnFail(false, '命令指定 --help 查看有效的选项')
  .wrap(null)
  .epilog('copyright 2023')
  .version(pkg.version)
  .alias('V', 'version')
  .help('help', '查看命令行帮助')
  .alias('h', 'help');

parser.parse();


