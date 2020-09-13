const CustomError = require("../extensions/custom-error")

module.exports = function createDreamTeam(members) {
  try {
    return members
      .map((member) => {
        if (typeof member === "string") return member.trim()[0].toUpperCase()
      })
      .sort()
      .join("")
  } catch {
    return false
  }
}
