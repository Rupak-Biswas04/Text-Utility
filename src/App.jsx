import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar.jsx"
import Content from "./components/Content.jsx"  
import Footer from "./components/Footer.jsx"
import Alert from "./components/Alert.jsx"
import About from './components/About.jsx'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)

  function toggleMode(){
    console.log(mode)
    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor = "#878787ff";
      showAlert("Dark mode enabled", "success")
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = "whitesmoke"
      showAlert("Light mode enabled", "success")
    }
  }
  function showAlert(message, type){
    setAlert({message, type})
    setTimeout(() => {
      setAlert(null)
    }, 2500)
  }
  return(
    <BrowserRouter>
      <div className="app-container">
        <Navbar mode={mode} toggleMode={toggleMode} className="navbar"/>
        <Alert alert={alert} />
        <div className="content-wrapper">
          <Routes>
            <Route exact path="/" element={<Content mode={mode} showAlert={showAlert} />} />
            <Route exact path="/about" element={<About mode={mode}/>} />
          </Routes>
        </div>
        <Footer mode={mode}/>
      </div>
    </BrowserRouter>
  );
}
export default App