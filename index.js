import enquirer from 'enquirer'
import clipboard from 'clipboardy'
const { prompt } = enquirer

;(async () => {
  const response = await prompt({
    type: 'input',
    name: 'expression',
    message: 'Expression to evaluate:',
  })

  const evaluatedResponse = eval(response.expression).toString()

  await clipboard.write(evaluatedResponse)
})()
