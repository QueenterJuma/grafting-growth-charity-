import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import Donate from './pages/Donate'

// import Payment from './pages/Payment'

function App() {

  return (
    <div >
      <BrowserRouter>
  <Navbar />
        <Routes>
          <Route path='/' element={ <Home/> } />
          <Route path='/services' element={ <Services /> } />
          <Route path='/gallery' element={ <Gallery /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/contact' element={ <Contact /> } />
          <Route path='donate' element={<Donate />} />
        </Routes>        

        <Footer />
      </BrowserRouter>
      
    </div>
  )
}

export default App
