// ===== VARIABLES GLOBALES =====
let scene, camera, renderer, controls;
let currentMission = 0;
let missionProgress = 0;
let isAnimating = false;
let particles = [];
let htmlElements = [];
let cssStyles = {};

// ===== CONFIGURACIÓN DE MISIONES =====
const missions = [
    {
        id: 'html-basics',
        title: 'Fundamentos de HTML',
        description: 'Aprende las etiquetas básicas de HTML y ve cómo cobran vida en 3D',
        hint: 'Intenta escribir: &lt;h1&gt;¡Hola Mundo!&lt;/h1&gt;',
        objectives: [
            { id: 'create-h1', text: 'Crear un título H1', completed: false },
            { id: 'create-div', text: 'Crear un contenedor DIV', completed: false },
            { id: 'create-p', text: 'Crear un párrafo P', completed: false }
        ],
        htmlTemplate: `<!DOCTYPE html>
<html>
<head>
    <title>Mi Mundo 3D</title>
</head>
<body>
    <h1>¡Hola Mundo!</h1>
    <div class="container">
        <p>Mi primera página</p>
    </div>
</body>
</html>`,
        cssTemplate: `/* Estilos CSS */
body {
    background-color: #1a1a1a;
    color: #ffffff;
}

h1 {
    color: #00ff88;
    text-shadow: 0 0 10px #00ff88;
}

.container {
    background-color: #333;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 0 20px rgba(0, 255, 136, 0.3);
}`
    },
    {
        id: 'css-styling',
        title: 'Estilos con CSS',
        description: 'Aplica colores, bordes y efectos visuales a tus elementos 3D',
        hint: 'Prueba cambiar el color de fondo: background-color: #ff6b35;',
        objectives: [
            { id: 'change-color', text: 'Cambiar el color de un elemento', completed: false },
            { id: 'add-border', text: 'Agregar bordes redondeados', completed: false },
            { id: 'add-shadow', text: 'Aplicar sombras', completed: false }
        ],
        htmlTemplate: `<!DOCTYPE html>
<html>
<head>
    <title>Estilos CSS</title>
</head>
<body>
    <h1>Mi Título Estilizado</h1>
    <div class="card">
        <p>Una tarjeta con estilos</p>
    </div>
    <div class="button">
        <span>Botón Neón</span>
    </div>
</body>
</html>`,
        cssTemplate: `/* Estilos CSS */
body {
    background-color: #1a1a1a;
    color: #ffffff;
}

h1 {
    color: #00d4ff;
    text-shadow: 0 0 15px #00d4ff;
    font-size: 2.5em;
}

.card {
    background-color: #333;
    border-radius: 15px;
    padding: 25px;
    margin: 20px 0;
    box-shadow: 0 0 30px rgba(0, 212, 255, 0.4);
    border: 2px solid #00d4ff;
}

.button {
    background: linear-gradient(45deg, #8b5cf6, #ec4899);
    border-radius: 25px;
    padding: 15px 30px;
    display: inline-block;
    cursor: pointer;
    box-shadow: 0 0 20px rgba(139, 92, 246, 0.5);
    transition: all 0.3s ease;
}

.button:hover {
    transform: translateY(-3px);
    box-shadow: 0 0 30px rgba(236, 72, 153, 0.7);
}`
    },
    {
        id: 'flexbox-layout',
        title: 'Layout con Flexbox',
        description: 'Organiza tus elementos 3D usando Flexbox para crear layouts dinámicos',
        hint: 'Usa display: flex para alinear elementos horizontalmente',
        objectives: [
            { id: 'use-flex', text: 'Usar display: flex', completed: false },
            { id: 'justify-center', text: 'Centrar elementos', completed: false },
            { id: 'space-between', text: 'Distribuir elementos', completed: false }
        ],
        htmlTemplate: `<!DOCTYPE html>
<html>
<head>
    <title>Flexbox Layout</title>
</head>
<body>
    <div class="flex-container">
        <div class="flex-item">Item 1</div>
        <div class="flex-item">Item 2</div>
        <div class="flex-item">Item 3</div>
    </div>
    <div class="nav-bar">
        <span>Inicio</span>
        <span>Acerca</span>
        <span>Contacto</span>
    </div>
</body>
</html>`,
        cssTemplate: `/* Estilos CSS */
body {
    background-color: #1a1a1a;
    color: #ffffff;
}

.flex-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #333;
    border-radius: 15px;
    padding: 30px;
    margin: 20px 0;
    box-shadow: 0 0 25px rgba(0, 255, 136, 0.3);
}

.flex-item {
    background: linear-gradient(45deg, #00ff88, #00d4ff);
    border-radius: 10px;
    padding: 20px;
    margin: 0 10px;
    box-shadow: 0 0 15px rgba(0, 255, 136, 0.4);
    transition: all 0.3s ease;
}

.flex-item:hover {
    transform: scale(1.1);
    box-shadow: 0 0 25px rgba(0, 255, 136, 0.6);
}

.nav-bar {
    display: flex;
    justify-content: center;
    gap: 30px;
    background-color: rgba(139, 92, 246, 0.2);
    border-radius: 25px;
    padding: 15px 30px;
    border: 1px solid #8b5cf6;
}

.nav-bar span {
    color: #8b5cf6;
    cursor: pointer;
    transition: all 0.3s ease;
}

.nav-bar span:hover {
    color: #ffffff;
    text-shadow: 0 0 10px #8b5cf6;
}`
    },
    {
        id: 'grid-layout',
        title: 'Grid Layout',
        description: 'Crea layouts complejos y responsivos usando CSS Grid',
        hint: 'Usa display: grid y grid-template-columns para crear una cuadrícula',
        objectives: [
            { id: 'use-grid', text: 'Usar display: grid', completed: false },
            { id: 'grid-columns', text: 'Definir columnas', completed: false },
            { id: 'grid-gap', text: 'Agregar espaciado', completed: false }
        ],
        htmlTemplate: `<!DOCTYPE html>
<html>
<head>
    <title>Grid Layout</title>
</head>
<body>
    <div class="grid-container">
        <div class="grid-item header">Header</div>
        <div class="grid-item sidebar">Sidebar</div>
        <div class="grid-item main">Main Content</div>
        <div class="grid-item footer">Footer</div>
    </div>
    <div class="photo-gallery">
        <div class="photo">Foto 1</div>
        <div class="photo">Foto 2</div>
        <div class="photo">Foto 3</div>
        <div class="photo">Foto 4</div>
    </div>
</body>
</html>`,
        cssTemplate: `/* Estilos CSS */
body {
    background-color: #1a1a1a;
    color: #ffffff;
}

.grid-container {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: auto 1fr auto;
    gap: 15px;
    background-color: #333;
    border-radius: 15px;
    padding: 20px;
    margin: 20px 0;
    box-shadow: 0 0 25px rgba(236, 72, 153, 0.3);
}

.grid-item {
    background: linear-gradient(45deg, #ec4899, #8b5cf6);
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    box-shadow: 0 0 15px rgba(236, 72, 153, 0.4);
}

.header {
    grid-column: 1 / -1;
    background: linear-gradient(45deg, #ff6b35, #ec4899);
}

.footer {
    grid-column: 1 / -1;
    background: linear-gradient(45deg, #8b5cf6, #00d4ff);
}

.photo-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 15px;
    margin-top: 20px;
}

.photo {
    background: linear-gradient(45deg, #00ff88, #00d4ff);
    border-radius: 10px;
    padding: 30px;
    text-align: center;
    box-shadow: 0 0 15px rgba(0, 255, 136, 0.4);
    transition: all 0.3s ease;
}

.photo:hover {
    transform: rotate(5deg) scale(1.05);
    box-shadow: 0 0 25px rgba(0, 255, 136, 0.6);
}`
    }
];

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupEventListeners();
    initializeThreeJS();
    loadMission(0);
    createParticles();
    showNotification('¡Bienvenido a CodeScape 3D!', 'info');
}

