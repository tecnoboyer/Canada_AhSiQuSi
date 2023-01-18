import { useEffect } from "react";
import { useState } from "react";
import {Message} from './Message'

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username:'leito',
        email: 'leito@gmail.com'
    })

    const {username,email} = formState;

    const onInputChange = ({target}) =>{
        const { name,value}= target;
        setFormState({
            ...formState,
            [name] : value
        })
    }

    useEffect(() => {
        // console.log("useEffect called!")
    },[])
    useEffect(() => {
        // console.log("cambió algo en el formulario!")
    },[formState])


    useEffect(() => {
        // console.log("seguimiento del email!")
    },[email])
    
    



  return (
    <>
    <h1>Formulario Simple</h1>

    <hr/>
    
    <input
    type="text"
    className="form-control"
    placeholder="Username"
    name="username"
    value={ username }
    onChange={ onInputChange}
    />

    <input
    type="email"
    className="form-control mt-2"
    placeholder="Email"
    name="email"
    value={email}
    onChange={ onInputChange}
    />

 
    {
     ( username === 'leito2')&&( <Message />)
    }

    



    </>

  )
}
