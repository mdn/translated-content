---
title: Introduccion para desarrollo de juegos para la Web
slug: Games/Introduction
---

{{GamesSidebar}}

La Web rapidamente se ha convertido en una plataforma viable no solo para crear impresionantes juegos de alta calidad, sino también para distruibuirlos.El rango de juegos que pueden ser creados está a la par tanto de los juegos de escritorio como de SO nativos (Android, iOS). Con tecnologias Web modernas y un navegador reciente es totalmente posible hacer juegos de primera categoria para la Web. Y no estamos hablando sobre simples juegos de cartas o juegos sociales multijugadores que en tiempos anteriores se podian hacer con Flash®. Estamos hablando sobre juegos 3D _shooters_ de accion, RPGs, y más. Gracias a las masivas mejoras de rendimiento en [JavaScript](/es/docs/JavaScript) con tecnologia de compilación _just-in-time_ y nuevas APIs, se pueden construir juegos que pueden correr en el navegador (o en dispositivos [HTML5](/es/docs/HTML/HTML5) como [Firefox OS](/es/docs/Mozilla/Firefox_OS)) sin problemas.

## La plataforma de juegos HTML5

Puedes pensar en la Web como una mejor opción de plataforma para desarrollar tu juego. Como nos gusta decir, "la Web es la plataforma". Hechemos un vistazo al nucleo de la plataforma Web:

