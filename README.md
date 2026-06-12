# FUTURA - IA Creativa & Planificación

Plataforma inteligente para generar contenido creativo y planificar estrategias de marketing usando IA.

## Características

- 🤖 Generación de contenido con Google Gemini AI
- 📱 Soporte para múltiples plataformas (Instagram, TikTok, Twitter, LinkedIn)
- 🎨 Interfaz moderna con Tailwind CSS
- 🔥 Construcción rápida con Vite
- 📦 Gestión de proyectos y planificación
- 🔐 Integración con Firebase
- 📊 Google Drive Integration

## Requisitos Previos

- Node.js 18+
- npm o yarn
- Claves API de:
  - Google Gemini AI
  - Firebase
  - Google Drive (opcional)

## Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/heczar/futura.git
   cd futura
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   ```bash
   cp .env.example .env
   # Edita .env y agrega tus claves API
   ```

## Desarrollo

```bash
# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Vista previa de producción
npm run preview

# Verificar tipos TypeScript
npm run lint
```

## Estructura del Proyecto

```
futura/
├── public/                 # Archivos estáticos
├── src/
│   ├── components/         # Componentes React
│   ├── lib/                # Utilidades (Firebase, etc)
│   ├── services/           # Servicios (Gemini, API)
│   ├── App.tsx             # Componente raíz
│   ├── index.css           # Estilos globales
│   ├── main.tsx            # Punto de entrada
│   └── types.ts            # Tipos TypeScript
├── .env.example            # Plantilla de variables
├── .gitignore              # Archivos ignorados
├── index.html              # HTML principal
├── package.json            # Dependencias
├── tsconfig.json           # Config TypeScript
└── vite.config.ts          # Config Vite
```

## Despliegue

### Con Vercel

1. Conecta tu repositorio en [Vercel](https://vercel.com)
2. Agrega las variables de entorno en configuración de Vercel:
   - `GEMINI_API_KEY`
   - `VITE_FIREBASE_*`
3. Haz deploy

## Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la licencia MIT.

## Autor

**heczar** - [GitHub Profile](https://github.com/heczar)

## Contacto

Para soporte o consultas, abre un issue en el repositorio.
