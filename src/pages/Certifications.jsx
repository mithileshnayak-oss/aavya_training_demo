import { Link } from 'react-router-dom'
import '../styles/certifications.css'

export default function Certifications() {
  return (
    <>
      {/* Hero */}
      <section className="certifications-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link> / <span>Training</span>
          </div>
          <h1 className="page-title">Official Palantir Exams</h1>
          <p className="page-subtitle">Prepare for Palantir Certification Exams</p>
        </div>
      </section>

      {/* Intro */}
      <section className="cert-intro">
        <div className="container">
          <p className="cert-intro-text">Our training programs are specifically designed to prepare you for official Palantir certification exams. Gain the credentials that validate your expertise to employers worldwide.</p>
        </div>
      </section>

      {/* Exam Listings */}
      <section className="certifications-listing">
        <div className="container">
          <h2 className="section-title">Available Certifications</h2>
          <p className="section-subtitle">Industry-recognised credentials for Palantir Foundry professionals</p>

          <div className="exam-grid">

            {/* PDE-100 */}
            <div className="exam-card">
              <div className="exam-card-header">
                <div className="exam-code">PDE-100</div>
                <h2>Palantir Foundry Data Engineering Certification</h2>
                <div className="exam-prepared-by">Prepared by: Foundry Data Engineer</div>
              </div>
              <div className="exam-stats">
                <div className="exam-stat">
                  <div className="exam-stat-value">60</div>
                  <div className="exam-stat-label">Questions</div>
                </div>
                <div className="exam-stat">
                  <div className="exam-stat-value">120</div>
                  <div className="exam-stat-label">Minutes</div>
                </div>
                <div className="exam-stat">
                  <div className="exam-stat-value">70%</div>
                  <div className="exam-stat-label">Passing Score</div>
                </div>
                <div className="exam-stat">
                  <div className="exam-stat-value">2</div>
                  <div className="exam-stat-label">Years Valid</div>
                </div>
              </div>
              <div className="exam-domains">
                <h4>Exam Domains</h4>
                <div className="domain-item">
                  <div className="domain-header">
                    <span className="domain-name">Data Pipeline Development in Foundry</span>
                    <span className="domain-pct">30%</span>
                  </div>
                  <div className="domain-bar"><div className="domain-bar-fill" style={{ width: '30%' }}></div></div>
                </div>
                <div className="domain-item">
                  <div className="domain-header">
                    <span className="domain-name">Data Pipeline Maintenance in Foundry</span>
                    <span className="domain-pct">30%</span>
                  </div>
                  <div className="domain-bar"><div className="domain-bar-fill" style={{ width: '30%' }}></div></div>
                </div>
                <div className="domain-item">
                  <div className="domain-header">
                    <span className="domain-name">Data Connection and Integration in Foundry</span>
                    <span className="domain-pct">20%</span>
                  </div>
                  <div className="domain-bar"><div className="domain-bar-fill" style={{ width: '20%' }}></div></div>
                </div>
                <div className="domain-item">
                  <div className="domain-header">
                    <span className="domain-name">Ontology Design and Development in Foundry</span>
                    <span className="domain-pct">20%</span>
                  </div>
                  <div className="domain-bar"><div className="domain-bar-fill" style={{ width: '20%' }}></div></div>
                </div>
              </div>
              <div className="exam-card-footer">
                <Link to="/curriculums" className="btn-exam-primary">View Prep Program</Link>
                <a href="https://learn.palantir.com/page/exam-guides" target="_blank" rel="noreferrer" className="btn-exam-secondary">Official Exam Info</a>
              </div>
            </div>

            {/* PAD-100 */}
            <div className="exam-card">
              <div className="exam-card-header">
                <div className="exam-code">PAD-100</div>
                <h2>Palantir Foundry Application Developer Certification</h2>
                <div className="exam-prepared-by">Prepared by: Foundry Application Builder</div>
              </div>
              <div className="exam-stats">
                <div className="exam-stat">
                  <div className="exam-stat-value">60</div>
                  <div className="exam-stat-label">Questions</div>
                </div>
                <div className="exam-stat">
                  <div className="exam-stat-value">120</div>
                  <div className="exam-stat-label">Minutes</div>
                </div>
                <div className="exam-stat">
                  <div className="exam-stat-value">70%</div>
                  <div className="exam-stat-label">Passing Score</div>
                </div>
                <div className="exam-stat">
                  <div className="exam-stat-value">2</div>
                  <div className="exam-stat-label">Years Valid</div>
                </div>
              </div>
              <div className="exam-domains">
                <h4>Exam Domains</h4>
                <div className="domain-item">
                  <div className="domain-header">
                    <span className="domain-name">Application Design</span>
                    <span className="domain-pct">30%</span>
                  </div>
                  <div className="domain-bar"><div className="domain-bar-fill" style={{ width: '30%' }}></div></div>
                </div>
                <div className="domain-item">
                  <div className="domain-header">
                    <span className="domain-name">Application Implementation</span>
                    <span className="domain-pct">30%</span>
                  </div>
                  <div className="domain-bar"><div className="domain-bar-fill" style={{ width: '30%' }}></div></div>
                </div>
                <div className="domain-item">
                  <div className="domain-header">
                    <span className="domain-name">User Experience and Cross-Application Workflows</span>
                    <span className="domain-pct">20%</span>
                  </div>
                  <div className="domain-bar"><div className="domain-bar-fill" style={{ width: '20%' }}></div></div>
                </div>
                <div className="domain-item">
                  <div className="domain-header">
                    <span className="domain-name">Application Maintenance</span>
                    <span className="domain-pct">20%</span>
                  </div>
                  <div className="domain-bar"><div className="domain-bar-fill" style={{ width: '20%' }}></div></div>
                </div>
              </div>
              <div className="exam-card-footer">
                <Link to="/curriculums" className="btn-exam-primary">View Prep Program</Link>
                <a href="https://learn.palantir.com/page/exam-guides" target="_blank" rel="noreferrer" className="btn-exam-secondary">Official Exam Info</a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
