import { useState, useEffect, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/curriculums.css'

const PROGRESS_KEY = 'aavya_7day_progress'

const COURSE_URL = 'https://aavya.palantirfoundry.com/workspace/carbon/ri.carbon.main.workspace.68032360-0303-4164-a507-81a542dc7f3c/home'

const DAYS = [
  { day: 1, label: 'Day 1', topic: 'Foundations', count: '3 courses' },
  { day: 2, label: 'Day 2', topic: 'Developer Basics', count: '3 courses' },
  { day: 3, label: 'Day 3', topic: 'Data Engineering', count: '3 courses' },
  { day: 4, label: 'Day 4', topic: 'Analytics + DS', count: '3 courses' },
  { day: 5, label: 'Day 5', topic: 'Ontology + AIP', count: '3 courses' },
  { day: 6, label: 'Day 6', topic: 'Advanced + Quiz', count: '3 courses' },
  { day: 7, label: 'Day 7', topic: 'Final Project', count: '1 project' },
]

const ALL_COURSES = [
  {
    id: '1', day: 1, badge: 'Deep Dive', badgeClass: 'badge-deep-dive', num: '#1 of 19',
    title: 'Scoping Use Cases for Foundry & AIP',
    topics: [
      'Think in terms of enterprise problems and data solutions',
      'Map current processes and identify gaps',
      'Convert real-world scenarios into Foundry use cases',
      'Understand stakeholders, data sources, pain points',
    ],
    linkText: 'Start Course \u2192',
  },
  {
    id: '2', day: 1, badge: 'Deep Dive', badgeClass: 'badge-deep-dive', num: '#2 of 19',
    title: 'Introduction to Foundry & AIP for Enterprise Organizations',
    topics: [
      'What Foundry solves: data integration, governance, operational AI',
      'Connection between Foundry and business operations',
      'Real-world examples from aviation, manufacturing, finance',
      'Introduction to AIP and how it enhances workflows',
    ],
    linkText: 'Start Course \u2192',
  },
  {
    id: '3', day: 1, badge: 'Speedrun', badgeClass: 'badge-speedrun', num: '#3 of 19',
    title: 'Speedrun: Your First End-to-End Workflow',
    topics: [
      'Import raw dataset, clean, transform, build pipeline',
      'Understand pipeline steps, schema, validations, scheduling',
      'Publish outputs to other layers',
      'Check logs, troubleshoot, and fix broken steps',
    ],
    linkText: 'Start Course \u2192',
  },
  {
    id: '4', day: 2, badge: 'Deep Dive', badgeClass: 'badge-deep-dive', num: '#4 of 19',
    title: 'Deep Dive: Creating Your First Data Connection',
    topics: [
      'Connect databases, cloud storage, APIs',
      'Authentication and secure credential management',
      'Configure sync schedules and data quality checks',
      'Monitor ingestion performance and failure triggers',
    ],
    linkText: 'Start Course \u2192',
  },
  {
    id: '5', day: 2, badge: 'Deep Dive', badgeClass: 'badge-deep-dive', num: '#5 of 19',
    title: 'Deep Dive: Building Your First Application',
    topics: [
      'Build a Workshop application',
      'Add buttons, inputs, lists, detail views',
      'Connect the app to ontology objects',
      'Build UI workflows for business operations',
    ],
    linkText: 'Start Course \u2192',
  },
  {
    id: '6', day: 2, badge: 'Speedrun', badgeClass: 'badge-speedrun', num: '#6 of 19',
    title: 'Speedrun: Mining Your First Business Process',
    topics: [
      'Use Machinery to visualize process timelines',
      'Identify bottlenecks, inefficiencies, cycle times',
      'Learn process mining concepts inside Foundry',
      'Build insights using real process event logs',
    ],
    linkText: 'Start Course \u2192',
  },
  {
    id: '7', day: 3, badge: 'Deep Dive', badgeClass: 'badge-deep-dive', num: '#7 of 19',
    title: 'Deep Dive: Building Your First Pipeline',
    topics: [
      'Detailed pipeline structure, transforms, dependencies',
      'Schema enforcement, type conversion, data validation',
      'Scheduling, auto-refresh, event triggers',
      'Troubleshooting and fixing failing steps',
    ],
    linkText: 'Start Course \u2192',
  },
  {
    id: '8', day: 3, badge: 'Deep Dive', badgeClass: 'badge-deep-dive', num: '#8 of 19',
    title: 'Deep Dive: Transforming Data with Code Repositories',
    topics: [
      'Introduction to reusable code modules',
      'Version control: commits, branches, approvals',
      'Creating shared logic for multiple pipelines',
      'Structure of enterprise-level codebases',
    ],
    linkText: 'Start Course \u2192',
  },
  {
    id: '9', day: 3, badge: 'Deep Dive', badgeClass: 'badge-deep-dive', num: '#9 of 19',
    title: 'Deep Dive: Data Protection Tools in Foundry',
    topics: [
      'Markings, access levels, row-level security',
      'Purpose-based access controls',
      'Data lineage and approvals',
      'Compliance and audit-readiness',
    ],
    linkText: 'Start Course \u2192',
  },
  {
    id: '10', day: 4, badge: 'Deep Dive', badgeClass: 'badge-deep-dive', num: '#10 of 19',
    title: 'Deep Dive: Data Analysis in Contour',
    topics: [
      'Build dashboards and charts',
      'Apply filters, drilldowns, summaries',
      'Create KPI panels and reports',
      'Enable business users with no-code analytics',
    ],
    linkText: 'Start Course \u2192',
  },
  {
    id: '11', day: 4, badge: 'Deep Dive', badgeClass: 'badge-deep-dive', num: '#11 of 19',
    title: 'Deep Dive: Data Analysis in Quiver',
    topics: [
      'Analyze data directly through ontology',
      'Create object-level insights',
      'Build relational summaries and hierarchical analytics',
      'Explore data with real-world semantics',
    ],
    linkText: 'Start Course \u2192',
  },
  {
    id: '12', day: 4, badge: 'Speedrun', badgeClass: 'badge-speedrun', num: '#12 of 19',
    title: 'Speedrun: Data Science Fundamentals',
    topics: [
      'Introduction to Code Workbook and Notebook',
      'Feature engineering and dataset preparation',
      'Running models, comparing experiments',
      'Understanding how DS fits into Foundry pipelines',
    ],
    linkText: 'Start Course \u2192',
  },
  {
    id: '13', day: 5, badge: 'Speedrun', badgeClass: 'badge-speedrun', num: '#13 of 19',
    title: 'Speedrun: Your First Ontology Function',
    topics: [
      'Write a Python function connected to ontology objects',
      'Read object attributes and update values programmatically',
      'Learn business logic scripting through object interaction',
      'Introduces server-side logic in Foundry',
    ],
    linkText: 'Start Course \u2192',
  },
  {
    id: '14', day: 5, badge: 'Deep Dive', badgeClass: 'badge-deep-dive', num: '#14 of 19',
    title: 'Deep Dive: Creating Your First Ontology',
    topics: [
      'Learn object design, properties, schemas, relationships',
      'Build ontology reflecting real business entities',
      'Create actions and understand how apps use ontology',
      'How ontology dictates front-end behavior',
    ],
    linkText: 'Start Course \u2192',
  },
  {
    id: '15', day: 5, badge: 'Speedrun', badgeClass: 'badge-speedrun', num: '#15 of 19',
    title: 'Speedrun: Your First AIP Workflow',
    topics: [
      'Introduction to AIP tasks and data connections',
      'Creating automated steps with AI decisions',
      'Understanding prompts, model selection, logic blocks',
      'Deploying a small AIP-powered workflow',
    ],
    linkText: 'Start Course \u2192',
  },
  {
    id: '16', day: 6, badge: 'Quiz', badgeClass: 'badge-quiz', num: '#16 of 19',
    title: 'Foundry & AIP Builder Foundations Quiz',
    topics: [
      'Tests understanding of all modules',
      'Covers pipelines, ontology, governance, apps, AIP',
      'Data engineering assessment',
      'Ensures readiness for real-world development',
    ],
    linkText: 'Take Quiz \u2192',
  },
  {
    id: '17', day: 6, badge: 'Deep Dive', badgeClass: 'badge-deep-dive', num: '#17 of 19',
    title: 'Deep Dive: Data Governance Best Practices \u2014 Security Primitives',
    topics: [
      'Secure apps, pipelines, datasets',
      'Role-based, object-based, purpose-based access',
      'Avoid common governance mistakes',
      'Enterprise security patterns',
    ],
    linkText: 'Start Course \u2192',
  },
  {
    id: '18', day: 6, badge: 'Speedrun', badgeClass: 'badge-speedrun', num: '#18 of 19',
    title: 'Speedrun: Your First Agentic AIP Workflow',
    topics: [
      'Build an AIP agent that takes decisions automatically',
      'Use ontology objects as inputs and outputs',
      'Create multi-step logical flows using AI',
      'Autonomous agents in enterprise contexts',
    ],
    linkText: 'Start Course \u2192',
  },
  {
    id: '19', day: 7, badge: 'Notional Project', badgeClass: 'badge-notional', num: '#19 of 19',
    title: 'Applied Notional Project',
    topics: [
      'Real scenario: HR dashboard, supply chain workflow, or sales monitoring',
      'Build ontology, ingest data, pipeline, AIP step, application',
      'Deliver a full working mini-solution',
      'Showcases end-to-end Foundry ability',
    ],
    linkText: 'Start Project \u2192',
  },
]

const DAY_TOTALS = { 1: 3, 2: 3, 3: 3, 4: 3, 5: 3, 6: 3, 7: 1 }
const TOTAL_COURSES = 19

function loadCompleted() {
  try { return new Set(JSON.parse(localStorage.getItem(PROGRESS_KEY) || '[]')) }
  catch (e) { return new Set() }
}
function saveCompleted(set) {
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(Array.from(set)))
}

