
import { HashRouter, Route, Routes  } from 'react-router-dom'
import './App.css'
import './assets/css/navbar.css'
import './assets/css/empleos.css'
import './assets/css/detalles.css'
import Home from './components/Home'
import Empleos from './components/Empleos'
import EmpresasDetalles from './components/EmpresasDetalles'

function App() {
  
 
  return (
    <>
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/empleos/:termino" element={<Empleos/>}/>
        <Route  path='detalles/:id'  element={<EmpresasDetalles  />   } />   
      </Routes>

    </HashRouter>
      
    </>
  )
}

export default App