// ===== CONFIGURACIÓN DE EVENT LISTENERS =====
function setupEventListeners() {
    // Navegación
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => switchModule(btn.dataset.module));
    });

    // Editor de código
    const htmlEditor = document.getElementById('html-editor');
    const cssEditor = document.getElementById('css-editor');
    
    htmlEditor.addEventListener('input', debounce(parseAndRender, 500));
    cssEditor.addEventListener('input', debounce(parseAndRender, 500));

    // Tabs del editor
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => switchTab(btn.dataset.tab));
    });

    // Controles del editor
    document.getElementById('format-btn').addEventListener('click', formatCode);
    document.getElementById('clear-btn').addEventListener('click', clearCode);
    
    // Controles del canvas
    document.getElementById('rotate-btn').addEventListener('click', toggleRotation);
    document.getElementById('zoom-btn').addEventListener('click', toggleZoom);
    document.getElementById('reset-camera-btn').addEventListener('click', resetCamera);
    
    // Misiones
    document.getElementById('next-mission').addEventListener('click', nextMission);
    document.getElementById('hint-btn').addEventListener('click', showHint);
    
    // Controles generales
    document.getElementById('reset-btn').addEventListener('click', resetAll);
    document.getElementById('fullscreen-btn').addEventListener('click', toggleFullscreen);
    
    // Panel de información
    document.getElementById('close-info').addEventListener('click', () => {
        document.getElementById('info-panel').classList.remove('active');
    });

    // Tags y propiedades clickeables
    document.querySelectorAll('.tag, .property').forEach(element => {
        element.addEventListener('click', () => {
            insertIntoEditor(element.textContent);
        });
    });
}

