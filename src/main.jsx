import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Home.jsx'
import ExpertPanel from './ExpertPanel.jsx'
import RecordAnalysisDashboard from './RecordAnalysisDashboard.jsx'

const pathname = window.location.pathname.replace(/\/+$/, '') || '/'
const isExpertPanel =
  pathname === '/medical-expert-panel' || pathname.endsWith('/medical-expert-panel')
const isRecordAnalysis =
  pathname === '/record-analysis' || pathname.endsWith('/record-analysis')

function Root() {
  if (isRecordAnalysis) return <RecordAnalysisDashboard />
  if (isExpertPanel) return <ExpertPanel />
  return <App />
}

createRoot(document.getElementById('root')).render(
  <StrictMode><Root /></StrictMode>,
)
