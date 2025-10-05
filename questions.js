// Base de datos de preguntas para MF0953_2 - Montaje de Equipos Microinformáticos
const questionsDatabase = [
    {
        id: 1,
        category: "Componentes Básicos",
        question: "¿Cuál es la función principal de la placa base en un sistema microinformático?",
        options: [
            "Almacenar datos de forma permanente",
            "Conectar y facilitar la comunicación entre todos los componentes",
            "Procesar todas las operaciones matemáticas",
            "Sumistrar energía al sistema",
            "Refrigerar los componentes"
        ],
        correct: 1,
        explanation: "La placa base actúa como el 'sistema nervioso' del ordenador, conectando todos los componentes y permitiendo su comunicación. Contiene el bus de datos, bus de direcciones y bus de control que facilitan el intercambio de información entre CPU, memoria, periféricos y otros componentes.",
        source: "https://www.pcbasic.com/es/blog/what_does_a_motherboard_do.html"
    },
    {
        id: 2,
        category: "Componentes Básicos",
        question: "¿Qué tipo de memoria se utiliza principalmente para el almacenamiento temporal de datos en un PC?",
        options: [
            "Memoria ROM",
            "Memoria RAM",
            "Memoria Cache",
            "Memoria virtual",
            "Memoria flash"
        ],
        correct: 1,
        explanation: "La RAM (Random Access Memory) es la memoria principal del sistema que se utiliza para almacenar temporalmente datos y programas que están en uso. Es volátil, lo que significa que pierde su contenido cuando se apaga el equipo, pero ofrece acceso rápido para el procesador.",
        source: "https://hardzone.es/tutoriales/componentes/puertos-placa-base/"
    },
    {
        id: 3,
        category: "Fuentes de Alimentación",
        question: "¿Cuál es la diferencia principal entre una fuente de alimentación AT y ATX?",
        options: [
            "La ATX consume más energía",
            "La ATX permite apagado por software",
            "La AT es más moderna",
            "No hay diferencias significativas",
            "La AT solo funciona con procesadores Intel"
        ],
        correct: 1,
        explanation: "La principal innovación de las fuentes ATX es el pulsador conectado a la placa base que permite el apagado por software. Además, las fuentes ATX siempre están activas (standby) y proporcionan voltaje +3.3V adicional junto con el conector ATX de 20/24 pines.",
        source: "https://grupoindustronic.com/potencia-tu-pc-guia-sobre-fuentes-de-poder-para-pc/"
    },
    {
        id: 4,
        category: "Fuentes de Alimentación",
        question: "¿Qué certificación indica que una fuente de alimentación tiene alta eficiencia energética?",
        options: [
            "ISO 9001",
            "80 Plus",
            "Energy Star",
            "CE Marking",
            "RoHS"
        ],
        correct: 1,
        explanation: "La certificación 80 Plus indica que la fuente de alimentación mantiene al menos un 80% de eficiencia energética en diferentes cargas de trabajo. Esto significa que desperdicia menos energía en forma de calor, reduciendo el consumo eléctrico y mejorando la estabilidad del sistema.",
        source: "https://www.coolmod.com/blog/categorias/componentes/tipos-de-fuente-de-alimentacion-para-pc/"
    },
    {
        id: 5,
        category: "Sistemas de Refrigeración",
        question: "¿Cuál es la ventaja principal de la refrigeración líquida sobre la refrigeración por aire?",
        options: [
            "Menor costo",
            "Mayor eficiencia térmica",
            "Menor mantenimiento",
            "Instalación más simple",
            "Menor peso"
        ],
        correct: 1,
        explanation: "La refrigeración líquida ofrece mayor eficiencia térmica que la refrigeración por aire porque el líquido refrigerante tiene mayor capacidad calorífica que el aire, permitiendo transferir más calor de manera más eficiente. Es ideal para sistemas de alto rendimiento y overclocking.",
        source: "https://www.eniun.com/sistemas-de-refrigeracion-ordenador/"
    },
    {
        id: 6,
        category: "Sistemas de Refrigeración",
        question: "¿Qué tipo de refrigeración es más adecuada para un PC de oficina básico?",
        options: [
            "Refrigeración líquida custom",
            "Refrigeración por aire",
            "Refrigeración por nitrógeno",
            "Refrigeración pasiva",
            "Refrigeración híbrida"
        ],
        correct: 1,
        explanation: "La refrigeración por aire es más que suficiente para un PC de oficina básico. Utiliza ventiladores y disipadores de calor para mantener los componentes a temperaturas seguras. Es económica, confiable y requiere poco mantenimiento, siendo ideal para sistemas de bajo a medio rendimiento.",
        source: "https://clonesyperifericos.com/tipos-de-refrigeracion-para-usar-pc-gamer-para-que-sirven-y-cuando-usarlas/"
    },
    {
        id: 7,
        category: "Componentes Básicos",
        question: "¿Cuál es la función del chipset en una placa base?",
        options: [
            "Procesar gráficos",
            "Gestionar la comunicación entre componentes",
            "Almacenar la BIOS",
            "Regular la temperatura",
            "Sumistrar energía"
        ],
        correct: 1,
        explanation: "El chipset actúa como el controlador de tráfico de la placa base, gestionando la transmisión de datos entre la CPU, la memoria y los periféricos. En las placas modernas, integra las funciones de los antiguos puentes norte y sur, proporcionando un control más eficiente.",
        source: "https://www.pcbasic.com/es/blog/what_does_a_motherboard_do.html"
    },
    {
        id: 8,
        category: "Componentes Básicos",
        question: "¿Qué tipo de zócalo CPU utilizan los procesadores Intel modernos?",
        options: [
            "PGA",
            "LGA",
            "BGA",
            "PGA-ZIF",
            "Socket 7"
        ],
        correct: 1,
        explanation: "Los procesadores Intel modernos utilizan zócalos LGA (Land Grid Array), donde los pines están en la placa base en lugar del procesador. Esto proporciona una mejor conexión eléctrica y permite mayor densidad de contactos, mejorando el rendimiento térmico y eléctrico.",
        source: "https://hardzone.es/tutoriales/componentes/puertos-placa-base/"
    },
    {
        id: 9,
        category: "Componentes Básicos",
        question: "¿Cuál es la diferencia entre memoria DDR4 y DDR5?",
        options: [
            "DDR5 consume más energía",
            "DDR5 tiene menor ancho de banda",
            "DDR5 permite mayor capacidad y velocidad",
            "No hay diferencias significativas",
            "DDR4 es más moderna"
        ],
        correct: 2,
        explanation: "DDR5 ofrece mayor ancho de banda, mayor capacidad máxima por módulo (hasta 128GB vs 32GB de DDR4), y mejor eficiencia energética con menor voltaje (1.1V vs 1.2V). También incluye características como la gestión de alimentación integrada en el módulo.",
        source: "https://urbantecno.com/tutoriales/cuales-son-los-conectores-de-la-placa-base-que-tipos-hay-y-para-que-sirven"
    },
    {
        id: 10,
        category: "Conectores y Puertos",
        question: "¿Para qué sirve el conector EPS en una placa base?",
        options: [
            "Conectar dispositivos SATA",
            "Alimentar el procesador con 12V",
            "Conectar ventiladores",
            "Instalar tarjetas de expansión",
            "Conectar memoria RAM"
        ],
        correct: 1,
        explanation: "El conector EPS suministra alimentación directa de 12V al procesador. Se introdujo con los primeros Pentium 4 que requerían más potencia. Puede tener 4, 8 o más pines dependiendo de los requisitos de alimentación del CPU y la placa base.",
        source: "https://hardzone.es/tutoriales/componentes/puertos-placa-base/"
    },
    {
        id: 11,
        category: "Conectores y Puertos",
        question: "¿Cuál es la ventaja principal de los conectores USB 3.0 sobre USB 2.0?",
        options: [
            "Menor consumo de energía",
            "Mayor velocidad de transferencia",
            "Tamaño más pequeño",
            "Mayor compatibilidad",
            "Menor latencia"
        ],
        correct: 1,
        explanation: "USB 3.0 ofrece una velocidad teórica de hasta 5 Gbps, mientras que USB 2.0 solo alcanza 480 Mbps. Esto representa aproximadamente 10 veces más velocidad, permitiendo transferencias de archivos más rápidas y mejor rendimiento con dispositivos de almacenamiento.",
        source: "https://urbantecno.com/tutoriales/cuales-son-los-conectores-de-la-placa-base-que-tipos-hay-y-para-que-sirven"
    },
    {
        id: 12,
        category: "Almacenamiento",
        question: "¿Qué interfaz ofrece mejor rendimiento para discos duros modernos?",
        options: [
            "IDE",
            "SATA III",
            "SATA II",
            "SCSI",
            "Parallel ATA"
        ],
        correct: 1,
        explanation: "SATA III ofrece una velocidad máxima de 6 Gbps, el doble que SATA II (3 Gbps). Es la interfaz estándar para discos duros y SSDs modernos, proporcionando suficiente ancho de banda para aprovechar las velocidades de lectura/escritura de los dispositivos actuales.",
        source: "https://www.pcbasic.com/es/blog/what_does_a_motherboard_do.html"
    },
    {
        id: 13,
        category: "Almacenamiento",
        question: "¿Cuál es la principal ventaja de los conectores M.2 sobre SATA?",
        options: [
            "Menor costo",
            "Mayor compatibilidad",
            "Velocidades de transferencia más altas",
            "Instalación más simple",
            "Menor consumo de energía"
        ],
        correct: 2,
        explanation: "Los conectores M.2 pueden utilizar el protocolo NVMe sobre PCIe, ofreciendo velocidades mucho más altas que SATA. Mientras SATA III se limita a 6 Gbps, M.2 NVMe puede alcanzar velocidades de hasta 32 Gbps o más, dependiendo del número de líneas PCIe utilizadas.",
        source: "https://urbantecno.com/tutoriales/cuales-son-los-conectores-de-la-placa-base-que-tipos-hay-y-para-que-sirven"
    },
    {
        id: 14,
        category: "Tarjetas de Expansión",
        question: "¿Qué tipo de ranura se utiliza actualmente para tarjetas gráficas modernas?",
        options: [
            "PCI",
            "AGP",
            "PCIe x16",
            "ISA",
            "PCI-X"
        ],
        correct: 2,
        explanation: "PCIe x16 (PCI Express x16) es la ranura estándar actual para tarjetas gráficas, ofreciendo el mayor ancho de banda disponible en la placa base. Las versiones modernas como PCIe 4.0 y 5.0 ofrecen velocidades de hasta 64 GB/s y 128 GB/s respectivamente.",
        source: "https://hardzone.es/tutoriales/componentes/puertos-placa-base/"
    },
    {
        id: 15,
        category: "Tarjetas de Expansión",
        question: "¿Cuál es la diferencia entre PCIe x1 y PCIe x16?",
        options: [
            "El número de pines",
            "La velocidad del reloj",
            "El número de líneas de datos",
            "La compatibilidad",
            "El voltaje de operación"
        ],
        correct: 2,
        explanation: "La diferencia principal está en el número de líneas de datos (lanes). PCIe x1 tiene 1 línea de datos, mientras que PCIe x16 tiene 16 líneas, proporcionando 16 veces más ancho de banda. Esto hace que PCIe x16 sea ideal para dispositivos de alto rendimiento como tarjetas gráficas.",
        source: "https://urbantecno.com/tutoriales/cuales-son-los-conectores-de-la-placa-base-que-tipos-hay-y-para-que-sirven"
    },
    {
        id: 16,
        category: "Sistemas de Refrigeración",
        question: "¿Qué ventaja ofrece un ventilador PWM de 4 pines sobre uno de 3 pines?",
        options: [
            "Mayor velocidad máxima",
            "Control de velocidad variable",
            "Menor ruido",
            "Mayor durabilidad",
            "Menor consumo"
        ],
        correct: 1,
        explanation: "Los ventiladores PWM (Pulse Width Modulation) de 4 pines permiten el control variable de la velocidad según las necesidades térmicas del sistema. El pin adicional recibe señales PWM que permiten ajustar la velocidad del ventilador dinámicamente, optimizando el equilibrio entre refrigeración y ruido.",
        source: "https://hardzone.es/tutoriales/componentes/puertos-placa-base/"
    },
    {
        id: 17,
        category: "Sistemas de Refrigeración",
        question: "¿Cuál es la duración promedio de una refrigeración líquida AIO?",
        options: [
            "2-3 años",
            "5 años",
            "10 años",
            "15 años",
            "Ilimitada"
        ],
        correct: 1,
        explanation: "Las refrigeraciones líquidas AIO (All-in-One) tienen una vida útil promedio de aproximadamente 5 años. Después de este período, el líquido refrigerante puede evaporarse o formar sedimento que puede obstruir las mangueras o dañar la bomba, reduciendo la eficiencia térmica.",
        source: "https://clonesyperifericos.com/tipos-de-refrigeracion-para-usar-pc-gamer-para-que-sirven-y-cuando-usarlas/"
    },
    {
        id: 18,
        category: "Fuentes de Alimentación",
        question: "¿Qué tamaño tiene una fuente de alimentación ATX estándar?",
        options: [
            "125x63.5x100 mm",
            "150x86x140 mm",
            "85x65x175 mm",
            "100x50x120 mm",
            "200x100x150 mm"
        ],
        correct: 1,
        explanation: "Una fuente de alimentación ATX estándar tiene dimensiones de 150 mm de ancho, 86 mm de alto y aproximadamente 140 mm de profundidad. Estas dimensiones son estándar para garantizar la compatibilidad con la mayoría de las cajas de PC del mercado.",
        source: "https://www.coolmod.com/blog/categorias/componentes/tipos-de-fuente-de-alimentacion-para-pc/"
    },
    {
        id: 19,
        category: "Fuentes de Alimentación",
        question: "¿Qué conector suministra energía principal a la placa base en sistemas ATX modernos?",
        options: [
            "Molex",
            "ATX de 24 pines",
            "SATA Power",
            "EPS de 4 pines",
            "PCIe de 8 pines"
        ],
        correct: 1,
        explanation: "El conector ATX de 24 pines suministra la alimentación principal a la placa base. Proporciona voltajes de +3.3V, +5V, +12V, -12V y +5VSB (standby). Las versiones anteriores usaban 20 pines, pero las modernas de 24 pines ofrecen más capacidad de alimentación.",
        source: "https://grupoindustronic.com/potencia-tu-pc-guia-sobre-fuentes-de-poder-para-pc/"
    },
    {
        id: 20,
        category: "Componentes Básicos",
        question: "¿Cuál es la función de la batería CMOS en una placa base?",
        options: [
            "Alimentar el sistema principal",
            "Mantener la configuración BIOS/UEFI",
            "Refrigerar el chipset",
            "Proteger contra sobretensiones",
            "Almacenar el sistema operativo"
        ],
        correct: 1,
        explanation: "La batería CMOS mantiene la alimentación a la memoria que almacena la configuración BIOS/UEFI, incluyendo fecha y hora, configuración del hardware y parámetros del sistema. Esto permite que la configuración se conserve incluso cuando el PC está apagado y desconectado.",
        source: "https://www.jvs-informatica.com/blog/placa-base-funcion/"
    }
];

// Función para obtener todas las preguntas
function getAllQuestions() {
    return questionsDatabase;
}

// Función para obtener preguntas por categoría
function getQuestionsByCategory(category) {
    return questionsDatabase.filter(q => q.category === category);
}

// Función para obtener una pregunta aleatoria
function getRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * questionsDatabase.length);
    return questionsDatabase[randomIndex];
}

// Función para mezclar un array (útil para randomizar preguntas)
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Función para generar un test de X preguntas aleatorias
function generateRandomTest(numQuestions) {
    if (numQuestions > questionsDatabase.length) {
        numQuestions = questionsDatabase.length;
    }
    return shuffleArray(questionsDatabase).slice(0, numQuestions);
}

// Exportar funciones para uso en la aplicación
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        questionsDatabase,
        getAllQuestions,
        getQuestionsByCategory,
        getRandomQuestion,
        shuffleArray,
        generateRandomTest
    };
}