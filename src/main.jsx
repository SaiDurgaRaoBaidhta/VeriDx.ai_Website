import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Home.jsx'
import ExpertPanel from './ExpertPanel.jsx'
import RecordAnalysisDashboard from './RecordAnalysisDashboard.jsx'

function Root() {
  const pathname = (typeof window !== 'undefined' ? window.location.pathname : '/').replace(/\/+$/, '') || '/'
  const isExpertPanel = pathname === '/medical-expert-panel' || pathname.endsWith('/medical-expert-panel')
  const isRecordAnalysis = pathname === '/record-analysis' || pathname.endsWith('/record-analysis')

  if (isRecordAnalysis) return <RecordAnalysisDashboard />
  if (isExpertPanel) return <ExpertPanel />
  return <App />
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 24, fontFamily: 'sans-serif', maxWidth: 600 }}>
          <h1 style={{ color: '#b91c1c' }}>Something went wrong</h1>
          <pre style={{ overflow: 'auto', background: '#fef2f2', padding: 16, borderRadius: 8 }}>
            {this.state.error?.message || String(this.state.error)}
          </pre>
        </div>
      )
    }
    return this.props.children
  }
}

const rootEl = document.getElementById('root')
if (!rootEl) {
  document.body.innerHTML = '<p style="padding:20px">Root element #root not found.</p>'
} else {
  createRoot(rootEl).render(
    <StrictMode>
      <ErrorBoundary>
        <Root />
      </ErrorBoundary>
    </StrictMode>,
  )
}
