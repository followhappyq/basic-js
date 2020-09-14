const CustomError = require("../extensions/custom-error")

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let calculationObject = {}

  calculationObject.turns = Math.pow(2, disksNumber) - 1
  calculationObject.seconds = Math.floor(calculationObject.turns / (turnsSpeed / 3600))

  return calculationObject
}
