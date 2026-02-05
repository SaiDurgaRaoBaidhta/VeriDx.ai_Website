import { useState } from 'react'
import './App.css'
import logo from './Images/veridx-logo.jpg'
const DEFAULT_METRICS = {
  completeness: 0,
  consistency: 0,
  coherence: 0,
  riskSignalScore: 0,
}

const ANALYSIS_METRICS = {
  completeness: 78,
  consistency: 82,
  coherence: 75,
  riskSignalScore: 35,
}

const METRIC_CONFIG = [
  { key: 'completeness', title: 'Documentation Completeness Score' },
  { key: 'consistency', title: 'Documentation Consistency Score' },
  { key: 'coherence', title: 'Internal Coherence Index' },
  { key: 'riskSignalScore', title: 'Documentation Risk Signal Score' },
]

// Gradient classes for metric cards (professional medical palette)
const CARD_GRADIENTS = [
  'from-slate-50 via-white to-cyan-70/80',
  'from-slate-50 via-white to-sky-50/80',
  'from-slate-50 via-white to-teal-50/80',
  'from-slate-50 via-white to-slate-100',
]

function DocumentUploadCell({ file, onFileChange }) {
  return (
    <div
      className="flex min-h-[280px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50/80 p-5 shadow-sm transition-colors hover:border-slate-400 hover:bg-slate-100/50"
      role="region"
      aria-label="Document upload"
    >
      <label className="relative flex min-h-[240px] w-full cursor-pointer flex-col items-center justify-center gap-2 text-center">
        <div className="flex size-16 items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-white text-slate-400">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" y1="3" x2="12" y2="15" />
          </svg>
        </div>
        <span className="text-sm font-medium text-slate-600">Document upload</span>
        <span className="text-xs text-slate-500">
          {file ? file.name : 'Click or drop file (PDF, DOC, DOCX)'}
        </span>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          className="absolute inset-0 cursor-pointer opacity-0"
          onChange={(e) => onFileChange(e.target.files?.[0] ?? null)}
          aria-label="Choose file to upload"
        />
      </label>
    </div>
  )
}

function MetricScoreCard({ title, score, gradient }) {
  const pct = Math.min(100, Math.max(0, Number(score)))
  return (
    <div
    className={`relative overflow-hidden rounded-2xl border border-slate-200/70 bg-gradient-to-br ${gradient} p-5 shadow-soft transition hover:-translate-y-0.5 hover:shadow-glow`}
  >  
      <h3 className="text-sm font-semibold tracking-tight text-slate-700">
        {title}
      </h3>
      <p className="mt-2 text-3xl font-semibold tabular-nums tracking-tight text-slate-900">
        {pct}%
      </p>
    </div>
  )
}

function getKeyNotesFromFile(file, hasAnalyzed) {
  if (!file || !hasAnalyzed) return []
  const name = file.name.replace(/\.[^.]+$/, '')
  return [
    `Record: ${file.name}`,
    'History and consent sections present; discharge summary identified.',
    'Recommend review of consent documentation for completeness.',
    'Timeline of care is largely consistent across notes.',
    'Two late-entry flags noted; no conflicting diagnoses.',
  ]
}

export default function RecordAnalysisDashboard() {
  const [file, setFile] = useState(null)
  const [metrics, setMetrics] = useState(DEFAULT_METRICS)
  const [hasAnalyzed, setHasAnalyzed] = useState(false)

  const handleAnalyze = () => {
    if (!file) return
    setMetrics(ANALYSIS_METRICS)
    setHasAnalyzed(true)
  }

  const keyNotes = getKeyNotesFromFile(file, hasAnalyzed)

  return (
    <div className="min-h-screen bg-slate-50/50">
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur">
        <div className="container-page flex h-16 items-center justify-between gap-4">
          <a href="/" className="flex items-center gap-3">
          <img src={logo} alt="VeriDx.ai" className="w-10 h-10" />
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight text-slate-900">VeriDx.ai</div>
              <div className="text-xs text-slate-600">Medical Record Analysis</div>
            </div>
          </a>
          <a href="/medical-expert-panel" className="text-sm font-medium text-slate-600 hover:text-slate-900">
            ← Expert Panel
          </a>
        </div>
      </header>

      <main className="container-page relative py-8 sm:py-10">
        <div className="mb-4">
          <h1 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
            Medical record analysis dashboard
          </h1>
          <p className="mt-0.5 text-xs text-slate-600">
            Upload a record and run analysis. All scores are 0–100. Data supports structured review and risk awareness only.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[32%_1fr] lg:items-stretch">
          {/* Left: upload + Analyze + Key Notes (side heading + points) */}
          <div className="flex flex-col gap-3">
            <DocumentUploadCell file={file} onFileChange={setFile} />
            <button
              type="button"
              onClick={handleAnalyze}
              disabled={!file}
              className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-50"
            >
              Analyze
            </button>

           
          </div>

          {/* Right: 4 metric cards — heading + percentage only, with gradients */}
          <div className="min-w-full">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {METRIC_CONFIG.map((config, i) => (
                <MetricScoreCard
                  key={config.key}
                  title={config.title}
                  score={metrics[config.key]}
                  gradient={CARD_GRADIENTS[i]}
                />
              ))}
            </div>
          </div>
        </div>
        <div className=" mt-6 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <h2 className="text-md font-semibold tracking-tight text-slate-800">
                Key Notes
              </h2>
              {keyNotes.length > 0 ? (
                <ul className="mt-2 space-y-1.5 text-sm text-slate-600">
                  {keyNotes.map((point, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-1 size-1.5 shrink-0 rounded-full bg-slate-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-2 text-xs text-slate-500">
                  Upload a file and click Analyze to see key notes from the record.
                </p>
              )}
            </div>
        {/* <div className="mt-6 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="fineprint text-center">
            These metrics support structured review and risk awareness only. They do not imply diagnosis, liability, or outcome prediction. Data is read-only and derived from backend analysis.
          </p>
        </div> */}
      </main>
    </div>
  )
}
