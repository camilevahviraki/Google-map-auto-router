import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SingIn from './modules/SingIn';
import SignUp from './modules/signUp';
import SimpleMap from './modules/google-map-direction';
import MyComponent from './modules/maps-api/google-map-api';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
     <Route path="/" element={<App />}/>
     <Route path='/SignUp' element={<SignUp/>}/>
     <Route path='/SignIn' element={<SingIn/>}/>
     <Route path='/mapGoogle' element={<SimpleMap/>}/>
     <Route path='/GoogleMapApi' element={<MyComponent/>}/>
  </Routes>
  
    
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
