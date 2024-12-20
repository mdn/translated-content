---
title: Client-side web APIs
slug: Learn_web_development/Extensions/Client-side_APIs
original_slug: Learn/JavaScript/Client-side_web_APIs
---

{{LearnSidebar}}

Cuando se escribe JavaScript para sitios web o aplicaciones del lado del cliente, no pasará mucho tiempo antes de que comience a usar APIs ("Application Programming Interfaces"). Estas son interfaces para manipular diferentes aspectos del navegador y el sistema operativo sobre el cuál se esta ejecutando, o incluso datos de otros sitios web o servicios. En este módulo, vamos a aprender que son las APIs y cómo utilizar algunas de las API más comunes que encuentran al momento de desarrollar.

## Requisitos

Para aprovechar al máximo este módulo, debería haber trabajado con los módulos anteriores de JavaScript ([Primeros Pasos](/es/docs/Learn/JavaScript/First_steps), [Bloques de construcción](/es/docs/Learn/JavaScript/Building_blocks), y [Objetos en JavaScript](/es/docs/Learn/JavaScript/Objects)). De todos modos, esos módulos involucran el uso de varias APIs simples, ya que es dificil escribir ejemplos en Javascript del lado del cliente sin dar uso de ellos! Para este tutorial, asumiremos que se tiene conocimiento basico sobre JavaScript y exploraremos las API web mas comunes con un poco más de detalle.

Conocimiento basico de [HTML](/es/docs/Learn/HTML) y [CSS](/es/docs/Learn/CSS) tambien seria util.

> [!NOTE]
> Si está trabajando en un dispositivo en el que no tiene la capacidad de crear sus propios archivos, puede probar (la mayoría de) los ejemplos de código en un programa de codificación en línea como [JSBin](https://jsbin.com/) o [Glitch](https://glitch.com/).

## Guías

- [Introducción a web APIs](/es/docs/Learn/JavaScript/Client-side_web_APIs/Introduction)
  - : En primer lugar, comenzaremos observando las API de alto nivel: ¿qué son, cómo funcionan, cómo las utilizan en su código y cómo están estructuradas? También veremos cuáles son las diferentes principales clases de APIs y qué tipo de usos tienen.
- [Manipulacion de documentos](/es/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)
  - : Al escribir páginas web y aplicaciones, una de las cosas más comunes que querrás hacer es manipular los documentos web de alguna manera. Esto generalmente se hace usando el Document Object Model (DOM), un conjunto de APIs para controlar el HTML y la información de sus estilos que hace un uso intensivo del objeto {{domxref("Document")}} . En este artículo, veremos cómo usar el DOM en detalle, junto con algunas otras API que pueden alterar su entorno de maneras interesantes.
- [Obteniendo data desde el servidor](/es/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data)
  - : Otra tarea frecuente en las en las aplicaciones y los sitios web modernos, es recuperar los datos individuales de un elemento del servidor para actualizar solo una seccion de la pagina sin tener que cargar una pagina web completamente nueva. Este detalle, aparentemente pequeño, ha tenido un gran impacto en el rendimiento y el comportamiento de los sitios, En este artículo, explicaremos el concepto y veremos las tecnologías que hacen esto posible, como {{domxref("XMLHttpRequest")}} y el [Fetch API](/es/docs/Web/API/Fetch_API).
- [APIs de terceros](/es/docs/Learn/JavaScript/Client-side_web_APIs/Third_party_APIs)
  - : Las APIs que hemos cubierto hasta ahora están integradas en el navegador, pero no todas las APIs lo estan. Muchos grandes sitios web y servicios tales como Google Maps, Twitter, Facebook, PayPal, etc. proporcionan APIs que permiten a los desarrolladores hacer uso de sus datos (p.ej. mostrando tu actividad en twitter dentro de tu blog) o sus servicios (p.ej. mostrar una ubicacion personalizada porGoogle Maps en tu sitio, o usar el inicio de sesión de Facebook para que inicien sesión tus usuarios). Este artículo analiza la diferencia entre las API del navegador y las API de terceros y muestra algunos usos típicos de este último.
- [Dibujar gráficos](/es/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics)
  - : El navegador contiene algunas herramientas de programación poderosas para gráficos, desde el lenguaje de Gráficos de Vectores Escalables ([SVG](/es/docs/Web/SVG)), hasta APIs para dibujar elementos HTML {{htmlelement("canvas")}}, (ver [El API Canvas](/es/docs/Web/API/Canvas_API) y [WebGL](/es/docs/Web/API/WebGL_API)). Este articulo provee una introducción al Canvas API, y además recursos que te van a permirir aprender más.
- [APIs de audio y video](/es/docs/Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs)
  - : HTML5 for embedding rich media in documents — {{htmlelement("video")}} and {{htmlelement("audio")}} — which in turn come with their own APIs for controlling playback, seeking, etc. This article shows you how to do common tasks such as creating custom playback controls.
- [Almacenamiento del lado del Cliente](/es/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage)
  - : Modernos navegadores web implementan un número de diferente de tecnologías que te permiten almacenar datos relacionados a sitios y recuperarlos cuando sea necesario permitiendote almacenarlos por mucho tiempo, almacenar sitios fuera de linea, y más. Este articulo explica aspectos los principios de como trabaja.
