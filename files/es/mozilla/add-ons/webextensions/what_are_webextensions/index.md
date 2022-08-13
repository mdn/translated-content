---
title: ¿Qué son las extensiones?
slug: Mozilla/Add-ons/WebExtensions/What_are_WebExtensions
tags:
  - WebExtensions
  - extensiones
translation_of: Mozilla/Add-ons/WebExtensions/What_are_WebExtensions
original_slug: Mozilla/Add-ons/WebExtensions/Que_son_las_WebExtensions
---
<div>{{AddonSidebar}}</div>

<p>Una extensión agrega características y funciones a un explorador. Se ha creado utilizando tecnologías basadas en Web conocidas: HTML, CSS y JavaScript. Puede aprovechar las mismas API Web que JavaScript en una página web, pero una extensión también tiene acceso a su propio conjunto de APIs de JavaScript. Esto significa que puede hacer mucho más en una extensión de lo que puede con el código en una página web. Estos son sólo algunos ejemplos de las cosas que puedes hacer:</p>

<p><strong>Mejore o complemente un sitio</strong>: Use un Add-on para ofrecer funciones adicionales en el navegador o información de su sitio Web. Permita a los usuarios recopilar detalles de las páginas que visitan para mejorar el servicio que ofrecen.</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/15808/Amazon_add_on.png"></p>

<p><strong>Ejemplos:</strong> <a href="https://addons.mozilla.org/en-US/firefox/addon/amazon-browser-bar/">El asistente de Amazon para Firefox</a>, <a href="https://addons.mozilla.org/en-US/firefox/addon/onenote-clipper/">OneNote Web Clipper</a> y <a href="https://addons.mozilla.org/en-US/firefox/addon/grammarly-1/">Grammarly para Firefox</a></p>

<p><strong>Permita que los usuarios demuestren su personalidad</strong>: Las extensiones del navegador pueden manipular el contenido de las páginas; por ejemplo, permite a los usuarios agregar su logo favorito o imágen como un fondo de pantalla acada página que visitan. Las extensiones permiten también al usuario actualizar el aspecto de la IU de Firefox, de la misma manera que lo hacen los <a href="https://developer.mozilla.org/es/docs/Temas/Theme_concepts">complementos de temas</a>.</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/15809/MyWeb_New_Tab_add_on.png" style="height: 398px; width: 540px;"></p>

<p><strong>Ejemplos:</strong> <a href="https://addons.mozilla.org/en-US/firefox/addon/myweb-new-tab/">MyWeb New Tab</a>, <a href="https://addons.mozilla.org/en-US/firefox/addon/tabliss/">Tabliss</a> y <a href="https://addons.mozilla.org/en-US/firefox/addon/vivaldifox/">VivaldiFox</a></p>

<p><strong>Agregar o quitar contenido de las páginas web</strong>: es posible que desee ayudar a los usuarios a bloquear los anuncios intrusivos de las páginas web, proporcionar acceso a una guía de viajes siempre que un país o ciudad se menciona en una página web, o reformatear el contenido de la página para ofrecer una experiencia de lectura consistente. Con la capacidad de acceder y actualizar tanto HTML como CSS de una página, las extensiones pueden ayudar a los usuarios a ver la Web de la manera que quieren.</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/15807/ublock_origin_add_on.png" style="height: 480px; width: 640px;"></p>

<p><strong>Ejemplos:</strong> <a href="https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/">Origen uBlock</a>, <a href="https://addons.mozilla.org/en-US/firefox/addon/reader/">Lector</a> y <a href="https://addons.mozilla.org/en-US/firefox/addon/toolbox-google-play-store/">Caja de Herramientas para Google Play Store™</a></p>

<p><strong>Agregar herramientas y nuevas funciones de navegación</strong>: añada nuevas funciones a un taskboard o genere imágenes de código QR a partir de URLs, hipervínculos o texto de página. Con opciones de interfaz de usuario flexibles y la potencia de las <a href="https://developer.mozilla.org/es/docs/Mozilla/Add-ons/WebExtensions">APIs de WebExtensions</a>, puede añadir fácilmente nuevas funcionalidades a un navegador. Usted puede realzar casi cualquier característica o funcionalidad de sitios web, no tiene que ser su web.</p>

