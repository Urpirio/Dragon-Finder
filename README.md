# 🐉 Dragon Finder

Una aplicación web interactiva para buscar y explorar personajes de Dragon Ball Super. Construida con React y Vite, esta aplicación permite a los fans encontrar información detallada sobre sus personajes favoritos del universo de Dragon Ball.

![Dragon Ball Super Logo](src/img/logos/image.png)

## 📋 Descripción

Dragon Finder es una aplicación de búsqueda en tiempo real que consume la API de Dragon Ball para proporcionar información instantánea sobre los personajes de la serie. Con una interfaz intuitiva y atractiva, los usuarios pueden buscar personajes y ver sus estadísticas, características y descripciones.

## ✨ Características

- 🔍 **Búsqueda en tiempo real**: Sistema de autocompletado que muestra resultados mientras escribes
- 🎨 **Interfaz personalizada**: Cada personaje tiene un esquema de colores único
- 📊 **Información detallada**: Muestra nombre, Ki, Ki máximo, raza, género, descripción e imagen
- ⚡ **Rendimiento optimizado**: Construido con Vite para tiempos de carga rápidos
- 📱 **Diseño responsive**: Funciona en dispositivos de todos los tamaños

## 🚀 Tecnologías Utilizadas

- **React 18.3.1**: Biblioteca para construir la interfaz de usuario
- **Vite 6.0.5**: Herramienta de construcción y desarrollo rápido
- **LESS 4.2.2**: Preprocesador CSS para estilos avanzados
- **Dragon Ball API**: API externa para datos de personajes
- **Boxicons**: Biblioteca de iconos para la interfaz

## 📦 Instalación

### Prerrequisitos

- Node.js (versión 14 o superior)
- npm o yarn

### Pasos de Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/Urpirio/Dragon-Finder.git
cd Dragon-Finder
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:5173` (o el puerto que Vite asigne)

## 🎮 Uso

1. **Buscar un personaje**: Escribe el nombre del personaje en la barra de búsqueda
2. **Seleccionar de la lista**: Haz clic en cualquier resultado de la lista desplegable
3. **Ver información**: La aplicación mostrará los detalles completos del personaje seleccionado

### Ejemplos de Búsqueda

- Escribe "Goku" para ver información sobre el protagonista principal
- Escribe "Vegeta" para ver al príncipe de los Saiyajin
- Escribe "Gohan", "Piccolo", "Trunks", etc. para otros personajes

## 🏗️ Estructura del Proyecto

```
Dragon-Finder/
├── src/
│   ├── components/        # Componentes React
│   │   └── Buscador.jsx  # Componente principal de búsqueda
│   ├── func/             # Funciones y lógica del negocio
│   │   ├── Buscador.js   # Lógica de búsqueda principal
│   │   ├── Buscador2-6.js # Funciones auxiliares de búsqueda
│   │   ├── Infopersonaje.js # Renderizado de información del personaje
│   │   └── Cerrar.js     # Funcionalidad de cierre
│   ├── Style/            # Archivos de estilos LESS
│   │   └── Buscador.less # Estilos del componente buscador
│   └── img/              # Recursos de imágenes
│       └── logos/        # Logos y iconos
├── Index.jsx             # Punto de entrada de React
├── index.html            # HTML principal
├── package.json          # Dependencias y scripts
└── vite.config.js        # Configuración de Vite
```

## 📜 Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

### `npm run dev`
Inicia el servidor de desarrollo en modo watch.
La página se recargará automáticamente cuando hagas cambios en el código.

### `npm run build`
Construye la aplicación para producción en la carpeta `dist`.
Optimiza el build para el mejor rendimiento.

### `npm run preview`
Previsualiza localmente la versión de producción.
Útil para probar el build antes de desplegarlo.

### `npm run lint`
Ejecuta ESLint para verificar problemas de código.
Ayuda a mantener la calidad y consistencia del código.

## 🌐 API Utilizada

Este proyecto utiliza la [Dragon Ball API](https://dragonball-api.com/) para obtener información sobre los personajes.

**Endpoint principal**: `https://dragonball-api.com/api/characters`

La API proporciona:
- Nombre del personaje
- Niveles de Ki (energía)
- Raza
- Género
- Descripción
- Imagen del personaje

## 🎨 Características del Código

### Sistema de Búsqueda Inteligente

El sistema de búsqueda implementa:
- **Coincidencia exacta**: Detecta nombres completos
- **Búsqueda por prefijo**: Filtra personajes mientras escribes (hasta 6 caracteres)
- **Insensible a mayúsculas/minúsculas**: La búsqueda funciona independientemente del caso

### Personalización Visual

Cada personaje tiene su propio esquema de colores:
- **Goku**: Naranja (#E89902)
- **Vegeta**: Azul (#1F6AB5)
- **Gohan**: Púrpura (#4A4481)
- **Piccolo**: Verde (#62D109)
- Y más...

## 🛠️ Desarrollo

### Agregar Nuevos Personajes

La aplicación obtiene automáticamente todos los personajes disponibles de la API de Dragon Ball. No es necesario agregar personajes manualmente.

### Modificar Estilos

Los estilos están escritos en LESS y se encuentran en `src/Style/Buscador.less`. Para modificarlos:

1. Edita el archivo LESS
2. Los cambios se compilarán automáticamente en modo desarrollo
3. Recarga el navegador para ver los cambios

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/NuevaCaracteristica`)
3. Commit tus cambios (`git commit -m 'Agregar nueva característica'`)
4. Push a la rama (`git push origin feature/NuevaCaracteristica`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto es de código abierto y está disponible para uso personal y educativo.

## 👤 Autor

**Urpirio**

- GitHub: [@Urpirio](https://github.com/Urpirio)

## 🙏 Agradecimientos

- [Dragon Ball API](https://dragonball-api.com/) por proporcionar los datos de los personajes
- [Boxicons](https://boxicons.com/) por los iconos
- La comunidad de React y Vite por las excelentes herramientas

## 📞 Soporte

Si encuentras algún problema o tienes alguna pregunta, por favor abre un issue en el repositorio de GitHub.

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!
