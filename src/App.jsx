
import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import './assets/css/navbar.css'
import Home from './components/Home'

function App() {
  

  return (
    <>
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>

    </HashRouter>
      
    </>
  )
}

export default App
