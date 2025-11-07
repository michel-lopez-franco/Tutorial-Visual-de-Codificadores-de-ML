# Tutorial Visual de Codificadores de Machine Learning en Python

Una aplicación web interactiva para explorar y comprender los diferentes tipos de codificadores utilizados en Machine Learning, con ejemplos visuales y explicaciones prácticas.

## 🚀 Características

- **Visualización Interactiva**: Explora codificadores como One-Hot Encoding, Label Encoding, etc., con ejemplos en tiempo real.
- **Interfaz Moderna**: Construida con React, TypeScript y Tailwind CSS para una experiencia de usuario fluida.
- **Ejemplos Prácticos**: Incluye datos de muestra y resultados visuales para entender mejor los conceptos.
- **Despliegue Automático**: Integrado con GitHub Actions para despliegue continuo en GitHub Pages.

## 📋 Prerrequisitos

- Node.js (versión 18 o superior)
- npm o yarn

## 🛠️ Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/michel-lopez-franco/Tutorial-Visual-de-Codificadores-de-ML.git
   cd Tutorial-Visual-de-Codificadores-de-ML
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Ejecuta el servidor de desarrollo:

   ```bash
   npm run dev
   ```

4. Abre tu navegador en `http://localhost:3000/Tutorial-Visual-de-Codificadores-de-ML/`

## 📦 Construcción para Producción

Para construir la aplicación para producción:

```bash
npm run build
```

Los archivos generados estarán en la carpeta `dist/`.

## 🚀 Despliegue

La aplicación se despliega automáticamente a GitHub Pages mediante GitHub Actions cuando se hace push a la rama `main`.

URL de producción: [https://michel-lopez-franco.github.io/Tutorial-Visual-de-Codificadores-de-ML/](https://michel-lopez-franco.github.io/Tutorial-Visual-de-Codificadores-de-ML/)

## 🏗️ Tecnologías Utilizadas

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Build Tool**: Vite
- **Despliegue**: GitHub Pages, GitHub Actions
- **Lenguaje Backend**: Python (para ejemplos de ML, si aplica)

## 📁 Estructura del Proyecto

```
├── src/
│   ├── components/     # Componentes React reutilizables
│   ├── index.css       # Estilos globales con Tailwind
│   └── index.tsx       # Punto de entrada de la aplicación
├── public/             # Archivos estáticos
├── dist/               # Archivos de producción (generados)
├── .github/workflows/  # Configuración de GitHub Actions
├── tailwind.config.js  # Configuración de Tailwind CSS
├── postcss.config.cjs  # Configuración de PostCSS
├── vite.config.ts      # Configuración de Vite
└── package.json        # Dependencias y scripts
```

## 🤝 Contribuir

1. Haz fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

Michel López Franco - [GitHub](https://github.com/michel-lopez-franco)

Enlace del proyecto: [https://github.com/michel-lopez-franco/Tutorial-Visual-de-Codificadores-de-ML](https://github.com/michel-lopez-franco/Tutorial-Visual-de-Codificadores-de-ML)
