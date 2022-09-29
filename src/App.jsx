import { Routes, Route } from 'react-router-dom'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import './App.css'

function App() {

  return (
    <div className="container">
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
        </Routes>
    </div>
  )
}

export default App
