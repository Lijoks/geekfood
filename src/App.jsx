import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Quote from './components/Quote'
import RestaurantPage from './components/RestaurantPage'
import Foods from './components/Foods'          
import About from './components/About'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Testimonials />
            </>
          } />
          <Route path="/quote" element={<Quote />} />
          <Route path="/restaurant" element={<RestaurantPage />} />
          <Route path="/foods" element={<Foods />} />  
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App