| Funcion            | Tecnología                                                                                                                                                                                                                                                       |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Audio**          | [Web Audio API](/es/docs/Web_Audio_API)                                                                                                                                                                                                                          |
| **Graficos**       | [WebGL](/es/docs/WebGL) ([OpenGL ES](http://www.khronos.org/opengles/) 2.0)                                                                                                                                                                                      |
| **Entrada**        | [Touch events](/es/docs/DOM/Touch_events), [Gamepad API](/es/docs/API/Gamepad/Using_Gamepad_API), device sensors, [WebRTC](/es/docs/Web/API/WebRTC_API), [Full Screen API](/es/docs/DOM/Using_fullscreen_mode), [Pointer Lock API](/es/docs/WebAPI/Pointer_Lock) |
| **Lenguaje**       | [JavaScript](/es/docs/JavaScript) (o C/C++ usando [Emscripten](https://github.com/kripken/emscripten/wiki) para compilar a JavaScript)                                                                                                                           |
| **Redes**          | [WebRTC](/es/docs/WebRTC) and/or [WebSockets](/es/docs/WebSockets)                                                                                                                                                                                               |
| **Almacenamiento** | [IndexedDB](/es/docs/IndexedDB) o la "nube"                                                                                                                                                                                                                      |
| **Web**            | [HTML](/es/docs/HTML), [CSS](/es/docs/CSS), [SVG](/es/docs/SVG), [Social API](/es/docs/Social_API) (y mucho más!)                                                                                                                                                |

## El caso de Exito

Como un desarrollador de juegos, de forma individual o como un gran studio de juegos, tu quieres por que tiene sentido apuntar a la Web como tu práximo proyecto de juego. Veamos como la Web puede ayudarte.

1. El alcance de la Web es enorme;

   está en todas partes.

   Los juegos construidos con HTML5 funcionan en smartphones, tablets, PCs y Smart TVs.

2. Se mejoran la comercialización y la detección.

   No estás limitado a promocionar tu aplicación en la tienda de aplicaciones de otra persona.

   En su lugar, puede anunciar y promover su juego en toda la Web, así como en otros medios, aprovechando la inherente capacidad de enlace y capacidad de compartir de la Web para llegar a nuevos clientes.

3. Usted tiene control donde importa: Pagos.

   Usted no tiene que entregar más del 30% de sus ingresos a otra persona sólo porque su juego está en su ecosistema.

   En su lugar, cargue lo que quiera y utilice cualquier servicio de procesamiento de pagos que le guste.

4. Una vez más con más control, puedes actualizar tu juego cuando quieras.

   No hay que esperar sin aliento para la aprobación, mientras que alguien oculto dentro de otra empresa decide si su solución de error crítico se enviará hoy o mañana.

5. ¡Controla tus análisis!

   En lugar de confiar en otra persona para tomar todas las decisiones sobre qué analítica necesita, puede recoger su propia o elegir la tercera parte que más le guste para recopilar información sobre sus ventas y el alcance de su juego.

6. Usted consigue manejar su relación del cliente más de cerca, en su propia manera.

   No más tener comentarios de los clientes filtrados a través de los mecanismos limitados de una tienda de aplicaciones.

   Involucrarse con sus clientes de la manera que desee, sin un intermediario.

7. Sus jugadores pueden jugar su juego en cualquier lugar, en cualquier momento.

   Debido a que la Web es omnipresente, sus clientes pueden comprobar el estado de su juego en sus teléfonos, tabletas, computadoras portátiles domésticas, sus escritorios de trabajo o cualquier otra cosa.

## Tecnologías web para desarrolladores de juegos

Para la gente de tecnología, vamos a cavar en las API que la Web aporta a la mesa que atienden a los desarrolladores de juegos. Esta es una lista exhaustiva para darle una muestra de lo que la Web puede hacer por usted:

- [API de pantalla completa](/es/docs/Web/API/Fullscreen_API)
  - : Esta sencilla API permite que su juego se haga cargo de toda la pantalla, sumergiendo al jugador en acción.
- [API de Gamepad](/es/docs/API/Gamepad/Using_Gamepad_API)
  - : Si desea que sus usuarios puedan usar gamepads u otros controladores de juego para trabajar su juego, necesitará esta API.
- [HTML](/es/docs/Web/HTML) y [CSS](/es/docs/Web/CSS)
  - : Juntas, estas dos tecnologías le permiten construir, diseñar y diseñar la interfaz de usuario de su juego.Parte de HTML es el elemento {{htmlelement("canvas")}}, que proporciona una forma de hacer gráficos 2D.
- [Audio HTML](/es/docs/Web/HTML/Elemento/audio)
  - : El elemento {{htmlelement("audio")}} te permite reproducir fácilmente efectos de sonido y música sencillos.Si sus necesidades están más involucradas, echa un vistazo a la [API de audio web](/es/docs/Web_Audio_API) para obtener potencia de procesamiento de audio real.
- [IndexedDB](/es/docs/IndexedDB-840092-dup)
  - : Una poderosa API de almacenamiento de datos para mantener los datos del usuario en su propio ordenador o dispositivo. Una gran manera de guardar el estado del juego y otra información localmente para que no tenga que ser descargado cada vez que sea necesario. También es útil para ayudar a que su juego sea jugable incluso cuando el usuario no está conectado a la Web (por ejemplo, cuando están atrapados en un avión durante horas y horas ...).
- [JavaScript](/es/docs/Web/JavaScript)
  - : JavaScript, el lenguaje de programación utilizado en la Web, está ardiendo rápido en los navegadores modernos y cada vez más rápido.Usa su poder para escribir el código para tu juego, o mira usando tecnologías como [Emscripten](https://github.com/kripken/emscripten/wiki) o [Asm.js](http://asmjs.org/spec/latest/) para portar fácilmente tus juegos existentes.
- [API de bloqueo de puntero](/es/docs/WebAPI/Pointer_Lock)
  - : La API de Bloqueo de Puntero le permite bloquear el ratón u otro dispositivo señalador dentro de la interfaz de su juego para que en lugar de posicionamiento absoluto del cursor reciba deltas de coordenadas que le den medidas más precisas de lo que el usuario está haciendo e impide que el usuario envíe accidentalmente su entrada En algún otro lugar, por lo tanto falta una acción importante.
- [SVG](/es/docs/Web/SVG) (Gráficos Vectoriales Escalables)
  - : Permite crear gráficos vectoriales que se escalan sin problemas, independientemente del tamaño o la resolución de la pantalla del usuario.
- [Matrices Arrays](/es/docs/Web/JavaScript/Vectores_tipados)
  - : Los arrays tipados en JavaScript le dan acceso a datos binarios sin procesar desde JavaScript;Esto le permite manipular texturas GL, datos de juego, o cualquier otra cosa, incluso si no está en un formato JavaScript nativo.
- [API de audio web](/es/docs/Web_Audio_API)
  - : Esta API para controlar la reproducción, síntesis y manipulación de audio a partir de código JavaScript le permite crear efectos de sonido impresionantes, así como jugar y manipular música en tiempo real.
- [WebGL](/es/docs/Web/API/WebGL_API)
  - : Permite crear gráficos 3D (y 2D) acelerados por hardware de alto rendimiento a partir del contenido Web.Se trata de una implementación Web de [OpenGL ES](http://www.khronos.org/opengles/) 2.0.
- [WebRTC](/es/docs/Web/API/WebRTC_API)
  - : La API WebRTC (Comunicaciones en tiempo real) le permite controlar los datos de audio y vídeo, incluyendo la teleconferencia y la transmisión de otros datos de la aplicación entre dos usuarios. ¿Quieren que sus jugadores puedan hablar entre sí mientras explotan monstruos? Esta es la API para usted.
- [WebSockets](/es/docs/Web/API/WebSockets_API)
  - : La API de WebSocket le permite conectar su aplicación o sitio a un servidor para transmitir datos de un lado a otro en tiempo real.Perfecto para la acción de juego multijugador, servicios de chat, y así sucesivamente.
- [Trabajadores de la Web](/es/docs/Web/Guide/Performance/Usando_web_workers)
  - : Los trabajadores le dan la posibilidad de generar hilos de fondo que ejecutan su propio código JavaScript, para aprovechar los modernos procesadores multi-núcleo.
- [XMLHttpRequest](/es/docs/Web/API/XMLHttpRequest) y [API de archivos](/es/docs/DOM/File_API)
  - : La combinación de XMLHttpRequest y la API de archivos le permiten enviar y recibir cualquier tipo de datos que desee (no deje que el "XML" te lance!) Desde un servidor Web. Esta es una gran manera de hacer cualquier cosa desde la descarga de nuevos niveles de juego y obras de arte a la transmisión de información de estado de juego en tiempo no real de ida y vuelta.
