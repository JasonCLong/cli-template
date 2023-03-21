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
  .epilog('如需了解更多信息，请在以下网址查看使用手册 http://example.com')
  .version(pkg.version)
  .alias('V', 'version')
  .help('help', '查看命令行帮助')
  .alias('h', 'help');

parser.parse();


