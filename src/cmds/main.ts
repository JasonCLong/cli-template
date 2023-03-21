import { CommandModule } from "yargs";
import { Argv } from "yargs";
import { startSpinner, succeedSpiner } from "../lib/spinner";

export interface IOptions {
  file?: string
}

const cmd: CommandModule<{}, IOptions> = {
  command: "$0",
  describe: '主命令',
  builder: function (yargs: Argv) {
    return yargs
      .options({
        file: { type: 'string', alias: 'f' }
      })
       // 用法示例
      .usage('$0 <file>')
      .example([
        // 具体用法示例
        ['$0 --file "~/config.json"', 'Use custom config'],
      ]);
  },
  handler: async (argv) => {
    startSpinner('processing');
    return new Promise((resolve) => {
      setTimeout(() => {
        succeedSpiner('done!');
        console.log(argv)
      }, 2000);
    })
  },
};

export default cmd;
