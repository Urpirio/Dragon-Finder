# 🚀 Guía de Inicio Rápido

Esta guía te ayudará a poner en marcha Dragon Finder en tu máquina local en menos de 5 minutos.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- npm (viene con Node.js) o [yarn](https://yarnpkg.com/)
- Un editor de código (recomendamos [VS Code](https://code.visualstudio.com/))

## Instalación Rápida

### 1. Clonar el Repositorio

```bash
git clone https://github.com/Urpirio/Dragon-Finder.git
cd Dragon-Finder
```

### 2. Instalar Dependencias

```bash
npm install
```

o con yarn:

```bash
yarn install
```

### 3. Iniciar el Servidor de Desarrollo

```bash
npm run dev
```

o con yarn:

```bash
yarn dev
```

### 4. Abrir en el Navegador

Abre tu navegador y ve a:

```
http://localhost:5173
```

¡Eso es todo! 🎉 La aplicación ahora debería estar corriendo.

## Comandos Útiles

### Desarrollo

```bash
# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build de producción
npm run preview

# Ejecutar linter (requiere configuración)
npm run lint
```

## Verificación Rápida

Prueba la aplicación:

1. **Buscar "Goku"**: Escribe "Goku" en la barra de búsqueda
2. **Ver resultados**: Deberías ver resultados mientras escribes
3. **Hacer clic**: Haz clic en un resultado para ver la información completa
4. **Cerrar**: Haz clic en el botón de cerrar para volver a la búsqueda

## Estructura Básica

```
Dragon-Finder/
├── src/
│   ├── components/     # Componentes React
│   ├── func/          # Lógica de negocio
│   ├── Style/         # Estilos LESS
│   └── img/           # Imágenes
├── Index.jsx          # Punto de entrada
├── index.html         # HTML base
└── vite.config.js     # Configuración de Vite
```

## Solución de Problemas Comunes

### El puerto 5173 ya está en uso

Si ves este error, significa que el puerto está ocupado. Vite automáticamente usará el siguiente puerto disponible (5174, 5175, etc.).

### Error al instalar dependencias

Intenta limpiar la caché de npm:

```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### La aplicación no se carga

1. Verifica que Node.js esté instalado: `node --version`
2. Verifica que las dependencias estén instaladas: `ls node_modules`
3. Revisa la consola del navegador en busca de errores (F12)

## Próximos Pasos

- 📖 Lee el [README completo](README.md) para más información
- 🤝 Revisa [CONTRIBUTING.md](CONTRIBUTING.md) si quieres contribuir
- 🎨 Explora los estilos en `src/Style/`
- 🔧 Modifica los componentes en `src/components/`

## Recursos Adicionales

- [Documentación de React](https://es.react.dev/)
- [Documentación de Vite](https://vitejs.dev/)
- [Dragon Ball API](https://dragonball-api.com/)
- [LESS Documentation](https://lesscss.org/)

## ¿Necesitas Ayuda?

Si tienes problemas:

1. Revisa los [Issues](https://github.com/Urpirio/Dragon-Finder/issues) existentes
2. Crea un nuevo issue con detalles del problema
3. Incluye tu versión de Node.js y sistema operativo

---

¡Feliz desarrollo! 🐉✨