// ===== THREE.JS SETUP =====
function initializeThreeJS() {
    const canvas = document.getElementById('three-canvas');
    
    // Escena
    scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x0a0a0a, 10, 100);
    
    // Cámara
    camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    camera.position.set(0, 5, 10);
    
    // Renderer
    renderer = new THREE.WebGLRenderer({ 
        canvas: canvas, 
        antialias: true,
        alpha: true 
    });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputEncoding = THREE.sRGBEncoding;
    
    // Controles de órbita
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxDistance = 50;
    controls.minDistance = 2;
    
    // Iluminación
    setupLighting();
    
    // Suelo
    createGround();
    
    // Iniciar render loop
    animate();
    
    // Responsive
    window.addEventListener('resize', onWindowResize);
}

function setupLighting() {
    // Luz ambiental
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
    scene.add(ambientLight);
    
    // Luz direccional principal
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    scene.add(directionalLight);
    
    // Luces de color para efectos neón
    const blueLight = new THREE.PointLight(0x00d4ff, 0.5, 20);
    blueLight.position.set(-5, 5, 0);
    scene.add(blueLight);
    
    const greenLight = new THREE.PointLight(0x00ff88, 0.5, 20);
    greenLight.position.set(5, 5, 0);
    scene.add(greenLight);
    
    const purpleLight = new THREE.PointLight(0x8b5cf6, 0.3, 15);
    purpleLight.position.set(0, 8, -5);
    scene.add(purpleLight);
}

function createGround() {
    const groundGeometry = new THREE.PlaneGeometry(50, 50);
    const groundMaterial = new THREE.MeshLambertMaterial({ 
        color: 0x1a1a1a,
        transparent: true,
        opacity: 0.8
    });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);
    
    // Grid helper
    const gridHelper = new THREE.GridHelper(50, 50, 0x333333, 0x222222);
    gridHelper.position.y = 0.01;
    scene.add(gridHelper);
}

// ===== SISTEMA DE PARTÍCULAS =====
function createParticles() {
    const particleCount = 100;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
        particlePositions[i * 3] = (Math.random() - 0.5) * 100;
        particlePositions[i * 3 + 1] = Math.random() * 50;
        particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 100;
        
        const color = new THREE.Color();
        color.setHSL(Math.random(), 0.8, 0.6);
        particleColors[i * 3] = color.r;
        particleColors[i * 3 + 1] = color.g;
        particleColors[i * 3 + 2] = color.b;
    }
    
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));
    
    const particleMaterial = new THREE.PointsMaterial({
        size: 0.5,
        vertexColors: true,
        transparent: true,
        opacity: 0.6
    });
    
    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSystem);
    particles.push(particleSystem);
}

