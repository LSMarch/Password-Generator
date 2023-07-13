import React, { useState } from 'react'

const Generator = () => {
    // state for password and if 
    const [newPassword, setNewPassword] = useState("")
    const [isPassword, setIsPassword] = useState(false)

    // TODO: move to utils?
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

    // array of characters 
    const generatedPasswordArray = []

    const generatePassword = () => {
        // preset password length
        const maxLength = 20
        for (let i = 0; i < maxLength; i++) {
            const selectedCharacter = acceptedCharacters[Math.floor(Math.random() * (acceptedCharacters.length - 0) + 0)]
            generatedPasswordArray.push(selectedCharacter)
        }

        // making array into a string
        setNewPassword(generatedPasswordArray.join(""))

        // show display
        setIsPassword(true)
    }

    return (
        <>
            <button onClick={generatePassword} >Generate!</button>
            {isPassword ? <div>{newPassword}</div> : <div>WAITING FOR PASSWORD</div>}
        </>

    )
}

export default Generator