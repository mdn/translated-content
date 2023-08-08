---
title: Rendimiento web
slug: Learn/Performance
---

{{LearnSidebar}}

La construcción de sitios web requiere HTML, CSS y JavaScript. Para crear sitios web y aplicaciones que la gente quiera usar, que atraigan y retengan a los usuarios, debe crear una buena experiencia de usuario. Parte de la buena experiencia del usuario es garantizar que el contenido se cargue rápidamente y responda a la interacción del usuario. Esto se conoce como rendimiento web, y en este módulo aprenderá todo lo que necesita para crear sitios web de rendimiento.

El rendimiento web es la medición objetiva y la experiencia percibida por el usuario del tiempo de carga y el tiempo de ejecución. El rendimiento web es el tiempo que tarda un sitio en cargarse, en ser interactivo y receptivo, y en el grado de fluidez del contenido durante las interacciones del usuario. ¿Es el desplazamiento suave? ¿Se puede hacer clic en los botones? ¿Las ventanas emergentes se abren rápidamente y se animan sin problemas al hacerlo? El rendimiento web incluye mediciones objetivas como el tiempo de carga, cuadros por segundo y tiempo para experiencias interactivas y subjetivas de cuánto tiempo tardó en cargarse el contenido.

Muchas características afectan el rendimiento, incluida la latencia, el tamaño de la aplicación, la cantidad de nodos DOM, la cantidad de solicitudes de recursos realizadas, el rendimiento de JavaScript, la carga de la CPU y más. Es importante minimizar los tiempos de carga y respuesta, y agregar funciones adicionales para ocultar la latencia al hacer que la experiencia sea lo más accesible e interactiva posible, tan pronto como sea posible, mientras se carga de forma asíncrona en las partes más largas de la experiencia.

Existen herramientas, API y mejores prácticas que nos ayudan a medir y mejorar el rendimiento web. Los veremos también en el curso de este módulo.

## Camino de aprendizaje

Si bien es necesario conocer HTML, CSS y JavaScript para implementar muchas recomendaciones de mejora del rendimiento web, saber cómo crear aplicaciones no es una condición previa necesaria para comprender y medir el rendimiento web.

Varios de los módulos introductorios a continuación no requieren conocimientos de programación, aunque se necesita una comprensión de HTML para el módulo de rendimiento y HTML, se necesita una comprensión de CSS para el módulo de rendimiento y CSS, etc. Recomendamos que trabaje con nuestros módulos introductorios. primero, comenzando con [qué es el rendimiento web](/es/docs/Learn/Performance/What_is_web_performance) primero. Los módulos introductorios proporcionan una visión general del rendimiento web. Los tres primeros deben considerarse como lectura obligatoria si usted es un desarrollador o gerente de proyectos. Los módulos enfocados en temas de tecnología son más apropiados para los desarrolladores que utilizan estas tecnologías.

Los módulos avanzados profundizan en los temas que se resumen en los módulos introductorios y proporcionan una visión general de las API de rendimiento, las herramientas de análisis y prueba y los problemas de cuellos de botella en el rendimiento.

Se recomienda que trabajes a través de [Empezando con la web](/es/docs/Learn/Getting_started_with_the_web) antes de proceder con este tema. Sin embargo, hacerlo no es absolutamente necesario.

## Modulos de introducción

Este tema contiene los siguientes módulos, en un orden sugerido para trabajar a través de ellos. Definitivamente debes comenzar con el primero.

- [¿Qué es el rendimiento web?](/es/docs/Learn/Performance/What_is_web_performance)
  - : Este artículo inicia el módulo con una buena visión de lo que realmente es el rendimiento: esto incluye las herramientas, métricas, API, redes y grupos de personas que debemos considerar al pensar en el rendimiento y cómo podemos hacer que el rendimiento sea parte de nuestra web. flujo de trabajo de desarrollo.
- [¿Cómo perciben los usuarios el rendimiento?](/es/docs/Learn/Performance/Perceived_performance)
  - : Más importante que la rapidez de su sitio web en milisegundos, es la rapidez con la que los usuarios perciben su sitio. Estas percepciones se ven afectadas por el tiempo real de carga de la página, el ralentí, la capacidad de respuesta a la interacción del usuario y la suavidad del desplazamiento y otras animaciones. En este artículo, analizamos las diversas métricas de carga, animación y métricas de capacidad de respuesta, junto con las mejores prácticas para mejorar la percepción del usuario, si no los tiempos reales.
- [Rendimiento web básico](/es/docs/Learn/Performance/Basics)
  - : Además de los componentes frontales de HTML, CSS, JavaScript y archivos multimedia, hay características que pueden hacer que las aplicaciones sean más lentas y características que pueden hacer que las aplicaciones sean subjetivamente y objetivamente más rápidas. Existen muchas API, herramientas de desarrollo, mejores prácticas y malas prácticas relacionadas con el rendimiento web. Aquí presentaremos muchas de estas funciones al nivel básico y proporcionaremos enlaces a inmersiones más profundas para mejorar el rendimiento de cada tema.