export default function Curriculums() {
  const [completed, setCompleted] = useState(() => loadCompleted())
  const [activeDay, setActiveDay] = useState(1)
  const location = useLocation()

  // Hash scroll
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 50)
    }
  }, [location])

  function toggleCourse(id) {
    setCompleted(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      saveCompleted(next)
      return next
    })
  }

  function resetProgress() {
    if (!window.confirm('Reset all progress? This cannot be undone.')) return
    localStorage.removeItem(PROGRESS_KEY)
    setCompleted(new Set())
  }

  function handleDayClick(dayNum) {
    setActiveDay(dayNum)
    const el = document.getElementById('day-' + dayNum)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  // Update active day circle on scroll
  useEffect(() => {
    const sections = document.querySelectorAll('.day-section')
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const num = parseInt(entry.target.id.replace('day-', ''))
          setActiveDay(num)
        }
      })
    }, { threshold: 0.3, rootMargin: '-100px 0px -50% 0px' })
    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const count = completed.size
  const pct = Math.round((count / TOTAL_COURSES) * 100)

  const dayDone = (dayNum) => {
    return ALL_COURSES.filter(c => c.day === dayNum && completed.has(c.id)).length
  }

  return (
    <>
      {/* Hero */}
      <section className="curriculums-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link> / <span>Training</span>
          </div>
          <h1 className="page-title">Palantir Foundry Training</h1>
          <p className="page-subtitle">Master Palantir Foundry through our structured 7-day training journey with 23 linked courses, plus role-based certification paths for every skill level.</p>
        </div>
      </section>

      {/* 7-Day Training Journey Timeline */}
      <section id="seven-day" className="training-journey">
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>7-Day Training Journey</h2>
          <p className="section-subtitle" style={{ marginBottom: 0 }}>23 Palantir courses across 7 intensive days</p>
          <div className="journey-timeline">
            {DAYS.map(d => {
              const done = dayDone(d.day)
              const total = DAY_TOTALS[d.day]
              const isDone = done === total
              return (
                <div
                  key={d.day}
                  className={`journey-day${activeDay === d.day ? ' active' : ''}${isDone ? ' day-done' : ''}`}
                  data-day={d.day}
                  onClick={() => handleDayClick(d.day)}
                >
                  <div className="day-circle">{d.day}</div>
                  <div className="day-label">{d.label}</div>
                  <div className="day-topic">{d.topic}</div>
                  <div className="day-count">{d.count}</div>
                </div>
              )
            })}
          </div>

          {/* Overall Progress Bar */}
          <div className="overall-progress">
            <div className="overall-progress-header">
              <span className="overall-progress-label">&#127891; 7-Day Training Progress</span>
              <span className="overall-progress-count">{count} of {TOTAL_COURSES} courses complete</span>
            </div>
            <div className="overall-progress-track">
              <div className="overall-progress-fill" style={{ width: pct + '%' }}></div>
            </div>
            <div className="overall-progress-footer">
              <span id="overall-pct">{pct}% complete</span>
              <button className="btn-reset-progress" onClick={resetProgress}>Reset Progress</button>
            </div>
          </div>
        </div>
      </section>

      {/* 7-Day Course Listing */}
      <section className="curriculums-listing">
        <div className="container">
          {DAYS.map(d => {
            const courses = ALL_COURSES.filter(c => c.day === d.day)
            const done = dayDone(d.day)
            const total = DAY_TOTALS[d.day]
            const pillComplete = done === total
            return (
              <div className="day-section" id={`day-${d.day}`} key={d.day}>
                <div className="day-header">
                  <span className="day-badge">DAY {d.day}</span>
                  <h2>{d.topic}</h2>
                  <span className="day-desc">{getDayDesc(d.day)}</span>
                  <div className={`day-progress-pill${pillComplete ? ' day-complete' : ''}`}>
                    <span className="day-progress-done">{done}</span> / {total}
                  </div>
                </div>
                <div className="course-grid">
                  {courses.map(course => {
                    const isComplete = completed.has(course.id)
                    return (
                      <div
                        key={course.id}
                        className={`course-card${isComplete ? ' card-completed' : ''}`}
                        data-course-id={course.id}
                      >
                        <div className="course-card-header">
                          <span className={`course-type-badge ${course.badgeClass}`}>{course.badge}</span>
                          <span className="course-number">{course.num}</span>
                        </div>
                        <div className="course-card-body">
                          <h3>{course.title}</h3>
                          <ul className="course-topics">
                            {course.topics.map((t, i) => <li key={i}>{t}</li>)}
                          </ul>
                        </div>
                        <div className="course-card-footer">
                          <button
                            className={`btn-mark-complete${isComplete ? ' is-complete' : ''}`}
                            onClick={() => toggleCourse(course.id)}
                          >
                            {isComplete ? '\u2713 Completed' : 'Mark Complete'}
                          </button>
                          <a href={COURSE_URL} target="_blank" rel="noreferrer" className="course-link">{course.linkText}</a>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

function getDayDesc(day) {
  const descs = {
    1: 'Scoping use cases, platform intro, first workflow',
    2: 'Data connections, first application, process mining',
    3: 'Pipelines, code repositories, data protection',
    4: 'Contour, Quiver, data science fundamentals',
    5: 'Ontology functions, design, AIP workflows',
    6: 'Foundations quiz, governance, agentic workflows',
    7: 'End-to-end Foundry solution capstone',
  }
  return descs[day] || ''
}
