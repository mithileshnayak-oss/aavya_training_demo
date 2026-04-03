import { Link, useNavigate, useLocation } from 'react-router-dom'

export default function Footer() {
  const navigate = useNavigate()
  const location = useLocation()

  function handleHashNav(e, path, hash) {
    e.preventDefault()
    if (location.pathname === path) {
      const el = document.getElementById(hash)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      navigate(path + '#' + hash)
    }
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Training</h4>
            <ul>
              <li><Link to="/curriculums">Curriculums</Link></li>
              <li><Link to="/certifications">Certifications</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Applications</h4>
            <ul>
              <li><Link to="/applications#crm">CRM</Link></li>
              <li><Link to="/applications#employee-portal">Employee Portal</Link></li>
              <li><Link to="/applications#ctms">CTMS</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="#" onClick={e => handleHashNav(e, '/', 'services')}>Consultancy</a></li>
              <li><a href="#" onClick={e => handleHashNav(e, '/', 'services')}>Staff Augmentation</a></li>
              <li><a href="#" onClick={e => handleHashNav(e, '/', 'industries')}>Industries</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><Link to="/use-cases">Use Cases</Link></li>
              <li><a href="#" onClick={e => handleHashNav(e, '/', 'about')}>About</a></li>
              <li><a href="#" onClick={e => handleHashNav(e, '/', 'contact')}>Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Aavya. All rights reserved.</p>
          <div className="footer-social">
            <a href="mailto:contact@aavya.com">contact@aavya.com</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
