import './App.css'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import 'animate.css';

function App() {



  return (
    <div className="app"> 
      <main>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
      </main>
      <Footer />
    </div>
  )
}

export default App