// ===== PARSER DE HTML Y CSS =====
function parseAndRender() {
    const htmlCode = document.getElementById('html-editor').textContent;
    const cssCode = document.getElementById('css-editor').textContent;
    
    // Limpiar escena anterior
    clearScene();
    
    try {
        // Parsear CSS
        cssStyles = parseCSS(cssCode);
        
        // Parsear HTML y crear elementos 3D
        const elements = parseHTML(htmlCode);
        create3DElements(elements);
        
        // Verificar objetivos
        checkObjectives();
        
    } catch (error) {
        console.error('Error parsing code:', error);
        showNotification('Error en el código: ' + error.message, 'error');
    }
}

function parseCSS(cssCode) {
    const styles = {};
    const cssRules = cssCode.match(/\.[\w-]+\s*\{[^}]*\}/g) || [];
    
    cssRules.forEach(rule => {
        const className = rule.match(/\.([\w-]+)/)[1];
        const properties = {};
        
        const propertyMatches = rule.match(/[\w-]+:\s*[^;]+/g) || [];
        propertyMatches.forEach(prop => {
            const [name, value] = prop.split(':').map(s => s.trim());
            properties[name] = value;
        });
        
        styles[className] = properties;
    });
    
    return styles;
}

function parseHTML(htmlCode) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlCode, 'text/html');
    const elements = [];
    
    function traverse(node, parent = null) {
        if (node.nodeType === Node.ELEMENT_NODE) {
            const element = {
                tagName: node.tagName.toLowerCase(),
                textContent: node.textContent.trim(),
                className: node.className,
                children: [],
                parent: parent
            };
            
            if (parent) {
                parent.children.push(element);
            } else {
                elements.push(element);
            }
            
            Array.from(node.children).forEach(child => traverse(child, element));
        }
    }
    
    traverse(doc.body);
    return elements;
}

// ===== CREACIÓN DE ELEMENTOS 3D =====
function create3DElements(elements) {
    let yOffset = 0;
    
    elements.forEach((element, index) => {
        const mesh = createElementMesh(element, yOffset);
        if (mesh) {
            scene.add(mesh);
            htmlElements.push(mesh);
            yOffset += 2;
        }
    });
    
    // Animar entrada de elementos
    animateElementsIn();
}

function createElementMesh(element, yOffset) {
    let geometry, material, mesh;
    
    switch (element.tagName) {
        case 'h1':
        case 'h2':
        case 'h3':
            geometry = new THREE.BoxGeometry(3, 1, 0.2);
            material = new THREE.MeshPhongMaterial({ 
                color: 0x00ff88,
                transparent: true,
                opacity: 0.9
            });
            mesh = new THREE.Mesh(geometry, material);
            mesh.position.set(0, yOffset + 2, 0);
            
            // Agregar texto 3D
            addText3D(element.textContent, mesh.position.clone().add(new THREE.Vector3(0, 0, 0.2)));
            break;
            
        case 'div':
            const size = element.children.length > 0 ? 2 : 1;
            geometry = new THREE.BoxGeometry(size, size, 0.3);
            material = new THREE.MeshPhongMaterial({ 
                color: 0x333333,
                transparent: true,
                opacity: 0.8
            });
            mesh = new THREE.Mesh(geometry, material);
            mesh.position.set(0, yOffset, 0);
            break;
            
        case 'p':
            geometry = new THREE.BoxGeometry(2, 0.5, 0.1);
            material = new THREE.MeshPhongMaterial({ 
                color: 0x666666,
                transparent: true,
                opacity: 0.7
            });
            mesh = new THREE.Mesh(geometry, material);
            mesh.position.set(0, yOffset, 0);
            break;
            
        case 'span':
            geometry = new THREE.SphereGeometry(0.3, 8, 8);
            material = new THREE.MeshPhongMaterial({ 
                color: 0x8b5cf6,
                transparent: true,
                opacity: 0.8
            });
            mesh = new THREE.Mesh(geometry, material);
            mesh.position.set(0, yOffset, 0);
            break;
    }
    
    if (mesh) {
        // Aplicar estilos CSS
        applyCSSStyles(mesh, element);
        
        // Configurar sombras
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        
        // Agregar propiedades personalizadas
        mesh.userData = {
            element: element,
            originalPosition: mesh.position.clone()
        };
    }
    
    return mesh;
}

