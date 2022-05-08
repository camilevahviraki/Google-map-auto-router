import { useEffect, useState } from 'react';
import './App.css';
import SingIn from './modules/SingIn';
import SignUp from './modules/signUp';
import { Link } from "react-router-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SimpleMap from './modules/google-map-direction';
import MyComponent from './modules/maps-api/google-map-api';

function App() {

  return (
    <div className="App">
      <h1>Welcome to victron </h1>   
      <Link to="/SignUp">SignUp</Link>
      <div></div>
        <Link to="/SignIn">SignIn</Link> 
        <Link to="/mapGoogle">Google Map</Link> 
        <Link to="/GoogleMapApi">Google Map Api</Link>
        <SingIn/>
      
    </div>
  );
}

export default App;
