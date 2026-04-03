import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import logo from '../assets/logo-aavya.png'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const navigate = useNavigate()
  const location = useLocation()

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false)
    setActiveDropdown(null)
  }, [location])

  // Scroll shadow on navbar
  useEffect(() => {
    const navbar = document.querySelector('.navbar')
    const handleScroll = () => {
      if (window.pageYOffset <= 0) {
        navbar.style.boxShadow = 'none'
      } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)'
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function handleHashNav(path, hash) {
    if (location.pathname === path) {
      const el = document.getElementById(hash)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      navigate(path + '#' + hash)
    }
    setMenuOpen(false)
    setActiveDropdown(null)
  }

  function toggleDropdown(name) {
    setActiveDropdown(prev => (prev === name ? null : name))
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-content">
          <div className="logo">
            <Link to="/"><img src={logo} alt="Aavya" className="logo-img" /></Link>
          </div>
          <div className={`nav-links${menuOpen ? ' active' : ''}`}>
            {/* Training dropdown */}
            <div className={`nav-item dropdown${activeDropdown === 'training' ? ' active' : ''}`}>
              <a
                href="#"
                className="nav-link"
                onClick={e => {
                  if (window.innerWidth <= 768) {
                    e.preventDefault()
                    toggleDropdown('training')
                  }
                }}
              >
                Training <span className="dropdown-arrow">&#9660;</span>
              </a>
              <div className="dropdown-content">
                <Link to="/curriculums" className="dropdown-item">
                  <strong>Curriculums</strong>
                  <span className="dropdown-desc">Role-based certification paths</span>
                </Link>
                <Link to="/certifications" className="dropdown-item">
                  <strong>Certifications</strong>
                  <span className="dropdown-desc">Professional credentials</span>
                </Link>
              </div>
            </div>

            {/* Applications dropdown */}
            <div className={`nav-item dropdown${activeDropdown === 'applications' ? ' active' : ''}`}>
              <a
                href="#"
                className="nav-link"
                onClick={e => {
                  if (window.innerWidth <= 768) {
                    e.preventDefault()
                    toggleDropdown('applications')
                  }
                }}
              >
                Applications <span className="dropdown-arrow">&#9660;</span>
              </a>
              <div className="dropdown-content">
                <Link to="/applications#crm" className="dropdown-item">
                  <strong>CRM</strong>
                  <span className="dropdown-desc">Customer Relationship Management</span>
                </Link>
                <Link to="/applications#employee-portal" className="dropdown-item">
                  <strong>Employee Portal</strong>
                  <span className="dropdown-desc">HR &amp; workforce management</span>
                </Link>
                <Link to="/applications#ctms" className="dropdown-item">
                  <strong>CTMS</strong>
                  <span className="dropdown-desc">Clinical Trial Management System</span>
                </Link>
              </div>
            </div>

            {/* Services dropdown */}
            <div className={`nav-item dropdown${activeDropdown === 'services' ? ' active' : ''}`}>
              <a
                href="#"
                className="nav-link"
                onClick={e => {
                  if (window.innerWidth <= 768) {
                    e.preventDefault()
                    toggleDropdown('services')
                  }
                }}
              >
                Services <span className="dropdown-arrow">&#9660;</span>
              </a>
              <div className="dropdown-content">
                <a
                  href="#"
                  className="dropdown-item"
                  onClick={e => { e.preventDefault(); handleHashNav('/', 'services') }}
                >
                  <strong>Consultancy</strong>
                  <span className="dropdown-desc">Strategic guidance and implementation</span>
                </a>
                <a
                  href="#"
                  className="dropdown-item"
                  onClick={e => { e.preventDefault(); handleHashNav('/', 'services') }}
                >
                  <strong>Staff Augmentation</strong>
                  <span className="dropdown-desc">Expert talent solutions</span>
                </a>
              </div>
            </div>

            <div className="nav-item">
              <Link to="/use-cases" className="nav-link">Use Cases</Link>
            </div>
            <div className="nav-item">
              <a
                href="#"
                className="nav-link"
                onClick={e => { e.preventDefault(); handleHashNav('/', 'about') }}
              >
                About
              </a>
            </div>
            <div className="nav-item">
              <a
                href="#"
                className="nav-link"
                onClick={e => { e.preventDefault(); handleHashNav('/', 'contact') }}
              >
                Contact
              </a>
            </div>
          </div>
          <button className="mobile-menu-btn" onClick={() => setMenuOpen(o => !o)}>&#9776;</button>
        </div>
      </div>
    </nav>
  )
}
