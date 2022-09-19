import { Routes, Route } from 'react-router-dom'
import Register from './components/Register/Register'
import './App.css'
import Error from './pages/Error/Error'

function App() {

  return (
    <div className="container">
      <Routes>
        <Route path='/' element={<Register/>} />
        <Route path='*' element={<Error/>} />
      </Routes>
    </div>
  )
}

export default App