<p><strong><img alt="" src="https://mdn.mozillademos.org/files/15806/QR_Code_Image_Generator_add_on.png"></strong></p>

<p><strong>Ejemplos: <a href="https://addons.mozilla.org/en-US/firefox/addon/qr-code-image-generator/">QR Code Image Generator</a>, <a href="https://addons.mozilla.org/en-US/firefox/addon/swimlanes-for-trello/">Swimlanes for Trello</a>, y <a href="https://addons.mozilla.org/en-US/firefox/addon/tomato-clock/">Tomato Clock</a></strong></p>

<p><strong>Juegos</strong>: ofrecer juegos de ordenador tradicionales, con características de juego fuera de línea, pero también explorar nuevas posibilidades de juego, por ejemplo, mediante la incorporación de gameplay en la navegación cotidiana.</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/15805/Asteroids_in_Popup_add_on%20.png" style="height: 438px; width: 700px;"></p>

<p>Ejemplos: <a href="https://addons.mozilla.org/en-US/firefox/addon/asteroids-in-popup/">Asteroids in Popup</a>, <a href="https://addons.mozilla.org/en-US/firefox/addon/solitaire-card-game-new-tab/">Solitaire Card Game New Tab</a>, and <a href="https://addons.mozilla.org/en-US/firefox/addon/2048-prime/">2048 Prime</a>.</p>

<p><strong>Agregar herramientas de desarrollo</strong>: puede proporcionar herramientas de desarrollo web como su negocio o ha desarrollado una técnica útil o un enfoque para el desarrollo web que desea compartir. De cualquier manera, puede mejorar las herramientas de desarrollo de Firefox incorporadas añadiendo una nueva ficha a la barra de herramientas del desarrollador.</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/15804/aXe_Developer_Tools_add_on.png" style="height: 261px; width: 700px;"></p>

<p><strong>Ejemplos:</strong> <a href="https://addons.mozilla.org/en-US/firefox/addon/web-developer/">Web Developer</a>, <a href="https://addons.mozilla.org/en-US/firefox/addon/react-devtools/">Web React Developer Tools</a>, and <a href="https://addons.mozilla.org/en-US/firefox/addon/axe-devtools/">aXe Developer Tools</a></p>

<p>Las extensiones para Firefox se construyen utilizando las <a href="https://developer.mozilla.org/es/docs/Mozilla/Add-ons/WebExtensions">APIs de WebExtensions</a>, un sistema multi-navegador para desarrollar extensiones. En gran medida, la API es compatible con la <a class="external external-icon" href="https://developer.chrome.com/extensions">extension API</a> soportada por Google Chrome y Opera. Extensiones escritas para estos navegadores en la mayoría de los casos se ejecutan en Firefox o Microsoft Edge con sólo unos pocos <a href="https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Porting_a_Google_Chrome_extension">cambios</a>. La API es también totalmente compatible con los <a href="https://developer.mozilla.org/en-US/Firefox/Multiprocess_Firefox">multiprocesos de Firefox</a>.</p>

<p>Si tiene ideas o preguntas, o necesita ayuda para migrar un Add-on heredado a las APIs de WebExtensions, puede comunicarse con nosotros en el<a class="external external-icon" href="https://mail.mozilla.org/listinfo/dev-addons">dev-addons mailing list</a> o en <a href="irc://irc.mozilla.org/extdev">#extdev</a> en <a class="external external-icon" href="https://wiki.mozilla.org/IRC">IRC</a>.</p>

<h2 id="¿Qué_sigue">¿Qué sigue?</h2>

<ul>
 <li>Para recorrer el desarrollo de una simple extensión, vea <a href="https://developer.mozilla.org/es/docs/Mozilla/Add-ons/WebExtensions/Tu_primera_WebExtension">Tu primera extensión</a>.</li>
 <li>Aprende sobre la estructura de una extensión en <a href="https://developer.mozilla.org/es/docs/Mozilla/Add-ons/WebExtensions/Anatomia_de_una_WebExtension">anatomía de una extensión</a>.</li>
 <li>Pruebe algunos ejemplos de extensiones en <a href="https://developer.mozilla.org/es/docs/Mozilla/Add-ons/WebExtensions/Examples">Extensiones de ejemplo</a>.</li>
</ul>
