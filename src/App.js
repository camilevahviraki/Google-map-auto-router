import { useEffect, useState } from 'react';
import './App.css';
import SingIn from './modules/SingIn';
import validator from 'validator';
import Axios from 'axios';

function App() {
  const initialValues = {
    name:"",
    mail:"",
    password:"",
  }
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [lastName, setLastName] = useState("");

  // const register = () => {

  // }
 
  const handleSubmit = () => {
    if(name.length === 0 || mail.length === 0 || password.length === 0 || password2.length === 0) {
      setErrorMessage('Please!Fill all fields for authentification');
    }else if(!validator.isEmail(mail)){
      setErrorMessage('Enter a valid email!');
    }else if(password.length <= 6){
      setErrorMessage('Password must contain 6 or more characters!');   
    }
    else if(password !== password2){
      setErrorMessage('Passwords do not match');   
    }else {
      Axios.post('http://localhost:8000/register',
      {userReg: name,
        mailReg: mail,
        passwordReg: password,
        lastName: lastName
      }).then((response) => console.log(response));
      setErrorMessage('Well done!');
    }
  }

  return (
    <div className="App">
      <h1 className='title1'>
        Sign Up
      </h1>
      <div className='form_Auth'>
        <input type="text" 
          className="name" 
          placeholder="Type your name"
          onChange={(e) => setName(e.target.value)}
        />
        <input type="text" 
          className="name_last" 
          placeholder="last name"
          onChange={(e) => setLastName(e.target.value)}
        />
        <input type="mail"
          className="mail" 
          placeholder="enter your mail"
          onChange={(e) => setMail(e.target.value)}
         />
        <input type="password" 
          className="password" 
          placeholder="enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="password" 
          className="password2" 
          placeholder="confirm password"
          onChange={(e) => setPassword2(e.target.value)}
        />
        <button id='btn_submit' 
            onClick={handleSubmit}>
            Sign up
        </button>
        <p className='Account'>Allready have an account? </p>
        <a id="Sign_up" href='#'>Sign In</a>
      </div>
      <p className='msgErr'>{errorMessage}</p>

      <SingIn/>
    </div>
  );
}

export default App;
