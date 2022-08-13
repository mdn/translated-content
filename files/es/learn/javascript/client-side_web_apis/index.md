---
title: Client-side web APIs
slug: Learn/JavaScript/Client-side_web_APIs
tags:
  - API
  - Articles
  - Beginner
  - CodingScripting
  - DOM
  - Graphics
  - JavaScript
  - Landing
  - Learn
  - Media
  - Module
  - NeedsTranslation
  - TopicStub
  - WebAPI
  - data
translation_of: Learn/JavaScript/Client-side_web_APIs
---
<div>{{LearnSidebar}}</div>

<p class="summary">Cuando se escribe JavaScript para sitios web o aplicaciones del lado del cliente, no pasará mucho tiempo antes de que comience a usar APIs ("Application Programming Interfaces"). Estas son interfaces para manipular diferentes aspectos del navegador y el sistema operativo sobre el cuál se esta ejecutando, o incluso datos de otros sitios web o servicios. En este módulo, vamos a aprender que son las APIs  y cómo utilizar algunas de las API más comunes que encuentran al momento de desarrollar. </p>

<h2 id="Requisitos">Requisitos</h2>

<p>Para aprovechar al máximo este módulo, debería haber trabajado con los módulos anteriores de JavaScript (<a href="/en-US/docs/Learn/JavaScript/First_steps">Primeros Pasos</a>, <a href="https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks">Bloques de construcción</a>, y <a href="https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects">Objetos en JavaScript</a>). De todos modos, esos módulos involucran el uso de varias APIs simples, ya que es dificil escribir ejemplos en Javascript del lado del cliente sin dar uso de ellos! Para este tutorial, asumiremos que se tiene conocimiento basico sobre JavaScript  y exploraremos las API web mas comunes con un poco más de detalle.</p>

<p>Conocimiento basico de <a href="/en-US/docs/Learn/HTML">HTML</a> y <a href="/en-US/docs/Learn/CSS">CSS</a> tambien seria util.</p>

<div class="note">
<p><strong>Nota</strong>: Si está trabajando en un dispositivo en el que no tiene la capacidad de crear sus propios archivos, puede probar (la mayoría de) los ejemplos de código en un programa de codificación en línea como <a href="http://jsbin.com/">JSBin</a> o <a href="https://thimble.mozilla.org/">Thimble</a>.</p>
</div>

<h2 id="Guías">Guías</h2>

<dl>
 <dt><a href="/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction">Introducción a web APIs</a></dt>
 <dd>En primer lugar, comenzaremos observando las API de alto nivel: ¿qué son, cómo funcionan, cómo las utilizan en su código y cómo están estructuradas? También veremos cuáles son las diferentes principales clases de APIs y qué tipo de usos tienen.</dd>
 <dt><a href="/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents">Manipulacion de documentos</a></dt>
 <dd>Al escribir páginas web y aplicaciones, una de las cosas más comunes que querrás hacer es manipular los documentos web de alguna manera. Esto generalmente se hace usando el Document Object Model (DOM), un conjunto de APIs para controlar el HTML y la información de sus estilos que hace un uso intensivo del objeto  {{domxref("Document")}} . En este artículo, veremos cómo usar el DOM en detalle, junto con algunas otras API que pueden alterar su entorno de maneras interesantes.</dd>
 <dt><a href="/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data">Obteniendo data desde el servidor</a></dt>
 <dd>Otra tarea frecuente en las en las aplicaciones y los sitios web modernos, es recuperar los datos individuales de un elemento del seridor para actualizar solo una seccion de la pagina sin tener que cargar una pagina web completamente nueva. Este detalle, aparentemente pequeño, ha tenido un gran impacto en el rendimiento y el comportamiento de los sitios, En este artículo, explicaremos el concepto y veremos las tecnologías que hacen esto posible, como {{domxref("XMLHttpRequest")}} y el <a href="/en-US/docs/Web/API/Fetch_API">Fetch API</a>.</dd>
 <dt><a href="/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Third_party_APIs">APIs de terceros</a></dt>
 <dd>Las APIs que hemos cubierto hasta ahora están integradas en el navegador, pero no todas las APIs lo estan. Muchos grandes sitios web y servicios tales como Google Maps, Twitter, Facebook, PayPal, etc. proporcionan APIs que permiten a los desarrolladores hacer uso de sus datos (p.ej. mostrando tu actividad en twitter dentro de tu blog) o sus servicios (p.ej. mostrar una ubicacion personalizada porGoogle Maps en tu sitio, o usar el inicio de sesión de Facebook para que inicien sesión tus usuarios). Este artículo analiza la diferencia entre las API del navegador y las API de terceros y muestra algunos usos típicos de este último.</dd>
 <dt><a href="/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics">Dibujar gráficos</a></dt>
 <dd>El navegador contiene algunas herramientas de programación poderosas para gráficos, desde el lenguaje de Gráficos de Vectores Escalables (<a href="/en-US/docs/Web/SVG">SVG</a>), hasta APIs para dibujar elementos HTML {{htmlelement("canvas")}}, (ver <a href="/en-US/docs/Web/API/Canvas_API">El API Canvas</a> y <a href="/en-US/docs/Web/API/WebGL_API">WebGL</a>). Este articulo provee una introducción al Canvas API, y además recursos que te van a permirir aprender más.</dd>
 <dt><a href="/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs">APIs de audio y video</a></dt>
 <dd>HTML5 for embedding rich media in documents — {{htmlelement("video")}} and {{htmlelement("audio")}} — which in turn come with their own APIs for controlling playback, seeking, etc. This article shows you how to do common tasks such as creating custom playback controls.</dd>
 <dt><a href="/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage">Almacenamiento del lado del Cliente</a></dt>
 <dd>Modernos navegadores web implementan un número de diferente de tecnologías que te permiten almacenar datos relacionados a sitios y recuperarlos cuando sea necesario permitiendote almacenarlos por mucho tiempo, almacenar sitios fuera de linea, y más. Este articulo explica aspectos los principios de como trabaja.</dd>
</dl>
