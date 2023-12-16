import { BrowserRouter, Route,Routes } from 'react-router-dom';
import './App.css';
import Alerts from './components/Alerts';
import About from './components/About';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import React,{useState} from 'react'


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [newColor, setNewColor] = useState('white');

  const selectColor=(event)=>{
    if(event.target.value!=='default'){
      document.body.style.backgroundColor='#'+event.target.value; 
      if(mode==='light'){
        document.body.style.color="black";
      }
      else{
        document.body.style.color="white";
      }
      setNewColor('#'+event.target.value);
      showAlert("The background Color is Changed ","success");
    }
  }

  const showAlert=(message,type)=>{
    setAlert({
      message:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode has been Enabled","success");
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been Enabled","success");
      
    }
  }
  return (
    <>
      {/* <NavBar title="TextUtils" aboutText="About" contactText="Contact" mode={mode} toggleMode={toggleMode} selectColor={selectColor}/>
      <Alerts alert={alert}/>
      <TextForm showAlert={showAlert} heading="Enter the Text to Analyize" mode={mode} newColor={newColor}/>
      <About/> */}
      <BrowserRouter>
      <NavBar title="TextUtils" aboutText="About" contactText="Contact" mode={mode} toggleMode={toggleMode} selectColor={selectColor}/>
      <Alerts alert={alert}/>
        <Routes>
          <Route path='/' element={<TextForm showAlert={showAlert} heading="Enter the Text to Analyize" mode={mode} newColor={newColor}/>}/>
          <Route path='/About' element={<About/> }/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
