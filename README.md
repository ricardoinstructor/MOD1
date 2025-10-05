# MF0953_2 Test Application

Aplicación web completa para la preparación del certificado MF0953_2 - Montaje de Equipos Microinformáticos.

## Características

### 🎯 Funcionalidades Principales
- **200 preguntas** de nivel medio sobre microinformática
- **Formato test** con 5 respuestas posibles (una correcta)
- **Sin respuestas tipo** "todas las anteriores" o "ninguna de las anteriores"
- **Retroalimentación fundamentada** con fuentes verificadas
- **Dos modos de uso**: Test completo y modo práctica
- **Estadísticas detalladas** de rendimiento
- **Interfaz moderna** y responsive

### 📊 Características Técnicas
- **Diseño responsive** con Tailwind CSS
- **Animaciones fluidas** con Anime.js
- **Gráficos interactivos** con Plotly.js
- **Almacenamiento local** de progreso
- **Navegación intuitiva** entre preguntas
- **Sistema de marcado** de preguntas
- **Revisión completa** de respuestas

## Estructura del Proyecto

```
MF0953_2-Test/
├── index.html          # Página principal con el test
├── estadisticas.html   # Página de estadísticas y análisis
├── recursos.html       # Página de recursos de aprendizaje
├── app.js             # Lógica principal de la aplicación
├── estadisticas.js    # Lógica de estadísticas
├── recursos.js        # Lógica de recursos
├── questions.js       # Base de datos de preguntas
└── README.md          # Este archivo
```

## Instalación y Uso

### Opción 1: Uso Directo
1. Descarga todos los archivos
2. Abre `index.html` en tu navegador
3. ¡Comienza a practicar!

### Opción 2: Servidor Local
```bash
# Con Python 3
python -m http.server 8000

# Con Python 2
python -m SimpleHTTPServer 8000

# Con Node.js
npx serve .
```

### Opción 3: Despliegue en GitHub Pages
1. Crea un repositorio en GitHub
2. Sube todos los archivos
3. Activa GitHub Pages en Settings → Pages
4. Selecciona la rama main y carpeta root
5. Tu aplicación estará disponible en `https://[tu-usuario].github.io/[nombre-repositorio]/`

## Cómo Usar la Aplicación

### Iniciar un Test
1. **Modo Test Completo**: 200 preguntas aleatorias con tiempo ilimitado
2. **Modo Práctica**: Todas las preguntas disponibles con retroalimentación inmediata

### Durante el Test
- **Navegación**: Usa los botones "Anterior" y "Siguiente"
- **Marcar preguntas**: Presiona el botón "Marcar" para revisar después
- **Retroalimentación**: En modo práctica, verás explicaciones inmediatamente

### Al Finalizar
- **Resultados detallados**: Porcentaje de aciertos y preguntas correctas/incorrectas
- **Revisión completa**: Accede a todas las preguntas con explicaciones
- **Estadísticas**: Visualiza tu progreso en la página de estadísticas

## Categorías de Preguntas

1. **Componentes Básicos** (20%)
   - Placas base y funciones
   - Memoria RAM y procesadores
   - Chipsets y arquitectura

2. **Fuentes de Alimentación** (15%)
   - Tipos AT/ATX
   - Certificaciones y eficiencia
   - Conectores y especificaciones

3. **Sistemas de Refrigeración** (15%)
   - Refrigeración por aire y líquida
   - Ventiladores y disipadores
   - Mantenimiento térmico

4. **Conectores y Puertos** (20%)
   - Conectores internos
   - Puertos de expansión
   - USB y periféricos

5. **Almacenamiento** (15%)
   - HDD y SSD
   - Interfaces SATA y M.2
   - Configuración RAID

6. **Tarjetas de Expansión** (15%)
   - PCI Express
   - Tarjetas gráficas
   - Tarjetas de sonido y red

## Fuentes y Referencias

Todas las preguntas incluyen:
- **Explicación detallada** del concepto
- **Enlaces a fuentes** verificadas
- **Contexto técnico** actualizado
- **Referencias oficiales** del SEPE e INCUAL

## Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **Tailwind CSS** - Framework de diseño
- **JavaScript ES6+** - Lógica de aplicación
- **Anime.js** - Animaciones
- **Plotly.js** - Gráficos interactivos
- **Font Awesome** - Iconos
- **Google Fonts** - Tipografía

## Características de Desarrollo

### Código Limpio y Modular
- **Separación de responsabilidades**
- **Funciones reutilizables**
- **Comentarios descriptivos**
- **Nomenclatura consistente**

### Optimización de Rendimiento
- **Carga diferida** de gráficos
- **Almacenamiento local** eficiente
- **Animaciones optimizadas**
- **Imágenes vectorizadas**

### Accesibilidad
- **Contraste de colores** adecuado
- **Navegación por teclado**
- **Textos alternativos**
- **Estructura semántica**

## Personalización

### Añadir Nuevas Preguntas
Edita `questions.js` y añade objetos con el siguiente formato:

```javascript
{
    id: 201,
    category: "Componentes Básicos",
    question: "Tu pregunta aquí",
    options: ["Opción A", "Opción B", "Opción C", "Opción D", "Opción E"],
    correct: 2, // Índice de la respuesta correcta (0-4)
    explanation: "Explicación detallada de la respuesta",
    source: "URL de la fuente"
}
```

### Modificar el Diseño
- **Colores**: Edita las clases de Tailwind CSS
- **Animaciones**: Ajusta los parámetros en `app.js`
- **Layout**: Modifica la estructura HTML

## Contribuciones

Las contribuciones son bienvenidas:
1. Fork del repositorio
2. Crea una rama para tu feature
3. Realiza los cambios
4. Añade tests si es necesario
5. Envía un Pull Request

## Licencia

Este proyecto está licenciado bajo la Licencia MIT.

## Agradecimientos

- **SEPE** por la documentación oficial
- **Comunidad educativa** por los recursos compartidos
- **Contribuyentes** que mejoran el contenido

## Soporte

Si encuentras errores o tienes sugerencias:
1. Abre un issue en GitHub
2. Usa el formulario de contacto en la página de recursos
3. Envía un email con tus comentarios

---

**¡Buena suerte en tu certificación MF0953_2!** 🎯