---
title: Instalación de software básico
slug: Learn/Getting_started_with_the_web/Installing_basic_software
tags:
  - Aprender
  - Configuración
  - Herramientas
  - Navegadores
  - Novato
  - Principiantes
  - aprende
  - buscador
  - editor de textos
  - instalar
  - l10n:priority
translation_of: Learn/Getting_started_with_the_web/Installing_basic_software
original_slug: Learn/Getting_started_with_the_web/Instalacion_de_software_basico
---
<div>{{LearnSidebar}}</div>

<div>{{NextMenu("Learn/Getting_started_with_the_web/What_will_your_website_look_like", "Learn/Getting_started_with_the_web")}}</div>

<div class="summary">
<p>La <em>Instalación de software básico</em>, te muestra las herramientas que necesitas para hacer el desarrollo web simple, y la forma de instalarlas correctamente.</p>
</div>

<h2 id="¿Qué_herramientas_usan_los_profesionales">¿Qué herramientas usan los profesionales?</h2>

<ul>
 <li><strong>Una computadora</strong>. Tal vez esto suena obvio para algunas personas, pero habrá quien esté leyendo este artículo desde el móvil o una computadora de biblioteca. Para el desarrollo web serio, es mejor invertir en un equipo de escritorio o portátil con Windows, Mac o Linux.</li>
 <li><strong>Un editor de texto</strong>, para escribir código. Puedes usar un editor de texto libre (ej. <a href="http://brackets.io/">Brackets</a>, <a href="https://atom.io/">Atom</a>, <a href="https://notepad-plus-plus.org/">Notepad++</a>, <a href="https://www.sublimetext.com/">Sublime Text</a>, <a href="https://www.gnu.org/software/emacs/">GNU Emacs</a>, <a href="https://www.vim.org/">VIM</a>, <a href="https://code.visualstudio.com/">Visual Studio Code</a>, <a href="https://www.jetbrains.com/webstorm/">WebStorm</a>) o un editor híbrido (<a href="https://www.adobe.com/products/dreamweaver.html">Dreamweaver</a>). Los editores de documentos de oficina no son adecuados para esto, pues dependen de elementos ocultos que interfieren con los motores de renderizado usados por los navegadores.</li>
 <li><strong>Navegadores web</strong>, para probar el código. Actualmente los navegadores más usados son <a href="https://www.mozilla.org/en-US/firefox/new/">Firefox</a>, <a href="https://www.google.com/chrome/browser/">Chrome</a>, <a href="http://www.opera.com/">Opera</a>, <a href="https://www.apple.com/safari/">Safari</a>, <a href="https://vivaldi.com/es/">Vivaldi</a>, <a href="http://windows.microsoft.com/en-us/internet-explorer/download-ie">Internet Explorer</a> y <a href="https://www.microsoft.com/en-us/windows/microsoft-edge">Microsoft Edge</a>. También debes comprobar cómo funciona tu web en dispositivos móviles y en cualquier navegador antiguo que tu público objetivo pueda estar usando aún (tal como IE 6–8.)</li>
 <li><strong>Un editor de gráficos o imágenes</strong>, como <a href="http://www.gimp.org/">GIMP</a>, <a href="http://www.getpaint.net/">Paint.NET</a> o <a href="https://www.adobe.com/products/photoshop.html">Photoshop</a>, para crear imágenes para tus páginas web.</li>
 <li><strong>Un sistema de control de versiones</strong>, para administrar archivos en servidores, colaborar en un proyecto con un equipo, compartir código y recursos, y evitar conflictos de edición. Hoy en día <a href="http://git-scm.com/">Git</a> es el sistema de control de versiones más popular y el servicio de alojamiento de código <a href="https://github.com/">GitHub</a>, basado en Git, también es muy popular.</li>
 <li><strong>Un programa de FTP</strong>, para cargar páginas web en un servidor para el público (Git está reemplazando cada vez más a FTP para ese fin). Hay un montón de estos programas disponibles incluyendo <a href="https://cyberduck.io/">Cyberduck</a>, <a href="http://fetchsoftworks.com/">Fetch</a> y <a href="https://filezilla-project.org/">FileZilla</a>.</li>
 <li><strong>Un sistema de automatización</strong>, como <a href="http://gruntjs.com/">Grunt</a> o <a href="http://gulpjs.com/">Gulp</a> para realizar tareas repetitivas de forma automática, por ejemplo minimización de código y ejecución de pruebas.</li>
 <li>Bibliotecas, marcos de desarrollo (<code>frameworks</code>), etc., para acelerar la escritura de funciones comunes. Una biblioteca tiende a ser un archivo JavaScript o CSS existente que proporciona una funcionalidad lista para usar para que la utilices en tu código. Un framework tiende a llevar esta idea más allá, ofreciendo un sistema completo con alguna sintaxis personalizada para que puedas escribir una aplicación web basada en él.</li>
 <li>¡Muchas más herramientas!</li>
</ul>

<h2 id="Ahora_mismo_¿qué_herramientas_necesitas_realmente">Ahora mismo: ¿qué herramientas necesitas realmente?</h2>

<p>Esto parece una lista espeluznante pero, afortunadamente, puedes comenzar a trabajar en el desarrollo web sin saber nada de la mayoría de estas herramientas. En este artículo solo tendrás que configurar lo mínimo: un editor de texto y algunos navegadores web modernos.</p>

