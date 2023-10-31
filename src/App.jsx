import './App.css'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {



  return (
    <>
    
      <Header /> 
      <main>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      </main> 
    </>
  )
}

export default App
