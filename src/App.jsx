import React, { useMemo, useState } from "react";

const navItems = [
  { label: "Services", href: "/#services" },
  { label: "Use Cases", href: "/#use-cases" },
  { label: "Demos", href: "/#demos" },
  { label: "Pricing", href: "/#pricing" },
];

const services = [
  {
    icon: "📊",
    title: "Business Intelligence",
    text: "Custom dashboards that centralize your most important KPIs across sales, marketing, finance and operations.",
  },
  {
    icon: "⚙️",
    title: "Data Automation",
    text: "Automated reporting workflows that reduce manual work, repetitive spreadsheets and operational errors.",
  },
  {
    icon: "🤖",
    title: "AI Workflows",
    text: "AI-assisted systems for alerts, summaries, data classification, reporting and smarter business operations.",
  },
];

const useCases = [
  "Sales & revenue tracking",
  "Marketing performance dashboards",
  "Inventory and operations monitoring",
  "Financial reporting automation",
  "CRM and lead pipeline visibility",
  "Executive KPI reporting",
];

const metrics = [
  { label: "Manual reporting time", value: "-80%" },
  { label: "Data visibility", value: "+100%" },
  { label: "Weekly hours saved", value: "5–15h" },
];

const packages = [
  {
    name: "Data Audit",
    price: "$250 USD",
    text: "A focused diagnostic to identify what you can automate first.",
  },
  {
    name: "Dashboard Build",
    price: "From $750 USD",
    text: "A custom business dashboard built around your KPIs and current data sources.",
    featured: true,
  },
  {
    name: "Automation System",
    price: "Custom",
    text: "End-to-end automation for reporting, alerts, integrations and AI-assisted workflows.",
  },
];

const dataTypes = ["Sales", "Marketing", "Finance", "Inventory", "Operations", "CRM", "Other"];
const dataSources = ["Excel / Google Sheets", "CRM", "ERP", "Database", "APIs", "Multiple sources", "Not sure"];
const helpTypes = ["Dashboard", "Automated reporting", "Data cleanup", "AI workflow", "Data integration", "Not sure yet"];
const urgencyOptions = ["This week", "This month", "1–3 months", "Just exploring"];
const budgetOptions = ["Under $500", "$500–$1,500", "$1,500–$5,000", "$5,000+"];

function Button({ children, variant = "primary", className = "", type = "button" }) {
  const base = "inline-flex items-center justify-center rounded-2xl px-6 py-4 text-sm font-semibold transition md:text-base";
  const styles =
    variant === "primary"
      ? "bg-cyan-300 text-slate-950 hover:bg-cyan-200"
      : "border border-white/15 bg-white/5 text-white hover:bg-white/10";
  return <button type={type} className={`${base} ${styles} ${className}`}>{children}</button>;
}

function Card({ children, className = "" }) {
  return <div className={`rounded-3xl border shadow-sm ${className}`}>{children}</div>;
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 px-6 py-4 backdrop-blur md:px-12 lg:px-24">
      <nav className="mx-auto flex max-w-7xl items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-300 font-bold text-slate-950">N</div>
          <div>
            <p className="text-lg font-bold leading-none">Nexometrix</p>
            <p className="text-xs text-slate-400">Data Automation & Analytics</p>
          </div>
        </a>

        <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="hover:text-white">
              {item.label}
            </a>
          ))}
        </div>

        <a href="/contact" className="hidden rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-200 md:inline-flex">
          Book a Call
        </a>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10 md:px-12 lg:px-24">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
        <div>
          <p className="text-lg font-bold">Nexometrix</p>
          <p className="mt-1 text-sm text-slate-400">Data Automation & Analytics</p>
        </div>
        <div className="flex flex-wrap gap-5 text-sm text-slate-400">
          <a href="/#services" className="hover:text-white">Services</a>
          <a href="/#use-cases" className="hover:text-white">Use Cases</a>
          <a href="/#demos" className="hover:text-white">Demos</a>
          <a href="/#pricing" className="hover:text-white">Pricing</a>
          <a href="/contact" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}

function Field({ label, name, type = "text", placeholder, required = false, value, onChange }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-slate-200">{label}{required && <span className="text-cyan-200"> *</span>}</span>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/60 focus:bg-white/[0.07]"
      />
    </label>
  );
}

