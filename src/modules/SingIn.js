import React, {useEffect, useState} from 'react';
import {appFirebas, analytics} from './firebaseAuth';


function SingIn() {

    
    const [mailAuth, setMailAuth] = useState('');
    const [pass, setPass] = useState('');

    const handleSignIn = (e) => {
        alert('Signed In')
    }

  return (
    <div>
        <form onSubmit={handleSignIn}>
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
            <button type='submit' >Sign In</button>
        </form>
    </div>
  )
}

export default SingIn