function addText3D(text, position) {
    const loader = new THREE.FontLoader();
    // Por simplicidad, usamos un texto 2D renderizado en canvas
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = 512;
    canvas.height = 128;
    
    context.fillStyle = '#00ff88';
    context.font = '48px Arial';
    context.textAlign = 'center';
    context.fillText(text, canvas.width / 2, canvas.height / 2);
    
    const texture = new THREE.CanvasTexture(canvas);
    const material = new THREE.MeshBasicMaterial({ 
        map: texture,
        transparent: true,
        side: THREE.DoubleSide
    });
    
    const geometry = new THREE.PlaneGeometry(4, 1);
    const textMesh = new THREE.Mesh(geometry, material);
    textMesh.position.copy(position);
    scene.add(textMesh);
}

function applyCSSStyles(mesh, element) {
    if (element.className && cssStyles[element.className]) {
        const styles = cssStyles[element.className];
        
        if (styles['background-color']) {
            const color = parseColor(styles['background-color']);
            mesh.material.color.setHex(color);
        }
        
        if (styles['border-radius']) {
            const radius = parseFloat(styles['border-radius']) || 0;
            if (radius > 0) {
                mesh.geometry = new THREE.SphereGeometry(0.5, 16, 16);
            }
        }
        
        if (styles['box-shadow']) {
            // Agregar efecto de sombra neón
            const glowColor = parseColor(styles['box-shadow']) || 0x00ff88;
            const glowMaterial = new THREE.MeshBasicMaterial({
                color: glowColor,
                transparent: true,
                opacity: 0.3
            });
            const glowMesh = mesh.clone();
            glowMesh.material = glowMaterial;
            glowMesh.scale.multiplyScalar(1.2);
            scene.add(glowMesh);
        }
    }
}

function parseColor(colorString) {
    // Convertir colores CSS a hexadecimal
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    context.fillStyle = colorString;
    const color = context.fillStyle;
    
    if (color.startsWith('#')) {
        return parseInt(color.slice(1), 16);
    } else if (color.startsWith('rgb')) {
        const rgb = color.match(/\d+/g);
        return (parseInt(rgb[0]) << 16) + (parseInt(rgb[1]) << 8) + parseInt(rgb[2]);
    }
    
    return 0xffffff;
}

// ===== ANIMACIONES =====
function animateElementsIn() {
    htmlElements.forEach((mesh, index) => {
        const originalPosition = mesh.userData.originalPosition;
        mesh.position.y = originalPosition.y - 10;
        mesh.scale.set(0, 0, 0);
        
        gsap.to(mesh.position, {
            y: originalPosition.y,
            duration: 1,
            delay: index * 0.2,
            ease: "back.out(1.7)"
        });
        
        gsap.to(mesh.scale, {
            x: 1,
            y: 1,
            z: 1,
            duration: 1,
            delay: index * 0.2,
            ease: "back.out(1.7)"
        });
    });
}

function animate() {
    requestAnimationFrame(animate);
    
    // Animar partículas
    particles.forEach(particleSystem => {
        particleSystem.rotation.y += 0.001;
        particleSystem.rotation.x += 0.0005;
    });
    
    // Animar elementos HTML
    htmlElements.forEach(mesh => {
        mesh.rotation.y += 0.005;
    });
    
    controls.update();
    renderer.render(scene, camera);
}

// ===== SISTEMA DE MISIONES =====
function loadMission(index) {
    if (index >= missions.length) {
        showNotification('¡Felicidades! Has completado todas las misiones.', 'success');
        return;
    }
    
    currentMission = index;
    const mission = missions[index];
    
    // Actualizar UI
    document.getElementById('mission-title').textContent = mission.title;
    document.getElementById('mission-description').textContent = mission.description;
    document.getElementById('mission-hint').innerHTML = mission.hint;
    
    // Actualizar objetivos
    const objectivesList = document.getElementById('objectives-list');
    objectivesList.innerHTML = '';
    mission.objectives.forEach(objective => {
        const li = document.createElement('li');
        li.className = 'objective';
        li.dataset.objective = objective.id;
        li.textContent = objective.text;
        objectivesList.appendChild(li);
    });
    
    // Cargar código de ejemplo
    document.getElementById('html-editor').textContent = mission.htmlTemplate;
    document.getElementById('css-editor').textContent = mission.cssTemplate;
    
    // Renderizar
    parseAndRender();
    
    // Actualizar progreso
    updateProgress();
}

