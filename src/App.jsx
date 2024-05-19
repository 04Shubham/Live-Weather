import './App.css'
import Weather from './assets/pages/Weather'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Weather/>}/>
          <Route path="/weather" element={<Weather/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
