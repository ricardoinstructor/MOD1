// Base de datos de preguntas para MF0953_2 - Montaje de Equipos Microinformáticos
const questionsDatabase = [
  {
    "id": 1,
    "category": "USB y Conectores",
    "question": "¿Cuál es la función principal de un conector USB?",
    "options": [
      "Transmitir señales de radio.",
      "Conectar dispositivos para la transferencia de datos y energía.",
      "Reproducir audio en altavoces.",
      "Capturar imágenes con una cámara."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Conectar dispositivos para la transferencia de datos y energía.\". USB es un estándar de comunicación que permite la transferencia de datos y energía entre dispositivos.",
    "source": "https://es.wikipedia.org/wiki/Universal_Serial_Bus"
  },
  {
    "id": 2,
    "category": "USB y Conectores",
    "question": "¿Cuál es la velocidad de transferencia de datos del estándar USB 2.0?",
    "options": [
      "480 Mbps.",
      "5 Gbps.",
      "12 Mbps.",
      "1 Gbps."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"480 Mbps.\". USB 2.0 tiene una velocidad máxima de transferencia de 480 Mbps.",
    "source": "https://es.wikipedia.org/wiki/USB_2.0"
  },
  {
    "id": 3,
    "category": "Componentes Básicos",
    "question": "¿Qué tipo de conector se utiliza comúnmente para cargar dispositivos móviles, como smartphones y tabletas?",
    "options": [
      "USB Type-A.",
      "USB Type-B.",
      "USB Micro-B.",
      "USB-C."
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"USB-C.\". Aunque antes se usaba USB Micro-B, actualmente USB-C es el estándar para cargar dispositivos móviles.",
    "source": "https://es.wikipedia.org/wiki/USB-C"
  },
  {
    "id": 4,
    "category": "USB y Conectores",
    "question": "¿Cuál es la principal ventaja del conector USB-C en comparación con otros conectores USB?",
    "options": [
      "Es más pequeño y reversible.",
      "Tiene mayor velocidad de transferencia.",
      "Solo se utiliza en dispositivos Apple.",
      "No requiere energía para la transferencia de datos."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Es más pequeño y reversible.\". USB-C es reversible (se puede conectar en cualquier orientación) y más compacto que otros conectores USB.",
    "source": "https://es.wikipedia.org/wiki/USB-C"
  },
  {
    "id": 5,
    "category": "USB y Conectores",
    "question": "¿Cuál de los siguientes dispositivos suele utilizar un conector USB Mini-B?",
    "options": [
      "Impresoras.",
      "Cámaras digitales.",
      "Ratones.",
      "Teclados."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Cámaras digitales.\". Las cámaras digitales antiguas solían usar USB Mini-B.",
    "source": "https://es.wikipedia.org/wiki/USB#Mini"
  },
  {
    "id": 6,
    "category": "USB y Conectores",
    "question": "¿Qué significa la sigla \"USB\" en inglés?",
    "options": [
      "Universal Serial Bus.",
      "United States of Bluetooth.",
      "Ultra Speed Connector.",
      "Underlying System Backup."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Universal Serial Bus.\". USB es el acrónimo de \"Universal Serial Bus\".",
    "source": "https://es.wikipedia.org/wiki/Universal_Serial_Bus"
  },
  {
    "id": 7,
    "category": "USB y Conectores",
    "question": "¿Qué versión de USB introdujo el conector USB Type-C por primera vez?",
    "options": [
      "USB 1.1.",
      "USB 2.0.",
      "USB 3.0.",
      "USB 3.1."
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"USB 3.1.\". USB Type-C se introdujo con USB 3.1.",
    "source": "https://es.wikipedia.org/wiki/USB-C"
  },
  {
    "id": 8,
    "category": "USB y Conectores",
    "question": "¿Cuál es la función principal del protocolo USB Power Delivery (USB PD)?",
    "options": [
      "Mejorar la velocidad de transferencia de datos.",
      "Proporcionar energía para la carga rápida de dispositivos.",
      "Conectar periféricos de audio.",
      "Facilitar la conexión inalámbrica."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Proporcionar energía para la carga rápida de dispositivos.\". USB PD permite la carga rápida y suministro de energía a dispositivos.",
    "source": "https://es.wikipedia.org/wiki/USB_Power_Delivery"
  },
  {
    "id": 9,
    "category": "USB y Conectores",
    "question": "¿Cuántos pines tiene un conector USB Type-A estándar?",
    "options": [
      "4.",
      "6.",
      "8.",
      "12."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"4.\". Un conector USB Type-A estándar tiene 4 pines.",
    "source": "https://es.wikipedia.org/wiki/Universal_Serial_Bus"
  },
  {
    "id": 10,
    "category": "Componentes Básicos",
    "question": "¿Qué tipo de conector se utiliza comúnmente para conectar impresoras y escáneres a una computadora?",
    "options": [
      "USB Type-C.",
      "USB Mini-B.",
      "USB Type-A.",
      "USB Type-B."
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"USB Type-B.\". Las impresoras y escáneres suelen usar USB Type-B.",
    "source": "https://es.wikipedia.org/wiki/USB#Type-B"
  },
  {
    "id": 11,
    "category": "USB y Conectores",
    "question": "¿Cuál es la función del conector USB OTG (On-The-Go)?",
    "options": [
      "Conectar dispositivos USB directamente entre sí sin necesidad de una computadora.",
      "Optimizar la velocidad de conexión a Internet.",
      "Mejorar la calidad de audio en dispositivos USB.",
      "Proporcionar energía a dispositivos externos."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Conectar dispositivos USB directamente entre sí sin necesidad de una computadora.\". USB OTG permite la conexión directa entre dispositivos sin un host intermediario.",
    "source": "https://es.wikipedia.org/wiki/USB_On-The-Go"
  },
  {
    "id": 12,
    "category": "USB y Conectores",
    "question": "¿Cuál es la velocidad de transferencia de datos del estándar USB 3.0?",
    "options": [
      "480 Mbps.",
      "5 Gbps.",
      "12 Mbps.",
      "1 Gbps."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"5 Gbps.\". USB 3.0 tiene una velocidad máxima de 5 Gbps.",
    "source": "https://es.wikipedia.org/wiki/USB_3.0"
  },
  {
    "id": 13,
    "category": "USB y Conectores",
    "question": "¿Cuál es la característica principal de un cable USB 3.1 Gen 2?",
    "options": [
      "Mayor velocidad de transferencia.",
      "Menor compatibilidad con dispositivos antiguos.",
      "Conector más grande.",
      "Solo compatible con dispositivos Apple."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Mayor velocidad de transferencia.\". USB 3.1 Gen 2 ofrece velocidades de hasta 10 Gbps.",
    "source": "https://es.wikipedia.org/wiki/USB_3.1"
  },
  {
    "id": 14,
    "category": "USB y Conectores",
    "question": "¿Cuál de las siguientes afirmaciones es verdadera sobre USB 3.2?",
    "options": [
      "Introduce velocidades de transferencia de hasta 20 Gbps.",
      "Es una versión más antigua que USB 2.0.",
      "Utiliza únicamente conectores USB Type-A.",
      "No es compatible con la carga de dispositivos."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Introduce velocidades de transferencia de hasta 20 Gbps.\". USB 3.2 puede alcanzar hasta 20 Gbps.",
    "source": "https://es.wikipedia.org/wiki/USB_3.2"
  },
  {
    "id": 15,
    "category": "Almacenamiento",
    "question": "¿Qué tipo de conector se utiliza comúnmente para conectar dispositivos de almacenamiento externo, como discos duros?",
    "options": [
      "USB Type-A.",
      "USB Type-B.",
      "USB Micro-B.",
      "USB-C."
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"USB-C.\". Los discos duros externos modernos usan USB-C por su velocidad y versatilidad.",
    "source": "https://es.wikipedia.org/wiki/USB-C"
  },
  {
    "id": 16,
    "category": "USB y Conectores",
    "question": "¿Cuántos conductores tiene un cable USB 2.0 estándar?",
    "options": [
      "2.",
      "4.",
      "6.",
      "8."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"4.\". Un cable USB 2.0 tiene 4 conductores: 2 para datos y 2 para energía.",
    "source": "https://es.wikipedia.org/wiki/Universal_Serial_Bus"
  },
  {
    "id": 17,
    "category": "USB y Conectores",
    "question": "¿Qué ventaja ofrece el conector USB Micro-B sobre el conector USB Mini-B?",
    "options": [
      "Mayor velocidad de transferencia.",
      "Mayor durabilidad.",
      "Reversibilidad.",
      "Menor tamaño."
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"Menor tamaño.\". USB Micro-B es más pequeño y duradero que USB Mini-B.",
    "source": "https://es.wikipedia.org/wiki/USB#Micro"
  },
  {
    "id": 18,
    "category": "USB y Conectores",
    "question": "¿En qué año se lanzó oficialmente el estándar USB 3.1?",
    "options": [
      "2008.",
      "2013.",
      "2015.",
      "2020."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"2013.\". USB 3.1 se lanzó en 2013.",
    "source": "https://es.wikipedia.org/wiki/USB_3.1"
  },
  {
    "id": 19,
    "category": "Componentes Básicos",
    "question": "¿Qué tipo de conector se utiliza comúnmente para conectar periféricos como teclados y ratones a una computadora?",
    "options": [
      "USB Type-A.",
      "USB Mini-B.",
      "USB Micro-B.",
      "USB Type-B."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"USB Type-A.\". Los teclados y ratones suelen usar USB Type-A.",
    "source": "https://es.wikipedia.org/wiki/USB#Type-A"
  },
  {
    "id": 20,
    "category": "USB y Conectores",
    "question": "¿Qué es el \"USB Implementers Forum\" (USB-IF)?",
    "options": [
      "Un grupo de usuarios de USB.",
      "Una organización que desarrolla y promueve el estándar USB.",
      "Un programa de software para mejorar la velocidad de conexión USB.",
      "Un dispositivo de almacenamiento USB de alta velocidad."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Una organización que desarrolla y promueve el estándar USB.\". USB-IF es el organismo responsable de mantener y promover el estándar USB.",
    "source": "https://es.wikipedia.org/wiki/USB_Implementers_Forum"
  },
  {
    "id": 21,
    "category": "USB y Conectores",
    "question": "¿Cuál es la función principal del protocolo USB Audio Class?",
    "options": [
      "Mejorar la velocidad de transferencia de datos.",
      "Proporcionar energía para la carga rápida de dispositivos.",
      "Establecer estándares para la conexión de dispositivos de audio.",
      "Facilitar la conexión inalámbrica."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Establecer estándares para la conexión de dispositivos de audio.\". USB Audio Class define cómo los dispositivos de audio deben comunicarse a través de USB.",
    "source": "https://es.wikipedia.org/wiki/USB_audio_device_class"
  },
  {
    "id": 22,
    "category": "USB y Conectores",
    "question": "¿Qué versión de USB introdujo el conector USB Micro-B por primera vez?",
    "options": [
      "USB 1.1.",
      "USB 2.0.",
      "USB 3.0.",
      "USB 3.1."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"USB 2.0.\". USB Micro-B se introdujo con USB 2.0.",
    "source": "https://es.wikipedia.org/wiki/USB#Micro"
  },
  {
    "id": 23,
    "category": "USB y Conectores",
    "question": "¿Cuál es la principal ventaja del conector USB Type-B en comparación con otros conectores USB?",
    "options": [
      "Es más pequeño y reversible.",
      "Tiene mayor velocidad de transferencia.",
      "Ofrece una conexión más segura para periféricos.",
      "No requiere energía para la transferencia de datos."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Ofrece una conexión más segura para periféricos.\". USB Type-B es más robusto y seguro para dispositivos como impresoras.",
    "source": "https://es.wikipedia.org/wiki/USB#Type-B"
  },
  {
    "id": 24,
    "category": "Componentes Básicos",
    "question": "¿Qué tipo de conector se utiliza comúnmente en dispositivos Apple, como iPhones y iPads?",
    "options": [
      "USB Type-A.",
      "USB Micro-B.",
      "USB-C.",
      "Lightning."
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"Lightning.\". Los dispositivos Apple usan el conector Lightning.",
    "source": "https://es.wikipedia.org/wiki/Lightning_(conector)"
  },
  {
    "id": 25,
    "category": "USB y Conectores",
    "question": "¿Cuál es la longitud máxima recomendada para un cable USB 2.0 estándar sin pérdida significativa de rendimiento?",
    "options": [
      "1 metro.",
      "3 metros.",
      "5 metros.",
      "10 metros."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"5 metros.\". La longitud máxima recomendada para USB 2.0 es de 5 metros.",
    "source": "https://es.wikipedia.org/wiki/Universal_Serial_Bus"
  },
  {
    "id": 26,
    "category": "USB y Conectores",
    "question": "¿Cuál es la función del protocolo USB HID (Human Interface Device)?",
    "options": [
      "Mejorar la velocidad de transferencia de datos.",
      "Establecer estándares para la conexión de dispositivos de almacenamiento.",
      "Facilitar la conexión inalámbrica.",
      "Soportar dispositivos de entrada, como teclados y ratones."
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"Soportar dispositivos de entrada, como teclados y ratones.\". USB HID define cómo los dispositivos de entrada interactúan con el sistema.",
    "source": "https://es.wikipedia.org/wiki/USB_human_interface_device_class"
  },
  {
    "id": 27,
    "category": "Componentes Básicos",
    "question": "¿Qué tipo de conector se utiliza comúnmente en impresoras y escáneres para la conexión a una computadora?",
    "options": [
      "USB Type-A.",
      "USB Micro-B.",
      "USB Type-B.",
      "USB-C."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"USB Type-B.\". Las impresoras y escáneres suelen usar USB Type-B.",
    "source": "https://es.wikipedia.org/wiki/USB#Type-B"
  },
  {
    "id": 28,
    "category": "USB y Conectores",
    "question": "¿Cuál es la principal diferencia entre USB 3.0 y USB 3.1?",
    "options": [
      "La velocidad de transferencia de datos.",
      "El tamaño del conector.",
      "La reversibilidad del conector.",
      "La compatibilidad con dispositivos Apple."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"La velocidad de transferencia de datos.\". USB 3.1 es más rápido que USB 3.0.",
    "source": "https://es.wikipedia.org/wiki/USB_3.1"
  },
  {
    "id": 29,
    "category": "USB y Conectores",
    "question": "¿Cuál de las siguientes afirmaciones es correcta sobre USB 3.2?",
    "options": [
      "Introduce velocidades de transferencia de hasta 20 Gbps.",
      "Utiliza únicamente conectores USB Type-C.",
      "Es una versión más antigua que USB 2.0.",
      "No es compatible con la carga de dispositivos."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Introduce velocidades de transferencia de hasta 20 Gbps.\". USB 3.2 puede alcanzar hasta 20 Gbps.",
    "source": "https://es.wikipedia.org/wiki/USB_3.2"
  },
  {
    "id": 30,
    "category": "USB y Conectores",
    "question": "¿Cuál es la función principal del protocolo USB Mass Storage Class (MSC)?",
    "options": [
      "Proporcionar energía para la carga rápida de dispositivos.",
      "Soportar dispositivos de entrada, como teclados y ratones.",
      "Establecer estándares para la conexión de dispositivos de almacenamiento.",
      "Facilitar la conexión inalámbrica."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Establecer estándares para la conexión de dispositivos de almacenamiento.\". USB MSC define cómo los dispositivos de almacenamiento interactúan con el sistema.",
    "source": "https://es.wikipedia.org/wiki/USB_mass_storage_device_class"
  },
  {
    "id": 31,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal de un conector PS/2?",
    "options": [
      "Conectar dispositivos de almacenamiento externo.",
      "Proporcionar energía para la carga de dispositivos móviles.",
      "Conectar periféricos de entrada, como teclados y ratones.",
      "Transmitir señales de audio."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Conectar periféricos de entrada, como teclados y ratones.\". PS/2 se usaba para conectar teclados y ratones.",
    "source": "https://es.wikipedia.org/wiki/Conector_PS/2"
  },
  {
    "id": 32,
    "category": "Puertos y Conectividad",
    "question": "¿Qué tipo de dispositivo suele utilizar un puerto COM (Puerto de Comunicaciones)?",
    "options": [
      "Impresoras.",
      "Monitores.",
      "Tarjetas de sonido.",
      "Cámaras digitales."
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"Cámaras digitales.\". Los puertos COM se usaban para conectar dispositivos seriales como cámaras antiguas.",
    "source": "https://es.wikipedia.org/wiki/Puerto_serie"
  },
  {
    "id": 33,
    "category": "Puertos y Conectividad",
    "question": "¿Cuántos pines tiene un puerto COM estándar?",
    "options": [
      "9.",
      "15.",
      "25.",
      "7."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"9.\". Un puerto COM estándar (DE-9) tiene 9 pines.",
    "source": "https://es.wikipedia.org/wiki/DE-9"
  },
  {
    "id": 34,
    "category": "Puertos y Conectividad",
    "question": "¿Cuál es la función principal de un puerto LPT (Puerto Paralelo)?",
    "options": [
      "Conectar dispositivos de almacenamiento externo.",
      "Transmitir señales de audio de alta calidad.",
      "Conectar periféricos de entrada, como teclados y ratones.",
      "Conectar impresoras y escáneres."
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"Conectar impresoras y escáneres.\". Los puertos LPT se usaban principalmente para impresoras.",
    "source": "https://es.wikipedia.org/wiki/Puerto_paralelo"
  },
  {
    "id": 35,
    "category": "Componentes Básicos",
    "question": "¿Qué tipo de dispositivo suele utilizar un conector IEEE 1394 (FireWire)?",
    "options": [
      "Impresoras.",
      "Discos duros externos.",
      "Teclados y ratones.",
      "Monitores."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Discos duros externos.\". FireWire se usaba para discos duros externos y cámaras de video.",
    "source": "https://es.wikipedia.org/wiki/FireWire"
  },
  {
    "id": 36,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la principal característica del conector IEEE 1394 (FireWire)?",
    "options": [
      "Alta velocidad de transferencia y conexión en cadena.",
      "Reversibilidad del conector.",
      "Conector pequeño y reversible.",
      "Uso exclusivo en dispositivos Apple."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Alta velocidad de transferencia y conexión en cadena.\". FireWire permitía altas velocidades y conexión en cadena.",
    "source": "https://es.wikipedia.org/wiki/FireWire"
  },
  {
    "id": 37,
    "category": "Componentes Básicos",
    "question": "¿Cuántos pines tiene un conector IEEE 1394 (FireWire) de 6 pines?",
    "options": [
      "4.",
      "6.",
      "9.",
      "12."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"6.\". Un conector FireWire de 6 pines tiene, evidentemente, 6 pines.",
    "source": "https://es.wikipedia.org/wiki/FireWire"
  },
  {
    "id": 38,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal del conector Thunderbolt?",
    "options": [
      "Conectar dispositivos de almacenamiento externo.",
      "Transmitir señales de audio de alta calidad.",
      "Proporcionar energía para la carga de dispositivos móviles.",
      "Alta velocidad de transferencia y conexión en cadena."
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"Alta velocidad de transferencia y conexión en cadena.\". Thunderbolt combina alta velocidad y conexión en cadena.",
    "source": "https://es.wikipedia.org/wiki/Thunderbolt_(interfaz)"
  },
  {
    "id": 39,
    "category": "Componentes Básicos",
    "question": "¿Cuántos pines tiene un conector Thunderbolt 3?",
    "options": [
      "8.",
      "12.",
      "16.",
      "24."
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"24.\". Thunderbolt 3 usa el conector USB-C con 24 pines.",
    "source": "https://es.wikipedia.org/wiki/Thunderbolt_(interfaz)"
  },
  {
    "id": 40,
    "category": "Componentes Básicos",
    "question": "¿Qué tipo de dispositivo suele utilizar un conector PS/2 de 6 pines?",
    "options": [
      "Impresoras.",
      "Monitores.",
      "Teclados y ratones.",
      "Cámaras digitales."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Teclados y ratones.\". Los conectores PS/2 de 6 pines se usaban para teclados y ratones.",
    "source": "https://es.wikipedia.org/wiki/Conector_PS/2"
  },
  {
    "id": 41,
    "category": "Puertos y Conectividad",
    "question": "¿Cuál es la función principal de un puerto COM en una computadora?",
    "options": [
      "Conectar dispositivos de red.",
      "Facilitar la carga de dispositivos móviles.",
      "Proporcionar comunicación serial con periféricos.",
      "Transmitir señales de video."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Proporcionar comunicación serial con periféricos.\". Los puertos COM permiten comunicación serial.",
    "source": "https://es.wikipedia.org/wiki/Puerto_serie"
  },
  {
    "id": 42,
    "category": "Componentes Básicos",
    "question": "¿Cuántos pines tiene un conector LPT de 25 pines?",
    "options": [
      "9.",
      "15.",
      "25.",
      "7."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"25.\". Un conector LPT de 25 pines tiene 25 pines.",
    "source": "https://es.wikipedia.org/wiki/Puerto_paralelo"
  },
  {
    "id": 43,
    "category": "Componentes Básicos",
    "question": "¿Qué tipo de dispositivo suele utilizar un conector IEEE 1394 de 9 pines?",
    "options": [
      "Impresoras.",
      "Discos duros externos.",
      "Teclados y ratones.",
      "Monitores."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Discos duros externos.\". FireWire de 9 pines se usaba en discos duros externos.",
    "source": "https://es.wikipedia.org/wiki/FireWire"
  },
  {
    "id": 44,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal de un conector Thunderbolt en una computadora?",
    "options": [
      "Conectar dispositivos de red.",
      "Proporcionar comunicación serial con periféricos.",
      "Alta velocidad de transferencia y conexión en cadena.",
      "Transmitir señales de audio de alta calidad."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Alta velocidad de transferencia y conexión en cadena.\". Thunderbolt ofrece alta velocidad y conexión en cadena.",
    "source": "https://es.wikipedia.org/wiki/Thunderbolt_(interfaz)"
  },
  {
    "id": 45,
    "category": "Componentes Básicos",
    "question": "¿Cuántos pines tiene un conector PS/2 de 4 pines?",
    "options": [
      "4.",
      "6.",
      "9.",
      "12."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"4.\". Un conector PS/2 de 4 pines tiene 4 pines.",
    "source": "https://es.wikipedia.org/wiki/Conector_PS/2"
  },
  {
    "id": 46,
    "category": "Puertos y Conectividad",
    "question": "¿Qué tipo de dispositivo suele utilizar un puerto COM de 25 pines?",
    "options": [
      "Impresoras.",
      "Monitores.",
      "Tarjetas de sonido.",
      "Cámaras digitales."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Impresoras.\". Los puertos COM de 25 pines se usaban en impresoras antiguas.",
    "source": "https://es.wikipedia.org/wiki/Puerto_serie"
  },
  {
    "id": 47,
    "category": "Puertos y Conectividad",
    "question": "¿Cuál es la función principal de un puerto LPT en una computadora?",
    "options": [
      "Conectar dispositivos de red.",
      "Transmitir señales de video.",
      "Conectar impresoras y escáneres.",
      "Proporcionar comunicación serial con periféricos."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Conectar impresoras y escáneres.\". Los puertos LPT se usaban para impresoras y escáneres.",
    "source": "https://es.wikipedia.org/wiki/Puerto_paralelo"
  },
  {
    "id": 48,
    "category": "Componentes Básicos",
    "question": "¿Cuántos pines tiene un conector IEEE 1394 de 4 pines?",
    "options": [
      "4.",
      "6.",
      "9.",
      "12."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"4.\". Un conector FireWire de 4 pines tiene 4 pines.",
    "source": "https://es.wikipedia.org/wiki/FireWire"
  },
  {
    "id": 49,
    "category": "Componentes Básicos",
    "question": "¿Qué tipo de dispositivo suele utilizar un conector Thunderbolt 2?",
    "options": [
      "Impresoras.",
      "Discos duros externos.",
      "Teclados y ratones.",
      "Monitores."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Discos duros externos.\". Thunderbolt 2 se usaba en discos duros externos y monitores.",
    "source": "https://es.wikipedia.org/wiki/Thunderbolt_(interfaz)"
  },
  {
    "id": 50,
    "category": "Componentes Básicos",
    "question": "¿Cuántos pines tiene un conector PS/2 de 6 pines?",
    "options": [
      "4.",
      "6.",
      "9.",
      "12."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"6.\". Un conector PS/2 de 6 pines tiene 6 pines.",
    "source": "https://es.wikipedia.org/wiki/Conector_PS/2"
  },
  {
    "id": 51,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal de un conector COM en una computadora?",
    "options": [
      "Conectar dispositivos de almacenamiento externo.",
      "Proporcionar comunicación serial con periféricos.",
      "Transmitir señales de audio de alta calidad.",
      "Facilitar la carga de dispositivos móviles."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Proporcionar comunicación serial con periféricos.\". Los conectores COM permiten comunicación serial.",
    "source": "https://es.wikipedia.org/wiki/Puerto_serie"
  },
  {
    "id": 52,
    "category": "Componentes Básicos",
    "question": "¿Cuántos pines tiene un conector LPT de 9 pines?",
    "options": [
      "4.",
      "6.",
      "9.",
      "12."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"9.\". Un conector LPT de 9 pines tiene 9 pines.",
    "source": "https://es.wikipedia.org/wiki/Puerto_paralelo"
  },
  {
    "id": 53,
    "category": "Puertos y Conectividad",
    "question": "¿Qué tipo de dispositivo suele utilizar un puerto COM de 9 pines?",
    "options": [
      "Impresoras.",
      "Monitores.",
      "Tarjetas de sonido.",
      "Cámaras digitales."
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"Cámaras digitales.\". Los puertos COM de 9 pines se usaban en cámaras digitales antiguas.",
    "source": "https://es.wikipedia.org/wiki/Puerto_serie"
  },
  {
    "id": 54,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal de un conector IEEE 1394 de 6 pines?",
    "options": [
      "Alta velocidad de transferencia y conexión en cadena.",
      "Reversibilidad del conector.",
      "Conectar dispositivos de almacenamiento externo.",
      "Uso exclusivo en dispositivos Apple."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Alta velocidad de transferencia y conexión en cadena.\". FireWire de 6 pines ofrecía alta velocidad y conexión en cadena.",
    "source": "https://es.wikipedia.org/wiki/FireWire"
  },
  {
    "id": 55,
    "category": "Componentes Básicos",
    "question": "¿Cuántos pines tiene un conector Thunderbolt 4?",
    "options": [
      "8.",
      "16.",
      "24.",
      "32."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"24.\". Thunderbolt 4 usa el conector USB-C con 24 pines.",
    "source": "https://es.wikipedia.org/wiki/Thunderbolt_(interfaz)"
  },
  {
    "id": 56,
    "category": "Componentes Básicos",
    "question": "¿Qué tipo de dispositivo suele utilizar un conector PS/2 de 4 pines?",
    "options": [
      "Impresoras.",
      "Monitores.",
      "Teclados y ratones.",
      "Cámaras digitales."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Teclados y ratones.\". Los conectores PS/2 de 4 pines se usaban para teclados y ratones.",
    "source": "https://es.wikipedia.org/wiki/Conector_PS/2"
  },
  {
    "id": 57,
    "category": "Puertos y Conectividad",
    "question": "¿Cuál es la función principal de un puerto COM en una computadora?",
    "options": [
      "Conectar dispositivos de red.",
      "Facilitar la carga de dispositivos móviles.",
      "Proporcionar comunicación serial con periféricos.",
      "Transmitir señales de video."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Proporcionar comunicación serial con periféricos.\". Los puertos COM permiten comunicación serial.",
    "source": "https://es.wikipedia.org/wiki/Puerto_serie"
  },
  {
    "id": 58,
    "category": "Componentes Básicos",
    "question": "¿Cuántos pines tiene un conector LPT de 6 pines?",
    "options": [
      "4.",
      "6.",
      "9.",
      "12."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"6.\". Un conector LPT de 6 pines tiene 6 pines.",
    "source": "https://es.wikipedia.org/wiki/Puerto_paralelo"
  },
  {
    "id": 59,
    "category": "Componentes Básicos",
    "question": "¿Qué tipo de dispositivo suele utilizar un conector IEEE 1394 de 4 pines?",
    "options": [
      "Impresoras.",
      "Discos duros externos.",
      "Teclados y ratones.",
      "Monitores."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Discos duros externos.\". FireWire de 4 pines se usaba en discos duros externos.",
    "source": "https://es.wikipedia.org/wiki/FireWire"
  },
  {
    "id": 60,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal de un conector Thunderbolt en una computadora?",
    "options": [
      "Conectar dispositivos de red.",
      "Transmitir señales de audio de alta calidad.",
      "Alta velocidad de transferencia y conexión en cadena.",
      "Proporcionar energía para la carga de dispositivos móviles."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Alta velocidad de transferencia y conexión en cadena.\". Thunderbolt ofrece alta velocidad y conexión en cadena.",
    "source": "https://es.wikipedia.org/wiki/Thunderbolt_(interfaz)"
  },
  {
    "id": 61,
    "category": "Conectores de Video",
    "question": "¿Cuál de los siguientes conectores es analógico y se utiliza comúnmente para la conexión de monitores y proyectores?",
    "options": [
      "HDMI.",
      "DisplayPort.",
      "USB-C.",
      "VGA."
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"VGA.\". VGA es un conector analógico para monitores.",
    "source": "https://es.wikipedia.org/wiki/Video_Graphics_Array"
  },
  {
    "id": 62,
    "category": "Conectores de Video",
    "question": "¿Cuántos pines tiene un conector VGA estándar?",
    "options": [
      "15.",
      "9.",
      "24.",
      "19."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"15.\". Un conector VGA estándar tiene 15 pines.",
    "source": "https://es.wikipedia.org/wiki/Video_Graphics_Array"
  },
  {
    "id": 63,
    "category": "Conectores de Video",
    "question": "¿Cuál de los siguientes conectores es digital y se utiliza para transmitir audio y video de alta calidad?",
    "options": [
      "USB-C.",
      "VGA.",
      "HDMI.",
      "DisplayPort."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"HDMI.\". HDMI transmite audio y video digital de alta calidad.",
    "source": "https://es.wikipedia.org/wiki/HDMI"
  },
  {
    "id": 64,
    "category": "Conectores de Video",
    "question": "¿Cuál es la principal ventaja del conector HDMI sobre el VGA?",
    "options": [
      "Mayor velocidad de transferencia.",
      "Reversibilidad del conector.",
      "Transmite audio y video digital.",
      "Mayor resistencia física."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Transmite audio y video digital.\". HDMI transmite audio y video digital, mientras que VGA solo transmite video analógico.",
    "source": "https://es.wikipedia.org/wiki/HDMI"
  },
  {
    "id": 65,
    "category": "Conectores de Video",
    "question": "¿Cuántos pines tiene un conector HDMI estándar?",
    "options": [
      "15.",
      "19.",
      "24.",
      "32."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"19.\". Un conector HDMI estándar tiene 19 pines.",
    "source": "https://es.wikipedia.org/wiki/HDMI"
  },
  {
    "id": 66,
    "category": "Conectores de Video",
    "question": "¿Qué tipo de señal transmite el conector DisplayPort?",
    "options": [
      "Solo audio.",
      "Solo video.",
      "Audio y video.",
      "Datos de almacenamiento."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Audio y video.\". DisplayPort transmite audio y video digital.",
    "source": "https://es.wikipedia.org/wiki/DisplayPort"
  },
  {
    "id": 67,
    "category": "Conectores de Video",
    "question": "¿Cuántos pines tiene un conector DisplayPort estándar?",
    "options": [
      "15.",
      "19.",
      "20.",
      "24."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"20.\". Un conector DisplayPort estándar tiene 20 pines.",
    "source": "https://es.wikipedia.org/wiki/DisplayPort"
  },
  {
    "id": 68,
    "category": "Conectores de Video",
    "question": "¿Cuál de los siguientes conectores es reversible y se utiliza para la transmisión de datos, energía, audio y video?",
    "options": [
      "DisplayPort.",
      "USB-C.",
      "HDMI.",
      "VGA."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"USB-C.\". USB-C es reversible y puede transmitir datos, energía, audio y video.",
    "source": "https://es.wikipedia.org/wiki/USB-C"
  },
  {
    "id": 69,
    "category": "USB y Conectores",
    "question": "¿Cuántos pines tiene un conector USB-C estándar?",
    "options": [
      "15.",
      "19.",
      "24.",
      "32."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"24.\". Un conector USB-C estándar tiene 24 pines.",
    "source": "https://es.wikipedia.org/wiki/USB-C"
  },
  {
    "id": 70,
    "category": "Conectores de Video",
    "question": "¿Cuál es la principal ventaja del conector DisplayPort sobre el HDMI?",
    "options": [
      "Mayor velocidad de transferencia.",
      "Reversibilidad del conector.",
      "Transmite audio y video digital.",
      "Mayor resistencia física."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Mayor velocidad de transferencia.\". DisplayPort puede ofrecer mayores velocidades que HDMI en algunas versiones.",
    "source": "https://es.wikipedia.org/wiki/DisplayPort"
  },
  {
    "id": 71,
    "category": "Conectores de Video",
    "question": "¿Cuántos pines tiene un conector VGA de 9 pines?",
    "options": [
      "9.",
      "15.",
      "24.",
      "19."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"9.\". Un conector VGA de 9 pines tiene 9 pines.",
    "source": "https://es.wikipedia.org/wiki/Video_Graphics_Array"
  },
  {
    "id": 72,
    "category": "Conectores de Video",
    "question": "¿Cuál de los siguientes conectores es conocido por su capacidad para admitir múltiples monitores mediante una sola conexión?",
    "options": [
      "HDMI.",
      "DisplayPort.",
      "USB-C.",
      "VGA."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"DisplayPort.\". DisplayPort soporta múltiples monitores mediante una sola conexión.",
    "source": "https://es.wikipedia.org/wiki/DisplayPort"
  },
  {
    "id": 73,
    "category": "Conectores de Video",
    "question": "¿Cuántos pines tiene un conector HDMI Mini?",
    "options": [
      "15.",
      "19.",
      "24.",
      "32."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"19.\". Un conector HDMI Mini tiene 19 pines.",
    "source": "https://es.wikipedia.org/wiki/HDMI"
  },
  {
    "id": 74,
    "category": "Conectores de Video",
    "question": "¿Qué tipo de señal transmite el conector HDMI?",
    "options": [
      "Solo audio.",
      "Solo video.",
      "Audio y video.",
      "Datos de almacenamiento."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Audio y video.\". HDMI transmite audio y video digital.",
    "source": "https://es.wikipedia.org/wiki/HDMI"
  },
  {
    "id": 75,
    "category": "Conectores de Video",
    "question": "¿Cuántos pines tiene un conector DisplayPort de 20 pines?",
    "options": [
      "15.",
      "19.",
      "20.",
      "24."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"20.\". Un conector DisplayPort de 20 pines tiene 20 pines.",
    "source": "https://es.wikipedia.org/wiki/DisplayPort"
  },
  {
    "id": 76,
    "category": "Conectores de Video",
    "question": "¿Cuál es la principal ventaja del conector VGA sobre el HDMI?",
    "options": [
      "Mayor velocidad de transferencia.",
      "Reversibilidad del conector.",
      "Transmite audio y video digital.",
      "Mayor resistencia física."
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"Mayor resistencia física.\". VGA es más robusto físicamente, pero HDMI es superior en calidad.",
    "source": "https://es.wikipedia.org/wiki/Video_Graphics_Array"
  },
  {
    "id": 77,
    "category": "USB y Conectores",
    "question": "¿Qué tipo de señal transmite el conector USB-C?",
    "options": [
      "Solo audio.",
      "Solo video.",
      "Audio y video.",
      "Datos de almacenamiento."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Audio y video.\". USB-C puede transmitir audio y video mediante DisplayPort Alternate Mode.",
    "source": "https://es.wikipedia.org/wiki/USB-C"
  },
  {
    "id": 78,
    "category": "Componentes Básicos",
    "question": "¿Cuál de los siguientes conectores es conocido por su capacidad para suministrar energía suficiente para cargar dispositivos, incluidos laptops?",
    "options": [
      "HDMI.",
      "DisplayPort.",
      "USB-C.",
      "VGA."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"USB-C.\". USB-C puede suministrar hasta 100W, suficiente para laptops.",
    "source": "https://es.wikipedia.org/wiki/USB-C"
  },
  {
    "id": 79,
    "category": "Conectores de Video",
    "question": "¿Cuántos pines tiene un conector HDMI Micro?",
    "options": [
      "15.",
      "19.",
      "24.",
      "32."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"19.\". Un conector HDMI Micro tiene 19 pines.",
    "source": "https://es.wikipedia.org/wiki/HDMI"
  },
  {
    "id": 80,
    "category": "Conectores de Video",
    "question": "¿Qué tipo de señal transmite el conector VGA?",
    "options": [
      "Solo audio.",
      "Solo video.",
      "Audio y video.",
      "Datos de almacenamiento."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Solo video.\". VGA solo transmite video analógico.",
    "source": "https://es.wikipedia.org/wiki/Video_Graphics_Array"
  },
  {
    "id": 81,
    "category": "Componentes Básicos",
    "question": "¿Cuál de los siguientes conectores es compatible con la tecnología Thunderbolt?",
    "options": [
      "HDMI.",
      "DisplayPort.",
      "USB-C.",
      "VGA."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"USB-C.\". Thunderbolt 3 y 4 usan el conector USB-C.",
    "source": "https://es.wikipedia.org/wiki/Thunderbolt_(interfaz)"
  },
  {
    "id": 82,
    "category": "USB y Conectores",
    "question": "¿Cuántos pines tiene un conector USB-C de 32 pines?",
    "options": [
      "15.",
      "19.",
      "24.",
      "32."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"24.\". Un conector USB-C estándar tiene 24 pines, no 32.",
    "source": "https://es.wikipedia.org/wiki/USB-C"
  },
  {
    "id": 83,
    "category": "Conectores de Video",
    "question": "¿Qué tipo de señal transmite el conector HDMI Micro?",
    "options": [
      "Solo audio.",
      "Solo video.",
      "Audio y video.",
      "Datos de almacenamiento."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Audio y video.\". HDMI Micro transmite audio y video digital.",
    "source": "https://es.wikipedia.org/wiki/HDMI"
  },
  {
    "id": 84,
    "category": "Componentes Básicos",
    "question": "¿Cuál de los siguientes conectores es más comúnmente utilizado en la conexión de dispositivos móviles como smartphones y tablets?",
    "options": [
      "HDMI.",
      "DisplayPort.",
      "USB-C.",
      "VGA."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"USB-C.\". USB-C es el estándar actual para dispositivos móviles.",
    "source": "https://es.wikipedia.org/wiki/USB-C"
  },
  {
    "id": 85,
    "category": "Conectores de Video",
    "question": "¿Cuántos pines tiene un conector HDMI Mini?",
    "options": [
      "15.",
      "19.",
      "24.",
      "32."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"19.\". Un conector HDMI Mini tiene 19 pines.",
    "source": "https://es.wikipedia.org/wiki/HDMI"
  },
  {
    "id": 86,
    "category": "USB y Conectores",
    "question": "¿Qué tipo de señal transmite el conector USB-C?",
    "options": [
      "Solo audio.",
      "Solo video.",
      "Audio y video.",
      "Datos de almacenamiento."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Audio y video.\". USB-C puede transmitir audio y video mediante DisplayPort Alternate Mode.",
    "source": "https://es.wikipedia.org/wiki/USB-C"
  },
  {
    "id": 87,
    "category": "Componentes Básicos",
    "question": "¿Cuántos pines tiene un conector D-sub?",
    "options": [
      "9.",
      "15.",
      "24.",
      "19."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"9.\". Un conector D-sub común (DE-9) tiene 9 pines.",
    "source": "https://es.wikipedia.org/wiki/Conector_D-sub"
  },
  {
    "id": 88,
    "category": "Conectores de Placa Base",
    "question": "¿Cuál es la función principal de los conectores de alimentación de la placa base?",
    "options": [
      "Transmitir datos entre componentes.",
      "Proporcionar energía a los componentes de la placa base.",
      "Conectar dispositivos de almacenamiento.",
      "Transmitir señales de audio y video."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Proporcionar energía a los componentes de la placa base.\". Los conectores de alimentación suministran energía eléctrica a la placa base y sus componentes.",
    "source": "https://es.wikipedia.org/wiki/Placa_base"
  },
  {
    "id": 89,
    "category": "Conectores de Placa Base",
    "question": "¿Cuántos pines tiene un conector de alimentación ATX de 24 pines?",
    "options": [
      "20.",
      "24.",
      "28.",
      "32."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"24.\". Un conector de alimentación ATX estándar tiene 24 pines.",
    "source": "https://es.wikipedia.org/wiki/ATX"
  },
  {
    "id": 90,
    "category": "Conectores de Placa Base",
    "question": "¿Cuál es la función del conector de alimentación de 4 pines (ATX 12V)?",
    "options": [
      "Proporcionar energía adicional al procesador.",
      "Conectar dispositivos de almacenamiento.",
      "Transmitir datos entre componentes.",
      "Suministrar energía a la memoria RAM."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Proporcionar energía adicional al procesador.\". El conector ATX 12V suministra energía específicamente al procesador.",
    "source": "https://es.wikipedia.org/wiki/ATX"
  },
  {
    "id": 91,
    "category": "Conectores de Placa Base",
    "question": "¿Cuántos pines tiene un conector de alimentación para el procesador (CPU) de 8 pines?",
    "options": [
      "4.",
      "6.",
      "8.",
      "12."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"8.\". Un conector de alimentación para CPU de 8 pines tiene 8 pines.",
    "source": "https://es.wikipedia.org/wiki/ATX"
  },
  {
    "id": 92,
    "category": "Conectores de Placa Base",
    "question": "¿Cuál es la función de los conectores SATA en la placa base?",
    "options": [
      "Conectar dispositivos de almacenamiento como discos duros y SSD.",
      "Proporcionar energía a la tarjeta gráfica.",
      "Transmitir señales de audio.",
      "Conectar periféricos USB."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Conectar dispositivos de almacenamiento como discos duros y SSD.\". Los conectores SATA se utilizan para conectar dispositivos de almacenamiento modernos.",
    "source": "https://es.wikipedia.org/wiki/Serial_ATA"
  },
  {
    "id": 93,
    "category": "Conectores de Placa Base",
    "question": "¿Cuántos pines tiene un conector SATA de datos estándar?",
    "options": [
      "7.",
      "15.",
      "22.",
      "24."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"7.\". Un conector SATA de datos estándar tiene 7 pines.",
    "source": "https://es.wikipedia.org/wiki/Serial_ATA"
  },
  {
    "id": 94,
    "category": "Conectores de Placa Base",
    "question": "¿Cuál es la función del conector M.2 en la placa base?",
    "options": [
      "Conectar tarjetas gráficas.",
      "Conectar unidades SSD de alto rendimiento.",
      "Proporcionar energía adicional al procesador.",
      "Transmitir señales de audio."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Conectar unidades SSD de alto rendimiento.\". El conector M.2 se utiliza principalmente para conectar unidades SSD compactas y rápidas.",
    "source": "https://es.wikipedia.org/wiki/M.2"
  },
  {
    "id": 95,
    "category": "Conectores de Placa Base",
    "question": "¿Cuántos pines tiene un conector PCIe x16?",
    "options": [
      "16.",
      "32.",
      "64.",
      "128."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"16.\". Un conector PCIe x16 tiene 16 carriles de datos.",
    "source": "https://es.wikipedia.org/wiki/PCI_Express"
  },
  {
    "id": 96,
    "category": "Conectores de Placa Base",
    "question": "¿Cuál es la función principal de los conectores DIMM en la placa base?",
    "options": [
      "Conectar tarjetas de expansión.",
      "Instalar módulos de memoria RAM.",
      "Conectar dispositivos de almacenamiento.",
      "Proporcionar energía a la placa base."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Instalar módulos de memoria RAM.\". Los conectores DIMM se utilizan para instalar módulos de memoria RAM.",
    "source": "https://es.wikipedia.org/wiki/DIMM"
  },
  {
    "id": 97,
    "category": "Conectores de Placa Base",
    "question": "¿Cuántos pines tiene un módulo de memoria DDR4 DIMM?",
    "options": [
      "168.",
      "184.",
      "240.",
      "288."
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"288.\". Un módulo de memoria DDR4 DIMM tiene 288 pines.",
    "source": "https://es.wikipedia.org/wiki/DDR4_SDRAM"
  },
  {
    "id": 98,
    "category": "Conectores de Placa Base",
    "question": "¿Cuál es la función del conector de audio frontal en la placa base?",
    "options": [
      "Conectar altavoces externos.",
      "Conectar los puertos de audio del panel frontal del chasis.",
      "Transmitir audio a la tarjeta gráfica.",
      "Proporcionar energía a dispositivos de audio."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Conectar los puertos de audio del panel frontal del chasis.\". El conector de audio frontal permite conectar los puertos de audio del panel frontal del chasis a la placa base.",
    "source": "https://es.wikipedia.org/wiki/Conector_frontal_de_audio"
  },
  {
    "id": 99,
    "category": "Conectores de Placa Base",
    "question": "¿Cuántos pines tiene un conector de audio frontal estándar?",
    "options": [
      "5.",
      "9.",
      "10.",
      "15."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"10.\". Un conector de audio frontal estándar (HD Audio) tiene 10 pines.",
    "source": "https://es.wikipedia.org/wiki/Conector_frontal_de_audio"
  },
  {
    "id": 100,
    "category": "Conectores de Placa Base",
    "question": "¿Cuál es la función del conector USB frontal en la placa base?",
    "options": [
      "Conectar dispositivos USB directamente a la placa base.",
      "Conectar los puertos USB del panel frontal del chasis.",
      "Proporcionar energía adicional a dispositivos USB.",
      "Transmitir datos entre dispositivos USB."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Conectar los puertos USB del panel frontal del chasis.\". El conector USB frontal permite conectar los puertos USB del panel frontal del chasis a la placa base.",
    "source": "https://es.wikipedia.org/wiki/USB"
  },
  {
    "id": 101,
    "category": "Conectores de Placa Base",
    "question": "¿Cuántos pines tiene un conector USB 2.0 frontal estándar?",
    "options": [
      "5.",
      "9.",
      "10.",
      "19."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"10.\". Un conector USB 2.0 frontal estándar tiene 10 pines.",
    "source": "https://es.wikipedia.org/wiki/USB"
  },
  {
    "id": 102,
    "category": "Conectores de Placa Base",
    "question": "¿Cuál es la función del conector de panel frontal del sistema en la placa base?",
    "options": [
      "Conectar los botones de encendido y reinicio del chasis.",
      "Conectar dispositivos de almacenamiento.",
      "Proporcionar energía a la placa base.",
      "Transmitir señales de audio y video."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Conectar los botones de encendido y reinicio del chasis.\". El conector de panel frontal del sistema permite conectar los botones de encendido, reinicio y los LEDs del chasis a la placa base.",
    "source": "https://es.wikipedia.org/wiki/Placa_base"
  },
  {
    "id": 103,
    "category": "Conectores de Placa Base",
    "question": "¿Cuántos pines tiene un conector de panel frontal del sistema estándar?",
    "options": [
      "5.",
      "9.",
      "10.",
      "20."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"10.\". Un conector de panel frontal del sistema estándar tiene 10 pines.",
    "source": "https://es.wikipedia.org/wiki/Placa_base"
  },
  {
    "id": 104,
    "category": "Conectores de Placa Base",
    "question": "¿Cuál es la función del conector de ventilador de la placa base?",
    "options": [
      "Conectar dispositivos de almacenamiento.",
      "Proporcionar energía a la tarjeta gráfica.",
      "Conectar ventiladores para la refrigeración del sistema.",
      "Transmitir señales de audio."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Conectar ventiladores para la refrigeración del sistema.\". Los conectores de ventilador permiten conectar ventiladores para refrigerar los componentes del sistema.",
    "source": "https://es.wikipedia.org/wiki/Ventilador_de_computadora"
  },
  {
    "id": 105,
    "category": "Conectores de Placa Base",
    "question": "¿Cuántos pines tiene un conector de ventilador estándar de 3 pines?",
    "options": [
      "2.",
      "3.",
      "4.",
      "5."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"3.\". Un conector de ventilador estándar de 3 pines tiene 3 pines.",
    "source": "https://es.wikipedia.org/wiki/Ventilador_de_computadora"
  },
  {
    "id": 106,
    "category": "Conectores de Placa Base",
    "question": "¿Cuál es la diferencia principal entre un conector de ventilador de 3 pines y uno de 4 pines?",
    "options": [
      "El número de pines.",
      "La capacidad de control de velocidad.",
      "El tipo de energía suministrada.",
      "La compatibilidad con diferentes tipos de ventiladores."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"La capacidad de control de velocidad.\". Los conectores de ventilador de 4 pines permiten un control más preciso de la velocidad del ventilador mediante PWM (Modulación por Ancho de Pulsos).",
    "source": "https://es.wikipedia.org/wiki/Ventilador_de_computadora"
  },
  {
    "id": 107,
    "category": "Conectores de Placa Base",
    "question": "¿Cuál es la función del conector CMOS en la placa base?",
    "options": [
      "Almacenar la configuración del BIOS/UEFI.",
      "Proporcionar energía a la placa base.",
      "Conectar dispositivos de almacenamiento.",
      "Transmitir señales de audio."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Almacenar la configuración del BIOS/UEFI.\". El conector CMOS permite conectar una batería que mantiene la configuración del BIOS/UEFI cuando el sistema está apagado.",
    "source": "https://es.wikipedia.org/wiki/CMOS"
  },
  {
    "id": 108,
    "category": "Conectores de Placa Base",
    "question": "¿Cuál es la función del conector de la batería CMOS en la placa base?",
    "options": [
      "Proporcionar energía continua a la placa base.",
      "Mantener la configuración del BIOS/UEFI cuando el sistema está apagado.",
      "Alimentar los ventiladores del sistema.",
      "Suministrar energía a los dispositivos USB."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Mantener la configuración del BIOS/UEFI cuando el sistema está apagado.\". La batería CMOS proporciona energía para mantener la configuración del BIOS/UEFI cuando el sistema está apagado.",
    "source": "https://es.wikipedia.org/wiki/CMOS"
  },
  {
    "id": 109,
    "category": "Conectores de Placa Base",
    "question": "¿Cuál es la función del conector de panel posterior en la placa base?",
    "options": [
      "Conectar los puertos del panel posterior del chasis.",
      "Proporcionar los puertos externos de la placa base.",
      "Conectar dispositivos de almacenamiento.",
      "Transmitir señales de audio y video."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Proporcionar los puertos externos de la placa base.\". El conector de panel posterior proporciona los puertos externos (USB, audio, video, etc.) de la placa base.",
    "source": "https://es.wikipedia.org/wiki/Placa_base"
  },
  {
    "id": 110,
    "category": "Conectores de Placa Base",
    "question": "¿Cuál es la función del conector de alimentación de la tarjeta gráfica?",
    "options": [
      "Transmitir datos entre la tarjeta gráfica y la placa base.",
      "Proporcionar energía adicional a la tarjeta gráfica.",
      "Conectar la tarjeta gráfica al monitor.",
      "Transmitir señales de audio desde la tarjeta gráfica."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Proporcionar energía adicional a la tarjeta gráfica.\". El conector de alimentación de la tarjeta gráfica proporciona energía adicional cuando la energía suministrada a través del slot PCIe no es suficiente.",
    "source": "https://es.wikipedia.org/wiki/Tarjeta_gráfica"
  },
  {
    "id": 111,
    "category": "Conectores de Placa Base",
    "question": "¿Cuántos pines tiene un conector de alimentación de 6 pines para tarjeta gráfica?",
    "options": [
      "4.",
      "6.",
      "8.",
      "12."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"6.\". Un conector de alimentación de 6 pines para tarjeta gráfica tiene 6 pines.",
    "source": "https://es.wikipedia.org/wiki/Tarjeta_gráfica"
  },
  {
    "id": 112,
    "category": "Conectores de Placa Base",
    "question": "¿Cuál es la función del conector de alimentación de 8 pines para tarjeta gráfica?",
    "options": [
      "Transmitir datos entre la tarjeta gráfica y la placa base.",
      "Proporcionar más energía que un conector de 6 pines.",
      "Conectar la tarjeta gráfica al monitor.",
      "Transmitir señales de audio desde la tarjeta gráfica."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Proporcionar más energía que un conector de 6 pines.\". El conector de alimentación de 8 pines proporciona más energía que un conector de 6 pines, necesario para tarjetas gráficas de alto rendimiento.",
    "source": "https://es.wikipedia.org/wiki/Tarjeta_gráfica"
  },
  {
    "id": 113,
    "category": "Conectores de Placa Base",
    "question": "¿Cuál es la función del conector de alimentación Molex?",
    "options": [
      "Conectar dispositivos de almacenamiento antiguos.",
      "Proporcionar energía a la tarjeta gráfica.",
      "Transmitir datos entre componentes.",
      "Conectar periféricos USB."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Conectar dispositivos de almacenamiento antiguos.\". El conector Molex se utilizaba para proporcionar energía a dispositivos de almacenamiento antiguos como discos duros IDE y unidades de CD/DVD.",
    "source": "https://es.wikipedia.org/wiki/Conector_Molex"
  },
  {
    "id": 114,
    "category": "Conectores de Placa Base",
    "question": "¿Cuántos pines tiene un conector Molex estándar?",
    "options": [
      "4.",
      "6.",
      "8.",
      "12."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"4.\". Un conector Molex estándar tiene 4 pines.",
    "source": "https://es.wikipedia.org/wiki/Conector_Molex"
  },
  {
    "id": 115,
    "category": "Conectores de Placa Base",
    "question": "¿Cuál es la función del conector de alimentación Berg?",
    "options": [
      "Conectar dispositivos de almacenamiento modernos.",
      "Proporcionar energía a disqueteras.",
      "Transmitir datos entre componentes.",
      "Conectar periféricos USB."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Proporcionar energía a disqueteras.\". El conector Berg se utilizaba para proporcionar energía a disqueteras.",
    "source": "https://es.wikipedia.org/wiki/Conector_Berg"
  },
  {
    "id": 116,
    "category": "Conectores de Placa Base",
    "question": "¿Cuántos pines tiene un conector Berg estándar?",
    "options": [
      "2.",
      "4.",
      "6.",
      "8."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"4.\". Un conector Berg estándar tiene 4 pines.",
    "source": "https://es.wikipedia.org/wiki/Conector_Berg"
  },
  {
    "id": 117,
    "category": "Conectores de Placa Base",
    "question": "¿Cuál es la función del conector de alimentación SATA de 15 pines?",
    "options": [
      "Transmitir datos entre dispositivos SATA.",
      "Proporcionar energía a dispositivos SATA.",
      "Conectar dispositivos SATA a la placa base.",
      "Transmitir señales de audio y video."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Proporcionar energía a dispositivos SATA.\". El conector de alimentación SATA de 15 pines proporciona energía a dispositivos SATA como discos duros y unidades SSD.",
    "source": "https://es.wikipedia.org/wiki/Serial_ATA"
  },
  {
    "id": 118,
    "category": "Conectores de Placa Base",
    "question": "¿Cuál es la función del conector de alimentación de 4+4 pines para el procesador?",
    "options": [
      "Proporcionar energía al procesador.",
      "Conectar dispositivos de almacenamiento.",
      "Transmitir datos entre componentes.",
      "Suministrar energía a la memoria RAM."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Proporcionar energía al procesador.\". El conector de alimentación de 4+4 pines para el procesador proporciona energía al procesador y puede separarse en dos conectores de 4 pines para compatibilidad con diferentes placas base.",
    "source": "https://es.wikipedia.org/wiki/ATX"
  },
  {
    "id": 119,
    "category": "Conectores de Placa Base",
    "question": "¿Cuál es la función del conector de alimentación de 6+2 pines para tarjeta gráfica?",
    "options": [
      "Transmitir datos entre la tarjeta gráfica y la placa base.",
      "Proporcionar energía a la tarjeta gráfica.",
      "Conectar la tarjeta gráfica al monitor.",
      "Transmitir señales de audio desde la tarjeta gráfica."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Proporcionar energía a la tarjeta gráfica.\". El conector de alimentación de 6+2 pines para tarjeta gráfica proporciona energía a la tarjeta gráfica y puede usarse como un conector de 6 pines o de 8 pines según sea necesario.",
    "source": "https://es.wikipedia.org/wiki/Tarjeta_gráfica"
  },
  {
    "id": 120,
    "category": "Conectores de Placa Base",
    "question": "¿Cuál es la función del conector de alimentación de 8 pines para el procesador?",
    "options": [
      "Proporcionar energía al procesador.",
      "Conectar dispositivos de almacenamiento.",
      "Transmitir datos entre componentes.",
      "Suministrar energía a la memoria RAM."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Proporcionar energía al procesador.\". El conector de alimentación de 8 pines para el procesador proporciona energía al procesador y es común en placas base de gama alta.",
    "source": "https://es.wikipedia.org/wiki/ATX"
  },
  {
    "id": 121,
    "category": "Almacenamiento",
    "question": "¿Cuál es la función principal de un disco duro (HDD)?",
    "options": [
      "Procesar datos.",
      "Almacenar datos de forma permanente.",
      "Transmitir datos en red.",
      "Mejorar el rendimiento gráfico."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Almacenar datos de forma permanente.\". Un disco duro (HDD) es un dispositivo de almacenamiento que guarda datos de forma permanente utilizando medios magnéticos.",
    "source": "https://es.wikipedia.org/wiki/Disco_duro"
  },
  {
    "id": 122,
    "category": "Almacenamiento",
    "question": "¿Cuál es la tecnología de almacenamiento utilizada en los discos duros tradicionales (HDD)?",
    "options": [
      "Almacenamiento de estado sólido.",
      "Almacenamiento magnético.",
      "Almacenamiento óptico.",
      "Almacenamiento en la nube."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Almacenamiento magnético.\". Los discos duros tradicionales (HDD) utilizan almacenamiento magnético para guardar datos en platos giratorios.",
    "source": "https://es.wikipedia.org/wiki/Disco_duro"
  },
  {
    "id": 123,
    "category": "Almacenamiento",
    "question": "¿Cuál es la función principal de una unidad de estado sólido (SSD)?",
    "options": [
      "Procesar datos.",
      "Almacenar datos de forma permanente utilizando memoria flash.",
      "Transmitir datos en red.",
      "Mejorar el rendimiento gráfico."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Almacenar datos de forma permanente utilizando memoria flash.\". Una unidad de estado sólido (SSD) es un dispositivo de almacenamiento que utiliza memoria flash para guardar datos de forma permanente.",
    "source": "https://es.wikipedia.org/wiki/Unidad_de_estado_sólido"
  },
  {
    "id": 124,
    "category": "Almacenamiento",
    "question": "¿Cuál es la principal ventaja de una unidad de estado sólido (SSD) sobre un disco duro (HDD)?",
    "options": [
      "Mayor capacidad de almacenamiento.",
      "Menor costo por gigabyte.",
      "Mayor velocidad de lectura y escritura.",
      "Mayor durabilidad."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Mayor velocidad de lectura y escritura.\". Las unidades de estado sólido (SSD) ofrecen velocidades de lectura y escritura mucho más rápidas que los discos duros (HDD).",
    "source": "https://es.wikipedia.org/wiki/Unidad_de_estado_sólido"
  },
  {
    "id": 125,
    "category": "Almacenamiento",
    "question": "¿Cuál es la tecnología de almacenamiento utilizada en las unidades de estado sólido (SSD)?",
    "options": [
      "Almacenamiento magnético.",
      "Almacenamiento óptico.",
      "Almacenamiento de estado sólido.",
      "Almacenamiento en la nube."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Almacenamiento de estado sólido.\". Las unidades de estado sólido (SSD) utilizan almacenamiento de estado sólido basado en memoria flash para guardar datos.",
    "source": "https://es.wikipedia.org/wiki/Unidad_de_estado_sólido"
  },
  {
    "id": 126,
    "category": "Almacenamiento",
    "question": "¿Cuál es la función principal de una unidad de disco óptico (CD/DVD/Blu-ray)?",
    "options": [
      "Procesar datos.",
      "Leer y escribir datos en discos ópticos.",
      "Transmitir datos en red.",
      "Mejorar el rendimiento gráfico."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Leer y escribir datos en discos ópticos.\". Una unidad de disco óptico (CD/DVD/Blu-ray) es un dispositivo que lee y escribe datos en discos ópticos utilizando un láser.",
    "source": "https://es.wikipedia.org/wiki/Disco_óptico"
  },
  {
    "id": 127,
    "category": "Almacenamiento",
    "question": "¿Cuál es la tecnología de almacenamiento utilizada en los discos ópticos (CD/DVD/Blu-ray)?",
    "options": [
      "Almacenamiento magnético.",
      "Almacenamiento óptico.",
      "Almacenamiento de estado sólido.",
      "Almacenamiento en la nube."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Almacenamiento óptico.\". Los discos ópticos (CD/DVD/Blu-ray) utilizan almacenamiento óptico para guardar datos mediante la reflexión de un láser en la superficie del disco.",
    "source": "https://es.wikipedia.org/wiki/Disco_óptico"
  },
  {
    "id": 128,
    "category": "Almacenamiento",
    "question": "¿Cuál es la capacidad de almacenamiento de un DVD estándar de una sola capa?",
    "options": [
      "700 MB.",
      "4.7 GB.",
      "25 GB.",
      "50 GB."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"4.7 GB.\". Un DVD estándar de una sola capa tiene una capacidad de almacenamiento de 4.7 GB.",
    "source": "https://es.wikipedia.org/wiki/DVD"
  },
  {
    "id": 129,
    "category": "Almacenamiento",
    "question": "¿Cuál es la capacidad de almacenamiento de un Blu-ray estándar de una sola capa?",
    "options": [
      "700 MB.",
      "4.7 GB.",
      "25 GB.",
      "50 GB."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"25 GB.\". Un Blu-ray estándar de una sola capa tiene una capacidad de almacenamiento de 25 GB.",
    "source": "https://es.wikipedia.org/wiki/Blu-ray"
  },
  {
    "id": 130,
    "category": "Almacenamiento",
    "question": "¿Cuál es la función principal de una memoria USB?",
    "options": [
      "Procesar datos.",
      "Almacenar datos de forma portátil.",
      "Transmitir datos en red.",
      "Mejorar el rendimiento gráfico."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Almacenar datos de forma portátil.\". Una memoria USB es un dispositivo de almacenamiento portátil que utiliza memoria flash para guardar datos.",
    "source": "https://es.wikipedia.org/wiki/Unidad_USB"
  },
  {
    "id": 131,
    "category": "Almacenamiento",
    "question": "¿Cuál es la tecnología de almacenamiento utilizada en las memorias USB?",
    "options": [
      "Almacenamiento magnético.",
      "Almacenamiento óptico.",
      "Almacenamiento de estado sólido.",
      "Almacenamiento en la nube."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Almacenamiento de estado sólido.\". Las memorias USB utilizan almacenamiento de estado sólido basado en memoria flash para guardar datos.",
    "source": "https://es.wikipedia.org/wiki/Unidad_USB"
  },
  {
    "id": 132,
    "category": "Almacenamiento",
    "question": "¿Cuál es la función principal de una tarjeta de memoria (SD, microSD, etc.)?",
    "options": [
      "Procesar datos.",
      "Almacenar datos de forma portátil en dispositivos pequeños.",
      "Transmitir datos en red.",
      "Mejorar el rendimiento gráfico."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Almacenar datos de forma portátil en dispositivos pequeños.\". Las tarjetas de memoria (SD, microSD, etc.) son dispositivos de almacenamiento portátiles que se utilizan en dispositivos pequeños como cámaras, smartphones y tablets.",
    "source": "https://es.wikipedia.org/wiki/Tarjeta_de_memoria"
  },
  {
    "id": 133,
    "category": "Almacenamiento",
    "question": "¿Cuál es la tecnología de almacenamiento utilizada en las tarjetas de memoria (SD, microSD, etc.)?",
    "options": [
      "Almacenamiento magnético.",
      "Almacenamiento óptico.",
      "Almacenamiento de estado sólido.",
      "Almacenamiento en la nube."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Almacenamiento de estado sólido.\". Las tarjetas de memoria (SD, microSD, etc.) utilizan almacenamiento de estado sólido basado en memoria flash para guardar datos.",
    "source": "https://es.wikipedia.org/wiki/Tarjeta_de_memoria"
  },
  {
    "id": 134,
    "category": "Almacenamiento",
    "question": "¿Cuál es la función principal de una unidad de cinta magnética?",
    "options": [
      "Procesar datos.",
      "Realizar copias de seguridad a gran escala.",
      "Transmitir datos en red.",
      "Mejorar el rendimiento gráfico."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Realizar copias de seguridad a gran escala.\". Una unidad de cinta magnética es un dispositivo que se utiliza principalmente para realizar copias de seguridad a gran escala debido a su alta capacidad y bajo costo por gigabyte.",
    "source": "https://es.wikipedia.org/wiki/Cinta_magnética"
  },
  {
    "id": 135,
    "category": "Almacenamiento",
    "question": "¿Cuál es la tecnología de almacenamiento utilizada en las unidades de cinta magnética?",
    "options": [
      "Almacenamiento magnético.",
      "Almacenamiento óptico.",
      "Almacenamiento de estado sólido.",
      "Almacenamiento en la nube."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Almacenamiento magnético.\". Las unidades de cinta magnética utilizan almacenamiento magnético para guardar datos en cintas magnéticas.",
    "source": "https://es.wikipedia.org/wiki/Cinta_magnética"
  },
  {
    "id": 136,
    "category": "Almacenamiento",
    "question": "¿Cuál es la principal ventaja de una unidad de cinta magnética sobre otros tipos de almacenamiento?",
    "options": [
      "Mayor velocidad de acceso.",
      "Mayor capacidad de almacenamiento.",
      "Menor costo por gigabyte.",
      "Mayor durabilidad."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Menor costo por gigabyte.\". Las unidades de cinta magnética tienen un menor costo por gigabyte que otros tipos de almacenamiento, lo que las hace ideales para copias de seguridad a gran escala.",
    "source": "https://es.wikipedia.org/wiki/Cinta_magnética"
  },
  {
    "id": 137,
    "category": "Almacenamiento",
    "question": "¿Cuál es la función principal de un RAID (Redundant Array of Independent Disks)?",
    "options": [
      "Procesar datos.",
      "Combinar múltiples unidades de almacenamiento para mejorar el rendimiento o la fiabilidad.",
      "Transmitir datos en red.",
      "Mejorar el rendimiento gráfico."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Combinar múltiples unidades de almacenamiento para mejorar el rendimiento o la fiabilidad.\". Un RAID (Redundant Array of Independent Disks) es un sistema que combina múltiples unidades de almacenamiento para mejorar el rendimiento, la fiabilidad o ambos.",
    "source": "https://es.wikipedia.org/wiki/RAID"
  },
  {
    "id": 138,
    "category": "Almacenamiento",
    "question": "¿Cuál es la característica principal de un RAID 0?",
    "options": [
      "Redundancia de datos.",
      "Mayor velocidad de lectura y escritura.",
      "Mayor fiabilidad.",
      "Menor costo."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Mayor velocidad de lectura y escritura.\". Un RAID 0 combina múltiples unidades de almacenamiento para mejorar la velocidad de lectura y escritura, pero no ofrece redundancia de datos.",
    "source": "https://es.wikipedia.org/wiki/RAID"
  },
  {
    "id": 139,
    "category": "Almacenamiento",
    "question": "¿Cuál es la característica principal de un RAID 1?",
    "options": [
      "Redundancia de datos.",
      "Mayor velocidad de lectura y escritura.",
      "Mayor capacidad de almacenamiento.",
      "Menor costo."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Redundancia de datos.\". Un RAID 1 duplica los datos en múltiples unidades de almacenamiento para ofrecer redundancia de datos, pero no mejora la velocidad de lectura y escritura ni aumenta la capacidad de almacenamiento.",
    "source": "https://es.wikipedia.org/wiki/RAID"
  },
  {
    "id": 140,
    "category": "Almacenamiento",
    "question": "¿Cuál es la característica principal de un RAID 5?",
    "options": [
      "Redundancia de datos.",
      "Mayor velocidad de lectura y escritura.",
      "Mayor capacidad de almacenamiento.",
      "Menor costo."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Redundancia de datos.\". Un RAID 5 distribuye los datos y la información de paridad en múltiples unidades de almacenamiento para ofrecer redundancia de datos con un buen equilibrio entre rendimiento y capacidad de almacenamiento.",
    "source": "https://es.wikipedia.org/wiki/RAID"
  },
  {
    "id": 141,
    "category": "Almacenamiento",
    "question": "¿Cuál es la característica principal de un RAID 10?",
    "options": [
      "Redundancia de datos.",
      "Mayor velocidad de lectura y escritura.",
      "Mayor capacidad de almacenamiento.",
      "Menor costo."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Redundancia de datos.\". Un RAID 10 combina las características de un RAID 0 y un RAID 1 para ofrecer redundancia de datos y mayor velocidad de lectura y escritura, pero requiere al menos cuatro unidades de almacenamiento.",
    "source": "https://es.wikipedia.org/wiki/RAID"
  },
  {
    "id": 142,
    "category": "Almacenamiento",
    "question": "¿Cuál es la función principal de un controlador de almacenamiento?",
    "options": [
      "Procesar datos.",
      "Gestionar el acceso a las unidades de almacenamiento.",
      "Transmitir datos en red.",
      "Mejorar el rendimiento gráfico."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Gestionar el acceso a las unidades de almacenamiento.\". Un controlador de almacenamiento es un dispositivo que gestiona el acceso a las unidades de almacenamiento y puede ofrecer funciones adicionales como RAID.",
    "source": "https://es.wikipedia.org/wiki/Controlador_de_almacenamiento"
  },
  {
    "id": 143,
    "category": "Almacenamiento",
    "question": "¿Cuál es la función principal de un controlador SATA?",
    "options": [
      "Procesar datos.",
      "Gestionar el acceso a unidades SATA.",
      "Transmitir datos en red.",
      "Mejorar el rendimiento gráfico."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Gestionar el acceso a unidades SATA.\". Un controlador SATA es un dispositivo que gestiona el acceso a unidades SATA como discos duros y unidades SSD.",
    "source": "https://es.wikipedia.org/wiki/Serial_ATA"
  },
  {
    "id": 144,
    "category": "Almacenamiento",
    "question": "¿Cuál es la función principal de un controlador NVMe?",
    "options": [
      "Procesar datos.",
      "Gestionar el acceso a unidades NVMe.",
      "Transmitir datos en red.",
      "Mejorar el rendimiento gráfico."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Gestionar el acceso a unidades NVMe.\". Un controlador NVMe es un dispositivo que gestiona el acceso a unidades NVMe (Non-Volatile Memory Express) que ofrecen altas velocidades de lectura y escritura.",
    "source": "https://es.wikipedia.org/wiki/NVMe"
  },
  {
    "id": 145,
    "category": "Almacenamiento",
    "question": "¿Cuál es la principal ventaja de las unidades NVMe sobre las unidades SATA?",
    "options": [
      "Mayor capacidad de almacenamiento.",
      "Menor costo por gigabyte.",
      "Mayor velocidad de lectura y escritura.",
      "Mayor durabilidad."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Mayor velocidad de lectura y escritura.\". Las unidades NVMe ofrecen velocidades de lectura y escritura mucho más rápidas que las unidades SATA debido a su conexión directa a través de PCIe.",
    "source": "https://es.wikipedia.org/wiki/NVMe"
  },
  {
    "id": 146,
    "category": "Almacenamiento",
    "question": "¿Cuál es la función principal de una caché de disco?",
    "options": [
      "Procesar datos.",
      "Almacenar temporalmente datos frecuentemente accedidos para mejorar el rendimiento.",
      "Transmitir datos en red.",
      "Mejorar el rendimiento gráfico."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Almacenar temporalmente datos frecuentemente accedidos para mejorar el rendimiento.\". Una caché de disco es una memoria rápida que almacena temporalmente datos frecuentemente accedidos para mejorar el rendimiento del sistema.",
    "source": "https://es.wikipedia.org/wiki/Caché_de_disco"
  },
  {
    "id": 147,
    "category": "Almacenamiento",
    "question": "¿Cuál es la función principal de la tecnología SMART (Self-Monitoring, Analysis and Reporting Technology)?",
    "options": [
      "Procesar datos.",
      "Monitorear el estado de las unidades de almacenamiento para prevenir fallos.",
      "Transmitir datos en red.",
      "Mejorar el rendimiento gráfico."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Monitorear el estado de las unidades de almacenamiento para prevenir fallos.\". La tecnología SMART (Self-Monitoring, Analysis and Reporting Technology) monitorea el estado de las unidades de almacenamiento para predecir y prevenir fallos.",
    "source": "https://es.wikipedia.org/wiki/S.M.A.R.T."
  },
  {
    "id": 148,
    "category": "Almacenamiento",
    "question": "¿Cuál es la función principal de la tecnología de cifrado de disco?",
    "options": [
      "Procesar datos.",
      "Proteger los datos almacenados mediante cifrado.",
      "Transmitir datos en red.",
      "Mejorar el rendimiento gráfico."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Proteger los datos almacenados mediante cifrado.\". La tecnología de cifrado de disco protege los datos almacenados mediante cifrado para evitar el acceso no autorizado.",
    "source": "https://es.wikipedia.org/wiki/Cifrado_de_disco"
  },
  {
    "id": 149,
    "category": "Almacenamiento",
    "question": "¿Cuál es la función principal de la tecnología de compresión de datos?",
    "options": [
      "Procesar datos.",
      "Reducir el espacio necesario para almacenar datos.",
      "Transmitir datos en red.",
      "Mejorar el rendimiento gráfico."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Reducir el espacio necesario para almacenar datos.\". La tecnología de compresión de datos reduce el espacio necesario para almacenar datos mediante algoritmos de compresión.",
    "source": "https://es.wikipedia.org/wiki/Compresión_de_datos"
  },
  {
    "id": 150,
    "category": "Almacenamiento",
    "question": "¿Cuál es la función principal de la tecnología de deduplicación de datos?",
    "options": [
      "Procesar datos.",
      "Eliminar datos duplicados para ahorrar espacio de almacenamiento.",
      "Transmitir datos en red.",
      "Mejorar el rendimiento gráfico."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Eliminar datos duplicados para ahorrar espacio de almacenamiento.\". La tecnología de deduplicación de datos elimina datos duplicados para ahorrar espacio de almacenamiento.",
    "source": "https://es.wikipedia.org/wiki/Deduplicación_de_datos"
  },
  {
    "id": 151,
    "category": "Almacenamiento",
    "question": "¿Cuál es la función principal de la tecnología de virtualización de almacenamiento?",
    "options": [
      "Procesar datos.",
      "Abstraer el almacenamiento físico para facilitar su gestión.",
      "Transmitir datos en red.",
      "Mejorar el rendimiento gráfico."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Abstraer el almacenamiento físico para facilitar su gestión.\". La tecnología de virtualización de almacenamiento abstrae el almacenamiento físico para facilitar su gestión y optimizar su utilización.",
    "source": "https://es.wikipedia.org/wiki/Virtualización_de_almacenamiento"
  },
  {
    "id": 152,
    "category": "Almacenamiento",
    "question": "¿Cuál es la función principal de la tecnología de almacenamiento en la nube?",
    "options": [
      "Procesar datos.",
      "Almacenar datos en servidores remotos accesibles a través de internet.",
      "Transmitir datos en red.",
      "Mejorar el rendimiento gráfico."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Almacenar datos en servidores remotos accesibles a través de internet.\". La tecnología de almacenamiento en la nube permite almacenar datos en servidores remotos accesibles a través de internet.",
    "source": "https://es.wikipedia.org/wiki/Almacenamiento_en_la_nube"
  },
  {
    "id": 153,
    "category": "Almacenamiento",
    "question": "¿Cuál es la principal ventaja del almacenamiento en la nube sobre el almacenamiento local?",
    "options": [
      "Mayor velocidad de acceso.",
      "Mayor capacidad de almacenamiento.",
      "Accesibilidad desde cualquier lugar con conexión a internet.",
      "Menor costo."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Accesibilidad desde cualquier lugar con conexión a internet.\". El almacenamiento en la nube permite acceder a los datos desde cualquier lugar con conexión a internet.",
    "source": "https://es.wikipedia.org/wiki/Almacenamiento_en_la_nube"
  },
  {
    "id": 154,
    "category": "Almacenamiento",
    "question": "¿Cuál es la función principal de la tecnología de almacenamiento híbrido?",
    "options": [
      "Procesar datos.",
      "Combinar almacenamiento de estado sólido y magnético para equilibrar rendimiento y capacidad.",
      "Transmitir datos en red.",
      "Mejorar el rendimiento gráfico."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Combinar almacenamiento de estado sólido y magnético para equilibrar rendimiento y capacidad.\". La tecnología de almacenamiento híbrido combina almacenamiento de estado sólido y magnético para equilibrar rendimiento y capacidad.",
    "source": "https://es.wikipedia.org/wiki/Almacenamiento_híbrido"
  },
  {
    "id": 155,
    "category": "Almacenamiento",
    "question": "¿Cuál es la función principal de la tecnología de almacenamiento en caché?",
    "options": [
      "Procesar datos.",
      "Utilizar una memoria rápida para almacenar temporalmente datos frecuentemente accedidos.",
      "Transmitir datos en red.",
      "Mejorar el rendimiento gráfico."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Utilizar una memoria rápida para almacenar temporalmente datos frecuentemente accedidos.\". La tecnología de almacenamiento en caché utiliza una memoria rápida para almacenar temporalmente datos frecuentemente accedidos y mejorar el rendimiento.",
    "source": "https://es.wikipedia.org/wiki/Caché_de_disco"
  },
  {
    "id": 156,
    "category": "Almacenamiento",
    "question": "¿Cuál es la función principal de la tecnología de almacenamiento jerárquico (HSM)?",
    "options": [
      "Procesar datos.",
      "Mover automáticamente datos entre diferentes niveles de almacenamiento según su frecuencia de acceso.",
      "Transmitir datos en red.",
      "Mejorar el rendimiento gráfico."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Mover automáticamente datos entre diferentes niveles de almacenamiento según su frecuencia de acceso.\". La tecnología de almacenamiento jerárquico (HSM) mueve automáticamente datos entre diferentes niveles de almacenamiento según su frecuencia de acceso para optimizar el rendimiento y el costo.",
    "source": "https://es.wikipedia.org/wiki/Gestión_de_almacenamiento_jerárquico"
  },
  {
    "id": 157,
    "category": "Almacenamiento",
    "question": "¿Cuál es la función principal de la tecnología de almacenamiento de objetos?",
    "options": [
      "Procesar datos.",
      "Almacenar datos como objetos con metadatos para facilitar su gestión.",
      "Transmitir datos en red.",
      "Mejorar el rendimiento gráfico."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Almacenar datos como objetos con metadatos para facilitar su gestión.\". La tecnología de almacenamiento de objetos almacena datos como objetos con metadatos para facilitar su gestión y escalabilidad.",
    "source": "https://es.wikipedia.org/wiki/Almacenamiento_de_objetos"
  },
  {
    "id": 158,
    "category": "Almacenamiento",
    "question": "¿Cuál es la función principal de la tecnología de almacenamiento en bloque?",
    "options": [
      "Procesar datos.",
      "Dividir el almacenamiento en bloques para facilitar su gestión.",
      "Transmitir datos en red.",
      "Mejorar el rendimiento gráfico."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Dividir el almacenamiento en bloques para facilitar su gestión.\". La tecnología de almacenamiento en bloque divide el almacenamiento en bloques para facilitar su gestión y optimizar el rendimiento.",
    "source": "https://es.wikipedia.org/wiki/Almacenamiento_en_bloque"
  },
  {
    "id": 159,
    "category": "Almacenamiento",
    "question": "¿Cuál es la función principal de la tecnología de almacenamiento en archivo?",
    "options": [
      "Procesar datos.",
      "Organizar los datos en archivos y carpetas para facilitar su gestión.",
      "Transmitir datos en red.",
      "Mejorar el rendimiento gráfico."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Organizar los datos en archivos y carpetas para facilitar su gestión.\". La tecnología de almacenamiento en archivo organiza los datos en archivos y carpetas para facilitar su gestión y acceso.",
    "source": "https://es.wikipedia.org/wiki/Sistema_de_archivos"
  },
  {
    "id": 160,
    "category": "Almacenamiento",
    "question": "¿Cuál es la función principal de la tecnología de almacenamiento definido por software (SDS)?",
    "options": [
      "Procesar datos.",
      "Abstraer el almacenamiento físico mediante software para facilitar su gestión.",
      "Transmitir datos en red.",
      "Mejorar el rendimiento gráfico."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Abstraer el almacenamiento físico mediante software para facilitar su gestión.\". La tecnología de almacenamiento definido por software (SDS) abstrae el almacenamiento físico mediante software para facilitar su gestión y optimizar su utilización.",
    "source": "https://es.wikipedia.org/wiki/Almacenamiento_definido_por_software"
  },
  {
    "id": 161,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal del procesador (CPU)?",
    "options": [
      "Almacenar datos.",
      "Procesar instrucciones y realizar cálculos.",
      "Transmitir datos en red.",
      "Mostrar imágenes en pantalla."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Procesar instrucciones y realizar cálculos.\". El procesador (CPU) es el componente principal de un ordenador que procesa instrucciones y realiza cálculos.",
    "source": "https://es.wikipedia.org/wiki/Unidad_central_de_procesamiento"
  },
  {
    "id": 162,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal de la memoria RAM?",
    "options": [
      "Almacenar datos de forma permanente.",
      "Almacenar temporalmente datos y programas en ejecución.",
      "Procesar instrucciones y realizar cálculos.",
      "Mostrar imágenes en pantalla."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Almacenar temporalmente datos y programas en ejecución.\". La memoria RAM es una memoria volátil que almacena temporalmente datos y programas en ejecución para que el procesador pueda acceder a ellos rápidamente.",
    "source": "https://es.wikipedia.org/wiki/Memoria_de_acceso_aleatorio"
  },
  {
    "id": 163,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal de la tarjeta gráfica (GPU)?",
    "options": [
      "Almacenar datos.",
      "Procesar y renderizar gráficos.",
      "Transmitir datos en red.",
      "Procesar instrucciones y realizar cálculos."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Procesar y renderizar gráficos.\". La tarjeta gráfica (GPU) es un componente que procesa y renderiza gráficos para mostrarlos en pantalla.",
    "source": "https://es.wikipedia.org/wiki/Tarjeta_gráfica"
  },
  {
    "id": 164,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal de la placa base?",
    "options": [
      "Almacenar datos.",
      "Procesar instrucciones y realizar cálculos.",
      "Conectar todos los componentes del ordenador.",
      "Mostrar imágenes en pantalla."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Conectar todos los componentes del ordenador.\". La placa base es el componente principal que conecta todos los componentes del ordenador y permite la comunicación entre ellos.",
    "source": "https://es.wikipedia.org/wiki/Placa_base"
  },
  {
    "id": 165,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal de la fuente de alimentación?",
    "options": [
      "Almacenar datos.",
      "Procesar instrucciones y realizar cálculos.",
      "Suministrar energía eléctrica a los componentes del ordenador.",
      "Mostrar imágenes en pantalla."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Suministrar energía eléctrica a los componentes del ordenador.\". La fuente de alimentación es un componente que suministra energía eléctrica a los componentes del ordenador.",
    "source": "https://es.wikipedia.org/wiki/Fuente_de_alimentación"
  },
  {
    "id": 166,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal del disipador de calor?",
    "options": [
      "Almacenar datos.",
      "Procesar instrucciones y realizar cálculos.",
      "Disipar el calor generado por los componentes del ordenador.",
      "Mostrar imágenes en pantalla."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Disipar el calor generado por los componentes del ordenador.\". El disipador de calor es un componente que disipa el calor generado por los componentes del ordenador para mantenerlos a una temperatura adecuada.",
    "source": "https://es.wikipedia.org/wiki/Disipador_de_calor"
  },
  {
    "id": 167,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal del ventilador del ordenador?",
    "options": [
      "Almacenar datos.",
      "Procesar instrucciones y realizar cálculos.",
      "Refrigerar los componentes del ordenador mediante el flujo de aire.",
      "Mostrar imágenes en pantalla."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Refrigerar los componentes del ordenador mediante el flujo de aire.\". El ventilador del ordenador es un componente que refrigera los componentes del ordenador mediante el flujo de aire.",
    "source": "https://es.wikipedia.org/wiki/Ventilador_de_computadora"
  },
  {
    "id": 168,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal de la tarjeta de sonido?",
    "options": [
      "Almacenar datos.",
      "Procesar y reproducir sonido.",
      "Transmitir datos en red.",
      "Procesar instrucciones y realizar cálculos."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Procesar y reproducir sonido.\". La tarjeta de sonido es un componente que procesa y reproduce sonido en un ordenador.",
    "source": "https://es.wikipedia.org/wiki/Tarjeta_de_sonido"
  },
  {
    "id": 169,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal de la tarjeta de red?",
    "options": [
      "Almacenar datos.",
      "Procesar instrucciones y realizar cálculos.",
      "Permitir la conexión a redes de computadoras.",
      "Mostrar imágenes en pantalla."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Permitir la conexión a redes de computadoras.\". La tarjeta de red es un componente que permite la conexión a redes de computadoras.",
    "source": "https://es.wikipedia.org/wiki/Tarjeta_de_red"
  },
  {
    "id": 170,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal del BIOS/UEFI?",
    "options": [
      "Almacenar datos.",
      "Procesar instrucciones y realizar cálculos.",
      "Iniciar el sistema y gestionar el hardware básico.",
      "Mostrar imágenes en pantalla."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Iniciar el sistema y gestionar el hardware básico.\". El BIOS/UEFI es un firmware que inicia el sistema y gestiona el hardware básico durante el proceso de arranque.",
    "source": "https://es.wikipedia.org/wiki/BIOS"
  },
  {
    "id": 171,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal de la memoria caché?",
    "options": [
      "Almacenar datos de forma permanente.",
      "Almacenar temporalmente datos frecuentemente accedidos para mejorar el rendimiento.",
      "Procesar instrucciones y realizar cálculos.",
      "Mostrar imágenes en pantalla."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Almacenar temporalmente datos frecuentemente accedidos para mejorar el rendimiento.\". La memoria caché es una memoria rápida que almacena temporalmente datos frecuentemente accedidos para mejorar el rendimiento del sistema.",
    "source": "https://es.wikipedia.org/wiki/Memoria_caché"
  },
  {
    "id": 172,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal del chipset de la placa base?",
    "options": [
      "Almacenar datos.",
      "Procesar instrucciones y realizar cálculos.",
      "Gestionar la comunicación entre los componentes de la placa base.",
      "Mostrar imágenes en pantalla."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Gestionar la comunicación entre los componentes de la placa base.\". El chipset de la placa base es un conjunto de circuitos que gestionan la comunicación entre los componentes de la placa base.",
    "source": "https://es.wikipedia.org/wiki/Chipset"
  },
  {
    "id": 173,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal del reloj del sistema?",
    "options": [
      "Almacenar datos.",
      "Procesar instrucciones y realizar cálculos.",
      "Sincronizar las operaciones de los componentes del ordenador.",
      "Mostrar imágenes en pantalla."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Sincronizar las operaciones de los componentes del ordenador.\". El reloj del sistema es un componente que genera señales de reloj para sincronizar las operaciones de los componentes del ordenador.",
    "source": "https://es.wikipedia.org/wiki/Señal_de_reloj"
  },
  {
    "id": 174,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal de la batería CMOS?",
    "options": [
      "Almacenar datos.",
      "Procesar instrucciones y realizar cálculos.",
      "Mantener la configuración del BIOS/UEFI cuando el sistema está apagado.",
      "Mostrar imágenes en pantalla."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Mantener la configuración del BIOS/UEFI cuando el sistema está apagado.\". La batería CMOS proporciona energía para mantener la configuración del BIOS/UEFI cuando el sistema está apagado.",
    "source": "https://es.wikipedia.org/wiki/CMOS"
  },
  {
    "id": 175,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal de los jumpers de la placa base?",
    "options": [
      "Almacenar datos.",
      "Procesar instrucciones y realizar cálculos.",
      "Configurar opciones de la placa base mediante puentes.",
      "Mostrar imágenes en pantalla."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Configurar opciones de la placa base mediante puentes.\". Los jumpers de la placa base son pequeños puentes que permiten configurar opciones de la placa base.",
    "source": "https://es.wikipedia.org/wiki/Jumper_(informática)"
  },
  {
    "id": 176,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal de los interruptores DIP de la placa base?",
    "options": [
      "Almacenar datos.",
      "Procesar instrucciones y realizar cálculos.",
      "Configurar opciones de la placa base mediante interruptores.",
      "Mostrar imágenes en pantalla."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Configurar opciones de la placa base mediante interruptores.\". Los interruptores DIP de la placa base son pequeños interruptores que permiten configurar opciones de la placa base.",
    "source": "https://es.wikipedia.org/wiki/Interruptor_DIP"
  },
  {
    "id": 177,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal de los condensadores de la placa base?",
    "options": [
      "Almacenar datos.",
      "Procesar instrucciones y realizar cálculos.",
      "Almacenar y liberar energía para estabilizar el voltaje.",
      "Mostrar imágenes en pantalla."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Almacenar y liberar energía para estabilizar el voltaje.\". Los condensadores de la placa base son componentes que almacenan y liberan energía para estabilizar el voltaje.",
    "source": "https://es.wikipedia.org/wiki/Condensador_eléctrico"
  },
  {
    "id": 178,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal de los inductores de la placa base?",
    "options": [
      "Almacenar datos.",
      "Procesar instrucciones y realizar cálculos.",
      "Almacenar energía en un campo magnético para filtrar señales.",
      "Mostrar imágenes en pantalla."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Almacenar energía en un campo magnético para filtrar señales.\". Los inductores de la placa base son componentes que almacenan energía en un campo magnético para filtrar señales.",
    "source": "https://es.wikipedia.org/wiki/Inductor"
  },
  {
    "id": 179,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal de los resistores de la placa base?",
    "options": [
      "Almacenar datos.",
      "Procesar instrucciones y realizar cálculos.",
      "Limitar el flujo de corriente eléctrica.",
      "Mostrar imágenes en pantalla."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Limitar el flujo de corriente eléctrica.\". Los resistores de la placa base son componentes que limitan el flujo de corriente eléctrica.",
    "source": "https://es.wikipedia.org/wiki/Resistencia_eléctrica"
  },
  {
    "id": 180,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal de los diodos de la placa base?",
    "options": [
      "Almacenar datos.",
      "Procesar instrucciones y realizar cálculos.",
      "Permitir el flujo de corriente en una sola dirección.",
      "Mostrar imágenes en pantalla."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Permitir el flujo de corriente en una sola dirección.\". Los diodos de la placa base son componentes que permiten el flujo de corriente en una sola dirección.",
    "source": "https://es.wikipedia.org/wiki/Diodo"
  },
  {
    "id": 181,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal de los transistores de la placa base?",
    "options": [
      "Almacenar datos.",
      "Procesar instrucciones y realizar cálculos.",
      "Amplificar o conmutar señales electrónicas.",
      "Mostrar imágenes en pantalla."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Amplificar o conmutar señales electrónicas.\". Los transistores de la placa base son componentes que amplifican o conmutan señales electrónicas.",
    "source": "https://es.wikipedia.org/wiki/Transistor"
  },
  {
    "id": 182,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal de los circuitos integrados de la placa base?",
    "options": [
      "Almacenar datos.",
      "Procesar instrucciones y realizar cálculos.",
      "Realizar funciones específicas mediante circuitos electrónicos miniaturizados.",
      "Mostrar imágenes en pantalla."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Realizar funciones específicas mediante circuitos electrónicos miniaturizados.\". Los circuitos integrados de la placa base son componentes que realizan funciones específicas mediante circuitos electrónicos miniaturizados.",
    "source": "https://es.wikipedia.org/wiki/Circuito_integrado"
  },
  {
    "id": 183,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal de los zócalos de la placa base?",
    "options": [
      "Almacenar datos.",
      "Procesar instrucciones y realizar cálculos.",
      "Permitir la conexión de componentes como el procesador y la memoria RAM.",
      "Mostrar imágenes en pantalla."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Permitir la conexión de componentes como el procesador y la memoria RAM.\". Los zócalos de la placa base son conectores que permiten la conexión de componentes como el procesador y la memoria RAM.",
    "source": "https://es.wikipedia.org/wiki/Zócalo_de_CPU"
  },
  {
    "id": 184,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal de las ranuras de expansión de la placa base?",
    "options": [
      "Almacenar datos.",
      "Procesar instrucciones y realizar cálculos.",
      "Permitir la conexión de tarjetas de expansión como tarjetas gráficas y de sonido.",
      "Mostrar imágenes en pantalla."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Permitir la conexión de tarjetas de expansión como tarjetas gráficas y de sonido.\". Las ranuras de expansión de la placa base son conectores que permiten la conexión de tarjetas de expansión como tarjetas gráficas y de sonido.",
    "source": "https://es.wikipedia.org/wiki/Ranura_de_expansión"
  },
  {
    "id": 185,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal de los puertos de la placa base?",
    "options": [
      "Almacenar datos.",
      "Procesar instrucciones y realizar cálculos.",
      "Permitir la conexión de dispositivos externos.",
      "Mostrar imágenes en pantalla."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Permitir la conexión de dispositivos externos.\". Los puertos de la placa base son conectores que permiten la conexión de dispositivos externos.",
    "source": "https://es.wikipedia.org/wiki/Puerto_de_computadora"
  },
  {
    "id": 186,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal de los conectores de la placa base?",
    "options": [
      "Almacenar datos.",
      "Procesar instrucciones y realizar cálculos.",
      "Permitir la conexión de cables y dispositivos internos.",
      "Mostrar imágenes en pantalla."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Permitir la conexión de cables y dispositivos internos.\". Los conectores de la placa base son elementos que permiten la conexión de cables y dispositivos internos.",
    "source": "https://es.wikipedia.org/wiki/Conector_eléctrico"
  },
  {
    "id": 187,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal de los LED de la placa base?",
    "options": [
      "Almacenar datos.",
      "Procesar instrucciones y realizar cálculos.",
      "Indicar el estado de funcionamiento de la placa base.",
      "Mostrar imágenes en pantalla."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Indicar el estado de funcionamiento de la placa base.\". Los LED de la placa base son indicadores luminosos que muestran el estado de funcionamiento de la placa base.",
    "source": "https://es.wikipedia.org/wiki/Diodo_emisor_de_luz"
  },
  {
    "id": 188,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal de los botones de la placa base?",
    "options": [
      "Almacenar datos.",
      "Procesar instrucciones y realizar cálculos.",
      "Permitir realizar acciones como encender o reiniciar el sistema.",
      "Mostrar imágenes en pantalla."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Permitir realizar acciones como encender o reiniciar el sistema.\". Los botones de la placa base son elementos que permiten realizar acciones como encender o reiniciar el sistema.",
    "source": "https://es.wikipedia.org/wiki/Botón_(informática)"
  },
  {
    "id": 189,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal de los sensores de la placa base?",
    "options": [
      "Almacenar datos.",
      "Procesar instrucciones y realizar cálculos.",
      "Medir parámetros como la temperatura y la velocidad de los ventiladores.",
      "Mostrar imágenes en pantalla."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Medir parámetros como la temperatura y la velocidad de los ventiladores.\". Los sensores de la placa base son componentes que miden parámetros como la temperatura y la velocidad de los ventiladores.",
    "source": "https://es.wikipedia.org/wiki/Sensor"
  },
  {
    "id": 190,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal de los puentes de la placa base?",
    "options": [
      "Almacenar datos.",
      "Procesar instrucciones y realizar cálculos.",
      "Conectar dos puntos del circuito para configurar opciones.",
      "Mostrar imágenes en pantalla."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Conectar dos puntos del circuito para configurar opciones.\". Los puentes de la placa base son elementos que conectan dos puntos del circuito para configurar opciones.",
    "source": "https://es.wikipedia.org/wiki/Jumper_(informática)"
  },
  {
    "id": 191,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal de los interruptores de la placa base?",
    "options": [
      "Almacenar datos.",
      "Procesar instrucciones y realizar cálculos.",
      "Permitir o interrumpir el flujo de corriente para configurar opciones.",
      "Mostrar imágenes en pantalla."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Permitir o interrumpir el flujo de corriente para configurar opciones.\". Los interruptores de la placa base son elementos que permiten o interrumpen el flujo de corriente para configurar opciones.",
    "source": "https://es.wikipedia.org/wiki/Interruptor"
  },
  {
    "id": 192,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal de los fusibles de la placa base?",
    "options": [
      "Almacenar datos.",
      "Procesar instrucciones y realizar cálculos.",
      "Proteger los componentes contra sobrecorrientes.",
      "Mostrar imágenes en pantalla."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Proteger los componentes contra sobrecorrientes.\". Los fusibles de la placa base son componentes que protegen los componentes contra sobrecorrientes.",
    "source": "https://es.wikipedia.org/wiki/Fusible"
  },
  {
    "id": 193,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal de los bobinas de la placa base?",
    "options": [
      "Almacenar datos.",
      "Procesar instrucciones y realizar cálculos.",
      "Almacenar energía en un campo magnético para filtrar señales.",
      "Mostrar imágenes en pantalla."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Almacenar energía en un campo magnético para filtrar señales.\". Las bobinas de la placa base son componentes que almacenan energía en un campo magnético para filtrar señales.",
    "source": "https://es.wikipedia.org/wiki/Inductor"
  },
  {
    "id": 194,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal de los cristales de cuarzo de la placa base?",
    "options": [
      "Almacenar datos.",
      "Procesar instrucciones y realizar cálculos.",
      "Generar señales de reloj precisas para sincronizar las operaciones.",
      "Mostrar imágenes en pantalla."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Generar señales de reloj precisas para sincronizar las operaciones.\". Los cristales de cuarzo de la placa base son componentes que generan señales de reloj precisas para sincronizar las operaciones.",
    "source": "https://es.wikipedia.org/wiki/Oscilador_de_cristal_de_cuarzo"
  },
  {
    "id": 195,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal de los reguladores de voltaje de la placa base?",
    "options": [
      "Almacenar datos.",
      "Procesar instrucciones y realizar cálculos.",
      "Mantener un voltaje constante para los componentes.",
      "Mostrar imágenes en pantalla."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Mantener un voltaje constante para los componentes.\". Los reguladores de voltaje de la placa base son componentes que mantienen un voltaje constante para los componentes.",
    "source": "https://es.wikipedia.org/wiki/Regulador_de_voltaje"
  },
  {
    "id": 196,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal de los disipadores de calor de la placa base?",
    "options": [
      "Almacenar datos.",
      "Procesar instrucciones y realizar cálculos.",
      "Disipar el calor generado por los componentes.",
      "Mostrar imágenes en pantalla."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Disipar el calor generado por los componentes.\". Los disipadores de calor de la placa base son componentes que disipan el calor generado por los componentes.",
    "source": "https://es.wikipedia.org/wiki/Disipador_de_calor"
  },
  {
    "id": 197,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal de los tubos de calor de la placa base?",
    "options": [
      "Almacenar datos.",
      "Procesar instrucciones y realizar cálculos.",
      "Transferir el calor de los componentes a los disipadores.",
      "Mostrar imágenes en pantalla."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Transferir el calor de los componentes a los disipadores.\". Los tubos de calor de la placa base son componentes que transfieren el calor de los componentes a los disipadores.",
    "source": "https://es.wikipedia.org/wiki/Tubo_de_calor"
  },
  {
    "id": 198,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal de las pastas térmicas de la placa base?",
    "options": [
      "Almacenar datos.",
      "Procesar instrucciones y realizar cálculos.",
      "Mejorar la transferencia de calor entre los componentes y los disipadores.",
      "Mostrar imágenes en pantalla."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Mejorar la transferencia de calor entre los componentes y los disipadores.\". Las pastas térmicas de la placa base son compuestos que mejoran la transferencia de calor entre los componentes y los disipadores.",
    "source": "https://es.wikipedia.org/wiki/Pasta_térmica"
  },
  {
    "id": 199,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal de los ventiladores de la placa base?",
    "options": [
      "Almacenar datos.",
      "Procesar instrucciones y realizar cálculos.",
      "Refrigerar los componentes mediante el flujo de aire.",
      "Mostrar imágenes en pantalla."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Refrigerar los componentes mediante el flujo de aire.\". Los ventiladores de la placa base son componentes que refrigeran los componentes mediante el flujo de aire.",
    "source": "https://es.wikipedia.org/wiki/Ventilador_de_computadora"
  },
  {
    "id": 200,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal de las cámaras de refrigeración líquida de la placa base?",
    "options": [
      "Almacenar datos.",
      "Procesar instrucciones y realizar cálculos.",
      "Refrigerar los componentes mediante líquido refrigerante.",
      "Mostrar imágenes en pantalla."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Refrigerar los componentes mediante líquido refrigerante.\". Las cámaras de refrigeración líquida de la placa base son sistemas que refrigeran los componentes mediante líquido refrigerante.",
    "source": "https://es.wikipedia.org/wiki/Refrigeración_líquida_(informática)"
  },
  {
    "id": 201,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal de la memoria caché L1?",
    "options": [
      "Almacenar datos de forma permanente.",
      "Almacenar temporalmente datos frecuentemente accedidos por el procesador.",
      "Procesar instrucciones y realizar cálculos.",
      "Mostrar imágenes en pantalla."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Almacenar temporalmente datos frecuentemente accedidos por el procesador.\". La memoria caché L1 es la memoria caché más rápida y más cercana al procesador, que almacena temporalmente datos frecuentemente accedidos por el procesador.",
    "source": "https://es.wikipedia.org/wiki/Memoria_caché"
  },
  {
    "id": 202,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal de la memoria caché L2?",
    "options": [
      "Almacenar datos de forma permanente.",
      "Almacenar temporalmente datos frecuentemente accedidos por el procesador.",
      "Procesar instrucciones y realizar cálculos.",
      "Mostrar imágenes en pantalla."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Almacenar temporalmente datos frecuentemente accedidos por el procesador.\". La memoria caché L2 es una memoria caché más grande que la L1 pero más lenta, que almacena temporalmente datos frecuentemente accedidos por el procesador.",
    "source": "https://es.wikipedia.org/wiki/Memoria_caché"
  },
  {
    "id": 203,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal de la memoria caché L3?",
    "options": [
      "Almacenar datos de forma permanente.",
      "Almacenar temporalmente datos frecuentemente accedidos por el procesador.",
      "Procesar instrucciones y realizar cálculos.",
      "Mostrar imágenes en pantalla."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Almacenar temporalmente datos frecuentemente accedidos por el procesador.\". La memoria caché L3 es la memoria caché más grande pero más lenta, compartida por todos los núcleos del procesador, que almacena temporalmente datos frecuentemente accedidos por el procesador.",
    "source": "https://es.wikipedia.org/wiki/Memoria_caché"
  },
  {
    "id": 204,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal de la memoria virtual?",
    "options": [
      "Almacenar datos de forma permanente.",
      "Utilizar parte del disco duro como extensión de la memoria RAM.",
      "Procesar instrucciones y realizar cálculos.",
      "Mostrar imágenes en pantalla."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Utilizar parte del disco duro como extensión de la memoria RAM.\". La memoria virtual es una técnica que utiliza parte del disco duro como extensión de la memoria RAM cuando esta es insuficiente.",
    "source": "https://es.wikipedia.org/wiki/Memoria_virtual"
  },
  {
    "id": 205,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal de la memoria ROM?",
    "options": [
      "Almacenar datos de forma permanente que no pueden ser modificados.",
      "Almacenar temporalmente datos y programas en ejecución.",
      "Procesar instrucciones y realizar cálculos.",
      "Mostrar imágenes en pantalla."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Almacenar datos de forma permanente que no pueden ser modificados.\". La memoria ROM es una memoria de solo lectura que almacena datos de forma permanente que no pueden ser modificados.",
    "source": "https://es.wikipedia.org/wiki/Memoria_de_solo_lectura"
  },
  {
    "id": 206,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal de la memoria PROM?",
    "options": [
      "Almacenar datos de forma permanente que pueden ser programados una sola vez.",
      "Almacenar temporalmente datos y programas en ejecución.",
      "Procesar instrucciones y realizar cálculos.",
      "Mostrar imágenes en pantalla."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Almacenar datos de forma permanente que pueden ser programados una sola vez.\". La memoria PROM es una memoria programable de solo lectura que almacena datos de forma permanente que pueden ser programados una sola vez.",
    "source": "https://es.wikipedia.org/wiki/Memoria_programable_de_solo_lectura"
  },
  {
    "id": 207,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal de la memoria EPROM?",
    "options": [
      "Almacenar datos de forma permanente que pueden ser programados y borrados mediante luz ultravioleta.",
      "Almacenar temporalmente datos y programas en ejecución.",
      "Procesar instrucciones y realizar cálculos.",
      "Mostrar imágenes en pantalla."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Almacenar datos de forma permanente que pueden ser programados y borrados mediante luz ultravioleta.\". La memoria EPROM es una memoria programable y borrable de solo lectura que almacena datos de forma permanente que pueden ser programados y borrados mediante luz ultravioleta.",
    "source": "https://es.wikipedia.org/wiki/Memoria_programable_y_borrable_de_solo_lectura"
  },
  {
    "id": 208,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal de la memoria EEPROM?",
    "options": [
      "Almacenar datos de forma permanente que pueden ser programados y borrados eléctricamente.",
      "Almacenar temporalmente datos y programas en ejecución.",
      "Procesar instrucciones y realizar cálculos.",
      "Mostrar imágenes en pantalla."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Almacenar datos de forma permanente que pueden ser programados y borrados eléctricamente.\". La memoria EEPROM es una memoria programable y borrable eléctricamente de solo lectura que almacena datos de forma permanente que pueden ser programados y borrados eléctricamente.",
    "source": "https://es.wikipedia.org/wiki/Memoria_programable_y_borrable_eléctricamente_de_solo_lectura"
  },
  {
    "id": 209,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal de la memoria flash?",
    "options": [
      "Almacenar datos de forma permanente que pueden ser modificados eléctricamente.",
      "Almacenar temporalmente datos y programas en ejecución.",
      "Procesar instrucciones y realizar cálculos.",
      "Mostrar imágenes en pantalla."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Almacenar datos de forma permanente que pueden ser modificados eléctricamente.\". La memoria flash es una memoria no volátil que almacena datos de forma permanente que pueden ser modificados eléctricamente.",
    "source": "https://es.wikipedia.org/wiki/Memoria_flash"
  },
  {
    "id": 210,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal de la memoria SRAM?",
    "options": [
      "Almacenar datos de forma permanente.",
      "Almacenar temporalmente datos utilizando biestables.",
      "Procesar instrucciones y realizar cálculos.",
      "Mostrar imágenes en pantalla."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Almacenar temporalmente datos utilizando biestables.\". La memoria SRAM es una memoria estática de acceso aleatorio que almacena temporalmente datos utilizando biestables, lo que la hace más rápida pero más cara que la memoria DRAM.",
    "source": "https://es.wikipedia.org/wiki/Memoria_estática_de_acceso_aleatorio"
  },
  {
    "id": 211,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal de la memoria DRAM?",
    "options": [
      "Almacenar datos de forma permanente.",
      "Almacenar temporalmente datos utilizando condensadores.",
      "Procesar instrucciones y realizar cálculos.",
      "Mostrar imágenes en pantalla."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Almacenar temporalmente datos utilizando condensadores.\". La memoria DRAM es una memoria dinámica de acceso aleatorio que almacena temporalmente datos utilizando condensadores, lo que la hace más lenta pero más barata que la memoria SRAM.",
    "source": "https://es.wikipedia.org/wiki/Memoria_dinámica_de_acceso_aleatorio"
  },
  {
    "id": 212,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal de la memoria SDRAM?",
    "options": [
      "Almacenar datos de forma permanente.",
      "Almacenar temporalmente datos sincronizados con el reloj del sistema.",
      "Procesar instrucciones y realizar cálculos.",
      "Mostrar imágenes en pantalla."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Almacenar temporalmente datos sincronizados con el reloj del sistema.\". La memoria SDRAM es una memoria dinámica síncrona de acceso aleatorio que almacena temporalmente datos sincronizados con el reloj del sistema, lo que mejora su rendimiento.",
    "source": "https://es.wikipedia.org/wiki/Memoria_dinámica_síncrona_de_acceso_aleatorio"
  },
  {
    "id": 213,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal de la memoria DDR SDRAM?",
    "options": [
      "Almacenar datos de forma permanente.",
      "Almacenar temporalmente datos transferiendo datos en ambos flancos del reloj.",
      "Procesar instrucciones y realizar cálculos.",
      "Mostrar imágenes en pantalla."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Almacenar temporalmente datos transferiendo datos en ambos flancos del reloj.\". La memoria DDR SDRAM es una memoria de doble tasa de datos dinámica síncrona de acceso aleatorio que almacena temporalmente datos transferiendo datos en ambos flancos del reloj, lo que duplica su velocidad de transferencia.",
    "source": "https://es.wikipedia.org/wiki/DDR_SDRAM"
  },
  {
    "id": 214,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal de la memoria DDR2 SDRAM?",
    "options": [
      "Almacenar datos de forma permanente.",
      "Almacenar temporalmente datos con una velocidad de transferencia mayor que DDR.",
      "Procesar instrucciones y realizar cálculos.",
      "Mostrar imágenes en pantalla."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Almacenar temporalmente datos con una velocidad de transferencia mayor que DDR.\". La memoria DDR2 SDRAM es una memoria de doble tasa de datos 2 dinámica síncrona de acceso aleatorio que almacena temporalmente datos con una velocidad de transferencia mayor que DDR.",
    "source": "https://es.wikipedia.org/wiki/DDR2_SDRAM"
  },
  {
    "id": 215,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal de la memoria DDR3 SDRAM?",
    "options": [
      "Almacenar datos de forma permanente.",
      "Almacenar temporalmente datos con una velocidad de transferencia mayor que DDR2.",
      "Procesar instrucciones y realizar cálculos.",
      "Mostrar imágenes en pantalla."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Almacenar temporalmente datos con una velocidad de transferencia mayor que DDR2.\". La memoria DDR3 SDRAM es una memoria de doble tasa de datos 3 dinámica síncrona de acceso aleatorio que almacena temporalmente datos con una velocidad de transferencia mayor que DDR2.",
    "source": "https://es.wikipedia.org/wiki/DDR3_SDRAM"
  },
  {
    "id": 216,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal de la memoria DDR4 SDRAM?",
    "options": [
      "Almacenar datos de forma permanente.",
      "Almacenar temporalmente datos con una velocidad de transferencia mayor que DDR3.",
      "Procesar instrucciones y realizar cálculos.",
      "Mostrar imágenes en pantalla."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Almacenar temporalmente datos con una velocidad de transferencia mayor que DDR3.\". La memoria DDR4 SDRAM es una memoria de doble tasa de datos 4 dinámica síncrona de acceso aleatorio que almacena temporalmente datos con una velocidad de transferencia mayor que DDR3.",
    "source": "https://es.wikipedia.org/wiki/DDR4_SDRAM"
  },
  {
    "id": 217,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal de la memoria DDR5 SDRAM?",
    "options": [
      "Almacenar datos de forma permanente.",
      "Almacenar temporalmente datos con una velocidad de transferencia mayor que DDR4.",
      "Procesar instrucciones y realizar cálculos.",
      "Mostrar imágenes en pantalla."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Almacenar temporalmente datos con una velocidad de transferencia mayor que DDR4.\". La memoria DDR5 SDRAM es una memoria de doble tasa de datos 5 dinámica síncrona de acceso aleatorio que almacena temporalmente datos con una velocidad de transferencia mayor que DDR4.",
    "source": "https://es.wikipedia.org/wiki/DDR5_SDRAM"
  },
  {
    "id": 218,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal de la memoria ECC?",
    "options": [
      "Almacenar datos de forma permanente.",
      "Detectar y corregir errores en los datos almacenados.",
      "Procesar instrucciones y realizar cálculos.",
      "Mostrar imágenes en pantalla."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Detectar y corregir errores en los datos almacenados.\". La memoria ECC es una memoria con código de corrección de errores que detecta y corrige errores en los datos almacenados, lo que la hace más fiable pero más cara.",
    "source": "https://es.wikipedia.org/wiki/Memoria_con_código_de_corrección_de_errores"
  },
  {
    "id": 219,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal de la memoria registrada (buffered)?",
    "options": [
      "Almacenar datos de forma permanente.",
      "Utilizar un registro para reducir la carga eléctrica en el controlador de memoria.",
      "Procesar instrucciones y realizar cálculos.",
      "Mostrar imágenes en pantalla."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Utilizar un registro para reducir la carga eléctrica en el controlador de memoria.\". La memoria registrada (buffered) utiliza un registro para reducir la carga eléctrica en el controlador de memoria, lo que permite instalar más módulos de memoria pero aumenta la latencia.",
    "source": "https://es.wikipedia.org/wiki/Memoria_registrada"
  },
  {
    "id": 220,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal de la memoria LR-DIMM?",
    "options": [
      "Almacenar datos de forma permanente.",
      "Utilizar un buffer de reducción de carga para permitir más módulos de memoria.",
      "Procesar instrucciones y realizar cálculos.",
      "Mostrar imágenes en pantalla."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Utilizar un buffer de reducción de carga para permitir más módulos de memoria.\". La memoria LR-DIMM utiliza un buffer de reducción de carga para permitir más módulos de memoria que la memoria registrada tradicional.",
    "source": "https://es.wikipedia.org/wiki/LR-DIMM"
  },
  {
    "id": 221,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal de la memoria SO-DIMM?",
    "options": [
      "Almacenar datos de forma permanente.",
      "Proporcionar un formato de memoria más pequeño para portátiles.",
      "Procesar instrucciones y realizar cálculos.",
      "Mostrar imágenes en pantalla."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Proporcionar un formato de memoria más pequeño para portátiles.\". La memoria SO-DIMM es un formato de memoria más pequeño que el DIMM estándar, diseñado para portátiles y otros dispositivos compactos.",
    "source": "https://es.wikipedia.org/wiki/SO-DIMM"
  },
  {
    "id": 222,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal de la memoria Micro-DIMM?",
    "options": [
      "Almacenar datos de forma permanente.",
      "Proporcionar un formato de memoria aún más pequeño que SO-DIMM.",
      "Procesar instrucciones y realizar cálculos.",
      "Mostrar imágenes en pantalla."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Proporcionar un formato de memoria aún más pequeño que SO-DIMM.\". La memoria Micro-DIMM es un formato de memoria aún más pequeño que el SO-DIMM, diseñado para dispositivos ultra compactos.",
    "source": "https://es.wikipedia.org/wiki/Micro-DIMM"
  },
  {
    "id": 223,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal de la memoria de video (VRAM)?",
    "options": [
      "Almacenar datos de forma permanente.",
      "Almacenar temporalmente datos de video para la tarjeta gráfica.",
      "Procesar instrucciones y realizar cálculos.",
      "Mostrar imágenes en pantalla."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Almacenar temporalmente datos de video para la tarjeta gráfica.\". La memoria de video (VRAM) es una memoria especializada que almacena temporalmente datos de video para la tarjeta gráfica.",
    "source": "https://es.wikipedia.org/wiki/Memoria_de_video"
  },
  {
    "id": 224,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal de la memoria GDDR?",
    "options": [
      "Almacenar datos de forma permanente.",
      "Proporcionar memoria de video de alta velocidad para tarjetas gráficas.",
      "Procesar instrucciones y realizar cálculos.",
      "Mostrar imágenes en pantalla."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Proporcionar memoria de video de alta velocidad para tarjetas gráficas.\". La memoria GDDR es un tipo de memoria de video de alta velocidad diseñada específicamente para tarjetas gráficas.",
    "source": "https://es.wikipedia.org/wiki/GDDR"
  },
  {
    "id": 225,
    "category": "Tarjetas de Expansión",
    "question": "¿Cuál de las siguientes opciones describe mejor la función del Platform Controller Hub (PCH) en las plataformas modernas de Intel?",
    "options": [
      "Administra la comunicación entre la CPU y la memoria RAM.",
      "Gestiona la comunicación entre la CPU y los dispositivos de entrada/salida (E/S).",
      "Controla la comunicación entre la CPU y los dispositivos de almacenamiento.",
      "Coordina la transferencia de datos entre la CPU y la tarjeta gráfica."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Gestiona la comunicación entre la CPU y los dispositivos de entrada/salida (E/S).\". El PCH (Platform Controller Hub) es el componente que gestiona los periféricos de E/S, como USB, SATA, audio y red, en las arquitecturas modernas de Intel.",
    "source": "https://es.wikipedia.org/wiki/Platform_Controller_Hub"
  },
  {
    "id": 226,
    "category": "Tarjetas de Expansión",
    "question": "¿Cuál de las siguientes opciones describe mejor la función del Southbridge en la arquitectura moderna de chipset?",
    "options": [
      "Administra la comunicación entre la CPU y la memoria RAM.",
      "Gestiona la comunicación entre la CPU y los dispositivos de entrada/salida (E/S).",
      "Controla la comunicación entre la CPU y los dispositivos de almacenamiento.",
      "Coordina la transferencia de datos entre la CPU y la tarjeta gráfica."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Gestiona la comunicación entre la CPU y los dispositivos de entrada/salida (E/S).\". El Southbridge (también conocido como ICH o PCH en arquitecturas más modernas) es el componente que gestiona los periféricos más lentos del sistema.",
    "source": "https://es.wikipedia.org/wiki/Southbridge"
  },
  {
    "id": 227,
    "category": "Chipsets y CPU",
    "question": "¿Cuál es el propósito principal del chipset en un sistema informático?",
    "options": [
      "Mejorar el rendimiento de la CPU.",
      "Facilitar la comunicación entre los componentes del sistema.",
      "Controlar el suministro de energía a la placa base.",
      "Proporcionar almacenamiento temporal para la CPU."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Facilitar la comunicación entre los componentes del sistema.\". El chipset actúa como un sistema nervioso central que gestiona el flujo de datos entre la CPU, memoria, periféricos y otros componentes.",
    "source": "https://es.wikipedia.org/wiki/Chipset"
  },
  {
    "id": 228,
    "category": "Tarjetas de Expansión",
    "question": "¿Cuál de las siguientes opciones describe mejor la función del Northbridge en el pasado, antes de la integración de funciones en los chipsets modernos?",
    "options": [
      "Administra la comunicación entre la CPU y la memoria RAM.",
      "Gestiona la comunicación entre la CPU y los dispositivos de entrada/salida (E/S).",
      "Controla la comunicación entre la CPU y los dispositivos de almacenamiento.",
      "Coordina la transferencia de datos entre la CPU y la tarjeta gráfica."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Administra la comunicación entre la CPU y la memoria RAM.\". El Northbridge era el componente del chipset que gestionaba las comunicaciones de alta velocidad entre la CPU, la memoria RAM y la tarjeta gráfica.",
    "source": "https://es.wikipedia.org/wiki/Northbridge"
  },
  {
    "id": 229,
    "category": "Tarjetas de Expansión",
    "question": "¿Cuál de las siguientes opciones describe mejor la función del Southbridge en el pasado, antes de la integración de funciones en los chipsets modernos?",
    "options": [
      "Administra la comunicación entre la CPU y la memoria RAM.",
      "Gestiona la comunicación entre la CPU y los dispositivos de entrada/salida (E/S).",
      "Controla la comunicación entre la CPU y los dispositivos de almacenamiento.",
      "Coordina la transferencia de datos entre la CPU y la tarjeta gráfica."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Gestiona la comunicación entre la CPU y los dispositivos de entrada/salida (E/S).\". El Southbridge gestionaba los periféricos más lentos como USB, SATA, audio y red en las arquitecturas de chipset más antiguas.",
    "source": "https://es.wikipedia.org/wiki/Southbridge"
  },
  {
    "id": 230,
    "category": "Tarjetas de Expansión",
    "question": "¿Cuál de las siguientes opciones describe mejor la función del chipset en un sistema informático moderno?",
    "options": [
      "Mejorar el rendimiento de la CPU.",
      "Facilitar la comunicación entre los componentes del sistema.",
      "Controlar el suministro de energía a la placa base.",
      "Proporcionar almacenamiento temporal para la CPU."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Facilitar la comunicación entre los componentes del sistema.\". En los sistemas modernos, el chipset (generalmente un solo chip PCH) gestiona la comunicación entre la CPU y los periféricos del sistema.",
    "source": "https://es.wikipedia.org/wiki/Chipset"
  },
  {
    "id": 231,
    "category": "Chipsets y CPU",
    "question": "¿Cuál de las siguientes afirmaciones es cierta con respecto a la nomenclatura de los chipsets de Intel?",
    "options": [
      "Los chipsets de Intel utilizan nombres basados en letras y números, como Z490 o B360.",
      "Los chipsets de Intel utilizan nombres basados en la serie Ryzen, como Ryzen 7 o Ryzen 5.",
      "Los chipsets de Intel utilizan nombres basados en nombres de ciudades, como New York o Tokyo.",
      "Los chipsets de Intel utilizan nombres basados en animales, como Tiger Lake o Panther Point."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Los chipsets de Intel utilizan nombres basados en letras y números, como Z490 o B360.\". Intel utiliza una nomenclatura donde la letra indica el segmento (Z para entusiastas, B para negocios, H para consumo) y el número indica la generación.",
    "source": "https://es.wikipedia.org/wiki/Intel_chipsets"
  },
  {
    "id": 232,
    "category": "Chipsets y CPU",
    "question": "¿Cuál de las siguientes afirmaciones es cierta con respecto a la nomenclatura de los chipsets de AMD?",
    "options": [
      "Los chipsets de AMD utilizan nombres basados en letras y números, como Z490 o B360.",
      "Los chipsets de AMD utilizan nombres basados en la serie Ryzen, como Ryzen 7 o Ryzen 5.",
      "Los chipsets de AMD utilizan nombres basados en nombres de ciudades, como New York o Tokyo.",
      "Los chipsets de AMD utilizan nombres basados en animales, como Tiger Lake o Panther Point."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Los chipsets de AMD utilizan nombres basados en letras y números, como Z490 o B360.\". AMD también utiliza una nomenclatura similar a Intel, donde la letra indica el segmento (X para entusiastas, B para consumo) y el número indica la generación.",
    "source": "https://es.wikipedia.org/wiki/AMD_chipsets"
  },
  {
    "id": 233,
    "category": "Tarjetas de Expansión",
    "question": "¿Cuál de las siguientes opciones describe mejor la familia de procesadores de Intel dirigida principalmente a usuarios domésticos y entusiastas, ofreciendo un rendimiento de gama alta?",
    "options": [
      "Core i3.",
      "Core i5.",
      "Core i7.",
      "Core i9."
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"Core i9.\". La familia Core i9 es la gama más alta de procesadores de Intel para consumidores, dirigida a entusiastas y profesionales que necesitan el máximo rendimiento.",
    "source": "https://es.wikipedia.org/wiki/Intel_Core_i9"
  },
  {
    "id": 234,
    "category": "Chipsets y CPU",
    "question": "¿Cuál es la nomenclatura típica de los procesadores Intel de la serie Core i5 de novena generación?",
    "options": [
      "i5-3XXX.",
      "i5-5XXX.",
      "i5-7XXX.",
      "i5-9XXX."
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"i5-9XXX.\". La nomenclatura de Intel incluye el prefijo (i5), seguido de un número de cuatro dígitos donde el primero indica la generación (9 para 9ª generación) y los tres restantes el modelo específico.",
    "source": "https://es.wikipedia.org/wiki/Intel_Core"
  },
  {
    "id": 235,
    "category": "Chipsets y CPU",
    "question": "¿Qué tecnología de Hyper-Threading está presente en algunos procesadores Intel para mejorar el rendimiento al permitir que cada núcleo ejecute dos hilos de instrucciones simultáneamente?",
    "options": [
      "Turbo Boost.",
      "Quick Sync.",
      "Hyper-Threading.",
      "Multi-Core Enhancement."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Hyper-Threading.\". Hyper-Threading es una tecnología de Intel que permite a cada núcleo físico procesar dos hilos de ejecución simultáneamente, mejorando el rendimiento en tareas multitarea.",
    "source": "https://es.wikipedia.org/wiki/Hyper-Threading"
  },
  {
    "id": 236,
    "category": "Chipsets y CPU",
    "question": "En la nomenclatura de procesadores Intel, ¿qué significa la letra \"K\" al final del número del modelo?",
    "options": [
      "Procesador de bajo consumo.",
      "Desbloqueado para overclocking.",
      "Integrado con gráficos Iris.",
      "Diseño eficiente de energía."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Desbloqueado para overclocking.\". La letra \"K\" en los procesadores Intel indica que el multiplicador está desbloqueado, permitiendo al usuario aumentar la frecuencia del procesador mediante overclocking.",
    "source": "https://es.wikipedia.org/wiki/Overclocking"
  },
  {
    "id": 237,
    "category": "Tarjetas de Expansión",
    "question": "¿Cuál de las siguientes opciones describe mejor la familia de procesadores Intel Core i3?",
    "options": [
      "Enfocada en entusiastas y rendimiento extremo.",
      "Diseñada para usuarios de nivel básico y tareas cotidianas.",
      "Ofrece un equilibrio entre rendimiento y eficiencia energética.",
      "Orientada a estaciones de trabajo y servidores."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Diseñada para usuarios de nivel básico y tareas cotidianas.\". La familia Core i3 es la gama de entrada de procesadores Intel, diseñada para usuarios básicos y tareas cotidianas como navegación web, ofimática y multimedia ligera.",
    "source": "https://es.wikipedia.org/wiki/Intel_Core_i3"
  },
  {
    "id": 238,
    "category": "Chipsets y CPU",
    "question": "¿Cuál es el propósito principal de la tecnología Intel Turbo Boost?",
    "options": [
      "Mejorar la eficiencia energética del procesador.",
      "Aumentar la frecuencia del reloj del procesador cuando sea necesario.",
      "Optimizar el rendimiento de la memoria caché.",
      "Controlar la temperatura del procesador."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Aumentar la frecuencia del reloj del procesador cuando sea necesario.\". Turbo Boost es una tecnología que aumenta automáticamente la frecuencia del procesador por encima de su velocidad base cuando las condiciones térmicas y de energía lo permiten.",
    "source": "https://es.wikipedia.org/wiki/Intel_Turbo_Boost"
  },
  {
    "id": 239,
    "category": "Chipsets y CPU",
    "question": "En la nomenclatura de los procesadores Intel Core i7, ¿qué indica la presencia de la letra \"U\" al final del número del modelo?",
    "options": [
      "Procesador de sobremesa.",
      "Procesador ultrabaja potencia.",
      "Procesador de baja potencia.",
      "Procesador con gráficos Iris."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Procesador de baja potencia.\". La letra \"U\" en los procesadores Intel indica que son modelos de ultra bajo consumo (Ultra-low power), diseñados para portátiles delgados y dispositivos móviles.",
    "source": "https://es.wikipedia.org/wiki/Intel_Core"
  },
  {
    "id": 240,
    "category": "Tarjetas de Expansión",
    "question": "¿Cuál de las siguientes opciones describe mejor la familia de procesadores Intel Core i9?",
    "options": [
      "Diseñada para usuarios de nivel básico y tareas cotidianas.",
      "Enfocada en entusiastas y rendimiento extremo.",
      "Ofrece un equilibrio entre rendimiento y eficiencia energética.",
      "Orientada a estaciones de trabajo y servidores."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Enfocada en entusiastas y rendimiento extremo.\". La familia Core i9 es la gama más alta de procesadores de Intel para consumidores, dirigida a entusiastas y profesionales que necesitan el máximo rendimiento.",
    "source": "https://es.wikipedia.org/wiki/Intel_Core_i9"
  },
  {
    "id": 241,
    "category": "Chipsets y CPU",
    "question": "¿Qué tecnología Intel permite a los procesadores integrar gráficos de alta calidad directamente en el mismo chip que la CPU?",
    "options": [
      "Quick Sync.",
      "Turbo Boost.",
      "Hyper-Threading.",
      "Iris Graphics."
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"Iris Graphics.\". Intel Iris Graphics es la marca de los gráficos integrados de alta calidad de Intel, que se encuentran en el mismo die que la CPU en algunos procesadores.",
    "source": "https://es.wikipedia.org/wiki/Intel_Iris_Graphics"
  },
  {
    "id": 242,
    "category": "Chipsets y CPU",
    "question": "En la nomenclatura de procesadores Intel, ¿qué significa la letra \"F\" al final del número del modelo?",
    "options": [
      "Procesador con gráficos integrados.",
      "Procesador de bajo consumo.",
      "Procesador sin gráficos integrados.",
      "Procesador de bajo rendimiento."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Procesador sin gráficos integrados.\". La letra \"F\" en los procesadores Intel indica que el modelo no tiene gráficos integrados y requiere una tarjeta gráfica dedicada.",
    "source": "https://es.wikipedia.org/wiki/Intel_Core"
  },
  {
    "id": 243,
    "category": "Chipsets y CPU",
    "question": "¿Cuál es la nomenclatura típica de los procesadores Intel de la serie Core i3 de novena generación?",
    "options": [
      "i3-3XXX.",
      "i3-5XXX.",
      "i3-7XXX.",
      "i3-9XXX."
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"i3-9XXX.\". La nomenclatura de Intel incluye el prefijo (i3), seguido de un número de cuatro dígitos donde el primero indica la generación (9 para 9ª generación) y los tres restantes el modelo específico.",
    "source": "https://es.wikipedia.org/wiki/Intel_Core"
  },
  {
    "id": 244,
    "category": "Chipsets y CPU",
    "question": "¿Qué tecnología de Hyper-Threading está presente en algunos procesadores Intel para mejorar el rendimiento al permitir que cada núcleo ejecute dos hilos de instrucciones simultáneamente?",
    "options": [
      "Turbo Boost.",
      "Quick Sync.",
      "Hyper-Threading.",
      "Multi-Core Enhancement."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Hyper-Threading.\". Hyper-Threading es una tecnología de Intel que permite a cada núcleo físico procesar dos hilos de ejecución simultáneamente, mejorando el rendimiento en tareas multitarea.",
    "source": "https://es.wikipedia.org/wiki/Hyper-Threading"
  },
  {
    "id": 245,
    "category": "Chipsets y CPU",
    "question": "En la nomenclatura de los procesadores Intel Core i7, ¿qué indica la presencia de la letra \"K\" al final del número del modelo?",
    "options": [
      "Procesador de sobremesa.",
      "Procesador con gráficos Iris.",
      "Procesador desbloqueado para overclocking.",
      "Procesador de baja potencia."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Procesador desbloqueado para overclocking.\". La letra \"K\" en los procesadores Intel indica que el multiplicador está desbloqueado, permitiendo al usuario aumentar la frecuencia del procesador mediante overclocking.",
    "source": "https://es.wikipedia.org/wiki/Overclocking"
  },
  {
    "id": 246,
    "category": "Tarjetas de Expansión",
    "question": "¿Cuál de las siguientes opciones describe mejor la familia de procesadores Intel Core i5?",
    "options": [
      "Enfocada en entusiastas y rendimiento extremo.",
      "Diseñada para usuarios de nivel básico y tareas cotidianas.",
      "Ofrece un equilibrio entre rendimiento y eficiencia energética.",
      "Orientada a estaciones de trabajo y servidores."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Ofrece un equilibrio entre rendimiento y eficiencia energética.\". La familia Core i5 es la gama media de procesadores Intel, que ofrece un buen equilibrio entre rendimiento y precio para la mayoría de los usuarios.",
    "source": "https://es.wikipedia.org/wiki/Intel_Core_i5"
  },
  {
    "id": 247,
    "category": "Chipsets y CPU",
    "question": "¿Cuál de las siguientes tecnologías Intel permite la ejecución de múltiples hilos de instrucciones en cada núcleo físico del procesador?",
    "options": [
      "Hyper-Threading.",
      "Turbo Boost.",
      "Quick Sync.",
      "Multi-Core Enhancement."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Hyper-Threading.\". Hyper-Threading es una tecnología de Intel que permite a cada núcleo físico procesar dos hilos de ejecución simultáneamente, mejorando el rendimiento en tareas multitarea.",
    "source": "https://es.wikipedia.org/wiki/Hyper-Threading"
  },
  {
    "id": 248,
    "category": "Chipsets y CPU",
    "question": "En la nomenclatura de procesadores Intel, ¿qué significa la letra \"H\" al final del número del modelo?",
    "options": [
      "Procesador de sobremesa.",
      "Procesador de alta potencia.",
      "Procesador sin gráficos integrados.",
      "Procesador de bajo rendimiento."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Procesador de alta potencia.\". La letra \"H\" en los procesadores Intel indica modelos de alto rendimiento (High performance) generalmente para sistemas de escritorio.",
    "source": "https://es.wikipedia.org/wiki/Intel_Core"
  },
  {
    "id": 249,
    "category": "Tarjetas de Expansión",
    "question": "¿Cuál de las siguientes opciones describe mejor la familia de procesadores Intel Core i9?",
    "options": [
      "Diseñada para usuarios de nivel básico y tareas cotidianas.",
      "Enfocada en entusiastas y rendimiento extremo.",
      "Ofrece un equilibrio entre rendimiento y eficiencia energética.",
      "Orientada a estaciones de trabajo y servidores."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Enfocada en entusiastas y rendimiento extremo.\". La familia Core i9 es la gama más alta de procesadores de Intel para consumidores, dirigida a entusiastas y profesionales que necesitan el máximo rendimiento.",
    "source": "https://es.wikipedia.org/wiki/Intel_Core_i9"
  },
  {
    "id": 250,
    "category": "Conectores de Video",
    "question": "¿Cuál de las siguientes tecnologías Intel permite acelerar la codificación y decodificación de video, mejorando el rendimiento en tareas multimedia?",
    "options": [
      "Quick Sync.",
      "Turbo Boost.",
      "Hyper-Threading.",
      "Iris Graphics."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Quick Sync.\". Intel Quick Sync Video es una tecnología de hardware dedicada que acelera la codificación y decodificación de video, mejorando significativamente el rendimiento en tareas multimedia.",
    "source": "https://es.wikipedia.org/wiki/Intel_Quick_Sync_Video"
  },
  {
    "id": 251,
    "category": "Chipsets y CPU",
    "question": "En la nomenclatura de los procesadores Intel Core i7, ¿qué indica la presencia de la letra \"U\" al final del número del modelo?",
    "options": [
      "Procesador de sobremesa.",
      "Procesador ultrabaja potencia.",
      "Procesador de baja potencia.",
      "Procesador con gráficos Iris."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Procesador de baja potencia.\". La letra \"U\" en los procesadores Intel indica que son modelos de ultra bajo consumo (Ultra-low power), diseñados para portátiles delgados y dispositivos móviles.",
    "source": "https://es.wikipedia.org/wiki/Intel_Core"
  },
  {
    "id": 252,
    "category": "Chipsets y CPU",
    "question": "¿Qué tecnología Intel permite a los procesadores integrar gráficos de alta calidad directamente en el mismo chip que la CPU?",
    "options": [
      "Quick Sync.",
      "Turbo Boost.",
      "Hyper-Threading.",
      "Iris Graphics."
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"Iris Graphics.\". Intel Iris Graphics es la marca de los gráficos integrados de alta calidad de Intel, que se encuentran en el mismo die que la CPU en algunos procesadores.",
    "source": "https://es.wikipedia.org/wiki/Intel_Iris_Graphics"
  },
  {
    "id": 253,
    "category": "Tarjetas de Expansión",
    "question": "¿Cuál de las siguientes opciones describe mejor la familia de procesadores Intel Core i5?",
    "options": [
      "Enfocada en entusiastas y rendimiento extremo.",
      "Diseñada para usuarios de nivel básico y tareas cotidianas.",
      "Ofrece un equilibrio entre rendimiento y eficiencia energética.",
      "Orientada a estaciones de trabajo y servidores."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Ofrece un equilibrio entre rendimiento y eficiencia energética.\". La familia Core i5 es la gama media de procesadores Intel, que ofrece un buen equilibrio entre rendimiento y precio para la mayoría de los usuarios.",
    "source": "https://es.wikipedia.org/wiki/Intel_Core_i5"
  },
  {
    "id": 254,
    "category": "Conectores de Video",
    "question": "¿Cuál de las siguientes tecnologías Intel permite acelerar la codificación y decodificación de video, mejorando el rendimiento en tareas multimedia?",
    "options": [
      "Quick Sync.",
      "Turbo Boost.",
      "Hyper-Threading.",
      "Iris Graphics."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Quick Sync.\". Intel Quick Sync Video es una tecnología de hardware dedicada que acelera la codificación y decodificación de video, mejorando significativamente el rendimiento en tareas multimedia.",
    "source": "https://es.wikipedia.org/wiki/Intel_Quick_Sync_Video"
  },
  {
    "id": 255,
    "category": "Chipsets y CPU",
    "question": "En la nomenclatura de los procesadores Intel Core i7, ¿qué indica la presencia de la letra \"K\" al final del número del modelo?",
    "options": [
      "Procesador de sobremesa.",
      "Procesador con gráficos Iris.",
      "Procesador desbloqueado para overclocking.",
      "Procesador de baja potencia."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Procesador desbloqueado para overclocking.\". La letra \"K\" en los procesadores Intel indica que el multiplicador está desbloqueado, permitiendo al usuario aumentar la frecuencia del procesador mediante overclocking.",
    "source": "https://es.wikipedia.org/wiki/Overclocking"
  },
  {
    "id": 256,
    "category": "Chipsets y CPU",
    "question": "¿Cuál es el propósito principal de la tecnología Intel Turbo Boost?",
    "options": [
      "Mejorar la eficiencia energética del procesador.",
      "Aumentar la frecuencia del reloj del procesador cuando sea necesario.",
      "Optimizar el rendimiento de la memoria caché.",
      "Controlar la temperatura del procesador."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Aumentar la frecuencia del reloj del procesador cuando sea necesario.\". Turbo Boost es una tecnología que aumenta automáticamente la frecuencia del procesador por encima de su velocidad base cuando las condiciones térmicas y de energía lo permiten.",
    "source": "https://es.wikipedia.org/wiki/Intel_Turbo_Boost"
  },
  {
    "id": 257,
    "category": "Chipsets y CPU",
    "question": "En la nomenclatura de procesadores Intel, ¿qué significa la letra \"F\" al final del número del modelo?",
    "options": [
      "Procesador con gráficos integrados.",
      "Procesador de bajo consumo.",
      "Procesador sin gráficos integrados.",
      "Procesador de bajo rendimiento."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Procesador sin gráficos integrados.\". La letra \"F\" en los procesadores Intel indica que el modelo no tiene gráficos integrados y requiere una tarjeta gráfica dedicada.",
    "source": "https://es.wikipedia.org/wiki/Intel_Core"
  },
  {
    "id": 258,
    "category": "Tarjetas de Expansión",
    "question": "¿Cuál de las siguientes opciones describe mejor la familia de procesadores Intel Core i3?",
    "options": [
      "Enfocada en entusiastas y rendimiento extremo.",
      "Diseñada para usuarios de nivel básico y tareas cotidianas.",
      "Ofrece un equilibrio entre rendimiento y eficiencia energética.",
      "Orientada a estaciones de trabajo y servidores."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Diseñada para usuarios de nivel básico y tareas cotidianas.\". La familia Core i3 es la gama de entrada de procesadores Intel, diseñada para usuarios básicos y tareas cotidianas como navegación web, ofimática y multimedia ligera.",
    "source": "https://es.wikipedia.org/wiki/Intel_Core_i3"
  },
  {
    "id": 259,
    "category": "Chipsets y CPU",
    "question": "En la nomenclatura de procesadores Intel, ¿qué significa la letra \"H\" al final del número del modelo?",
    "options": [
      "Procesador de sobremesa.",
      "Procesador de alta potencia.",
      "Procesador sin gráficos integrados.",
      "Procesador de bajo rendimiento."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Procesador de alta potencia.\". La letra \"H\" en los procesadores Intel indica modelos de alto rendimiento (High performance) generalmente para sistemas de escritorio.",
    "source": "https://es.wikipedia.org/wiki/Intel_Core"
  },
  {
    "id": 260,
    "category": "Chipsets y CPU",
    "question": "¿Cuál es la nomenclatura típica de los procesadores Intel de la serie Core i3 de novena generación?",
    "options": [
      "i3-3XXX.",
      "i3-5XXX.",
      "i3-7XXX.",
      "i3-9XXX."
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"i3-9XXX.\". La nomenclatura de Intel incluye el prefijo (i3), seguido de un número de cuatro dígitos donde el primero indica la generación (9 para 9ª generación) y los tres restantes el modelo específico.",
    "source": "https://es.wikipedia.org/wiki/Intel_Core"
  },
  {
    "id": 261,
    "category": "Chipsets y CPU",
    "question": "¿Qué tecnología de Hyper-Threading está presente en algunos procesadores Intel para mejorar el rendimiento al permitir que cada núcleo ejecute dos hilos de instrucciones simultáneamente?",
    "options": [
      "Turbo Boost.",
      "Quick Sync.",
      "Hyper-Threading.",
      "Multi-Core Enhancement."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Hyper-Threading.\". Hyper-Threading es una tecnología de Intel que permite a cada núcleo físico procesar dos hilos de ejecución simultáneamente, mejorando el rendimiento en tareas multitarea.",
    "source": "https://es.wikipedia.org/wiki/Hyper-Threading"
  },
  {
    "id": 262,
    "category": "Chipsets y CPU",
    "question": "¿Cuál de las siguientes familias de procesadores AMD está diseñada para ofrecer un alto rendimiento en tareas de escritorio y multimedia, con núcleos de CPU y GPU integrados?",
    "options": [
      "Ryzen Threadripper.",
      "Ryzen 9.",
      "Ryzen 5.",
      "Ryzen G."
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"Ryzen G.\". La serie Ryzen G de AMD incluye procesadores con gráficos integrados (GPU), diseñados para ofrecer un buen rendimiento en tareas de escritorio y multimedia sin necesidad de una tarjeta gráfica dedicada.",
    "source": "https://es.wikipedia.org/wiki/Ryzen"
  },
  {
    "id": 263,
    "category": "Chipsets y CPU",
    "question": "¿Cuál es la nomenclatura utilizada para los procesadores AMD Ryzen de tercera generación?",
    "options": [
      "Ryzen 1000.",
      "Ryzen 2000.",
      "Ryzen 3000.",
      "Ryzen 4000."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Ryzen 3000.\". Los procesadores AMD Ryzen de tercera generación utilizan la nomenclatura Ryzen 3000, basados en la arquitectura Zen 2.",
    "source": "https://es.wikipedia.org/wiki/Ryzen"
  },
  {
    "id": 264,
    "category": "Chipsets y CPU",
    "question": "¿Cuál de las siguientes características se asocia comúnmente con los procesadores AMD Ryzen con la letra \"G\" al final de su nombre?",
    "options": [
      "Núcleos de GPU integrados.",
      "Arquitectura de 64 bits.",
      "Tecnología de overclocking.",
      "Núcleos de GPU dedicados."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Núcleos de GPU integrados.\". La letra \"G\" en los procesadores AMD Ryzen indica que el modelo incluye gráficos integrados (GPU) en el mismo paquete.",
    "source": "https://es.wikipedia.org/wiki/Ryzen"
  },
  {
    "id": 265,
    "category": "Chipsets y CPU",
    "question": "¿Cuál es el nombre de la arquitectura de procesadores AMD que sucedió a la arquitectura Bulldozer?",
    "options": [
      "Ryzen.",
      "Piledriver.",
      "Zen.",
      "Excavator."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Zen.\". La arquitectura Zen de AMD es la que sucedió a Bulldozer, introduciendo mejoras significativas en IPC (instrucciones por ciclo) y eficiencia energética.",
    "source": "https://es.wikipedia.org/wiki/Zen_(microarquitectura)"
  },
  {
    "id": 266,
    "category": "Chipsets y CPU",
    "question": "¿Qué serie de procesadores AMD está orientada principalmente a entornos de servidores y estaciones de trabajo de alto rendimiento?",
    "options": [
      "Ryzen.",
      "EPYC.",
      "Athlon.",
      "A-Series."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"EPYC.\". La serie EPYC de AMD está diseñada específicamente para servidores y estaciones de trabajo de alto rendimiento, ofreciendo hasta 64 núcleos y 128 hilos.",
    "source": "https://es.wikipedia.org/wiki/AMD_EPYC"
  },
  {
    "id": 267,
    "category": "Chipsets y CPU",
    "question": "¿Cuál es la nomenclatura utilizada para los procesadores AMD de la serie de alto rendimiento para escritorio que cuenta con hasta 16 núcleos y 32 hilos?",
    "options": [
      "Ryzen 7.",
      "Ryzen 9.",
      "Ryzen Threadripper.",
      "Athlon."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Ryzen Threadripper.\". La serie Ryzen Threadripper de AMD está diseñada para entusiastas y profesionales que necesitan el máximo rendimiento en escritorio, con hasta 64 núcleos y 128 hilos en los modelos más recientes.",
    "source": "https://es.wikipedia.org/wiki/Ryzen_Threadripper"
  },
  {
    "id": 268,
    "category": "Chipsets y CPU",
    "question": "¿Cuál es la principal ventaja de la arquitectura Zen de AMD en términos de rendimiento y eficiencia energética?",
    "options": [
      "Núcleos de GPU integrados.",
      "Mayor frecuencia de reloj.",
      "Mayor cantidad de núcleos por procesador.",
      "Mejora en la IPC (instrucciones por ciclo)."
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"Mejora en la IPC (instrucciones por ciclo).\". La arquitectura Zen de AMD introdujo mejoras significativas en IPC, lo que significa que puede ejecutar más instrucciones por ciclo de reloj, resultando en un mejor rendimiento general.",
    "source": "https://es.wikipedia.org/wiki/Zen_(microarquitectura)"
  },
  {
    "id": 269,
    "category": "Tarjetas de Expansión",
    "question": "¿Cuál de las siguientes opciones describe mejor la nomenclatura de los procesadores AMD Ryzen con gráficos integrados?",
    "options": [
      "Ryzen X.",
      "Ryzen G.",
      "Ryzen Pro.",
      "Ryzen XT."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Ryzen X.\". La letra \"X\" en los procesadores AMD Ryzen indica modelos de alto rendimiento con mayor frecuencia de reloj base y capacidades de overclocking mejoradas.",
    "source": "https://es.wikipedia.org/wiki/Ryzen"
  },
  {
    "id": 270,
    "category": "Chipsets y CPU",
    "question": "¿Qué serie de procesadores AMD está dirigida principalmente a usuarios que buscan un rendimiento equilibrado para tareas cotidianas y juegos?",
    "options": [
      "Ryzen Threadripper.",
      "Ryzen 9.",
      "Ryzen 5.",
      "Athlon."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Ryzen 5.\". La serie Ryzen 5 de AMD ofrece un buen equilibrio entre rendimiento y precio, siendo ideal para la mayoría de usuarios que realizan tareas cotidianas y juegos.",
    "source": "https://es.wikipedia.org/wiki/Ryzen_5"
  },
  {
    "id": 271,
    "category": "Chipsets y CPU",
    "question": "¿Cuál es la nomenclatura utilizada para los procesadores AMD Ryzen de segunda generación?",
    "options": [
      "Ryzen 1000.",
      "Ryzen 2000.",
      "Ryzen 3000.",
      "Ryzen 4000."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Ryzen 2000.\". Los procesadores AMD Ryzen de segunda generación utilizan la nomenclatura Ryzen 2000, basados en la arquitectura Zen+.",
    "source": "https://es.wikipedia.org/wiki/Ryzen"
  },
  {
    "id": 272,
    "category": "Chipsets y CPU",
    "question": "¿Qué serie de procesadores AMD se enfoca en ofrecer un rendimiento eficiente y equilibrado para dispositivos móviles y computadoras portátiles?",
    "options": [
      "Ryzen 9.",
      "Ryzen 5.",
      "Ryzen 7.",
      "Ryzen U-Series."
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"Ryzen U-Series.\". La serie Ryzen U-Series de AMD está diseñada para portátiles y dispositivos móviles, ofreciendo un buen equilibrio entre rendimiento y eficiencia energética.",
    "source": "https://es.wikipedia.org/wiki/Ryzen"
  },
  {
    "id": 273,
    "category": "Chipsets y CPU",
    "question": "¿Cuál de las siguientes características se asocia comúnmente con los procesadores AMD Ryzen con la letra \"X\" al final de su nombre?",
    "options": [
      "Núcleos de GPU integrados.",
      "Mayor frecuencia de reloj y capacidad de overclocking.",
      "Tecnología de bajo consumo de energía.",
      "Núcleos de GPU dedicados."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Mayor frecuencia de reloj y capacidad de overclocking.\". La letra \"X\" en los procesadores AMD Ryzen indica modelos de alto rendimiento con mayor frecuencia de reloj base y capacidades de overclocking mejoradas.",
    "source": "https://es.wikipedia.org/wiki/Ryzen"
  },
  {
    "id": 274,
    "category": "Chipsets y CPU",
    "question": "¿Cuál es la nomenclatura utilizada para los procesadores AMD Ryzen de cuarta generación?",
    "options": [
      "Ryzen 1000.",
      "Ryzen 2000.",
      "Ryzen 3000.",
      "Ryzen 4000."
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"Ryzen 4000.\". Los procesadores AMD Ryzen de cuarta generación utilizan la nomenclatura Ryzen 4000, basados en la arquitectura Zen 2.",
    "source": "https://es.wikipedia.org/wiki/Ryzen"
  },
  {
    "id": 275,
    "category": "Chipsets y CPU",
    "question": "¿Cuál de las siguientes características se asocia comúnmente con los procesadores AMD Ryzen de la serie \"U\"?",
    "options": [
      "Mayor cantidad de núcleos.",
      "Diseñados para sistemas de escritorio.",
      "Mayor frecuencia de reloj.",
      "Orientados a dispositivos móviles y portátiles."
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"Orientados a dispositivos móviles y portátiles.\". La serie \"U\" de los procesadores AMD Ryzen está diseñada específicamente para portátiles y dispositivos móviles.",
    "source": "https://es.wikipedia.org/wiki/Ryzen"
  },
  {
    "id": 276,
    "category": "Chipsets y CPU",
    "question": "¿Cuál es la serie de procesadores AMD destinada principalmente a usuarios que buscan un rendimiento básico para tareas cotidianas y multimedia?",
    "options": [
      "Ryzen Threadripper.",
      "Ryzen 9.",
      "Ryzen 3.",
      "Athlon."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Ryzen 3.\". La serie Ryzen 3 de AMD es la gama de entrada, diseñada para usuarios que buscan un rendimiento básico para tareas cotidianas y multimedia.",
    "source": "https://es.wikipedia.org/wiki/Ryzen_3"
  },
  {
    "id": 277,
    "category": "Chipsets y CPU",
    "question": "¿Cuál es la nomenclatura utilizada para los procesadores AMD Ryzen de quinta generación?",
    "options": [
      "Ryzen 1000.",
      "Ryzen 2000.",
      "Ryzen 3000.",
      "Ryzen 5000."
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"Ryzen 5000.\". Los procesadores AMD Ryzen de quinta generación utilizan la nomenclatura Ryzen 5000, basados en la arquitectura Zen 3.",
    "source": "https://es.wikipedia.org/wiki/Ryzen"
  },
  {
    "id": 278,
    "category": "Chipsets y CPU",
    "question": "¿Qué serie de procesadores AMD se enfoca en ofrecer un rendimiento eficiente y equilibrado para dispositivos móviles y computadoras portátiles?",
    "options": [
      "Ryzen 9.",
      "Ryzen 5.",
      "Ryzen 7.",
      "Ryzen U-Series."
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"Ryzen U-Series.\". La serie Ryzen U-Series de AMD está diseñada para portátiles y dispositivos móviles, ofreciendo un buen equilibrio entre rendimiento y eficiencia energética.",
    "source": "https://es.wikipedia.org/wiki/Ryzen"
  },
  {
    "id": 279,
    "category": "Chipsets y CPU",
    "question": "¿Cuál es la principal ventaja de la arquitectura Zen de AMD en términos de rendimiento y eficiencia energética?",
    "options": [
      "Núcleos de GPU integrados.",
      "Mayor frecuencia de reloj.",
      "Mayor cantidad de núcleos por procesador.",
      "Mejora en la IPC (instrucciones por ciclo)."
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"Mejora en la IPC (instrucciones por ciclo).\". La arquitectura Zen de AMD introdujo mejoras significativas en IPC, lo que significa que puede ejecutar más instrucciones por ciclo de reloj, resultando en un mejor rendimiento general.",
    "source": "https://es.wikipedia.org/wiki/Zen_(microarquitectura)"
  },
  {
    "id": 280,
    "category": "Chipsets y CPU",
    "question": "¿Cuál es la serie de procesadores AMD destinada principalmente a usuarios que buscan un rendimiento básico para tareas cotidianas y multimedia?",
    "options": [
      "Ryzen Threadripper.",
      "Ryzen 9.",
      "Ryzen 3.",
      "Athlon."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Ryzen 3.\". La serie Ryzen 3 de AMD es la gama de entrada, diseñada para usuarios que buscan un rendimiento básico para tareas cotidianas y multimedia.",
    "source": "https://es.wikipedia.org/wiki/Ryzen_3"
  },
  {
    "id": 281,
    "category": "Chipsets y CPU",
    "question": "¿Cuál es la nomenclatura utilizada para los procesadores AMD Ryzen de cuarta generación?",
    "options": [
      "Ryzen 1000.",
      "Ryzen 2000.",
      "Ryzen 3000.",
      "Ryzen 4000."
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"Ryzen 4000.\". Los procesadores AMD Ryzen de cuarta generación utilizan la nomenclatura Ryzen 4000, basados en la arquitectura Zen 2.",
    "source": "https://es.wikipedia.org/wiki/Ryzen"
  },
  {
    "id": 282,
    "category": "Chipsets y CPU",
    "question": "¿Qué serie de procesadores AMD está dirigida principalmente a usuarios que buscan un rendimiento equilibrado para tareas cotidianas y juegos?",
    "options": [
      "Ryzen Threadripper.",
      "Ryzen 9.",
      "Ryzen 5.",
      "Athlon."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Ryzen 5.\". La serie Ryzen 5 de AMD ofrece un buen equilibrio entre rendimiento y precio, siendo ideal para la mayoría de usuarios que realizan tareas cotidianas y juegos.",
    "source": "https://es.wikipedia.org/wiki/Ryzen_5"
  },
  {
    "id": 283,
    "category": "Chipsets y CPU",
    "question": "¿Cuál es la nomenclatura utilizada para los procesadores AMD Ryzen de tercera generación?",
    "options": [
      "Ryzen 1000.",
      "Ryzen 2000.",
      "Ryzen 3000.",
      "Ryzen 4000."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Ryzen 3000.\". Los procesadores AMD Ryzen de tercera generación utilizan la nomenclatura Ryzen 3000, basados en la arquitectura Zen 2.",
    "source": "https://es.wikipedia.org/wiki/Ryzen"
  },
  {
    "id": 284,
    "category": "Chipsets y CPU",
    "question": "¿Cuál de las siguientes características se asocia comúnmente con los procesadores AMD Ryzen de la serie \"U\"?",
    "options": [
      "Mayor cantidad de núcleos.",
      "Diseñados para sistemas de escritorio.",
      "Mayor frecuencia de reloj.",
      "Orientados a dispositivos móviles y portátiles."
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"Orientados a dispositivos móviles y portátiles.\". La serie \"U\" de los procesadores AMD Ryzen está diseñada específicamente para portátiles y dispositivos móviles.",
    "source": "https://es.wikipedia.org/wiki/Ryzen"
  },
  {
    "id": 285,
    "category": "Chipsets y CPU",
    "question": "¿Cuál es la nomenclatura utilizada para los procesadores AMD Ryzen de quinta generación?",
    "options": [
      "Ryzen 1000.",
      "Ryzen 2000.",
      "Ryzen 3000.",
      "Ryzen 5000."
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"Ryzen 5000.\". Los procesadores AMD Ryzen de quinta generación utilizan la nomenclatura Ryzen 5000, basados en la arquitectura Zen 3.",
    "source": "https://es.wikipedia.org/wiki/Ryzen"
  },
  {
    "id": 286,
    "category": "Chipsets y CPU",
    "question": "¿Cuál de las siguientes familias de procesadores AMD está diseñada para ofrecer un alto rendimiento en tareas de escritorio y multimedia, con núcleos de CPU y GPU integrados?",
    "options": [
      "Ryzen Threadripper.",
      "Ryzen 9.",
      "Ryzen 5.",
      "Ryzen G."
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"Ryzen G.\". La serie Ryzen G de AMD incluye procesadores con gráficos integrados (GPU), diseñados para ofrecer un buen rendimiento en tareas de escritorio y multimedia sin necesidad de una tarjeta gráfica dedicada.",
    "source": "https://es.wikipedia.org/wiki/Ryzen"
  },
  {
    "id": 287,
    "category": "Tarjetas de Expansión",
    "question": "¿Cuál de las siguientes opciones describe mejor la nomenclatura de los procesadores AMD Ryzen con gráficos integrados?",
    "options": [
      "Ryzen X.",
      "Ryzen G.",
      "Ryzen Pro.",
      "Ryzen XT."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Ryzen X.\". La letra \"X\" en los procesadores AMD Ryzen indica modelos de alto rendimiento con mayor frecuencia de reloj base y capacidades de overclocking mejoradas.",
    "source": "https://es.wikipedia.org/wiki/Ryzen"
  },
  {
    "id": 288,
    "category": "Chipsets y CPU",
    "question": "¿Cuál es la nomenclatura utilizada para los procesadores AMD Ryzen de segunda generación?",
    "options": [
      "Ryzen 1000.",
      "Ryzen 2000.",
      "Ryzen 3000.",
      "Ryzen 4000."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Ryzen 2000.\". Los procesadores AMD Ryzen de segunda generación utilizan la nomenclatura Ryzen 2000, basados en la arquitectura Zen+.",
    "source": "https://es.wikipedia.org/wiki/Ryzen"
  },
  {
    "id": 289,
    "category": "Chipsets y CPU",
    "question": "¿Cuál es el nombre de la arquitectura de procesadores AMD que sucedió a la arquitectura Bulldozer?",
    "options": [
      "Ryzen.",
      "Piledriver.",
      "Zen.",
      "Excavator."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Zen.\". La arquitectura Zen de AMD es la que sucedió a Bulldozer, introduciendo mejoras significativas en IPC (instrucciones por ciclo) y eficiencia energética.",
    "source": "https://es.wikipedia.org/wiki/Zen_(microarquitectura)"
  },
  {
    "id": 290,
    "category": "Tarjetas de Expansión",
    "question": "¿Cuál de las siguientes opciones describe mejor la nomenclatura de los procesadores AMD Ryzen con gráficos integrados?",
    "options": [
      "Ryzen X.",
      "Ryzen G.",
      "Ryzen Pro.",
      "Ryzen XT."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Ryzen X.\". La letra \"X\" en los procesadores AMD Ryzen indica modelos de alto rendimiento con mayor frecuencia de reloj base y capacidades de overclocking mejoradas.",
    "source": "https://es.wikipedia.org/wiki/Ryzen"
  },
  {
    "id": 291,
    "category": "Chipsets y CPU",
    "question": "¿Cuál de las siguientes características se asocia comúnmente con los procesadores AMD Ryzen de la serie \"X\"?",
    "options": [
      "Mayor cantidad de núcleos.",
      "Mayor frecuencia de reloj y capacidad de overclocking.",
      "Tecnología de bajo consumo de energía.",
      "Orientados a dispositivos móviles y portátiles."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Mayor frecuencia de reloj y capacidad de overclocking.\". La letra \"X\" en los procesadores AMD Ryzen indica modelos de alto rendimiento con mayor frecuencia de reloj base y capacidades de overclocking mejoradas.",
    "source": "https://es.wikipedia.org/wiki/Ryzen"
  },
  {
    "id": 292,
    "category": "Conectores de Placa Base",
    "question": "¿Cuál es la función principal de una fuente de alimentación ATX en un sistema de computadora?",
    "options": [
      "Gestionar la comunicación entre la CPU y los periféricos.",
      "Suministrar energía eléctrica estable a todos los componentes del sistema.",
      "Controlar las operaciones de entrada/salida (I/O).",
      "Proporcionar refrigeración activa a la CPU."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Suministrar energía eléctrica estable a todos los componentes del sistema.\". La función principal de una fuente de alimentación ATX es convertir la corriente alterna de la red eléctrica en los diferentes voltajes de corriente continua necesarios para alimentar todos los componentes del sistema.",
    "source": "https://es.wikipedia.org/wiki/Fuente_de_alimentación"
  },
  {
    "id": 293,
    "category": "Conectores de Placa Base",
    "question": "¿Cuántos voltajes principales suministra una fuente de alimentación ATX estándar?",
    "options": [
      "1.",
      "3.",
      "5.",
      "7."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"3.\". Una fuente de alimentación ATX estándar suministra tres voltajes principales: +3.3V, +5V y +12V, aunque el +12V es el más importante para componentes de alto consumo como la CPU y la GPU.",
    "source": "https://es.wikipedia.org/wiki/Fuente_de_alimentación"
  },
  {
    "id": 294,
    "category": "Conectores de Placa Base",
    "question": "¿Cuál es el voltaje estándar suministrado por el riel de +12V en una fuente de alimentación ATX?",
    "options": [
      "3V.",
      "5V.",
      "9V.",
      "12V."
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"12V.\". El riel de +12V es el voltaje estándar suministrado por una fuente de alimentación ATX, utilizado para alimentar componentes de alto consumo como la CPU y la tarjeta gráfica.",
    "source": "https://es.wikipedia.org/wiki/Fuente_de_alimentación"
  },
  {
    "id": 295,
    "category": "Conectores de Placa Base",
    "question": "¿Cuál es la función del conector de alimentación de la CPU en una fuente de alimentación ATX?",
    "options": [
      "Suministrar energía a la tarjeta madre.",
      "Proporcionar energía a la tarjeta de video.",
      "Alimentar directamente la CPU.",
      "Gestionar la conexión a dispositivos de almacenamiento."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Proporcionar energía a la tarjeta de video.\". El conector de alimentación de la CPU (también conocido como conector EPS o ATX 12V) proporciona energía adicional directamente a la CPU, complementando la energía suministrada a través del conector principal de la placa base.",
    "source": "https://es.wikipedia.org/wiki/Fuente_de_alimentación"
  },
  {
    "id": 296,
    "category": "Conectores de Placa Base",
    "question": "¿Cuál es la utilidad de los cables modulares en una fuente de alimentación ATX?",
    "options": [
      "Proporcionar refrigeración adicional al sistema.",
      "Facilitar la gestión del cableado y permitir una apariencia más limpia.",
      "Mejorar la eficiencia de la fuente de alimentación.",
      "Conectar periféricos externos al sistema."
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Facilitar la gestión del cableado y permitir una apariencia más limpia.\". Las fuentes de alimentación modulares permiten desconectar los cables que no se utilizan, mejorando el flujo de aire dentro del chasis y facilitando el montaje y la organización de los cables.",
    "source": "https://es.wikipedia.org/wiki/Fuente_de_alimentación"
  },
  {
    "id": 297,
    "category": "Conectores de Placa Base",
    "question": "¿Cuántos pines tiene típicamente el conector principal de alimentación de la tarjeta madre en una fuente de alimentación ATX?",
    "options": [
      "16.",
      "20.",
      "24.",
      "30."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"24.\". El conector principal de alimentación de la tarjeta madre (conector ATX de 24 pines) es el estándar actual, aunque anteriormente existió una versión de 20 pines.",
    "source": "https://es.wikipedia.org/wiki/ATX"
  },
  {
    "id": 298,
    "category": "Conectores de Placa Base",
    "question": "¿Cuál es la función de los rieles de voltaje en una fuente de alimentación ATX?",
    "options": [
      "Gestionar la potencia total suministrada por la fuente.",
      "Controlar la velocidad del ventilador de la fuente de alimentación.",
      "Proporcionar voltajes específicos a diferentes componentes del sistema.",
      "Regular la eficiencia energética de la fuente."
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Proporcionar voltajes específicos a diferentes componentes del sistema.\". Los rieles de voltaje en una fuente de alimentación ATX suministran voltajes específicos (+3.3V, +5V, +12V, -12V, +5VSB) a diferentes componentes del sistema según sus necesidades.",
    "source": "https://es.wikipedia.org/wiki/Fuente_de_alimentación"
  },
  {
    "id": 299,
    "category": "Conectores de Placa Base",
    "question": "¿Cuál de los siguientes colores es comúnmente asociado con el riel de +5V en los cables de una fuente de alimentación ATX?",
    "options": [
      "Rojo.",
      "Amarillo.",
      "Azul.",
      "Verde."
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Rojo.\". En los cables de una fuente de alimentación ATX, el color rojo se asocia comúnmente con el riel de +5V.",
    "source": "https://es.wikipedia.org/wiki/Fuente_de_alimentación"
  },
{
  "id": 300,
  "category": "Conectores de Placa Base",
  "question": "¿Cuál es el propósito de la certificación de eficiencia energética en una fuente de alimentación ATX?",
  "options": [
    "Determinar la cantidad máxima de energía que puede suministrar.",
    "Indicar la calidad de los materiales utilizados en la fuente.",
    "Evaluar qué tan bien convierte la energía de la red eléctrica en energía utilizable.",
    "Controlar la velocidad del ventilador de la fuente de alimentación."
  ],
  "correct": 2,
  "explanation": "La respuesta correcta es \"Evaluar qué tan bien convierte la energía de la red eléctrica en energía utilizable.\". Las certificaciones como 80 Plus evalúan la eficiencia energética de las fuentes de alimentación.",
  "source": "https://es.wikipedia.org/wiki/Fuente_de_alimentaci%C3%B3n"
},
{
  "id": 301,
  "category": "Conectores de Placa Base",
  "question": "¿Cuál es la función del ventilador en una fuente de alimentación ATX?",
  "options": [
    "Enfriar la CPU.",
    "Regular la temperatura del sistema.",
    "Evitar cortocircuitos en la tarjeta madre.",
    "Mantener la fuente de alimentación a una temperatura segura."
  ],
  "correct": 3,
  "explanation": "La respuesta correcta es \"Mantener la fuente de alimentación a una temperatura segura.\". El ventilador de la fuente de alimentación está diseñado específicamente para refrigerar los componentes internos de la fuente.",
  "source": "https://es.wikipedia.org/wiki/Fuente_de_alimentaci%C3%B3n"
},
{
  "id": 302,
  "category": "Conectores de Placa Base",
  "question": "¿Qué significa la sigla \"ATX\" en el contexto de las fuentes de alimentación?",
  "options": [
    "Advanced Technology eXtended.",
    "Automatic Thermal eXchange.",
    "All-in-One eXperience.",
    "Advanced Thermal eXhaust."
  ],
  "correct": 0,
  "explanation": "La respuesta correcta es \"Advanced Technology eXtended.\". ATX es un factor de forma y especificación para placas base, fuentes de alimentación y chasis de PC.",
  "source": "https://es.wikipedia.org/wiki/ATX"
},
{
  "id": 303,
  "category": "Conectores de Placa Base",
  "question": "¿Cuál es la función del riel de +3.3V en una fuente de alimentación ATX?",
  "options": [
    "Suministrar energía a la CPU.",
    "Proporcionar voltaje a la memoria RAM y otros componentes.",
    "Alimentar la tarjeta de video.",
    "Controlar la velocidad del ventilador."
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Proporcionar voltaje a la memoria RAM y otros componentes.\". El riel de +3.3V se utiliza principalmente para alimentar la memoria RAM y algunos circuitos de la placa base.",
  "source": "https://es.wikipedia.org/wiki/Fuente_de_alimentaci%C3%B3n"
},
{
  "id": 304,
  "category": "Fuentes de Alimentación",
  "question": "¿Cuál de las siguientes afirmaciones es verdadera sobre la eficiencia energética de una fuente de alimentación certificada?",
  "options": [
    "Cuanto mayor sea la eficiencia, más energía se pierde en forma de calor.",
    "La certificación de eficiencia no afecta la cantidad de energía que la fuente de alimentación puede suministrar.",
    "Una fuente de alimentación con mayor eficiencia convierte más eficazmente la energía de la red eléctrica en energía utilizable.",
    "Las fuentes de alimentación no pueden ser certificadas en eficiencia."
  ],
  "correct": 2,
  "explanation": "La respuesta correcta es \"Una fuente de alimentación con mayor eficiencia convierte más eficazmente la energía de la red eléctrica en energía utilizable.\". Una mayor eficiencia significa menos energía desperdiciada en forma de calor.",
  "source": "https://es.wikipedia.org/wiki/Fuente_de_alimentaci%C3%B3n"
},
{
  "id": 305,
  "category": "Conectores de Placa Base",
  "question": "¿Cuál de los siguientes colores es comúnmente asociado con el riel de +12V en los cables de una fuente de alimentación ATX?",
  "options": [
    "Rojo.",
    "Amarillo.",
    "Azul.",
    "Verde."
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Amarillo.\". En el estándar de cables de fuentes de alimentación ATX, el color amarillo corresponde al riel de +12V.",
  "source": "https://es.wikipedia.org/wiki/Fuente_de_alimentaci%C3%B3n"
},
{
  "id": 306,
  "category": "Conectores de Placa Base",
  "question": "¿Cuál es el propósito de los conectores SATA en una fuente de alimentación ATX?",
  "options": [
    "Alimentar la CPU.",
    "Conectar dispositivos de almacenamiento como discos duros y unidades SSD.",
    "Suministrar energía a la tarjeta madre.",
    "Proporcionar voltaje a la tarjeta de video."
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Conectar dispositivos de almacenamiento como discos duros y unidades SSD.\". Los conectores SATA de la fuente de alimentación proporcionan energía a dispositivos de almacenamiento modernos.",
  "source": "https://es.wikipedia.org/wiki/Serial_ATA"
},
{
  "id": 307,
  "category": "Conectores de Placa Base",
  "question": "¿Qué significa la sigla \"ATX\" en el contexto de las fuentes de alimentación?",
  "options": [
    "Advanced Technology eXtended.",
    "Automatic Thermal eXchange.",
    "All-in-One eXperience.",
    "Advanced Thermal eXhaust."
  ],
  "correct": 0,
  "explanation": "La respuesta correcta es \"Advanced Technology eXtended.\". ATX es un factor de forma y especificación para placas base, fuentes de alimentación y chasis de PC.",
  "source": "https://es.wikipedia.org/wiki/ATX"
},
{
  "id": 308,
  "category": "Conectores de Placa Base",
  "question": "¿Cuál es la función del conector EPS (ATX12V) en una fuente de alimentación ATX?",
  "options": [
    "Alimentar la tarjeta madre.",
    "Proporcionar energía a la unidad de procesamiento gráfico (GPU).",
    "Suministrar voltaje a la unidad de disco óptico.",
    "Alimentar la CPU, especialmente en sistemas de alto rendimiento."
  ],
  "correct": 3,
  "explanation": "La respuesta correcta es \"Alimentar la CPU, especialmente en sistemas de alto rendimiento.\". El conector EPS (o ATX12V) proporciona energía adicional directamente a la CPU.",
  "source": "https://es.wikipedia.org/wiki/Fuente_de_alimentaci%C3%B3n"
},
{
  "id": 309,
  "category": "Conectores de Placa Base",
  "question": "¿Cuántos pines tiene típicamente el conector principal de alimentación de la tarjeta madre en una fuente de alimentación ATX?",
  "options": [
    "16.",
    "20.",
    "24.",
    "30."
  ],
  "correct": 2,
  "explanation": "La respuesta correcta es \"24.\". Las fuentes de alimentación ATX modernas utilizan un conector principal de 24 pines para alimentar la tarjeta madre.",
  "source": "https://es.wikipedia.org/wiki/ATX"
},
{
  "id": 310,
  "category": "Conectores de Placa Base",
  "question": "¿Cuál es la función de los rieles de voltaje en una fuente de alimentación ATX?",
  "options": [
    "Gestionar la potencia total suministrada por la fuente.",
    "Controlar la velocidad del ventilador de la fuente de alimentación.",
    "Proporcionar voltajes específicos a diferentes componentes del sistema.",
    "Regular la eficiencia energética de la fuente."
  ],
  "correct": 2,
  "explanation": "La respuesta correcta es \"Proporcionar voltajes específicos a diferentes componentes del sistema.\". Los rieles de voltaje (+3.3V, +5V, +12V, -12V, +5VSB) suministran diferentes voltajes según las necesidades de cada componente.",
  "source": "https://es.wikipedia.org/wiki/Fuente_de_alimentaci%C3%B3n"
},
{
  "id": 311,
  "category": "Conectores de Placa Base",
  "question": "¿Cuál de los siguientes colores es comúnmente asociado con el riel de +3.3V en los cables de una fuente de alimentación ATX?",
  "options": [
    "Rojo.",
    "Amarillo.",
    "Azul.",
    "Verde."
  ],
  "correct": 0,
  "explanation": "La respuesta correcta es \"Rojo.\". En el estándar de cables de fuentes de alimentación ATX, el color rojo corresponde al riel de +3.3V.",
  "source": "https://es.wikipedia.org/wiki/Fuente_de_alimentaci%C3%B3n"
},
{
  "id": 312,
  "category": "Conectores de Placa Base",
  "question": "¿Cuál es la función principal de una fuente de alimentación ATX en un sistema de computadora?",
  "options": [
    "Gestionar la comunicación entre la CPU y los periféricos.",
    "Suministrar energía eléctrica estable a todos los componentes del sistema.",
    "Controlar las operaciones de entrada/salida (I/O).",
    "Proporcionar refrigeración activa a la CPU."
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Suministrar energía eléctrica estable a todos los componentes del sistema.\". La función principal de la fuente de alimentación es convertir la corriente alterna de la red en corriente continua regulada para los componentes del PC.",
  "source": "https://es.wikipedia.org/wiki/Fuente_de_alimentaci%C3%B3n"
},
{
  "id": 313,
  "category": "Conectores de Placa Base",
  "question": "¿Cuántos voltajes principales suministra una fuente de alimentación ATX estándar?",
  "options": [
    "1.",
    "3.",
    "5.",
    "7."
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"3.\". Una fuente de alimentación ATX estándar suministra principalmente tres voltajes positivos: +3.3V, +5V y +12V, además de voltajes negativos y de standby.",
  "source": "https://es.wikipedia.org/wiki/Fuente_de_alimentaci%C3%B3n"
},
{
  "id": 314,
  "category": "Conectores de Placa Base",
  "question": "¿Cuál es la utilidad de los cables modulares en una fuente de alimentación ATX?",
  "options": [
    "Proporcionar refrigeración adicional al sistema.",
    "Facilitar la gestión del cableado y permitir una apariencia más limpia.",
    "Mejorar la eficiencia de la fuente de alimentación.",
    "Conectar periféricos externos al sistema."
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Facilitar la gestión del cableado y permitir una apariencia más limpia.\". Las fuentes de alimentación modulares permiten conectar solo los cables necesarios, mejorando el flujo de aire y la estética del interior del PC.",
  "source": "https://es.wikipedia.org/wiki/Fuente_de_alimentaci%C3%B3n"
},
{
  "id": 315,
  "category": "Fuentes de Alimentación",
  "question": "¿Cuál de las siguientes afirmaciones es verdadera sobre la eficiencia energética de una fuente de alimentación certificada?",
  "options": [
    "Cuanto mayor sea la eficiencia, más energía se pierde en forma de calor.",
    "La certificación de eficiencia no afecta la cantidad de energía que la fuente de alimentación puede suministrar.",
    "Una fuente de alimentación con mayor eficiencia convierte más eficazmente la energía de la red eléctrica en energía utilizable.",
    "Las fuentes de alimentación no pueden ser certificadas en eficiencia."
  ],
  "correct": 2,
  "explanation": "La respuesta correcta es \"Una fuente de alimentación con mayor eficiencia convierte más eficazmente la energía de la red eléctrica en energía utilizable.\". Una mayor eficiencia significa menos energía desperdiciada en forma de calor.",
  "source": "https://es.wikipedia.org/wiki/Fuente_de_alimentaci%C3%B3n"
},
{
  "id": 316,
  "category": "Conectores de Placa Base",
  "question": "¿Cuál es el voltaje estándar suministrado por el riel de +12V en una fuente de alimentación ATX?",
  "options": [
    "3V.",
    "5V.",
    "9V.",
    "12V."
  ],
  "correct": 3,
  "explanation": "La respuesta correcta es \"12V.\". El riel de +12V suministra, como su nombre indica, 12 voltios, que se utilizan principalmente para componentes de alto consumo como la CPU y la GPU.",
  "source": "https://es.wikipedia.org/wiki/Fuente_de_alimentaci%C3%B3n"
},
{
  "id": 317,
  "category": "Conectores de Placa Base",
  "question": "¿Cuál es la función del conector de alimentación de la CPU en una fuente de alimentación ATX?",
  "options": [
    "Suministrar energía a la tarjeta madre.",
    "Proporcionar energía a la tarjeta de video.",
    "Alimentar directamente la CPU.",
    "Gestionar la conexión a dispositivos de almacenamiento."
  ],
  "correct": 2,
  "explanation": "La respuesta correcta es \"Alimentar directamente la CPU.\". El conector de alimentación de la CPU (generalmente de 4+4 pines) proporciona energía adicional y estable directamente al procesador.",
  "source": "https://es.wikipedia.org/wiki/Fuente_de_alimentaci%C3%B3n"
},
{
  "id": 318,
  "category": "Conectores de Placa Base",
  "question": "¿Cuántos pines tiene típicamente el conector principal de alimentación de la tarjeta madre en una fuente de alimentación ATX?",
  "options": [
    "16.",
    "20.",
    "24.",
    "30."
  ],
  "correct": 2,
  "explanation": "La respuesta correcta es \"24.\". Las fuentes de alimentación ATX modernas utilizan un conector principal de 24 pines para alimentar la tarjeta madre.",
  "source": "https://es.wikipedia.org/wiki/ATX"
},
{
  "id": 319,
  "category": "Conectores de Placa Base",
  "question": "¿Cuál de los siguientes colores es comúnmente asociado con el riel de +5V en los cables de una fuente de alimentación ATX?",
  "options": [
    "Rojo.",
    "Amarillo.",
    "Azul.",
    "Verde."
  ],
  "correct": 0,
  "explanation": "La respuesta correcta es \"Rojo.\". En el estándar de cables de fuentes de alimentación ATX, el color rojo corresponde al riel de +5V.",
  "source": "https://es.wikipedia.org/wiki/Fuente_de_alimentaci%C3%B3n"
},
{
  "id": 320,
  "category": "Conectores de Placa Base",
  "question": "¿Cuál es el propósito de los conectores SATA en una fuente de alimentación ATX?",
  "options": [
    "Alimentar la CPU.",
    "Conectar dispositivos de almacenamiento como discos duros y unidades SSD.",
    "Suministrar energía a la tarjeta madre.",
    "Proporcionar voltaje a la tarjeta de video."
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Conectar dispositivos de almacenamiento como discos duros y unidades SSD.\". Los conectores SATA de la fuente de alimentación proporcionan energía a dispositivos de almacenamiento modernos.",
  "source": "https://es.wikipedia.org/wiki/Serial_ATA"
},
{
  "id": 321,
  "category": "Conectores de Placa Base",
  "question": "¿Cuál es la función del ventilador en una fuente de alimentación ATX?",
  "options": [
    "Enfriar la CPU.",
    "Regular la temperatura del sistema.",
    "Evitar cortocircuitos en la tarjeta madre.",
    "Mantener la fuente de alimentación a una temperatura segura."
  ],
  "correct": 3,
  "explanation": "La respuesta correcta es \"Mantener la fuente de alimentación a una temperatura segura.\". El ventilador de la fuente de alimentación está diseñado específicamente para refrigerar los componentes internos de la fuente.",
  "source": "https://es.wikipedia.org/wiki/Fuente_de_alimentaci%C3%B3n"
},
{
  "id": 322,
  "category": "Tarjetas de Expansión",
  "question": "¿Cuál de las siguientes opciones describe mejor un disco duro?",
  "options": [
    "Utiliza memoria flash para almacenar datos de forma permanente.",
    "Emplea discos magnéticos giratorios para el almacenamiento de datos.",
    "Es una unidad de almacenamiento volátil utilizada principalmente para la memoria RAM.",
    "Almacena datos de manera óptica mediante láser."
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Emplea discos magnéticos giratorios para el almacenamiento de datos.\". Un disco duro tradicional (HDD) utiliza platos magnéticos giratorios y cabezales de lectura/escritura para almacenar y recuperar datos.",
  "source": "https://es.wikipedia.org/wiki/Disco_duro"
},
{
  "id": 323,
  "category": "Componentes Básicos",
  "question": "¿Cuál es la función principal de una cadena SCSI (Small Computer System Interface)?",
  "options": [
    "Conectar dispositivos de almacenamiento a través de cables ópticos.",
    "Proporcionar energía a los discos duros.",
    "Facilitar la conexión de dispositivos de almacenamiento a la tarjeta madre.",
    "Permitir la comunicación entre dispositivos de almacenamiento y la CPU."
  ],
  "correct": 2,
  "explanation": "La respuesta correcta es \"Facilitar la conexión de dispositivos de almacenamiento a la tarjeta madre.\". SCSI es una interfaz estándar para conectar periféricos, principalmente dispositivos de almacenamiento, a una computadora.",
  "source": "https://es.wikipedia.org/wiki/SCSI"
},
{
  "id": 324,
  "category": "Conectores de Placa Base",
  "question": "¿Cuántos dispositivos IDE se pueden conectar típicamente a un controlador IDE en una cadena única?",
  "options": [
    "1.",
    "2.",
    "4.",
    "8."
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"2.\". Un controlador IDE (también conocido como PATA) puede conectar hasta dos dispositivos por canal, configurados como maestro y esclavo.",
  "source": "https://es.wikipedia.org/wiki/ATA"
},
{
  "id": 325,
  "category": "Conectores de Placa Base",
  "question": "¿Cuál de las siguientes opciones describe mejor la interfaz SATA (Serial ATA)?",
  "options": [
    "Utiliza un conector de 40 pines para la conexión de dispositivos de almacenamiento.",
    "Transmite datos en forma de paquetes a través de cables paralelos.",
    "Utiliza un conector de 7 pines para la conexión de dispositivos de almacenamiento.",
    "Es una interfaz obsoleta reemplazada por USB."
  ],
  "correct": 2,
  "explanation": "La respuesta correcta es \"Utiliza un conector de 7 pines para la conexión de dispositivos de almacenamiento.\". SATA utiliza un cable de 7 pines para datos y un conector de 15 pines para alimentación.",
  "source": "https://es.wikipedia.org/wiki/Serial_ATA"
},
{
  "id": 326,
  "category": "Almacenamiento",
  "question": "¿Qué significa la sigla \"SSD\" en el contexto de almacenamiento de datos?",
  "options": [
    "Solid-State Drive.",
    "Serial Storage Device.",
    "Sequential System Disk.",
    "Storage and System Drive."
  ],
  "correct": 0,
  "explanation": "La respuesta correcta es \"Solid-State Drive.\". SSD es el acrónimo de Solid-State Drive, un tipo de dispositivo de almacenamiento que utiliza memoria flash en lugar de componentes mecánicos.",
  "source": "https://es.wikipedia.org/wiki/Unidad_de_estado_s%C3%B3lido"
},
{
  "id": 327,
  "category": "Tarjetas de Expansión",
  "question": "¿Cuál de las siguientes opciones describe mejor un disco SSD (Solid-State Drive)?",
  "options": [
    "Utiliza discos magnéticos giratorios para el almacenamiento de datos.",
    "Almacena datos de manera óptica mediante láser.",
    "Utiliza memoria flash para el almacenamiento de datos de forma permanente.",
    "Es una unidad de almacenamiento volátil utilizada principalmente para la memoria RAM."
  ],
  "correct": 2,
  "explanation": "La respuesta correcta es \"Utiliza memoria flash para el almacenamiento de datos de forma permanente.\". Los SSD utilizan memoria flash no volátil para almacenar datos de forma permanente sin partes móviles.",
  "source": "https://es.wikipedia.org/wiki/Unidad_de_estado_s%C3%B3lido"
},
{
  "id": 328,
  "category": "Almacenamiento",
  "question": "¿Cuál es una ventaja comúnmente asociada con los discos SSD en comparación con los discos duros tradicionales?",
  "options": [
    "Mayor capacidad de almacenamiento.",
    "Menor velocidad de lectura/escritura.",
    "Mayor durabilidad y resistencia a impactos.",
    "Menor costo por gigabyte."
  ],
  "correct": 2,
  "explanation": "La respuesta correcta es \"Mayor durabilidad y resistencia a impactos.\". Los SSD no tienen partes móviles, lo que los hace más resistentes a golpes y vibraciones que los discos duros tradicionales.",
  "source": "https://es.wikipedia.org/wiki/Unidad_de_estado_s%C3%B3lido"
},
{
  "id": 329,
  "category": "Almacenamiento",
  "question": "¿Qué tipo de conector utiliza una unidad de disco M.2 para conectarse a la tarjeta madre?",
  "options": [
    "SATA.",
    "USB.",
    "NVMe.",
    "SCSI."
  ],
  "correct": 0,
  "explanation": "La respuesta correcta es \"SATA.\". Las unidades M.2 utilizan un conector físico específico que puede operar con protocolos SATA o NVMe, pero el conector en sí es parte del estándar M.2.",
  "source": "https://es.wikipedia.org/wiki/M.2"
},
{
  "id": 330,
  "category": "Tarjetas de Expansión",
  "question": "¿Cuál de las siguientes opciones describe mejor la interfaz NVMe (Non-Volatile Memory Express)?",
  "options": [
    "Utiliza un conector de 40 pines para la conexión de dispositivos de almacenamiento.",
    "Transmite datos en forma de paquetes a través de cables paralelos.",
    "Utiliza un conector de 7 pines para la conexión de dispositivos de almacenamiento.",
    "Es una interfaz diseñada específicamente para discos SSD de alta velocidad."
  ],
  "correct": 3,
  "explanation": "La respuesta correcta es \"Es una interfaz diseñada específicamente para discos SSD de alta velocidad.\". NVMe es un protocolo de comunicación diseñado para aprovechar al máximo el rendimiento de los SSD basados en memoria flash.",
  "source": "https://es.wikipedia.org/wiki/NVM_Express"
},
{
  "id": 331,
  "category": "Almacenamiento",
  "question": "¿Cuál es la función principal de un disco duro externo?",
  "options": [
    "Proporcionar energía adicional a la tarjeta madre.",
    "Almacenar datos de forma permanente mediante discos magnéticos giratorios.",
    "Facilitar la conexión de dispositivos de almacenamiento a través de cables USB o Thunderbolt.",
    "Mejorar la velocidad de acceso a la memoria RAM."
  ],
  "correct": 2,
  "explanation": "La respuesta correcta es \"Facilitar la conexión de dispositivos de almacenamiento a través de cables USB o Thunderbolt.\". Los discos duros externos permiten almacenamiento portátil y adicional conectándose mediante interfaces como USB o Thunderbolt.",
  "source": "https://es.wikipedia.org/wiki/Disco_duro"
},
{
  "id": 332,
  "category": "Almacenamiento",
  "question": "¿Qué significa la sigla \"HDD\" en el contexto de almacenamiento de datos?",
  "options": [
    "High-Density Drive.",
    "Hard Disk Drive.",
    "Hybrid Data Device.",
    "Hyper Drive Disk."
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Hard Disk Drive.\". HDD es el acrónimo de Hard Disk Drive, el término técnico para un disco duro tradicional que utiliza platos magnéticos giratorios.",
  "source": "https://es.wikipedia.org/wiki/Disco_duro"
},
{
  "id": 333,
  "category": "Conectores de Placa Base",
  "question": "¿Cuántos pines tiene típicamente un conector SATA utilizado para conectar dispositivos de almacenamiento a la tarjeta madre?",
  "options": [
    "7.",
    "15.",
    "20.",
    "30."
  ],
  "correct": 0,
  "explanation": "La respuesta correcta es \"7.\". Un conector SATA de datos tiene 7 pines, mientras que el conector de alimentación SATA tiene 15 pines.",
  "source": "https://es.wikipedia.org/wiki/Serial_ATA"
},
{
  "id": 334,
  "category": "Tarjetas de Expansión",
  "question": "¿Cuál de las siguientes opciones describe mejor un disco duro externo?",
  "options": [
    "Utiliza memoria flash para el almacenamiento de datos de forma permanente.",
    "Almacena datos de manera óptica mediante láser.",
    "Emplea discos magnéticos giratorios y se conecta a través de USB o Thunderbolt.",
    "Es una unidad de almacenamiento volátil utilizada principalmente para la memoria RAM."
  ],
  "correct": 2,
  "explanation": "La respuesta correcta es \"Emplea discos magnéticos giratorios y se conecta a través de USB o Thunderbolt.\". Un disco duro externo típico utiliza la misma tecnología que un disco duro interno pero en una carcasa con interfaz externa.",
  "source": "https://es.wikipedia.org/wiki/Disco_duro"
},
{
  "id": 335,
  "category": "Fuentes de Alimentación",
  "question": "¿Cuál es la función del conector Molex en la alimentación de un disco duro?",
  "options": [
    "Suministrar energía a la CPU.",
    "Proporcionar energía adicional al sistema de refrigeración.",
    "Alimentar directamente la memoria RAM.",
    "Proporcionar energía al disco duro."
  ],
  "correct": 3,
  "explanation": "La respuesta correcta es \"Proporcionar energía al disco duro.\". El conector Molex es un tipo de conector de alimentación utilizado históricamente para discos duros y otros dispositivos internos.",
  "source": "https://es.wikipedia.org/wiki/Conector_Molex"
},
{
  "id": 336,
  "category": "Almacenamiento",
  "question": "¿Qué significa la sigla \"RAID\" en el contexto de almacenamiento de datos?",
  "options": [
    "Random Access Integrated Drive.",
    "Redundant Array of Independent Disks.",
    "Rapid Access and Integration Device.",
    "Read-Only Array of Integrated Drives."
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Redundant Array of Independent Disks.\". RAID es una tecnología que combina múltiples discos duros para mejorar el rendimiento, la capacidad o la tolerancia a fallos.",
  "source": "https://es.wikipedia.org/wiki/RAID"
},
{
  "id": 337,
  "category": "Conectores de Placa Base",
  "question": "¿Cuál de las siguientes opciones describe mejor la interfaz SATA (Serial ATA)?",
  "options": [
    "Utiliza un conector de 40 pines para la conexión de dispositivos de almacenamiento.",
    "Transmite datos en forma de paquetes a través de cables paralelos.",
    "Utiliza un conector de 7 pines para la conexión de dispositivos de almacenamiento.",
    "Es una interfaz obsoleta reemplazada por USB."
  ],
  "correct": 2,
  "explanation": "La respuesta correcta es \"Utiliza un conector de 7 pines para la conexión de dispositivos de almacenamiento.\". SATA utiliza un cable de 7 pines para datos y un conector de 15 pines para alimentación.",
  "source": "https://es.wikipedia.org/wiki/Serial_ATA"
},
{
  "id": 338,
  "category": "Componentes Básicos",
  "question": "¿Cuál es la función principal de una cadena SCSI (Small Computer System Interface)?",
  "options": [
    "Conectar dispositivos de almacenamiento a través de cables ópticos.",
    "Proporcionar energía a los discos duros.",
    "Facilitar la conexión de dispositivos de almacenamiento a la tarjeta madre.",
    "Permitir la comunicación entre dispositivos de almacenamiento y la CPU."
  ],
  "correct": 2,
  "explanation": "La respuesta correcta es \"Facilitar la conexión de dispositivos de almacenamiento a la tarjeta madre.\". SCSI es una interfaz estándar para conectar periféricos, principalmente dispositivos de almacenamiento, a una computadora.",
  "source": "https://es.wikipedia.org/wiki/SCSI"
},
{
  "id": 339,
  "category": "Conectores de Placa Base",
  "question": "¿Cuántos dispositivos IDE se pueden conectar típicamente a un controlador IDE en una cadena única?",
  "options": [
    "1.",
    "2.",
    "4.",
    "8."
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"2.\". Un controlador IDE (también conocido como PATA) puede conectar hasta dos dispositivos por canal, configurados como maestro y esclavo.",
  "source": "https://es.wikipedia.org/wiki/ATA"
},
{
  "id": 340,
  "category": "Tarjetas de Expansión",
  "question": "¿Cuál de las siguientes opciones describe mejor un disco duro externo?",
  "options": [
    "Utiliza memoria flash para el almacenamiento de datos de forma permanente.",
    "Almacena datos de manera óptica mediante láser.",
    "Emplea discos magnéticos giratorios y se conecta a través de USB o Thunderbolt.",
    "Es una unidad de almacenamiento volátil utilizada principalmente para la memoria RAM."
  ],
  "correct": 2,
  "explanation": "La respuesta correcta es \"Emplea discos magnéticos giratorios y se conecta a través de USB o Thunderbolt.\". Un disco duro externo típico utiliza la misma tecnología que un disco duro interno pero en una carcasa con interfaz externa.",
  "source": "https://es.wikipedia.org/wiki/Disco_duro"
},
{
  "id": 341,
  "category": "Fuentes de Alimentación",
  "question": "¿Cuál es la función del conector Molex en la alimentación de un disco duro?",
  "options": [
    "Suministrar energía a la CPU.",
    "Proporcionar energía adicional al sistema de refrigeración.",
    "Alimentar directamente la memoria RAM.",
    "Proporcionar energía al disco duro."
  ],
  "correct": 3,
  "explanation": "La respuesta correcta es \"Proporcionar energía al disco duro.\". El conector Molex es un tipo de conector de alimentación utilizado históricamente para discos duros y otros dispositivos internos.",
  "source": "https://es.wikipedia.org/wiki/Conector_Molex"
},
{
  "id": 342,
  "category": "Conectores de Placa Base",
  "question": "¿Cuántos pines tiene típicamente un conector SATA utilizado para conectar dispositivos de almacenamiento a la tarjeta madre?",
  "options": [
    "7.",
    "15.",
    "20.",
    "30."
  ],
  "correct": 0,
  "explanation": "La respuesta correcta es \"7.\". Un conector SATA de datos tiene 7 pines, mientras que el conector de alimentación SATA tiene 15 pines.",
  "source": "https://es.wikipedia.org/wiki/Serial_ATA"
},
{
  "id": 343,
  "category": "Tarjetas de Expansión",
  "question": "¿Cuál de las siguientes opciones describe mejor un disco SSD (Solid-State Drive)?",
  "options": [
    "Utiliza discos magnéticos giratorios para el almacenamiento de datos.",
    "Almacena datos de manera óptica mediante láser.",
    "Utiliza memoria flash para el almacenamiento de datos de forma permanente.",
    "Es una unidad de almacenamiento volátil utilizada principalmente para la memoria RAM."
  ],
  "correct": 2,
  "explanation": "La respuesta correcta es \"Utiliza memoria flash para el almacenamiento de datos de forma permanente.\". Los SSD utilizan memoria flash no volátil para almacenar datos de forma permanente sin partes móviles.",
  "source": "https://es.wikipedia.org/wiki/Unidad_de_estado_s%C3%B3lido"
},
{
  "id": 344,
  "category": "Conectores de Placa Base",
  "question": "¿Cuántos pines tiene típicamente un conector SATA utilizado para conectar dispositivos de almacenamiento a la tarjeta madre?",
  "options": [
    "7.",
    "15.",
    "20.",
    "30."
  ],
  "correct": 0,
  "explanation": "La respuesta correcta es \"7.\". Un conector SATA de datos tiene 7 pines, mientras que el conector de alimentación SATA tiene 15 pines.",
  "source": "https://es.wikipedia.org/wiki/Serial_ATA"
},
{
  "id": 345,
  "category": "Almacenamiento",
  "question": "¿Cuál es una ventaja comúnmente asociada con los discos SSD en comparación con los discos duros tradicionales?",
  "options": [
    "Mayor capacidad de almacenamiento.",
    "Menor velocidad de lectura/escritura.",
    "Mayor durabilidad y resistencia a impactos.",
    "Menor costo por gigabyte."
  ],
  "correct": 2,
  "explanation": "La respuesta correcta es \"Mayor durabilidad y resistencia a impactos.\". Los SSD no tienen partes móviles, lo que los hace más resistentes a golpes y vibraciones que los discos duros tradicionales.",
  "source": "https://es.wikipedia.org/wiki/Unidad_de_estado_s%C3%B3lido"
},
{
  "id": 346,
  "category": "Almacenamiento",
  "question": "¿Qué tipo de conector utiliza una unidad de disco M.2 para conectarse a la tarjeta madre?",
  "options": [
    "SATA.",
    "USB.",
    "NVMe.",
    "SCSI."
  ],
  "correct": 0,
  "explanation": "La respuesta correcta es \"SATA.\". Las unidades M.2 utilizan un conector físico específico que puede operar con protocolos SATA o NVMe, pero el conector en sí es parte del estándar M.2.",
  "source": "https://es.wikipedia.org/wiki/M.2"
},
{
  "id": 347,
  "category": "Tarjetas de Expansión",
  "question": "¿Cuál de las siguientes opciones describe mejor la interfaz NVMe (Non-Volatile Memory Express)?",
  "options": [
    "Utiliza un conector de 40 pines para la conexión de dispositivos de almacenamiento.",
    "Transmite datos en forma de paquetes a través de cables paralelos.",
    "Utiliza un conector de 7 pines para la conexión de dispositivos de almacenamiento.",
    "Es una interfaz diseñada específicamente para discos SSD de alta velocidad."
  ],
  "correct": 3,
  "explanation": "La respuesta correcta es \"Es una interfaz diseñada específicamente para discos SSD de alta velocidad.\". NVMe es un protocolo de comunicación diseñado para aprovechar al máximo el rendimiento de los SSD basados en memoria flash.",
  "source": "https://es.wikipedia.org/wiki/NVM_Express"
},
{
  "id": 348,
  "category": "Almacenamiento",
  "question": "¿Cuál de las siguientes afirmaciones es verdadera sobre la capacidad de almacenamiento de un disco duro o SSD?",
  "options": [
    "La capacidad se mide en megabytes (MB) únicamente.",
    "La capacidad se mide en gigabytes (GB) y terabytes (TB).",
    "La capacidad no es una consideración importante al elegir un dispositivo de almacenamiento.",
    "La capacidad se mide únicamente en kilobytes (KB)."
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"La capacidad se mide en gigabytes (GB) y terabytes (TB).\". Los dispositivos de almacenamiento modernos tienen capacidades que se miden comúnmente en gigabytes o terabytes.",
  "source": "https://es.wikipedia.org/wiki/Unidad_de_almacenamiento_de_datos"
},
{
  "id": 349,
  "category": "Almacenamiento",
  "question": "¿Qué significa la sigla \"RAID\" en el contexto de almacenamiento de datos?",
  "options": [
    "Random Access Integrated Drive.",
    "Redundant Array of Independent Disks.",
    "Rapid Access and Integration Device.",
    "Read-Only Array of Integrated Drives."
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Redundant Array of Independent Disks.\". RAID es una tecnología que combina múltiples discos duros para mejorar el rendimiento, la capacidad o la tolerancia a fallos.",
  "source": "https://es.wikipedia.org/wiki/RAID"
},
{
  "id": 350,
  "category": "Almacenamiento",
  "question": "¿Cuál de las siguientes afirmaciones es verdadera sobre la capacidad de almacenamiento de un disco duro o SSD?",
  "options": [
    "La capacidad se mide en megabytes (MB) únicamente.",
    "La capacidad se mide en gigabytes (GB) y terabytes (TB).",
    "La capacidad no es una consideración importante al elegir un dispositivo de almacenamiento.",
    "La capacidad se mide únicamente en kilobytes (KB)."
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"La capacidad se mide en gigabytes (GB) y terabytes (TB).\". Los dispositivos de almacenamiento modernos tienen capacidades que se miden comúnmente en gigabytes o terabytes.",
  "source": "https://es.wikipedia.org/wiki/Unidad_de_almacenamiento_de_datos"
},
{
  "id": 351,
  "category": "Almacenamiento",
  "question": "¿Cuál es la función principal de un disco duro externo?",
  "options": [
    "Proporcionar energía adicional a la tarjeta madre.",
    "Almacenar datos de forma permanente mediante discos magnéticos giratorios.",
    "Facilitar la conexión de dispositivos de almacenamiento a través de cables USB o Thunderbolt.",
    "Mejorar la velocidad de acceso a la memoria RAM."
  ],
  "correct": 2,
  "explanation": "La respuesta correcta es \"Facilitar la conexión de dispositivos de almacenamiento a través de cables USB o Thunderbolt.\". Los discos duros externos permiten almacenamiento portátil y adicional conectándose mediante interfaces como USB o Thunderbolt.",
  "source": "https://es.wikipedia.org/wiki/Disco_duro"
},
{
  "id": 352,
  "category": "Tarjetas Gráficas",
  "question": "¿Qué significa la sigla \"GPU\" en el contexto de hardware informático?",
  "options": [
    "General Processing Unit.",
    "Graphics Processing Unit.",
    "General Purpose Unit.",
    "Graphics Performance Unit."
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Graphics Processing Unit.\". GPU es el acrónimo de Graphics Processing Unit, un procesador especializado en el renderizado de gráficos.",
  "source": "https://es.wikipedia.org/wiki/Unidad_de_procesamiento_gr%C3%A1fico"
},
{
  "id": 353,
  "category": "Tarjetas Gráficas",
  "question": "¿Cuál de los siguientes fabricantes es conocido por sus tarjetas gráficas GeForce?",
  "options": [
    "AMD.",
    "Intel.",
    "NVIDIA.",
    "ASUS."
  ],
  "correct": 2,
  "explanation": "La respuesta correcta es \"NVIDIA.\". GeForce es la marca de tarjetas gráficas de consumo de NVIDIA.",
  "source": "https://es.wikipedia.org/wiki/GeForce"
},
{
  "id": 354,
  "category": "Tarjetas Gráficas",
  "question": "¿Qué es CUDA en el contexto de tarjetas gráficas NVIDIA?",
  "options": [
    "Un tipo de conector de pantalla.",
    "Una interfaz de usuario para configurar gráficos.",
    "Una arquitectura de procesamiento paralelo desarrollada por NVIDIA.",
    "Una tecnología de refrigeración avanzada."
  ],
  "correct": 2,
  "explanation": "La respuesta correcta es \"Una arquitectura de procesamiento paralelo desarrollada por NVIDIA.\". CUDA es una plataforma de computación paralela y un modelo de programación creado por NVIDIA.",
  "source": "https://es.wikipedia.org/wiki/CUDA"
},
{
  "id": 355,
  "category": "Chipsets y CPU",
  "question": "¿Cuántos procesadores de flujo tiene típicamente una tarjeta gráfica moderna?",
  "options": [
    "32.",
    "128.",
    "512.",
    "Varía según el modelo y la marca."
  ],
  "correct": 3,
  "explanation": "La respuesta correcta es \"Varía según el modelo y la marca.\". El número de procesadores de flujo (o núcleos CUDA en NVIDIA) varía enormemente según el modelo específico de la tarjeta gráfica, desde cientos en modelos de entrada hasta miles en modelos de gama alta.",
  "source": "https://es.wikipedia.org/wiki/Unidad_de_procesamiento_gr%C3%A1fico"
},
{
  "id": 356,
  "category": "Tarjetas de Expansión",
  "question": "¿Cuál de las siguientes opciones describe mejor la memoria GDDR en una tarjeta gráfica?",
  "options": [
    "Graphics Double Data Rate.",
    "General Dynamic Data RAM.",
    "Graphics Disk Drive RAM.",
    "General Double Density RAM."
  ],
  "correct": 0,
  "explanation": "La respuesta correcta es \"Graphics Double Data Rate.\". GDDR es el acrónimo de Graphics Double Data Rate, un tipo de memoria SDRAM especializada para tarjetas gráficas.",
  "source": "https://es.wikipedia.org/wiki/GDDR"
},
{
  "id": 357,
  "category": "Tarjetas Gráficas",
  "question": "¿Qué tamaño de tarjeta gráfica es comúnmente conocido como \"dual-slot\"?",
  "options": [
    "Mini-ITX.",
    "Full-Height.",
    "ATX.",
    "Dos ranuras de expansión."
  ],
  "correct": 3,
  "explanation": "La respuesta correcta es \"Dos ranuras de expansión.\". Una tarjeta gráfica \"dual-slot\" ocupa el espacio de dos ranuras de expansión en la placa base, generalmente por su sistema de refrigeración.",
  "source": "https://es.wikipedia.org/wiki/Tarjeta_gr%C3%A1fica"
},
{
  "id": 358,
  "category": "Tarjetas Gráficas",
  "question": "¿Cuál de las siguientes interfaces se utiliza comúnmente para conectar tarjetas gráficas a la tarjeta madre?",
  "options": [
    "SATA.",
    "PCIe.",
    "USB.",
    "Thunderbolt."
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"PCIe.\". Las tarjetas gráficas modernas se conectan a la placa base a través de ranuras PCIe (PCI Express).",
  "source": "https://es.wikipedia.org/wiki/PCI_Express"
},
{
  "id": 359,
  "category": "Tarjetas Gráficas",
  "question": "¿Cuál de los siguientes fabricantes es conocido por su línea de tarjetas gráficas Radeon?",
  "options": [
    "NVIDIA.",
    "Intel.",
    "ASUS.",
    "AMD."
  ],
  "correct": 3,
  "explanation": "La respuesta correcta es \"AMD.\". Radeon es la marca de tarjetas gráficas de AMD (anteriormente ATI).",
  "source": "https://es.wikipedia.org/wiki/Radeon"
},
{
  "id": 360,
  "category": "Tarjetas de Expansión",
  "question": "¿Cuál de las siguientes opciones describe mejor el propósito de una tarjeta gráfica integrada?",
  "options": [
    "Ofrecer un rendimiento gráfico superior en aplicaciones 3D.",
    "Proporcionar capacidades gráficas básicas sin requerir una tarjeta gráfica dedicada.",
    "Mejorar la velocidad de la CPU en tareas generales.",
    "Agregar funcionalidades de realidad virtual."
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Proporcionar capacidades gráficas básicas sin requerir una tarjeta gráfica dedicada.\". Las tarjetas gráficas integradas están incluidas en la CPU o chipset y ofrecen funcionalidades gráficas básicas.",
  "source": "https://es.wikipedia.org/wiki/Tarjeta_gr%C3%A1fica_integrada"
},
{
  "id": 361,
  "category": "Tipos de Memoria",
  "question": "¿Qué significa la sigla \"VRAM\" en el contexto de tarjetas gráficas?",
  "options": [
    "Virtual RAM.",
    "Video RAM.",
    "Volatile RAM.",
    "Variable RAM."
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Video RAM.\". VRAM es el acrónimo de Video RAM, un tipo de memoria RAM dedicada para tarjetas gráficas.",
  "source": "https://es.wikipedia.org/wiki/Video_RAM"
},
{
  "id": 362,
  "category": "Tarjetas Gráficas",
  "question": "¿Cuál es el propósito principal de los núcleos CUDA en una tarjeta gráfica NVIDIA?",
  "options": [
    "Mejorar el rendimiento de la memoria RAM.",
    "Acelerar cálculos paralelos utilizando la arquitectura CUDA.",
    "Gestionar la interfaz de usuario.",
    "Controlar la velocidad del ventilador."
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Acelerar cálculos paralelos utilizando la arquitectura CUDA.\". Los núcleos CUDA están diseñados para procesamiento paralelo, acelerando tanto tareas gráficas como computacionales.",
  "source": "https://es.wikipedia.org/wiki/CUDA"
},
{
  "id": 363,
  "category": "Tarjetas Gráficas",
  "question": "¿Cuál de las siguientes afirmaciones es verdadera sobre el tamaño físico de una tarjeta gráfica Mini-ITX?",
  "options": [
    "Es más grande que una tarjeta gráfica ATX.",
    "Es el mismo que una tarjeta gráfica Full-Height.",
    "Es más pequeño que una tarjeta gráfica ATX y generalmente diseñado para sistemas compactos.",
    "Varía significativamente dependiendo del fabricante."
  ],
  "correct": 2,
  "explanation": "La respuesta correcta es \"Es más pequeño que una tarjeta gráfica ATX y generalmente diseñado para sistemas compactos.\". Las tarjetas gráficas Mini-ITX están diseñadas específicamente para sistemas de factor de forma pequeño.",
  "source": "https://es.wikipedia.org/wiki/Tarjeta_gr%C3%A1fica"
},
{
  "id": 364,
  "category": "Tarjetas de Expansión",
  "question": "¿Cuál de las siguientes opciones describe mejor la arquitectura de núcleos Tensor en tarjetas gráficas modernas?",
  "options": [
    "Diseñada para mejorar el rendimiento en juegos.",
    "Centrada en acelerar operaciones de inteligencia artificial y aprendizaje profundo.",
    "Especializada en gráficos 2D.",
    "Controla las funciones de visualización en múltiples monitores."
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Centrada en acelerar operaciones de inteligencia artificial y aprendizaje profundo.\". Los núcleos Tensor están especializados en operaciones de inteligencia artificial y aprendizaje automático.",
  "source": "https://es.wikipedia.org/wiki/Tensor_core"
},
{
  "id": 365,
  "category": "Tarjetas Gráficas",
  "question": "¿Cuál de las siguientes afirmaciones es verdadera sobre las tarjetas gráficas externas (eGPU)?",
  "options": [
    "Son solo compatibles con computadoras de escritorio.",
    "Se conectan a través de puertos USB.",
    "Mejoran el rendimiento gráfico de computadoras portátiles y ultrabooks.",
    "No requieren alimentación eléctrica adicional."
  ],
  "correct": 2,
  "explanation": "La respuesta correcta es \"Mejoran el rendimiento gráfico de computadoras portátiles y ultrabooks.\". Las eGPU permiten a los portátiles con capacidades gráficas limitadas utilizar tarjetas gráficas dedicadas externamente.",
  "source": "https://es.wikipedia.org/wiki/External_graphics_processing_unit"
},
{
  "id": 366,
  "category": "Tarjetas Gráficas",
  "question": "¿Cuál de las siguientes interfaces se utiliza comúnmente para conectar tarjetas gráficas a la tarjeta madre?",
  "options": [
    "SATA.",
    "PCIe.",
    "USB.",
    "Thunderbolt."
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"PCIe.\". Las tarjetas gráficas modernas se conectan a la placa base a través de ranuras PCIe (PCI Express).",
  "source": "https://es.wikipedia.org/wiki/PCI_Express"
},
{
  "id": 367,
  "category": "Tarjetas de Expansión",
  "question": "¿Cuál de las siguientes opciones describe mejor el propósito de una tarjeta gráfica integrada?",
  "options": [
    "Ofrecer un rendimiento gráfico superior en aplicaciones 3D.",
    "Proporcionar capacidades gráficas básicas sin requerir una tarjeta gráfica dedicada.",
    "Mejorar la velocidad de la CPU en tareas generales.",
    "Agregar funcionalidades de realidad virtual."
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Proporcionar capacidades gráficas básicas sin requerir una tarjeta gráfica dedicada.\". Las tarjetas gráficas integradas están incluidas en la CPU o chipset y ofrecen funcionalidades gráficas básicas.",
  "source": "https://es.wikipedia.org/wiki/Tarjeta_gr%C3%A1fica_integrada"
},
{
  "id": 368,
  "category": "Tarjetas Gráficas",
  "question": "¿Cuál de los siguientes fabricantes es conocido por su línea de tarjetas gráficas GeForce?",
  "options": [
    "NVIDIA.",
    "Intel.",
    "ASUS.",
    "AMD."
  ],
  "correct": 0,
  "explanation": "La respuesta correcta es \"NVIDIA.\". GeForce es la marca de tarjetas gráficas de consumo de NVIDIA.",
  "source": "https://es.wikipedia.org/wiki/GeForce"
},
{
  "id": 369,
  "category": "Chipsets y CPU",
  "question": "¿Cuántos procesadores de flujo tiene típicamente una tarjeta gráfica moderna?",
  "options": [
    "32.",
    "128.",
    "512.",
    "Varía según el modelo y la marca."
  ],
  "correct": 3,
  "explanation": "La respuesta correcta es \"Varía según el modelo y la marca.\". El número de procesadores de flujo (o núcleos CUDA en NVIDIA) varía enormemente según el modelo específico de la tarjeta gráfica, desde cientos en modelos de entrada hasta miles en modelos de gama alta.",
  "source": "https://es.wikipedia.org/wiki/Unidad_de_procesamiento_gr%C3%A1fico"
},
{
  "id": 370,
  "category": "Tarjetas Gráficas",
  "question": "¿Qué significa la sigla \"GPU\" en el contexto de hardware informático?",
  "options": [
    "General Processing Unit.",
    "Graphics Processing Unit.",
    "General Purpose Unit.",
    "Graphics Performance Unit."
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Graphics Processing Unit.\". GPU es el acrónimo de Graphics Processing Unit, un procesador especializado en el renderizado de gráficos.",
  "source": "https://es.wikipedia.org/wiki/Unidad_de_procesamiento_gr%C3%A1fico"
},
{
  "id": 371,
  "category": "Tarjetas de Expansión",
  "question": "¿Cuál de las siguientes opciones describe mejor la memoria GDDR en una tarjeta gráfica?",
  "options": [
    "Graphics Double Data Rate.",
    "General Dynamic Data RAM.",
    "Graphics Disk Drive RAM.",
    "General Double Density RAM."
  ],
  "correct": 0,
  "explanation": "La respuesta correcta es \"Graphics Double Data Rate.\". GDDR es el acrónimo de Graphics Double Data Rate, un tipo de memoria SDRAM especializada para tarjetas gráficas que ofrece alto ancho de banda.",
  "source": "https://es.wikipedia.org/wiki/GDDR"
},
{
  "id": 372,
  "category": "Tarjetas Gráficas",
  "question": "¿Cuál de los siguientes fabricantes es conocido por su línea de tarjetas gráficas Radeon?",
  "options": [
    "NVIDIA.",
    "Intel.",
    "ASUS.",
    "AMD."
  ],
  "correct": 3,
  "explanation": "La respuesta correcta es \"AMD.\". Radeon es la marca de tarjetas gráficas de AMD (anteriormente ATI Technologies), que compite directamente con las GeForce de NVIDIA.",
  "source": "https://es.wikipedia.org/wiki/Radeon"
},
{
  "id": 373,
  "category": "Tarjetas Gráficas",
  "question": "¿Cuál de las siguientes afirmaciones es verdadera sobre el tamaño físico de una tarjeta gráfica Mini-ITX?",
  "options": [
    "Es más grande que una tarjeta gráfica ATX.",
    "Es el mismo que una tarjeta gráfica Full-Height.",
    "Es más pequeño que una tarjeta gráfica ATX y generalmente diseñado para sistemas compactos.",
    "Varía significativamente dependiendo del fabricante."
  ],
  "correct": 2,
  "explanation": "La respuesta correcta es \"Es más pequeño que una tarjeta gráfica ATX y generalmente diseñado para sistemas compactos.\". Las tarjetas gráficas Mini-ITX están diseñadas específicamente para sistemas de factor de forma pequeño como los HTPC o computadoras compactas.",
  "source": "https://es.wikipedia.org/wiki/Tarjeta_gr%C3%A1fica"
},
{
  "id": 374,
  "category": "Tarjetas de Expansión",
  "question": "¿Cuál de las siguientes opciones describe mejor la arquitectura de núcleos Tensor en tarjetas gráficas modernas?",
  "options": [
    "Diseñada para mejorar el rendimiento en juegos.",
    "Centrada en acelerar operaciones de inteligencia artificial y aprendizaje profundo.",
    "Especializada en gráficos 2D.",
    "Controla las funciones de visualización en múltiples monitores."
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Centrada en acelerar operaciones de inteligencia artificial y aprendizaje profundo.\". Los núcleos Tensor están especializados en operaciones de inteligencia artificial y aprendizaje automático, acelerando tareas como el entrenamiento de redes neuronales.",
  "source": "https://es.wikipedia.org/wiki/Tensor_core"
},
{
  "id": 375,
  "category": "Tarjetas Gráficas",
  "question": "¿Cuál de las siguientes afirmaciones es verdadera sobre las tarjetas gráficas externas (eGPU)?",
  "options": [
    "Son solo compatibles con computadoras de escritorio.",
    "Se conectan a través de puertos USB.",
    "Mejoran el rendimiento gráfico de computadoras portátiles y ultrabooks.",
    "No requieren alimentación eléctrica adicional."
  ],
  "correct": 2,
  "explanation": "La respuesta correcta es \"Mejoran el rendimiento gráfico de computadoras portátiles y ultrabooks.\". Las eGPU permiten a los portátiles con capacidades gráficas limitadas utilizar tarjetas gráficas dedicadas externamente, generalmente a través de Thunderbolt.",
  "source": "https://es.wikipedia.org/wiki/External_graphics_processing_unit"
},
{
  "id": 376,
  "category": "Tarjetas Gráficas",
  "question": "¿Cuál de los siguientes fabricantes es conocido por sus tarjetas gráficas GeForce?",
  "options": [
    "AMD.",
    "Intel.",
    "NVIDIA.",
    "ASUS."
  ],
  "correct": 2,
  "explanation": "La respuesta correcta es \"NVIDIA.\". GeForce es la marca de tarjetas gráficas de consumo de NVIDIA, una de las líneas más populares en el mercado de tarjetas gráficas.",
  "source": "https://es.wikipedia.org/wiki/GeForce"
},
{
  "id": 377,
  "category": "Tarjetas Gráficas",
  "question": "¿Qué es CUDA en el contexto de tarjetas gráficas NVIDIA?",
  "options": [
    "Un tipo de conector de pantalla.",
    "Una interfaz de usuario para configurar gráficos.",
    "Una arquitectura de procesamiento paralelo desarrollada por NVIDIA.",
    "Una tecnología de refrigeración avanzada."
  ],
  "correct": 2,
  "explanation": "La respuesta correcta es \"Una arquitectura de procesamiento paralelo desarrollada por NVIDIA.\". CUDA es una plataforma de computación paralela y un modelo de programación creado por NVIDIA que permite a los desarrolladores utilizar la GPU para computación de propósito general.",
  "source": "https://es.wikipedia.org/wiki/CUDA"
},
{
  "id": 378,
  "category": "Tarjetas de Expansión",
  "question": "¿Cuál de las siguientes opciones describe mejor el propósito de una tarjeta gráfica integrada?",
  "options": [
    "Ofrecer un rendimiento gráfico superior en aplicaciones 3D.",
    "Proporcionar capacidades gráficas básicas sin requerir una tarjeta gráfica dedicada.",
    "Mejorar la velocidad de la CPU en tareas generales.",
    "Agregar funcionalidades de realidad virtual."
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Proporcionar capacidades gráficas básicas sin requerir una tarjeta gráfica dedicada.\". Las tarjetas gráficas integradas están incluidas en la CPU o chipset y ofrecen funcionalidades gráficas básicas para tareas cotidianas.",
  "source": "https://es.wikipedia.org/wiki/Tarjeta_gr%C3%A1fica_integrada"
},
{
  "id": 379,
  "category": "Chipsets y CPU",
  "question": "¿Cuántos procesadores de flujo tiene típicamente una tarjeta gráfica moderna?",
  "options": [
    "32.",
    "128.",
    "512.",
    "Varía según el modelo y la marca."
  ],
  "correct": 3,
  "explanation": "La respuesta correcta es \"Varía según el modelo y la marca.\". El número de procesadores de flujo (o núcleos CUDA en NVIDIA) varía enormemente según el modelo específico de la tarjeta gráfica, desde cientos en modelos de entrada hasta miles en modelos de gama alta.",
  "source": "https://es.wikipedia.org/wiki/Unidad_de_procesamiento_gr%C3%A1fico"
},
{
  "id": 380,
  "category": "Tarjetas de Expansión",
  "question": "¿Cuál de las siguientes opciones describe mejor la arquitectura de núcleos Tensor en tarjetas gráficas modernas?",
  "options": [
    "Diseñada para mejorar el rendimiento en juegos.",
    "Centrada en acelerar operaciones de inteligencia artificial y aprendizaje profundo.",
    "Especializada en gráficos 2D.",
    "Controla las funciones de visualización en múltiples monitores."
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Centrada en acelerar operaciones de inteligencia artificial y aprendizaje profundo.\". Los núcleos Tensor están especializados en operaciones de inteligencia artificial y aprendizaje automático, acelerando tareas como el entrenamiento de redes neuronales.",
  "source": "https://es.wikipedia.org/wiki/Tensor_core"
},
{
  "id": 381,
  "category": "Tarjetas Gráficas",
  "question": "¿Cuál es el propósito principal de los núcleos CUDA en una tarjeta gráfica NVIDIA?",
  "options": [
    "Mejorar el rendimiento de la memoria RAM.",
    "Acelerar cálculos paralelos utilizando la arquitectura CUDA.",
    "Gestionar la interfaz de usuario.",
    "Controlar la velocidad del ventilador."
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Acelerar cálculos paralelos utilizando la arquitectura CUDA.\". Los núcleos CUDA están diseñados para procesamiento paralelo, acelerando tanto tareas gráficas como computacionales a través de la plataforma CUDA.",
  "source": "https://es.wikipedia.org/wiki/CUDA"
},
{
  "id": 382,
  "category": "Conectores de Placa Base",
  "question": "¿Cuál es la finalidad principal de los buses en una placa base?",
  "options": [
    "Gestionar la comunicación entre la CPU y los periféricos.",
    "Alimentar los componentes de la placa base.",
    "Controlar la velocidad del ventilador.",
    "Administrar la memoria RAM."
  ],
  "correct": 0,
  "explanation": "La respuesta correcta es \"Gestionar la comunicación entre la CPU y los periféricos.\". Los buses son las vías de comunicación que permiten la transferencia de datos entre los diferentes componentes de la placa base.",
  "source": "https://es.wikipedia.org/wiki/Bus_(inform%C3%A1tica)"
},
{
  "id": 383,
  "category": "Conectores de Placa Base",
  "question": "¿Qué es un bus de datos en el contexto de la placa base?",
  "options": [
    "Un conector para dispositivos de almacenamiento.",
    "Una vía de comunicación por donde se transmiten los datos entre la CPU y otros componentes.",
    "Un sistema de alimentación para la tarjeta madre.",
    "Un conector de pantalla."
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Una vía de comunicación por donde se transmiten los datos entre la CPU y otros componentes.\". El bus de datos es el canal a través del cual se transfieren los datos entre los diferentes componentes del sistema.",
  "source": "https://es.wikipedia.org/wiki/Bus_(inform%C3%A1tica)"
},
{
  "id": 384,
  "category": "Conectores de Placa Base",
  "question": "¿Cuál de las siguientes afirmaciones es verdadera sobre un bus de dirección en la placa base?",
  "options": [
    "Controla la velocidad de la CPU.",
    "Facilita la conexión de dispositivos de almacenamiento.",
    "Determina la cantidad máxima de memoria que la CPU puede direccionar.",
    "Regula la temperatura del sistema."
  ],
  "correct": 2,
  "explanation": "La respuesta correcta es \"Determina la cantidad máxima de memoria que la CPU puede direccionar.\". El bus de dirección se utiliza para especificar la ubicación de memoria a la que se quiere acceder, determinando la cantidad máxima de memoria direccionable.",
  "source": "https://es.wikipedia.org/wiki/Bus_de_direcci%C3%B3n"
},
{
  "id": 385,
  "category": "Arquitectura de Sistema",
  "question": "¿Cuál es la ventaja principal de un bus de datos más ancho (por ejemplo, de 64 bits) en comparación con uno más estrecho (por ejemplo, de 32 bits)?",
  "options": [
    "Mayor velocidad de transferencia de datos.",
    "Menor consumo de energía.",
    "Mayor compatibilidad con periféricos antiguos.",
    "Menor costo de fabricación."
  ],
  "correct": 0,
  "explanation": "La respuesta correcta es \"Mayor velocidad de transferencia de datos.\". Un bus de datos más ancho puede transferir más bits simultáneamente, lo que resulta en una mayor velocidad de transferencia de datos.",
  "source": "https://es.wikipedia.org/wiki/Bus_(inform%C3%A1tica)"
},
{
  "id": 386,
  "category": "Conectores de Placa Base",
  "question": "¿Dónde suele estar ubicado el bus PCI Express (PCIe) en una placa base?",
  "options": [
    "En el extremo superior de la placa.",
    "En el centro de la placa.",
    "En la parte inferior de la placa.",
    "En el lateral de la placa."
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"En el centro de la placa.\". Las ranuras PCIe suelen estar ubicadas en la parte central de la placa base, generalmente debajo del socket de la CPU y a la izquierda de los módulos de memoria RAM.",
  "source": "https://es.wikipedia.org/wiki/PCI_Express"
},
{
  "id": 387,
  "category": "Conectores de Placa Base",
  "question": "¿Cuál es la finalidad principal de un bus de sistema (FSB) en la placa base?",
  "options": [
    "Conectar periféricos externos.",
    "Facilitar la comunicación entre la CPU y la memoria RAM.",
    "Gestionar la energía de la placa.",
    "Controlar la velocidad del ventilador de la CPU."
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Facilitar la comunicación entre la CPU y la memoria RAM.\". El bus de sistema (Front Side Bus) era el bus que conectaba la CPU con el chipset norte en arquitecturas más antiguas, gestionando principalmente la comunicación con la memoria RAM.",
  "source": "https://es.wikipedia.org/wiki/Bus_frontal"
},
{
  "id": 388,
  "category": "Conectores de Placa Base",
  "question": "¿Cuál de las siguientes afirmaciones es verdadera sobre la arquitectura de un bus paralelo en la placa base?",
  "options": [
    "Transmite datos de bit en bit en un solo cable.",
    "Utiliza múltiples cables para transmitir varios bits simultáneamente.",
    "Transmite datos en forma de paquetes a través de cables paralelos.",
    "Se utiliza exclusivamente para la conexión de dispositivos de almacenamiento."
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Utiliza múltiples cables para transmitir varios bits simultáneamente.\". Un bus paralelo utiliza múltiples cables para transmitir varios bits simultáneamente, lo que permite una mayor velocidad de transferencia de datos.",
  "source": "https://es.wikipedia.org/wiki/Bus_paralelo"
},
{
  "id": 389,
  "category": "Conectores de Placa Base",
  "question": "¿Qué es un conector IDE en la placa base?",
  "options": [
    "Un conector de pantalla.",
    "Un conector para dispositivos de almacenamiento.",
    "Un conector de alimentación para la CPU.",
    "Un conector de red."
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Un conector para dispositivos de almacenamiento.\". IDE (Integrated Drive Electronics), también conocido como PATA, es un estándar de interfaz para conectar dispositivos de almacenamiento como discos duros y unidades ópticas.",
  "source": "https://es.wikipedia.org/wiki/ATA"
},
{
  "id": 390,
  "category": "Conectores de Placa Base",
  "question": "¿Cuál de las siguientes afirmaciones es verdadera sobre el bus SATA en la placa base?",
  "options": [
    "Utiliza un conector de 40 pines.",
    "Transmite datos en forma de paquetes a través de cables paralelos.",
    "Se utiliza para la conexión de dispositivos de red.",
    "Se utiliza para la conexión de dispositivos de almacenamiento, como discos duros y unidades SSD."
  ],
  "correct": 3,
  "explanation": "La respuesta correcta es \"Se utiliza para la conexión de dispositivos de almacenamiento, como discos duros y unidades SSD.\". SATA (Serial ATA) es una interfaz de bus de computadora para conectar dispositivos de almacenamiento masivo a un bus de host.",
  "source": "https://es.wikipedia.org/wiki/Serial_ATA"
},
{
  "id": 391,
  "category": "Conectores de Placa Base",
  "question": "¿Cuál es la ventaja principal de un bus serie en comparación con un bus paralelo en la placa base?",
  "options": [
    "Mayor velocidad de transferencia de datos.",
    "Menor consumo de energía.",
    "Mayor compatibilidad con periféricos antiguos.",
    "Menor costo de fabricación."
  ],
  "correct": 0,
  "explanation": "La respuesta correcta es \"Mayor velocidad de transferencia de datos.\". Aunque los buses paralelos pueden transmitir múltiples bits simultáneamente, los buses serie modernos pueden alcanzar velocidades de reloj mucho más altas, resultando en una mayor velocidad de transferencia de datos.",
  "source": "https://es.wikipedia.org/wiki/Bus_serie"
},
{
  "id": 392,
  "category": "Conectores de Placa Base",
  "question": "¿Qué es un conector PCIe en la placa base?",
  "options": [
    "Un conector de alimentación para la CPU.",
    "Un conector de red.",
    "Un conector para dispositivos de almacenamiento.",
    "Un conector de expansión para tarjetas gráficas, tarjetas de sonido y otros periféricos."
  ],
  "correct": 3,
  "explanation": "La respuesta correcta es \"Un conector de expansión para tarjetas gráficas, tarjetas de sonido y otros periféricos.\". PCIe (PCI Express) es un estándar de bus de expansión de alta velocidad utilizado para conectar tarjetas de expansión a la placa base.",
  "source": "https://es.wikipedia.org/wiki/PCI_Express"
},
{
  "id": 393,
  "category": "Conectores de Placa Base",
  "question": "¿Cuál es la finalidad principal de un bus de sistema (FSB) en la placa base?",
  "options": [
    "Conectar periféricos externos.",
    "Facilitar la comunicación entre la CPU y la memoria RAM.",
    "Gestionar la energía de la placa.",
    "Controlar la velocidad del ventilador de la CPU."
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Facilitar la comunicación entre la CPU y la memoria RAM.\". El bus de sistema (Front Side Bus) era el bus que conectaba la CPU con el chipset norte en arquitecturas más antiguas, gestionando principalmente la comunicación con la memoria RAM.",
  "source": "https://es.wikipedia.org/wiki/Bus_frontal"
},
{
  "id": 394,
  "category": "Conectores de Placa Base",
  "question": "¿Qué es un conector IDE en la placa base?",
  "options": [
    "Un conector de pantalla.",
    "Un conector para dispositivos de almacenamiento.",
    "Un conector de alimentación para la CPU.",
    "Un conector de red."
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Un conector para dispositivos de almacenamiento.\". IDE (Integrated Drive Electronics), también conocido como PATA, es un estándar de interfaz para conectar dispositivos de almacenamiento como discos duros y unidades ópticas.",
  "source": "https://es.wikipedia.org/wiki/ATA"
},
{
  "id": 395,
  "category": "Conectores de Placa Base",
  "question": "¿Cuál de las siguientes afirmaciones es verdadera sobre el bus SATA en la placa base?",
  "options": [
    "Utiliza un conector de 40 pines.",
    "Transmite datos en forma de paquetes a través de cables paralelos.",
    "Se utiliza para la conexión de dispositivos de red.",
    "Se utiliza para la conexión de dispositivos de almacenamiento, como discos duros y unidades SSD."
  ],
  "correct": 3,
  "explanation": "La respuesta correcta es \"Se utiliza para la conexión de dispositivos de almacenamiento, como discos duros y unidades SSD.\". SATA (Serial ATA) es una interfaz de bus de computadora para conectar dispositivos de almacenamiento masivo a un bus de host.",
  "source": "https://es.wikipedia.org/wiki/Serial_ATA"
},
{
  "id": 396,
  "category": "Conectores de Placa Base",
  "question": "¿Cuál es la ventaja principal de un bus serie en comparación con un bus paralelo en la placa base?",
  "options": [
    "Mayor velocidad de transferencia de datos.",
    "Menor consumo de energía.",
    "Mayor compatibilidad con periféricos antiguos.",
    "Menor costo de fabricación."
  ],
  "correct": 0,
  "explanation": "La respuesta correcta es \"Mayor velocidad de transferencia de datos.\". Aunque los buses paralelos pueden transmitir múltiples bits simultáneamente, los buses serie modernos pueden alcanzar velocidades de reloj mucho más altas, resultando en una mayor velocidad de transferencia de datos.",
  "source": "https://es.wikipedia.org/wiki/Bus_serie"
},
{
  "id": 397,
  "category": "Conectores de Placa Base",
  "question": "¿Qué es un conector PCIe en la placa base?",
  "options": [
    "Un conector de alimentación para la CPU.",
    "Un conector de red.",
    "Un conector para dispositivos de almacenamiento.",
    "Un conector de expansión para tarjetas gráficas, tarjetas de sonido y otros periféricos."
  ],
  "correct": 3,
  "explanation": "La respuesta correcta es \"Un conector de expansión para tarjetas gráficas, tarjetas de sonido y otros periféricos.\". PCIe (PCI Express) es un estándar de bus de expansión de alta velocidad utilizado para conectar tarjetas de expansión a la placa base.",
  "source": "https://es.wikipedia.org/wiki/PCI_Express"
},
{
  "id": 398,
  "category": "Conectores de Placa Base",
  "question": "¿Dónde suele estar ubicado el bus PCI Express (PCIe) en una placa base?",
  "options": [
    "En el extremo superior de la placa.",
    "En el centro de la placa.",
    "En la parte inferior de la placa.",
    "En el lateral de la placa."
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"En el centro de la placa.\". Las ranuras PCIe suelen estar ubicadas en la parte central de la placa base, generalmente debajo del socket de la CPU y a la izquierda de los módulos de memoria RAM.",
  "source": "https://es.wikipedia.org/wiki/PCI_Express"
},
{
  "id": 399,
  "category": "Conectores de Placa Base",
  "question": "¿Cuál es la finalidad principal de un bus de sistema (FSB) en la placa base?",
  "options": [
    "Conectar periféricos externos.",
    "Facilitar la comunicación entre la CPU y la memoria RAM.",
    "Gestionar la energía de la placa.",
    "Controlar la velocidad del ventilador de la CPU."
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Facilitar la comunicación entre la CPU y la memoria RAM.\". El bus de sistema (Front Side Bus) era el bus que conectaba la CPU con el chipset norte en arquitecturas más antiguas, gestionando principalmente la comunicación con la memoria RAM.",
  "source": "https://es.wikipedia.org/wiki/Bus_frontal"
},
{
  "id": 400,
  "category": "Conectores de Placa Base",
  "question": "¿Qué es un conector IDE en la placa base?",
  "options": [
    "Un conector de pantalla.",
    "Un conector para dispositivos de almacenamiento.",
    "Un conector de alimentación para la CPU.",
    "Un conector de red."
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Un conector para dispositivos de almacenamiento.\". IDE (Integrated Drive Electronics), también conocido como PATA, es un estándar de interfaz para conectar dispositivos de almacenamiento como discos duros y unidades ópticas.",
  "source": "https://es.wikipedia.org/wiki/ATA"
},
{
  "id": 401,
  "category": "Conectores de Placa Base",
  "question": "¿Cuál de las siguientes afirmaciones es verdadera sobre el bus SATA en la placa base?",
  "options": [
    "Utiliza un conector de 40 pines.",
    "Transmite datos en forma de paquetes a través de cables paralelos.",
    "Se utiliza para la conexión de dispositivos de red.",
    "Se utiliza para la conexión de dispositivos de almacenamiento, como discos duros y unidades SSD."
  ],
  "correct": 3,
  "explanation": "La respuesta correcta es \"Se utiliza para la conexión de dispositivos de almacenamiento, como discos duros y unidades SSD.\". SATA (Serial ATA) es una interfaz de bus de computadora para conectar dispositivos de almacenamiento masivo a un bus de host.",
  "source": "https://es.wikipedia.org/wiki/Serial_ATA"
},
{
  "id": 402,
  "category": "Tarjetas de Expansión",
  "question": "¿Cuál de las siguientes opciones describe mejor un periférico de entrada?",
  "options": [
    "Impresora",
    "Teclado",
    "Altavoz",
    "Monitor"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Teclado\". Un periférico de entrada es aquel que permite introducir datos o instrucciones en la computadora, como un teclado, ratón o escáner.",
  "source": "https://es.wikipedia.org/wiki/Dispositivo_de_entrada"
},
{
  "id": 403,
  "category": "Componentes Básicos",
  "question": "¿Qué tipo de periférico es un escáner?",
  "options": [
    "Entrada",
    "Salida",
    "Almacenamiento",
    "Comunicación"
  ],
  "correct": 0,
  "explanation": "La respuesta correcta es \"Entrada\". Un escáner es un periférico de entrada que digitaliza documentos o imágenes para que puedan ser procesados por la computadora.",
  "source": "https://es.wikipedia.org/wiki/Esc%C3%A1ner_de_ordenador"
},
{
  "id": 404,
  "category": "Tarjetas de Expansión",
  "question": "¿Cuál de las siguientes opciones es un ejemplo de periférico de salida?",
  "options": [
    "Ratón",
    "Monitor",
    "Teclado",
    "Micrófono"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Monitor\". Un periférico de salida es aquel que presenta los resultados procesados por la computadora, como un monitor, impresora o altavoces.",
  "source": "https://es.wikipedia.org/wiki/Dispositivo_de_salida"
},
{
  "id": 405,
  "category": "Componentes Básicos",
  "question": "¿Qué función realiza un módem en un sistema de computadoras?",
  "options": [
    "Almacenamiento de datos",
    "Comunicación de datos",
    "Entrada de datos",
    "Salida de datos"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Comunicación de datos\". Un módem es un dispositivo que modula y demodula señales para permitir la comunicación de datos a través de líneas telefónicas o de otro tipo.",
  "source": "https://es.wikipedia.org/wiki/M%C3%B3dem"
},
{
  "id": 406,
  "category": "Tarjetas de Expansión",
  "question": "¿Cuál de las siguientes opciones es un periférico de almacenamiento?",
  "options": [
    "Monitor",
    "Impresora",
    "Disco duro",
    "Altavoz"
  ],
  "correct": 2,
  "explanation": "La respuesta correcta es \"Disco duro\". Un periférico de almacenamiento es aquel que permite guardar y recuperar datos, como discos duros, unidades SSD o unidades flash USB.",
  "source": "https://es.wikipedia.org/wiki/Dispositivo_de_almacenamiento"
},
{
  "id": 407,
  "category": "Componentes Básicos",
  "question": "¿Qué tipo de periférico es una tarjeta de sonido?",
  "options": [
    "Entrada",
    "Salida",
    "Almacenamiento",
    "Comunicación"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Salida\". Aunque las tarjetas de sonido modernas pueden manejar tanto entrada como salida de audio, su función principal es la salida de sonido hacia altavoces o auriculares.",
  "source": "https://es.wikipedia.org/wiki/Tarjeta_de_sonido"
},
{
  "id": 408,
  "category": "Tarjetas de Expansión",
  "question": "¿Cuál de las siguientes opciones es un ejemplo de periférico de comunicación?",
  "options": [
    "Impresora",
    "Router",
    "Teclado",
    "Monitor"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Router\". Un periférico de comunicación es aquel que permite la transferencia de datos entre diferentes computadoras o redes, como routers, tarjetas de red o módems.",
  "source": "https://es.wikipedia.org/wiki/Dispositivo_de_comunicaci%C3%B3n"
},
{
  "id": 409,
  "category": "Componentes Básicos",
  "question": "¿Cuál es la función principal de un escáner de código de barras?",
  "options": [
    "Almacenamiento de datos",
    "Lectura de datos",
    "Impresión de datos",
    "Comunicación de datos"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Lectura de datos\". Un escáner de código de barras lee la información contenida en códigos de barras y la convierte en datos digitales que pueden ser procesados por una computadora.",
  "source": "https://es.wikipedia.org/wiki/Lector_de_c%C3%B3digo_de_barras"
},
{
  "id": 410,
  "category": "Componentes Básicos",
  "question": "¿Qué periférico se utiliza para imprimir documentos en papel?",
  "options": [
    "Monitor",
    "Impresora",
    "Altavoz",
    "Escáner"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Impresora\". Una impresora es un periférico de salida que produce copias físicas de documentos o imágenes digitales en papel.",
  "source": "https://es.wikipedia.org/wiki/Impresora"
},
{
  "id": 411,
  "category": "Tarjetas de Expansión",
  "question": "¿Cuál de las siguientes opciones es un periférico de entrada táctil?",
  "options": [
    "Ratón",
    "Teclado",
    "Pantalla táctil",
    "Altavoz"
  ],
  "correct": 2,
  "explanation": "La respuesta correcta es \"Pantalla táctil\". Una pantalla táctil es un periférico de entrada que permite al usuario interactuar con la computadora tocando directamente la pantalla.",
  "source": "https://es.wikipedia.org/wiki/Pantalla_t%C3%A1ctil"
},
{
  "id": 412,
  "category": "Componentes Básicos",
  "question": "¿Qué función realiza una cámara web en un sistema de computadoras?",
  "options": [
    "Almacenamiento de datos",
    "Captura de imágenes y videos",
    "Impresión de documentos",
    "Comunicación de datos"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Captura de imágenes y videos\". Una cámara web es un periférico de entrada que captura imágenes y videos, permitiendo videoconferencias o transmisión en vivo.",
  "source": "https://es.wikipedia.org/wiki/C%C3%A1mara_web"
},
{
  "id": 413,
  "category": "Componentes Básicos",
  "question": "¿Cuál de los siguientes periféricos se utiliza para la entrada y salida de datos?",
  "options": [
    "Monitor",
    "Ratón",
    "Impresora multifunción",
    "Altavoz"
  ],
  "correct": 2,
  "explanation": "La respuesta correcta es \"Impresora multifunción\". Una impresora multifunción es un periférico que combina varias funciones como impresión, escaneo, copia y a veces fax, permitiendo tanto entrada como salida de datos.",
  "source": "https://es.wikipedia.org/wiki/Impresora_multifunci%C3%B3n"
},
{
  "id": 414,
  "category": "Componentes Básicos",
  "question": "¿Qué tipo de periférico es un plotter?",
  "options": [
    "Entrada",
    "Salida",
    "Almacenamiento",
    "Comunicación"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Salida\". Un plotter es un periférico de salida que imprprime gráficos vectoriales mediante plumas o lápices, utilizado principalmente para dibujos técnicos o de alta precisión.",
  "source": "https://es.wikipedia.org/wiki/Plotter"
},
{
  "id": 415,
  "category": "Tarjetas de Expansión",
  "question": "¿Cuál de las siguientes opciones es un periférico de entrada de voz?",
  "options": [
    "Micrófono",
    "Altavoz",
    "Impresora",
    "Teclado"
  ],
  "correct": 0,
  "explanation": "La respuesta correcta es \"Micrófono\". Un micrófono es un periférico de entrada que convierte el sonido en señales eléctricas, permitiendo la entrada de datos de voz a la computadora.",
  "source": "https://es.wikipedia.org/wiki/Micr%C3%B3fono"
},
{
  "id": 416,
  "category": "Componentes Básicos",
  "question": "¿Cuál de los siguientes periféricos se utiliza para la comunicación inalámbrica?",
  "options": [
    "Cable USB",
    "Tarjeta de red",
    "Bluetooth",
    "Disco duro externo"
  ],
  "correct": 2,
  "explanation": "La respuesta correcta es \"Bluetooth\". Bluetooth es una tecnología de comunicación inalámbrica de corto alcance que permite la conexión entre dispositivos sin necesidad de cables.",
  "source": "https://es.wikipedia.org/wiki/Bluetooth"
},
{
  "id": 417,
  "category": "Componentes Básicos",
  "question": "¿Qué función realiza una tarjeta de red en un sistema de computadoras?",
  "options": [
    "Almacenamiento de datos",
    "Comunicación de datos en red",
    "Impresión de documentos",
    "Captura de imágenes"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Comunicación de datos en red\". Una tarjeta de red es un periférico que permite a una computadora conectarse a una red, facilitando la comunicación de datos con otros dispositivos.",
  "source": "https://es.wikipedia.org/wiki/Tarjeta_de_red"
},
{
  "id": 418,
  "category": "Componentes Básicos",
  "question": "¿Qué periférico se utiliza para la salida de sonido en un sistema de computadoras?",
  "options": [
    "Monitor",
    "Impresora",
    "Altavoz",
    "Teclado"
  ],
  "correct": 2,
  "explanation": "La respuesta correcta es \"Altavoz\". Un altavoz es un periférico de salida que convierte señales eléctricas de audio en sonido audible.",
  "source": "https://es.wikipedia.org/wiki/Altavoz"
},
{
  "id": 419,
  "category": "Tarjetas de Expansión",
  "question": "¿Cuál de las siguientes opciones describe mejor una impresora láser?",
  "options": [
    "Imprime en papel mediante chorros de tinta",
    "Utiliza láser para imprimir en papel",
    "Imprime en papel térmico",
    "Imprime en papel mediante agujas"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Utiliza láser para imprimir en papel\". Una impresora láser utiliza un láser para crear una imagen electrostática en un tambor fotoreceptor, que luego atrae el tóner y lo transfiere al papel.",
  "source": "https://es.wikipedia.org/wiki/Impresora_l%C3%A1ser"
},
{
  "id": 420,
  "category": "Componentes Básicos",
  "question": "¿Cuál de los siguientes periféricos se utiliza para la entrada de datos mediante movimiento manual?",
  "options": [
    "Ratón",
    "Teclado",
    "Escáner",
    "Micrófono"
  ],
  "correct": 0,
  "explanation": "La respuesta correcta es \"Ratón\". Un ratón es un periférico de entrada que detecta el movimiento manual y permite controlar un cursor en la pantalla para interactuar con elementos gráficos.",
  "source": "https://es.wikipedia.org/wiki/Rat%C3%B3n_de_ordenador"
},
{
  "id": 421,
  "category": "USB y Conectores",
  "question": "¿Qué tipo de periférico es una memoria USB?",
  "options": [
    "Entrada",
    "Almacenamiento",
    "Salida",
    "Comunicación"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Almacenamiento\". Una memoria USB es un periférico de almacenamiento que permite guardar y transportar datos de forma portátil.",
  "source": "https://es.wikipedia.org/wiki/Unidad_flash_USB"
},
{
  "id": 422,
  "category": "Tarjetas de Expansión",
  "question": "¿Cuál de las siguientes opciones describe mejor una impresora de matriz de puntos?",
  "options": [
    "Utiliza chorros de tinta para imprimir",
    "Imprime en papel mediante agujas",
    "Imprime en papel térmico",
    "Utiliza láser para imprimir en papel"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Imprime en papel mediante agujas\". Una impresora de matriz de puntos utiliza una cabeza con agujas que impactan una cinta entintada contra el papel para formar caracteres e imágenes.",
  "source": "https://es.wikipedia.org/wiki/Impresora_de_matriz_de_puntos"
},
{
  "id": 423,
  "category": "Componentes Básicos",
  "question": "¿Qué función realiza un lector de tarjetas magnéticas en un sistema de computadoras?",
  "options": [
    "Almacenamiento de datos",
    "Comunicación de datos",
    "Entrada de datos",
    "Salida de datos"
  ],
  "correct": 2,
  "explanation": "La respuesta correcta es \"Entrada de datos\". Un lector de tarjetas magnéticas lee la información almacenada en la banda magnética de tarjetas de crédito, débito o identificación, introduciendo estos datos en la computadora.",
  "source": "https://es.wikipedia.org/wiki/Lector_de_tarjetas"
},
{
  "id": 424,
  "category": "Componentes Básicos",
  "question": "¿Cuál de los siguientes periféricos se utiliza para la entrada de datos mediante movimiento sobre una superficie?",
  "options": [
    "Ratón",
    "Teclado",
    "Escáner",
    "Micrófono"
  ],
  "correct": 0,
  "explanation": "La respuesta correcta es \"Ratón\". Un ratón es un periférico de entrada que detecta el movimiento sobre una superficie y permite controlar un cursor en la pantalla.",
  "source": "https://es.wikipedia.org/wiki/Rat%C3%B3n_de_ordenador"
},
{
  "id": 425,
  "category": "Componentes Básicos",
  "question": "¿Qué tipo de periférico es una impresora 3D?",
  "options": [
    "Entrada",
    "Almacenamiento",
    "Salida",
    "Comunicación"
  ],
  "correct": 2,
  "explanation": "La respuesta correcta es \"Salida\". Una impresora 3D es un periférico de salida que crea objetos tridimensionales a partir de un modelo digital, depositando material capa por capa.",
  "source": "https://es.wikipedia.org/wiki/Impresi%C3%B3n_3D"
},
{
  "id": 426,
  "category": "Tarjetas de Expansión",
  "question": "¿Cuál de las siguientes opciones describe mejor un altavoz?",
  "options": [
    "Permite la entrada de datos mediante voz",
    "Se utiliza para la salida de sonido",
    "Almacena datos de audio",
    "Imprime documentos en papel"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Se utiliza para la salida de sonido\". Un altavoz es un periférico de salida que convierte señales eléctricas de audio en sonido audible.",
  "source": "https://es.wikipedia.org/wiki/Altavoz"
},
{
  "id": 427,
  "category": "Componentes Básicos",
  "question": "¿Qué periférico se utiliza para la entrada de datos en forma de imágenes o documentos físicos?",
  "options": [
    "Ratón",
    "Teclado",
    "Escáner",
    "Micrófono"
  ],
  "correct": 2,
  "explanation": "La respuesta correcta es \"Escáner\". Un escáner es un periférico de entrada que digitaliza documentos o imágenes físicos, convirtiéndolos en datos digitales que pueden ser procesados por la computadora.",
  "source": "https://es.wikipedia.org/wiki/Esc%C3%A1ner_de_ordenador"
},
{
  "id": 428,
  "category": "Tarjetas de Expansión",
  "question": "¿Cuál de las siguientes opciones describe mejor una impresora de inyección de tinta?",
  "options": [
    "Utiliza láser para imprimir en papel",
    "Imprime en papel térmico",
    "Imprime en papel mediante chorros de tinta",
    "Imprime en papel mediante agujas"
  ],
  "correct": 2,
  "explanation": "La respuesta correcta es \"Imprime en papel mediante chorros de tinta\". Una impresora de inyección de tinta rocía microscópicas gotas de tinta sobre el papel para crear imágenes y texto.",
  "source": "https://es.wikipedia.org/wiki/Impresora_de_inyecci%C3%B3n"
},
{
  "id": 429,
  "category": "Componentes Básicos",
  "question": "¿Qué función realiza un lector de huellas dactilares en un sistema de computadoras?",
  "options": [
    "Almacenamiento de datos",
    "Comunicación de datos",
    "Identificación biométrica",
    "Impresión de documentos"
  ],
  "correct": 2,
  "explanation": "La respuesta correcta es \"Identificación biométrica\". Un lector de huellas dactilares captura la imagen de una huella dactilar y la utiliza para identificar o autenticar a un usuario mediante características biométricas.",
  "source": "https://es.wikipedia.org/wiki/Lector_de_huellas_dactilares"
},
{
  "id": 430,
  "category": "Tarjetas de Expansión",
  "question": "¿Cuál de las siguientes opciones describe mejor un proyector?",
  "options": [
    "Se utiliza para la entrada de datos",
    "Proyecta imágenes o videos en una pantalla",
    "Almacena datos en forma de presentación",
    "Imprime documentos en papel"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Proyecta imágenes o videos en una pantalla\". Un proyector es un periférico de salida que toma una señal de video y proyecta la imagen correspondiente sobre una pantalla o superficie.",
  "source": "https://es.wikipedia.org/wiki/Proyector"
},
{
  "id": 431,
  "category": "Tarjetas de Expansión",
  "question": "¿Cuál de las siguientes opciones describe mejor un teclado mecánico?",
  "options": [
    "Utiliza tecnología de membrana",
    "Emplea interruptores mecánicos para las teclas",
    "Es inalámbrico",
    "Tiene teclas táctiles sensibles al tacto"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Emplea interruptores mecánicos para las teclas\". Un teclado mecánico utiliza interruptores mecánicos individuales bajo cada tecla, en lugar de la tecnología de membrana utilizada en teclados más económicos.",
  "source": "https://es.wikipedia.org/wiki/Teclado_mec%C3%A1nico"
},
{
  "id": 432,
  "category": "Componentes Básicos",
  "question": "¿Qué tipo de conexión es común en los teclados inalámbricos?",
  "options": [
    "USB",
    "HDMI",
    "Bluetooth",
    "VGA"
  ],
  "correct": 2,
  "explanation": "La respuesta correcta es \"Bluetooth\". Bluetooth es la tecnología de conexión inalámbrica más común para teclados, aunque también existen teclados inalámbricos que utilizan conectores USB de 2.4 GHz.",
  "source": "https://es.wikipedia.org/wiki/Teclado_(inform%C3%A1tica)"
},
{
  "id": 433,
  "category": "Componentes Básicos",
  "question": "¿Cuál de las siguientes características es típica de un teclado ergonómico?",
  "options": [
    "Diseño compacto",
    "Teclas iluminadas",
    "Diseño curvado para reducir la tensión",
    "Teclas mecánicas lineales"
  ],
  "correct": 2,
  "explanation": "La respuesta correcta es \"Diseño curvado para reducir la tensión\". Los teclados ergonómicos están diseñados con una forma curvada o separada para reducir la tensión en las muñecas y mejorar la comodidad durante la escritura prolongada.",
  "source": "https://es.wikipedia.org/wiki/Teclado_ergon%C3%B3mico"
},
{
  "id": 434,
  "category": "Componentes Básicos",
  "question": "¿Qué función realiza la rueda de desplazamiento en un ratón?",
  "options": [
    "Mover el cursor",
    "Hacer clic derecho",
    "Desplazarse por páginas web u documentos",
    "Controlar la sensibilidad del puntero"
  ],
  "correct": 2,
  "explanation": "La respuesta correcta es \"Desplazarse por páginas web u documentos\". La rueda de desplazamiento en un ratón permite al usuario desplazarse verticalmente por documentos, páginas web u otros contenidos sin necesidad de utilizar las barras de desplazamiento.",
  "source": "https://es.wikipedia.org/wiki/Rat%C3%B3n_de_ordenador"
},
{
  "id": 435,
  "category": "Tarjetas de Expansión",
  "question": "¿Cuál de las siguientes opciones describe mejor un ratón óptico?",
  "options": [
    "Utiliza una bola para el desplazamiento",
    "Emplea luz LED para detectar movimientos",
    "Funciona sin necesidad de pilas",
    "Tiene botones programables"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Emplea luz LED para detectar movimientos\". Un ratón óptico utiliza una luz LED y un sensor óptico para detectar el movimiento sobre una superficie, en lugar de la bola mecánica utilizada en ratones más antiguos.",
  "source": "https://es.wikipedia.org/wiki/Rat%C3%B3n_%C3%B3ptico"
},
{
  "id": 436,
  "category": "Componentes Básicos",
  "question": "¿Qué característica es común en un ratón gaming?",
  "options": [
    "Diseño compacto",
    "Sensor de alta sensibilidad",
    "Conexión inalámbrica",
    "Ausencia de botones adicionales"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Sensor de alta sensibilidad\". Los ratones gaming suelen tener sensores de alta sensibilidad (DPI) que permiten movimientos más precisos y rápidos, ideales para juegos que requieren reacciones rápidas.",
  "source": "https://es.wikipedia.org/wiki/Rat%C3%B3n_para_videojuegos"
},
{
  "id": 437,
  "category": "Componentes Básicos",
  "question": "¿Qué tipo de tecnología utiliza un ratón láser para detectar movimientos?",
  "options": [
    "Óptica",
    "Infrarroja",
    "Láser",
    "Ultrasónica"
  ],
  "correct": 2,
  "explanation": "La respuesta correcta es \"Láser\". Un ratón láser utiliza un láser infrarrojo en lugar de un LED para iluminar la superficie, lo que proporciona una mayor precisión y funciona en una mayor variedad de superficies que un ratón óptico estándar.",
  "source": "https://es.wikipedia.org/wiki/Rat%C3%B3n_l%C3%A1ser"
},
{
  "id": 438,
  "category": "Tarjetas de Expansión",
  "question": "¿Cuál de las siguientes opciones describe mejor un teclado retroiluminado?",
  "options": [
    "Teclas con relieve táctil",
    "Teclas que emiten luz para facilitar la visibilidad en entornos oscuros",
    "Teclas táctiles capacitivas",
    "Teclas mecánicas silenciosas"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Teclas que emiten luz para facilitar la visibilidad en entornos oscuros\". Un teclado retroiluminado tiene luces debajo de las teclas que las iluminan, facilitando su uso en condiciones de poca luz.",
  "source": "https://es.wikipedia.org/wiki/Teclado_(inform%C3%A1tica)"
},
{
  "id": 439,
  "category": "Componentes Básicos",
  "question": "¿Cuál es una característica típica de un teclado numérico?",
  "options": [
    "Diseño compacto",
    "Teclas multimedia",
    "Teclas numéricas agrupadas a la derecha",
    "Teclas táctiles sensibles al tacto"
  ],
  "correct": 2,
  "explanation": "La respuesta correcta es \"Teclas numéricas agrupadas a la derecha\". Un teclado numérico (o keypad) es un conjunto de teclas numéricas, generalmente dispuestas en un bloque rectangular a la derecha del teclado principal.",
  "source": "https://es.wikipedia.org/wiki/Teclado_num%C3%A9rico"
},
{
  "id": 440,
  "category": "Componentes Básicos",
  "question": "¿Qué función realiza el botón central en un ratón de tres botones?",
  "options": [
    "Hacer clic izquierdo",
    "Hacer clic derecho",
    "Desplazar el cursor",
    "Función de la rueda de desplazamiento"
  ],
  "correct": 3,
  "explanation": "La respuesta correcta es \"Función de la rueda de desplazamiento\". En muchos ratones de tres botones, el botón central también funciona como rueda de desplazamiento, permitiendo tanto hacer clic como desplazarse verticalmente.",
  "source": "https://es.wikipedia.org/wiki/Rat%C3%B3n_de_ordenador"
},
{
  "id": 441,
  "category": "Componentes Básicos",
  "question": "¿Qué característica es esencial en un teclado mecánico para juegos?",
  "options": [
    "Teclas silenciosas",
    "Teclas retroiluminadas",
    "Retroceso táctil en cada pulsación",
    "Teclas planas y compactas"
  ],
  "correct": 2,
  "explanation": "La respuesta correcta es \"Retroceso táctil en cada pulsación\". Los teclados mecánicos para juegos suelen tener interruptores con retroceso táctil (tactile feedback) que proporcionan una confirmación física de que la tecla ha sido presionada, mejorando la precisión en juegos.",
  "source": "https://es.wikipedia.org/wiki/Teclado_mec%C3%A1nico"
},
{
  "id": 442,
  "category": "Componentes Básicos",
  "question": "¿Cuál es la principal función de un ratón con tecnología Bluetooth?",
  "options": [
    "Conectar varios dispositivos a la vez",
    "Mejorar la precisión del puntero",
    "Eliminar la necesidad de pilas",
    "Proporcionar retroalimentación háptica"
  ],
  "correct": 0,
  "explanation": "La respuesta correcta es \"Conectar varios dispositivos a la vez\". La tecnología Bluetooth permite que un ratón se conecte sin cables a múltiples dispositivos (como una computadora y una tableta) y cambiar entre ellos según sea necesario.",
  "source": "https://es.wikipedia.org/wiki/Bluetooth"
},
{
  "id": 443,
  "category": "Componentes Básicos",
  "question": "¿Qué tipo de ratón utiliza una bola para detectar movimientos?",
  "options": [
    "Óptico",
    "Láser",
    "Trackball",
    "Inalámbrico"
  ],
  "correct": 2,
  "explanation": "La respuesta correcta es \"Trackball\". Un trackball es un dispositivo de señalización que utiliza una bola que el usuario rola con la mano o dedos para mover el cursor, en lugar de mover el propio dispositivo sobre una superficie.",
  "source": "https://es.wikipedia.org/wiki/Trackball"
},
{
  "id": 444,
  "category": "Componentes Básicos",
  "question": "¿Qué característica es común en los teclados mecánicos lineales?",
  "options": [
    "Retroalimentación táctil en cada pulsación",
    "Ausencia de ruido al escribir",
    "Teclas curvadas para mayor comodidad",
    "Presión constante en todas las teclas"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Ausencia de ruido al escribir\". Los teclados mecánicos lineales tienen interruptores que proporcionan una trayectoria suave y consistente sin un punto de activación táctil notable, lo que resulta en una experiencia de escritura más silenciosa.",
  "source": "https://es.wikipedia.org/wiki/Teclado_mec%C3%A1nico"
},
{
  "id": 445,
  "category": "Componentes Básicos",
  "question": "¿Cuál es una ventaja de un teclado con teclas multimedia?",
  "options": [
    "Mayor durabilidad",
    "Facilita el acceso rápido a funciones como reproducción de música y volumen",
    "Teclas táctiles sensibles al tacto",
    "Teclas retroiluminadas"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Facilita el acceso rápido a funciones como reproducción de música y volumen\". Las teclas multimedia permiten controlar funciones multimedia como reproducción/pausa, siguiente/anterior pista y volumen directamente desde el teclado, sin necesidad de utilizar el ratón.",
  "source": "https://es.wikipedia.org/wiki/Teclado_multimedia"
},
{
  "id": 446,
  "category": "Componentes Básicos",
  "question": "¿Qué característica es típica de un ratón trackball?",
  "options": [
    "Rueda de desplazamiento",
    "Bola que se gira para controlar el cursor",
    "Botones programables",
    "Diseño ergonómico"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Bola que se gira para controlar el cursor\". Un trackball se caracteriza por tener una bola expuesta que el usuario rota con los dedos o la palma de la mano para mover el cursor en la pantalla.",
  "source": "https://es.wikipedia.org/wiki/Trackball"
},
{
  "id": 447,
  "category": "Tarjetas de Expansión",
  "question": "¿Cuál de las siguientes opciones describe mejor un teclado inalámbrico?",
  "options": [
    "Se conecta a través de un cable USB",
    "Utiliza pilas o batería recargable",
    "Teclas retroiluminadas",
    "Diseño compacto"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Utiliza pilas o batería recargable\". Un teclado inalámbrico se caracteriza por no requerir un cable para conectarse a la computadora, utilizando en su lugar pilas desechables o una batería recargable para su alimentación.",
  "source": "https://es.wikipedia.org/wiki/Teclado_(inform%C3%A1tica)"
},
{
  "id": 448,
  "category": "Componentes Básicos",
  "question": "¿Cuál es una característica esencial en un ratón para diseño gráfico?",
  "options": [
    "Botones programables",
    "Alta sensibilidad",
    "Función de rueda de desplazamiento",
    "Diseño compacto"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Alta sensibilidad\". Para diseño gráfico, un ratón con alta sensibilidad (DPI) es esencial para permitir movimientos precisos y detallados necesarios en trabajos de edición de imágenes o ilustración.",
  "source": "https://es.wikipedia.org/wiki/Rat%C3%B3n_de_ordenador"
},
{
  "id": 449,
  "category": "Componentes Básicos",
  "question": "¿Qué función realiza un teclado táctil en lugar de teclas físicas?",
  "options": [
    "Vibración háptica",
    "Detección de movimientos",
    "Reconocimiento de voz",
    "Superficie sensible al tacto"
  ],
  "correct": 3,
  "explanation": "La respuesta correcta es \"Superficie sensible al tacto\". Un teclado táctil utiliza una superficie sensible al tacto en lugar de teclas físicas, detectando la posición y presión de los dedos para registrar la entrada.",
  "source": "https://es.wikipedia.org/wiki/Teclado_t%C3%A1ctil"
},
{
  "id": 450,
  "category": "Componentes Básicos",
  "question": "¿Qué característica es común en un ratón inalámbrico?",
  "options": [
    "Cable USB para la conexión",
    "Bola para detectar movimientos",
    "Utiliza pilas o batería recargable",
    "Sin botones adicionales"
  ],
  "correct": 2,
  "explanation": "La respuesta correcta es \"Utiliza pilas o batería recargable\". Un ratón inalámbrico se caracteriza por no requerir un cable para conectarse a la computadora, utilizando en su lugar pilas desechables o una batería recargable para su alimentación.",
  "source": "https://es.wikipedia.org/wiki/Rat%C3%B3n_de_ordenador"
},
{
  "id": 451,
  "category": "Tarjetas de Expansión",
  "question": "¿Cuál de las siguientes opciones describe mejor una impresora multifunción?",
  "options": [
    "Solo imprime documentos",
    "Combina impresión, escaneo, copia y a veces fax",
    "Solo escanea documentos",
    "Solo funciona como fotocopiadora"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Combina impresión, escaneo, copia y a veces fax\". Una impresora multifunción es un dispositivo que integra varias funciones como impresión, escaneo, copia y, en algunos casos, fax en un solo equipo.",
  "source": "https://es.wikipedia.org/wiki/Impresora_multifunci%C3%B3n"
},
{
  "id": 452,
  "category": "Componentes Básicos",
  "question": "¿Qué tipo de tecnología utilizan los monitores táctiles para detectar la entrada del usuario?",
  "options": [
    "Láser",
    "Infrarrojo",
    "Capacitiva o resistiva",
    "Ultrasónica"
  ],
  "correct": 2,
  "explanation": "La respuesta correcta es \"Capacitiva o resistiva\". Los monitores táctiles utilizan principalmente tecnologías capacitivas o resistivas para detectar el contacto del usuario con la pantalla. La tecnología capacitiva es más común en dispositivos modernos.",
  "source": "https://es.wikipedia.org/wiki/Pantalla_t%C3%A1ctil"
},
{
  "id": 453,
  "category": "Componentes Básicos",
  "question": "¿Cuál es la función principal de un digitalizador en una tableta gráfica?",
  "options": [
    "Proyectar imágenes",
    "Capturar la escritura o dibujo a mano",
    "Reproducir sonido",
    "Almacenar archivos"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Capturar la escritura o dibujo a mano\". Un digitalizador en una tableta gráfica es el componente que detecta y registra los movimientos del stylus, permitiendo capturar escritura o dibujos a mano de forma digital.",
  "source": "https://es.wikipedia.org/wiki/Tableta_gr%C3%A1fica"
},
{
  "id": 454,
  "category": "Componentes Básicos",
  "question": "¿Qué característica distingue a un monitor curvo respecto a uno plano?",
  "options": [
    "Mayor resolución",
    "Mayor tasa de refresco",
    "Curvatura que envuelve la visión del usuario",
    "Menor consumo energético"
  ],
  "correct": 2,
  "explanation": "La respuesta correcta es \"Curvatura que envuelve la visión del usuario\". Un monitor curvo se caracteriza por tener una pantalla curvada que busca envolver el campo de visión del usuario, proporcionando una mayor inmersión y reduciendo la distorsión en los bordes.",
  "source": "https://es.wikipedia.org/wiki/Monitor_curvo"
},
{
  "id": 455,
  "category": "Componentes Básicos",
  "question": "¿Qué tecnología utilizan los paneles IPS en los monitores?",
  "options": [
    "Twisted Nematic",
    "In-Plane Switching",
    "Vertical Alignment",
    "Organic Light-Emitting Diode"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"In-Plane Switching\". IPS (In-Plane Switching) es una tecnología de panel LCD que ofrece mejores ángulos de visión y reproducción del color en comparación con otras tecnologías como TN (Twisted Nematic).",
  "source": "https://es.wikipedia.org/wiki/IPS"
},
{
  "id": 456,
  "category": "Componentes Básicos",
  "question": "¿Cuál es la función principal de un puerto HDMI en un monitor?",
  "options": [
    "Transmitir solo video",
    "Transmitir video y audio digital de alta calidad",
    "Conectar periféricos USB",
    "Proporcionar alimentación al dispositivo"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Transmitir video y audio digital de alta calidad\". HDMI (High-Definition Multimedia Interface) es una interfaz que permite transmitir señales de video y audio digital sin comprimir de alta calidad.",
  "source": "https://es.wikipedia.org/wiki/HDMI"
},
{
  "id": 457,
  "category": "Componentes Básicos",
  "question": "¿Qué característica define a un monitor con alta tasa de refresco?",
  "options": [
    "Mayor resolución",
    "Mayor número de imágenes por segundo",
    "Mayor tamaño de pantalla",
    "Mayor brillo"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Mayor número de imágenes por segundo\". Un monitor con alta tasa de refresco (refresh rate) puede mostrar más imágenes por segundo (medido en Hz), lo que resulta en un movimiento más suave, especialmente beneficioso para juegos y contenido de acción rápida.",
  "source": "https://es.wikipedia.org/wiki/Tasa_de_refresco"
},
{
  "id": 458,
  "category": "Componentes Básicos",
  "question": "¿Qué tecnología utilizan los monitores OLED para producir imágenes?",
  "options": [
    "Cristal líquido con retroiluminación",
    "Diodos emisores de luz orgánicos",
    "Plasma",
    "Tubo de rayos catódicos"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Diodos emisores de luz orgánicos\". OLED (Organic Light-Emitting Diode) utiliza compuestos orgánicos que emiten luz cuando se aplica una corriente eléctrica, eliminando la necesidad de retroiluminación y permitiendo negros perfectos y colores más vibrantes.",
  "source": "https://es.wikipedia.org/wiki/OLED"
},
{
  "id": 459,
  "category": "Componentes Básicos",
  "question": "¿Cuál es la ventaja principal de un monitor con resolución 4K sobre uno Full HD?",
  "options": [
    "Mayor tasa de refresco",
    "Menor tiempo de respuesta",
    "Mayor cantidad de píxeles para mayor detalle",
    "Menor consumo energético"
  ],
  "correct": 2,
  "explanation": "La respuesta correcta es \"Mayor cantidad de píxeles para mayor detalle\". Un monitor 4K tiene aproximadamente 8.3 millones de píxeles (3840×2160), mientras que un monitor Full HD tiene 2.1 millones (1920×1080), lo que resulta en una imagen significativamente más detallada.",
  "source": "https://es.wikipedia.org/wiki/4K_resoluci%C3%B3n"
},
{
  "id": 460,
  "category": "Componentes Básicos",
  "question": "¿Qué función realiza el adaptador DisplayPort a HDMI?",
  "options": [
    "Convertir señal analógica a digital",
    "Convertir señal digital de DisplayPort a HDMI",
    "Amplificar la señal de video",
    "Proporcionar alimentación adicional"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Convertir señal digital de DisplayPort a HDMI\". Un adaptador DisplayPort a HDMI permite conectar un dispositivo con salida DisplayPort a un monitor o televisor con entrada HDMI, convirtiendo la señal según sea necesario.",
  "source": "https://es.wikipedia.org/wiki/DisplayPort"
},
{
  "id": 461,
  "category": "Componentes Básicos",
  "question": "¿Qué característica es importante para los gamers al elegir un monitor?",
  "options": [
    "Tamaño del panel",
    "Tiempo de respuesta bajo",
    "Tipo de stand (soporte)",
    "Consumo energético"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Tiempo de respuesta bajo\". Para los gamers, un tiempo de respuesta bajo (medido en milisegundos) es crucial para reducir el efecto ghosting y motion blur, proporcionando una imagen más nítida durante el movimiento rápido en juegos.",
  "source": "https://es.wikipedia.org/wiki/Tiempo_de_respuesta"
},
{
  "id": 462,
  "category": "Componentes Básicos",
  "question": "¿Qué tecnología utilizan los monitores VA para ofrecer un buen contraste?",
  "options": [
    "Twisted Nematic",
    "In-Plane Switching",
    "Vertical Alignment",
    "Organic Light-Emitting Diode"
  ],
  "correct": 2,
  "explanation": "La respuesta correcta es \"Vertical Alignment\". VA (Vertical Alignment) es una tecnología de panel LCD que ofrece mejores ratios de contraste en comparación con otras tecnologías como TN o IPS, aunque con tiempos de respuesta más lentos.",
  "source": "https://es.wikipedia.org/wiki/Vertical_alignment"
},
{
  "id": 463,
  "category": "Componentes Básicos",
  "question": "¿Cuál es la función principal de un puerto DisplayPort en un monitor?",
  "options": [
    "Transmitir solo audio",
    "Transmitir video y audio de alta calidad",
    "Conectar periféricos USB",
    "Proporcionar alimentación al dispositivo"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Transmitir video y audio de alta calidad\". DisplayPort es una interfaz de visualización digital que puede transmitir señales de video y audio de alta calidad, y es capaz de soportar resoluciones y tasas de refresco más altas que HDMI en algunas versiones.",
  "source": "https://es.wikipedia.org/wiki/DisplayPort"
},
{
  "id": 464,
  "category": "Componentes Básicos",
  "question": "¿Qué característica define a un monitor con modo G-Sync de NVIDIA?",
  "options": [
    "Mayor resolución nativa",
    "Sincronización de la tasa de refresco con la GPU",
    "Mayor brillo máximo",
    "Menor consumo energético"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Sincronización de la tasa de refresco con la GPU\". G-Sync es una tecnología de NVIDIA que sincroniza la tasa de refresco del monitor con la velocidad de fotogramas de la GPU, eliminando el screen tearing y proporcionando una experiencia de juego más fluida.",
  "source": "https://es.wikipedia.org/wiki/NVIDIA_G-Sync"
},
{
  "id": 465,
  "category": "Componentes Básicos",
  "question": "¿Qué función realiza un puerto USB-C en un monitor moderno?",
  "options": [
    "Solo transmitir video",
    "Transmitir video, audio, datos y proporcionar alimentación",
    "Solo conectar periféricos",
    "Solo proporcionar alimentación"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Transmitir video, audio, datos y proporcionar alimentación\". USB-C es un conector versátil que puede transmitir video (a través de DisplayPort Alternate Mode), audio, datos y proporcionar alimentación (Power Delivery), todo a través de un solo cable.",
  "source": "https://es.wikipedia.org/wiki/USB-C"
},
{
  "id": 466,
  "category": "Componentes Básicos",
  "question": "¿Qué característica es importante para los profesionales de la edición de fotos al elegir un monitor?",
  "options": [
    "Tasa de refresco alta",
    "Tiempo de respuesta bajo",
    "Precisión del color y amplia gama cromática",
    "Tamaño de pantalla grande"
  ],
  "correct": 2,
  "explanation": "La respuesta correcta es \"Precisión del color y amplia gama cromática\". Para los profesionales de la edición de fotos, la precisión del color y una amplia gama cromática (cobertura de espacios de color como sRGB, Adobe RGB o DCI-P3) son cruciales para garantizar que las imágenes se vean correctamente.",
  "source": "https://es.wikipedia.org/wiki/Gesti%C3%B3n_del_color"
},
{
  "id": 467,
  "category": "Componentes Básicos",
  "question": "¿Qué tecnología utilizan los monitores Quantum Dot para mejorar el color?",
  "options": [
    "Nanocristales semiconductor",
    "Cristal líquido mejorado",
    "Diodos orgánicos",
    "Plasma de gas"
  ],
  "correct": 0,
  "explanation": "La respuesta correcta es \"Nanocristales semiconductor\". Quantum Dot utiliza nanocristales semiconductor que emiten luz de colores muy puros cuando se estimulan, permitiendo una gama cromática más amplia y colores más vibrantes en los monitores.",
  "source": "https://es.wikipedia.org/wiki/Quantum_dot"
},
{
  "id": 468,
  "category": "Componentes Básicos",
  "question": "¿Cuál es la función principal de un puerto DVI en un monitor?",
  "options": [
    "Transmitir señal analógica",
    "Transmitir señal digital o analógica",
    "Transmitir solo audio",
    "Conectar periféricos USB"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Transmitir señal digital o analógica\". DVI (Digital Visual Interface) puede transmitir señales digitales (DVI-D), analógicas (DVI-A) o ambas (DVI-I), aunque la mayoría de monitores modernos utilizan principalmente la conexión digital.",
  "source": "https://es.wikipedia.org/wiki/Digital_Visual_Interface"
},
{
  "id": 469,
  "category": "Componentes Básicos",
  "question": "¿Qué característica define a un monitor con HDR (High Dynamic Range)?",
  "options": [
    "Mayor resolución",
    "Mayor rango dinámico entre zonas claras y oscuras",
    "Mayor tasa de refresco",
    "Menor tiempo de respuesta"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Mayor rango dinámico entre zonas claras y oscuras\". HDR permite un mayor rango dinámico entre las áreas más claras y más oscuras de una imagen, proporcionando más detalle en ambas zonas y colores más realistas.",
  "source": "https://es.wikipedia.org/wiki/High_dynamic_range"
},
{
  "id": 470,
  "category": "Componentes Básicos",
  "question": "¿Qué función realiza un puerto VGA en un monitor?",
  "options": [
    "Transmitir señal digital",
    "Transmitir señal analógica",
    "Transmitir video y audio digital",
    "Proporcionar alimentación"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Transmitir señal analógica\". VGA (Video Graphics Array) es un estándar de conector analógico que transmite señales de video analógicas, siendo uno de los conectores más antiguos pero todavía presente en algunos monitores y proyectores.",
  "source": "https://es.wikipedia.org/wiki/Video_Graphics_Array"
},
{
  "id": 471,
  "category": "Componentes Básicos",
  "question": "¿Qué característica es importante para los profesionales de la edición de video al elegir un monitor?",
  "options": [
    "Tamaño de pantalla grande",
    "Precisión del color y espacio de color amplio",
    "Alta tasa de refresco",
    "Tiempo de respuesta bajo"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Precisión del color y espacio de color amplio\". Para los profesionales de la edición de video, la precisión del color y una amplia cobertura de espacios de color como Rec. 709 o DCI-P3 son cruciales para garantizar que los colores se vean correctamente en diferentes dispositivos.",
  "source": "https://es.wikipedia.org/wiki/Gesti%C3%B3n_del_color"
},
{
  "id": 472,
  "category": "Componentes Básicos",
  "question": "¿Qué tecnología utilizan los monitores con modo FreeSync de AMD?",
  "options": [
    "Sincronización adaptativa de la tasa de refresco",
    "Mejora del contraste dinámico",
    "Reducción del tiempo de respuesta",
    "Aumento de la resolución"
  ],
  "correct": 0,
  "explanation": "La respuesta correcta es \"Sincronización adaptativa de la tasa de refresco\". FreeSync es una tecnología de AMD que sincroniza dinámicamente la tasa de refresco del monitor con la velocidad de fotogramas de la GPU, eliminando el screen tearing y proporcionando una experiencia de juego más fluida.",
  "source": "https://es.wikipedia.org/wiki/AMD_FreeSync"
},
{
  "id": 473,
  "category": "Componentes Básicos",
  "question": "¿Cuál es la función principal de un puerto Thunderbolt en un monitor?",
  "options": [
    "Solo transmitir video",
    "Transmitir video, datos y proporcionar alimentación de alta velocidad",
    "Solo conectar periféricos",
    "Solo proporcionar alimentación"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Transmitir video, datos y proporcionar alimentación de alta velocidad\". Thunderbolt es una interfaz de alta velocidad que puede transmitir video (DisplayPort), datos (PCIe) y proporcionar alimentación, todo a través de un solo cable.",
  "source": "https://es.wikipedia.org/wiki/Thunderbolt_(interfaz)"
},
{
  "id": 474,
  "category": "Componentes Básicos",
  "question": "¿Qué característica define a un monitor con panel TN?",
  "options": [
    "Mejores ángulos de visión",
    "Mayor tiempo de respuesta",
    "Peor contraste",
    "Mayor precisión del color"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Mayor tiempo de respuesta\". Los paneles TN (Twisted Nematic) se caracterizan por tener los tiempos de respuesta más rápidos, aunque a costa de peores ángulos de visión y menor precisión del color en comparación con otros tipos de paneles.",
  "source": "https://es.wikipedia.org/wiki/Twisted_nematic"
},
{
  "id": 475,
  "category": "Componentes Básicos",
  "question": "¿Qué función realiza un monitor en modo retrato (portrait mode)?",
  "options": [
    "Mejorar el rendimiento de juegos",
    "Mostrar contenido verticalmente, ideal para documentos o programación",
    "Reducir el consumo energético",
    "Aumentar la tasa de refresco"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Mostrar contenido verticalmente, ideal para documentos o programación\". El modo retrato gira la pantalla 90 grados, mostrando el contenido verticalmente, lo que es ideal para leer documentos largos, navegar por páginas web o programar.",
  "source": "https://es.wikipedia.org/wiki/Orientaci%C3%B3n_de_pantalla"
},
{
  "id": 476,
  "category": "Componentes Básicos",
  "question": "¿Qué tecnología utilizan los monitores con retroiluminación LED?",
  "options": [
    "Tubos fluorescentes",
    "Diodos emisores de luz",
    "Plasma",
    "Cátodo frío"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Diodos emisores de luz\". Los monitores con retroiluminación LED utilizan diodos emisores de luz (LED) en lugar de los tubos fluorescentes CCFL tradicionales para iluminar el panel LCD, lo que resulta en un menor consumo energético, mayor vida útil y mejor control del brillo y contraste.",
  "source": "https://es.wikipedia.org/wiki/LED-backlit_LCD"
},
{
  "id": 477,
  "category": "Componentes Básicos",
  "question": "¿Qué característica es importante para los diseñadores gráficos al elegir un monitor?",
  "options": [
    "Alta tasa de refresco",
    "Calibración de color y uniformidad",
    "Tiempo de respuesta bajo",
    "Tamaño de pantalla grande"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Calibración de color y uniformidad\". Para los diseñadores gráficos, la capacidad de calibración del color y la uniformidad del brillo y color en toda la pantalla son cruciales para garantizar que los diseños se vean consistentemente.",
  "source": "https://es.wikipedia.org/wiki/Calibraci%C3%B3n_del_color"
},
{
  "id": 478,
  "category": "Componentes Básicos",
  "question": "¿Qué función realiza un monitor con función Picture-in-Picture (PiP)?",
  "options": [
    "Mejorar la calidad de imagen",
    "Mostrar dos fuentes de video simultáneamente",
    "Reducir el consumo energético",
    "Aumentar la resolución"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Mostrar dos fuentes de video simultáneamente\". Picture-in-Picture (PiP) permite mostrar dos fuentes de video diferentes en la misma pantalla, generalmente con una imagen más pequeña superpuesta sobre la principal.",
  "source": "https://es.wikipedia.org/wiki/Picture-in-picture"
},
{
  "id": 479,
  "category": "Componentes Básicos",
  "question": "¿Qué característica define a un monitor con alta relación de contraste?",
  "options": [
    "Mayor diferencia entre blancos y negros",
    "Mayor número de colores",
    "Mayor brillo máximo",
    "Mayor ángulo de visión"
  ],
  "correct": 0,
  "explanation": "La respuesta correcta es \"Mayor diferencia entre blancos y negros\". Una alta relación de contraste indica una mayor diferencia entre las áreas más claras y más oscuras de la imagen, resultando en una imagen con más profundidad y detalle.",
  "source": "https://es.wikipedia.org/wiki/Relaci%C3%B3n_de_contraste"
},
{
  "id": 480,
  "category": "Componentes Básicos",
  "question": "¿Qué función realiza un monitor con modo de bajo retardo de entrada (low input lag)?",
  "options": [
    "Mejorar la calidad de imagen",
    "Reducir el tiempo entre la entrada del usuario y la respuesta en pantalla",
    "Aumentar la tasa de refresco",
    "Reducir el consumo energético"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Reducir el tiempo entre la entrada del usuario y la respuesta en pantalla\". Un bajo retardo de entrada (input lag) significa que hay menos tiempo entre cuando el usuario realiza una acción (como mover el ratón) y cuando se ve el resultado en pantalla, lo que es crucial para juegos.",
  "source": "https://es.wikipedia.org/wiki/Retardo_de_entrada"
},
{
  "id": 481,
  "category": "Componentes Básicos",
  "question": "¿Qué tecnología utilizan los monitores con función Flicker-Free?",
  "options": [
    "Retroiluminación PWM",
    "Retroiluminación DC o alta frecuencia",
    "Tecnología OLED",
    "Panel IPS mejorado"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Retroiluminación DC o alta frecuencia\". La tecnología Flicker-Free utiliza retroiluminación de corriente continua (DC) o modulación por ancho de pulso (PWM) a alta frecuencia para eliminar el parpadeo visible que puede causar fatiga visual durante el uso prolongado.",
  "source": "https://es.wikipedia.org/wiki/Parpadeo_(pantalla)"
},
{
  "id": 482,
  "category": "Componentes Básicos",
  "question": "¿Qué característica es importante para los programadores al elegir un monitor?",
  "options": [
    "Alta tasa de refresco",
    "Espacio amplio para mostrar código y múltiples ventanas",
    "Tiempo de respuesta bajo",
    "Alta precisión del color"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Espacio amplio para mostrar código y múltiples ventanas\". Para los programadores, tener suficiente espacio en pantalla para mostrar código y múltiples ventanas simultáneamente es crucial, por lo que monitores grandes o configuraciones de múltiples monitores son populares.",
  "source": "https://es.wikipedia.org/wiki/Monitor_de_computadora"
},
{
  "id": 483,
  "category": "Componentes Básicos",
  "question": "¿Qué función realiza un monitor con función de reducción de luz azul?",
  "options": [
    "Mejorar el contraste",
    "Reducir la fatiga visual durante el uso nocturno",
    "Aumentar la tasa de refresco",
    "Mejorar la precisión del color"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Reducir la fatiga visual durante el uso nocturno\". La reducción de luz azul disminuye la cantidad de luz azul emitida por el monitor, lo que puede ayudar a reducir la fatiga visual y mejorar la calidad del sueño durante el uso nocturno.",
  "source": "https://es.wikipedia.org/wiki/Luz_azul_y_salud"
},
{
  "id": 484,
  "category": "Componentes Básicos",
  "question": "¿Qué característica define a un monitor con alta cobertura del espacio de color sRGB?",
  "options": [
    "Mayor brillo",
    "Mayor capacidad para mostrar colores del estándar sRGB",
    "Mayor resolución",
    "Menor tiempo de respuesta"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Mayor capacidad para mostrar colores del estándar sRGB\". Una alta cobertura del espacio de color sRGB significa que el monitor puede reproducir una mayor parte de los colores definidos en el estándar sRGB, lo que resulta en colores más precisos para contenido web y general.",
  "source": "https://es.wikipedia.org/wiki/sRGB"
},
{
  "id": 485,
  "category": "Componentes Básicos",
  "question": "¿Qué función realiza un monitor con modo de lectura (reading mode)?",
  "options": [
    "Aumentar la resolución",
    "Ajustar la temperatura de color y brillo para leer texto cómodamente",
    "Mejorar la tasa de refresco",
    "Reducir el consumo energético"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Ajustar la temperatura de color y brillo para leer texto cómodamente\". El modo de lectura ajusta la temperatura de color y el brillo de la pantalla para hacer la lectura de texto más cómoda, similar a la apariencia del papel.",
  "source": "https://es.wikipedia.org/wiki/Monitor_de_computadora"
},
{
  "id": 486,
  "category": "Componentes Básicos",
  "question": "¿Qué tecnología utilizan los monitores con función de atenuación local (local dimming)?",
  "options": [
    "Control de zonas de retroiluminación",
    "Mejora del panel LCD",
    "Tecnología OLED",
    "Procesamiento avanzado de imagen"
  ],
  "correct": 0,
  "explanation": "La respuesta correcta es \"Control de zonas de retroiluminación\". La atenuación local divide la retroiluminación del monitor en zonas que pueden atenuarse o apagarse independientemente, mejorando el contraste y los negros en áreas específicas de la imagen.",
  "source": "https://es.wikipedia.org/wiki/Local_dimming"
},
{
  "id": 487,
  "category": "Componentes Básicos",
  "question": "¿Qué característica es importante para los profesionales de la arquitectura al elegir un monitor?",
  "options": [
    "Alta tasa de refresco",
    "Gran tamaño y alta resolución para planos detallados",
    "Tiempo de respuesta bajo",
    "Alta precisión del color"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Gran tamaño y alta resolución para planos detallados\". Para los profesionales de la arquitectura, un monitor grande con alta resolución es importante para poder ver planos detallados y modelos 3D con claridad.",
  "source": "https://es.wikipedia.org/wiki/Monitor_de_computadora"
},
{
  "id": 488,
  "category": "Componentes Básicos",
  "question": "¿Qué función realiza un monitor con función de superposición de rejilla (grid overlay)?",
  "options": [
    "Mejorar la calidad de imagen",
    "Mostrar una cuadrícula sobre la pantalla para alineación",
    "Aumentar la tasa de refresco",
    "Reducir el consumo energético"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Mostrar una cuadrícula sobre la pantalla para alineación\". La superposición de rejilla muestra una cuadrícula sobre la pantalla, útil para diseño gráfico, arquitectura o composición visual para asegurar la alineación correcta de elementos.",
  "source": "https://es.wikipedia.org/wiki/Cuadr%C3%ADcula"
},
{
  "id": 489,
  "category": "Componentes Básicos",
  "question": "¿Qué característica define a un monitor con alta densidad de píxeles (PPI)?",
  "options": [
    "Mayor tamaño de pantalla",
    "Mayor número de píxeles por pulgada",
    "Mayor tasa de refresco",
    "Mayor brillo"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Mayor número de píxeles por pulgada\". Una alta densidad de píxeles (PPI - Pixels Per Inch) significa que hay más píxeles en cada pulgada de pantalla, resultando en una imagen más nítida y detallada.",
  "source": "https://es.wikipedia.org/wiki/Densidad_de_p%C3%ADxeles"
},
{
  "id": 490,
  "category": "Componentes Básicos",
  "question": "¿Qué función realiza un monitor con modo de juego (game mode)?",
  "options": [
    "Mejorar la calidad de imagen",
    "Optimizar configuraciones para reducir el retardo de entrada",
    "Aumentar la resolución",
    "Reducir el consumo energético"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Optimizar configuraciones para reducir el retardo de entrada\". El modo de juego ajusta varias configuraciones del monitor para reducir el retardo de entrada y optimizar la experiencia visual para juegos.",
  "source": "https://es.wikipedia.org/wiki/Modo_de_juego"
},
{
  "id": 491,
  "category": "Componentes Básicos",
  "question": "¿Qué tecnología utilizan los monitores con función de sombreado dinámico (dynamic shadow boost)?",
  "options": [
    "Mejora del panel LCD",
    "Realce de detalles en áreas oscuras sin sobreexponer las claras",
    "Tecnología OLED",
    "Procesamiento HDR avanzado"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Realce de detalles en áreas oscuras sin sobreexponer las claras\". La tecnología de sombreado dinámico realza los detalles en las áreas más oscuras de la imagen sin sobreexponer las áreas más claras, mejorando la visibilidad en escenas con alto contraste.",
  "source": "https://es.wikipedia.org/wiki/Procesamiento_de_imagen"
},
{
  "id": 492,
  "category": "Componentes Básicos",
  "question": "¿Qué característica es importante para los profesionales de la fotografía al elegir un monitor?",
  "options": [
    "Alta tasa de refresco",
    "Calibración de color precisa y amplia gama cromática",
    "Tiempo de respuesta bajo",
    "Tamaño de pantalla grande"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Calibración de color precisa y amplia gama cromática\". Para los profesionales de la fotografía, una calibración de color precisa y una amplia gama cromática son cruciales para garantizar que las fotografías se vean correctamente y los colores sean consistentes con la impresión.",
  "source": "https://es.wikipedia.org/wiki/Gesti%C3%B3n_del_color"
},
{
  "id": 493,
  "category": "Componentes Básicos",
  "question": "¿Qué función realiza un monitor con función de enfoque (focus mode)?",
  "options": [
    "Mejorar la calidad de imagen",
    "Resaltar áreas específicas de la pantalla para reducir distracciones",
    "Aumentar la tasa de refresco",
    "Reducir el consumo energético"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Resaltar áreas específicas de la pantalla para reducir distracciones\". El modo de enfoque resalta o ilumina áreas específicas de la pantalla mientras atenúa el resto, ayudando a reducir distracciones y mejorar la concentración.",
  "source": "https://es.wikipedia.org/wiki/Atenci%C3%B3n"
},
{
  "id": 494,
  "category": "Componentes Básicos",
  "question": "¿Qué característica define a un monitor con alta relación de aspecto ultrapanorámica (21:9 o 32:9)?",
  "options": [
    "Mayor altura",
    "Mayor anchura en relación con la altura",
    "Mayor resolución vertical",
    "Mayor tasa de refresco"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Mayor anchura en relación con la altura\". Los monitores ultrapanorámicos tienen relaciones de aspecto más anchas que el estándar 16:9, como 21:9 o 32:9, proporcionando más espacio horizontal para productividad o una experiencia más inmersiva en juegos y películas.",
  "source": "https://es.wikipedia.org/wiki/Monitor_ultrapanor%C3%A1mico"
},
{
  "id": 495,
  "category": "Componentes Básicos",
  "question": "¿Qué función realiza un monitor con función de subdivisión de pantalla (screen split)?",
  "options": [
    "Mejorar la calidad de imagen",
    "Dividir la pantalla en múltiples áreas para organizar ventanas",
    "Aumentar la tasa de refresco",
    "Reducir el consumo energético"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Dividir la pantalla en múltiples áreas para organizar ventanas\". La subdivisión de pantalla divide el área de visualización en múltiples secciones predefinidas, facilitando la organización de ventanas y mejorando la productividad.",
  "source": "https://es.wikipedia.org/wiki/Gestor_de_ventanas"
},
{
  "id": 496,
  "category": "Componentes Básicos",
  "question": "¿Qué tecnología utilizan los monitores con función de sincronización adaptativa (adaptive sync)?",
  "options": [
    "Sincronización de la tasa de refresco con la GPU",
    "Mejora del contraste dinámico",
    "Reducción del tiempo de respuesta",
    "Aumento de la resolución"
  ],
  "correct": 0,
  "explanation": "La respuesta correcta es \"Sincronización de la tasa de refresco con la GPU\". La sincronización adaptativa ajusta dinámicamente la tasa de refresco del monitor para que coincida con la velocidad de fotogramas de la GPU, eliminando el screen tearing y proporcionando una experiencia más fluida.",
  "source": "https://es.wikipedia.org/wiki/Adaptive_sync"
},
{
  "id": 497,
  "category": "Componentes Básicos",
  "question": "¿Qué característica es importante para los profesionales de la edición de video 3D al elegir un monitor?",
  "options": [
    "Alta tasa de refresco",
    "Precisión del color y capacidad para mostrar contenido 3D",
    "Tiempo de respuesta bajo",
    "Tamaño de pantalla grande"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Precisión del color y capacidad para mostrar contenido 3D\". Para los profesionales de la edición de video 3D, la precisión del color y la capacidad para mostrar correctamente contenido 3D (ya sea estéreo o con tecnologías específicas) son cruciales para su trabajo.",
  "source": "https://es.wikipedia.org/wiki/Video_3D"
},
{
  "id": 498,
  "category": "Componentes Básicos",
  "question": "¿Qué función realiza un monitor con función de zoom de pantalla?",
  "options": [
    "Mejorar la calidad de imagen",
    "Ampliar áreas específicas de la pantalla para mayor visibilidad",
    "Aumentar la tasa de refresco",
    "Reducir el consumo energético"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Ampliar áreas específicas de la pantalla para mayor visibilidad\". La función de zoom de pantalla permite ampliar áreas específicas de la pantalla para mejorar la visibilidad de detalles pequeños o texto.",
  "source": "https://es.wikipedia.org/wiki/Zoom_digital"
},
{
  "id": 499,
  "category": "Componentes Básicos",
  "question": "¿Qué característica define a un monitor con alta uniformidad de brillo?",
  "options": [
    "Mayor brillo máximo",
    "Brillo consistente en toda la pantalla",
    "Mayor contraste",
    "Mayor ángulo de visión"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Brillo consistente en toda la pantalla\". Una alta uniformidad de brillo significa que el nivel de brillo es consistente en toda la pantalla, sin variaciones notables entre el centro y los bordes, lo que es importante para trabajo visual crítico.",
  "source": "https://es.wikipedia.org/wiki/Uniformidad_de_brillo"
},
{
  "id": 500,
  "category": "Componentes Básicos",
  "question": "¿Qué función realiza un monitor con modo de presentación (presentation mode)?",
  "options": [
    "Mejorar la calidad de imagen",
    "Optimizar configuraciones para mostrar presentaciones",
    "Aumentar la tasa de refresco",
    "Reducir el consumo energético"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Optimizar configuraciones para mostrar presentaciones\". El modo de presentación ajusta varias configuraciones del monitor para optimizar la visualización de presentaciones, generalmente mejorando el brillo y el contraste para una mejor visibilidad.",
  "source": "https://es.wikipedia.org/wiki/Presentaci%C3%B3n"
},
{
  "id": 501,
  "category": "Componentes Básicos",
  "question": "¿Qué característica es común en unos auriculares con cancelación de ruido?",
  "options": [
    "Mayor duración de la batería",
    "Reducción de ruido ambiental",
    "Cable largo para mayor alcance",
    "Diseño compacto"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Reducción de ruido ambiental\". Los auriculares con cancelación de ruido utilizan micrófonos para capturar el sonido ambiental y generar ondas opuestas que lo cancelan, permitiendo una mejor experiencia de audio.",
  "source": "https://es.wikipedia.org/wiki/Cancelaci%C3%B3n_de_ruido"
},
{
  "id": 502,
  "category": "Componentes Básicos",
  "question": "¿Cuál es la ventaja de unos auriculares con micrófono incorporado?",
  "options": [
    "Mayor calidad de sonido",
    "Facilita las llamadas telefónicas y videoconferencias",
    "Ausencia de cables",
    "Diseño ligero"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Facilita las llamadas telefónicas y videoconferencias\". Los auriculares con micrófono incorporado permiten al usuario hablar y escuchar simultáneamente, facilitando la comunicación en llamadas y videoconferencias.",
  "source": "https://es.wikipedia.org/wiki/Auriculares_con_micr%C3%B3fono"
},
{
  "id": 503,
  "category": "Componentes Básicos",
  "question": "¿Qué función realiza un micrófono de condensador en comparación con uno dinámico?",
  "options": [
    "Mayor resistencia a golpes",
    "Captura de sonidos más sutiles y detallados",
    "Menor sensibilidad a la vibración",
    "Mejor respuesta a altos niveles de presión sonora"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Captura de sonidos más sutiles y detallados\". Los micrófonos de condensador son conocidos por su capacidad para capturar sonidos con mayor detalle y sensibilidad en comparación con los micrófonos dinámicos.",
  "source": "https://es.wikipedia.org/wiki/Micr%C3%B3fono_de_condensador"
},
{
  "id": 504,
  "category": "USB y Conectores",
  "question": "¿Cuál es la principal función de un micrófono USB?",
  "options": [
    "Mayor sensibilidad en la captura de sonido",
    "Conexión directa a puertos USB sin necesidad de interfaz de audio",
    "Cancelación de ruido ambiente",
    "Utilización exclusiva en estudios profesionales"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Conexión directa a puertos USB sin necesidad de interfaz de audio\". Los micrófonos USB se conectan directamente a un puerto USB y no requieren una interfaz de audio adicional, lo que los hace fáciles de usar.",
  "source": "https://es.wikipedia.org/wiki/Micr%C3%B3fono_USB"
},
{
  "id": 505,
  "category": "Componentes Básicos",
  "question": "¿Qué característica es común en un micrófono de solapa?",
  "options": [
    "Cable largo para mayor alcance",
    "Micrófono compacto y discreto",
    "Cancelación activa de ruido",
    "Exclusivamente para grabación de voz"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Micrófono compacto y discreto\". Los micrófonos de solapa (o lapel) son pequeños y discretos, diseñados para sujetarse a la ropa y permitir la captura de voz de manos libres.",
  "source": "https://es.wikipedia.org/wiki/Micr%C3%B3fono_de_solapa"
},
{
  "id": 506,
  "category": "Componentes Básicos",
  "question": "¿Cuál es la función principal de unos altavoces Bluetooth?",
  "options": [
    "Transmitir señal de audio mediante cables",
    "Conexión directa a la corriente eléctrica",
    "Reproducir sonido de forma inalámbrica desde dispositivos compatibles",
    "Exclusivamente para uso en exteriores"
  ],
  "correct": 2,
  "explanation": "La respuesta correcta es \"Reproducir sonido de forma inalámbrica desde dispositivos compatibles\". Los altavoces Bluetooth utilizan la tecnología Bluetooth para recibir señales de audio de forma inalámbrica desde dispositivos como smartphones, tablets o computadoras.",
  "source": "https://es.wikipedia.org/wiki/Altavoz_Bluetooth"
},
{
  "id": 507,
  "category": "Componentes Básicos",
  "question": "¿Qué característica es típica en altavoces con subwoofer?",
  "options": [
    "Mayor claridad en tonos agudos",
    "Reproducción de frecuencias graves más potentes",
    "Diseño compacto y portátil",
    "Exclusivamente para reproducción de música clásica"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Reproducción de frecuencias graves más potentes\". Los altavoces con subwoofer incluyen un altavoz dedicado a reproducir frecuencias graves (bajas), proporcionando un sonido más profundo y potente.",
  "source": "https://es.wikipedia.org/wiki/Subwoofer"
},
{
  "id": 508,
  "category": "USB y Conectores",
  "question": "¿Cuál es la ventaja de unos altavoces con puerto USB?",
  "options": [
    "Mayor potencia de salida",
    "Conexión directa a dispositivos USB sin necesidad de energía adicional",
    "Cancelación activa de ruido",
    "Diseño exclusivo para uso en estudios de grabación"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Conexión directa a dispositivos USB sin necesidad de energía adicional\". Los altavoces con puerto USB se conectan directamente a un puerto USB y obtienen energía de este, eliminando la necesidad de un adaptador de corriente adicional.",
  "source": "https://es.wikipedia.org/wiki/Altavoz_USB"
},
{
  "id": 509,
  "category": "Componentes Básicos",
  "question": "¿Qué función realiza una tarjeta de sonido externa en comparación con una interna?",
  "options": [
    "Proporciona salida de sonido de mayor calidad",
    "Se conecta mediante ranuras PCIe en la placa madre",
    "Permite conectar más dispositivos de audio",
    "Facilita la conexión de auriculares y micrófonos"
  ],
  "correct": 0,
  "explanation": "La respuesta correcta es \"Proporciona salida de sonido de mayor calidad\". Las tarjetas de sonido externas suelen ofrecer mayor calidad de audio que las integradas, con mejores convertidores DAC, componentes de mayor calidad y menor interferencia electromagnética.",
  "source": "https://es.wikipedia.org/wiki/Tarjeta_de_sonido"
},
{
  "id": 510,
  "category": "Conectores de Placa Base",
  "question": "¿Cuál es la principal función de una tarjeta de sonido integrada en una placa madre?",
  "options": [
    "Proporcionar salida de sonido de alta calidad",
    "Conexión mediante puerto USB",
    "Cancelación activa de ruido",
    "Permitir la conexión de múltiples micrófonos"
  ],
  "correct": 0,
  "explanation": "La respuesta correcta es \"Proporcionar salida de sonido de alta calidad\". Las tarjetas de sonido integradas en la placa madre proporcionan capacidades de audio básicas para la mayoría de usuarios, permitiendo la conexión de altavoces y auriculares sin necesidad de una tarjeta adicional.",
  "source": "https://es.wikipedia.org/wiki/Chip_de_audio"
},
{
  "id": 511,
  "category": "Componentes Básicos",
  "question": "¿Qué característica es común en una tarjeta de sonido con soporte para sonido envolvente?",
  "options": [
    "Salida de audio en mono",
    "Reproducción de sonido tridimensional",
    "Exclusivamente para uso en estudios de grabación",
    "Conexión exclusiva a altavoces externos"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Reproducción de sonido tridimensional\". Las tarjetas de sonido con soporte para sonido envolvente pueden procesar y reproducir audio multicanal, creando una experiencia de sonido tridimensional que envuelve al oyente.",
  "source": "https://es.wikipedia.org/wiki/Sono_envolvente"
},
{
  "id": 512,
  "category": "Componentes Básicos",
  "question": "¿Cuál es la ventaja de una tarjeta de sonido con amplificador integrado?",
  "options": [
    "Mayor duración de la batería",
    "Potencia de salida de audio más alta",
    "Conexión mediante cables coaxiales",
    "Exclusivamente para uso en grabación de voz"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Potencia de salida de audio más alta\". Una tarjeta de sonido con amplificador integrado puede alimentar directamente altavoces o auriculares de alta impedancia sin necesidad de un amplificador externo, proporcionando mayor potencia de salida.",
  "source": "https://es.wikipedia.org/wiki/Amplificador_de_audio"
},
{
  "id": 513,
  "category": "Componentes Básicos",
  "question": "¿Qué función realiza un micrófono de mano en comparación con uno de solapa?",
  "options": [
    "Mayor sensibilidad en la captura de sonido",
    "Mayor resistencia a la interferencia electromagnética",
    "Diseño compacto y discreto",
    "Uso exclusivo para presentaciones en vivo"
  ],
  "correct": 0,
  "explanation": "La respuesta correcta es \"Mayor sensibilidad en la captura de sonido\". Los micrófonos de mano suelen tener mayor sensibilidad y calidad de captura que los de solapa, y están diseñados para ser sostenidos cerca de la fuente de sonido.",
  "source": "https://es.wikipedia.org/wiki/Micr%C3%B3fono"
},
{
  "id": 514,
  "category": "Componentes Básicos",
  "question": "¿Cuál es la principal función de unos auriculares con sonido envolvente?",
  "options": [
    "Reducción de ruido ambiental",
    "Proporcionar una experiencia auditiva tridimensional",
    "Exclusivamente para uso en estudios de grabación",
    "Facilitar llamadas telefónicas"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Proporcionar una experiencia auditiva tridimensional\". Los auriculares con sonido envolvente utilizan múltiples altavoces y procesamiento de audio para crear una experiencia de sonido tridimensional que envuelve al oyente.",
  "source": "https://es.wikipedia.org/wiki/Sono_envolvente"
},
{
  "id": 515,
  "category": "Componentes Básicos",
  "question": "¿Qué característica es común en unos auriculares con diadema ajustable?",
  "options": [
    "Diseño compacto y plegable",
    "Cancelación activa de ruido",
    "Diadema que se ajusta a diferentes tamaños de cabeza",
    "Exclusivamente para uso deportivo"
  ],
  "correct": 2,
  "explanation": "La respuesta correcta es \"Diadema que se ajusta a diferentes tamaños de cabeza\". Los auriculares con diadema ajustable permiten personalizar el ajuste para adaptarse cómodamente a diferentes tamaños de cabeza, mejorando la comodidad durante el uso prolongado.",
  "source": "https://es.wikipedia.org/wiki/Auriculares"
},
{
  "id": 516,
  "category": "Componentes Básicos",
  "question": "¿Cuál es la ventaja de un altavoz con conectividad NFC?",
  "options": [
    "Mayor duración de la batería",
    "Conexión inalámbrica",
    "Reproducción de sonido tridimensional",
    "Necesidad de cables para la conexión"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Conexión inalámbrica\". NFC (Near Field Communication) permite una conexión rápida y sencilla entre dispositivos compatibles simplemente acercándolos, facilitando el emparejamiento sin necesidad de configuraciones complicadas.",
  "source": "https://es.wikipedia.org/wiki/Near_Field_Communication"
},
{
  "id": 517,
  "category": "USB y Conectores",
  "question": "¿Qué función realiza un micrófono USB en comparación con uno analógico?",
  "options": [
    "Mayor calidad de sonido",
    "Necesidad de interfaz de audio adicional",
    "Conexión directa a puertos USB sin necesidad de energía adicional",
    "Resistencia a interferencias electromagnéticas"
  ],
  "correct": 2,
  "explanation": "La respuesta correcta es \"Conexión directa a puertos USB sin necesidad de energía adicional\". Los micrófonos USB se conectan directamente a un puerto USB y obtienen energía de este, eliminando la necesidad de una interfaz de audio o fuente de alimentación adicional.",
  "source": "https://es.wikipedia.org/wiki/Micr%C3%B3fono_USB"
},
{
  "id": 518,
  "category": "Componentes Básicos",
  "question": "¿Cuál es la principal función de unos altavoces de estudio?",
  "options": [
    "Proporcionar sonido envolvente",
    "Reproducción precisa y plana del sonido",
    "Uso exclusivo para grabación de voz",
    "Cancelación activa de ruido"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Reproducción precisa y plana del sonido\". Los altavoces de estudio están diseñados para reproducir el sonido de la manera más precisa y plana posible, sin realzar ni atenuar frecuencias, para permitir una mezcla y masterización precisas.",
  "source": "https://es.wikipedia.org/wiki/Altavoz_de_estudio"
},
{
  "id": 519,
  "category": "Componentes Básicos",
  "question": "¿Qué característica es típica en unos auriculares con sistema de sujeción over-ear?",
  "options": [
    "Diseño compacto y plegable",
    "Cancelación activa de ruido",
    "Almohadillas que cubren completamente las orejas",
    "Exclusivamente para uso deportivo"
  ],
  "correct": 2,
  "explanation": "La respuesta correcta es \"Almohadillas que cubren completamente las orejas\". Los auriculares con sistema de sujeción over-ear tienen almohadillas que rodean completamente las orejas, proporcionando mayor comodidad y mejor aislamiento acústico.",
  "source": "https://es.wikipedia.org/wiki/Auriculares"
},
{
  "id": 520,
  "category": "Componentes Básicos",
  "question": "¿Cuál es la función principal de un router en una red de comunicación?",
  "options": [
    "Conectar dispositivos a través de cables Ethernet",
    "Proporcionar acceso a internet y gestionar el tráfico de red",
    "Conectar dispositivos mediante tecnología Bluetooth",
    "Exclusivamente para llamadas telefónicas"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Proporcionar acceso a internet y gestionar el tráfico de red\". Un router es un dispositivo que dirige el tráfico entre redes y proporciona acceso a internet, gestionando la comunicación entre múltiples dispositivos en una red local.",
  "source": "https://es.wikipedia.org/wiki/Router"
},
{
  "id": 521,
  "category": "Componentes Básicos",
  "question": "¿Qué característica es común en un módem?",
  "options": [
    "Funcionamiento como punto de acceso Wi-Fi",
    "Conversión de señales analógicas a digitales y viceversa",
    "Conexión de dispositivos mediante USB",
    "Exclusivamente para transmisión de datos por cable coaxial"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Conversión de señales analógicas a digitales y viceversa\". Un módem (modulador-demodulador) convierte señales digitales a analógicas para transmisión y viceversa para recepción, permitiendo la comunicación a través de líneas telefónicas o de otro tipo.",
  "source": "https://es.wikipedia.org/wiki/M%C3%B3dem"
},
{
  "id": 522,
  "category": "Componentes Básicos",
  "question": "¿Cuál es la ventaja de un adaptador de red inalámbrica (Wi-Fi)?",
  "options": [
    "Necesidad de cables para la conexión",
    "Conexión directa a la corriente eléctrica",
    "Posibilidad de conexión a través de redes celulares",
    "Mayor velocidad de transferencia de datos que el cable Ethernet"
  ],
  "correct": 2,
  "explanation": "La respuesta correcta es \"Posibilidad de conexión a través de redes celulares\". Aunque no es su función principal, algunos adaptadores de red inalámbrica pueden conectarse a redes celulares, pero su ventaja principal es la conexión sin cables a redes Wi-Fi.",
  "source": "https://es.wikipedia.org/wiki/Adaptador_de_red_inal%C3%A1mbrica"
},
{
  "id": 523,
  "category": "Componentes Básicos",
  "question": "¿Qué función realiza un repetidor Wi-Fi en una red de comunicación?",
  "options": [
    "Conectar dispositivos mediante cables Ethernet",
    "Ampliar la cobertura de una red inalámbrica",
    "Conectar dispositivos a través de puertos USB",
    "Exclusivamente para conexiones Bluetooth"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Ampliar la cobertura de una red inalámbrica\". Un repetidor Wi-Fi (o extensor de alcance) recibe la señal Wi-Fi existente y la retransmite para ampliar el área de cobertura de la red inalámbrica.",
  "source": "https://es.wikipedia.org/wiki/Repetidor_Wi-Fi"
},
{
  "id": 524,
  "category": "Componentes Básicos",
  "question": "¿Cuál es la principal función de un switch en una red local?",
  "options": [
    "Gestionar el tráfico de red y proporcionar acceso a internet",
    "Conectar dispositivos inalámbricos mediante Wi-Fi",
    "Enviar señales analógicas a través de cables coaxiales",
    "Conectar dispositivos a través de cables Ethernet"
  ],
  "correct": 3,
  "explanation": "La respuesta correcta es \"Conectar dispositivos a través de cables Ethernet\". Un switch es un dispositivo de red que conecta múltiples dispositivos entre sí mediante cables Ethernet, permitiendo la comunicación dentro de una red local.",
  "source": "https://es.wikipedia.org/wiki/Switch_de_red"
},
{
  "id": 525,
  "category": "Componentes Básicos",
  "question": "¿Qué característica es común en un hub de red?",
  "options": [
    "Ampliar la cobertura de una red inalámbrica",
    "Gestionar el tráfico de red y proporcionar acceso a internet",
    "Conectar dispositivos a través de puertos USB",
    "Reenviar datos a todos los dispositivos en la red sin distinción"
  ],
  "correct": 3,
  "explanation": "La respuesta correcta es \"Reenviar datos a todos los dispositivos en la red sin distinción\". Un hub de red es un dispositivo simple que reenvía todos los paquetes de datos que recibe a todos los dispositivos conectados, sin inteligencia para dirigirlos específicamente.",
  "source": "https://es.wikipedia.org/wiki/Concentrador_(red)"
},
{
  "id": 526,
  "category": "Componentes Básicos",
  "question": "¿Cuál es la ventaja de una antena externa en un router inalámbrico?",
  "options": [
    "Menor alcance de la señal Wi-Fi",
    "Reducción de interferencias electromagnéticas",
    "Necesidad de cables para la conexión",
    "Exclusivamente para conexiones Bluetooth"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Reducción de interferencias electromagnéticas\". Una antena externa en un router inalámbrico puede proporcionar mayor alcance y mejor calidad de señal, además de reducir las interferencias electromagnéticas del propio dispositivo.",
  "source": "https://es.wikipedia.org/wiki/Antena"
},
{
  "id": 527,
  "category": "Componentes Básicos",
  "question": "¿Qué función realiza un teléfono IP en una red de comunicación?",
  "options": [
    "Transmisión de datos por cable coaxial",
    "Conversión de señales analógicas a digitales para realizar llamadas sobre internet",
    "Conexión de dispositivos inalámbricos mediante Wi-Fi",
    "Exclusivamente para llamadas telefónicas tradicionales"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Conversión de señales analógicas a digitales para realizar llamadas sobre internet\". Un teléfono IP (VoIP) convierte la voz en paquetes de datos digitales que se transmiten a través de internet, permitiendo llamadas sin necesidad de una línea telefónica tradicional.",
  "source": "https://es.wikipedia.org/wiki/Voz_sobre_IP"
},
{
  "id": 528,
  "category": "Componentes Básicos",
  "question": "¿Cuál es la principal función de una tarjeta de red en una computadora?",
  "options": [
    "Gestionar el tráfico de red y proporcionar acceso a internet",
    "Conectar dispositivos inalámbricos mediante Wi-Fi",
    "Facilitar la conexión a través de cables Ethernet",
    "Exclusivamente para conexiones Bluetooth"
  ],
  "correct": 2,
  "explanation": "La respuesta correcta es \"Facilitar la conexión a través de cables Ethernet\". Una tarjeta de red (o adaptador de red) permite a una computadora conectarse a una red mediante cables Ethernet, facilitando la comunicación con otros dispositivos.",
  "source": "https://es.wikipedia.org/wiki/Tarjeta_de_red"
},
{
  "id": 529,
  "category": "Componentes Básicos",
  "question": "¿Qué característica es común en un adaptador Bluetooth?",
  "options": [
    "Necesidad de cables para la conexión",
    "Conexión directa a la corriente eléctrica",
    "Permite la comunicación inalámbrica entre dispositivos",
    "Exclusivamente para conexiones Wi-Fi"
  ],
  "correct": 2,
  "explanation": "La respuesta correcta es \"Permite la comunicación inalámbrica entre dispositivos\". Un adaptador Bluetooth permite a una computadora comunicarse de forma inalámbrica con otros dispositivos compatibles con Bluetooth, como ratones, teclados, auriculares o smartphones.",
  "source": "https://es.wikipedia.org/wiki/Bluetooth"
},
{
  "id": 530,
  "category": "Componentes Básicos",
  "question": "¿Cuál es la ventaja de una tarjeta SIM en dispositivos de comunicación móvil?",
  "options": [
    "Mayor velocidad de transferencia de datos",
    "Posibilidad de realizar llamadas telefónicas",
    "Mayor capacidad de almacenamiento",
    "Necesidad de cables para la conexión"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Posibilidad de realizar llamadas telefónicas\". Una tarjeta SIM (Subscriber Identity Module) identifica al usuario en una red móvil y permite realizar llamadas telefónicas, enviar mensajes y acceder a datos móviles.",
  "source": "https://es.wikipedia.org/wiki/Tarjeta_SIM"
},
{
  "id": 531,
  "category": "Componentes Básicos",
  "question": "¿Qué función realiza un adaptador de red PLC?",
  "options": [
    "Conectar dispositivos mediante cables Ethernet",
    "Ampliar la cobertura de una red inalámbrica",
    "Utilizar la red eléctrica para transmitir datos",
    "Exclusivamente para conexiones Bluetooth"
  ],
  "correct": 2,
  "explanation": "La respuesta correcta es \"Utilizar la red eléctrica para transmitir datos\". Un adaptador de red PLC (Power Line Communication) utiliza la instalación eléctrica existente para transmitir datos, permitiendo crear una red a través de los enchufes eléctricos.",
  "source": "https://es.wikipedia.org/wiki/Red_el%C3%A9ctrica_de_comunicaciones"
},
{
  "id": 532,
  "category": "Componentes Básicos",
  "question": "¿Cuál es la principal función de una cámara de vigilancia IP en una red de comunicación?",
  "options": [
    "Transmisión de datos por cable coaxial",
    "Grabación de videos en calidad extrema",
    "Monitorización y transmisión de video a través de internet",
    "Conexión de dispositivos inalámbricos mediante Wi-Fi"
  ],
  "correct": 2,
  "explanation": "La respuesta correcta es \"Monitorización y transmisión de video a través de internet\". Una cámara de vigilancia IP captura video y lo transmite a través de una red IP, permitiendo la monitorización remota a través de internet.",
  "source": "https://es.wikipedia.org/wiki/C%C3%A1mara_de_vigilancia_IP"
},
{
  "id": 533,
  "category": "Componentes Básicos",
  "question": "¿Qué característica es común en una impresora de red?",
  "options": [
    "Transmisión de datos por cable coaxial",
    "Conexión de dispositivos inalámbricos mediante Wi-Fi",
    "Uso exclusivo para impresiones en blanco y negro",
    "Exclusivamente para conexiones Bluetooth"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Conexión de dispositivos inalámbricos mediante Wi-Fi\". Una impresora de red puede conectarse a una red local mediante Wi-Fi o Ethernet, permitiendo que múltiples usuarios impriman sin necesidad de conectarla directamente a sus computadoras.",
  "source": "https://es.wikipedia.org/wiki/Impresora_de_red"
},
{
  "id": 534,
  "category": "Componentes Básicos",
  "question": "¿Cuál es la ventaja de un gateway en una red de comunicación?",
  "options": [
    "Conectar dispositivos mediante cables Ethernet",
    "Proporcionar acceso a internet y gestionar el tráfico de red",
    "Ampliar la cobertura de una red inalámbrica",
    "Exclusivamente para llamadas telefónicas tradicionales"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Proporcionar acceso a internet y gestionar el tráfico de red\". Un gateway (puerta de enlace) es un dispositivo que conecta diferentes redes, como una red local e internet, gestionando el tráfico entre ellas.",
  "source": "https://es.wikipedia.org/wiki/Puerta_de_enlace"
},
{
  "id": 535,
  "category": "Componentes Básicos",
  "question": "¿Qué función realiza un adaptador de red 4G/LTE?",
  "options": [
    "Conectar dispositivos mediante cables Ethernet",
    "Ampliar la cobertura de una red inalámbrica",
    "Proporcionar conexión a internet a través de redes móviles",
    "Exclusivamente para conexiones Bluetooth"
  ],
  "correct": 2,
  "explanation": "La respuesta correcta es \"Proporcionar conexión a internet a través de redes móviles\". Un adaptador de red 4G/LTE permite conectar dispositivos a internet utilizando las redes móviles 4G/LTE, proporcionando acceso a internet en áreas sin cobertura Wi-Fi o cable.",
  "source": "https://es.wikipedia.org/wiki/LTE"
},
{
  "id": 536,
  "category": "Componentes Básicos",
  "question": "¿Cuál es la principal función de un teléfono VoIP?",
  "options": [
    "Transmisión de datos por cable coaxial",
    "Conversión de señales analógicas a digitales para realizar llamadas sobre internet",
    "Uso exclusivo para llamadas telefónicas tradicionales",
    "Conexión de dispositivos inalámbricos mediante Wi-Fi"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Conversión de señales analógicas a digitales para realizar llamadas sobre internet\". Un teléfono VoIP (Voz sobre IP) convierte la voz en paquetes de datos digitales que se transmiten a través de internet, permitiendo llamadas sin necesidad de una línea telefónica tradicional.",
  "source": "https://es.wikipedia.org/wiki/Voz_sobre_IP"
},
{
  "id": 537,
  "category": "Componentes Básicos",
  "question": "¿Qué característica es común en un adaptador de red Powerline?",
  "options": [
    "Conexión directa a la corriente eléctrica",
    "Ampliar la cobertura de una red inalámbrica",
    "Utilización de la red eléctrica para transmitir datos",
    "Exclusivamente para conexiones Bluetooth"
  ],
  "correct": 2,
  "explanation": "La respuesta correcta es \"Utilización de la red eléctrica para transmitir datos\". Un adaptador de red Powerline utiliza la instalación eléctrica existente para transmitir datos, permitiendo crear una red a través de los enchufes eléctricos.",
  "source": "https://es.wikipedia.org/wiki/Red_el%C3%A9ctrica_de_comunicaciones"
},
{
  "id": 538,
  "category": "Componentes Básicos",
  "question": "¿Cuál es la ventaja de un conmutador KVM en una red de comunicación?",
  "options": [
    "Permite el control de múltiples computadoras con un solo teclado, monitor y ratón",
    "Ampliar la cobertura de una red inalámbrica",
    "Facilita la conexión de dispositivos inalámbricos mediante Wi-Fi",
    "Exclusivamente para conexiones Bluetooth"
  ],
  "correct": 0,
  "explanation": "La respuesta correcta es \"Permite el control de múltiples computadoras con un solo teclado, monitor y ratón\". Un conmutador KVM (Keyboard, Video, Mouse) permite controlar múltiples computadoras utilizando un solo conjunto de teclado, monitor y ratón, cambiando entre ellas según sea necesario.",
  "source": "https://es.wikipedia.org/wiki/Conmutador_KVM"
},
{
  "id": 539,
  "category": "Componentes Básicos",
  "question": "¿Qué función realiza un repetidor de señal móvil?",
  "options": [
    "Conectar dispositivos mediante cables Ethernet",
    "Ampliar la cobertura de la señal móvil para dispositivos móviles",
    "Uso exclusivo para llamadas telefónicas tradicionales",
    "Exclusivamente para conexiones Bluetooth"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Ampliar la cobertura de la señal móvil para dispositivos móviles\". Un repetidor de señal móvil (o amplificador de señal celular) capta, amplifica y retransmite las señales de telefonía móvil, mejorando la cobertura en áreas con señal débil.",
  "source": "https://es.wikipedia.org/wiki/Repetidor_de_se%C3%B1al_celular"
},
{
  "id": 540,
  "category": "Conectores de Video",
  "question": "¿Qué característica es esencial en un monitor con tecnología IPS?",
  "options": [
    "Mayor velocidad de actualización",
    "Amplios ángulos de visión y reproducción precisa de colores",
    "Bajo consumo de energía",
    "Alta tasa de contraste"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Amplios ángulos de visión y reproducción precisa de colores\". La tecnología IPS (In-Plane Switching) se caracteriza por ofrecer amplios ángulos de visión y una reproducción de colores precisa y consistente, aunque con tiempos de respuesta más lentos que otras tecnologías.",
  "source": "https://es.wikipedia.org/wiki/IPS"
},
{
  "id": 541,
  "category": "Conectores de Video",
  "question": "¿Cuál es la función principal de un monitor curvo?",
  "options": [
    "Reducción de reflejos y deslumbramientos",
    "Mejora de la inmersión visual y mayor comodidad para el usuario",
    "Mayor velocidad de respuesta",
    "Exclusivamente para aplicaciones gráficas"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Mejora de la inmersión visual y mayor comodidad para el usuario\". Un monitor curvo busca envolver el campo de visión del usuario, proporcionando una mayor inmersión y reduciendo la distorsión en los bordes, además de ofrecer una mayor comodidad visual.",
  "source": "https://es.wikipedia.org/wiki/Monitor_curvo"
},
{
  "id": 542,
  "category": "Conectores de Video",
  "question": "¿Qué ventaja ofrece un monitor con tecnología LED sobre uno con tecnología LCD?",
  "options": [
    "Mayor duración de la batería",
    "Mejor reproducción del color y mayor eficiencia energética",
    "Ángulos de visión más amplios",
    "Exclusivamente para aplicaciones de diseño gráfico"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Mejor reproducción del color y mayor eficiencia energética\". Los monitores con retroiluminación LED utilizan diodos emisores de luz en lugar de los tubos fluorescentes de los LCD tradicionales, lo que resulta en mejor reproducción del color, mayor contraste y menor consumo energético.",
  "source": "https://es.wikipedia.org/wiki/LED-backlit_LCD"
},
{
  "id": 543,
  "category": "Conectores de Video",
  "question": "¿Cuál es la principal función de un monitor con resolución 4K?",
  "options": [
    "Reducción de la fatiga visual",
    "Mayor nitidez y detalle en la visualización de contenidos",
    "Menor consumo de energía",
    "Alta tasa de refresco"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Mayor nitidez y detalle en la visualización de contenidos\". Un monitor con resolución 4K (3840×2160 píxeles) ofrece aproximadamente cuatro veces más píxeles que un monitor Full HD (1920×1080), resultando en una imagen significativamente más nítida y detallada.",
  "source": "https://es.wikipedia.org/wiki/4K_resoluci%C3%B3n"
},
{
  "id": 544,
  "category": "Conectores de Video",
  "question": "¿Qué característica es común en un monitor con tecnología FreeSync?",
  "options": [
    "Mayor velocidad de actualización",
    "Reducción de reflejos y deslumbramientos",
    "Sincronización de la frecuencia de actualización con la tarjeta gráfica",
    "Exclusivamente para aplicaciones de oficina"
  ],
  "correct": 2,
  "explanation": "La respuesta correcta es \"Sincronización de la frecuencia de actualización con la tarjeta gráfica\". FreeSync es una tecnología de AMD que sincroniza dinámicamente la tasa de refresco del monitor con la velocidad de fotogramas de la GPU, eliminando el screen tearing y proporcionando una experiencia más fluida.",
  "source": "https://es.wikipedia.org/wiki/AMD_FreeSync"
},
{
  "id": 545,
  "category": "Conectores de Video",
  "question": "¿Cuál es la ventaja de un monitor con tecnología OLED en comparación con LCD?",
  "options": [
    "Mayor duración de la batería",
    "Mejor reproducción del color y negros más profundos",
    "Bajo costo de producción",
    "Exclusivamente para aplicaciones de diseño gráfico"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Mejor reproducción del color y negros más profundos\". Los monitores OLED utilizan diodos emisores de luz orgánicos que se encienden individualmente, permitiendo negros perfectos (píxeles completamente apagados), colores más vibrantes y mejores ángulos de visión que los LCD.",
  "source": "https://es.wikipedia.org/wiki/OLED"
},
{
  "id": 546,
  "category": "Conectores de Video",
  "question": "¿Qué función realiza un monitor con HDR (High Dynamic Range)?",
  "options": [
    "Reducción de la fatiga visual",
    "Mayor rango dinámico de colores y contraste",
    "Sincronización de la frecuencia de actualización con la tarjeta gráfica",
    "Exclusivamente para aplicaciones de oficina"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Mayor rango dinámico de colores y contraste\". HDR (High Dynamic Range) permite un mayor rango dinámico entre las áreas más claras y más oscuras de una imagen, proporcionando más detalle en ambas zonas y colores más realistas.",
  "source": "https://es.wikipedia.org/wiki/High_dynamic_range"
},
{
  "id": 547,
  "category": "Conectores de Video",
  "question": "¿Cuál es la principal ventaja de un monitor con tecnología G-Sync?",
  "options": [
    "Mayor velocidad de actualización",
    "Reducción de reflejos y deslumbramientos",
    "Sincronización de la frecuencia de actualización con la tarjeta gráfica",
    "Exclusivamente para aplicaciones de diseño gráfico"
  ],
  "correct": 2,
  "explanation": "La respuesta correcta es \"Sincronización de la frecuencia de actualización con la tarjeta gráfica\". G-Sync es una tecnología de NVIDIA que sincroniza la tasa de refresco del monitor con la velocidad de fotogramas de la GPU, eliminando el screen tearing y proporcionando una experiencia de juego más fluida.",
  "source": "https://es.wikipedia.org/wiki/NVIDIA_G-Sync"
},
{
  "id": 548,
  "category": "Conectores de Video",
  "question": "¿Qué característica es común en un monitor ultrawide?",
  "options": [
    "Formato de pantalla estándar (16:9)",
    "Mayor cantidad de píxeles por pulgada",
    "Relación de aspecto más amplia para una mayor visión panorámica",
    "Alta tasa de contraste"
  ],
  "correct": 2,
  "explanation": "La respuesta correcta es \"Relación de aspecto más amplia para una mayor visión panorámica\". Los monitores ultrawide tienen relaciones de aspecto más anchas que el estándar 16:9, como 21:9 o 32:9, proporcionando más espacio horizontal para productividad o una experiencia más inmersiva en juegos y películas.",
  "source": "https://es.wikipedia.org/wiki/Monitor_ultrapanor%C3%A1mico"
},
{
  "id": 549,
  "category": "Conectores de Video",
  "question": "¿Cuál es la principal función de un monitor táctil?",
  "options": [
    "Reducción de la fatiga visual",
    "Permite la interacción directa con la pantalla mediante toques",
    "Mayor velocidad de respuesta",
    "Exclusivamente para aplicaciones de oficina"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Permite la interacción directa con la pantalla mediante toques\". Un monitor táctil permite al usuario interactuar directamente con la pantalla mediante toques, gestos o un stylus, eliminando la necesidad de un ratón o teclado para ciertas tareas.",
  "source": "https://es.wikipedia.org/wiki/Pantalla_t%C3%A1ctil"
},
{
  "id": 550,
  "category": "Conectores de Video",
  "question": "¿Qué ventaja ofrece un monitor con tecnología Blue Light Filter?",
  "options": [
    "Mayor velocidad de actualización",
    "Reducción de la fatiga visual al filtrar la luz azul",
    "Sincronización de la frecuencia de actualización con la tarjeta gráfica",
    "Exclusivamente para aplicaciones de diseño gráfico"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Reducción de la fatiga visual al filtrar la luz azul\". La tecnología Blue Light Filter reduce la cantidad de luz azul emitida por el monitor, lo que puede ayudar a reducir la fatiga visual y mejorar la calidad del sueño durante el uso nocturno.",
  "source": "https://es.wikipedia.org/wiki/Luz_azul_y_salud"
},
{
  "id": 551,
  "category": "Conectores de Video",
  "question": "¿Cuál es la función principal de un monitor con tecnología antiglare?",
  "options": [
    "Reducción de reflejos y deslumbramientos",
    "Mayor nitidez y detalle en la visualización de contenidos",
    "Sincronización de la frecuencia de actualización con la tarjeta gráfica",
    "Exclusivamente para aplicaciones de oficina"
  ],
  "correct": 0,
  "explanation": "La respuesta correcta es \"Reducción de reflejos y deslumbramientos\". La tecnología antiglare utiliza tratamientos en la superficie del panel para reducir los reflejos y deslumbramientos causados por fuentes de luz ambiental, mejorando la visibilidad en condiciones de iluminación brillante.",
  "source": "https://es.wikipedia.org/wiki/Antireflectante"
},
{
  "id": 552,
  "category": "Conectores de Video",
  "question": "¿Qué característica es común en un monitor con ajuste de altura?",
  "options": [
    "Formato de pantalla ultrawide",
    "Permite modificar la altura de la pantalla para mayor comodidad",
    "Bajo consumo de energía",
    "Alta tasa de refresco"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Permite modificar la altura de la pantalla para mayor comodidad\". Un monitor con ajuste de altura permite al usuario modificar la posición vertical de la pantalla para adaptarla a su altura y postura, mejorando la comodidad durante el uso prolongado.",
  "source": "https://es.wikipedia.org/wiki/Monitor_de_computadora"
},
{
  "id": 553,
  "category": "Conectores de Video",
  "question": "¿Cuál es la ventaja de un monitor con tecnología antiglare?",
  "options": [
    "Mayor velocidad de actualización",
    "Reducción de reflejos y deslumbramientos",
    "Sincronización de la frecuencia de actualización con la tarjeta gráfica",
    "Exclusivamente para aplicaciones de diseño gráfico"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Reducción de reflejos y deslumbramientos\". La tecnología antiglare utiliza tratamientos en la superficie del panel para reducir los reflejos y deslumbramientos causados por fuentes de luz ambiental, mejorando la visibilidad en condiciones de iluminación brillante.",
  "source": "https://es.wikipedia.org/wiki/Antireflectante"
},
{
  "id": 554,
  "category": "Conectores de Video",
  "question": "¿Cuál es la principal función de un monitor con tecnología Flicker-Free?",
  "options": [
    "Reducción de la fatiga visual al eliminar el parpadeo de la pantalla",
    "Mayor rango dinámico de colores y contraste",
    "Sincronización de la frecuencia de actualización con la tarjeta gráfica",
    "Exclusivamente para aplicaciones de oficina"
  ],
  "correct": 0,
  "explanation": "La respuesta correcta es \"Reducción de la fatiga visual al eliminar el parpadeo de la pantalla\". La tecnología Flicker-Free utiliza retroiluminación de corriente continua (DC) o modulación por ancho de pulso (PWM) a alta frecuencia para eliminar el parpadeo visible que puede causar fatiga visual durante el uso prolongado.",
  "source": "https://es.wikipedia.org/wiki/Parpadeo_(pantalla)"
},
{
  "id": 555,
  "category": "Conectores de Video",
  "question": "¿Qué característica es común en un monitor con tecnología PLS?",
  "options": [
    "Mayor velocidad de actualización",
    "Amplios ángulos de visión y reproducción precisa de colores",
    "Bajo consumo de energía",
    "Alta tasa de refresco"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Amplios ángulos de visión y reproducción precisa de colores\". PLS (Plane-to-Line Switching) es una variante de la tecnología IPS que ofrece ángulos de visión similares y tiempos de respuesta más rápidos, manteniendo una buena reproducción del color.",
  "source": "https://es.wikipedia.org/wiki/Plane-to-Line_Switching"
},
{
  "id": 556,
  "category": "Conectores de Video",
  "question": "¿Cuál es la ventaja de un monitor con tecnología Nano IPS?",
  "options": [
    "Mayor velocidad de actualización",
    "Mayor precisión en la reproducción del color",
    "Sincronización de la frecuencia de actualización con la tarjeta gráfica",
    "Exclusivamente para aplicaciones de diseño gráfico"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Mayor precisión en la reproducción del color\". Nano IPS utiliza nanopartículas para mejorar la eficiencia de la luz y el color, resultando en una mayor precisión en la reproducción del color y una mayor cobertura de espacios de color como DCI-P3.",
  "source": "https://es.wikipedia.org/wiki/Nano_IPS"
},
{
  "id": 557,
  "category": "Conectores de Video",
  "question": "¿Qué función realiza un monitor con tecnología Low Blue Light?",
  "options": [
    "Reducción de la fatiga visual al reducir la emisión de luz azul",
    "Mayor rango dinámico de colores y contraste",
    "Sincronización de la frecuencia de actualización con la tarjeta gráfica",
    "Exclusivamente para aplicaciones de oficina"
  ],
  "correct": 0,
  "explanation": "La respuesta correcta es \"Reducción de la fatiga visual al reducir la emisión de luz azul\". La tecnología Low Blue Light reduce la cantidad de luz azul emitida por el monitor, lo que puede ayudar a reducir la fatiga visual y mejorar la calidad del sueño durante el uso nocturno.",
  "source": "https://es.wikipedia.org/wiki/Luz_azul_y_salud"
},
{
  "id": 558,
  "category": "Conectores de Video",
  "question": "¿Cuál es la principal ventaja de un monitor con tecnología QLED?",
  "options": [
    "Mayor velocidad de actualización",
    "Mayor reproducción del color y brillo",
    "Sincronización de la frecuencia de actualización con la tarjeta gráfica",
    "Exclusivamente para aplicaciones de diseño gráfico"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Mayor reproducción del color y brillo\". QLED (Quantum Dot LED) utiliza nanocristales semiconductor que emiten luz de colores muy puros cuando se estimulan, permitiendo una gama cromática más amplia y colores más vibrantes en los monitores.",
  "source": "https://es.wikipedia.org/wiki/Quantum_dot"
},
{
  "id": 559,
  "category": "Conectores de Video",
  "question": "¿Qué característica es común en un monitor con tecnología MVA?",
  "options": [
    "Mayor velocidad de actualización",
    "Amplios ángulos de visión y reproducción precisa de colores",
    "Bajo consumo de energía",
    "Alta tasa de contraste"
  ],
  "correct": 3,
  "explanation": "La respuesta correcta es \"Alta tasa de contraste\". MVA (Multi-domain Vertical Alignment) es una tecnología de panel LCD que ofrece mejores ratios de contraste en comparación con otras tecnologías como TN o IPS, aunque con tiempos de respuesta más lentos.",
  "source": "https://es.wikipedia.org/wiki/Vertical_alignment"
},
{
  "id": 560,
  "category": "Componentes Básicos",
  "question": "¿Cuál es la función principal de un display frontal en una computadora?",
  "options": [
    "Proporcionar una visualización de la información del sistema",
    "Controlar la velocidad de los ventiladores",
    "Exclusivamente para la reproducción de video",
    "Gestionar la conexión de dispositivos externos"
  ],
  "correct": 0,
  "explanation": "La respuesta correcta es \"Proporcionar una visualización de la información del sistema\". Un display frontal en una computadora muestra información del sistema como temperatura, velocidad de ventiladores, frecuencia de la CPU o estado de los componentes, permitiendo al usuario monitorizar el sistema sin necesidad de software adicional.",
  "source": "https://es.wikipedia.org/wiki/Panel_frontal"
},
{
  "id": 561,
  "category": "Componentes Básicos",
  "question": "¿Qué característica es común en un display LCD integrado en una computadora portátil?",
  "options": [
    "Mejor reproducción del color y brillo",
    "Bajo consumo de energía",
    "Necesidad de cables externos para su funcionamiento",
    "Uso exclusivo para aplicaciones de diseño gráfico"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Bajo consumo de energía\". Los displays LCD integrados en computadoras portátiles están diseñados para consumir poca energía, lo que ayuda a prolongar la duración de la batería del dispositivo.",
  "source": "https://es.wikipedia.org/wiki/Pantalla_de_cristal_l%C3%ADquido"
},
{
  "id": 562,
  "category": "Componentes Básicos",
  "question": "¿Cuál es la ventaja de un display OLED en comparación con uno LCD?",
  "options": [
    "Mayor duración de la batería",
    "Mejor reproducción del color y negros más profundos",
    "Necesidad de una fuente de luz externa",
    "Exclusivamente para aplicaciones de oficina"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Mejor reproducción del color y negros más profundos\". Los displays OLED utilizan diodos emisores de luz orgánicos que se encienden individualmente, permitiendo negros perfectos (píxeles completamente apagados), colores más vibrantes y mejores ángulos de visión que los LCD.",
  "source": "https://es.wikipedia.org/wiki/OLED"
},
{
  "id": 563,
  "category": "Componentes Básicos",
  "question": "¿Cuál es la función principal de un fan controller en una computadora?",
  "options": [
    "Controlar la velocidad de los ventiladores para gestionar la temperatura",
    "Reproducción de contenidos multimedia",
    "Exclusivamente para la gestión del almacenamiento",
    "Proporcionar energía adicional a los dispositivos conectados"
  ],
  "correct": 0,
  "explanation": "La respuesta correcta es \"Controlar la velocidad de los ventiladores para gestionar la temperatura\". Un fan controller permite ajustar manual o automáticamente la velocidad de los ventiladores del sistema según la temperatura, equilibrando el rendimiento de refrigeración y el nivel de ruido.",
  "source": "https://es.wikipedia.org/wiki/Controlador_de_ventilador"
},
{
  "id": 564,
  "category": "Componentes Básicos",
  "question": "¿Qué ventaja ofrece un fan controller con control automático de velocidad?",
  "options": [
    "Mayor duración de la batería",
    "Ajuste manual de la velocidad de los ventiladores",
    "Adapta automáticamente la velocidad según la temperatura del sistema",
    "Uso exclusivo para aplicaciones de diseño gráfico"
  ],
  "correct": 2,
  "explanation": "La respuesta correcta es \"Adapta automáticamente la velocidad según la temperatura del sistema\". Un fan controller con control automático ajusta la velocidad de los ventiladores según la temperatura del sistema, aumentando la velocidad cuando hace calor y reduciéndola cuando la temperatura es más baja, equilibrando refrigeración y ruido.",
  "source": "https://es.wikipedia.org/wiki/Controlador_de_ventilador"
},
{
  "id": 565,
  "category": "Almacenamiento",
  "question": "¿Cuál es la principal función de una carcasa externa de disco duro?",
  "options": [
    "Proporcionar almacenamiento adicional a la computadora",
    "Gestionar la velocidad de los ventiladores",
    "Exclusivamente para la reproducción de video",
    "Conectar dispositivos externos mediante USB o Thunderbolt"
  ],
  "correct": 0,
  "explanation": "La respuesta correcta es \"Proporcionar almacenamiento adicional a la computadora\". Una carcasa externa de disco duro permite convertir un disco duro interno en un dispositivo de almacenamiento externo que se puede conectar a una computadora mediante USB, FireWire o Thunderbolt.",
  "source": "https://es.wikipedia.org/wiki/Carcasa_de_disco_duro"
},
{
  "id": 566,
  "category": "Almacenamiento",
  "question": "¿Qué característica es común en una carcasa externa de SSD?",
  "options": [
    "Mayor capacidad de almacenamiento",
    "Bajo consumo de energía",
    "Conexión exclusiva a través de cables SATA",
    "Uso exclusivo para aplicaciones de diseño gráfico"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Bajo consumo de energía\". Las carcasas externas de SSD suelen consumir menos energía que las de discos duros tradicionales, ya que los SSD no tienen partes móviles que requieran energía para funcionar.",
  "source": "https://es.wikipedia.org/wiki/Unidad_de_estado_s%C3%B3lido"
},
{
  "id": 567,
  "category": "USB y Conectores",
  "question": "¿Cuál es la ventaja de una carcasa externa con conexión USB-C?",
  "options": [
    "Necesidad de adaptadores para la transferencia de datos",
    "Mayor velocidad de transferencia de archivos",
    "Uso exclusivo para dispositivos Mac",
    "Reducción de la velocidad de transferencia"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Mayor velocidad de transferencia de archivos\". Una carcasa externa con conexión USB-C puede aprovechar las altas velocidades de transferencia de USB 3.1 o USB 3.2, permitiendo transferencias de datos más rápidas que con conexiones USB más antiguas.",
  "source": "https://es.wikipedia.org/wiki/USB-C"
},
{
  "id": 568,
  "category": "Componentes Básicos",
  "question": "¿Cuál es la función principal de un dock station en una computadora?",
  "options": [
    "Gestionar la velocidad de los ventiladores",
    "Proporcionar una base de conexión para dispositivos externos",
    "Exclusivamente para la reproducción de video",
    "Ampliar la capacidad de almacenamiento interno"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Proporcionar una base de conexión para dispositivos externos\". Un dock station es una base que permite conectar múltiples dispositivos externos a una computadora mediante un solo cable, simplificando las conexiones y proporcionando puertos adicionales.",
  "source": "https://es.wikipedia.org/wiki/Estaci%C3%B3n_de_acoplamiento"
},
{
  "id": 569,
  "category": "Componentes Básicos",
  "question": "¿Qué característica es común en un dock station con conexión Thunderbolt?",
  "options": [
    "Mayor duración de la batería",
    "Alta velocidad de transferencia de datos y alimentación simultánea",
    "Exclusivamente para la gestión del almacenamiento",
    "Uso exclusivo para dispositivos Windows"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Alta velocidad de transferencia de datos y alimentación simultánea\". Un dock station con conexión Thunderbolt puede aprovechar la alta velocidad de transferencia de Thunderbolt y, en muchos casos, también proporcionar alimentación a los dispositivos conectados, todo a través de un solo cable.",
  "source": "https://es.wikipedia.org/wiki/Thunderbolt_(interfaz)"
},
{
  "id": 570,
  "category": "Puertos y Conectividad",
  "question": "¿Cuál es la ventaja de una dock station con puertos HDMI y DisplayPort?",
  "options": [
    "Necesidad de adaptadores para la conexión",
    "Mayor compatibilidad con diferentes tipos de monitores",
    "Exclusivamente para dispositivos Apple",
    "Reducción de la velocidad de transferencia"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Mayor compatibilidad con diferentes tipos de monitores\". Una dock station con puertos HDMI y DisplayPort permite conectar diferentes tipos de monitores y dispositivos de visualización, ofreciendo mayor compatibilidad y flexibilidad.",
  "source": "https://es.wikipedia.org/wiki/Estaci%C3%B3n_de_acoplamiento"
},
{
  "id": 571,
  "category": "USB y Conectores",
  "question": "¿Cuál es la función principal de un hub USB en una computadora?",
  "options": [
    "Gestionar la velocidad de los ventiladores",
    "Proporcionar puertos adicionales para la conexión de dispositivos externos",
    "Exclusivamente para la reproducción de video",
    "Ampliar la capacidad de almacenamiento interno"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Proporcionar puertos adicionales para la conexión de dispositivos externos\". Un hub USB permite expandir el número de puertos USB disponibles en una computadora, facilitando la conexión de múltiples dispositivos simultáneamente.",
  "source": "https://es.wikipedia.org/wiki/Concentrador_USB"
},
{
  "id": 572,
  "category": "USB y Conectores",
  "question": "¿Qué ventaja ofrece un hub USB 3.0 sobre uno USB 2.0?",
  "options": [
    "Mayor velocidad de transferencia de datos",
    "Menos puertos disponibles para la conexión de dispositivos",
    "Uso exclusivo para dispositivos Apple",
    "Reducción de la velocidad de transferencia"
  ],
  "correct": 0,
  "explanation": "La respuesta correcta es \"Mayor velocidad de transferencia de datos\". Un hub USB 3.0 ofrece velocidades de transferencia de hasta 5 Gbps, significativamente más rápidas que los 480 Mbps de USB 2.0, permitiendo transferencias de datos más rápidas para dispositivos compatibles.",
  "source": "https://es.wikipedia.org/wiki/USB_3.0"
},
{
  "id": 573,
  "category": "Componentes Básicos",
  "question": "¿Cuál es la principal función de un lector de tarjetas externo?",
  "options": [
    "Controlar la velocidad de los ventiladores",
    "Proporciona puertos para leer diferentes tipos de tarjetas de memoria",
    "Exclusivamente para la gestión del almacenamiento",
    "Ampliar la capacidad de almacenamiento interno"
  ],
  "correct": 1,
  "explanation": "La respuesta correcta es \"Proporciona puertos para leer diferentes tipos de tarjetas de memoria\". Un lector de tarjetas externo permite leer diferentes tipos de tarjetas de memoria como SD, microSD, CompactFlash, Memory Stick, entre otras, conectándolas a una computadora.",
  "source": "https://es.wikipedia.org/wiki/Lector_de_tarjetas"
},
  {
    "id": 574,
    "category": "USB y Conectores",
    "question": "¿Qué característica es común en un lector de tarjetas con conexión USB-C?",
    "options": [
      "Necesidad de adaptadores para la transferencia de datos",
      "Mayor velocidad de lectura de tarjetas de memoria",
      "Uso exclusivo para dispositivos Android",
      "Reducción de la velocidad de transferencia"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Mayor velocidad de lectura de tarjetas de memoria\". USB-C es una versión más reciente del estándar USB que ofrece velocidades de transferencia más rápidas en comparación con sus predecesores, lo que permite una lectura más rápida de las tarjetas de memoria.",
    "source": "https://es.wikipedia.org/wiki/USB-C"
  },
  {
    "id": 575,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la ventaja de una base de refrigeración para laptop?",
    "options": [
      "Proporcionar almacenamiento adicional a la computadora",
      "Controlar la velocidad de los ventiladores internos para enfriar la laptop",
      "Exclusivamente para la reproducción de video",
      "Reducción de la velocidad de transferencia de datos"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Controlar la velocidad de los ventiladores internos para enfriar la laptop\". Las bases de refrigeración para laptops ayudan a disipar el calor generado por el equipo, lo que puede mejorar su rendimiento y prolongar su vida útil al evitar el sobrecalentamiento.",
    "source": "https://es.wikipedia.org/wiki/Refrigeración_por_liquido_(informática)"
  },
  {
    "id": 576,
    "category": "Componentes Básicos",
    "question": "¿Qué función realiza una base de refrigeración con ventiladores ajustables?",
    "options": [
      "Ajuste manual de la velocidad de los ventiladores",
      "Uso exclusivo para dispositivos Apple",
      "Reducción de la velocidad de transferencia de datos",
      "Control automático de la temperatura de la laptop"
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Ajuste manual de la velocidad de los ventiladores\". Las bases de refrigeración con ventiladores ajustables permiten al usuario controlar manualmente la velocidad de los ventiladores para adaptar la refrigeración a las necesidades específicas del equipo en cada momento.",
    "source": "https://es.wikipedia.org/wiki/Refrigeración_por_liquido_(informática)"
  },
  {
    "id": 577,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la principal función de un teclado externo para laptop?",
    "options": [
      "Gestionar la velocidad de los ventiladores",
      "Proporcionar una base de conexión para dispositivos externos",
      "Exclusivamente para la reproducción de video",
      "Facilitar la entrada de datos en una laptop"
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"Facilitar la entrada de datos en una laptop\". El teclado externo para laptop está diseñado principalmente para proporcionar una experiencia de escritura más cómoda y ergonómica que la del teclado integrado, especialmente durante sesiones prolongadas de trabajo.",
    "source": "https://es.wikipedia.org/wiki/Teclado_(informática)"
  },
  {
    "id": 578,
    "category": "Componentes Básicos",
    "question": "¿Qué ventaja ofrece un teclado externo mecánico sobre uno de membrana?",
    "options": [
      "Menos durabilidad y resistencia",
      "Mayor retroalimentación táctil y durabilidad",
      "Exclusivamente para dispositivos Windows",
      "Reducción de la velocidad de transferencia de datos"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Mayor retroalimentación táctil y durabilidad\". Los teclados mecánicos utilizan interruptores individuales para cada tecla, lo que proporciona una retroalimentación táctil más clara y suelen ser más duraderos que los teclados de membrana, que utilizan una lámina de circuito impreso.",
    "source": "https://es.wikipedia.org/wiki/Teclado_mecánico"
  },
  {
    "id": 579,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal de un adaptador de corriente externo?",
    "options": [
      "Gestionar la velocidad de los ventiladores",
      "Proporcionar energía adicional a dispositivos externos",
      "Exclusivamente para la reproducción de video",
      "Ampliar la capacidad de almacenamiento interno"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Proporcionar energía adicional a dispositivos externos\". El adaptador de corriente externo, también conocido como cargador o fuente de alimentación, convierte la corriente alterna de la red eléctrica en corriente continua para alimentar el dispositivo y, en muchos casos, cargar su batería.",
    "source": "https://es.wikipedia.org/wiki/Fuente_de_alimentación"
  },
  {
    "id": 580,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la normativa principal en el espacio de trabajo de un taller de microinformática relacionada con la seguridad eléctrica?",
    "options": [
      "ISO 9001",
      "ISO 14001",
      "ISO 27001",
      "Normativa EN 61010"
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"Normativa EN 61010\". La norma EN 61010 (IEC 61010) es la normativa europea que establece los requisitos de seguridad para equipos eléctricos de medida, control y laboratorio, incluyendo los utilizados en talleres de microinformática.",
    "source": "https://es.wikipedia.org/wiki/IEC_61010"
  },
  {
    "id": 581,
    "category": "Componentes Básicos",
    "question": "¿Qué normativa regula las condiciones de iluminación en un taller de microinformática?",
    "options": [
      "ISO 9001",
      "OHSAS 18001",
      "ISO 14001",
      "Normativa UNE-EN 12464-1"
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"Normativa UNE-EN 12464-1\". La norma UNE-EN 12464-1 establece los requisitos de iluminación de los lugares de trabajo interiores, incluyendo los niveles de iluminancia adecuados para diferentes tareas y entornos, como los talleres de microinformática.",
    "source": "https://es.wikipedia.org/wiki/Iluminación"
  },
  {
    "id": 582,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la normativa clave para garantizar la seguridad en el manejo de equipos eléctricos en un taller de microinformática?",
    "options": [
      "ISO 9001",
      "ISO 27001",
      "OHSAS 18001",
      "Normativa UNE-EN 61010"
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"Normativa UNE-EN 61010\". La norma UNE-EN 61010 es la adaptación española de la norma europea EN 61010, que establece los requisitos de seguridad para equipos eléctricos de medida, control y laboratorio, incluyendo los utilizados en talleres de microinformática.",
    "source": "https://es.wikipedia.org/wiki/IEC_61010"
  },
  {
    "id": 583,
    "category": "Componentes Básicos",
    "question": "¿Qué normativa regula las condiciones ergonómicas en un taller de microinformática?",
    "options": [
      "ISO 9001",
      "ISO 14001",
      "Normativa EN 12464-1",
      "Normativa UNE-EN 3382"
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"Normativa UNE-EN 3382\". La norma UNE-EN 3382 establece los requisitos ergonómicos para los puestos de trabajo con pantallas de visualización, incluyendo aspectos como la altura del escritorio, la silla, la iluminación y otros factores relevantes para talleres de microinformática.",
    "source": "https://es.wikipedia.org/wiki/Ergonomía"
  },
  {
    "id": 584,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la normativa específica para la gestión de residuos electrónicos en un taller de microinformática?",
    "options": [
      "ISO 9001",
      "ISO 14001",
      "ISO 27001",
      "Normativa RAEE"
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"Normativa RAEE\". La normativa RAEE (Residuos de Aparatos Eléctricos y Electrónicos) regula la gestión de los residuos electrónicos, estableciendo las responsabilidades de productores, distribuidores y usuarios en la recogida, tratamiento y reciclaje de estos materiales.",
    "source": "https://es.wikipedia.org/wiki/Residuos_de_Aparatos_Eléctricos_y_Electrónicos"
  },
  {
    "id": 585,
    "category": "Componentes Básicos",
    "question": "¿Qué normativa regula las condiciones de temperatura en un taller de microinformática?",
    "options": [
      "ISO 9001",
      "OHSAS 18001",
      "Normativa EN 12464-1",
      "Normativa UNE-EN 3382"
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"Normativa UNE-EN 3382\". La norma UNE-EN 3382, además de los aspectos ergonómicos, también establece condiciones ambientales adecuadas para los puestos de trabajo, incluyendo rangos de temperatura recomendados para garantizar el confort y la productividad en talleres de microinformática.",
    "source": "https://es.wikipedia.org/wiki/Ergonomía"
  },
  {
    "id": 586,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la normativa clave para la gestión de la calidad en un taller de microinformática?",
    "options": [
      "ISO 14001",
      "OHSAS 18001",
      "ISO 9001",
      "Normativa EN 61010"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"ISO 9001\". La norma ISO 9001 establece los requisitos para un sistema de gestión de la calidad, ayudando a las organizaciones a mejorar su eficiencia, satisfacer a los clientes y cumplir con los requisitos reglamentarios aplicables a talleres de microinformática.",
    "source": "https://es.wikipedia.org/wiki/ISO_9000"
  },
  {
    "id": 587,
    "category": "Componentes Básicos",
    "question": "¿Qué normativa regula las condiciones de ventilación en un taller de microinformática?",
    "options": [
      "ISO 9001",
      "OHSAS 18001",
      "Normativa EN 12464-1",
      "Normativa UNE-EN 3382"
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"Normativa UNE-EN 3382\". La norma UNE-EN 3382 establece los requisitos ergonómicos para los puestos de trabajo, incluyendo condiciones de ventilación adecuadas para garantizar la calidad del aire y el confort de los trabajadores en talleres de microinformática.",
    "source": "https://es.wikipedia.org/wiki/Ergonomía"
  },
  {
    "id": 588,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la normativa que establece los requisitos de seguridad para las instalaciones eléctricas en un taller de microinformática?",
    "options": [
      "ISO 9001",
      "ISO 27001",
      "Normativa UNE 20460",
      "Normativa UNE-EN 50110-1"
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"Normativa UNE-EN 50110-1\". La norma UNE-EN 50110-1 establece los requisitos para la operación de las instalaciones eléctricas, incluyendo aspectos de seguridad que deben cumplirse en talleres de microinformática para prevenir accidentes y garantizar un entorno de trabajo seguro.",
    "source": "https://es.wikipedia.org/wiki/Instalación_eléctrica"
  },
  {
    "id": 589,
    "category": "Componentes Básicos",
    "question": "¿Qué normativa regula las condiciones de ruido en un taller de microinformática?",
    "options": [
      "ISO 9001",
      "ISO 14001",
      "Normativa EN 12464-1",
      "Normativa UNE-EN ISO 11201"
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"Normativa UNE-EN ISO 11201\". La norma UNE-EN ISO 11201 establece los métodos para la determinación de los niveles de presión sonora emitidos por máquinas y equipos, incluyendo los utilizados en talleres de microinformática, con el fin de controlar la exposición al ruido y proteger la salud de los trabajadores.",
    "source": "https://es.wikipedia.org/wiki/Ruido"
  },
  {
    "id": 590,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la normativa clave para la gestión ambiental en un taller de microinformática?",
    "options": [
      "ISO 9001",
      "ISO 27001",
      "ISO 14001",
      "Normativa EN 61010"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"ISO 14001\". La norma ISO 14001 establece los requisitos para un sistema de gestión ambiental, ayudando a las organizaciones a identificar, gestionar, monitorear y controlar sus aspectos ambientales de manera sistemática, incluyendo los talleres de microinformática.",
    "source": "https://es.wikipedia.org/wiki/ISO_14000"
  },
  {
    "id": 591,
    "category": "Componentes Básicos",
    "question": "¿Qué normativa regula las condiciones de almacenamiento de productos químicos en un taller de microinformática?",
    "options": [
      "ISO 9001",
      "ISO 14001",
      "Normativa UNE-EN 14470-1",
      "Normativa EN 61010"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Normativa UNE-EN 14470-1\". La norma UNE-EN 14470-1 establece los requisitos para los armarios de seguridad destinados al almacenamiento de productos inflamables, incluyendo los productos químicos que puedan utilizarse en talleres de microinformática.",
    "source": "https://es.wikipedia.org/wiki/Almacenamiento_de_productos_químicos"
  },
  {
    "id": 592,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la normativa principal para la gestión de la seguridad y salud ocupacional en un taller de microinformática?",
    "options": [
      "ISO 9001",
      "ISO 14001",
      "OHSAS 18001",
      "Normativa EN 61010"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"OHSAS 18001\". La norma OHSAS 18001 (actualmente sustituida por ISO 45001) establece los requisitos para un sistema de gestión de la seguridad y salud en el trabajo, ayudando a las organizaciones a minimizar los riesgos para los empleados en talleres de microinformática.",
    "source": "https://es.wikipedia.org/wiki/OHSAS_18001"
  },
  {
    "id": 593,
    "category": "Componentes Básicos",
    "question": "¿Qué normativa regula las condiciones de seguridad en la manipulación de productos químicos en un taller de microinformática?",
    "options": [
      "ISO 9001",
      "ISO 14001",
      "Normativa UNE-EN 14470-1",
      "Normativa UNE-EN 50110-1"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Normativa UNE-EN 14470-1\". La norma UNE-EN 14470-1 establece los requisitos para el almacenamiento seguro de productos inflamables, incluyendo aspectos relevantes para la manipulación segura de productos químicos en talleres de microinformática.",
    "source": "https://es.wikipedia.org/wiki/Almacenamiento_de_productos_químicos"
  },
  {
    "id": 594,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la normativa clave para la gestión de la seguridad de la información en un taller de microinformática?",
    "options": [
      "ISO 9001",
      "ISO 14001",
      "ISO 27001",
      "Normativa EN 61010"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"ISO 27001\". La norma ISO 27001 establece los requisitos para establecer, implementar, mantener y mejorar un sistema de gestión de la seguridad de la información, incluyendo aspectos relevantes para talleres de microinformática que manejen datos sensibles.",
    "source": "https://es.wikipedia.org/wiki/ISO/IEC_27001"
  },
  {
    "id": 595,
    "category": "Componentes Básicos",
    "question": "¿Qué normativa regula las condiciones de seguridad en la manipulación de equipos de trabajo en un taller de microinformática?",
    "options": [
      "ISO 9001",
      "ISO 14001",
      "OHSAS 18001",
      "Normativa EN 61010"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"OHSAS 18001\". La norma OHSAS 18001 (actualmente sustituida por ISO 45001) establece los requisitos para un sistema de gestión de la seguridad y salud en el trabajo, incluyendo la manipulación segura de equipos en talleres de microinformática.",
    "source": "https://es.wikipedia.org/wiki/OHSAS_18001"
  },
  {
    "id": 596,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la normativa principal para la gestión de la seguridad eléctrica en un taller de microinformática?",
    "options": [
      "ISO 9001",
      "ISO 14001",
      "ISO 27001",
      "Normativa UNE-EN 61010"
    ],
    "correct": 3,
    "explanation": "La respuesta correcta es \"Normativa UNE-EN 61010\". La norma UNE-EN 61010 establece los requisitos de seguridad para equipos eléctricos de medida, control y laboratorio, incluyendo aspectos relevantes para la gestión de la seguridad eléctrica en talleres de microinformática.",
    "source": "https://es.wikipedia.org/wiki/IEC_61010"
  },
  {
    "id": 597,
    "category": "Componentes Básicos",
    "question": "¿Qué normativa regula las condiciones de seguridad en la manipulación de equipos de protección individual en un taller de microinformática?",
    "options": [
      "ISO 9001",
      "ISO 14001",
      "OHSAS 18001",
      "Normativa UNE-EN 343"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"OHSAS 18001\". La norma OHSAS 18001 (actualmente sustituida por ISO 45001) establece los requisitos para un sistema de gestión de la seguridad y salud en el trabajo, incluyendo la utilización adecuada de equipos de protección individual en talleres de microinformática.",
    "source": "https://es.wikipedia.org/wiki/OHSAS_18001"
  },
  {
    "id": 598,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la normativa clave para la gestión de la seguridad en la manipulación de productos químicos en un taller de microinformática?",
    "options": [
      "ISO 9001",
      "ISO 14001",
      "Normativa UNE-EN 14470-1",
      "Normativa EN 61010"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Normativa UNE-EN 14470-1\". La norma UNE-EN 14470-1 establece los requisitos para el almacenamiento seguro de productos inflamables, incluyendo aspectos relevantes para la manipulación segura de productos químicos en talleres de microinformática.",
    "source": "https://es.wikipedia.org/wiki/Almacenamiento_de_productos_químicos"
  },
  {
    "id": 599,
    "category": "Componentes Básicos",
    "question": "¿Qué normativa regula las condiciones de seguridad en la manipulación de productos químicos en un taller de microinformática?",
    "options": [
      "ISO 9001",
      "ISO 14001",
      "Normativa UNE-EN 14470-1",
      "Normativa EN 61010"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Normativa UNE-EN 14470-1\". La norma UNE-EN 14470-1 establece los requisitos para el almacenamiento seguro de productos inflamables, incluyendo aspectos relevantes para la manipulación segura de productos químicos en talleres de microinformática.",
    "source": "https://es.wikipedia.org/wiki/Almacenamiento_de_productos_químicos"
  },
  {
    "id": 600,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la recomendación estándar de luminosidad para un espacio de trabajo en un taller de microinformática según las normativas ergonómicas?",
    "options": [
      "Entre 100 y 200 lux",
      "Menos de 50 lux",
      "Más de 500 lux",
      "Sin restricciones de luminosidad"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Más de 500 lux\". Según las normativas ergonómicas y la UNE-EN 12464-1, para tareas que requieren lectura de documentos pequeños o trabajo detallado, como en un taller de microinformática, se recomienda una iluminancia de 500-750 lux.",
    "source": "https://es.wikipedia.org/wiki/Iluminación"
  },
  {
    "id": 601,
    "category": "Conectores de Video",
    "question": "¿Qué posición de la pantalla del monitor se considera ergonómicamente recomendada para evitar molestias visuales?",
    "options": [
      "A nivel de los ojos o ligeramente debajo",
      "Por encima de la línea de visión",
      "En un ángulo de 45 grados hacia abajo",
      "En un ángulo de 90 grados hacia arriba"
    ],
    "correct": 0,
    "explanation": "\"A nivel de los ojos o ligeramente debajo\" es correcto. Según las directrices ergonómicas, la parte superior de la pantalla del monitor debe estar a nivel de los ojos o ligeramente por debajo, permitiendo una postura natural del cuello y reduciendo la fatiga visual.",
    "source": "https://es.wikipedia.org/wiki/Ergonomía"
  },
  {
    "id": 602,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la altura recomendada para la silla de trabajo en un taller de microinformática?",
    "options": [
      "A nivel del suelo",
      "Ajustada de manera que los pies toquen el suelo y las rodillas formen un ángulo de 90 grados",
      "Más alta que la altura de la mesa",
      "Sin restricciones de altura"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Ajustada de manera que los pies toquen el suelo y las rodillas formen un ángulo de 90 grados\". Según las directrices ergonómicas, la altura de la silla debe permitir que los pies descansen planos en el suelo y las rodillas formen un ángulo de aproximadamente 90 grados para garantizar una postura adecuada.",
    "source": "https://es.wikipedia.org/wiki/Silla_(mueble)"
  },
  {
    "id": 603,
    "category": "Conectores de Video",
    "question": "¿Qué distancia se sugiere entre los ojos y la pantalla del monitor para reducir la fatiga visual?",
    "options": [
      "Menos de 20 centímetros",
      "Más de 1 metro",
      "Entre 50 y 70 centímetros",
      "Sin restricciones de distancia"
    ],
    "correct": 2,
    "explanation": "\"Entre 50 y 70 centímetros\" es correcto. Según las directrices ergonómicas, se recomienda mantener una distancia de aproximadamente un brazo (50-70 cm) entre los ojos y la pantalla del monitor para reducir la fatiga visual y permitir una visión cómoda de todo el contenido.",
    "source": "https://es.wikipedia.org/wiki/Ergonomía"
  },
  {
    "id": 604,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la posición recomendada de los brazos al trabajar en un taller de microinformática?",
    "options": [
      "Estirados completamente",
      "En un ángulo de 180 grados",
      "Formando un ángulo de 90 grados",
      "Sin restricciones de posición"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Formando un ángulo de 90 grados\". Según las directrices ergonómicas, los brazos deben formar un ángulo de aproximadamente 90 grados en los codos al trabajar con el teclado y el ratón, con los hombros relajados y los antebrazos apoyados en la mesa o en los reposabrazos de la silla.",
    "source": "https://es.wikipedia.org/wiki/Ergonomía"
  },
  {
    "id": 605,
    "category": "Componentes Básicos",
    "question": "¿Qué se recomienda para evitar la fatiga visual en un espacio de trabajo con computadora?",
    "options": [
      "Pantallas de baja resolución",
      "Fuentes de luz intensa directa sobre la pantalla",
      "Descansar los ojos mirando al horizonte cada 2 horas",
      "Sin restricciones en las condiciones visuales"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Descansar los ojos mirando al horizonte cada 2 horas\". Según las directrices ergonómicas, se recomienda seguir la regla 20-20-20: cada 20 minutos, descansar la vista mirando algo a 20 pies (aproximadamente 6 metros) durante 20 segundos para reducir la fatiga visual.",
    "source": "https://es.wikipedia.org/wiki/Síndrome_visual_informático"
  },
  {
    "id": 606,
    "category": "Conectores de Placa Base",
    "question": "¿Cuál es la posición ideal del teclado y el ratón para prevenir problemas musculoesqueléticos?",
    "options": [
      "En un nivel inferior al de los codos",
      "A la altura del pecho",
      "A la altura de los hombros",
      "Sin restricciones de posición"
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"En un nivel inferior al de los codos\". Según las directrices ergonómicas, el teclado y el ratón deben colocarse a una altura que permita mantener los hombros relajados y los codos formando un ángulo de aproximadamente 90 grados, con los antebrazos paralelos al suelo.",
    "source": "https://es.wikipedia.org/wiki/Ergonomía"
  },
  {
    "id": 607,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la postura recomendada para evitar molestias en la espalda al estar sentado en una silla durante largos periodos?",
    "options": [
      "Inclinarse hacia adelante",
      "Mantener la espalda recta y apoyada en el respaldo de la silla",
      "Cruzar las piernas",
      "Sin restricciones de postura"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Mantener la espalda recta y apoyada en el respaldo de la silla\". Según las directrices ergonómicas, es importante mantener la espalda recta y bien apoyada en el respaldo de la silla, con las curvas naturales de la columna vertebral alineadas, para evitar molestias y lesiones.",
    "source": "https://es.wikipedia.org/wiki/Ergonomía"
  },
  {
    "id": 608,
    "category": "Componentes Básicos",
    "question": "¿Qué se recomienda para prevenir la fatiga visual en un taller de microinformática?",
    "options": [
      "Monitores de baja resolución",
      "Iluminación intensa directa sobre la pantalla",
      "Tomar descansos cortos cada hora",
      "Sin restricciones en las condiciones visuales"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Tomar descansos cortos cada hora\". Según las directrices ergonómicas, se recomienda tomar descansos cortos y frecuentes para descansar la vista y estirar el cuerpo. La regla 20-20-20 sugiere descansar la vista cada 20 minutos mirando algo a 20 pies durante 20 segundos.",
    "source": "https://es.wikipedia.org/wiki/Síndrome_visual_informático"
  },
  {
    "id": 609,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la posición ergonómicamente correcta para los pies al estar sentado en un espacio de trabajo de microinformática?",
    "options": [
      "Cruzar las piernas",
      "Mantener los pies en el suelo o apoyados en un reposapiés",
      "Colocar los pies sobre la silla",
      "Sin restricciones de posición de los pies"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Mantener los pies en el suelo o apoyados en un reposapiés\". Según las directrices ergonómicas, los pies deben descansar planos en el suelo o sobre un reposapiés para mantener una postura adecuada y reducir la presión en la espalda y las piernas.",
    "source": "https://es.wikipedia.org/wiki/Ergonomía"
  },
  {
    "id": 610,
    "category": "Componentes Básicos",
    "question": "¿Qué se recomienda para reducir la exposición a ruidos en un taller de microinformática?",
    "options": [
      "Trabajar en un entorno completamente silencioso",
      "Utilizar auriculares con cancelación de ruido",
      "Mantener la puerta cerrada para bloquear el ruido exterior",
      "Sin restricciones en la exposición al ruido"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Utilizar auriculares con cancelación de ruido\". Aunque es ideal trabajar en un entorno silencioso, en un taller de microinformática esto puede no ser siempre posible. El uso de auriculares con cancelación de ruido puede ayudar a reducir la exposición a ruidos molestos y mejorar la concentración.",
    "source": "https://es.wikipedia.org/wiki/Protección_auditiva"
  },
  {
    "id": 611,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la temperatura recomendada para un espacio de trabajo en un taller de microinformática?",
    "options": [
      "Menos de 10 grados Celsius",
      "Entre 20 y 22 grados Celsius",
      "Más de 30 grados Celsius",
      "Sin restricciones de temperatura"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Entre 20 y 22 grados Celsius\". Según las directrices ergonómicas y normativas como la UNE-EN 3382, se recomienda mantener una temperatura ambiente entre 20-22°C en los espacios de trabajo para garantizar el confort y la productividad de los trabajadores.",
    "source": "https://es.wikipedia.org/wiki/Confort_térmico"
  },
  {
    "id": 612,
    "category": "Componentes Básicos",
    "question": "¿Qué se recomienda para prevenir la fatiga ocular al trabajar en un taller de microinformática?",
    "options": [
      "Utilizar monitores de tubo de rayos catódicos (CRT)",
      "Ajustar el brillo y contraste de la pantalla",
      "Trabajar en un entorno oscuro",
      "Sin restricciones en las condiciones visuales"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Ajustar el brillo y contraste de la pantalla\". Para prevenir la fatiga ocular, se recomienda ajustar el brillo y contraste de la pantalla a niveles cómodos, evitar reflejos y mantener una distancia adecuada entre los ojos y el monitor.",
    "source": "https://es.wikipedia.org/wiki/Síndrome_visual_informático"
  },
  {
    "id": 613,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la postura adecuada para evitar problemas musculoesqueléticos al trabajar en un taller de microinformática?",
    "options": [
      "Adoptar posturas estáticas durante largos periodos",
      "Variar las posturas y realizar estiramientos cada cierto tiempo",
      "Mantener la misma posición sin moverse",
      "Sin restricciones en la postura"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Variar las posturas y realizar estiramientos cada cierto tiempo\". Según las directrices ergonómicas, es importante variar las posturas y realizar pausas activas con estiramientos regulares para evitar problemas musculoesqueléticos asociados con el trabajo sedentario.",
    "source": "https://es.wikipedia.org/wiki/Ergonomía"
  },
  {
    "id": 614,
    "category": "Componentes Básicos",
    "question": "¿Qué se recomienda para prevenir la fatiga visual al trabajar en un taller de microinformática?",
    "options": [
      "Utilizar fuentes de luz intensa directa sobre la pantalla",
      "Ajustar la distancia entre los ojos y la pantalla",
      "No tomar descansos visuales",
      "Sin restricciones en las condiciones visuales"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Ajustar la distancia entre los ojos y la pantalla\". Para prevenir la fatiga visual, se recomienda mantener una distancia adecuada (aproximadamente un brazo, 50-70 cm) entre los ojos y la pantalla, además de seguir la regla 20-20-20: descansar la vista cada 20 minutos mirando algo a 20 pies durante 20 segundos.",
    "source": "https://es.wikipedia.org/wiki/Síndrome_visual_informático"
  },
  {
    "id": 615,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la importancia de adoptar pausas activas durante la jornada laboral en un taller de microinformática?",
    "options": [
      "Aumentar la exposición a factores de riesgo ergonómicos",
      "Mejorar la concentración y reducir la fatiga física",
      "Incrementar la velocidad de trabajo",
      "Sin impacto en la salud laboral"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Mejorar la concentración y reducir la fatiga física\". Las pausas activas durante la jornada laboral ayudan a mejorar la concentración, reducir la fatiga física y mental, y prevenir problemas musculoesqueléticos asociados con el trabajo sedentario.",
    "source": "https://es.wikipedia.org/wiki/Ergonomía"
  },
  {
    "id": 616,
    "category": "Componentes Básicos",
    "question": "¿Qué medida contribuye a reducir la tensión en el cuello al trabajar en un taller de microinformática?",
    "options": [
      "Mantener la pantalla a una altura inferior a la línea de visión",
      "Inclinarse hacia adelante mientras se trabaja",
      "Limitar el uso de accesorios ergonómicos",
      "Sin importancia en la posición de la pantalla"
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Mantener la pantalla a una altura inferior a la línea de visión\". Para reducir la tensión en el cuello, se recomienda colocar la parte superior de la pantalla a nivel de los ojos o ligeramente por debajo, permitiendo una postura natural del cuello y evitando la inclinación constante hacia arriba o hacia abajo.",
    "source": "https://es.wikipedia.org/wiki/Ergonomía"
  },
  {
    "id": 617,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal de un soporte para documentos en un espacio de trabajo de microinformática?",
    "options": [
      "Aumentar la distancia entre los ojos y la pantalla",
      "Facilitar la lectura de documentos sin forzar el cuello",
      "Limitar el espacio en el escritorio",
      "Sin impacto en la organización del espacio"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Facilitar la lectura de documentos sin forzar el cuello\". Un soporte para documentos permite mantener los documentos a una altura similar a la del monitor, facilitando la lectura sin necesidad de inclinar el cuello constantemente y reduciendo la fatiga visual y muscular.",
    "source": "https://es.wikipedia.org/wiki/Ergonomía"
  },
  {
    "id": 618,
    "category": "Componentes Básicos",
    "question": "¿Cómo se puede mejorar la postura al trabajar con un ordenador portátil en un taller de microinformática?",
    "options": [
      "Utilizarlo directamente sobre las piernas",
      "Conectar un teclado y un ratón externo para ajustar la altura",
      "No es necesario realizar ajustes, ya que los portátiles son ergonómicos",
      "Sin importancia en la ergonomía del portátil"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Conectar un teclado y un ratón externo para ajustar la altura\". Para mejorar la postura al trabajar con un portátil, se recomienda conectar un teclado y un ratón externos y elevar la pantalla a una altura adecuada (a nivel de los ojos o ligeramente por debajo), permitiendo una postura ergonómica.",
    "source": "https://es.wikipedia.org/wiki/Ergonomía"
  },
  {
    "id": 619,
    "category": "Componentes Básicos",
    "question": "¿Qué recomendación es clave para prevenir problemas en la vista al trabajar en un taller de microinformática?",
    "options": [
      "Utilizar gafas de sol mientras se trabaja en la computadora",
      "Ajustar el brillo y contraste del monitor",
      "No realizar pausas visuales durante la jornada laboral",
      "Sin restricciones en el uso de la computadora"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Ajustar el brillo y contraste del monitor\". Para prevenir problemas en la vista, es fundamental ajustar el brillo y contraste del monitor a niveles cómodos, evitar reflejos, mantener una distancia adecuada y realizar pausas visuales regulares siguiendo la regla 20-20-20.",
    "source": "https://es.wikipedia.org/wiki/Síndrome_visual_informático"
  },
  {
    "id": 620,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la importancia de tener un espacio de trabajo organizado en un taller de microinformática?",
    "options": [
      "Incrementar la eficiencia en el trabajo",
      "Favorecer la acumulación de objetos en el escritorio",
      "Reducir la necesidad de pausas activas",
      "Sin relación con la productividad laboral"
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Incrementar la eficiencia en el trabajo\". Un espacio de trabajo organizado facilita el acceso a herramientas y materiales, reduce el tiempo de búsqueda, minimiza distracciones y contribuye a incrementar la eficiencia y la productividad laboral.",
    "source": "https://es.wikipedia.org/wiki/Ergonomía"
  },
  {
    "id": 621,
    "category": "Componentes Básicos",
    "question": "¿Por qué es esencial ajustar la altura de la silla y el escritorio en un taller de microinformática?",
    "options": [
      "Para limitar la movilidad y promover la rigidez",
      "Para favorecer la adopción de posturas estáticas",
      "Para adaptarse a la altura de la persona y prevenir problemas musculoesqueléticos",
      "Sin impacto en la salud laboral"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Para adaptarse a la altura de la persona y prevenir problemas musculoesqueléticos\". Ajustar la altura de la silla y el escritorio permite adaptar el puesto de trabajo a las características físicas de cada persona, promoviendo una postura adecuada y previniendo problemas musculoesqueléticos asociados con malas posturas.",
    "source": "https://es.wikipedia.org/wiki/Ergonomía"
  },
  {
    "id": 622,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función de un reposapiés en un espacio de trabajo de microinformática?",
    "options": [
      "Reducir la altura de la silla",
      "Favorecer la adopción de posturas incómodas",
      "Proporcionar apoyo a los pies y mejorar la postura",
      "Sin importancia en la ergonomía de la silla"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Proporcionar apoyo a los pies y mejorar la postura\". Un reposapiés permite mantener los pies apoyados cuando la altura de la silla no permite que lleguen al suelo, ayudando a mantener una postura adecuada, reducir la presión en la espalda y mejorar la circulación sanguínea en las piernas.",
    "source": "https://es.wikipedia.org/wiki/Ergonomía"
  },
  {
    "id": 623,
    "category": "Componentes Básicos",
    "question": "¿Cómo afecta el uso prolongado del ratón sin descansos en un taller de microinformática?",
    "options": [
      "Mejora la salud de la muñeca",
      "Incrementa el riesgo de lesiones por esfuerzo repetitivo",
      "No tiene impacto en la salud laboral",
      "Sin importancia en la utilización del ratón"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Incrementa el riesgo de lesiones por esfuerzo repetitivo\". El uso prolongado del ratón sin descansos puede incrementar el riesgo de desarrollar lesiones por esfuerzo repetitivo, como el síndrome del túnel carpiano o tendinitis, debido a los movimientos repetitivos y las posturas forzadas de la muñeca y la mano.",
    "source": "https://es.wikipedia.org/wiki/Trastornos_musculoesqueléticos"
  },
  {
    "id": 624,
    "category": "Conectores de Video",
    "question": "¿Qué impacto puede tener la falta de ajuste de la altura del monitor en un taller de microinformática?",
    "options": [
      "Mejora la postura y previene molestias físicas",
      "Aumenta el riesgo de fatiga visual y problemas cervicales",
      "No afecta la salud laboral",
      "Sin importancia en la ergonomía del monitor"
    ],
    "correct": 1,
    "explanation": "\"Aumenta el riesgo de fatiga visual y problemas cervicales\" es correcto. La falta de ajuste adecuado de la altura del monitor puede provocar posturas forzadas del cuello y la espalda, así como fatiga visual, debido a que la pantalla está demasiado alta o demasiado baja respecto a la línea de visión.",
    "source": "https://es.wikipedia.org/wiki/Ergonomía"
  },
  {
    "id": 625,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la importancia de mantener los cables organizados en un espacio de trabajo de microinformática?",
    "options": [
      "Mejorar la movilidad y promover la rigidez",
      "Reducir la eficiencia en el trabajo",
      "Prevenir riesgos de tropiezos y facilitar el mantenimiento",
      "Sin relación con la seguridad laboral"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Prevenir riesgos de tropiezos y facilitar el mantenimiento\". Mantener los cables organizados previene riesgos de tropiezos y caídas, facilita la identificación y conexión de dispositivos, y simplifica las tareas de mantenimiento y limpieza del espacio de trabajo.",
    "source": "https://es.wikipedia.org/wiki/Ergonomía"
  },
  {
    "id": 626,
    "category": "Componentes Básicos",
    "question": "¿Por qué es crucial tener una silla con respaldo ajustable en un taller de microinformática?",
    "options": [
      "Para limitar la movilidad y favorecer la rigidez",
      "Para adaptarse a la altura de la persona y mejorar la postura",
      "No impacta en la salud laboral",
      "Sin importancia en la ergonomía de la silla"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Para adaptarse a la altura de la persona y mejorar la postura\". Una silla con respaldo ajustable permite adaptar el apoyo lumbar a las características físicas de cada persona, promoviendo una postura adecuada que reduce la tensión en la espalda y previene problemas musculoesqueléticos.",
    "source": "https://es.wikipedia.org/wiki/Silla_(mueble)"
  },
  {
    "id": 627,
    "category": "Componentes Básicos",
    "question": "¿Qué impacto puede tener el uso de una pantalla de baja resolución en la fatiga visual en un taller de microinformática?",
    "options": [
      "Mejora la comodidad visual",
      "Aumenta el riesgo de fatiga ocular y molestias visuales",
      "No afecta la salud laboral",
      "Sin importancia en la calidad visual del monitor"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Aumenta el riesgo de fatiga ocular y molestias visuales\". El uso de una pantalla de baja resolución puede forzar a los ojos a esforzarse más para distinguir detalles, aumentando el riesgo de fatiga ocular, dolores de cabeza y molestias visuales, especialmente durante períodos prolongados de trabajo.",
    "source": "https://es.wikipedia.org/wiki/Síndrome_visual_informático"
  },
  {
    "id": 628,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la importancia de realizar ajustes ergonómicos en el espacio de trabajo de un taller de microinformática?",
    "options": [
      "Mejorar la salud laboral y prevenir problemas musculoesqueléticos",
      "Reducir la eficiencia en el trabajo",
      "No tiene impacto en la productividad",
      "Sin relación con la ergonomía del espacio de trabajo"
    ],
    "correct": 0,
    "explanation": "La respuesta correcta es \"Mejorar la salud laboral y prevenir problemas musculoesqueléticos\". Realizar ajustes ergonómicos en el espacio de trabajo mejora la salud laboral, previene problemas musculoesqueléticos, aumenta el confort y la satisfacción de los trabajadores, y puede incrementar la productividad.",
    "source": "https://es.wikipedia.org/wiki/Ergonomía"
  },
  {
    "id": 629,
    "category": "Componentes Básicos",
    "question": "¿Por qué es esencial utilizar iluminación adecuada en un taller de microinformática?",
    "options": [
      "Para trabajar en un entorno completamente oscuro",
      "Para favorecer la fatiga visual y prevenir problemas en la vista",
      "Para mejorar la visibilidad y reducir la fatiga ocular",
      "Sin importancia en las condiciones de iluminación del espacio de trabajo"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Para mejorar la visibilidad y reducir la fatiga ocular\". Una iluminación adecuada mejora la visibilidad, reduce la fatiga ocular, previene errores y accidentes, y contribuye a crear un entorno de trabajo más confortable y productivo en un taller de microinformática.",
    "source": "https://es.wikipedia.org/wiki/Iluminación"
  },
  {
    "id": 630,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la importancia de verificar la integridad de los componentes antes de iniciar el montaje de un equipo informático?",
    "options": [
      "No es necesario realizar verificaciones previas",
      "Asegurar que todos los componentes estén en buen estado y sin daños",
      "Acelerar el proceso de montaje sin realizar comprobaciones",
      "Sin importancia en la calidad del montaje"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Asegurar que todos los componentes estén en buen estado y sin daños\". Verificar la integridad de los componentes antes del montaje permite identificar posibles daños o defectos, evitando problemas durante la instalación y garantizando el correcto funcionamiento del equipo.",
    "source": "https://es.wikipedia.org/wiki/Ensamblaje_de_computadoras"
  },
  {
    "id": 631,
    "category": "Componentes Básicos",
    "question": "¿Por qué es crucial comprobar la compatibilidad de los componentes durante el proceso de montaje?",
    "options": [
      "Para ignorar las posibles incompatibilidades y acelerar el proceso",
      "Garantizar que todos los componentes se ajusten adecuadamente",
      "No afecta el rendimiento del equipo",
      "Sin importancia en la calidad del montaje"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Garantizar que todos los componentes se ajusten adecuadamente\". Comprobar la compatibilidad de los componentes es fundamental para asegurar que todos los elementos del sistema funcionen correctamente juntos, evitando problemas de rendimiento, inestabilidad o fallos en el equipo.",
    "source": "https://es.wikipedia.org/wiki/Ensamblaje_de_computadoras"
  },
  {
    "id": 632,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la recomendación clave al manipular componentes electrónicos durante el montaje de un equipo informático?",
    "options": [
      "No es necesario tomar precauciones adicionales",
      "Utilizar una pulsera antiestática y trabajar en una superficie conductora",
      "Ignorar las medidas de seguridad",
      "Sin importancia en la manipulación de componentes"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Utilizar una pulsera antiestática y trabajar en una superficie conductora\". Al manipular componentes electrónicos, es fundamental utilizar una pulsera antiestática y trabajar sobre una superficie conductora para evitar la descarga de electricidad estática, que puede dañar los componentes sensibles.",
    "source": "https://es.wikipedia.org/wiki/Electricidad_estática"
  },
  {
    "id": 633,
    "category": "Componentes Básicos",
    "question": "¿Por qué es esencial seguir las instrucciones del fabricante al montar un equipo informático?",
    "options": [
      "Para ignorar las recomendaciones y acelerar el proceso de montaje",
      "Asegurar que todos los componentes se instalen correctamente",
      "No afecta la funcionalidad del equipo",
      "Sin importancia en la calidad del montaje"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Asegurar que todos los componentes se instalen correctamente\". Seguir las instrucciones del fabricante es esencial para asegurar que todos los componentes se instalen correctamente, evitando daños, garantizando el funcionamiento adecuado del equipo y manteniendo la validez de la garantía.",
    "source": "https://es.wikipedia.org/wiki/Ensamblaje_de_computadoras"
  },
  {
    "id": 634,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la importancia de verificar las conexiones de los cables durante el montaje de un equipo informático?",
    "options": [
      "No es necesario comprobar las conexiones",
      "Evitar posibles problemas de conexión y asegurar un funcionamiento adecuado",
      "Agilizar el proceso de montaje sin verificar las conexiones",
      "Sin importancia en la calidad del montaje"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Evitar posibles problemas de conexión y asegurar un funcionamiento adecuado\". Verificar las conexiones de los cables durante el montaje es fundamental para evitar problemas de conexión, asegurar el correcto funcionamiento de todos los componentes y prevenir posibles daños por conexiones incorrectas.",
    "source": "https://es.wikipedia.org/wiki/Ensamblaje_de_computadoras"
  },
  {
    "id": 635,
    "category": "Componentes Básicos",
    "question": "¿Por qué se debe realizar una prueba de encendido después de ensamblar un equipo informático?",
    "options": [
      "Para omitir la prueba y acelerar la finalización del montaje",
      "Confirmar que todos los componentes funcionan correctamente",
      "No afecta la operatividad del equipo",
      "Sin importancia en la calidad del montaje"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Confirmar que todos los componentes funcionan correctamente\". Realizar una prueba de encendido después de ensamblar un equipo permite verificar que todos los componentes funcionan correctamente, identificar posibles problemas de conexión o configuración y asegurar que el sistema operativo puede instalarse sin inconvenientes.",
    "source": "https://es.wikipedia.org/wiki/Ensamblaje_de_computadoras"
  },
  {
    "id": 636,
    "category": "Tipos de Memoria",
    "question": "¿Cuál es la recomendación clave al manejar herramientas durante el montaje de un equipo informático?",
    "options": [
      "Utilizar cualquier herramienta disponible",
      "Utilizar herramientas adecuadas y seguir las normas de seguridad",
      "Ignorar las medidas de seguridad en la manipulación de herramientas",
      "Sin importancia en la manipulación de herramientas durante el montaje"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Utilizar herramientas adecuadas y seguir las normas de seguridad\". Durante el montaje de un equipo informático, es fundamental utilizar las herramientas adecuadas para cada tarea y seguir las normas de seguridad para evitar daños a los componentes y lesiones personales.",
    "source": "https://es.wikipedia.org/wiki/Ensamblaje_de_computadoras"
  },
  {
    "id": 637,
    "category": "Componentes Básicos",
    "question": "¿Por qué es importante verificar la configuración de la BIOS después de montar un equipo informático?",
    "options": [
      "Para omitir la configuración y acelerar la finalización del montaje",
      "Asegurar que la configuración sea la adecuada para el hardware instalado",
      "No afecta el rendimiento del equipo",
      "Sin importancia en la calidad del montaje"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Asegurar que la configuración sea la adecuada para el hardware instalado\". Verificar la configuración de la BIOS después de montar un equipo es importante para asegurar que todos los componentes son reconocidos correctamente y que la configuración del sistema es la adecuada para el hardware instalado, optimizando el rendimiento y la estabilidad.",
    "source": "https://es.wikipedia.org/wiki/BIOS"
  },
  {
    "id": 638,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la importancia de mantener un área de trabajo limpia durante el montaje de un equipo informático?",
    "options": [
      "Descuidar la limpieza para ahorrar tiempo",
      "Evitar la acumulación de polvo y garantizar un entorno de trabajo seguro",
      "No afecta la calidad del montaje",
      "Sin importancia en el proceso de montaje"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Evitar la acumulación de polvo y garantizar un entorno de trabajo seguro\". Mantener un área de trabajo limpia durante el montaje de un equipo informático evita la acumulación de polvo que podría afectar los componentes, reduce el riesgo de perder piezas pequeñas y garantiza un entorno de trabajo seguro y organizado.",
    "source": "https://es.wikipedia.org/wiki/Ensamblaje_de_computadoras"
  },
  {
    "id": 639,
    "category": "Componentes Básicos",
    "question": "¿Por qué es necesario realizar pruebas de rendimiento después del montaje de un equipo informático?",
    "options": [
      "Para ignorar las pruebas y acelerar la finalización del montaje",
      "Confirmar que el equipo funciona conforme a las expectativas",
      "No afecta el rendimiento del equipo",
      "Sin importancia en la calidad del montaje"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Confirmar que el equipo funciona conforme a las expectativas\". Realizar pruebas de rendimiento después del montaje permite confirmar que el equipo funciona conforme a las expectativas, identificar posibles cuellos de botella o problemas de estabilidad y asegurar que todos los componentes trabajan en conjunto de manera óptima.",
    "source": "https://es.wikipedia.org/wiki/Ensamblaje_de_computadoras"
  },
  {
    "id": 640,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la recomendación clave al instalar el sistema operativo en un equipo recién montado?",
    "options": [
      "No es necesario instalar un sistema operativo",
      "Utilizar una versión pirata del sistema operativo",
      "Instalar un sistema operativo auténtico y actualizar los controladores",
      "Sin importancia en la instalación del sistema operativo"
    ],
    "correct": 2,
    "explanation": "La respuesta correcta es \"Instalar un sistema operativo auténtico y actualizar los controladores\". Se recomienda instalar un sistema operativo auténtico y mantenerlo actualizado, así como instalar los controladores más recientes para todos los componentes, para asegurar el correcto funcionamiento, la estabilidad y la seguridad del equipo.",
    "source": "https://es.wikipedia.org/wiki/Sistema_operativo"
  },
  {
    "id": 641,
    "category": "Componentes Básicos",
    "question": "¿Por qué es esencial asegurar una buena gestión del cableado durante el montaje de un equipo informático?",
    "options": [
      "Descuidar la gestión del cableado para ahorrar tiempo",
      "Evitar posibles problemas de conexión y mejorar la refrigeración",
      "No afecta la calidad del montaje",
      "Sin importancia en el proceso de montaje"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Evitar posibles problemas de conexión y mejorar la refrigeración\". Una buena gestión del cableado durante el montaje de un equipo informático evita posibles problemas de conexión, mejora el flujo de aire dentro del caso para una mejor refrigeración, facilita el mantenimiento y mejora la estética del equipo.",
    "source": "https://es.wikipedia.org/wiki/Ensamblaje_de_computadoras"
  },
  {
    "id": 642,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la importancia de realizar copias de seguridad antes de instalar el sistema operativo en un equipo recién montado?",
    "options": [
      "No es necesario realizar copias de seguridad",
      "Prevenir la pérdida de datos en caso de problemas durante la instalación",
      "No afecta la instalación del sistema operativo",
      "Sin importancia en la calidad del montaje"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Prevenir la pérdida de datos en caso de problemas durante la instalación\". Aunque en un equipo recién montado no debería haber datos importantes, si se están reutilizando componentes de almacenamiento, es recomendable realizar copias de seguridad antes de instalar el sistema operativo para prevenir la pérdida de datos en caso de problemas durante la instalación.",
    "source": "https://es.wikipedia.org/wiki/Copia_de_seguridad"
  },
  {
    "id": 643,
    "category": "Componentes Básicos",
    "question": "¿Por qué se debe evitar trabajar en un entorno con electricidad estática durante el montaje de un equipo informático?",
    "options": [
      "La electricidad estática no afecta los componentes electrónicos",
      "Evitar posibles daños en los componentes sensibles a la electricidad estática",
      "No afecta la calidad del montaje",
      "Sin importancia en la manipulación de componentes durante el montaje"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Evitar posibles daños en los componentes sensibles a la electricidad estática\". La electricidad estática puede dañar permanentemente los componentes electrónicos sensibles, como la CPU, la RAM o la placa base. Por ello, es fundamental tomar medidas como utilizar una pulsera antiestática y trabajar sobre superficies conductoras.",
    "source": "https://es.wikipedia.org/wiki/Electricidad_estática"
  },
  {
    "id": 644,
    "category": "Componentes Básicos",
    "question": "¿Cuál es el primer paso esencial al comenzar el montaje de un sistema informático?",
    "options": [
      "Conectar todos los cables de alimentación",
      "Verificar la integridad de los componentes",
      "Encender el equipo sin realizar comprobaciones",
      "Sin importancia en el inicio del montaje"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Verificar la integridad de los componentes\". El primer paso esencial al comenzar el montaje de un sistema informático es verificar la integridad de todos los componentes, asegurándose de que no presenten daños visibles y que se hayan recibido todos los elementos necesarios para el ensamblaje.",
    "source": "https://es.wikipedia.org/wiki/Ensamblaje_de_computadoras"
  },
  {
    "id": 645,
    "category": "Fuentes de Alimentación",
    "question": "¿Por qué es crucial asegurar que la fuente de alimentación esté apagada antes de iniciar el montaje?",
    "options": [
      "No es necesario apagar la fuente de alimentación",
      "Prevenir posibles descargas eléctricas durante el manejo de componentes",
      "Agilizar el proceso de montaje sin apagar la fuente de alimentación",
      "Sin importancia en el encendido del equipo"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Prevenir posibles descargas eléctricas durante el manejo de componentes\". Es crucial asegurar que la fuente de alimentación esté completamente apagada y desconectada de la corriente antes de iniciar el montaje para prevenir posibles descargas eléctricas que podrían dañar los componentes o causar lesiones personales.",
    "source": "https://es.wikipedia.org/wiki/Fuente_de_alimentación"
  },
  {
    "id": 646,
    "category": "Chipsets y CPU",
    "question": "¿Cuál es la importancia de instalar la CPU correctamente durante el montaje de un sistema informático?",
    "options": [
      "No afecta el rendimiento del equipo",
      "Asegurar el funcionamiento adecuado y evitar daños a la CPU",
      "Omitir la instalación de la CPU para acelerar el montaje",
      "Sin importancia en el montaje del sistema"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Asegurar el funcionamiento adecuado y evitar daños a la CPU\". Instalar la CPU correctamente es fundamental para asegurar el funcionamiento adecuado del sistema y evitar daños a este componente crítico. Una instalación incorrecta puede provocar mal contacto, sobrecalentamiento o daños permanentes en el procesador.",
    "source": "https://es.wikipedia.org/wiki/Microprocesador"
  },
  {
    "id": 647,
    "category": "Almacenamiento",
    "question": "¿Cuál es la precaución principal al instalar módulos de memoria RAM en una placa base?",
    "options": [
      "No es necesario tomar precauciones especiales",
      "Alinear correctamente las muescas y aplicar presión uniforme sin forzar",
      "Instalar los módulos en cualquier ranura sin importar el orden",
      "Sin importancia en la instalación de la memoria RAM"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Alinear correctamente las muescas y aplicar presión uniforme sin forzar\". Al instalar módulos de memoria RAM, es fundamental alinear correctamente las muescas del módulo con las de la ranura y aplicar presión uniforme en los extremos hasta que los clips de sujeción se cierren por sí solos, evitando forzar para no dañar ni el módulo ni la placa base.",
    "source": "https://es.wikipedia.org/wiki/Memoria_de_acceso_aleatorio"
  },
  {
    "id": 648,
    "category": "Placas Base",
    "question": "¿Por qué es importante aplicar pasta térmica al instalar un disipador en la CPU?",
    "options": [
      "No es necesario aplicar pasta térmica",
      "Mejorar la transferencia de calor entre la CPU y el disipador",
      "Reducir el rendimiento del procesador",
      "Sin importancia en la refrigeración de la CPU"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Mejorar la transferencia de calor entre la CPU y el disipador\". La pasta térmica rellena las microscópicas imperfecciones entre la superficie de la CPU y la base del disipador, mejorando la transferencia de calor y ayudando a mantener el procesador a una temperatura adecuada para un funcionamiento óptimo.",
    "source": "https://es.wikipedia.org/wiki/Pasta_térmica"
  },
  {
    "id": 649,
    "category": "Almacenamiento",
    "question": "¿Cuál es la recomendación al instalar unidades de almacenamiento SATA en un equipo informático?",
    "options": [
      "No es necesario conectar los cables correctamente",
      "Asegurar que los cables de datos y alimentación estén bien conectados",
      "Utilizar cables IDE en lugar de SATA",
      "Sin importancia en la instalación de unidades de almacenamiento"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Asegurar que los cables de datos y alimentación estén bien conectados\". Al instalar unidades de almacenamiento SATA, es fundamental asegurar que tanto el cable de datos como el de alimentación estén bien conectados y encajen correctamente para garantizar un funcionamiento adecuado y evitar problemas de detección o rendimiento.",
    "source": "https://es.wikipedia.org/wiki/Serial_ATA"
  },
  {
    "id": 650,
    "category": "Tarjetas Gráficas",
    "question": "¿Por qué es importante conectar la alimentación adicional a una tarjeta gráfica de alto rendimiento?",
    "options": [
      "No es necesario conectar alimentación adicional",
      "Garantizar que la tarjeta reciba suficiente energía para funcionar correctamente",
      "Reducir el rendimiento de la tarjeta gráfica",
      "Sin importancia en el funcionamiento de la tarjeta gráfica"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Garantizar que la tarjeta reciba suficiente energía para funcionar correctamente\". Las tarjetas gráficas de alto rendimiento requieren alimentación adicional más allá de la proporcionada por el slot PCIe para funcionar correctamente. Conectar estos cables de alimentación es fundamental para garantizar un rendimiento óptimo y evitar problemas de estabilidad.",
    "source": "https://es.wikipedia.org/wiki/Tarjeta_gráfica"
  },
  {
    "id": 651,
    "category": "Cajas y Chasis",
    "question": "¿Cuál es la función de los espaciadores (standoffs) al instalar una placa base en el chasis?",
    "options": [
      "No tienen función alguna",
      "Elevar la placa base para evitar contactos eléctricos con el chasis",
      "Reducir la estabilidad de la placa base",
      "Sin importancia en la instalación de la placa base"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Elevar la placa base para evitar contactos eléctricos con el chasis\". Los espaciadores o standoffs elevan la placa base del chasis, evitando contactos eléctricos que podrían causar cortocircuitos y daños. Además, proporcionan una base estable y segura para fijar correctamente la placa base.",
    "source": "https://es.wikipedia.org/wiki/Placa_base"
  },
  {
    "id": 652,
    "category": "Fuentes de Alimentación",
    "question": "¿Por qué es importante conectar todos los cables de alimentación necesarios durante el montaje?",
    "options": [
      "No es necesario conectar todos los cables",
      "Asegurar que todos los componentes reciban la energía necesaria para funcionar",
      "Reducir el consumo energético del equipo",
      "Sin importancia en el funcionamiento del equipo"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Asegurar que todos los componentes reciban la energía necesaria para funcionar\". Conectar todos los cables de alimentación necesarios durante el montaje es fundamental para asegurar que todos los componentes reciban la energía adecuada para funcionar correctamente, evitando problemas de inestabilidad, rendimiento o fallos en el sistema.",
    "source": "https://es.wikipedia.org/wiki/Fuente_de_alimentación"
  },
  {
    "id": 653,
    "category": "Refrigeración",
    "question": "¿Cuál es la recomendación al instalar ventiladores adicionales en el chasis?",
    "options": [
      "No es necesario instalar ventiladores adicionales",
      "Crear un flujo de aire adecuado (entrada por delante/salida por detrás/arriba)",
      "Instalar todos los ventiladores como extractores de aire",
      "Sin importancia en la refrigeración del sistema"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Crear un flujo de aire adecuado (entrada por delante/salida por detrás/arriba)\". Al instalar ventiladores adicionales en el chasis, es importante crear un flujo de aire adecuado, típicamente con ventiladores de entrada en la parte delantera e inferior y ventiladores de salida en la parte trasera y superior, para garantizar una refrigeración eficiente de todos los componentes.",
    "source": "https://es.wikipedia.org/wiki/Refrigeración_por_liquido_(informática)"
  },
  {
    "id": 654,
    "category": "Almacenamiento",
    "question": "¿Por qué es importante configurar correctamente las unidades de almacenamiento en la BIOS?",
    "options": [
      "No es necesario configurar las unidades en la BIOS",
      "Asegurar que el sistema reconozca correctamente las unidades de almacenamiento",
      "Reducir la capacidad de almacenamiento",
      "Sin importancia en el funcionamiento del sistema"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Asegurar que el sistema reconozca correctamente las unidades de almacenamiento\". Configurar correctamente las unidades de almacenamiento en la BIOS es fundamental para asegurar que el sistema reconozca adecuadamente todos los dispositivos de almacenamiento, permitiendo la instalación del sistema operativo y el acceso correcto a los datos.",
    "source": "https://es.wikipedia.org/wiki/BIOS"
  },
  {
    "id": 655,
    "category": "Software",
    "question": "¿Cuál es la importancia de instalar los controladores actualizados después del montaje?",
    "options": [
      "No es necesario instalar controladores actualizados",
      "Asegurar el correcto funcionamiento y rendimiento de todos los componentes",
      "Reducir la compatibilidad del sistema",
      "Sin importancia en el funcionamiento del equipo"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Asegurar el correcto funcionamiento y rendimiento de todos los componentes\". Instalar los controladores actualizados después del montaje es fundamental para asegurar el correcto funcionamiento y rendimiento óptimo de todos los componentes, ya que estos programas permiten que el sistema operativo se comunique adecuadamente con el hardware.",
    "source": "https://es.wikipedia.org/wiki/Controlador_de_dispositivo"
  },
  {
    "id": 656,
    "category": "Software",
    "question": "¿Por qué es importante realizar actualizaciones del sistema operativo después del montaje?",
    "options": [
      "No es necesario actualizar el sistema operativo",
      "Corregir vulnerabilidades de seguridad y mejorar el funcionamiento del sistema",
      "Reducir el rendimiento del equipo",
      "Sin importancia en la seguridad del sistema"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Corregir vulnerabilidades de seguridad y mejorar el funcionamiento del sistema\". Realizar actualizaciones del sistema operativo después del montaje es fundamental para corregir vulnerabilidades de seguridad, mejorar el funcionamiento del sistema, añadir nuevas funcionalidades y asegurar la compatibilidad con los últimos software y hardware.",
    "source": "https://es.wikipedia.org/wiki/Actualización_de_software"
  },
  {
    "id": 657,
    "category": "Software",
    "question": "¿Cuál es la recomendación al instalar software adicional en un equipo recién montado?",
    "options": [
      "Instalar cualquier software sin verificar su compatibilidad",
      "Instalar solo software necesario y de fuentes confiables",
      "No instalar software adicional para mantener el sistema limpio",
      "Sin importancia en el funcionamiento del equipo"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Instalar solo software necesario y de fuentes confiables\". Al instalar software adicional en un equipo recién montado, se recomienda instalar solo el software necesario y asegurarse de que provenga de fuentes confiables para evitar problemas de rendimiento, inestabilidad o seguridad en el sistema.",
    "source": "https://es.wikipedia.org/wiki/Software"
  },
  {
    "id": 658,
    "category": "Redes",
    "question": "¿Por qué es importante configurar correctamente la conexión de red después del montaje?",
    "options": [
      "No es necesario configurar la conexión de red",
      "Asegurar el acceso a internet y recursos de red",
      "Reducir la velocidad de conexión",
      "Sin importancia en la conectividad del equipo"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Asegurar el acceso a internet y recursos de red\". Configurar correctamente la conexión de red después del montaje es fundamental para asegurar el acceso a internet y otros recursos de red, permitiendo la descarga de actualizaciones, el acceso a servicios en línea y la comunicación con otros dispositivos.",
    "source": "https://es.wikipedia.org/wiki/Red_de_computadoras"
  },
  {
    "id": 659,
    "category": "Seguridad",
    "question": "¿Cuál es la recomendación principal para proteger un equipo recién montado?",
    "options": [
      "No es necesario proteger el equipo",
      "Instalar software antivirus y configurar un firewall",
      "Compartir todos los archivos y carpetas sin restricciones",
      "Sin importancia en la seguridad del sistema"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Instalar software antivirus y configurar un firewall\". Para proteger un equipo recién montado, es fundamental instalar software antivirus actualizado y configurar adecuadamente el firewall para proteger el sistema contra malware, ataques y accesos no autorizados, asegurando la integridad y confidencialidad de los datos.",
    "source": "https://es.wikipedia.org/wiki/Software_antivirus"
  },
  {
    "id": 660,
    "category": "Mantenimiento",
    "question": "¿Por qué es importante realizar copias de seguridad periódicas en un equipo recién montado?",
    "options": [
      "No es necesario realizar copias de seguridad",
      "Prevenir la pérdida de datos ante fallos del sistema",
      "Reducir el rendimiento del equipo",
      "Sin importancia en la protección de datos"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Prevenir la pérdida de datos ante fallos del sistema\". Realizar copias de seguridad periódicas en un equipo recién montado es fundamental para prevenir la pérdida de datos importantes ante fallos del sistema, ataques de malware, errores humanos o desastres naturales, permitiendo recuperar la información en caso de incidentes.",
    "source": "https://es.wikipedia.org/wiki/Copia_de_seguridad"
  },
  {
    "id": 661,
    "category": "Mantenimiento",
    "question": "¿Cuál es la recomendación para mantener limpio un equipo informático después del montaje?",
    "options": [
      "No es necesario limpiar el equipo",
      "Realizar limpieza periódica de polvo y suciedad",
      "Utilizar productos de limpieza agresivos",
      "Sin importancia en el funcionamiento del equipo"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Realizar limpieza periódica de polvo y suciedad\". Mantener limpio un equipo informático después del montaje es fundamental para asegurar su correcto funcionamiento y prolongar su vida útil. Se recomienda realizar limpieza periódica de polvo y suciedad utilizando herramientas adecuadas y productos de limpieza suaves.",
    "source": "https://es.wikipedia.org/wiki/Mantenimiento_de_computadoras"
  },
  {
    "id": 662,
    "category": "Mantenimiento",
    "question": "¿Por qué es importante monitorizar la temperatura de los componentes después del montaje?",
    "options": [
      "No es necesario monitorizar la temperatura",
      "Detectar posibles problemas de refrigeración y evitar sobrecalentamiento",
      "Aumentar la temperatura para mejorar el rendimiento",
      "Sin importancia en el funcionamiento del equipo"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Detectar posibles problemas de refrigeración y evitar sobrecalentamiento\". Monitorizar la temperatura de los componentes después del montaje es importante para detectar posibles problemas de refrigeración y evitar el sobrecalentamiento, que podría reducir el rendimiento, causar inestabilidad o dañar permanentemente los componentes.",
    "source": "https://es.wikipedia.org/wiki/Temperatura_de_funcionamiento_de_un_microprocesador"
  },
  {
    "id": 663,
    "category": "Mantenimiento",
    "question": "¿Cuál es la recomendación al realizar actualizaciones de hardware en un equipo montado?",
    "options": [
      "No es necesario realizar actualizaciones de hardware",
      "Verificar la compatibilidad y seguir los procedimientos adecuados",
      "Realizar actualizaciones sin verificar la compatibilidad",
      "Sin importancia en el rendimiento del equipo"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Verificar la compatibilidad y seguir los procedimientos adecuados\". Al realizar actualizaciones de hardware en un equipo montado, es fundamental verificar la compatibilidad de los nuevos componentes con los existentes y seguir los procedimientos adecuados de instalación para asegurar un funcionamiento correcto y evitar daños.",
    "source": "https://es.wikipedia.org/wiki/Actualización_de_hardware"
  },
  {
    "id": 664,
    "category": "Diagnóstico",
    "question": "¿Por qué es importante realizar pruebas de estrés después del montaje de un equipo?",
    "options": [
      "No es necesario realizar pruebas de estrés",
      "Verificar la estabilidad del sistema bajo condiciones de alto rendimiento",
      "Reducir el rendimiento del equipo",
      "Sin importancia en el funcionamiento del sistema"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Verificar la estabilidad del sistema bajo condiciones de alto rendimiento\". Realizar pruebas de estrés después del montaje de un equipo es importante para verificar la estabilidad del sistema bajo condiciones de alto rendimiento, identificar posibles problemas de sobrecalentamiento o inestabilidad y asegurar que todos los componentes funcionan correctamente juntos.",
    "source": "https://es.wikipedia.org/wiki/Prueba_de_esfuerzo_(informática)"
  },
  {
    "id": 665,
    "category": "Diagnóstico",
    "question": "¿Cuál es la recomendación al diagnosticar problemas de arranque en un equipo recién montado?",
    "options": [
      "No es necesario diagnosticar problemas de arranque",
      "Verificar conexiones, componentes y configuración paso a paso",
      "Reemplazar todos los componentes sin diagnóstico previo",
      "Sin importancia en el funcionamiento del equipo"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Verificar conexiones, componentes y configuración paso a paso\". Al diagnosticar problemas de arranque en un equipo recién montado, se recomienda verificar sistemáticamente las conexiones, componentes y configuración paso a paso para identificar la causa del problema y aplicar la solución adecuada, evitando reemplazar innecesariamente componentes funcionales.",
    "source": "https://es.wikipedia.org/wiki/Diagnóstico_de_fallos"
  },
  {
    "id": 666,
    "category": "Diagnóstico",
    "question": "¿Por qué es importante documentar el proceso de montaje de un equipo informático?",
    "options": [
      "No es necesario documentar el proceso de montaje",
      "Facilitar futuras actualizaciones, reparaciones y mantenimiento",
      "Dificultar el diagnóstico de problemas",
      "Sin importancia en el mantenimiento del equipo"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Facilitar futuras actualizaciones, reparaciones y mantenimiento\". Documentar el proceso de montaje de un equipo informático es importante para facilitar futuras actualizaciones, reparaciones y mantenimiento, permitiendo recordar detalles específicos de la configuración, conexiones y componentes utilizados.",
    "source": "https://es.wikipedia.org/wiki/Documentación"
  },
  {
    "id": 667,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal de la memoria caché en un procesador?",
    "options": [
      "Almacenar permanentemente datos del usuario",
      "Reducir el tiempo de acceso a datos frecuentemente utilizados",
      "Aumentar el consumo energético del procesador",
      "Sin función relevante en el rendimiento del sistema"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Reducir el tiempo de acceso a datos frecuentemente utilizados\". La memoria caché en un procesador es una memoria de alta velocidad que almacena datos e instrucciones frecuentemente utilizados, reduciendo el tiempo de acceso y mejorando el rendimiento general del sistema al evitar tener que recuperar estos datos desde la memoria principal más lenta.",
    "source": "https://es.wikipedia.org/wiki/Memoria_caché"
  },
  {
    "id": 668,
    "category": "Componentes Básicos",
    "question": "¿Qué ventaja ofrece la tecnología SSD sobre los discos duros tradicionales?",
    "options": [
      "Mayor capacidad de almacenamiento por menor costo",
      "Mayor velocidad de lectura/escritura y mayor resistencia a impactos",
      "Menor consumo energético pero menor durabilidad",
      "Sin ventajas significativas sobre los discos duros tradicionales"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Mayor velocidad de lectura/escritura y mayor resistencia a impactos\". Los SSD (Solid State Drives) ofrecen ventajas significativas sobre los discos duros tradicionales, incluyendo mayor velocidad de lectura y escritura, tiempos de arranque más rápidos, menor consumo energético y mayor resistencia a impactos al no tener partes móviles.",
    "source": "https://es.wikipedia.org/wiki/Disco_sólido"
  },
  {
    "id": 669,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal del chipset en una placa base?",
    "options": [
      "Almacenar datos del sistema operativo",
      "Gestionar la comunicación entre el procesador y otros componentes",
      "Proveer energía a todos los componentes del sistema",
      "Sin función relevante en el funcionamiento de la placa base"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Gestionar la comunicación entre el procesador y otros componentes\". El chipset en una placa base es un conjunto de circuitos integrados que gestionan la comunicación entre el procesador y otros componentes como la memoria, tarjetas de expansión, dispositivos de almacenamiento y puertos de E/S, determinando las capacidades y características de la placa base.",
    "source": "https://es.wikipedia.org/wiki/Chipset"
  },
  {
    "id": 670,
    "category": "Componentes Básicos",
    "question": "¿Qué factor determina la compatibilidad entre un procesador y una placa base?",
    "options": [
      "El diseño estético de ambos componentes",
      "El zócalo (socket) y el chipset de la placa base",
      "El color de la placa base",
      "Sin factores de compatibilidad entre procesador y placa base"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"El zócalo (socket) y el chipset de la placa base\". La compatibilidad entre un procesador y una placa base está determinada principalmente por el tipo de zócalo (socket) físico y el chipset de la placa base, que deben ser compatibles entre sí para asegurar que el procesador pueda instalarse físicamente y funcionar correctamente.",
    "source": "https://es.wikipedia.org/wiki/Zócalo_de_CPU"
  },
  {
    "id": 671,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal de la BIOS/UEFI en un sistema informático?",
    "options": [
      "Almacenar archivos del usuario",
      "Realizar pruebas iniciales y cargar el sistema operativo",
      "Procesar datos de aplicaciones",
      "Sin función relevante en el arranque del sistema"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Realizar pruebas iniciales y cargar el sistema operativo\". La BIOS/UEFI (Basic Input/Output System / Unified Extensible Firmware Interface) es un firmware que realiza pruebas iniciales del hardware durante el arranque (POST), inicializa componentes y carga el sistema operativo desde el dispositivo de almacenamiento correspondiente.",
    "source": "https://es.wikipedia.org/wiki/BIOS"
  },
  {
    "id": 672,
    "category": "Componentes Básicos",
    "question": "¿Qué característica distingue a la memoria DDR4 de la DDR3?",
    "options": [
      "Mayor consumo energético en DDR4",
      "Mayor velocidad y menor voltaje en DDR4",
      "Menor capacidad en DDR4",
      "Sin diferencias significativas entre ambas tecnologías"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Mayor velocidad y menor voltaje en DDR4\". La memoria DDR4 ofrece ventajas sobre DDR3, incluyendo mayores velocidades de transferencia, mayor capacidad por módulo y menor voltaje de funcionamiento (1.2V frente a 1.5V), lo que resulta en mayor rendimiento y menor consumo energético.",
    "source": "https://es.wikipedia.org/wiki/DDR4_SDRAM"
  },
  {
    "id": 673,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal de un puente norte en una placa base tradicional?",
    "options": [
      "Gestionar dispositivos de entrada/salida lentos",
      "Conectar el procesador con componentes de alta velocidad como la RAM y gráficos",
      "Proveer energía al sistema",
      "Sin función relevante en la arquitectura de la placa base"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Conectar el procesador con componentes de alta velocidad como la RAM y gráficos\". En las placas base tradicionales con arquitectura de dos puentes, el puente norte (northbridge) se encarga de conectar el procesador con componentes de alta velocidad como la memoria RAM y, en algunos casos, las tarjetas gráficas, gestionando las comunicaciones más rápidas del sistema.",
    "source": "https://es.wikipedia.org/wiki/Puente_norte"
  },
  {
    "id": 674,
    "category": "Componentes Básicos",
    "question": "¿Qué ventaja ofrece la tecnología Multi-Core en los procesadores modernos?",
    "options": [
      "Mayor consumo energético",
      "Mayor capacidad para procesar múltiples tareas simultáneamente",
      "Menor rendimiento en aplicaciones de un solo hilo",
      "Sin ventajas significativas sobre los procesadores de un solo núcleo"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Mayor capacidad para procesar múltiples tareas simultáneamente\". La tecnología Multi-Core en los procesadores modernos permite integrar múltiples núcleos de procesamiento en un solo chip, ofreciendo mayor capacidad para procesar múltiples tareas simultáneamente, mejorando el rendimiento en aplicaciones multihilo y permitiendo una mayor eficiencia energética.",
    "source": "https://es.wikipedia.org/wiki/Multiprocesamiento"
  },
  {
    "id": 675,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal de un puente sur en una placa base tradicional?",
    "options": [
      "Conectar el procesador con la memoria RAM",
      "Gestionar dispositivos de entrada/salida más lentos como discos duros y puertos USB",
      "Procesar datos gráficos",
      "Sin función relevante en la arquitectura de la placa base"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Gestionar dispositivos de entrada/salida más lentos como discos duros y puertos USB\". En las placas base tradicionales con arquitectura de dos puentes, el puente sur (southbridge) se encarga de gestionar dispositivos de entrada/salida más lentos como discos duros, puertos USB, audio, red y otros periféricos, comunicándose con el puente norte para integrar todos los componentes del sistema.",
    "source": "https://es.wikipedia.org/wiki/Puente_sur"
  },
  {
    "id": 676,
    "category": "Componentes Básicos",
    "question": "¿Qué característica define a la tecnología RAID en sistemas de almacenamiento?",
    "options": [
      "Reducción automática de la capacidad de almacenamiento",
      "Combinación de múltiples discos para mejorar rendimiento o redundancia",
      "Limitación a un solo tipo de disco duro",
      "Sin ventajas significativas sobre los sistemas de almacenamiento tradicionales"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Combinación de múltiples discos para mejorar rendimiento o redundancia\". La tecnología RAID (Redundant Array of Independent Disks) combina múltiples discos duros en un solo sistema lógico para mejorar el rendimiento, la capacidad de almacenamiento o la redundancia de datos, dependiendo de la configuración específica (RAID 0, 1, 5, 10, etc.).",
    "source": "https://es.wikipedia.org/wiki/RAID"
  },
  {
    "id": 677,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal de la memoria virtual en un sistema operativo?",
    "options": [
      "Aumentar físicamente la capacidad de la RAM",
      "Utilizar espacio del disco duro como extensión de la RAM",
      "Reducir el rendimiento del sistema",
      "Sin función relevante en la gestión de memoria"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Utilizar espacio del disco duro como extensión de la RAM\". La memoria virtual es una técnica que permite al sistema operativo utilizar espacio del disco duro como extensión de la memoria RAM física, moviendo páginas de memoria menos utilizadas al disco para liberar RAM para procesos activos, permitiendo ejecutar más aplicaciones de las que cabrían en la memoria física.",
    "source": "https://es.wikipedia.org/wiki/Memoria_virtual"
  },
  {
    "id": 678,
    "category": "Componentes Básicos",
    "question": "¿Qué ventaja ofrece la tecnología Hyper-Threading en los procesadores Intel?",
    "options": [
      "Duplicación física de los núcleos del procesador",
      "Simulación de múltiples núcleos lógicos por cada núcleo físico",
      "Reducción del rendimiento en aplicaciones multihilo",
      "Sin ventajas significativas sobre los procesadores sin Hyper-Threading"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Simulación de múltiples núcleos lógicos por cada núcleo físico\". La tecnología Hyper-Threading de Intel permite simular múltiples núcleos lógicos por cada núcleo físico, permitiendo que el procesador gestione más hilos de ejecución simultáneamente y mejore el rendimiento en aplicaciones optimizadas para multihilo, sin duplicar físicamente los núcleos.",
    "source": "https://es.wikipedia.org/wiki/Hyper-Threading"
  },
  {
    "id": 679,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal del controlador de memoria en un sistema informático?",
    "options": [
      "Almacenar datos permanentemente",
      "Gestionar el flujo de datos entre el procesador y la memoria RAM",
      "Procesar gráficos 3D",
      "Sin función relevante en el rendimiento del sistema"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Gestionar el flujo de datos entre el procesador y la memoria RAM\". El controlador de memoria es un circuito que gestiona el flujo de datos entre el procesador y la memoria RAM, controlando el acceso a la memoria, la temporización y la transferencia de datos, influyendo significativamente en el rendimiento general del sistema.",
    "source": "https://es.wikipedia.org/wiki/Controlador_de_memoria"
  },
  {
    "id": 680,
    "category": "Componentes Básicos",
    "question": "¿Qué característica distingue a los procesadores de la serie Xeon de Intel?",
    "options": [
      "Están diseñados específicamente para sistemas de consumo",
      "Están optimizados para servidores y estaciones de trabajo",
      "Tienen menor rendimiento que los procesadores de consumo",
      "Sin diferencias significativas con los procesadores de consumo"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Están optimizados para servidores y estaciones de trabajo\". Los procesadores de la serie Xeon de Intel están diseñados y optimizados específicamente para servidores y estaciones de trabajo, ofreciendo características como mayor número de núcleos, mayor capacidad de memoria RAM soportada, tecnología ECC y mayor fiabilidad para cargas de trabajo profesionales.",
    "source": "https://es.wikipedia.org/wiki/Xeon"
  },
  {
    "id": 681,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal de la tecnología ECC en memoria RAM?",
    "options": [
      "Aumentar la velocidad de la memoria",
      "Detectar y corregir errores en los datos almacenados",
      "Reducir el consumo energético de la memoria",
      "Sin función relevante en la fiabilidad del sistema"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Detectar y corregir errores en los datos almacenados\". La tecnología ECC (Error-Correcting Code) en memoria RAM permite detectar y corregir errores en los datos almacenados, aumentando la fiabilidad del sistema y previniendo corrupción de datos, siendo especialmente importante en servidores y sistemas críticos donde la integridad de los datos es fundamental.",
    "source": "https://es.wikipedia.org/wiki/Código_de_corrección_de_errores"
  },
  {
    "id": 682,
    "category": "Componentes Básicos",
    "question": "¿Qué ventaja ofrece la tecnología NVMe sobre las interfaces SATA para SSD?",
    "options": [
      "Menor velocidad de transferencia de datos",
      "Mayor velocidad y menor latencia gracias a la conexión directa por PCIe",
      "Mayor compatibilidad con sistemas antiguos",
      "Sin ventajas significativas sobre las interfaces SATA"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Mayor velocidad y menor latencia gracias a la conexión directa por PCIe\". La tecnología NVMe (Non-Volatile Memory Express) ofrece ventajas significativas sobre las interfaces SATA para SSD, incluyendo mayor velocidad de transferencia de datos, menor latencia y mayor eficiencia gracias a la conexión directa a través del bus PCIe, optimizada específicamente para unidades de estado sólido.",
    "source": "https://es.wikipedia.org/wiki/NVM_Express"
  },
  {
    "id": 683,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal de la tecnología Turbo Boost en procesadores Intel?",
    "options": [
      "Reducir permanentemente la velocidad del procesador",
      "Aumentar dinámicamente la frecuencia de los núcleos activos cuando es necesario",
      "Limitar el número de núcleos utilizables",
      "Sin impacto en el rendimiento del procesador"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Aumentar dinámicamente la frecuencia de los núcleos activos cuando es necesario\". La tecnología Turbo Boost de Intel permite aumentar dinámicamente la frecuencia de los núcleos activos del procesador por encima de su frecuencia base cuando las condiciones térmicas y de consumo lo permiten, proporcionando un rendimiento adicional para cargas de trabajo exigentes.",
    "source": "https://es.wikipedia.org/wiki/Intel_Turbo_Boost"
  },
  {
    "id": 684,
    "category": "Componentes Básicos",
    "question": "¿Qué característica define a la tecnología M.2 en unidades de almacenamiento?",
    "options": [
      "Mayor tamaño físico que las unidades de 2.5 pulgadas",
      "Formato compacto y conexión directa a la placa base",
      "Limitación a interfaces SATA",
      "Sin ventajas sobre los formatos de almacenamiento tradicionales"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Formato compacto y conexión directa a la placa base\". La tecnología M.2 define un formato compacto para unidades de almacenamiento que se conectan directamente a la placa base, ahorrando espacio y permitiendo interfaces más rápidas como PCIe y NVMe, además de SATA, ofreciendo mayor rendimiento y flexibilidad en sistemas compactos.",
    "source": "https://es.wikipedia.org/wiki/M.2"
  },
  {
    "id": 685,
    "category": "Componentes Básicos",
    "question": "¿Cuál es la función principal de la tecnología Precision Boost en procesadores AMD?",
    "options": [
      "Reducir el rendimiento del procesador",
      "Aumentar dinámicamente la frecuencia según la carga y temperatura",
      "Limitar la compatibilidad con placas base",
      "Sin impacto en el rendimiento del procesador"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Aumentar dinámicamente la frecuencia según la carga y temperatura\". La tecnología Precision Boost de AMD es similar a Turbo Boost de Intel y permite aumentar dinámicamente la frecuencia del procesador según la carga de trabajo y las condiciones térmicas, optimizando el rendimiento para cada situación específica y manteniendo el consumo y la temperatura dentro de límites seguros.",
    "source": "https://es.wikipedia.org/wiki/Precision_Boost"
  },
  {
    "id": 686,
    "category": "Componentes Básicos",
    "question": "¿Qué ventaja ofrece la tecnología PCIe 4.0 sobre la versión 3.0?",
    "options": [
      "Menor ancho de banda",
      "Doble velocidad de transferencia respecto a PCIe 3.0",
      "Menor compatibilidad con dispositivos",
      "Sin mejoras significativas sobre la versión anterior"
    ],
    "correct": 1,
    "explanation": "La respuesta correcta es \"Doble velocidad de transferencia respecto a PCIe 3.0\". La tecnología PCIe 4.0 ofrece el doble de velocidad de transferencia que la versión 3.0 (aproximadamente 16 GT/s por carril frente a 8 GT/s), proporcionando mayor ancho de banda para tarjetas gráficas, SSD y otros dispositivos de alto rendimiento, manteniendo compatibilidad con dispositivos de versiones anteriores.",
    "source": "https://es.wikipedia.org/wiki/PCI_Express"
  }
];

// Funciones de utilidad
function getAllQuestions() {
  return questionsDatabase;
}

function getQuestionsByCategory(category) {
  return questionsDatabase.filter(q => q.category === category);
}

function getRandomQuestion() {
  const randomIndex = Math.floor(Math.random() * questionsDatabase.length);
  return questionsDatabase[randomIndex];
}

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function generateRandomTest(numQuestions) {
  if (numQuestions > questionsDatabase.length) {
    numQuestions = questionsDatabase.length;
  }
  return shuffleArray(questionsDatabase).slice(0, numQuestions);
}

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


