import React, {useEffect, useState} from 'react';
import {appFirebas, analytics} from './firebaseAuth';
import validator from 'validator';
import Axios from 'axios';


function SingIn() {

    
    const [mailAuth, setMailAuth] = useState('');
    const [passAuth, setPass] = useState('');
    const [connection, setConnection] = useState('');
    const [formMsg, setFormMSg] = useState('');

    const handleSignIn = (e) => {
        if(mailAuth.length === 0 ||passAuth.length === 0) {
            setFormMSg('Please, fill all inpusts!')
        }else if(!validator.isEmail(mailAuth)){
            setFormMSg('Enter a valid email')
        }else {
          setFormMSg('welcom to vitron')
          Axios.post('http://localhost:8000/signIn',
          {
            mailAuth: mailAuth,
            passwordAuth: passAuth,
          }).then((response, error) => {
            if(error)console.log(error)
            if (response)console.log(response)
          }) ;
        }
    }

  return (
    <div>
       
            <input type="mail"
            className="mailAuth" 
            placeholder="enter your mail"
            onChange={(e) => setMailAuth(e.target.value)}
            />
            <input type="password" 
            className="passwordAuth" 
            placeholder="enter your password"
            onChange={(e) => setPass(e.target.value)}
            />
            <p>Kip me signed in</p>
            <input type='checkbox' 
            onChange={(e) => setConnection(e.target.value)}
            />
            <button onClick={handleSignIn} >Sign In</button>
            <p>{formMsg}</p>
       
    </div>
  )
}

export default SingIn