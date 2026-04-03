import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/use-cases.css'

export default function UseCases() {
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

  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link> / <span>Use Cases</span>
          </div>
          <h1 className="page-title">Proven Use Cases</h1>
          <p className="page-subtitle">Real-world Palantir Foundry implementations delivering measurable business value across Telecom, Procurement, and Financial Planning.</p>
        </div>
      </section>

      {/* Use Cases Content */}
      <section className="use-cases-content">
        <div className="container">

          {/* USE CASE 1: TELECOM */}
          <div id="telecom" className="use-case">
            <div className="use-case-header">
              <div className="use-case-number">1</div>
              <div className="use-case-header-text">
                <h2>Telecom Infrastructure</h2>
                <div className="uc-subtitle">Maintenance Optimization for Mobility Cell Sites</div>
                <div className="uc-tagline">"From Reactive Fire-Fighting to Predictive Excellence"</div>
              </div>
            </div>

            <div className="use-case-metrics">
              <div className="uc-metric">
                <div className="uc-metric-value">&darr; 40%</div>
                <div className="uc-metric-label">Maintenance Cost Reduction</div>
              </div>
              <div className="uc-metric">
                <div className="uc-metric-value">&uarr; 35%</div>
                <div className="uc-metric-label">Operational Efficiency</div>
              </div>
              <div className="uc-metric">
                <div className="uc-metric-value">&darr; 45%</div>
                <div className="uc-metric-label">Emergency Repairs Reduced</div>
              </div>
            </div>

            <div className="uc-details-grid">
              <div className="uc-detail-card uc-challenge">
                <h3><span className="uc-icon">&#9888;&#65039;</span> The Challenge</h3>
                <ul>
                  <li>Siloed systems with disconnected data sources</li>
                  <li>Reactive maintenance mode &mdash; fix after failure</li>
                  <li>Manual tracking with slow response times</li>
                  <li>High costs from emergency repairs</li>
                  <li>No visibility across cell site health</li>
                </ul>
              </div>
              <div className="uc-detail-card uc-solution">
                <h3><span className="uc-icon">&#9881;&#65039;</span> Foundry Solution</h3>
                <ul>
                  <li>Real-time visibility across all cell sites</li>
                  <li>Predictive models for failure prevention</li>
                  <li>Smart prioritization of maintenance tasks</li>
                  <li>Unified data platform replacing silos</li>
                  <li>Automated alert and notification system</li>
                </ul>
              </div>
              <div className="uc-detail-card uc-value">
                <h3><span className="uc-icon">&#128200;</span> Business Value</h3>
                <ul>
                  <li>40% reduction in maintenance costs</li>
                  <li>35% increase in operational efficiency</li>
                  <li>45% fewer emergency repair incidents</li>
                  <li>Proactive interventions vs. reactive fixes</li>
                  <li>Optimized spend across entire network</li>
                </ul>
              </div>
            </div>

            <div className="uc-transformation">
              <div className="uc-transform-title">&#128260; Transformation Journey</div>
              <div className="uc-transform-grid">
                <div className="uc-before">
                  <h4>Before</h4>
                  <ul>
                    <li><strong>Siloed Systems</strong> Disconnected data sources</li>
                    <li><strong>Reactive Mode</strong> Fix after failure</li>
                    <li><strong>Manual Tracking</strong> Slow response times</li>
                    <li><strong>High Costs</strong> Emergency repairs</li>
                  </ul>
                </div>
                <div className="uc-arrow-divider">&#10132;</div>
                <div className="uc-after">
                  <h4>After</h4>
                  <ul>
                    <li><strong>Unified Platform</strong> Real-time data fusion</li>
                    <li><strong>Predictive Mode</strong> Prevent before failure</li>
                    <li><strong>Automated Alerts</strong> Instant notifications</li>
                    <li><strong>Optimized Spend</strong> Proactive interventions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* USE CASE 2: PROCUREMENT */}
          <div id="procurement" className="use-case">
            <div className="use-case-header">
              <div className="use-case-number">2</div>
              <div className="use-case-header-text">
                <h2>Procurement &amp; Vendor Management</h2>
                <div className="uc-subtitle">Vendor Transaction Workflow Digitalization</div>
                <div className="uc-tagline">"Replacing Legacy Chaos with Digital Precision"</div>
              </div>
            </div>

            <div className="use-case-metrics">
              <div className="uc-metric">
                <div className="uc-metric-value">&darr; 65%</div>
                <div className="uc-metric-label">Faster Processing Time</div>
              </div>
              <div className="uc-metric">
                <div className="uc-metric-value">&uarr; 90%</div>
                <div className="uc-metric-label">Data Accuracy</div>
              </div>
              <div className="uc-metric">
                <div className="uc-metric-value">&darr; 80%</div>
                <div className="uc-metric-label">Fewer Manual Errors</div>
              </div>
            </div>

            <div className="uc-details-grid">
              <div className="uc-detail-card uc-challenge">
                <h3><span className="uc-icon">&#9888;&#65039;</span> The Challenge</h3>
                <ul>
                  <li>Legacy procurement systems with manual workflows</li>
                  <li>Slow approval routing and bottlenecks</li>
                  <li>Manual invoice matching prone to errors</li>
                  <li>Limited audit trail visibility</li>
                  <li>Vendor relationship management gaps</li>
                </ul>
              </div>
              <div className="uc-detail-card uc-solution">
                <h3><span className="uc-icon">&#9881;&#65039;</span> Foundry Solution</h3>
                <ul>
                  <li>Automated workflows from PO to payment</li>
                  <li>Real-time tracking across all transactions</li>
                  <li>Smart validation with AI-powered matching</li>
                  <li>Configurable approval routing</li>
                  <li>Consolidated audit trail</li>
                </ul>
              </div>
              <div className="uc-detail-card uc-value">
                <h3><span className="uc-icon">&#128200;</span> Business Value</h3>
                <ul>
                  <li>65% faster transaction processing</li>
                  <li>90% data accuracy improvement</li>
                  <li>80% fewer manual errors</li>
                  <li>Enhanced vendor relationships</li>
                  <li>Complete audit trail compliance</li>
                </ul>
              </div>
            </div>

            <div className="uc-flow">
              <div className="uc-flow-step">
                <div className="flow-step-num">1</div>
                <h4>Purchase Order Creation</h4>
                <p>Automated from integrated contract data with real-time tracking initiated</p>
              </div>
              <div className="uc-flow-step">
                <div className="flow-step-num">2</div>
                <h4>Configurable Approvals</h4>
                <p>Smart routing based on amount/vendor with consolidated audit trail</p>
              </div>
              <div className="uc-flow-step">
                <div className="flow-step-num">3</div>
                <h4>Automated Invoice Matching</h4>
                <p>AI-powered PO-invoice reconciliation with instant exception flagging</p>
              </div>
              <div className="uc-flow-step">
                <div className="flow-step-num">4</div>
                <h4>Payment Processing</h4>
                <p>Streamlined vendor payments with enhanced relationship management</p>
              </div>
            </div>
          </div>

          {/* USE CASE 3: FINANCIAL */}
          <div id="financial" className="use-case">
            <div className="use-case-header">
              <div className="use-case-number">3</div>
              <div className="use-case-header-text">
                <h2>Financial Planning &amp; Analytics</h2>
                <div className="uc-subtitle">Financial Estimation &amp; Scenario Modeling</div>
                <div className="uc-tagline">"From Spreadsheet Guesswork to Strategic Precision"</div>
              </div>
            </div>

            <div className="use-case-metrics">
              <div className="uc-metric">
                <div className="uc-metric-value">&uarr; 50%</div>
                <div className="uc-metric-label">Better Forecasting Accuracy</div>
              </div>
              <div className="uc-metric">
                <div className="uc-metric-value">&darr; 75%</div>
                <div className="uc-metric-label">Less Manual Work</div>
              </div>
              <div className="uc-metric">
                <div className="uc-metric-value">&uarr; 30%</div>
                <div className="uc-metric-label">Improved Profit Margins</div>
              </div>
            </div>

            <div className="uc-details-grid">
              <div className="uc-detail-card uc-challenge">
                <h3><span className="uc-icon">&#9888;&#65039;</span> The Challenge</h3>
                <ul>
                  <li>Spreadsheet-based financial planning</li>
                  <li>Manual data collection and consolidation</li>
                  <li>Limited scenario modeling capability</li>
                  <li>Slow forecasting cycles</li>
                  <li>Inconsistent margin analysis</li>
                </ul>
              </div>
              <div className="uc-detail-card uc-solution">
                <h3><span className="uc-icon">&#9881;&#65039;</span> Foundry Solution</h3>
                <ul>
                  <li>Real-time financial modeling engine</li>
                  <li>Multi-scenario analysis capabilities</li>
                  <li>Live dashboards with automated workflows</li>
                  <li>Integrated rate sheets and cost models</li>
                  <li>Pipeline data integration</li>
                </ul>
              </div>
              <div className="uc-detail-card uc-value">
                <h3><span className="uc-icon">&#128200;</span> Business Value</h3>
                <ul>
                  <li>50% better forecasting accuracy</li>
                  <li>75% reduction in manual work</li>
                  <li>30% improved profit margins</li>
                  <li>Strategic precision in deal pricing</li>
                  <li>Real-time scenario reports</li>
                </ul>
              </div>
            </div>

            <div className="uc-transformation">
              <div className="uc-transform-title">&#128161; Intelligent Estimation Engine</div>
              <div className="uc-transform-grid">
                <div className="uc-before">
                  <h4>Inputs</h4>
                  <ul>
                    <li><strong>Rate Sheets</strong> Historical and current pricing</li>
                    <li><strong>Cost Models</strong> Operational cost structures</li>
                    <li><strong>Pipeline Data</strong> Sales and revenue pipeline</li>
                  </ul>
                </div>
                <div className="uc-arrow-divider">&#10132;</div>
                <div className="uc-after">
                  <h4>Outputs</h4>
                  <ul>
                    <li><strong>Margin Analysis</strong> Real-time profitability</li>
                    <li><strong>Deal Pricing</strong> Optimized pricing strategies</li>
                    <li><strong>Scenario Reports</strong> What-if analysis results</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
