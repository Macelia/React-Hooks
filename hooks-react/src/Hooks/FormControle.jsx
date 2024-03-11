import React,{useState} from 'react'

const FormControle = () => {

    const [username,setusername]=useState('')
    const [password,setpassword]=useState('')

    // const handleInputChange=(e)=>{
    const handleInputChange = ({ target: { name, value } }) => {
        // const {name, value}=e.target;

        if(name==='username'){
            setusername(value) 

        }
        if(name==='password'){
            setpassword(value)
        }
        
        
    }
   
  return (
    <div>
        <form action="">
            <input type="text" 
            name='username'
            value={username} 
            placeholder='username' 
            onChange={handleInputChange}/>
            <label > The username is : {username}</label>

            <input type="password"
            name='password' 
            value={password}
            placeholder='password' 
            onChange={handleInputChange}/>
            <label > The password is :{password}</label>
        </form>
      
    </div>
  )
}

export default FormControle