function checkObjectives() {
    const mission = missions[currentMission];
    const htmlCode = document.getElementById('html-editor').textContent;
    const cssCode = document.getElementById('css-editor').textContent;
    
    let completedCount = 0;
    
    mission.objectives.forEach(objective => {
        let completed = false;
        
        switch (objective.id) {
            case 'create-h1':
                completed = htmlCode.includes('<h1>');
                break;
            case 'create-div':
                completed = htmlCode.includes('<div');
                break;
            case 'create-p':
                completed = htmlCode.includes('<p>');
                break;
            case 'change-color':
                completed = cssCode.includes('color:') || cssCode.includes('background-color:');
                break;
            case 'add-border':
                completed = cssCode.includes('border-radius:');
                break;
            case 'add-shadow':
                completed = cssCode.includes('box-shadow:');
                break;
            case 'use-flex':
                completed = cssCode.includes('display: flex');
                break;
            case 'justify-center':
                completed = cssCode.includes('justify-content: center');
                break;
            case 'space-between':
                completed = cssCode.includes('justify-content: space-between') || 
                           cssCode.includes('justify-content: space-around');
                break;
            case 'use-grid':
                completed = cssCode.includes('display: grid');
                break;
            case 'grid-columns':
                completed = cssCode.includes('grid-template-columns');
                break;
            case 'grid-gap':
                completed = cssCode.includes('gap:');
                break;
        }
        
        const objectiveElement = document.querySelector(`[data-objective="${objective.id}"]`);
        if (objectiveElement) {
            if (completed && !objective.completed) {
                objectiveElement.classList.add('completed');
                objective.completed = true;
                completedCount++;
                showNotification(`¡Objetivo completado: ${objective.text}!`, 'success');
            } else if (!completed && objective.completed) {
                objectiveElement.classList.remove('completed');
                objective.completed = false;
                completedCount--;
            }
        }
    });
    
    // Verificar si la misión está completa
    if (completedCount === mission.objectives.length) {
        setTimeout(() => {
            showMissionComplete();
        }, 1000);
    }
    
    updateProgress();
}

function updateProgress() {
    const mission = missions[currentMission];
    const completedCount = mission.objectives.filter(obj => obj.completed).length;
    const progress = (completedCount / mission.objectives.length) * 100;
    
    document.getElementById('mission-progress').style.width = `${progress}%`;
}

function showMissionComplete() {
    const overlay = document.querySelector('.canvas-overlay');
    const successMessage = document.getElementById('success-message');
    
    overlay.classList.add('active');
    successMessage.style.display = 'block';
    
    // Efecto de partículas de celebración
    createCelebrationParticles();
    
    setTimeout(() => {
        overlay.classList.remove('active');
        successMessage.style.display = 'none';
    }, 3000);
}

function createCelebrationParticles() {
    for (let i = 0; i < 50; i++) {
        const geometry = new THREE.SphereGeometry(0.1, 8, 8);
        const material = new THREE.MeshBasicMaterial({
            color: new THREE.Color().setHSL(Math.random(), 0.8, 0.6)
        });
        const particle = new THREE.Mesh(geometry, material);
        
        particle.position.set(
            (Math.random() - 0.5) * 10,
            Math.random() * 5,
            (Math.random() - 0.5) * 10
        );
        
        scene.add(particle);
        
        gsap.to(particle.position, {
            y: particle.position.y + 10,
            x: particle.position.x + (Math.random() - 0.5) * 5,
            z: particle.position.z + (Math.random() - 0.5) * 5,
            duration: 2,
            ease: "power2.out"
        });
        
        gsap.to(particle.material, {
            opacity: 0,
            duration: 2,
            ease: "power2.out",
            onComplete: () => {
                scene.remove(particle);
            }
        });
    }
}

// ===== FUNCIONES UTILITARIAS =====
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function showNotification(message, type = 'info') {
    const container = document.getElementById('notification-container');
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    container.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            container.removeChild(notification);
        }, 300);
    }, 3000);
}

