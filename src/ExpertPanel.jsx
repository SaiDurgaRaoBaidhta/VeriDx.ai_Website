import './App.css'
import logo from './Images/veridx-logo.jpg'
function ExpertPanel() {
  return (
    <div className="min-h-screen bg-[linear-gradient(to_bottom,rgba(2,6,23,0.02),transparent_30%),theme(colors.white)]">
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur">
        <div className="container-page flex h-16 items-center justify-between gap-4">
          <a href="/" className="flex items-center gap-3">
          <img src={logo} alt="VeriDx.ai" className="w-10 h-10" />
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight text-slate-900">
              VeriDx.ai
              </div>
              <div className="text-xs text-slate-600">The Truth, Diagnosed</div>
            </div>
          </a>

          <a
            href="/"
            className="hidden text-sm font-medium text-slate-600 hover:text-slate-900 sm:inline-block"
          >
            ← Back to main site
          </a>
        </div>
      </header>

      <main className="py-30 sm:py-20">
        <div className="expert-panel-container grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6 space-y-7">
            <div>
              <div className="badge">
                <span className="size-2 rounded-full bg-ink-700" />
                <span>Medical Expert Panel intake</span>
              </div>
              <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Share your details to be considered for our confidential panel.
              </h1>
              <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
                Engagements with medical experts are selective and case-based. All fields
                below are required so our team can understand your background and areas of
                expertise.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
              <div className="text-sm font-semibold text-slate-900">
                How we work with experts
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Participation on the VeriDx.ai Medical Expert Panel is not automatic. This
                intake helps us understand your clinical background, specialties, and
                experience with medical malpractice or documentation review.
              </p>
              <ul className="mt-4 grid gap-2 text-sm text-slate-600">
                <li>• Focus on documentation quality and medical evidence</li>
                <li>• Engagements scoped to specific cases and questions</li>
                <li>• Materials and discussions handled confidentially</li>
              </ul>
              <p className="mt-4 fineprint">
                Completing this form does not create an engagement, attorney-client
                relationship, or guarantee future work.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="card p-7">
              <form
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault()
                  const form = e.currentTarget
                  if (!form.checkValidity()) {
                    form.reportValidity()
                    return
                  }
                  alert(
                    'Thank you. Your information has been captured for review by the VeriDx.ai team.',
                  )
                  form.reset()
                }}
              >
                <div className="space-y-2">
                  <label
                    htmlFor="expert-name"
                    className="block text-sm font-medium text-slate-900"
                  >
                    Full name <span className="text-medical-600">*</span>
                  </label>
                  <input
                    id="expert-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="block w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 shadow-sm outline-none ring-0 transition placeholder:text-slate-400 focus:border-medical-400 focus:outline-none focus:ring-2 focus:ring-medical-100"
                    placeholder="Dr. Jane Doe"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="expert-mobile"
                    className="block text-sm font-medium text-slate-900"
                  >
                    Mobile number <span className="text-medical-600">*</span>
                  </label>
                  <input
                    id="expert-mobile"
                    name="mobile"
                    type="tel"
                    required
                    autoComplete="tel"
                    className="block w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 shadow-sm outline-none ring-0 transition placeholder:text-slate-400 focus:border-medical-400 focus:outline-none focus:ring-2 focus:ring-medical-100"
                    placeholder="+1 (555) 000‑0000"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="expert-email"
                    className="block text-sm font-medium text-slate-900"
                  >
                    Email <span className="text-medical-600">*</span>
                  </label>
                  <input
                    id="expert-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="block w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 shadow-sm outline-none ring-0 transition placeholder:text-slate-400 focus:border-medical-400 focus:outline-none focus:ring-2 focus:ring-medical-100"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="expert-cv"
                    className="block text-sm font-medium text-slate-900"
                  >
                    Curriculum vitae (CV) <span className="text-medical-600">*</span>
                  </label>
                  <input
                    id="expert-cv"
                    name="cv"
                    type="file"
                    required
                    accept=".pdf,.doc,.docx"
                    className="block w-full cursor-pointer rounded-xl border border-dashed border-slate-300 bg-slate-50 px-3 py-3 text-sm text-slate-700 file:mr-3 file:cursor-pointer file:rounded-lg file:border-0 file:bg-ink-900 file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-white hover:border-medical-300 hover:bg-slate-100"
                  />
                  <p className="fineprint mt-1">
                    Accepted formats: PDF, DOC, DOCX. Please omit patient-identifying
                    information.
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <p className="fineprint">
                    By submitting, you confirm that the information provided is accurate
                    and that you are willing to be contacted about potential expert review
                    opportunities.
                  </p>
                  <button type="submit" className="btn-primary">
                    Submit details
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ExpertPanel

