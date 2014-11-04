var preguntas = [
 /**
  *  Equipo Morado
  */
	{
		pregunta: "¿Que contiene la barra de estado?",
		contestada: false,
		respuestas: [
			{
				txt: 'zoom',
				valida: false,
			},
			{
				txt: "botón de desplazamiento",
				valida: false,
			},
			{
				txt: "num de páginas, Núm palabras, idioma",
				valida: true,
			},
		]
	},
	/**
	 *
	 *
	 **/
	 {
		pregunta: "¿Que es la interfaz?",
		contestada: false,
		respuestas: [
			{
				txt: 'Todo lo gráfico del programa',
				valida: true,
			},
			{
				txt: "Todas las nomenclaturas del programa",
				valida: false,
			},
			{
				txt: "Todas las anteriores",
				valida: false,
			},
		]
	},
	 {
		pregunta: "¿Que contiene la barra del título?",
		contestada: false,
		respuestas: [
			{
				txt: 'La herramienta zoom',
				valida: false,
			},
			{
				txt: "El número de páginas",
				valida: false,
			},
			{
				txt: "El nombre del documento y el programa abierto",
				valida: true,
			},
			{
				txt: "Las herramientas y utilidades básicas del programa",
				valida: false,
			},
			{
				txt: "Ninguna de las anteriores",
				valida: false,
			},
		]
	},
	 {
		pregunta: "En la Interfaz de MS Word,¿que se encuentra en la parte inferior del costado derecho?",
		contestada: false,
		respuestas: [
			{
				txt: 'Opciones de vista y zoom',
				valida: true,
			},
			{
				txt: "Barra de estado",
				valida: false,
			},
			{
				txt: "Barras de desplazamiento",
				valida: false,
			},
			{
				txt: "Ninguna de las anteriores",
				valida: false,
			},
		]
	},
	 {
		pregunta: "En la Interfaz de MS Word,¿que se encuentra en la parte superior del costado izquierdo?",
		contestada: false,
		respuestas: [
			{
				txt: 'Opciones de vista y zoom',
				valida: false,
			},
			{
				txt: "Barra de estado",
				valida: false,
			},
			{
				txt: "Barras de desplazamiento",
				valida: false,
			},
			{
				txt: "Ninguna de las anteriores",
				valida: true,
			},
		]
	},
	 {
		pregunta: "¿Que contiene la cinta de opciones?",
		contestada: false,
		respuestas: [
			{
				txt: 'Las páginas que contiene el documento',
				valida: true,
			},
			{
				txt: "Herramientas y utilidades necesarias para trabajar",
				valida: false,
			},
			{
				txt: "Ninguna de las anteriores",
				valida: false,
			},
		]
	},
	 {
		pregunta: "¿Se localiza en el costado superior derecho y contiene las opciones de minimizar, restaurar y ayuda?",
		contestada: false,
		respuestas: [
			{
				txt: 'Las páginas que contiene el documento',
				valida: false,
			},
			{
				txt: "Menú de control del documento",
				valida: false,
			},
			{
				txt: "Menú de opciones",
				valida: false,
			},
			{
				txt: "Menú de control de ventana",
				valida: true,
			},
		]
	},
	 {
		pregunta: "Para centrar el texto podemos ocupar la combinación de teclas",
		contestada: false,
		respuestas: [
			{
				txt: 'Ctrl + C',
				valida: false,
			},
			{
				txt: "Ctrl + R",
				valida: false,
			},
			{
				txt: "Ctrl + T",
				valida: true,
			},
			{
				txt: "Ninguna de las anteriores",
				valida: false,
			},
		]
	},
	 {
		pregunta: "Para justificar el texto podemos ocupar la combinación de teclas",
		contestada: false,
		respuestas: [
			{
				txt: 'Ctrl + J',
				valida: true,
			},
			{
				txt: "Ctrl + H",
				valida: false,
			},
			{
				txt: "Ctrl + T",
				valida: false,
			},
			{
				txt: "Ninguna de las anteriores",
				valida: false,
			},
		]
	},
	 {
		pregunta: "Alinear el texto a la Derecha podemos usar la combinación de teclas",
		contestada: false,
		respuestas: [
			{
				txt: 'Ctrl + D',
				valida: true,
			},
			{
				txt: "Ctrl + (",
				valida: false,
			},
			{
				txt: "Ctrl + M",
				valida: false,
			},
			{
				txt: "Ninguna de las anteriores",
				valida: false,
			},
		]
	},
	 {
		pregunta: "Alinear el texto a la Izquierda podemos usar la combinación de teclas",
		contestada: false,
		respuestas: [
			{
				txt: 'Ctrl + D',
				valida: false,
			},
			{
				txt: "Ctrl + Q",
				valida: true,
			},
			{
				txt: "Ctrl + M",
				valida: false,
			},
			{
				txt: "Ninguna de las anteriores",
				valida: false,
			},
		]
	},
	 {
		pregunta: "Para mostrar las marcas de párrafo y otros símbolos de formato oculto podemos ocupar las teclas",
		contestada: false,
		respuestas: [
			{
				txt: 'Ctrl + *',
				valida: false,
			},
			{
				txt: "Ctrl + (",
				valida: true,
			},
			{
				txt: "Ctrl + M",
				valida: false,
			},
			{
				txt: "Ninguna de las anteriores",
				valida: false,
			},
		]
	},
	 {
		pregunta: "Para convertir el texto seleccionado en negrillas podemos usar:",
		contestada: false,
		respuestas: [
			{
				txt: 'Ctrl + N',
				valida: true,
			},
			{
				txt: "Ctrl + B",
				valida: false,
			},
			{
				txt: "Ctrl + L",
				valida: false,
			},
			{
				txt: "Ninguna de las anteriores",
				valida: false,
			},
		]
	},
	 {
		pregunta: "Para convertir el texto seleccionado en <i>cursivas</i> podemos usar:",
		contestada: false,
		respuestas: [
			{
				txt: 'Ctrl + N',
				valida: false,
			},
			{
				txt: "Ctrl + K",
				valida: true,
			},
			{
				txt: "Ctrl + S",
				valida: false,
			},
			{
				txt: "Ninguna de las anteriores",
				valida: false,
			},
		]
	},
	 {
		pregunta: "Para subrayar el texto seleccionado podemos usar:",
		contestada: false,
		respuestas: [
			{
				txt: 'Ctrl + N',
				valida: false,
			},
			{
				txt: "Ctrl + K",
				valida: false,
			},
			{
				txt: "Ctrl + Q",
				valida: false,
			},
			{
				txt: "Ninguna de las anteriores",
				valida: true,
			},
		]
	},
	 {
		pregunta: "Para aumentar el tamaño de fuente del texto seleccionado podemos usar:",
		contestada: false,
		respuestas: [
			{
				txt: 'Ctrl + N',
				valida: false,
			},
			{
				txt: "Ctrl + K",
				valida: false,
			},
			{
				txt: "Ctrl + &gt;",
				valida: true,
			},
			{
				txt: "Ninguna de las anteriores",
				valida: true,
			},
		]
	},
	 {
		pregunta: "Para reducir el tamaño de fuente del texto seleccionado podemos usar:",
		contestada: false,
		respuestas: [
			{
				txt: 'Ctrl + N',
				valida: false,
			},
			{
				txt: "Ctrl + &lt;",
				valida: true,
			},
			{
				txt: "Ctrl + T",
				valida: false,
			},
			{
				txt: "Ninguna de las anteriores",
				valida: true,
			},
		]
	},
	 {
		pregunta: "Para abrir el díalogo de buscar podemos ocupar las teclas:",
		contestada: false,
		respuestas: [
			{
				txt: 'Ctrl + N',
				valida: false,
			},
			{
				txt: "Ctrl + K",
				valida: false,
			},
			{
				txt: "Ctrl + S",
				valida: false,
			},
			{
				txt: "Ninguna de las anteriores",
				valida: true,
			},
		]
	},
	 {
		pregunta: "Para abrir el díalogo de remplazar podemos ocupar las teclas:",
		contestada: false,
		respuestas: [
			{
				txt: 'Ctrl + N',
				valida: false,
			},
			{
				txt: "Ctrl + L",
				valida: true,
			},
			{
				txt: "Ctrl + B",
				valida: false,
			},
			{
				txt: "Ninguna de las anteriores",
				valida: false,
			},
		]
	},
	 {
		pregunta: "El grupo de parrafo pertenece a la sección de herramientas de:",
		contestada: false,
		respuestas: [
			{
				txt: 'Vista',
				valida: false,
			},
			{
				txt: "Inicio",
				valida: true,
			},
			{
				txt: "Revisar",
				valida: false,
			},
			{
				txt: "Insertar",
				valida: true,
			},
		]
	},
];