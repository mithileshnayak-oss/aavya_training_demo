import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import '../styles/applications.css'

export default function Applications() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 50)
    }
  }, [location])

  function scrollToId(e, id) {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      {/* Hero */}
      <section className="applications-hero">
        <div className="container">
          <h1>Our <span className="gradient-text">Applications</span></h1>
          <p>Purpose-built enterprise applications powered by Palantir Foundry &mdash; designed to unify data and drive operational excellence.</p>
        </div>
      </section>

      {/* Sticky pill nav */}
      <div className="app-nav-pills">
        <a href="#crm" onClick={e => scrollToId(e, 'crm')}>CRM</a>
        <a href="#employee-portal" onClick={e => scrollToId(e, 'employee-portal')}>Employee Portal</a>
        <a href="#ctms" onClick={e => scrollToId(e, 'ctms')}>CTMS</a>
      </div>

      {/* CRM Section */}
      <section id="crm" className="app-section">
        <div className="container">
          <div className="app-header">
            <div className="app-icon">&#128101;</div>
            <div className="app-title-group">
              <span>Application</span>
              <h2>CRM</h2>
            </div>
          </div>
          <p className="app-description">
            A Palantir Foundry-native Customer Relationship Management platform that consolidates customer data, sales pipelines, and engagement history into a single operational view. Empower your teams with real-time insights and AI-assisted decision-making to drive revenue and deepen customer relationships.
          </p>
          <div className="app-features-grid">
            <div className="app-feature-card">
              <h4>Unified Customer 360</h4>
              <p>Aggregate data from all touchpoints &mdash; sales, support, marketing &mdash; into one live customer profile.</p>
            </div>
            <div className="app-feature-card">
              <h4>Pipeline Management</h4>
              <p>Track opportunities across every stage with real-time forecasting and deal health scoring.</p>
            </div>
            <div className="app-feature-card">
              <h4>AI-Powered Insights</h4>
              <p>Surface next-best-action recommendations and churn risk alerts powered by AIP.</p>
            </div>
            <div className="app-feature-card">
              <h4>Seamless Integrations</h4>
              <p>Connect with existing ERP, marketing automation, and support platforms via Foundry connectors.</p>
            </div>
            <div className="app-feature-card">
              <h4>Activity Tracking</h4>
              <p>Log calls, emails, and meetings automatically and link them to accounts and contacts.</p>
            </div>
            <div className="app-feature-card">
              <h4>Custom Dashboards</h4>
              <p>Role-based dashboards for executives, sales managers, and field reps &mdash; all driven by live data.</p>
            </div>
          </div>
          <div className="app-cta">
            <a href="https://aavya.palantirfoundry.com/workspace/carbon/ri.carbon.main.workspace.52bf217c-0cf4-489d-8743-c48332e73f4e/ri.workshop.main.module.f0344636-e6a2-458a-8c86-26adec736991" target="_blank" rel="noreferrer" className="btn btn-primary">Launch Application &rarr;</a>
          </div>
        </div>
      </section>

      {/* Employee Portal Section */}
      <section id="employee-portal" className="app-section">
        <div className="container">
          <div className="app-header">
            <div className="app-icon">&#127970;</div>
            <div className="app-title-group">
              <span>Application</span>
              <h2>Employee Portal</h2>
            </div>
          </div>
          <p className="app-description">
            A unified self-service Employee Portal built on Palantir Foundry that gives HR teams and employees a single destination for workforce management, benefits, compliance, and collaboration. Replace fragmented HR tools with one intelligent platform that adapts to your organisation's structure.
          </p>
          <div className="app-features-grid">
            <div className="app-feature-card">
              <h4>Self-Service HR</h4>
              <p>Employees can update personal details, request leave, and access pay slips without HR intervention.</p>
            </div>
            <div className="app-feature-card">
              <h4>Onboarding Workflows</h4>
              <p>Automate task checklists, document collection, and training assignments for new hires.</p>
            </div>
            <div className="app-feature-card">
              <h4>Performance Management</h4>
              <p>Set goals, run review cycles, and track progress with structured feedback loops.</p>
            </div>
            <div className="app-feature-card">
              <h4>Workforce Analytics</h4>
              <p>Live headcount, attrition, and skills-gap dashboards for HR business partners and leadership.</p>
            </div>
            <div className="app-feature-card">
              <h4>Compliance &amp; Audit</h4>
              <p>Automated policy acknowledgements, certification tracking, and compliance reporting.</p>
            </div>
            <div className="app-feature-card">
              <h4>Org Chart &amp; Directory</h4>
              <p>Dynamic organisational charts and searchable employee directory synced with live HR data.</p>
            </div>
          </div>
          <div className="app-cta">
            <a href="https://aavya.palantirfoundry.com/workspace/carbon/ri.carbon.main.workspace.52bf217c-0cf4-489d-8743-c48332e73f4e/ri.workshop.main.module.8b9f061b-0da6-4505-ac7d-87984f6d1dc4" target="_blank" rel="noreferrer" className="btn btn-primary">Launch Application &rarr;</a>
          </div>
        </div>
      </section>

      {/* CTMS Section */}
      <section id="ctms" className="app-section">
        <div className="container">
          <div className="app-header">
            <div className="app-icon">&#129514;</div>
            <div className="app-title-group">
              <span>Application</span>
              <h2>CTMS</h2>
            </div>
          </div>
          <p className="app-description">
            A Clinical Trial Management System (CTMS) built on Palantir Foundry that gives life sciences organisations end-to-end visibility over trial planning, site management, patient enrolment, and regulatory compliance. Accelerate timelines and reduce risk with a single source of truth for all trial data.
          </p>
          <div className="app-features-grid">
            <div className="app-feature-card">
              <h4>Trial Planning &amp; Design</h4>
              <p>Manage protocols, milestones, budgets, and resource allocation in one structured workspace.</p>
            </div>
            <div className="app-feature-card">
              <h4>Site Management</h4>
              <p>Track site activation, investigator credentials, regulatory submissions, and performance metrics.</p>
            </div>
            <div className="app-feature-card">
              <h4>Patient Enrolment</h4>
              <p>Monitor screen failures, enrolment rates, and retention across all sites in real time.</p>
            </div>
            <div className="app-feature-card">
              <h4>Regulatory Compliance</h4>
              <p>Automated audit trails, eTMF integration, and ICH-GCP compliance tracking built in.</p>
            </div>
            <div className="app-feature-card">
              <h4>Safety &amp; Adverse Events</h4>
              <p>Capture, escalate, and report adverse events with configurable workflows and MedDRA coding.</p>
            </div>
            <div className="app-feature-card">
              <h4>Operational Analytics</h4>
              <p>Predictive enrolment forecasting, cost-to-complete modelling, and site performance benchmarking.</p>
            </div>
          </div>
          <div className="app-cta">
            <a href="https://aavya.palantirfoundry.com/workspace/carbon/ri.carbon.main.workspace.52bf217c-0cf4-489d-8743-c48332e73f4e/ri.workshop.main.module.559fe731-39d1-4151-be63-648701ee91f2" target="_blank" rel="noreferrer" className="btn btn-primary">Launch Application &rarr;</a>
          </div>
        </div>
      </section>
    </>
  )
}
