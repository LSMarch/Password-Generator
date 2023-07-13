// Accepted Characters array
const numberCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-"]
const lowerCaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// taking lowercase array and returning uppercase array
const upperCaseCharacters = lowerCaseCharacters.map(char => {
    return char.toUpperCase()
})

// adding all accepted characters into one array
const acceptedCharacters = numberCharacters.concat(specialCharacters, lowerCaseCharacters, upperCaseCharacters)

export default acceptedCharacters