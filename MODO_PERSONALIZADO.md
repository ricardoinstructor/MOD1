# Modo Personalizado - Selector de Preguntas

## Descripción
Se ha agregado una nueva funcionalidad que permite al usuario seleccionar el número exacto de preguntas que desea practicar.

## Características

### 🎯 Botón "Modo Personalizado"
- Nuevo botón con gradiente rosa/rose en la página principal
- Icono: `fa-sliders-h` (controles deslizantes)
- Al hacer clic, se abre un modal interactivo

### 📊 Modal de Selección
El modal incluye:
1. **Input numérico**: Para escribir directamente el número de preguntas (1 - total disponible)
2. **Slider (control deslizante)**: Para seleccionar visualmente el número
3. **Sincronización**: Ambos controles están sincronizados en tiempo real
4. **Validación**: No permite valores fuera del rango permitido

### 💡 Recomendaciones Integradas
El modal muestra sugerencias según el número de preguntas:
- **20-30 preguntas**: Práctica rápida
- **50-70 preguntas**: Sesión media
- **100+ preguntas**: Examen completo

### 🎨 Diseño
- Animación suave de entrada/salida
- Estilo moderno con Tailwind CSS
- Gradientes rosa/rose consistentes con el tema
- Responsive y adaptable a móviles

## Uso

1. Haz clic en el botón **"Modo Personalizado"** en la página principal
2. Ajusta el número de preguntas usando:
   - El campo numérico (escribiendo directamente)
   - El slider (arrastrando el control)
3. Haz clic en **"Comenzar Test"** para iniciar
4. O haz clic en **"Cancelar"** o la X para cerrar sin iniciar

## Implementación Técnica

### Archivos Modificados
- **index.html**: Agregado botón de modo personalizado (líneas 73-75)
- **app.js**: Múltiples cambios:
  - Nuevo botón `customModeBtn` en `initializeElements()`
  - Event listener para el botón en `bindEvents()`
  - Modificado `startTest()` para aceptar parámetro `customQuestions`
  - Nuevo método `showCustomModeModal()` que crea el modal dinámicamente
  - Funciones globales `startCustomTest()` y `closeCustomModal()`

### Flujo de Ejecución
```
Usuario hace clic en "Modo Personalizado"
  ↓
Se llama a showCustomModeModal()
  ↓
Se crea y muestra el modal con animación
  ↓
Usuario selecciona número de preguntas
  ↓
Usuario hace clic en "Comenzar Test"
  ↓
Se llama a startCustomTest()
  ↓
Se valida el número ingresado
  ↓
Se cierra el modal con animación
  ↓
Se llama a startTest('custom', numQuestions)
  ↓
Se generan N preguntas aleatorias
  ↓
Comienza el test
```

## Características Adicionales

### Validación
- Mínimo: 1 pregunta
- Máximo: Total de preguntas en la base de datos
- Si el valor está fuera de rango, muestra una alerta

### Persistencia
El modo personalizado se guarda en el estado del test, permitiendo:
- Continuar un test personalizado si se refresca la página
- Restaurar el número exacto de preguntas seleccionadas

### Accesibilidad
- Los inputs tienen labels descriptivos
- Los controles son accesibles por teclado
- Los colores tienen suficiente contraste

## Mejoras Futuras Sugeridas
- [ ] Agregar presets rápidos (10, 25, 50, 75, 100)
- [ ] Guardar configuración personalizada favorita en localStorage
- [ ] Mostrar tiempo estimado según número de preguntas
- [ ] Permitir filtrar por categorías específicas
- [ ] Agregar modo "Preguntas difíciles" (basado en historial)
