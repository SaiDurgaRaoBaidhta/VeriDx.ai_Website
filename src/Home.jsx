import { useEffect, useState } from 'react'
import './App.css'
import logo from './Images/veridx-logo.jpg'
const NAV = [
  { href: '#approach', label: 'Approach' },
  { href: '#value', label: 'Value' },
  { href: '#who', label: 'We work with' },
  { href: '/medical-expert-panel', label: 'Medical Expert Panel' },
  { href: '#status', label: 'Status' },
]

function LogoMark() {
  return (
    <div
      aria-hidden="true"
      className="relative grid size-9 place-items-center rounded-xl bg-ink-900 text-white shadow-glow"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2v20M2 12h20"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M6.5 6.5c3.3 3.3 7.7 7.7 11 11"
          stroke="rgba(34,211,238,.8)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}

function Section({ id, kicker, title, lead, children }) {
  return (
    <section id={id} className="scroll-mt-24 py-14 sm:py-18">
      <div className="container-page">
        {kicker ? (
          <div className="badge">
            <span className="size-2 rounded-full bg-ink-700" />
            <span>{kicker}</span>
          </div>
        ) : null}
        <h2 className="section-title mt-4">{title}</h2>
        {lead ? <p className="section-lead">{lead}</p> : null}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  )
}

function Card({ title, children, tone = 'default' }) {
  const cls =
    tone === 'muted'
      ? 'card-muted p-6'
      : tone === 'ink'
        ? 'rounded-2xl border border-ink-900/10 bg-ink-900 p-6 text-white shadow-soft'
        : 'card p-6'

  return (
    <div className={cls}>
      <h3 className="text-base font-semibold tracking-tight">{title}</h3>
      <div className="mt-2 text-sm leading-relaxed opacity-90">{children}</div>
    </div>
  )
}

function App() {
  const [activeHref, setActiveHref] = useState('')

  useEffect(() => {
    const sectionIds = ['approach', 'value', 'who', 'status', 'contact']

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120 // account for header height
      let current = ''

      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (!el) continue
        const offsetTop = el.offsetTop
        const offsetHeight = el.offsetHeight

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          current = `#${id}`
          break
        }
      }

      // If near the very bottom of the page, force-highlight Contact
      const doc = document.documentElement
      const distanceFromBottom = doc.scrollHeight - (window.scrollY + window.innerHeight)
      if (distanceFromBottom < 80) {
        current = '#contact'
      }

      setActiveHref((prev) => (prev === current ? prev : current))
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (event, href) => {
    if (href.startsWith('#')) {
      event.preventDefault()
      const id = href.slice(1)
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        setActiveHref(href)
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white/70 to-slate-50/90">
      <header className="sticky top-0 z-50  bg-gradient-to-b from-ink-700/5 via-white to-transparent backdrop-blur-2xl shadow-xs">
        <div className="container-page flex h-20 items-center gap-4">
          <a href="/" className="flex items-center gap-3">
            <img src={logo} alt="VeriDx.ai" className="w-10 h-10" />
            <div className="leading-tight">
              <div className="text-md font-semibold tracking-tight text-slate-900">
                VeriDx.ai
              </div>
              <div className="text-xs text-slate-600">The Truth, Diagnosed</div>
            </div>
          </a>

          <div className="ml-auto flex items-center gap-4">
            <nav className="hidden items-center gap-2 md:flex">
              {NAV.map((item) => {
                const isAnchor = item.href.startsWith('#')
                const isActive = isAnchor && activeHref === item.href
                const baseClasses =
                  'text-sm rounded-full px-3 py-1.5 font-medium leading-relaxed transition-colors cursor-pointer'
                const activeClasses = 'bg-ink-900 text-white shadow-soft'
                const inactiveClasses =
                  'text-slate-600 hover:text-slate-900 hover:bg-slate-100'

                if (isAnchor) {
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`${baseClasses} ${
                        isActive ? activeClasses : inactiveClasses
                      }`}
                    >
                      {item.label}
                    </a>
                  )
                }

                // Routed link to another page (Medical Expert Panel)
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`${baseClasses} ${inactiveClasses}`}
                  >
                    {item.label}
                  </a>
                )
              })}
            </nav>

            <a className="btn-primary" href="mailto:hello@veridx.ai">
              Contact
            </a>
          </div>
        </div>
      </header>

      <main id="top" className="bg-gradient-to-b from-[#D1EAE3]/40 via-[#d1eae3]/10 to-[#A8DADC]/20">
        <section className="relative overflow-hidden">
        {/*<div className="absolute inset-0 bg-gradient-to-b from-[#D1EAE3]/50 via-transparent to-[#A8DADC]/10" />*/}
          <div className="relative">
            <div className="container-page py-6 sm:py-16 ">
              <div className="grid items-start gap-6 lg:grid-cols-12">
                <div className="lg:col-span-7 mt-10">
                <div className="text-4xl font-semibold tracking-tight text-ink-700 sm:text-8xl">
                    Veri<span className=' text-[#77726fbd] px-2  rounded-lg'>Dx</span>.ai
                  </div>
                  <div className="badge mt-4 text-md">
                    <span className="size-2 rounded-full bg-ink-700" />
                    <span>AI-powered intelligence for medical malpractice</span>
                  </div>
                  <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-slate-700 sm:text-4xl">
                    Transform medical records into actionable case intelligence.
                  </h2>
                  <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-slate-600">
                    Founded by physicians and technical experts, VeriDx.ai applies
                    document intelligence to improve how medical evidence is
                    reviewed, understood, and relied upon in malpractice cases.
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <a className="btn-primary" href="mailto:hello@veridx.ai">
                      Request a confidential discussion
                    </a>
                    <a className="btn-secondary" href="#approach">
                      See how it works
                    </a>
                  </div>

                  <div className="w-70 mt-4 rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm backdrop-blur mr-[80px]">
                    <p className="fineprint pl-4">
                      VeriDx.ai is designed for{' '}
                      <span className="font-semibold  text-slate-700">
                        risk awareness and prevention
                      </span>
                      . It does{' '}
                      <span className="font-semibold text-slate-700">not</span>{' '}
                      provide medical diagnosis or legal judgment.
                    </p>
                  </div>

                  <div className="mt-4 rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-soft mr-[80px]">
                    <h2 className="text-xl font-semibold tracking-tight text-slate-900">
                      Join the Medical Expert Panel
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      Help provide case reviews and expert opinions for medical-legal malpractice cases.
                    </p>
                    <ul className="mt-4 space-y-3">
                      <li className="flex items-start gap-3 text-sm text-slate-700">
                        <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-ink-600 text-white">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M2 6l3 3 5-6" />
                          </svg>
                        </span>
                        <span>Engage in <strong className="font-semibold text-slate-900">medical-legal case analysis</strong></span>
                      </li>
                      {/* <li className="flex items-start gap-3 text-sm text-slate-700">
                        <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-ink-600 text-white">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M2 6l3 3 5-6" />
                          </svg>
                        </span>
                        <span>Collaborate with <strong className="font-semibold text-slate-900">attorneys and clinical peers</strong></span>
                      </li> */}
                      <li className="flex items-start gap-3 text-sm text-slate-700">
                        <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-ink-600 text-white">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M2 6l3 3 5-6" />
                          </svg>
                        </span>
                        <span>Contribute your expertise to <strong className="font-semibold text-slate-900">legal cases</strong></span>
                      </li>
                      {/* <li className="flex items-start gap-3 text-sm text-slate-700">
                        <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-ink-600 text-white">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M2 6l3 3 5-6" />
                          </svg>
                        </span>
                        <span>Earn <strong className="font-semibold text-slate-900">compensation</strong> for your <strong className="font-semibold text-slate-900">insights</strong></span>
                      </li> */}
                    </ul>
                    <a
                      href="/medical-expert-panel"
                      className=" btn-primary mt-6 inline-flex"
                    >
                      Join the panel
                    </a>
                  </div>
                </div>

                <div className="mt-7 mr-4 lg:col-span-5">
                  <div className="rounded-3xl border border-slate-200 bg-white/70 shadow-soft">
                    <div className="border-b border-slate-200 p-6">
                      <div className="text-sm font-semibold text-slate-900">
                        What it helps teams do
                      </div>
                      <div className="mt-1 text-sm text-slate-600">
                        Early, structured understanding—before issues escalate.
                      </div>
                    </div>
                    <div className="grid gap-4 p-6">
                      <Card title="Clarity from complexity" tone="muted">
                        Bring order to fragmented, inconsistent medical records
                        and surface what matters first.
                      </Card>
                      <Card title="Documentation signals" tone="muted">
                        Highlight patterns, gaps, and inconsistencies that may
                        increase downstream exposure.
                      </Card>
                      <Card title="Defensible review" tone="muted">
                        Support decisions with consistent, structured evidence
                        review that holds up under scrutiny.
                      </Card>
                      <Card title="Early risk awareness" tone="muted">
                        Identify documentation gaps and risk patterns early in the
                        review lifecycle so teams can prioritize before issues escalate.
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border ml-10 mr-14 py-4 rounded-2xl border-gray-200 bg-white/70 shadow-xs ">
              <div className="container-page grid gap-4 sm:grid-cols-4">
                <div className="border border-gray-200 p-4 mx-2 my-4 rounded-2xl shadow-md bg-white/90">
                  <div className="text-sm font-semibold text-slate-900">
                    Built for scale
                  </div>
                  <div className="mt-1 text-sm text-slate-600">
                    Uniform analytical rigor across cases.
                  </div>
                </div>
                <div className="border border-gray-200 p-4 mx-2 my-4 rounded-2xl shadow-md bg-white/90">
                  <div className="text-sm font-semibold text-slate-900">
                    Evidence-centered
                  </div>
                  <div className="mt-1 text-sm text-slate-600">
                    Structured insight to augment expert judgment.
                  </div>
                </div>
                <div className="border border-gray-200 p-4 mx-2 my-4 rounded-2xl shadow-md bg-white/90">
                  <div className="text-sm font-semibold text-slate-900">
                    Risk-first
                  </div>
                  <div className="mt-1 text-sm text-slate-600">
                    Early awareness to reduce escalation.
                  </div>
                </div>
                <div className="border border-gray-200 p-4 mx-2 my-4 rounded-2xl shadow-md bg-white/90">
                  <div className="text-sm font-semibold text-slate-900">
                    Selective engagements
                  </div>
                  <div className="mt-1 text-sm text-slate-600">
                    Use-case driven partner work.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Section
          id="approach"
          kicker="Our approach"
          title="Advanced document intelligence for med‑legal review."
          lead="VeriDx.ai supports early, structured understanding of medical malpractice documents—bringing clarity to complex records, surfacing documentation signals, and enabling more defensible review decisions."
        >
          <div className=" mx-8 grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <div className="card p-5">
                <ol className="grid gap-5 text-sm text-slate-700 sm:text-base">
                  <li className="flex gap-4">
                    <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-xl bg-ink-700/80 text-sm font-semibold text-white/70">
                      1
                    </span>
                    <div>
                      <div className="font-semibold text-slate-900">
                        Bring clarity to fragmented records
                      </div>
                      <div className="mt-1 text-slate-600">
                        Normalize and summarize key medical evidence across
                        thousands of pages.
                      </div>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-xl bg-ink-700/80 text-sm font-semibold text-white/70">
                      2
                    </span>
                    <div>
                      <div className="font-semibold text-slate-900">
                        Surface documentation signals
                      </div>
                      <div className="mt-1 text-slate-600">
                        Identify patterns related to documentation quality,
                        consistency, and support.
                      </div>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-xl bg-ink-700/80 text-sm font-semibold text-white/70">
                      3
                    </span>
                    <div>
                      <div className="font-semibold text-slate-900">
                        Enable defensible decisions earlier
                      </div>
                      <div className="mt-1 text-slate-600">
                        Provide structured evidence review outputs to support
                        risk-aware choices before issues escalate.
                      </div>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-xl bg-ink-700/80 text-sm font-semibold text-white">
                      4
                    </span>
                    <div>
                      <div className="font-semibold text-slate-900">
                        Augment expert judgment
                      </div>
                      <div className="mt-1 text-slate-600">
                        Assist—not replace—clinical and legal expertise with
                        consistent, structured insight.
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <div className="text-sm font-semibold text-slate-900">
                  The challenge
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  When documentation is incomplete, inconsistent, or poorly
                  understood, it can drive avoidable cost and exposure.
                </p>
                <div className="mt-5 grid gap-2 text-sm text-slate-700">
                  {[
                    'Not understanding the crux of the case',
                    'Increased malpractice exposure',
                    'Wasting time and money on the wrong experts',
                  ].map((t) => (
                    <div
                      key={t}
                      className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4"
                    >
                      <span className="mt-2 size-1.5 rounded-full bg-ink-800" />
                      <span className="leading-relaxed">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section
          id="value"
          kicker="The value we create"
          title="Consistent evidence review that improves defensibility."
          lead="VeriDx.ai helps organizations spot risk earlier, standardize analysis across cases, and increase confidence in medical evidence used for decisions."
        >
          <div className="grid gap-4 mr-6 ml-5 sm:grid-cols-2 lg:grid-cols-4">
            <Card title="Risk & liability awareness">
              Identify documentation patterns and gaps that may increase exposure
              early in the review lifecycle.
            </Card>
            <Card title="Stronger defensibility">
              Support decisions with consistent, structured evidence review that
              holds up under scrutiny.
            </Card>
            <Card title="Higher documentation integrity">
              Improve confidence in completeness, coherence, and supportability
              of records used in decisions.
            </Card>
            <Card title="Consistency at scale">
              Apply uniform analytical rigor across cases, reducing variability
              that often fuels disputes.
            </Card>
          </div>
        </Section>

        <Section
          id="who"
          kicker="We work with"
          title="Teams where evidence quality directly impacts risk and outcomes."
          lead="Engagements are selective and use-case driven."
        >
          <div className="mx-6 grid gap-8 lg:grid-cols-6">
            <div className="lg:col-span-7">
              <div className="card p-7">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 bg-white p-5">
                    <div className="text-sm font-semibold text-slate-900">
                      Med-Legal & Litigation Support Teams
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      VeriDx.ai helps litigation teams quickly structure large, fragmented medical records into clear, review-ready timelines. It surfaces documentation gaps, inconsistencies, and unsupported entries early, enabling faster issue identification, better expert scoping, and more defensible case preparation.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white p-5">
                    <div className="text-sm font-semibold text-slate-900">
                      Insurance & Claims Organizations
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      VeriDx.ai supports claims teams by identifying early documentation signals that may increase exposure or claim severity. The platform standardizes medical record review across cases, improving triage, reserving, and escalation decisions while strengthening auditability and consistency.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white p-5">
                    <div className="text-sm font-semibold text-slate-900">
                      Independent Medical Review Entities
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      VeriDx.ai organizes complex medical records into structured, review-friendly formats that reduce time spent navigating documents. It highlights areas requiring closer clinical attention, enabling more focused, efficient, and consistent medical reviews.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white p-5">
                    <div className="text-sm font-semibold text-slate-900">
                      Oversight, Compliance & Quality Assurance Groups
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      VeriDx.ai enables oversight and quality teams to assess documentation completeness, coherence, and consistency at scale. By surfacing recurring documentation issues and systemic risk patterns, the platform supports defensible internal reviews and stronger compliance processes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="lg:col-span-5">
              <div className="rounded-3xl border border-ink-900/10 bg-ink-900 p-7 text-white shadow-soft">
                <div className="text-sm font-semibold">
                  Designed for Responsible Use
                </div>
                <p className="mt-2 text-sm leading-relaxed text-white/80">
                  VeriDx.ai is intended to support structured understanding of medical evidence and documentation quality. It does not provide medical diagnoses or legal conclusions, and outputs focus on documentation consistency, record completeness, and early risk signals for review prioritization.
                </p>
              </div>
            </div> */}
          </div>
        </Section>

        <Section
          id="status"
          kicker="Current status"
          title="Working with a limited number of early partners."
          lead="Public demonstrations are not currently available."
        >
          
            <div className=" mr-6 lg:col-span-4">
              <div className="card p-7">
                <div className="grid gap-4 sm:grid-cols-4">
                  <Card title="Selective engagement" tone="muted">
                    Engagements are use‑case driven and limited to ensure high
                    quality collaboration.
                  </Card>
                  <Card title="No public demo" tone="muted">
                    Demonstrations are currently offered only through
                    confidential partner discussions.
                  </Card>
                  <Card title="Privacy-minded" tone="muted">
                    We prioritize careful handling of sensitive medical and
                    legal materials.
                  </Card>
                  <Card title="Built with domain expertise" tone="muted">
                    Founded by physicians and technical experts with a focus on
                    real-world review needs.
                  </Card>
                </div>
              </div>
            </div>
        </Section>

        <Section
          id="contact"
          kicker="Contact"
          title="For confidential discussions."
          lead="We respond to qualified inquiries aligned to current engagement capacity."
        >
          {/* <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="card p-7">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
                    <div className="text-sm font-semibold text-slate-900">
                      Email
                    </div>
                    <div className="mt-1 text-sm text-slate-600">
                      <a className="font-medium text-ink-900 hover:underline" href="mailto:hello@veridx.ai">
                       
                      </a>
                    </div>
                  </div> */}
                  <div>
                  <a className="bg-gradient-to-r from-ink-700/80 to-ink-900 text-white my-20 mx-[700px] text-center font-semibold text-xl p-4 rounded-2xl flex justify-center items-center" href="mailto:hello@veridx.ai">
                  hello@veridx.ai
        </a>
        </div>
      {/* </div>
                <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <div className="text-sm font-semibold text-slate-900">
                    Important note
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    VeriDx.ai is designed to support evidence review and
                    documentation integrity. It does not provide medical
                    diagnosis, treatment guidance, or legal advice.
        </p>
      </div>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-soft">
                <div className="text-sm font-semibold text-slate-900">
                  Typical discussion topics
                </div>
                <ul className="mt-3 grid gap-2 text-sm text-slate-600">
                  <li>• Your document review workflow and pain points</li>
                  <li>• Record types and volume</li>
                  <li>• Desired outputs and defensibility needs</li>
                  <li>• Privacy, security, and deployment constraints</li>
                </ul>
              </div>
            </div>
          </div> */}
        </Section>
      </main>

      <footer className=" bg-gradient-to-t from-ink-700/5 via-white to-transparent shadow-xs">
        <div className="container-page flex flex-col gap-3 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="VeriDx.ai" className="w-10 h-10" />
            <div>
              <div className="text-lg font-semibold text-slate-900">VeriDx.ai</div>
              <div className="text-sm text-slate-600">
                AI-enabled intelligence for medical malpractice evidence review.
              </div>
            </div>
          </div>
          <div className="fineprint">
            © {new Date().getFullYear()} VeriDx.ai. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
