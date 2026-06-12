import { useState } from 'react';
import './index.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-surface-900 via-surface-800 to-surface-900">
      <header className="glass-panel mx-4 mt-4 rounded-lg p-6">
        <h1 className="gradient-text text-4xl font-bold">FUTURA</h1>
        <p className="text-slate-400 mt-2">IA Creativa & Planificación para tu Marca</p>
      </header>
      
      <main className="mx-auto max-w-4xl px-4 py-8">
        <section className="glass-panel rounded-lg p-8 space-y-6">
          <h2 className="text-2xl font-bold text-white">Bienvenido a FUTURA</h2>
          <p className="text-slate-300">
            Plataforma inteligente para generar contenido creativo y planificar estrategias de marketing para redes sociales.
          </p>
          
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => setCount(count + 1)}
              className="px-6 py-3 bg-gradient-to-r from-brand-primary to-orange-400 text-white font-semibold rounded-lg hover:shadow-lg transition-shadow"
            >
              Contador: {count}
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