<h3 id="Instalación_de_un_editor_de_texto">Instalación de un editor de texto</h3>

<p>Probablemente ya tengas un editor de texto básico instalado en tu computadora. De manera predeterminada Windows incluye el {{Interwiki("wikipedia", "Bloc de notas")}} y OS X viene con {{Interwiki("wikipedia", "TextEdit")}}. Las <em>distros</em> (versiones) de Linux varían: Ubuntu viene con {{Interwiki("wikipedia", "Gedit")}}; distribuciones basadas en KDE suelen traer <a href="http://kate-editor.org/">Kate</a> o <a href="https://es.wikipedia.org/wiki/KWrite">Kwrite</a>.</p>

<p>Para el desarrollo Web, probablemente hay cosas mejores que el Bloc de notas o TextEdit. Una recomendación puede ser empezar con <a href="http://brackets.io">Brackets</a>, un editor gratuito que ofrece vistas previas en vivo y sugerencias de código.</p>

<h3 id="Instalación_de_navegadores_web_modernos">Instalación de navegadores web modernos</h3>

<p>Por ahora, solo tendrás que instalar un par de navegadores web de escritorio para poner a prueba tu código. Selecciona tu sistema operativo y pulsa los enlaces pertinentes para descargar los instaladores de tus navegadores preferidos:</p>

<ul>
 <li>Linux: <a href="https://www.mozilla.org/es-ES/firefox/new/">Firefox</a>, <a href="https://www.google.com/chrome/browser/">Chrome</a>, <a href="http://www.opera.com/es/">Opera</a>, <a href="https://vivaldi.com/es/">Vivaldi</a>.</li>
 <li>Windows: <a href="https://www.mozilla.org/es-ES/firefox/new/">Firefox</a>, <a href="https://www.google.com/chrome/browser/">Chrome</a>, <a href="http://www.opera.com/es/">Opera</a>, <a href="https://vivaldi.com/es/">Vivaldi</a>, <a href="http://windows.microsoft.com/en-us/internet-explorer/download-ie">Internet Explorer</a> (si tienes Windows 8 o superior, puedes instalar IE 10 o posterior, de lo contrario, deberías instalar un navegador alternativo).</li>
 <li>Mac: <a href="https://www.mozilla.org/es-ES/firefox/new/">Firefox</a>, <a href="https://www.google.com/chrome/browser/">Chrome</a>, <a href="http://www.opera.com/es/">Opera</a>, <a href="https://vivaldi.com/es/">Vivaldi</a>, <a href="https://www.apple.com/safari/">Safari</a> (Safari de manera predeterminada viene con iOS y OS X)</li>
</ul>

<p>Antes de continuar, deberías instalar al menos dos de estos navegadores y tenerlos disponibles para pruebas.</p>

<div class="blockIndicator note">
<p><strong>Nota</strong>: Internet Explorer no es compatible con algunas funciones web modernas y es posible que no puedas ejecutar tu proyecto. Por lo general, no necesitas preocuparte por hacer que tus proyectos web sean compatibles con él, ya que muy pocas personas todavía lo usan; ciertamente, no te preocupes demasiado por él mientras aprendes. En ocasiones, es posible que te encuentres con un proyecto que requiera soporte.</p>
</div>

<h3 id="Instalación_de_un_servidor_web_local">Instalación de un servidor web local</h3>

<p>Algunos ejemplos necesitarás ejecutarlos a través de un servidor web para que funcionen exitosamente. Puedes encontrar cómo hacer esto en {{web.link("/es/docs/Learn/Common_questions/set_up_a_local_testing_server", "¿Cómo se configura un servidor de prueba local?")}}</p>

<p>{{NextMenu("Learn/Getting_started_with_the_web/What_will_your_website_look_like", "Learn/Getting_started_with_the_web")}}</p>

<h2 id="En_este_módulo">En este módulo</h2>

<ul>
 <li id="Instalacion_de_software_basico">{{web.link("/es/Learn/Getting_started_with_the_web/Instalacion_de_software_basico", "Instalación de software básico")}}</li>
 <li id="Como_se_vera_tu_sitio_web">{{web.link("/es/Learn/Getting_started_with_the_web/What_will_your_website_look_like", "¿Cómo se verá tu sitio web?")}}</li>
 <li id="Manejo_de_archivos">{{web.link("/es/Learn/Getting_started_with_the_web/Manejando_los_archivos", "Manejo de archivos")}}</li>
 <li id="Conceptos_basicos_de_HTML">{{web.link("/es/Learn/Getting_started_with_the_web/HTML_basics", "Conceptos básicos de HTML")}}</li>
 <li id="Conceptos_basicos_de_CSS">{{web.link("/es/Learn/Getting_started_with_the_web/CSS_basics", "Conceptos básicos de CSS")}}</li>
 <li id="Conceptos_basicos_de_JavaScript">{{web.link("/es/Learn/Getting_started_with_the_web/JavaScript_basics", "Conceptos básicos de JavaScript")}}</li>
 <li id="Publicar_tu_sitio_web">{{web.link("/es/Learn/Getting_started_with_the_web/Publishing_your_website", "Publicar tu sitio web")}}</li>
 <li id="Como_funciona_la_web">{{web.link("/es/docs/Learn/Getting_started_with_the_web/Cómo_funciona_la_Web", "Cómo funciona la Web")}}</li>
</ul>
