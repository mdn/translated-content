---
title: Rendimiento Web
slug: Web/Performance
---

{{QuickLinksWithSubPages}}

El rendimiento web es la medición objetiva y la experiencia percibida por el usuario del tiempo de carga y el tiempo de ejecución; es el tiempo que tarda un sitio en cargarse, ser interactivo y responsivo, y que tan fluido es el contenido durante las interacciones del usuario: ¿el desplazamiento es suave? ¿Se puede hacer clic en los botones? ¿Las ventanas emergentes se abren rápidamente y se animan fluidamente al hacerlo? El rendimiento web incluye mediciones objetivas como el tiempo de carga, cuadros por segundo y tiempo para interactuar y subjetivas de cuánto tiempo se sintió que tardó en cargarse el contenido.

Cuanto más tarde un sitio en responder, más usuarios abandonarán el sitio. Es importante minimizar los tiempos de carga y respuesta, y agregar funciones adicionales para ocultar la latencia al hacer que la experiencia sea lo más accesible e interactiva posible, tan pronto como sea posible, mientras se carga de forma asíncrona en las partes que más tarda la experiencia.

Existen herramientas, API y mejores prácticas que nos ayudan a medir y mejorar el rendimiento web. Los cubrimos en esta sección.

## Tutoriales claves

El [Área de aprendizaje de Rendimiento](/es/docs/Learn/Performance) Web de MDN contiene tutoriales modernos y actualizados que cubren aspectos esenciales del rendimiento:

[¿Qué es el rendimiento web?](/es/docs/Learn/Performance/What_is_web_performance)

Este artículo inicia el módulo con un buen vistazo a lo que realmente es el rendimiento: esto incluye las herramientas, métricas, API, redes y grupos de personas que debemos tener en cuenta al pensar en el rendimiento y cómo podemos hacer que el rendimiento sea parte de nuestro flujo de trabajo de desarrollo web.

- [Ruta crítica de renderización](/es/docs/Web/Performance/Critical_rendering_path)
  - : Algunos atributos y el orden en los origenes del código pueden afectar el rendimiento o su sitio web. Al minimizar el número de nodos del DOM, asegurándose de utilizar el mejor orden y los atributos para el contenido incluido, como estilos, código, elementos multimedia y código de terceros, puede mejorar drásticamente la experiencia del usuario. Este artículo analiza en detalle cómo el HTML y la ruta crítica de renderización pueden usarse para garantizar el máximo rendimiento.
- [Mejores prácticas de rendimiento de Javascript](/es/docs/Learn/Performance/JavaScript)

  - : JavaScript, cuando se usa correctamente, puede permitir experiencias web interactivas e inmersivas ... o puede dañar significativamente el tiempo de descarga, el tiempo de reproducción, el rendimiento de la aplicación, la duración de la batería y la experiencia del usuario. Este artículo describe algunas de las mejores prácticas de JavaScript que pueden garantizar que, incluso el contenido más complejo, tenga el mejor rendimiento posible.

- [Multimedia: Images and Video](/es/docs/Learn/Performance/Multimedia)
  - : Con frecuencia, la optimización de elementos multimedia es la forma más usada de hacer rendimiento web. Es posible servir diferentes archivos multimedia según el tipo de navegador, el tamaño y la densidad de píxeles de cada usuario. Consejos adicionales, como eliminar el sonido en imágenes de fondo, pueden mejorar aún más el rendimiento. En este artículo, analizamos el impacto que el video, el audio y el contenido de imagen tienen en el rendimiento y los métodos para garantizar que su impacto sea el mínimo posible.
- [Características de rendimiento CSS](/es/docs/Learn/Performance/CSS)
  - : CSS puede tener un enfoque de optimización menos importante para mejorar el rendimiento, pero hay algunas características de CSS que afectan el rendimiento más que otras. En este artículo, analizamos algunas propiedades de CSS que afectan el rendimiento y sugerimos formas de manejar los estilos para garantizar que el rendimiento no se vea afectado negativamente.
- [¿Como los usuarios perciben el rendimiento?](/es/docs/Learn/Performance/perceived_performance)
  - : Más importante que la rapidez de su sitio web en milisegundos, es la rapidez con la que los usuarios perciben su sitio. El tiempo de carga, el tiempo en ocio de la página, la capacidad de respuesta a la interacción del usuario y lo fluido de los desplazamientos y otras animaciones afectan estas percepciones. En este artículo, analizamos las diversas métricas de carga, animación y métricas de capacidad de respuesta, junto con las mejores prácticas para mejorar la percepción del usuario, y de los tiempos reales.
