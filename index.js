const yargs = require('yargs')
const args = yargs
  .usage('Usage: node index.js [options] <expression>')
  .option('f', {
    alias: 'forloop',
    describe: 'Evaluate the expression in a for loop',
    type: 'boolean',
  })
  .option('start', {
    alias: 's',
    describe: 'Start value for the for loop',
    type: 'number',
  })
  .option('end', {
    alias: 'e',
    describe: 'End value for the for loop',
    type: 'number',
  })
  .option('increment', {
    alias: 'i',
    describe: 'Step value for the for loop',
    type: 'number',
  })
  .option('c', {
    alias: 'copy',
    describe: 'Copy the result to the clipboard',
    type: 'boolean',
  })
  .help('h')
  .alias('h', 'help').argv

// Check if the -f or --forloop option is present
if (args.f || args.forloop) {
  quickEvalLoop()
} else {
  quickEval()
}

function quickEval() {
  const result = eval(args._[0])
  if (args.c || args.copy) {
    const ncp = require('copy-paste')
    ncp.copy(result, () => {})
  } else {
    console.log(result)
  }
}

function quickEvalLoop() {
  const start = args.start || 1
  const end = args.end || 10
  const step = args.step || 1
  let result = ''

  for (let i = start; i <= end; i += step) {
    result += eval(args._[0].replace(/\$/g, i)) + '\n'
  }

  if (args.c || args.copy) {
    const ncp = require('copy-paste')
    ncp.copy(result, () => {})
  } else console.log(result)
}
