---
title: Programación lado servidor
slug: Learn/Server-side
tags:
  - Aprendizaje
  - Aterrizaje
  - Codificación de scripts
  - Principiante
  - Programación lado servidor
  - Servidor
  - Tema
  - introducción
translation_of: Learn/Server-side
---
<div>{{LearnSidebar}}</div>

<p class="summary">El tema<strong><em> Páginas Dinámicas </em></strong>–<em><strong> Programación lado servidor </strong></em>contiene una serie de módulos en los que se enseña como crear sitios web dinámicos, sitios que entregan información personalizada como respuesta a las peticiones HTTP. El modulo ofrece una introducción generica a la programación de lado servidor además de guías para principiantes sobre como usar frameworks como Django (Python) y Express(Node.js/JavaScript) para crear aplicaciones web basicas.</p>

<p>La mayoría de los principales sitios web utilizan alguna forma de tecnología de lado servidor para presentar dinámicamente datos cuando sean requeridos. Por ejemplo, imagina cuántos productos están disponibles en Amazon e imagina cuántas entradas han sido escritas en Facebook. Presentar todo esto usando páginas estáticas completamente diferentes sería completamente ineficiente, por lo que estos sitios en lugar de ello presentan plantillas estáticas (construidas usando <a href="/en-US/docs/Learn/HTML">HTML</a>, <a href="/en-US/docs/Learn/CSS">CSS</a>, y <a href="/en-US/docs/Learn/JavaScript">JavaScript</a>), y actualizan dinámicamente los datos presentados dentro de esas plantillas cuando se necesiten, ej. cuando quieres ver un producto diferente en Amazon.</p>

<p>En el mundo moderno del desarrollo web, el aprendizaje del desarrollo de lado servidor es altamente recomendado.</p>

<h2 id="Itinerario_de_aprendizaje">Itinerario de aprendizaje</h2>

<p>Empezar con la programación lado servidor es normalmente más fácil que con el desarrollo del lado cliente, ya que los sitios web dinámicos tienden a efectuar un montón de operaciones muy similares (recuperar datos de una base y presentarlos en una página, validar datos introducidos por los usuarios y guardarlos en la base, comprobar los permisos e inicios de sesión de los usuarios, etc.), y se construyen usando web frameworks que hacen muy facilmente éstas y otras operaciones comunes en un servidor web.</p>

<p>Un conocimiento básico de conceptos de programación (o de un lenguaje de programación en particular) es útil, pero no imprescindible. Igualmente, no hace falta ser un experto en codificación lado cliente, pero un conocimiento básico te ayudará a trabajar mejor con los desarrolladores creando tu "front-end" de web lado cliente.</p>

<p>Necesitarás entender "cómo tabaja la web". Te recomendamos que leas primero los siguientes temas:</p>

<ul>
 <li><a href="https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_web_server">¿Qué es un servidor web?</a></li>
 <li><a href="/en-US/docs/Learn/Common_questions/What_software_do_I_need">¿Qué software necesito para construir un sitio web?</a></li>
 <li><a href="/en-US/docs/Learn/Common_questions/Upload_files_to_a_web_server">¿Cómo subo ficheros a un servidor web?</a></li>
</ul>

<p>Con ese conocimiento básico estarás preparado para recorrer el camino a través de los módulos de esta sección.</p>

<h2 id="Módulos">Módulos</h2>

<p>Este tema contiene los siguientes módulos. Deberías comenzar por el primer módulo y a continuación  ir a uno de los módulos siguientes, que muestran cómo trabajar con dos lenguajes muy populares de lado servidor usando los web frameworks adecuados.</p>

<dl>
 <dt><a href="https://developer.mozilla.org/es/docs/Learn/Server-side/Primeros_pasos">Primeros pasos en la programación lado servidor de sitios web</a></dt>
 <dd>Este módulo proporciona información acerca de la programación lado servidor de sitios web sin adentrarse en la tecnología de los servidores, incluyendo respuestas a las preguntas a cuestiones fundamentales acerca de la programación de lado servidor — "¿qué es?", "¿en qué se diferencia de la programación de lado cliente?" y "¿porqué es tan útil?" — y una visión general de algunos de los web frameworks de lado servidor más populares e indicaciones de cómo seleccionar el más adecuado para tu sitio. Finalmente proporcionaremos una sección de introducción a la seguridad en servidores web.</dd>
 <dt><a href="https://developer.mozilla.org/es/docs/Learn/Server-side/Django">Django Web Framework (Python)</a></dt>
 <dd>Django es un web framework extremadamete popular y con funcionalidad completa, escrito en Python. El módulo explica porqué Django es tan buen framework de servidor web, cómo configurar un entorno de desarrollo y cómo realizar tareas comunes con él.</dd>
 <dt><a href="https://developer.mozilla.org/es/docs/Learn/Server-side/Express_Nodejs">Express Web Framework (Node.js/JavaScript)</a></dt>
 <dd>Express es un web framework popular, escrito en JavaScript y hospedado dentro del entorno de ejecución en tiempo real "node.js". El módulo explica algunos de los beneficios clave de este framework, cómo configurar tu entorno de desarrollo y cómo realizar tareas comunes de desarrollo y despliegue web.</dd>
</dl>

<h2 id="Ver_también">Ver también</h2>

<dl>
 <dt><a href="https://developer.mozilla.org/es/docs/Learn/Server-side/Node_server_without_framework">Node servidor sin framework</a></dt>
 <dd>Este artículo proporciona un servidor de ficheros estático, construido con Node.js puro, para aquellos de vosotros que no os apetezca usar un framework.</dd>
</dl>
