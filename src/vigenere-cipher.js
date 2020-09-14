const CustomError = require("../extensions/custom-error")

class VigenereCipheringMachine {
  alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ]

  constructor(value = true) {
    this.direct = value
  }

  decrypt(str, key) {
    if (str == undefined || key == undefined) throw new Error()
    let temp
    let i = 0
    str = this.direct ? str.toUpperCase().split("") : str.toUpperCase().split("").reverse()
    key = this.direct ? key.toUpperCase().split("") : key.toUpperCase().split("").reverse()

    return str
      .map((item) => {
        if (this.alphabet.indexOf(item) == -1) {
          return item
        } else {
          i = i < key.length ? i : 0
          temp = this.alphabet.length + this.alphabet.indexOf(item) - this.alphabet.indexOf(key[i++])
          return this.alphabet[temp < this.alphabet.length ? temp : temp - this.alphabet.length]
        }
      })
      .join("")
  }

  encrypt(str, key) {
    if (str == undefined || key == undefined) throw new Error()
    let temp = 0
    let i = 0
    str = this.direct ? str.toUpperCase().split("") : str.toUpperCase().split("").reverse()
    key = this.direct ? key.toUpperCase().split("") : key.toUpperCase().split("").reverse()

    return str
      .map((item) => {
        if (!this.alphabet.includes(item)) return item
        else {
          i = i < key.length ? i : 0
          temp = this.alphabet.indexOf(item) + this.alphabet.indexOf(key[i++])
          return this.alphabet[temp < this.alphabet.length ? temp : temp - this.alphabet.length]
        }
      })
      .join("")
  }
}

module.exports = VigenereCipheringMachine
