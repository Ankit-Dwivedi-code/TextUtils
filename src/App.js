import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alerts from './Alerts';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  function showAlert(msg, types) {
    setAlert({
      msg: msg,
      types: types
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert(":DarkMode has been disabled", "success");
    } else {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert(":DarkMode has been Enabled", "success");
    }
  }

  return (
    <Router>
      <div>
        <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} />
        <Alerts alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path ="/about" element={<About />} />
            <Route exact path="/" element={<TextForm heading="Enter text to analyze" mode={mode} showalert={showAlert} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