function SelectField({ label, name, required = false, value, onChange, options }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-slate-200">{label}{required && <span className="text-cyan-200"> *</span>}</span>
      <select
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none focus:border-cyan-300/60 focus:bg-white/[0.07]"
      >
        <option value="" className="bg-slate-950">Select an option</option>
        {options.map((option) => (
          <option key={option} value={option} className="bg-slate-950">{option}</option>
        ))}
      </select>
    </label>
  );
}

function TextArea({ label, name, placeholder, required = false, value, onChange }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-slate-200">{label}{required && <span className="text-cyan-200"> *</span>}</span>
      <textarea
        name={name}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        rows={5}
        className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/60 focus:bg-white/[0.07]"
      />
    </label>
  );
}

function HomePage() {
  return (
    <>
      <Header />
      <section className="relative overflow-hidden px-6 py-20 md:px-12 md:py-28 lg:px-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.22),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.24),_transparent_35%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
              ✨ AI-powered business intelligence for growing teams
            </div>
            <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              Turn scattered business data into automated decisions.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              Nexometrix helps companies automate reporting, centralize KPIs and build AI-assisted workflows that save time, reduce errors and improve decision-making.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="/contact"><Button>Book a Free Data Audit</Button></a>
              <a href="#services"><Button variant="outline">Explore Services</Button></a>
            </div>
            <div className="mt-9 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-bold text-cyan-200">{metric.value}</p>
                  <p className="mt-1 text-sm text-slate-400">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>

          <Card className="border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur md:p-7">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-cyan-200">Nexometrix Intelligence Layer</p>
                <h3 className="mt-1 text-2xl font-semibold">Executive Overview</h3>
              </div>
              <div className="rounded-2xl bg-cyan-300/15 px-3 py-2 text-sm text-cyan-100">Live</div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-slate-950/75 p-4">
                <p className="text-sm text-slate-400">Revenue</p>
                <p className="mt-2 text-2xl font-bold">$84.2k</p>
                <p className="mt-1 text-sm text-cyan-200">+18% MoM</p>
              </div>
              <div className="rounded-2xl bg-slate-950/75 p-4">
                <p className="text-sm text-slate-400">Costs</p>
                <p className="mt-2 text-2xl font-bold">$31.6k</p>
                <p className="mt-1 text-sm text-cyan-200">-9% MoM</p>
              </div>
              <div className="rounded-2xl bg-slate-950/75 p-4">
                <p className="text-sm text-slate-400">Margin</p>
                <p className="mt-2 text-2xl font-bold">32%</p>
                <p className="mt-1 text-sm text-cyan-200">Healthy</p>
              </div>
            </div>

            <div className="mt-6 rounded-3xl bg-slate-950/70 p-5">
              <div className="mb-4 flex items-center justify-between">
                <p className="font-semibold">Performance by channel</p>
                <p className="text-sm text-slate-400">Last 30 days</p>
              </div>
              <div className="space-y-4">
                {[["Organic", 88], ["Paid Ads", 66], ["Referrals", 52], ["Email", 74]].map(([label, width]) => (
                  <div key={label}>
                    <div className="mb-2 flex justify-between text-sm text-slate-300">
                      <span>{label}</span>
                      <span>{width}%</span>
                    </div>
                    <div className="h-3 rounded-full bg-slate-800">
                      <div className="h-3 rounded-full bg-cyan-300" style={{ width: `${width}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-4 text-sm text-cyan-100">
              AI Insight: paid campaigns are converting below target. Reallocate 12% of budget to organic and email channels.
            </div>
          </Card>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] px-6 py-8 md:px-12 lg:px-24">
        <div className="mx-auto grid max-w-7xl gap-4 text-center text-sm text-slate-400 md:grid-cols-4">
          <p>Google Sheets</p>
          <p>Excel</p>
          <p>CRMs & APIs</p>
          <p>Power BI / Looker Studio</p>
        </div>
      </section>

      <section id="services" className="px-6 py-20 md:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="font-medium text-cyan-200">Services</p>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">Build a cleaner, faster and smarter data operation.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              We focus on practical systems that help your team spend less time preparing reports and more time acting on insights.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title} className="border-white/10 bg-white/5 p-7 hover:bg-white/[0.07]">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-300/10 text-3xl">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold">{service.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{service.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="use-cases" className="bg-white px-6 py-20 text-slate-950 md:px-12 lg:px-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="font-medium text-blue-600">Use Cases</p>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">Designed around business problems, not technical jargon.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Whether your data lives in spreadsheets, CRMs, databases or APIs, Nexometrix helps transform it into a clear operational system.
            </p>
            <a href="/contact" className="mt-8 inline-flex rounded-2xl bg-slate-950 px-6 py-4 font-semibold text-white hover:bg-slate-800">
              Discuss Your Use Case
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {useCases.map((item) => (
              <div key={item} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-white">✓</div>
                <p className="text-lg font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="demos" className="px-6 py-20 md:px-12 lg:px-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="font-medium text-cyan-200">Demo Preview</p>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">See what your business could look like with automated reporting.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Start with one high-impact dashboard, then expand into alerts, scheduled reports, AI summaries and integrated workflows.
            </p>
            <div className="mt-8 space-y-4">
              {["Weekly executive summaries", "Automated KPI refresh", "Multi-source data integration", "Anomaly and trend alerts"].map((item) => (
                <div key={item} className="flex items-center gap-3 text-slate-200">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-300 text-sm font-bold text-slate-950">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <Card className="border-white/10 bg-white/5 p-6">
            <div className="rounded-3xl bg-slate-900 p-5">
              <div className="mb-5 flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-300" />
                <div className="h-3 w-3 rounded-full bg-yellow-300" />
                <div className="h-3 w-3 rounded-full bg-green-300" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white p-5 text-slate-950">
                  <p className="text-sm text-slate-500">Report status</p>
                  <p className="mt-2 text-2xl font-bold">Automated</p>
                </div>
                <div className="rounded-2xl bg-cyan-300 p-5 text-slate-950">
                  <p className="text-sm text-slate-700">Time saved</p>
                  <p className="mt-2 text-2xl font-bold">12h / week</p>
                </div>
              </div>
              <div className="mt-4 rounded-2xl bg-white p-5 text-slate-950">
                <p className="mb-4 font-semibold">Monthly KPI trend</p>
                <div className="flex h-40 items-end gap-3">
                  {[42, 60, 48, 75, 68, 92, 78].map((height, index) => (
                    <div key={index} className="flex-1 rounded-t-xl bg-slate-950" style={{ height: `${height}%` }} />
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="bg-slate-900 px-6 py-20 md:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-medium text-cyan-200">Process</p>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">From messy data to a decision system.</h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {[["01", "Audit", "We review your current data sources, reports and decision bottlenecks."], ["02", "Design", "We define KPIs, workflows and the fastest path to business impact."], ["03", "Build", "We create dashboards, automations and data connections."], ["04", "Scale", "We document, train and expand the system as your needs grow."]].map(([number, title, text]) => (
              <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm font-bold text-cyan-200">{number}</p>
                <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="px-6 py-20 md:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="font-medium text-cyan-200">Pricing Preview</p>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">Start small. Build what creates value first.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Initial packages are designed to move quickly, validate impact and create a foundation for long-term automation.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {packages.map((pkg) => (
              <Card key={pkg.name} className={`p-7 ${pkg.featured ? "border-cyan-300 bg-cyan-300 text-slate-950" : "border-white/10 bg-white/5"}`}>
                {pkg.featured && <div className="mb-4 inline-flex rounded-full bg-slate-950 px-3 py-1 text-sm font-semibold text-white">Most popular</div>}
                <h3 className="text-2xl font-bold">{pkg.name}</h3>
                <p className="mt-3 text-3xl font-bold">{pkg.price}</p>
                <p className={`mt-4 leading-7 ${pkg.featured ? "text-slate-700" : "text-slate-300"}`}>{pkg.text}</p>
                <a href="/contact" className={`mt-7 inline-flex w-full justify-center rounded-2xl px-6 py-4 font-semibold ${pkg.featured ? "bg-slate-950 text-white hover:bg-slate-800" : "bg-white text-slate-950 hover:bg-slate-200"}`}>
                  Get Started
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-300 to-blue-400 p-8 text-center text-slate-950 md:p-14">
          <h2 className="text-3xl font-bold md:text-5xl">Ready to automate your reporting?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-800">
            Book a free data audit and we’ll identify the first dashboard, workflow or automation that can create measurable value for your business.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="/contact" className="rounded-2xl bg-slate-950 px-7 py-4 font-semibold text-white hover:bg-slate-800">
              Book a Free Data Audit
            </a>
            <a href="mailto:hello@nexometrix.com" className="rounded-2xl border border-slate-950/20 bg-white/30 px-7 py-4 font-semibold text-slate-950 hover:bg-white/50">
              hello@nexometrix.com
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    country: "",
    website: "",
    dataType: "",
    dataSource: "",
    helpType: "",
    urgency: "",
    budget: "",
    message: "",
  });

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`Data Audit Request - ${form.company || form.name || "New Lead"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\nCountry: ${form.country}\nWebsite: ${form.website}\n\nData type: ${form.dataType}\nData source: ${form.dataSource}\nNeeds help with: ${form.helpType}\nUrgency: ${form.urgency}\nBudget: ${form.budget}\n\nProject details:\n${form.message}`
    );
    return `mailto:hello@nexometrix.com?subject=${subject}&body=${body}`;
  }, [form]);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    window.location.href = mailtoHref;
  }

  return (
    <>
      <Header />
      <section className="relative overflow-hidden px-6 py-16 md:px-12 md:py-24 lg:px-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,0.2),_transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(59,130,246,0.18),_transparent_34%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
              Book a Free Data Audit
            </div>
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">Tell us where your data process is slowing you down.</h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Share a few details about your current reporting, tools and priorities. We’ll review your information and identify the fastest path to automate, clean or visualize your data.
            </p>

            <div className="mt-10 space-y-4">
              {[
                "Understand your current data sources and bottlenecks",
                "Identify quick automation wins",
                "Recommend the first dashboard or workflow to build",
                "Estimate complexity, timeline and next steps",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-slate-200">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-300 text-sm font-bold text-slate-950">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <Card className="mt-10 border-white/10 bg-white/5 p-6">
              <p className="text-sm font-medium text-cyan-200">Prefer email?</p>
              <p className="mt-2 text-slate-300">You can also reach us directly at:</p>
              <a href="mailto:hello@nexometrix.com" className="mt-3 inline-flex text-lg font-semibold text-white hover:text-cyan-200">
                hello@nexometrix.com
              </a>
            </Card>
          </div>

          <Card className="border-white/10 bg-white/10 p-6 backdrop-blur md:p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold">Project intake</h2>
              <p className="mt-2 text-slate-300">This form currently opens your email app with a structured request. Later, we can connect it to Tally, Formspree, HubSpot or a database.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Name" name="name" required placeholder="Eduardo Pérez" value={form.name} onChange={handleChange} />
                <Field label="Company" name="company" required placeholder="Company name" value={form.company} onChange={handleChange} />
                <Field label="Email" name="email" type="email" required placeholder="you@company.com" value={form.email} onChange={handleChange} />
                <Field label="Country" name="country" placeholder="Mexico / United States" value={form.country} onChange={handleChange} />
                <Field label="Website" name="website" placeholder="https://company.com" value={form.website} onChange={handleChange} />
                <SelectField label="What data do you work with?" name="dataType" required value={form.dataType} onChange={handleChange} options={dataTypes} />
                <SelectField label="Where is your data stored?" name="dataSource" required value={form.dataSource} onChange={handleChange} options={dataSources} />
                <SelectField label="What do you need help with?" name="helpType" required value={form.helpType} onChange={handleChange} options={helpTypes} />
                <SelectField label="How urgent is this?" name="urgency" value={form.urgency} onChange={handleChange} options={urgencyOptions} />
                <SelectField label="Estimated budget" name="budget" value={form.budget} onChange={handleChange} options={budgetOptions} />
              </div>

              <TextArea
                label="Tell us about your current reporting or data problem"
                name="message"
                required
                placeholder="Example: We manually update sales reports every Monday using spreadsheets from multiple branches. We want a dashboard that updates automatically."
                value={form.message}
                onChange={handleChange}
              />

              <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-4 text-sm leading-6 text-cyan-50">
                By submitting, your email app will open with the project details pre-filled. You can review before sending.
              </div>

              <Button type="submit" className="w-full">Submit Data Audit Request</Button>
            </form>
          </Card>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default function App() {
  const path = window.location.pathname;

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {path === "/contact" ? <ContactPage /> : <HomePage />}
    </main>
  );
}
