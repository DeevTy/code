// Configuración de misiones MUCHO MÁS EXPANDIDA
const missionsConfig = [
    // === MÓDULO 1: FUNDAMENTOS HTML ===
    {
        id: 'html-intro',
        title: '🎯 Introducción a HTML',
        description: 'Primeros pasos en el mundo del desarrollo web',
        objectives: [
            { id: 'create-h1', text: 'Crear tu primer título H1', completed: false },
            { id: 'create-p', text: 'Escribir un párrafo con P', completed: false },
            { id: 'create-h2', text: 'Agregar un subtítulo H2', completed: false },
            { id: 'create-h3', text: 'Crear un subtítulo H3', completed: false }
        ]
    },
    {
        id: 'html-structure',
        title: '🏗️ Estructura HTML',
        description: 'Aprende a estructurar contenido con contenedores',
        objectives: [
            { id: 'create-div', text: 'Crear un contenedor DIV', completed: false },
            { id: 'create-section', text: 'Usar etiqueta SECTION', completed: false },
            { id: 'create-article', text: 'Crear un ARTICLE', completed: false },
            { id: 'create-header', text: 'Agregar un HEADER', completed: false }
        ]
    },
    {
        id: 'html-text-elements',
        title: '📝 Elementos de Texto',
        description: 'Domina los elementos de texto en HTML',
        objectives: [
            { id: 'create-span', text: 'Usar SPAN para texto inline', completed: false },
            { id: 'create-strong', text: 'Hacer texto en negrita con STRONG', completed: false },
            { id: 'create-em', text: 'Usar EM para énfasis', completed: false },
            { id: 'create-mark', text: 'Resaltar texto con MARK', completed: false }
        ]
    },
    {
        id: 'html-lists',
        title: '📋 Listas HTML',
        description: 'Crea listas ordenadas y no ordenadas',
        objectives: [
            { id: 'create-ul', text: 'Crear lista no ordenada UL', completed: false },
            { id: 'create-ol', text: 'Crear lista ordenada OL', completed: false },
            { id: 'create-li', text: 'Agregar elementos LI', completed: false },
            { id: 'create-nested-list', text: 'Crear lista anidada', completed: false }
        ]
    },
    {
        id: 'html-links-images',
        title: '🔗 Enlaces e Imágenes',
        description: 'Conecta páginas y agrega contenido multimedia',
        objectives: [
            { id: 'create-a', text: 'Crear enlace con A', completed: false },
            { id: 'create-img', text: 'Agregar imagen con IMG', completed: false },
            { id: 'create-nav', text: 'Crear navegación con NAV', completed: false },
            { id: 'create-footer', text: 'Agregar pie de página', completed: false }
        ]
    },

    // === MÓDULO 2: FUNDAMENTOS CSS ===
    {
        id: 'css-intro',
        title: '🎨 Introducción a CSS',
        description: 'Da vida a tu HTML con estilos',
        objectives: [
            { id: 'change-color', text: 'Cambiar color de texto', completed: false },
            { id: 'change-bg-color', text: 'Cambiar color de fondo', completed: false },
            { id: 'change-font-size', text: 'Modificar tamaño de fuente', completed: false },
            { id: 'change-font-family', text: 'Cambiar tipo de fuente', completed: false }
        ]
    },
    {
        id: 'css-box-model',
        title: '📦 Modelo de Caja',
        description: 'Entiende padding, margin y border',
        objectives: [
            { id: 'add-padding', text: 'Agregar padding interno', completed: false },
            { id: 'add-margin', text: 'Usar margin para espaciado', completed: false },
            { id: 'add-border', text: 'Crear bordes', completed: false },
            { id: 'border-radius', text: 'Hacer bordes redondeados', completed: false }
        ]
    },
    {
        id: 'css-colors-gradients',
        title: '🌈 Colores y Gradientes',
        description: 'Explora el mundo del color en CSS',
        objectives: [
            { id: 'use-hex-colors', text: 'Usar colores hexadecimales', completed: false },
            { id: 'use-rgb-colors', text: 'Aplicar colores RGB', completed: false },
            { id: 'create-gradient', text: 'Crear gradiente lineal', completed: false },
            { id: 'radial-gradient', text: 'Usar gradiente radial', completed: false }
        ]
    },
    {
        id: 'css-effects',
        title: '✨ Efectos Visuales',
        description: 'Agrega sombras y efectos especiales',
        objectives: [
            { id: 'add-shadow', text: 'Aplicar sombra de texto', completed: false },
            { id: 'box-shadow', text: 'Crear sombra de caja', completed: false },
            { id: 'text-shadow', text: 'Agregar sombra de texto', completed: false },
            { id: 'opacity', text: 'Usar transparencia', completed: false }
        ]
    },

    // === MÓDULO 3: LAYOUT AVANZADO ===
    {
        id: 'flexbox-basics',
        title: '📐 Flexbox Básico',
        description: 'Organiza elementos en una dimensión',
        objectives: [
            { id: 'use-flex', text: 'Usar display: flex', completed: false },
            { id: 'flex-direction', text: 'Cambiar dirección del flex', completed: false },
            { id: 'justify-content', text: 'Alinear horizontalmente', completed: false },
            { id: 'align-items', text: 'Alinear verticalmente', completed: false }
        ]
    },
    {
        id: 'flexbox-advanced',
        title: '🎯 Flexbox Avanzado',
        description: 'Controla el comportamiento de elementos flex',
        objectives: [
            { id: 'flex-wrap', text: 'Usar flex-wrap', completed: false },
            { id: 'flex-grow', text: 'Controlar crecimiento', completed: false },
            { id: 'flex-shrink', text: 'Controlar reducción', completed: false },
            { id: 'flex-basis', text: 'Establecer tamaño base', completed: false }
        ]
    },
    {
        id: 'grid-basics',
        title: '🔲 Grid Básico',
        description: 'Crea layouts en dos dimensiones',
        objectives: [
            { id: 'use-grid', text: 'Usar display: grid', completed: false },
            { id: 'grid-template-columns', text: 'Definir columnas', completed: false },
            { id: 'grid-template-rows', text: 'Definir filas', completed: false },
            { id: 'grid-gap', text: 'Agregar espaciado', completed: false }
        ]
    },
    {
        id: 'grid-advanced',
        title: '🎨 Grid Avanzado',
        description: 'Controla la posición y tamaño de elementos',
        objectives: [
            { id: 'grid-areas', text: 'Usar áreas de grid', completed: false },
            { id: 'grid-line-names', text: 'Nombrar líneas de grid', completed: false },
            { id: 'grid-auto-fit', text: 'Grid responsivo automático', completed: false },
            { id: 'grid-minmax', text: 'Usar minmax()', completed: false }
        ]
    },

    // === MÓDULO 4: ANIMACIONES Y EFECTOS ===
    {
        id: 'css-transitions',
        title: '🔄 Transiciones CSS',
        description: 'Anima cambios de estado',
        objectives: [
            { id: 'transition-property', text: 'Definir propiedades a animar', completed: false },
            { id: 'transition-duration', text: 'Establecer duración', completed: false },
            { id: 'transition-timing', text: 'Usar funciones de timing', completed: false },
            { id: 'transition-delay', text: 'Agregar retraso', completed: false }
        ]
    },
    {
        id: 'css-animations',
        title: '🎬 Animaciones CSS',
        description: 'Crea animaciones complejas con @keyframes',
        objectives: [
            { id: 'create-keyframes', text: 'Definir @keyframes', completed: false },
            { id: 'animation-name', text: 'Aplicar animación', completed: false },
            { id: 'animation-iteration', text: 'Controlar repeticiones', completed: false },
            { id: 'animation-direction', text: 'Cambiar dirección', completed: false }
        ]
    },
    {
        id: 'css-transforms',
        title: '🔄 Transformaciones',
        description: 'Modifica la forma y posición de elementos',
        objectives: [
            { id: 'transform-translate', text: 'Mover elementos', completed: false },
            { id: 'transform-rotate', text: 'Rotar elementos', completed: false },
            { id: 'transform-scale', text: 'Escalar elementos', completed: false },
            { id: 'transform-skew', text: 'Inclinar elementos', completed: false }
        ]
    },
    {
        id: 'css-filters',
        title: '🎭 Filtros CSS',
        description: 'Aplica efectos visuales avanzados',
        objectives: [
            { id: 'filter-blur', text: 'Aplicar desenfoque', completed: false },
            { id: 'filter-brightness', text: 'Ajustar brillo', completed: false },
            { id: 'filter-contrast', text: 'Modificar contraste', completed: false },
            { id: 'filter-hue-rotate', text: 'Cambiar tono', completed: false }
        ]
    },

    // === MÓDULO 5: DISEÑO RESPONSIVO ===
    {
        id: 'responsive-basics',
        title: '📱 Diseño Responsivo',
        description: 'Adapta tu sitio a cualquier dispositivo',
        objectives: [
            { id: 'use-media-query', text: 'Crear media queries', completed: false },
            { id: 'responsive-images', text: 'Hacer imágenes responsivas', completed: false },
            { id: 'responsive-text', text: 'Texto que se adapta', completed: false },
            { id: 'viewport-meta', text: 'Configurar viewport', completed: false }
        ]
    },
    {
        id: 'mobile-first',
        title: '📱 Mobile First',
        description: 'Diseña primero para móviles',
        objectives: [
            { id: 'mobile-layout', text: 'Layout para móviles', completed: false },
            { id: 'tablet-breakpoint', text: 'Breakpoint para tablets', completed: false },
            { id: 'desktop-breakpoint', text: 'Breakpoint para desktop', completed: false },
            { id: 'touch-friendly', text: 'Elementos táctiles', completed: false }
        ]
    },
    {
        id: 'responsive-grid',
        title: '🔲 Grid Responsivo',
        description: 'Crea grids que se adaptan',
        objectives: [
            { id: 'auto-fit-grid', text: 'Grid con auto-fit', completed: false },
            { id: 'responsive-columns', text: 'Columnas responsivas', completed: false },
            { id: 'grid-breakpoints', text: 'Grid con breakpoints', completed: false },
            { id: 'flexible-grid', text: 'Grid flexible', completed: false }
        ]
    },

    // === MÓDULO 6: COMPONENTES AVANZADOS ===
    {
        id: 'buttons-forms',
        title: '🔘 Botones y Formularios',
        description: 'Crea elementos interactivos',
        objectives: [
            { id: 'style-button', text: 'Estilizar botones', completed: false },
            { id: 'button-states', text: 'Estados de botones', completed: false },
            { id: 'form-inputs', text: 'Estilizar inputs', completed: false },
            { id: 'form-validation', text: 'Validación visual', completed: false }
        ]
    },
    {
        id: 'cards-modals',
        title: '🃏 Tarjetas y Modales',
        description: 'Crea componentes reutilizables',
        objectives: [
            { id: 'create-card', text: 'Diseñar tarjetas', completed: false },
            { id: 'card-hover', text: 'Efectos hover en tarjetas', completed: false },
            { id: 'modal-overlay', text: 'Crear overlay de modal', completed: false },
            { id: 'modal-animation', text: 'Animar modales', completed: false }
        ]
    },
    {
        id: 'navigation',
        title: '🧭 Navegación',
        description: 'Crea menús y navegación',
        objectives: [
            { id: 'navbar-basic', text: 'Barra de navegación básica', completed: false },
            { id: 'dropdown-menu', text: 'Menú desplegable', completed: false },
            { id: 'mobile-menu', text: 'Menú móvil', completed: false },
            { id: 'breadcrumbs', text: 'Migas de pan', completed: false }
        ]
    },

    // === MÓDULO 7: OPTIMIZACIÓN Y RENDIMIENTO ===
    {
        id: 'css-optimization',
        title: '⚡ Optimización CSS',
        description: 'Mejora el rendimiento de tu CSS',
        objectives: [
            { id: 'css-selectors', text: 'Optimizar selectores', completed: false },
            { id: 'css-organization', text: 'Organizar CSS', completed: false },
            { id: 'css-variables', text: 'Usar variables CSS', completed: false },
            { id: 'css-reset', text: 'Implementar CSS reset', completed: false }
        ]
    },
    {
        id: 'browser-support',
        title: '🌐 Compatibilidad',
        description: 'Asegura compatibilidad entre navegadores',
        objectives: [
            { id: 'vendor-prefixes', text: 'Usar prefijos de vendedor', completed: false },
            { id: 'fallbacks', text: 'Crear fallbacks', completed: false },
            { id: 'feature-detection', text: 'Detección de características', completed: false },
            { id: 'progressive-enhancement', text: 'Mejora progresiva', completed: false }
        ]
    },

    // === MÓDULO 8: PROYECTOS PRÁCTICOS ===
    {
        id: 'portfolio-project',
        title: '💼 Proyecto: Portfolio',
        description: 'Crea tu portfolio personal',
        objectives: [
            { id: 'portfolio-layout', text: 'Layout del portfolio', completed: false },
            { id: 'portfolio-responsive', text: 'Hacer responsivo', completed: false },
            { id: 'portfolio-animations', text: 'Agregar animaciones', completed: false },
            { id: 'portfolio-contact', text: 'Formulario de contacto', completed: false }
        ]
    },
    {
        id: 'ecommerce-project',
        title: '🛒 Proyecto: E-commerce',
        description: 'Diseña una tienda online',
        objectives: [
            { id: 'product-grid', text: 'Grid de productos', completed: false },
            { id: 'product-cards', text: 'Tarjetas de producto', completed: false },
            { id: 'shopping-cart', text: 'Carrito de compras', completed: false },
            { id: 'checkout-form', text: 'Formulario de pago', completed: false }
        ]
    },
    {
        id: 'blog-project',
        title: '📝 Proyecto: Blog',
        description: 'Crea un blog moderno',
        objectives: [
            { id: 'blog-layout', text: 'Layout del blog', completed: false },
            { id: 'article-cards', text: 'Tarjetas de artículo', completed: false },
            { id: 'sidebar-widgets', text: 'Widgets de sidebar', completed: false },
            { id: 'pagination', text: 'Sistema de paginación', completed: false }
        ]
    },
    {
        id: 'dashboard-project',
        title: '📊 Proyecto: Dashboard',
        description: 'Diseña un panel de control',
        objectives: [
            { id: 'dashboard-grid', text: 'Grid del dashboard', completed: false },
            { id: 'data-cards', text: 'Tarjetas de datos', completed: false },
            { id: 'charts-container', text: 'Contenedores de gráficos', completed: false },
            { id: 'responsive-dashboard', text: 'Dashboard responsivo', completed: false }
        ]
    },

    // === MÓDULO 9: TÉCNICAS AVANZADAS ===
    {
        id: 'css-methodology',
        title: '📚 Metodologías CSS',
        description: 'Aprende BEM, SMACSS y más',
        objectives: [
            { id: 'bem-naming', text: 'Nomenclatura BEM', completed: false },
            { id: 'component-architecture', text: 'Arquitectura de componentes', completed: false },
            { id: 'css-modules', text: 'Módulos CSS', completed: false },
            { id: 'utility-classes', text: 'Clases utilitarias', completed: false }
        ]
    },
    {
        id: 'css-preprocessors',
        title: '🔧 Preprocesadores CSS',
        description: 'Introducción a Sass y Less',
        objectives: [
            { id: 'sass-variables', text: 'Variables en Sass', completed: false },
            { id: 'sass-nesting', text: 'Anidamiento en Sass', completed: false },
            { id: 'sass-mixins', text: 'Mixins en Sass', completed: false },
            { id: 'sass-functions', text: 'Funciones en Sass', completed: false }
        ]
    },
    {
        id: 'css-frameworks',
        title: '🎨 Frameworks CSS',
        description: 'Explora Bootstrap, Tailwind y más',
        objectives: [
            { id: 'bootstrap-grid', text: 'Grid de Bootstrap', completed: false },
            { id: 'bootstrap-components', text: 'Componentes de Bootstrap', completed: false },
            { id: 'tailwind-utility', text: 'Clases utilitarias de Tailwind', completed: false },
            { id: 'custom-framework', text: 'Crear tu propio framework', completed: false }
        ]
    },

    // === MÓDULO 10: PROYECTO FINAL MAESTRO ===
    {
        id: 'master-project',
        title: '🏆 Proyecto Final: Aplicación Completa',
        description: 'Combina todo lo aprendido en una aplicación web completa',
        objectives: [
            { id: 'complete-architecture', text: 'Arquitectura completa', completed: false },
            { id: 'responsive-design', text: 'Diseño completamente responsivo', completed: false },
            { id: 'advanced-animations', text: 'Animaciones avanzadas', completed: false },
            { id: 'performance-optimized', text: 'Optimizado para rendimiento', completed: false },
            { id: 'accessibility', text: 'Accesibilidad completa', completed: false },
            { id: 'cross-browser', text: 'Compatibilidad total', completed: false }
        ]
    }
];

window.missionsConfig = missionsConfig;
