import { CommandModule } from "yargs";
import { Argv } from "yargs";

export interface IOptions {
  a?: boolean;
  b?: string;
  c?: number;
  d?: (string | number)[];
  e: number;
  f?: string;
  foo?: {
    bar?: string
  } | unknown
}

const cmd: CommandModule<{}, IOptions> = {
  command: "hello",
  describe: '子命令',
  builder: function (yargs: Argv) {
    return yargs
      .options({
        a: { type: 'boolean' },
        b: { type: 'string' },
        c: { type: 'number' },
        d: { type: 'array' },
        e: { type: 'count' },
        f: { choices: ['1', '2', '3'] },
        file: { type: 'string', alias: 'f' },
        hidden: { type: 'boolean', deprecated: 'use --display' },
        'display': { type: 'string' },
        debug: { type: 'boolean', group: 'debug:' },
        'log-level': { choices: ['debug', 'info', 'warn', 'error'], group: 'debug:' },
        foo: { }
      })
       // 用法示例
      .usage('$0 <package>')
      .usage('$0 <package> [--verbose] [-f=<path>]')
      .example([
        // 具体用法示例
        ['$0 --file "~/config.json"', 'Use custom config'],
        ['$0 --debug', 'Start in debug mode']
      ]);
  },
  handler: async (argv) => {
    console.log(argv)
  },
};

export default cmd;
