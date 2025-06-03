import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './components/Landing'
import Login from './components/Login'
import Signup from './components/Signup'
import Filter from './components/Filter'
import Header from './components/Header'

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/filter" element={<Filter/>} />
        
        <Route path="/brand">
          <Route index element={<h1>Choose a brand</h1>} />
          <Route path="brand1" element={<h1>HP</h1>} />
          <Route path="brand2" element={<h1>DELL</h1>} />
          <Route path="brand3" element={<h1>LENOVO</h1>} />
          <Route path="brand4" element={<h1>ASUS</h1>} />
          <Route path="brand5" element={<h1>TOSHIBA</h1>} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
