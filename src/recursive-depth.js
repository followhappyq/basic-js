const CustomError = require("../extensions/custom-error")

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) return 0

    let count = 0

    arr.forEach((item) => {
      count = Math.max(this.calculateDepth(item), count)
    })

    return ++count
  }
}
