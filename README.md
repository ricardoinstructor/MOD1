# MF0953_2 Test Application

Aplicación web completa para la preparación del certificado MF0953_2 - Montaje de Equipos Microinformáticos.

## 🌐 Acceso a la Aplicación

**URL:** [https://ricardoinstructor.github.io/MOD1/](https://ricardoinstructor.github.io/MOD1/)

> ⚠️ **Nota**: Las preguntas han sido verificadas y actualizadas. Aunque se ha realizado un proceso de revisión exhaustivo, pueden existir algunos errores. Si encuentras alguna inconsistencia, por favor repórtala.

## Características

### 🎯 Funcionalidades Principales
- **686 preguntas** de nivel medio sobre microinformática
- **Formato test** con 4-5 respuestas posibles (una correcta)
- **Preguntas reales** basadas en contenido técnico verificado
- **Retroalimentación fundamentada** con fuentes verificadas oficiales
- **Tres modos de uso**: Test completo (686), Modo reducido (100) y Modo práctica (20)
- **Estadísticas detalladas** de rendimiento
- **Interfaz moderna** y responsive
- **12 categorías** temáticas bien organizadas

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
1. **Modo Test Completo**: 686 preguntas (todas las disponibles) con tiempo ilimitado
2. **Modo Reducido**: 100 preguntas aleatorias - ideal para repasos rápidos
3. **Modo Práctica**: 20 preguntas aleatorias con retroalimentación inmediata

### Durante el Test
- **Navegación**: Usa los botones "Anterior" y "Siguiente"
- **Marcar preguntas**: Presiona el botón "Marcar" para revisar después
- **Retroalimentación**: En modo práctica, verás explicaciones inmediatamente

### Al Finalizar
- **Resultados detallados**: Porcentaje de aciertos y preguntas correctas/incorrectas
- **Revisión completa**: Accede a todas las preguntas con explicaciones
- **Estadísticas**: Visualiza tu progreso en la página de estadísticas

## Categorías de Preguntas

La aplicación incluye **686 preguntas** organizadas en 12 categorías temáticas:

1. **Componentes Básicos** (247 preguntas - 36%)
   - Conceptos generales de hardware
   - Dispositivos y periféricos
   - Componentes fundamentales

2. **Conectores de Placa Base** (111 preguntas - 16%)
   - SATA, IDE, ATX
   - Conectores de panel frontal
   - Conectores de expansión

3. **Tarjetas de Expansión** (92 preguntas - 13%)
   - PCI, PCIe, AGP, ISA
   - Ranuras de expansión
   - Compatibilidad y características

4. **Chipsets y CPU** (70 preguntas - 10%)
   - Procesadores Intel y AMD
   - Northbridge y Southbridge
   - Arquitecturas y tecnologías

5. **Conectores de Video** (51 preguntas - 7%)
   - VGA, HDMI, DisplayPort
   - USB-C para video
   - Características técnicas

6. **USB y Conectores** (40 preguntas - 6%)
   - Estándares USB 2.0, 3.0, 3.1, 3.2
   - Tipos de conectores USB
   - USB Power Delivery

7. **Tipos de Memoria** (25 preguntas - 4%)
   - DDR, DDR2, DDR3, DDR4
   - DIMM y SO-DIMM
   - SRAM y DRAM

8. **Tarjetas Gráficas** (18 preguntas - 3%)
   - GPU NVIDIA y AMD
   - CUDA y tecnologías
   - VRAM y rendimiento

9. **Almacenamiento** (16 preguntas - 2%)
   - HDD y SSD
   - Interfaces SATA y NVMe
   - M.2 y RAID

10. **Puertos y Conectividad** (9 preguntas - 1%)
    - PS/2, COM, LPT
    - IEEE 1394 (FireWire)
    - Thunderbolt

11. **Fuentes de Alimentación** (6 preguntas - 1%)
    - ATX y voltajes
    - Conectores de alimentación
    - Eficiencia energética

12. **Arquitectura de Sistema** (1 pregunta)
    - Buses de sistema
    - Arquitecturas de comunicación

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