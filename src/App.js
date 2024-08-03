
import { useState } from 'react';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';

import TextForm from './Components/TextForm';
import Alerts from './Alerts';
import {
  BrowserRouter as Router,
  // Route,
  // Routes
}from "react-router-dom"

function App() {
  const [mode, Setmode] = useState('light')
  const [alert, Setalert] = useState(null)

function showalert(msg, types) {
  Setalert({
    msg : msg,
    types: types
  })
  setTimeout(() => {
    Setalert(null);
  }, 2000);
}

 const toggleMode = ()=>{
    if(mode === 'dark'){
      Setmode('light')
      document.body.style.backgroundColor = 'white'
      showalert(":DarkMode has been disabled", "success")
    }
    else{
      Setmode('dark')
      document.body.style.backgroundColor = '#042743'
      showalert(":DarkMode has been Enabled", "success")
    }
  }

  return (
   <>
 <Router>
  <Navbar title='TextUtlis' mode={mode} toggleMode={toggleMode} />
  <Alerts alert={alert} />
  <div className="container my-3">
     <TextForm heading="Try TextUtlis - Online text analyzer " mode={mode} showalert={showalert} />
      
    
  </div>
</Router>
   </>
  );
}
// import { Form } from 'react-router-dom';

export default App;