- [Conceptos básicos de rendimiento web](/es/docs/Learn/Performance/web_performance_basics)
  - : Además de los componentes HTML, CSS, JavaScript y archivos multimedia, hay características que pueden hacer que las aplicaciones sean más lentas y características que pueden hacer que las aplicaciones sean subjetivamente y objetivamente más rápidas. Existen muchas API, herramientas de desarrollo, mejores prácticas y malas prácticas relacionadas con el rendimiento web. Aquí presentaremos muchas de estas funciones al nivel básico y proporcionaremos enlaces a temas más profundos para mejorar el rendimiento en cada tema.
- [Rendimiento movil](/es/docs/Learn/Performance/Mobile)
  - : Dado que el acceso a la web en dispositivos móviles es tan popular y que todas las plataformas móviles tienen navegadores web completos, pero es posible que el ancho de banda, la CPU y la vida útil de la batería sean limitados, es importante considerar el rendimiento de su contenido web en estas plataformas. Este artículo analiza las consideraciones de rendimiento específicas para dispositivos móviles.
- Llenando la página
  - : El cliente realiza una solicitud HTTP y, con suerte, unos segundos después, aparece el sitio. Mostrar el contenido implica ejecutar JavaScript, posiblemente modificando el DOM, calcular estilos, calcular la disposición del diseño y, finalmente, representar el contenido, lo que implica pintar y componer, y puede involucrar la aceleración de la GPU en un hilo de ejecución separado.
    .
- Cuellos de botella en rendimiento
  - : Empty
- [Tiempo para interactuar](/es/docs/Glossary/Time_to_interactive)
  - : Empty
- [Entendiendo la latencia](/es/docs/Learn/Performance/Latency)
  - : La latencia es la cantidad de tiempo que se tarda entre realizar una solicitud de un recurso y recibir el primer byte del recurso solicitado. Este artículo explica qué es la latencia, cómo afecta el rendimiento y cómo medir y mejorar la latencia.
- Entendiendo ancho de banda
  - : El ancho de banda es la cantidad de datos (medidos en Mbps o Kbps) que uno puede enviar por segundo. Este artículo explica la función del ancho de banda en las aplicaciones de Internet ricas en elementos multimedia, cómo puede medirlo y cómo puede optimizar las aplicaciones para aprovechar al máximo el ancho de banda disponible.
- [HTTP/2 y tu](/es/docs/Learn/Performance/HTTP2)
  - : La capa de transporte, es decir, HTTP, es absolutamente esencial para el funcionamiento de la web, y solo recientemente se ha visto una actualización importante en la forma de HTTP/2. Viendolo de otra forma HTTP/2 proporciona muchas mejoras de rendimiento y ventajas sobre su predecesor, pero también cambia el panorama. En este artículo, aprenderá lo que HTTP/2 hace por usted, y cómo ajustar su aplicación para que vaya más allá.
- El papel de TLS en el rendimiento

  - : TLS o HTTPS, como solemos llamarlo, es crucial para crear experiencias de usuario seguras. Si bien el hardware ha reducido los impactos negativos que TLS ha tenido en el rendimiento del servidor, todavía representa una porción sustancial del tiempo que pasamos esperando que los navegadores se conecten a los servidores. Este artículo explica el proceso de reconocimiento de TLS y ofrece algunos consejos para reducir este tiempo, como el grapado OCSP, los encabezados de precarga de HSTS y el posible papel de las sugerencias de recursos en el enmascaramiento de la latencia TLS para terceros.

- Leyendo gráficos de rendimientos
  - : Las herramientas del desarrollador proporcionan información sobre el rendimiento, la memoria y las solicitudes de red. Saber cómo leer los cuadros de cascada, los árboles de llamadas, los trazos, los gráficos de llamas y las asignaciones de memoria en las herramientas de desarrollo de su navegador lo ayudará a comprender los cuadros de cascada y de llama en otras herramientas de rendimiento.
- Analizando paquetes de JavaScript
  - : Sin duda, JavaScript es una gran parte del desarrollo web moderno. Si bien siempre debemos esforzarnos por reducir la cantidad de JavaScript que se utiliza en nuestas aplicaciones, puede ser difícil saber dónde comenzar. En esta guía, le mostraremos cómo analizar los paquetes de scripts de su aplicación, para que sepa qué está utilizando y cómo detectar si su aplicación contiene scripts duplicados entre paquetes.
- [Carga diferida](/es/docs/Web/Performance/Lazy_loading)
  - : No siempre es necesario cargar todos los activos de aplicaciones web en la carga de la página inicial. La carga diferida es diferir la carga de elementos en una página, como scripts, imágenes, etc., para un momento posterior, cuando esos elementos son realmente necesarios.

