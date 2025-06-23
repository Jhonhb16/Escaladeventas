import React, { useState, useEffect } from 'react';

export default function App() {
  // Estado para el formulario
  const [formData, setFormData] = useState({
    nombre: '',
    cargo: '',
    empresa: '',
    telefono: '',
    correo: '',
    reto: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  // Manejar cambios en los inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  // Manejar envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    // Validación básica
    if (!formData.nombre || !formData.cargo || !formData.empresa || 
        !formData.telefono || !formData.correo || !formData.reto) {
      setError('Por favor completa todos los campos');
      return;
    }
    
    setIsLoading(true);
    
    // Simular envío (en producción, aquí iría la llamada a una API)
    setTimeout(() => {
      setIsLoading(false);
      setFormSubmitted(true);
    }, 1500);
  };

  // Animaciones de entrada
  const [visibleSections, setVisibleSections] = useState({});
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] min-h-screen flex flex-col font-sans text-white">
      {/* Header con logos */}
      <header className="w-full px-4 py-5 flex justify-between items-center bg-white bg-opacity-10 backdrop-blur rounded-b-3xl shadow-lg transition-all duration-300 sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <img src="https://escaladeventas.site/logo.png"  alt="Escaladeventas Logo" className="h-10 w-auto rounded-xl shadow transition-transform hover:scale-105" />
          <span className="text-white text-2xl font-bold">x</span>
          <img src="https://iaparanegocios.com/logo.png"  alt="IAParaNegocios Logo" className="h-10 w-auto rounded-xl shadow transition-transform hover:scale-105" />
        </div>
        <a href="#formulario" className="bg-blue-600 hover:bg-blue-800 transition-all duration-300 text-white px-6 py-2 rounded-2xl shadow-lg font-bold animate-pulse">
          Agenda tu sesión
        </a>
      </header>

      {/* Hero Section */}
      <section id="hero" className={`flex flex-col-reverse md:flex-row items-center md:justify-between gap-8 px-6 md:px-16 py-14 md:py-24 fade-in ${visibleSections.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex-1">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            ¿Listo para <span className="text-blue-400">transformar</span> los resultados de tu empresa?
          </h1>
          <p className="text-lg md:text-xl text-white mb-8 max-w-lg">
            Reservá tu sesión estratégica personalizada con <strong>Jhon Mario Hernández</strong><br />
            Solo para dueños de empresa, gerentes y líderes que buscan soluciones reales, no más promesas vacías.
          </p>
          <a href="#formulario" className="inline-block bg-blue-600 hover:bg-blue-700 transition-all duration-300 px-8 py-3 rounded-2xl text-xl text-white font-bold shadow-lg animate-bounce">
            Reservar ahora
          </a>
        </div>
        <div className="flex-1 flex items-center justify-center mb-8 md:mb-0">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 opacity-30 blur-3xl rounded-full h-48 w-48 md:h-64 md:w-64 transform -translate-x-4 translate-y-4"></div>
            <BusinessSVG className="relative z-10 w-64 h-64" />
          </div>
        </div>
      </section>

      {/* Bloque de autoridad */}
      <section id="autoridad" className={`px-6 md:px-16 mb-10 fade-in ${visibleSections.autoridad ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="bg-white bg-opacity-15 rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-300 mb-4">Autoridad y resultados comprobados</h2>
          <p className="text-white text-lg mb-6">
            He ayudado a empresas en Colombia y Latinoamérica a duplicar sus leads, reducir su costo de adquisición y escalar ventas automatizando procesos clave. 
            Trabajo con resultados reales, no con teorías.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-900 bg-opacity-70 p-4 rounded-xl">
              <div className="font-bold text-blue-300">Duplicamos leads</div>
              <p className="text-white text-sm">Calificados en menos de 60 días</p>
            </div>
            <div className="bg-blue-900 bg-opacity-70 p-4 rounded-xl">
              <div className="font-bold text-blue-300">Reducimos costos</div>
              <p className="text-white text-sm">Costo por venta en servicios y retail</p>
            </div>
            <div className="bg-blue-900 bg-opacity-70 p-4 rounded-xl">
              <div className="font-bold text-blue-300">Automatizamos</div>
              <p className="text-white text-sm">Procesos comerciales con IA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios y diferenciadores */}
      <section id="beneficios" className={`px-6 md:px-16 mb-10 fade-in ${visibleSections.beneficios ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">Beneficios claros y diferenciadores</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <BenefitCard 
            icon={<AuditSVG className="w-16 h-16" />}
            title="Auditoría rápida"
            description="Detectá fugas de dinero y oportunidades reales en tu proceso actual"
          />
          <BenefitCard 
            icon={<StrategySVG className="w-16 h-16" />}
            title="Estrategias personalizadas"
            description="Plan a medida según tu sector y momento de negocio"
          />
          <BenefitCard 
            icon={<GrowthSVG className="w-16 h-16" />}
            title="Escalamiento sin aumentar presupuesto"
            description="Crecé en ventas sin gastar más en pauta"
          />
          <BenefitCard 
            icon={<SupportSVG className="w-16 h-16" />}
            title="Casos reales y soporte experto"
            description="Acceso prioritario a experiencias reales y acompañamiento"
          />
        </div>
      </section>

      {/* Testimonio */}
      <section id="testimonio" className={`px-6 md:px-16 mb-12 fade-in ${visibleSections.testimonio ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="bg-white bg-opacity-10 rounded-2xl shadow p-6 max-w-xl mx-auto text-center transform transition-all duration-500 hover:scale-105 hover:shadow-blue-500/20">
          <div className="mb-4">
            <svg className="w-12 h-12 mx-auto text-blue-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          <p className="text-xl text-white font-semibold mb-4 italic">"En menos de 60 días pasamos de sobrevivir a tener lista de espera de clientes, solo afinando nuestra estrategia digital."</p>
          <span className="text-white text-sm font-bold">– CEO, Empresa del sector X</span>
        </div>
      </section>

      {/* Formulario de agendamiento */}
      <section id="formulario" className={`px-6 md:px-16 mb-20 fade-in ${visibleSections.formulario ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-2xl mx-auto">
          {!formSubmitted ? (
            <form onSubmit={handleSubmit} className="bg-white bg-opacity-80 rounded-2xl p-8 shadow-2xl space-y-6 transform transition-all duration-500 hover:shadow-blue-500/20">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Reservá tu sesión estratégica</h3>
              <p className="text-gray-800 mb-6">Cupos limitados disponibles cada semana</p>
              
              {error && (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg mb-4">
                  {error}
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  required 
                  name="nombre" 
                  value={formData.nombre}
                  onChange={handleInputChange}
                  placeholder="Nombre y apellido" 
                  className="rounded-xl px-4 py-3 bg-gray-50 border border-blue-200 focus:ring-2 focus:ring-blue-400 transition w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input 
                  required 
                  name="cargo" 
                  value={formData.cargo}
                  onChange={handleInputChange}
                  placeholder="Cargo en la empresa" 
                  className="rounded-xl px-4 py-3 bg-gray-50 border border-blue-200 focus:ring-2 focus:ring-blue-400 transition w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input 
                  required 
                  name="empresa" 
                  value={formData.empresa}
                  onChange={handleInputChange}
                  placeholder="Nombre de la empresa" 
                  className="rounded-xl px-4 py-3 bg-gray-50 border border-blue-200 focus:ring-2 focus:ring-blue-400 transition w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input 
                  required 
                  name="telefono" 
                  value={formData.telefono}
                  onChange={handleInputChange}
                  placeholder="Teléfono de contacto" 
                  type="tel"
                  className="rounded-xl px-4 py-3 bg-gray-50 border border-blue-200 focus:ring-2 focus:ring-blue-400 transition w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input 
                  required 
                  name="correo" 
                  value={formData.correo}
                  onChange={handleInputChange}
                  placeholder="Correo electrónico" 
                  type="email"
                  className="rounded-xl px-4 py-3 bg-gray-50 border border-blue-200 focus:ring-2 focus:ring-blue-400 transition w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <textarea 
                required 
                name="reto" 
                value={formData.reto}
                onChange={handleInputChange}
                placeholder="¿Cuál es el principal reto de tu empresa hoy?" 
                rows="3" 
                className="rounded-xl px-4 py-3 bg-gray-50 border border-blue-200 focus:ring-2 focus:ring-blue-400 transition w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button 
                type="submit" 
                disabled={isLoading}
                className={`w-full bg-blue-700 hover:bg-blue-900 text-white text-lg font-bold py-4 rounded-2xl shadow-lg transition transform active:scale-95 ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-900'}`}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </div>
                ) : (
                  'Agendar sesión estratégica'
                )}
              </button>
              <p className="text-center text-gray-800 text-xs mt-2">
                *Solo para responsables de toma de decisiones que buscan resultados reales.
              </p>
            </form>
          ) : (
            <div className="mt-8 bg-green-100 border-l-4 border-green-500 text-green-700 p-6 rounded-xl max-w-xl mx-auto text-center text-lg font-bold shadow-lg">
              ¡Agenda confirmada! En breve recibirás los detalles en tu correo.<br />
              Si necesitás reprogramar, avísame por WhatsApp.<br />
              <span className="block mt-2 text-blue-700">Prepárate para una sesión directa, enfocada en resultados y sin rodeos.</span>
            </div>
          )}
        </div>
      </section>

      {/* Cierre motivador */}
      <section id="cierre" className={`px-6 md:px-16 mb-12 fade-in ${visibleSections.cierre ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="bg-blue-900 bg-opacity-70 rounded-2xl p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">No dejes pasar otra semana</h2>
          <p className="text-white text-lg mb-6">Da el primer paso para transformar tu empresa</p>
          <a href="#formulario" className="inline-block bg-blue-600 hover:bg-blue-700 transition-all duration-300 px-8 py-3 rounded-2xl text-xl text-white font-bold shadow-lg">
            Reservar ahora
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-6 bg-black bg-opacity-30 text-white text-center rounded-t-3xl transition-all duration-300">
        <span className="block text-sm">Escaladeventas.site x IAParaNegocios &copy; 2025 | Transformando empresas con estrategias y automatización real.</span>
        <a href="https://wa.me/57TU_NUMERO"  className="mt-2 inline-block text-blue-300 underline hover:text-blue-500 transition">
          ¿Dudas? Escribí directo a WhatsApp
        </a>
        <p className="mt-4 text-xs text-gray-400">
          *Solo agendá si sos responsable de la toma de decisiones en tu empresa y realmente estás buscando implementar cambios que generen resultados. Valoro tu tiempo y el mío.
        </p>
      </footer>
    </div>
  );
}

// Componente para las tarjetas de beneficios
function BenefitCard({ icon, title, description }) {
  return (
    <div className="bg-blue-800 bg-opacity-60 rounded-2xl p-6 shadow-lg flex items-center gap-4 hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105">
      <div className="relative">
        <div className="absolute inset-0 bg-blue-400 opacity-30 blur-xl rounded-full h-14 w-14"></div>
        <div className="relative z-10 text-blue-600">
          {icon}
        </div>
      </div>
      <div>
        <p className="text-white font-bold text-xl">{title}</p>
        <p className="text-white text-md">{description}</p>
      </div>
    </div>
  );
}

// Componentes SVG personalizados
function BusinessSVG({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 7H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 21H8C7.46957 21 6.96086 20.7893 6.58579 20.4142C6.21071 20.0391 6 19.5304 6 19V19C6 18.4696 6.21071 17.9609 6.58579 17.5858C6.96086 17.2107 7.46957 17 8 17H16C16.5304 17 17.0391 17.2107 17.4142 17.5858C17.7893 17.9609 18 18.4696 18 19V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 21V19C16 18.4696 15.7893 17.9609 15.4142 17.5858C15.0391 17.2107 14.5304 17 14 17H10C9.46957 17 8.96086 17.2107 8.58579 17.5858C8.21071 17.9609 8 18.4696 8 19V21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function AuditSVG({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 9V11M12 15H12.01M8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function StrategySVG({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 7H16M8 11H16M8 15H16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function GrowthSVG({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 20L12 16M12 16L8 20M12 16L12 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function SupportSVG({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 21C20 18.172 18.825 15.1301 17 13.0988C15.175 11.0674 12.638 10 10 10C7.362 10 4.825 11.0674 3 13.0988C1.175 15.1301 0 18.172 0 21M16 8C16 10.2091 14.2091 12 12 12C9.79086 12 8 10.2091 8 8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}