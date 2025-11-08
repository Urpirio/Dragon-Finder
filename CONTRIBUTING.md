# 🤝 Guía de Contribución

¡Gracias por tu interés en contribuir a Dragon Finder! Este documento proporciona las pautas para contribuir al proyecto.

## 📋 Tabla de Contenidos

- [Código de Conducta](#código-de-conducta)
- [¿Cómo Puedo Contribuir?](#cómo-puedo-contribuir)
- [Configuración del Entorno de Desarrollo](#configuración-del-entorno-de-desarrollo)
- [Proceso de Desarrollo](#proceso-de-desarrollo)
- [Guía de Estilo](#guía-de-estilo)
- [Commits y Pull Requests](#commits-y-pull-requests)

## 📜 Código de Conducta

Al participar en este proyecto, te comprometes a mantener un ambiente respetuoso y colaborativo. Se espera que:

- Uses un lenguaje acogedor e inclusivo
- Respetes los diferentes puntos de vista y experiencias
- Aceptes críticas constructivas de manera profesional
- Te enfoques en lo que es mejor para la comunidad

## 🎯 ¿Cómo Puedo Contribuir?

### Reportar Bugs

Si encuentras un bug, por favor:

1. Verifica que el bug no haya sido reportado previamente en los [Issues](https://github.com/Urpirio/Dragon-Finder/issues)
2. Si no existe, crea un nuevo issue incluyendo:
   - Un título descriptivo
   - Pasos para reproducir el problema
   - Comportamiento esperado vs comportamiento actual
   - Capturas de pantalla si es aplicable
   - Tu entorno (navegador, sistema operativo, etc.)

### Sugerir Mejoras

Para sugerir una nueva característica:

1. Verifica que la sugerencia no exista ya en los Issues
2. Crea un nuevo issue con la etiqueta "enhancement"
3. Describe claramente la funcionalidad propuesta
4. Explica por qué sería útil para el proyecto

### Contribuir con Código

1. Encuentra un issue para trabajar o crea uno nuevo
2. Comenta en el issue que deseas trabajar en él
3. Espera confirmación antes de comenzar el trabajo

## 🛠️ Configuración del Entorno de Desarrollo

### Prerrequisitos

- Node.js (versión 14 o superior)
- npm o yarn
- Git

### Configuración Inicial

```bash
# 1. Haz fork del repositorio en GitHub

# 2. Clona tu fork
git clone https://github.com/TU-USUARIO/Dragon-Finder.git
cd Dragon-Finder

# 3. Agrega el repositorio original como remote
git remote add upstream https://github.com/Urpirio/Dragon-Finder.git

# 4. Instala las dependencias
npm install

# 5. Inicia el servidor de desarrollo
npm run dev
```

## 🔄 Proceso de Desarrollo

### 1. Crea una Rama

```bash
# Actualiza tu rama main
git checkout main
git pull upstream main

# Crea una nueva rama para tu feature o fix
git checkout -b feature/nombre-de-tu-feature
# o
git checkout -b fix/nombre-del-bug
```

### 2. Haz tus Cambios

- Escribe código limpio y legible
- Sigue las guías de estilo del proyecto
- Comenta tu código cuando sea necesario
- Asegúrate de que tu código funciona correctamente

### 3. Prueba tus Cambios

```bash
# Verifica que el proyecto se construya correctamente
npm run build

# Prueba la aplicación
npm run dev
```

### 4. Commit y Push

```bash
# Agrega tus cambios
git add .

# Haz commit con un mensaje descriptivo
git commit -m "feat: descripción breve de tu cambio"

# Sube tus cambios
git push origin feature/nombre-de-tu-feature
```

### 5. Crea un Pull Request

1. Ve a tu fork en GitHub
2. Haz clic en "Pull Request"
3. Selecciona tu rama y crea el PR
4. Completa la plantilla del PR con:
   - Descripción de los cambios
   - Issue relacionado (si existe)
   - Capturas de pantalla (si es aplicable)
   - Checklist de verificación

## 🎨 Guía de Estilo

### JavaScript/React

- Usa nombres descriptivos para variables y funciones
- Prefiere arrow functions para funciones cortas
- Usa const por defecto, let solo cuando sea necesario
- Evita var
- Usa template literals para strings con variables
- Comenta código complejo

Ejemplo:
```javascript
// ✅ Bien
const fetchCharacterData = async (characterName) => {
    const response = await fetch(`${API_URL}/characters?name=${characterName}`);
    return response.json();
};

// ❌ Evitar
var x = function(n) {
    return fetch('https://api.com/characters?name=' + n).then(r => r.json());
};
```

### LESS/CSS

- Usa nombres de clase descriptivos en español
- Sigue la convención BEM cuando sea apropiado
- Agrupa propiedades relacionadas
- Usa variables para colores y tamaños recurrentes

### Estructura de Archivos

```
src/
├── components/     # Componentes React
├── func/          # Funciones y lógica de negocio
├── Style/         # Estilos LESS
└── img/           # Recursos de imágenes
```

## 📝 Commits y Pull Requests

### Formato de Commits

Usa el formato [Conventional Commits](https://www.conventionalcommits.org/):

```
tipo: descripción breve

[cuerpo opcional]

[footer opcional]
```

Tipos comunes:
- `feat`: Nueva característica
- `fix`: Corrección de bug
- `docs`: Cambios en documentación
- `style`: Cambios de formato (no afectan la lógica)
- `refactor`: Refactorización de código
- `test`: Agregar o modificar tests
- `chore`: Tareas de mantenimiento

Ejemplos:
```bash
git commit -m "feat: agregar filtro por raza de personaje"
git commit -m "fix: corregir búsqueda con caracteres especiales"
git commit -m "docs: actualizar README con nuevas instrucciones"
```

### Checklist para Pull Requests

Antes de crear un PR, verifica que:

- [ ] El código se construye sin errores (`npm run build`)
- [ ] El código funciona correctamente en desarrollo (`npm run dev`)
- [ ] Has actualizado la documentación si es necesario
- [ ] Has agregado comentarios para código complejo
- [ ] El PR está vinculado a un issue (si existe)
- [ ] Has incluido capturas de pantalla para cambios visuales
- [ ] Tu rama está actualizada con main

## 🔍 Revisión de Código

Después de enviar tu PR:

1. Un mantenedor revisará tu código
2. Pueden solicitar cambios o mejoras
3. Realiza los cambios solicitados en la misma rama
4. Los cambios se actualizarán automáticamente en el PR
5. Una vez aprobado, tu código será fusionado

## 💡 Consejos

- **Mantén los cambios pequeños**: PRs pequeños son más fáciles de revisar
- **Comunícate**: Si tienes dudas, pregunta en el issue
- **Sé paciente**: La revisión puede tomar tiempo
- **Aprende**: Cada revisión es una oportunidad de aprendizaje

## 📞 Contacto

Si tienes preguntas o necesitas ayuda:

- Abre un issue en GitHub
- Comenta en el PR o issue relevante

## 🙏 Reconocimientos

¡Gracias a todos los contribuidores que hacen de Dragon Finder un mejor proyecto!

---

¡Feliz codificación! 🐉✨