function clearScene() {
    htmlElements.forEach(mesh => {
        scene.remove(mesh);
    });
    htmlElements = [];
}

function switchTab(tabName) {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
    
    document.querySelectorAll('.code-editor').forEach(editor => {
        editor.classList.add('hidden');
    });
    document.getElementById(`${tabName}-editor`).classList.remove('hidden');
}

function switchModule(moduleName) {
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-module="${moduleName}"]`).classList.add('active');
    
    // Aquí podrías cargar diferentes misiones según el módulo
    const moduleIndex = ['html', 'css', 'flexbox', 'grid'].indexOf(moduleName);
    if (moduleIndex >= 0) {
        loadMission(moduleIndex);
    }
}

function formatCode() {
    // Implementar formateo de código
    showNotification('Función de formateo en desarrollo', 'info');
}

function clearCode() {
    document.getElementById('html-editor').textContent = '';
    document.getElementById('css-editor').textContent = '';
    clearScene();
}

function toggleRotation() {
    isAnimating = !isAnimating;
    showNotification(isAnimating ? 'Rotación activada' : 'Rotación desactivada', 'info');
}

function toggleZoom() {
    controls.enableZoom = !controls.enableZoom;
    showNotification(controls.enableZoom ? 'Zoom activado' : 'Zoom desactivado', 'info');
}

function resetCamera() {
    camera.position.set(0, 5, 10);
    controls.reset();
    showNotification('Cámara reseteada', 'info');
}

function nextMission() {
    loadMission(currentMission + 1);
}

function showHint() {
    const mission = missions[currentMission];
    showNotification(mission.hint, 'info');
}

function resetAll() {
    loadMission(0);
    showNotification('Todo reseteado', 'info');
}

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}

function insertIntoEditor(text) {
    const activeEditor = document.querySelector('.code-editor:not(.hidden)');
    if (activeEditor) {
        const selection = window.getSelection();
        const range = selection.getRangeAt(0);
        range.deleteContents();
        range.insertNode(document.createTextNode(text));
        activeEditor.focus();
    }
}

function onWindowResize() {
    const canvas = document.getElementById('three-canvas');
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
}

// ===== THREE.JS ORBIT CONTROLS (si no está disponible) =====
if (typeof THREE.OrbitControls === 'undefined') {
    // Implementación básica de controles de órbita
    class OrbitControls {
        constructor(camera, domElement) {
            this.camera = camera;
            this.domElement = domElement;
            this.enableDamping = true;
            this.dampingFactor = 0.05;
            this.maxDistance = 50;
            this.minDistance = 2;
            
            this.isMouseDown = false;
            this.mouseX = 0;
            this.mouseY = 0;
            
            this.setupEventListeners();
        }
        
        setupEventListeners() {
            this.domElement.addEventListener('mousedown', this.onMouseDown.bind(this));
            this.domElement.addEventListener('mousemove', this.onMouseMove.bind(this));
            this.domElement.addEventListener('mouseup', this.onMouseUp.bind(this));
            this.domElement.addEventListener('wheel', this.onMouseWheel.bind(this));
        }
        
        onMouseDown(event) {
            this.isMouseDown = true;
            this.mouseX = event.clientX;
            this.mouseY = event.clientY;
        }
        
        onMouseMove(event) {
            if (!this.isMouseDown) return;
            
            const deltaX = event.clientX - this.mouseX;
            const deltaY = event.clientY - this.mouseY;
            
            this.camera.position.x += deltaX * 0.01;
            this.camera.position.y -= deltaY * 0.01;
            
            this.mouseX = event.clientX;
            this.mouseY = event.clientY;
        }
        
        onMouseUp() {
            this.isMouseDown = false;
        }
        
        onMouseWheel(event) {
            const distance = this.camera.position.length();
            const newDistance = Math.max(this.minDistance, Math.min(this.maxDistance, distance - event.deltaY * 0.01));
            this.camera.position.normalize().multiplyScalar(newDistance);
        }
        
        update() {
            // Implementación básica de damping
        }
        
        reset() {
            this.camera.position.set(0, 5, 10);
        }
    }
    
    THREE.OrbitControls = OrbitControls;
}
