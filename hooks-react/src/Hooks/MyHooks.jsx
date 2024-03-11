import React, { useState } from 'react'



const MyHooks = () => {

    const [inputValue,SetinputValue]=useState('')

    const handleInputChange =(e)=>{
        const newVal=e.target.value
        SetinputValue(newVal)
        if (newVal.length <inputValue.length) {
          SetinputValue(newVal)
        }
        else{
      
          SetinputValue(e.target.value )
        }
    }
  return (
    <div>
        <h1>List to do</h1>
        <p>
            le message écrit est : {inputValue}
        </p>
        <p></p>
        <input type="text" 
        value={inputValue}
        onChange={handleInputChange}
        />
      
    </div>
  )
}

export default MyHooks




