
import './App.css';
import Navbar from './Components/Navbar';
import PropTypes from 'prop-types';
import TextForm from './Components/TextForm';
import AboutComponent from './Components/About';
import { useState } from 'react';
import Alert from './Components/Alert';
// import { BrowserRouter , Routes, Route } from "react-router-dom";
import React from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState({ msg: "", type: "" });

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type

    });

    setTimeout(() => {
      setAlert(null);
    }, 3000);

  };
  const changeMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#11244e';
      showAlert("Dark mode has been enaled", "success");

    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enaled", "success");
    }

  };

  return (
    <>
    <Navbar mode={mode} toggleMode={changeMode} />
    <Alert alert={alert} />
    <div className="container my-3"  >
    <TextForm showAlert={showAlert} heading="Enter text to analyze" mode={mode} />
    </div>
    {
    // <BrowserRouter>
       
    //     <div className="container my-3"  >
    //     <Routes>
    //       <Route exact path="/about" element={<AboutComponent mode={mode}/>}/>
          
          
    //       <Route exact path="/" element={ <TextForm showAlert={showAlert} heading="Enter text to analyze" mode={mode} />}/>
    //     </Routes>
    //   </div>
    // </BrowserRouter>
    }
</>
  );
};



Navbar.defaultProps = {
  title: 'TextUtils App'
};


Navbar.propTypes = {
  title: PropTypes.string,
};

export default App;