<!---->

- Carga diferida de JavaScript con import()
  - : El término "carga diferida" a menudo se refiere a técnicas de aplazamiento de carga para elementos que no se muestran en la vista inicial de la página solo cuando el usuario se desplaza hacia esos elementos en la página. Ahora hay características nativas para cargar JavaScript! En esta guía, hablaremos sobre el compando import() de carga dinamica, una nueva función del navegador, que carga un módulo de JavaScript a pedido.
- [Controlar la entrega de recursos con sugerencias de recursos](/es/docs/Web/Performance/Controlling_resource_delivery_with_resource_hints)
  - : Los navegadores a menudo saben mejor que nosotros cuando se trata de la priorización y la entrega de recursos, pero están lejos de ser clarividentes. Las características nativas del navegador nos permiten sugerirle al navegador cuándo debe conectarse a otro servidor, o precargar un recurso antes de que el navegador sepa que lo necesita. Cuando se usa juiciosamente, esto puede hacer que la experiencia rápida parezca aún más rápida. En este artículo, cubrimos las características nativas del navegador como rel = preconnect, rel = dns-prefetch, rel = prefetch y rel = precarga, y cómo usarlas para su ventaja.

## Documentacion adicional

- [Caso de negocio para rendimiento web](/es/docs/Learn/Performance/business_case_for_performance)
  - : Usted sabe que el rendimiento web es importante, pero ¿cómo convencer a los clientes y a la administrativos para que inviertan en el rendimiento y lo conviertan en una prioridad? En este artículo, discutiremos la creación de un caso de negocio claro para convencer a los tomadores de decisiones para que hagan la inversión.
- [Presupuestos de rendimiento](/es/docs/Web/Performance/Performance_budget)
  - : Las necesidades de mercadotecnia, diseño y ventas, y la experiencia del desarrollador, grandes anuncios, scripts de terceros y otras características que pueden ralentizar el rendimiento web. Para ayudar a establecer prioridades, es útil establecer un presupuesto de desempeño: un conjunto de restricciones que no deben excederse durante la fase de desarrollo. En este artículo, analizaremos la creación y el apego a un presupuesto de rendimiento.
- [Lista de pendientes de rendimiento móvil](/es/docs/Web/Performance/Mobile_performance_checklist)
  - : Una lista de pendientes concisa de las consideraciones de rendimiento que afectan a los usuarios de redes móviles en dispositivos portátiles que funcionan con baterías.
- [Optimización del rendimiento de inicio](/es/docs/Web/Performance/Optimizing_startup_performance)
  - : ¿Cuánto tiempo demora su aplicación en iniciarse? ¿Bloquea el navegador mientras se carga? Tómese el tiempo para asegurarse de que su aplicación se inicie bien. Este artículo ofrece consejos y sugerencias para ayudarle a alcanzar ese objetivo.
