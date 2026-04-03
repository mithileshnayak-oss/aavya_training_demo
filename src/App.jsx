import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Curriculums from './pages/Curriculums'
import Certifications from './pages/Certifications'
import UseCases from './pages/UseCases'
import Applications from './pages/Applications'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/curriculums" element={<Curriculums />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/use-cases" element={<UseCases />} />
        <Route path="/applications" element={<Applications />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