- [Herramientas de rendimiento HTML](/es/docs/Learn/Performance/HTML)
  - : Algunos atributos y el orden de origen de su marcado pueden afectar el rendimiento o su sitio web. Al minimizar el número de nodos DOM, asegurándose de que se utilicen el mejor orden y los atributos para incluir contenido como estilos, scripts, medios y scripts de terceros, puede mejorar drásticamente la experiencia del usuario. Este artículo analiza en detalle cómo se puede usar HTML para garantizar el máximo rendimiento.
- [Multimedia: imágenes y vídeo](/es/docs/Learn/Performance/Multimedia)
  - : El fruto más bajo del rendimiento web es a menudo la optimización de medios. Es posible servir diferentes archivos multimedia según la capacidad, el tamaño y la densidad de píxeles de cada agente de usuario. Sugerencias adicionales como eliminar pistas de audio de videos de fondo pueden mejorar aún más el rendimiento. En este artículo, analizamos el impacto que el video, el audio y el contenido de la imagen tienen en el rendimiento y los métodos para garantizar que el impacto sea lo más mínimo posible.
- Imágenes responsivas
  - : Si bien la optimización de imágenes es vital para las experiencias de usuario ricas en medios de alto rendimiento, es especialmente importante garantizar que las imágenes tengan el tamaño adecuado para los dispositivos que las descargan. En este artículo, analizaremos la función de las características del navegador nativo, como el elemento \<picture> y el atributo srcset en la entrega eficiente de imágenes, y cómo puede usarlas con confianza.
- Formatos de medios alternativos
  - : Cuando se trata de imágenes y videos, hay más formatos de los que probablemente conozca. Algunos de estos formatos pueden llevar sus páginas multimedia altamente optimizadas aún más lejos al ofrecer reducciones adicionales en el tamaño del archivo. En esta guía, analizaremos algunos formatos de medios alternativos, cómo usarlos de manera responsable para que los navegadores no compatibles no se queden al margen, y algunos consejos avanzados sobre la transcodificación de sus activos existentes.
- [Características de rendimiento en CSS](/es/docs/Learn/Performance/CSS)
  - : CSS puede ser un enfoque de optimización menos importante para mejorar el rendimiento, pero hay algunas características de CSS que afectan el rendimiento más que otras. En este artículo analizamos algunas propiedades CSS que afectan el rendimiento y sugerimos formas de manejar los estilos para garantizar que el rendimiento no se vea afectado negativamente.
- [Mejores prácticas de rendimiento en JavaScript](/es/docs/Learn/Performance/JavaScript)
  - : JavaScript, cuando se usa correctamente, puede permitir experiencias web interactivas e inmersivas, o puede dañar significativamente el tiempo de descarga, el tiempo de procesamiento, el rendimiento dentro de la aplicación, la duración de la batería y la experiencia del usuario. Este artículo describe algunas de las mejores prácticas de JavaScript que deben tenerse en cuenta para garantizar que incluso el contenido complejo tenga el mayor rendimiento posible.
- Rendimiento de fuentes web

  - : Un aspecto que a menudo se pasa por alto en el panorama del rendimiento son las fuentes web. Las fuentes web son más prominentes que nunca en el diseño web, sin embargo, muchos desarrolladores simplemente las incorporan desde un servicio de terceros y no piensan en ello. En este artículo, cubriremos métodos para obtener sus archivos de fuentes lo más pequeños posible con una configuración y sub configuración de archivos eficientes. A partir de ahí, continuaremos hablando sobre cómo los navegadores envían mensajes de texto y cómo puede usar las funciones de CSS y JavaScript para garantizar que sus fuentes se representen rápidamente y con una interrupción mínima de la experiencia del usuario.

- [Rendimiento móvil](/es/docs/Learn/Performance/Mobile)
  - : Dado que el acceso a la web en dispositivos móviles es tan popular, y que todas las plataformas móviles tienen navegadores web completos, pero es posible que el ancho de banda, la CPU y la vida útil de la batería sean limitados, es importante considerar el rendimiento de su contenido web en estas plataformas. Este artículo analiza las consideraciones de rendimiento específicas para dispositivos móviles.

## Módulos avanzados

- Poblando la página
  - : Se realiza una solicitud HTTP y, con suerte, unos segundos más tarde, aparece el sitio. Mostrar el contenido implica ejecutar JavaScript, posiblemente modificar el DOM, calcular estilos, calcular el diseño y, finalmente, representar el contenido, lo que implica pintar y componer, y puede involucrar la aceleración de la GPU en un hilo separado.
- [Entendiendo la latencia](/es/docs/Learn/Performance/Latency)
  - : La latencia es la cantidad de tiempo que tarda entre el navegador que realiza una solicitud de un recurso y el que recibe el primer byte del recurso solicitado. Este artículo explica qué es la latencia, cómo afecta el rendimiento y cómo medir y mejorar la latencia.
