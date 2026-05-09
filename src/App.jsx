import React from "react";

const services = [
  {
    icon: "📊",
    title: "Dashboards ejecutivos",
    text: "Convierte tus ventas, gastos, inventario o campañas en tableros claros para tomar decisiones rápido.",
  },
  {
    icon: "🤖",
    title: "Automatización con IA",
    text: "Elimina tareas repetitivas: reportes, limpieza de datos, alertas, emails y seguimiento de KPIs.",
  },
  {
    icon: "🗄️",
    title: "Ordenamiento de datos",
    text: "Conecta Google Sheets, Excel, APIs, CRMs o bases de datos para tener información confiable en un solo lugar.",
  },
];

const packages = [
  {
    name: "Diagnóstico Express",
    price: "$2,500 MXN",
    description: "Ideal para negocios que no saben por dónde empezar.",
    items: ["Sesión de 60 min", "Mapa de procesos y datos", "Plan de automatización", "Estimación de impacto"],
  },
  {
    name: "Dashboard Pro",
    price: "$7,500 MXN",
    description: "Para quien necesita visibilidad inmediata de su negocio.",
    items: ["Dashboard en Power BI / Looker Studio", "Conexión a fuentes de datos", "KPIs personalizados", "Entrega en 7 días"],
    featured: true,
  },
  {
    name: "Automatización Total",
    price: "$15,000+ MXN",
    description: "Para empresas que quieren ahorrar horas semanales.",
    items: ["Flujos automatizados", "Integración con APIs", "Alertas inteligentes", "Documentación y capacitación"],
  },
];

const problems = [
  "Reportes manuales que consumen horas cada semana",
  "Excels desordenados o difíciles de mantener",
  "Ventas, gastos o inventario sin seguimiento claro",
  "Decisiones tomadas con datos incompletos",
  "Campañas digitales sin medición real de resultados",
];

function Button({ children, variant = "primary" }) {
  const base = "inline-flex items-center justify-center rounded-2xl px-6 py-4 text-base font-semibold transition";
  const styles =
    variant === "primary"
      ? "bg-white text-slate-950 hover:bg-slate-200"
      : "border border-white/20 bg-white/5 text-white hover:bg-white/10";
  return <button className={`${base} ${styles}`}>{children}</button>;
}

function Card({ children, className = "" }) {
  return <div className={`rounded-3xl border shadow-sm ${className}`}>{children}</div>;
}

export default function ConsultingLandingPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden px-6 py-20 md:px-12 lg:px-24">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-slate-950 to-emerald-900/40" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
              ✨ Nexometrix • AI-Powered Business Intelligence
            </div>
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              Automatiza tu negocio con datos e inteligencia artificial.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              En Nexometrix ayudamos a negocios a automatizar reportes, centralizar información y transformar datos en decisiones inteligentes mediante dashboards, automatización e IA.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button>Agenda un diagnóstico</Button>
              <Button variant="outline">Ver paquetes</Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-300">
              <span>⏱️ Entregas rápidas</span>
              <span>✅ Datos confiables</span>
              <span>⚡ Ahorro de horas semanales</span>
            </div>
          </div>

          <div>
            <Card className="border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur md:p-8">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-300">Nexometrix Analytics Suite</p>
                  <h3 className="text-2xl font-semibold text-white">Business Intelligence Dashboard</h3>
                </div>
                <div className="text-4xl">📈</div>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl bg-slate-900/70 p-4">
                  <p className="text-sm text-slate-400">Ventas</p>
                  <p className="mt-2 text-2xl font-bold text-white">+18%</p>
                </div>
                <div className="rounded-2xl bg-slate-900/70 p-4">
                  <p className="text-sm text-slate-400">Gastos</p>
                  <p className="mt-2 text-2xl font-bold text-white">-9%</p>
                </div>
                <div className="rounded-2xl bg-slate-900/70 p-4">
                  <p className="text-sm text-slate-400">Margen</p>
                  <p className="mt-2 text-2xl font-bold text-white">32%</p>
                </div>
              </div>
              <div className="mt-6 space-y-3">
                {[70, 45, 88, 58].map((width, index) => (
                  <div key={index} className="h-4 rounded-full bg-slate-800">
                    <div className="h-4 rounded-full bg-white" style={{ width: `${width}%` }} />
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl bg-emerald-400/10 p-4 text-sm text-emerald-200">
                Alerta IA: el gasto operativo subió 14% vs. el promedio de los últimos 3 meses.
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold md:text-4xl">Problemas que resuelvo</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {problems.map((problem) => (
              <Card key={problem} className="border-white/10 bg-white/5 p-5 text-slate-200">
                {problem}
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 text-slate-950 md:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="font-medium text-blue-600">Servicios</p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Soluciones concretas para negocios reales</h2>
            <p className="mt-4 text-slate-600">Construimos soluciones prácticas enfocadas en ahorrar tiempo, reducir errores y mejorar la toma de decisiones.</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title} className="border-slate-200 bg-white p-7">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-2xl text-white">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-slate-600">{service.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-medium text-emerald-300">Paquetes</p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Servicios diseñados para generar impacto rápido</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-300">Precios pensados para cerrar rápido con PyMEs, agencias, comercios y equipos internos.</p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {packages.map((pkg) => (
              <Card
                key={pkg.name}
                className={`p-7 ${pkg.featured ? "border-emerald-300 bg-emerald-300 text-slate-950" : "border-white/10 bg-white/5 text-white"}`}
              >
                {pkg.featured && <div className="mb-4 inline-flex rounded-full bg-slate-950 px-3 py-1 text-sm text-white">Más vendible</div>}
                <h3 className="text-2xl font-bold">{pkg.name}</h3>
                <p className="mt-2 text-4xl font-bold">{pkg.price}</p>
                <p className={`mt-3 ${pkg.featured ? "text-slate-700" : "text-slate-300"}`}>{pkg.description}</p>
                <ul className="mt-6 space-y-3">
                  {pkg.items.map((item) => (
                    <li key={item}>✅ {item}</li>
                  ))}
                </ul>
                <button className={`mt-7 w-full rounded-2xl px-6 py-4 font-semibold ${pkg.featured ? "bg-slate-950 text-white hover:bg-slate-800" : "bg-white text-slate-950 hover:bg-slate-200"}`}>
                  Solicitar paquete
                </button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 px-6 py-16 md:px-12 lg:px-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <p className="font-medium text-blue-300">Proceso</p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">De caos a claridad en días</h2>
          </div>
          <div className="space-y-5">
            {["1. Diagnóstico del proceso actual", "2. Conexión y limpieza de datos", "3. Construcción del dashboard o automatización", "4. Capacitación y entrega final"].map((step) => (
              <div key={step} className="rounded-2xl bg-white/5 p-5 text-slate-200">{step}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 lg:px-24">
        <div className="mx-auto max-w-4xl rounded-3xl bg-white p-8 text-center text-slate-950 md:p-12">
          <div className="text-4xl">✉️</div>
          <h2 className="mt-5 text-3xl font-bold md:text-4xl">¿Quieres dejar de hacer reportes manuales?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Agenda un diagnóstico y te diré exactamente qué puedes automatizar, cuánto tiempo puedes ahorrar y qué dashboard te conviene construir primero.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <button className="rounded-2xl bg-slate-950 px-7 py-4 font-semibold text-white hover:bg-slate-800">Agendar diagnóstico</button>
            <button className="rounded-2xl border border-slate-300 px-7 py-4 font-semibold text-slate-950 hover:bg-slate-100">hello@nexometrix.com</button>
          </div>
        </div>
      </section>
    </main>
  );
}
