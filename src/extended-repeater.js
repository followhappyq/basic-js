const CustomError = require("../extensions/custom-error")

module.exports = function repeater(str, options) {
  const separator = options.separator ? options.separator : "+"
  const repeatTimes = options.repeatTimes ? options.repeatTimes : 1
  const additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1
  const additionalSeparator = options.additionSeparator ? options.additionSeparator : "|"
  const arrayMain = []
  let addition

  if (typeof options.addition == "undefined") {
    addition = ""
  } else {
    addition = options.addition + ""
  }

  for (let i = 0; i < repeatTimes; i += 1) {
    let separator = []

    for (j = 0; j < additionRepeatTimes; j += 1) {
      separator.push(addition)
    }

    arrayMain.push(str + separator.join(additionalSeparator))
  }
  return arrayMain.join(separator)
}
