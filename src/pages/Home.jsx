import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function Home() {
  const location = useLocation()
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', company: '', industry: '', message: '' })

  // Scroll to hash after navigation
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 50)
    }
  }, [location])

  // Scroll-based fade-in animation (mirrors script.js)
  useEffect(() => {
    const selectors = '.service-card, .why-card, .industry-card, .method-phase, .presence-card, .preview-card, .uc-metric, .uc-detail-card'
    const els = document.querySelectorAll(selectors)
    els.forEach(el => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(20px)'
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
    })
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0)'
        }
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you soon.')
    setForm({ name: '', email: '', company: '', industry: '', message: '' })
  }

  function scrollTo(id) {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="gradient-overlay"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="partner-badge">
              <span>Palantir Foundry Implementation Partner</span>
            </div>
            <h1 className="hero-title">
              Transform Enterprise Operations with{' '}
              <span className="gradient-text">Palantir Foundry</span> Expertise
            </h1>
            <p className="hero-subtitle">
              Delivering future-ready solutions powered by Palantir Foundry and AIP.
              From data integration and ontology design to operational AI &mdash;
              we turn fragmented data into unified operational intelligence.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary" onClick={e => { e.preventDefault(); scrollTo('contact') }}>Get Started</a>
              <Link to="/use-cases" className="btn btn-secondary">View Use Cases</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services / Value Proposition Section */}
      <section id="services" className="services">
        <div className="container">
          <h2 className="section-title">Aavya Value Proposition</h2>
          <p className="section-subtitle">Because your data deserves more than implementation &mdash; it deserves transformation.</p>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">&#128161;</div>
              <h3>Advising &amp; Consulting</h3>
              <p>With access to domain experts and strategic thinkers, we solve complex business and technology challenges to help clients achieve operational excellence and long-term success.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">&#129302;</div>
              <h3>AI-Powered Solutions</h3>
              <p>Harness the power of AI and machine learning to automate processes, enable intelligent decision-making, personalize customer experiences, and drive business innovation at scale.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">&#127912;</div>
              <h3>Design Services</h3>
              <p>From concept to execution, we craft intuitive user experiences, scalable solution architectures, and engaging digital products through human-centered design and rapid prototyping.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">&#128268;</div>
              <h3>System Integration &amp; Delivery</h3>
              <p>We design, manage, and execute end-to-end technology initiatives, seamlessly integrating systems, platforms, and applications to ensure timely delivery and business alignment.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">&#9729;&#65039;</div>
              <h3>Cloud &amp; Edge Services</h3>
              <p>Maximize agility, speed, and intelligence with cloud-first strategies, efficient migrations, real-time edge computing, and data-driven solutions tailored for dynamic environments.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">&#128101;</div>
              <h3>Virtual Teams</h3>
              <p>Tap into a curated pool of skilled professionals to scale your teams quickly, meet evolving project demands, and maintain flexibility across temporary or long-term engagements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Methodology Section */}
      <section className="methodology">
        <div className="container">
          <h2 className="section-title">Service Delivery Methodology</h2>
          <p className="section-subtitle">Iterative approach ensuring continuous value delivery and platform optimization</p>
          <div className="methodology-timeline">
            <div className="method-phase">
              <div className="phase-number">1</div>
              <h3 className="phase-title">Proof of Value</h3>
              <ul className="phase-items">
                <li>Initial Use-Case Development</li>
                <li>Use-Case Deployment</li>
                <li>Handover</li>
                <li>Value Creation Phase</li>
              </ul>
            </div>
            <div className="method-phase">
              <div className="phase-number">2</div>
              <h3 className="phase-title">Continuous Enhancement</h3>
              <ul className="phase-items">
                <li>Monitoring</li>
                <li>Bug Fixes</li>
                <li>Use-Case Hardening</li>
                <li>Value Capture Phase</li>
              </ul>
            </div>
            <div className="method-phase">
              <div className="phase-number">3</div>
              <h3 className="phase-title">Use Case Build</h3>
              <ul className="phase-items">
                <li>Design &amp; Build</li>
                <li>Test &amp; Implement</li>
                <li>Training</li>
                <li>Scaling</li>
              </ul>
            </div>
            <div className="method-phase">
              <div className="phase-number">4</div>
              <h3 className="phase-title">Managed Services</h3>
              <ul className="phase-items">
                <li>Add New Use Cases</li>
                <li>Expand to New Areas</li>
                <li>24/7 Monitoring</li>
                <li>40-160 Hour Packages</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="global-presence">
        <div className="container">
          <h2 className="section-title">Global Presence</h2>
          <p className="section-subtitle">Global Expertise, Local Commitment, Proven Results</p>
          <div className="presence-grid">
            <div className="presence-card">
              <div className="presence-flag">&#127482;&#127480;</div>
              <div className="presence-country">United States</div>
            </div>
            <div className="presence-card">
              <div className="presence-flag">&#127464;&#127462;</div>
              <div className="presence-country">Canada</div>
              <div className="presence-note">Partner</div>
            </div>
            <div className="presence-card">
              <div className="presence-flag">&#127480;&#127468;</div>
              <div className="presence-country">Singapore</div>
            </div>
            <div className="presence-card">
              <div className="presence-flag">&#127471;&#127477;</div>
              <div className="presence-country">Japan</div>
            </div>
            <div className="presence-card">
              <div className="presence-flag">&#127470;&#127475;</div>
              <div className="presence-country">India</div>
            </div>
            <div className="presence-card">
              <div className="presence-flag">&#127480;&#127462;</div>
              <div className="presence-country">Saudi Arabia</div>
              <div className="presence-note">Partner</div>
            </div>
            <div className="presence-card">
              <div className="presence-flag">&#127462;&#127466;</div>
              <div className="presence-country">UAE</div>
              <div className="presence-note">Partner</div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Preview Section */}
      <section className="use-cases-preview">
        <div className="container">
          <h2 className="section-title">Proven Use Cases</h2>
          <p className="section-subtitle">Real results from Palantir Foundry implementations across industries</p>
          <div className="preview-grid">
            <Link to="/use-cases#telecom" className="preview-card">
              <div className="preview-icon">&#128225;</div>
              <h3>Telecom Infrastructure</h3>
              <p className="preview-subtitle">Cell Site Maintenance Optimization</p>
              <div className="preview-metrics">
                <span className="metric-badge">&#8595; 40% Cost</span>
                <span className="metric-badge">&#8593; 35% Efficiency</span>
                <span className="metric-badge">&#8595; 45% Emergency Repairs</span>
              </div>
              <span className="preview-link">Learn more &rarr;</span>
            </Link>
            <Link to="/use-cases#procurement" className="preview-card">
              <div className="preview-icon">&#128230;</div>
              <h3>Procurement &amp; Vendor Management</h3>
              <p className="preview-subtitle">Transaction Workflow Digitalization</p>
              <div className="preview-metrics">
                <span className="metric-badge">&#8595; 65% Faster</span>
                <span className="metric-badge">&#8593; 90% Accuracy</span>
                <span className="metric-badge">&#8595; 80% Fewer Errors</span>
              </div>
              <span className="preview-link">Learn more &rarr;</span>
            </Link>
            <Link to="/use-cases#financial" className="preview-card">
              <div className="preview-icon">&#128200;</div>
              <h3>Financial Planning &amp; Analytics</h3>
              <p className="preview-subtitle">Estimation &amp; Scenario Modeling</p>
              <div className="preview-metrics">
                <span className="metric-badge">&#8593; 50% Forecasting</span>
                <span className="metric-badge">&#8595; 75% Manual Work</span>
                <span className="metric-badge">&#8593; 30% Margins</span>
              </div>
              <span className="preview-link">Learn more &rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Aavya Section */}
      <section id="about" className="why-section">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <div className="why-grid">
            <div className="why-card">
              <h3>Customer Focus</h3>
              <p>We align our business strategies and processes towards meeting and exceeding the needs and expectations of our customers.</p>
            </div>
            <div className="why-card">
              <h3>Quality</h3>
              <p>We are committed to consistently meeting or exceeding expectations through continuous improvement and innovation.</p>
            </div>
            <div className="why-card">
              <h3>Innovation</h3>
              <p>We are devoted to creativity, experimentation, and continuous learning to develop new and better ways to drive growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="industries">
        <div className="container">
          <h2 className="section-title">Industry-Specific Solutions</h2>
          <div className="industries-grid">
            <div className="industry-card">&#9889; Energy &amp; Utilities</div>
            <div className="industry-card">&#128176; Financial Services</div>
            <div className="industry-card">&#127973; Healthcare &amp; Life Sciences</div>
            <div className="industry-card">&#127981; Manufacturing</div>
            <div className="industry-card">&#127963;&#65039; Government &amp; Public Sector</div>
            <div className="industry-card">&#128717;&#65039; Retail &amp; Consumer</div>
            <div className="industry-card">&#128225; Telecommunications</div>
            <div className="industry-card">&#128666; Transportation &amp; Logistics</div>
            <div className="industry-card">&#9992;&#65039; Aerospace &amp; Defense</div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact-content">
            <h2 className="section-title">Let's Start Your Journey</h2>
            <p className="contact-subtitle">Connect with us to discuss how we can help transform your organization with Palantir Foundry.</p>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your name" required value={form.name} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="your.email@company.com" required value={form.email} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="company">Company</label>
                <input type="text" id="company" name="company" placeholder="Your company" value={form.company} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="industry">Industry</label>
                <select id="industry" name="industry" value={form.industry} onChange={handleChange}>
                  <option value="">Select your industry</option>
                  <option value="energy">Energy &amp; Utilities</option>
                  <option value="financial">Financial Services</option>
                  <option value="healthcare">Healthcare &amp; Life Sciences</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="government">Government &amp; Public Sector</option>
                  <option value="retail">Retail &amp; Consumer</option>
                  <option value="telecom">Telecommunications</option>
                  <option value="transport">Transportation &amp; Logistics</option>
                  <option value="aerospace">Aerospace &amp; Defense</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="4" placeholder="Tell us about your needs" value={form.message} onChange={handleChange}></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
