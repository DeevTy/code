// Configuración de misiones expandidas
const missionsConfig = [
    {
        id: 'html-basics',
        title: 'Fundamentos de HTML',
        description: 'Aprende las etiquetas básicas de HTML',
        objectives: [
            { id: 'create-h1', text: 'Crear un título H1', completed: false },
            { id: 'create-div', text: 'Crear un contenedor DIV', completed: false },
            { id: 'create-p', text: 'Crear un párrafo P', completed: false },
            { id: 'create-span', text: 'Crear un elemento SPAN', completed: false }
        ]
    },
    {
        id: 'css-styling',
        title: 'Estilos con CSS',
        description: 'Aplica colores, bordes y efectos visuales',
        objectives: [
            { id: 'change-color', text: 'Cambiar el color de un elemento', completed: false },
            { id: 'add-border', text: 'Agregar bordes redondeados', completed: false },
            { id: 'add-shadow', text: 'Aplicar sombras', completed: false },
            { id: 'use-gradient', text: 'Usar gradientes', completed: false }
        ]
    },
    {
        id: 'flexbox-layout',
        title: 'Layout con Flexbox',
        description: 'Organiza elementos usando Flexbox',
        objectives: [
            { id: 'use-flex', text: 'Usar display: flex', completed: false },
            { id: 'justify-center', text: 'Centrar elementos', completed: false },
            { id: 'space-between', text: 'Distribuir elementos', completed: false },
            { id: 'align-items', text: 'Alinear elementos verticalmente', completed: false }
        ]
    },
    {
        id: 'grid-layout',
        title: 'Grid Layout',
        description: 'Crea layouts complejos con CSS Grid',
        objectives: [
            { id: 'use-grid', text: 'Usar display: grid', completed: false },
            { id: 'grid-columns', text: 'Definir columnas', completed: false },
            { id: 'grid-gap', text: 'Agregar espaciado', completed: false },
            { id: 'grid-areas', text: 'Usar áreas de grid', completed: false }
        ]
    },
    {
        id: 'advanced-css',
        title: 'CSS Avanzado',
        description: 'Explora animaciones y efectos avanzados',
        objectives: [
            { id: 'create-animation', text: 'Crear una animación con @keyframes', completed: false },
            { id: 'use-transform', text: 'Usar transformaciones CSS', completed: false },
            { id: 'apply-filter', text: 'Aplicar filtros CSS', completed: false },
            { id: 'use-pseudo', text: 'Usar pseudo-elementos', completed: false }
        ]
    },
    {
        id: 'responsive-design',
        title: 'Diseño Responsivo',
        description: 'Crea layouts que se adapten a diferentes pantallas',
        objectives: [
            { id: 'use-media-query', text: 'Usar media queries', completed: false },
            { id: 'responsive-grid', text: 'Crear grid responsivo', completed: false },
            { id: 'flexible-images', text: 'Hacer imágenes flexibles', completed: false },
            { id: 'mobile-first', text: 'Implementar mobile-first', completed: false }
        ]
    },
    {
        id: 'final-project',
        title: 'Proyecto Final',
        description: 'Combina todo lo aprendido en un proyecto completo',
        objectives: [
            { id: 'complete-layout', text: 'Crear layout completo', completed: false },
            { id: 'add-animations', text: 'Agregar animaciones', completed: false },
            { id: 'make-responsive', text: 'Hacer responsivo', completed: false },
            { id: 'add-interactions', text: 'Agregar interacciones', completed: false }
        ]
    }
];

window.missionsConfig = missionsConfig;