- Entendiendo el ancho de banda
  - : El ancho de banda es la cantidad de datos (medidos en Mbps o Kbps) que se pueden enviar por segundo. Este artículo explica la función del ancho de banda en las aplicaciones de Internet ricas en medios, cómo se puede medir y cómo se pueden optimizar las aplicaciones para aprovechar al máximo el ancho de banda disponible.
- HTTP/2 y tú
  - : La capa de transporte, es decir, HTTP, es absolutamente esencial para el funcionamiento de la web, y solo recientemente se ha visto una actualización importante en la forma de HTTP / 2. Fuera de la caja, HTTP / 2 proporciona muchas mejoras de rendimiento y ventajas sobre su predecesor, pero también cambia el panorama. En este artículo, aprenderá lo que HTTP / 2 hace por usted, y cómo ajustar su aplicación para que vaya más allá.
- El rol de TLS en el rendimiento
  - : TLS, o HTTPS, como solemos llamar, es crucial para crear experiencias de usuario seguras. Si bien el hardware ha reducido los impactos negativos que TLS ha tenido en el rendimiento del servidor, aún representa una porción sustancial del tiempo que pasamos esperando que los navegadores se conecten a los servidores. Este artículo explica el proceso de intercambio de TLS y ofrece algunos consejos para reducir este tiempo, como el grapado OCSP, los encabezados de precarga de HSTS y el posible papel de las sugerencias de recursos en el enmascaramiento de la latencia TLS para terceros.
- [Perfilando con el perfilador incorporado](/es/docs/Performance/Profiling_with_the_Built-in_Profiler)
  - : Aprenda cómo perfilar el rendimiento de la aplicación con el generador de perfiles integrado de Firefox.
- Gráficos de rendimiento de lectura
  - : Las herramientas del desarrollador proporcionan información sobre el rendimiento, la memoria y las solicitudes de red. Saber leer [tablas de cascada](/es/docs/Tools/Performance/Waterfall), [árboles de llamadas,](/es/docs/Tools/Performance/Call_Tree). Las herramientas del desarrollador proporcionan información sobre el rendimiento, la memoria y las solicitudes de red. Saber leer, [tablas de llamas](/es/docs/Tools/Performance/Flame_Chart), y [localizaciones](/es/docs/Tools/Performance/Allocations) en su navegador, las herramientas de desarrollo lo ayudarán a comprender los gráficos de cascada y llama en otras herramientas de rendimiento.
- [Rendimiento de animaciones en CSS y JavaScript](/es/Apps/Build/Performance/CSS_JavaScript_animation_performance)
  - : Las animaciones son críticas para una experiencia de usuario placentera. Este artículo analiza las diferencias de rendimiento entre CSS y animaciones basadas en JavaScript.
- Analizando paquetes de JavaScript
  - : Sin duda, JavaScript es una gran parte del desarrollo web moderno. Si bien siempre debe esforzarse por reducir la cantidad de JavaScript que utiliza en sus aplicaciones, puede ser difícil saber dónde comenzar. En esta guía, le mostraremos cómo analizar los paquetes de scripts de su aplicación, para que sepa qué está utilizando y cómo detectar si hay scripts duplicados entre paquetes en su aplicación.
- Lazy-loading JavaScript con importaciones dinámicas
  - : Cuando los desarrolladores escuchan el término "carga perezosa", inmediatamente piensan en imágenes que se cargan por la mitad inferior de la página cuando se desplaza hacia la ventana gráfica. ¿Pero sabías que también puedes cargar JavaScript de forma perezosa? En esta guía hablaremos sobre la declaración dinámica de importación (), que es una característica de los navegadores modernos que carga un módulo de JavaScript a pedido. Por supuesto, ya que esta función no está disponible en todas partes, también le mostraremos cómo puede configurar sus herramientas para usar esta función de una manera ampliamente compatible.
- Controlar la entrega de recursos con sugerencias de recursos
  - : Los navegadores a menudo saben mejor que nosotros cuando se trata de la priorización y la entrega de recursos, pero están lejos de ser clarividentes. Las características nativas del navegador nos permiten sugerirle al navegador cuándo debe conectarse a otro servidor, o precargar un recurso antes de que el navegador sepa que lo necesita. Cuando se usa juiciosamente, esto puede hacer que la experiencia rápida parezca aún más rápida. En este artículo, cubrimos las características nativas del navegador como rel = preconnect, rel = dns-prefetch, rel = prefetch, y rel = precarga, y cómo usarlas para su ventaja.

## Véase también

- [Lista de verificación de rendimiento móvil](/es/docs/Web/Performance/Mobile_performance_checklist)
- [Optimización del rendimiento de inicio](/es/docs/Web/Apps/Fundamentals/Performance/Optimizing_startup_performance)

{{LandingPageListSubpages}}
