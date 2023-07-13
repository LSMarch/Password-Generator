import React, { useState } from 'react'

const Generator = ({ approvedCharacters }) => {
    const [newPassword, setNewPassword] = useState("")
    const [isPassword, setIsPassword] = useState(false)

    // array of characters 
    const generatedPasswordArray = []

    const generatePassword = () => {
        // preset password length
        const maxLength = 20
        for (let i = 0; i < maxLength; i++) {
            const selectedCharacter = approvedCharacters[Math.floor(Math.random() * (approvedCharacters.length - 0) + 0)]
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