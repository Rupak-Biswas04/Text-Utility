import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar.jsx"
import Content from "./components/Content.jsx"  
import Footer from "./components/Footer.jsx"
import Alert from "./components/Alert.jsx"
import About from './components/About.jsx'

function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)

  function toggleMode(newMode){
    console.log(mode)
    if(newMode === "dark"){
      setMode("dark")
      document.body.style.backgroundColor = "#2c2c2cff";
      document.body.style.color = "white";
      showAlert("Dark mode enabled", "success")
    }
    else if(newMode === "primary"){
      setMode("primary")
      document.body.style.backgroundColor = "#448fffff"
      document.body.style.color = "white"
      showAlert("Theme changed to Blue!", "success")
    }
    else if(newMode === "success"){
       setMode("success")
      document.body.style.backgroundColor = "#4dd093ff"
      document.body.style.color = "black"
      showAlert("Theme changed to Green!", "success")
    } 
    else if(newMode === "danger"){
      setMode("danger")
      document.body.style.backgroundColor = "#ff5f6fff"
      document.body.style.color = "white"
      showAlert("Theme changed to Red!", "success")
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
      showAlert("Light mode enabled", "success")
    }
  }
  function showAlert(message, type){
    setAlert({message, type})
    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }
  return(
    <div>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Content mode={mode} showAlert={showAlert} />  
      <About />
      <Footer mode={mode}/>
    </div>
  );
}

export default App