- [Funciones de rendimiento en las herramientas de desarrollo](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html)
  - : This section provides information on how to use and understand the performance features in your developer tools, including [Waterfall](https://profiler.firefox.com/docs/), [Call Tree](https://profiler.firefox.com/docs/), and [Flame Charts](https://profiler.firefox.com/docs/).
    Esta sección proporciona información sobre cómo utilizar y comprender las funciones de rendimiento en sus herramientas de desarrollador, incluidos [gráficos de cascada](https://profiler.firefox.com/docs/), [árbol de llamadas](https://profiler.firefox.com/docs/) y [gráficos de llamas](https://profiler.firefox.com/docs/)

<!---->

- [Entendiendo la latencia](/es/docs/Learn/Performance/Latency)
  - : La latencia es la cantidad de tiempo que se tarda entre realizar una solicitud de un recurso y recibir el primer byte del recurso solicitado. Este artículo explica qué es la latencia, cómo afecta el rendimiento y cómo medir y mejorar la latencia.
- [Lista de control de rendimiento web](/es/docs/Web/Performance/Checklist)
  - : Una lista de verificación del rendimiento de las funciones que se deben tener en cuenta al desarrollar aplicaciones con enlaces a tutoriales sobre cómo implementar cada una de ellas, incluye service workers, diagnóstico de problemas de rendimiento, mejores prácticas de carga de fuentes, sugerencias para los clientes, creación de animaciones optimizadas, etc.

### Rendimiento de aplicaciones

- [Fundamentos de rendimiento](/es/docs/Web/Aplicaciones/Developing/Performance/Performance_fundamentals)
  - : Una visión general del rendimiento de las aplicaciones web, qué es, cómo el navegador ayuda a mejorarlo, y qué herramientas y procesos puede utilizar para probar y mejorarlo aún más.
- [Optimizando el rendimiento de inicio](/es/docs/Web/Aplicaciones/Developing/Performance/Optimizing_startup_performance)
  - : Consejos y sugerencias para ayudarlo a mejorar el rendimiento de inicio, tanto al escribir una nueva aplicación como al migrar una aplicación de otra plataforma a la Web.
- [Profiling con el profiler integrado](/es/docs/Performance/Profiling_with_the_Built-in_Profiler)
  - : Aprenda como rastrear el performance de las aplicaciones con el profiler integrado de Firefox.
- [Rendimiento en animaciones con CSS y con JavaScript](/es/docs/Web/Aplicaciones/Build/Performance/CSS_JavaScript_animation_performance)
  - : Las animaciones son críticas para una experiencia de usuario placentera. Este artículo analiza las diferencias de rendimiento entre las animaciones basadas en CSS y JavaScript.

{{LandingPageListSubpages}}

## Ver También

HTML

- [El elemento `<picture>`](/es/docs/Web/HTML/Element/picture)
- [El elemento `<video>`](/es/docs/Web/HTML/Element/video)
- [El elemento `<source>`](/es/docs/Web/HTML/Element/source)
- [El atributo `<img> srcset`](/es/docs/Web/HTML/Element/img#attributes)

  - [Imagenes responsivas](/es/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)

- [Precargando contenido con `rel="preload"`](/es/docs/Web/HTML/Attributes/rel/preload) - [(https://w3c.github.io/preload/](https://w3c.github.io/preload/))

CSS

- [will-change](/es/docs/Web/CSS/will-change)
- GPU v CPU
- Midiendo disposición del diseño
- Mejores practicas en carga de fuentes

JavaScript

- [DOMContentLoaded](/es/docs/Web/API/Document/DOMContentLoaded_event)
- [Recolector de basura](/es/docs/Glossary/Garbage_collection)
- [requestAnimationFrame](/es/docs/Web/API/Window/requestAnimationFrame)

APIs

- [Performance API](/es/docs/Web/API/Performance_API)
- [Navigation Timing API](/es/docs/Web/API/Performance_API/Navigation_timing)
- [Media Capabilities API](/es/docs/Web/API/Media_Capabilities_API/Using_the_Media_Capabilities_API)
- [Network Information API](/es/docs/Web/API/Network_Information_API)
- [PerformanceNavigationTiming](/es/docs/Web/API/PerformanceNavigationTiming)
- [Battery Status API](/es/docs/Web/API/Battery_Status_API)
- [Navigator.deviceMemory](/es/docs/Web/API/Navigator/deviceMemory)
- [Intersection Observer](/es/docs/Web/API/Intersection_Observer_API)
- [Using the User Timing AP](/es/docs/Web/API/Performance_API/User_timing)I
- [Long Tasks API](/es/docs/Web/API/PerformanceLongTaskTiming)
- [High Resolution Timing API](/es/docs/Web/API/DOMHighResTimeStamp) ([https://w3c.github.io/hr-time/)](https://w3c.github.io/hr-time/)
- [Resource Timing API](/es/docs/Web/API/Performance_API/Resource_timing)
- [Page Visibility](/es/docs/Web/API/Page_Visibility_API)
- [Cooperative Scheduling of Background Tasks API](/es/docs/Web/API/Background_Tasks_API)

  - [requestIdleCallback()](/es/docs/Web/API/Window/requestIdleCallback)

- [Beacon API](/es/docs/Web/API/Beacon_API)
- Resource Hints - [dns-prefetch](/es/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control), preconnect, [prefetch](/es/docs/Glossary/Prefetch), and prerender
- [Fetchevent.navigationPreload](/es/docs/Web/API/FetchEvent/preloadResponse)
- [Performance Server Timing API](/es/docs/Web/API/PerformanceServerTiming)

Headers

- [Content-encoding](/es/docs/Web/HTTP/Headers/Content-Encoding)
- HTTP/2
- [gZip](/es/docs/Glossary/GZip_compression)
- Client Hints

Tools

- [Performance in Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html)
- Flame charts
- the Network panel
- waterfall charts

Additional Metrics

- Speed Index and Perceptual Speed Index

Best Practices

- [Using Service Workers](/es/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Using Web Workers](/es/docs/Web/API/Web_Workers_API/Using_web_workers)

  - [Web Workers API](/es/docs/Web/API/Web_Workers_API)

- [PWA](/es/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers)
- [Caching](/es/docs/Web/HTTP/Caching)
- Content Delivery Networks (CDN)
