---
title: Aplicaciones Web Progresivas
slug: Web/Progressive_web_apps
tags:
  - Aplicaciones Web
  - Aplicaciones web modernas
  - Aplicación Web Progresiva
  - Aplicación web
  - PWA
  - aplicación
translation_of: Web/Progressive_web_apps
---

<p class="summary"><img alt="Logotipo de la comunidad PWA" src="https://mdn.mozillademos.org/files/16742/pwa.png" style="display: block; float: left; height: 188px; margin: 0px auto; padding-bottom: 1em; padding-right: 2em; width: 350px;">Las <strong><em>aplicaciones web progresivas</em></strong> (mejor conocidas como <strong>PWA</strong>s por «<em><strong>P</strong>rogressive <strong>W</strong>eb <strong>A</strong>pps</em>») son aplicaciones web que utilizan APIs y funciones emergentes del navegador web junto a una estrategia tradicional de mejora progresiva para ofrecer una aplicación nativa —como la experiencia del usuario para aplicaciones web multiplataforma. Las aplicaciones web progresivas son un patrón de diseño útil, aunque no son un estándar formalizado. Se puede pensar que PWA es similar a AJAX u otros patrones similares que abarcan un conjunto de atributos de aplicación, incluido el uso de tecnologías y técnicas web específicas. Este conjunto de documentos te dice todo lo que necesitas saber sobre ellas.</p>

<p>Para poder llamar PWA a una aplicación web, técnicamente hablando debe tener las siguientes características: {{web.link("/es/docs/Web/Security/Secure_Contexts", "Contexto seguro")}} (<strong>{{Glossary("HTTPS")}}</strong>), uno o más {{web.link("/es/docs/Web/API/Service_Worker_API", "Servicio Workers")}} y un {{web.link("/es/docs/Web/Manifest", "archivo de manifiesto")}}.</p>

<dl>
 <dt>{{web.link("/es/docs/Web/Security/Secure_Contexts", "Contexto seguro")}} ({{Glossary("HTTPS")}})</dt>
 <dd>La aplicación web se debe servir a través de una red segura. Ser un sitio seguro no solo es una buena práctica, sino que también establece tu aplicación web como un sitio confiable, especialmente si los usuarios necesitan realizar transacciones seguras. La mayoría de las funciones relacionadas con una PWA, como la geolocalización e incluso los servicios <em>workers</em>, solamente están disponibles cuando la aplicación se ha cargado mediante HTTPS.</dd>
 <dt>{{web.link("/es/docs/Web/API/Service_Worker_API", "Servicio workers")}}</dt>
 <dd>Un servicio <em>worker</em> es un script que permite interceptar y controlar cómo un navegador web maneja tus solicitudes de red y el almacenamiento en caché de activos. Con los servicios <em>worker</em>, los desarrolladores web pueden crear páginas web rápidas y fiables junto con experiencias fuera de línea.</dd>
 <dt>{{web.link("/es/docs/Web/Manifest", "El archivo manifest")}}</dt>
 <dd>Un archivo {{Glossary("JSON")}} que controla cómo se muestra tu aplicación al usuario y garantiza que las aplicaciones web progresivas sean detectables. Describe el nombre de la aplicación, la URL de inicio, los iconos y todos los demás detalles necesarios para transformar el sitio web en un formato similar al de una aplicación.</dd>
</dl>

<h2 id="Ventajas_de_PWA">Ventajas de PWA</h2>

<p>Las PWA deben ser detectables, instalables, enlazables, independientes de la red, progresivas, reconectables, responsivas y seguras. Para obtener más información sobre lo que esto significa, lee {{web.link("/es/docs/Web/Progressive_web_apps/Advantages", "Ventajas de las aplicaciones web progresivas")}}.</p>

<p>Para saber cómo implementar PWA, lee la {{web.link("/es/docs/Web/Progressive_web_apps/Developer_guide", "guía para desarrolladores de PWA")}}.</p>

<h2 id="Documentación">Documentación</h2>

<p><strong>&lt;-- La lista automática temporal a continuación se reemplazará pronto --&gt;</strong></p>

<p>{{LandingPageListSubpages}}</p>

<div class="blockIndicator warning">
<p><strong>Todo lo que se encuentra debajo de este punto es un remanente de la versión anterior de esta página y se renovará a medida que se revise el resto del contenido.</strong></p>
</div>

<h2 id="Guías_del_núcleo_de_PWA">Guías del núcleo de PWA</h2>

<p>Las siguientes guías te muestran lo que debes hacer para implementar una PWA, examinando un ejemplo simple y mostrándote cómo funcionan todas las piezas.</p>

<ol>
 <li>{{web.link("/es/docs/Web/Progressive_web_apps/Introduction", "Introducción a las aplicaciones web progresivas")}}</li>
 <li>{{web.link("/es/docs/Web/Progressive_web_apps/App_structure", "Estructura de la aplicación web progresiva")}}</li>
 <li>{{web.link("/es/docs/Web/Progressive_web_apps/Offline_Service_workers", "Hacer que las PWAs funcionen sin conexión con el servicio de workers")}}</li>
 <li>{{web.link("/es/docs/Web/Progressive_web_apps/Installable_PWAs", "Cómo hacer que las PWAs se puedan instalar")}}</li>
 <li>{{web.link("/es/docs/Web/Progressive_web_apps/Re-engageable_Notifications_Push", "Cómo hacer que las PWAs puedan volver a interactuar usando Notificaciones y Push")}}</li>
 <li>{{web.link("/es/docs/Web/Progressive_web_apps/Loading", "Carga progresiva")}}</li>
</ol>

<div class="column-container">
<div class="column-half">
<h2 id="Guías_tecnológicas">Guías tecnológicas</h2>

<ul>
 <li>{{web.link("/es/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage", "Almacenamiento del lado del cliente")}} — una extensa guía que muestra cómo y cuándo utilizar el almacenamiento web, <code>IndexedDB</code> y el servicio <em>workers</em>.</li>
 <li>{{web.link("/es/docs/Web/API/Service_Worker_API/Using_Service_Workers", "Uso del servicio workers")}} — una guía más detallada que cubre la API del servicio <em>workers</em>.</li>
 <li>{{web.link("/es/docs/Web/API/IndexedDB_API/Using_IndexedDB", "Uso de IndexedDB")}} — los fundamentos de <code>IndexedDB</code>, explicados en detalle.</li>
 <li>{{web.link("/es/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API", "Uso de la API de almacenamiento web")}} — la API de almacenamiento web simplificada.</li>
 <li><a class="external external-icon" href="https://developers.google.com/web/updates/2015/11/app-shell" rel="noopener">Aplicaciones web de carga instantánea con una arquitectura de intérprete de aplicaciones</a> — una guía para usar el patrón de codificación de intérprete de App para crear aplicaciones que se cargan rápidamente.</li>
 <li>{{web.link("/es/docs/Web/API/Push_API/Using_the_Push_API", "Uso de la API Push")}} — aprende los conceptos básicos de la API Web <code>Push</code>.</li>
 <li>{{web.link("/es/docs/Web/API/Notifications_API/Using_the_Notifications_API", "Uso de la API de notificaciones")}} — notificaciones web en pocas palabras.</li>
 <li>{{web.link("/es/docs/Web/Apps/Modern/Responsive/responsive_design_building_blocks", "Los componentes básicos del diseño responsivo")}} — aprende los conceptos básicos del diseño responsivo, un tema esencial para el diseño de aplicaciones modernas.</li>
 <li>{{web.link("/es/docs/Web/Apps/Modern/Responsive/Mobile_first", "Primero móvil")}} — a menudo, al crear diseños de aplicaciones adaptables, tiene sentido crear el diseño móvil como predeterminado y construir diseños más anchos en la parte superior.</li>
 <li>{{web.link("/es/docs/Web/Apps/Progressive/Add_to_home_screen", "Guía para agregar la pantalla de inicio")}} — aprende cómo tus aplicaciones pueden aprovechar agregar la pantalla de inicio (A2HS).</li>
</ul>
</div>

<div class="column-half">
<h2 id="Herramientas">Herramientas</h2>

<ul>
 <li><a class="external external-icon" href="https://localforage.github.io/localForage/" rel="noopener">localForage</a> — una biblioteca de JavaScript sencilla y agradable para almacenar datos en el lado del cliente de manera realmente simple, usa <code>IndexedDB</code> y recurre a <code>Web SQL</code>/<code>Web Storage</code> si es necesario.</li>
 <li><a class="external external-icon" href="https://github.com/fxos-components/serviceworkerware" rel="noopener"><code>ServiceWorkerWare</code></a> — un <em>microframework tipo Express</em> para facilitar el desarrollo del Servicio <em>Worker</em>.</li>
 <li><a class="external external-icon" href="https://github.com/mozilla/oghliner" rel="noopener"><code>oghliner</code></a> — no solo es una plantilla, sino una herramienta para implementar aplicaciones web sin conexión para Páginas de GitHub.</li>
 <li><a class="external external-icon" href="https://github.com/GoogleChrome/sw-precache" rel="noopener"><code>sw-precache</code></a> — un módulo de <code>node</code> para generar código del servicio <em>worker que precargará recursos específicos.</em></li>
 <li><em><a class="external external-icon" href="https://github.com/GoogleChrome/workbox" rel="noopener">workbox</a>: sucesor espiritual de "sw-precache" con estrategias de almacenamiento en caché más avanzadas y sencillas precargas.</em></li>
 <li><em><a class="external external-icon" href="https://www.talater.com/upup/" rel="noopener">upup</a>: un diminuto script que garantiza que tu sitio siempre esté disponible para tus usuarios.</em></li>
 <li><em><a class="external external-icon" href="https://serviceworke.rs/" rel="noopener">El libro de recetas para servicios <em>worker</em></a>: una serie de excelentes recetas de servicios <em>worker</em> que muestran cómo implementar una aplicación sin conexión, además de otros muchos concejos.</em></li>
 <li><em><a href="https://marketplace.visualstudio.com/items?itemName=mayeedwin.vscode-pwa">Extensión PWA de VS Code</a>: una colección de todos los fragmentos de código esenciales que necesitas para crear aplicaciones web progresivas correctamente allí en tu entorno de VS Code.</em></li>
</ul>
</div>
</div>

<ul>
 <li><em><a href="https://developers.google.com/web/progressive-web-apps">Aplicaciones web progresivas</a> en Google Developers.</em></li>
 <li><em><a href="https://medium.com/@slightlylate/progressive-apps-escaping-tabs-without-losing-our-soul-3b93a8561955#.6czgj0myh">Aplicaciones web progresivas: escapar de las pestañas sin perder el alma</a> de Alex Russell.</em></li>
 <li><em><a href="https://developers.google.com/web/progressive-web-apps/checklist">Lista de verificación de aplicaciones web progresivas</a>.</em></li>
 <li><em><a href="https://developers.google.com/web/tools/lighthouse">La herramienta Lighthouse</a> de Google.</em></li>
 <li><em><a href="https://github.com/angular/mobile-toolkit">Herramientas para crear aplicaciones web progresivas con Angular</a>.</em></li>
 <li><em><a href="#" title="https://github.com/codebusking/react-pwa-guide-kit">Kit de guía de React PWA</a>.</em></li>
 <li><em><a href="https://pokedex.org/">Sitio web de la Pokedex sin conexión</a>.</em></li>
 <li><em><a href="https://hnpwa.com/">Lectores de noticias Hacker como aplicaciones web progresivas</a>.</em></li>
 <li><em><a href="https://goingmeta.io/progressive-web-app/">Aplicación web progresiva: ventajas en pocas palabras</a></em></li>
 <li><em><a href="https://ymedialabs.com/progressive-web-apps">Por qué las aplicaciones web progresivas son el futuro de la web móvil (investigación de 2019)</a>.</em></li>
 <li><em><a href="https://www.csschopper.com/blog/progressive-web-apps-everything-you-need-to-know/">Aplicaciones web progresivas: todo lo que necesitas saber</a></em></li>
 <li><em><a href="https://pwafire.org">Colección de recursos, laboratorios de código y herramientas que necesitas para crear PWAs por parte del equipo de pwafire.org</a></em></li>
 <li><em><a href="https://github.com/pwafire/pwadev-tips">Configuración de tu entorno de desarrollo de aplicaciones web progresivas</a></em></li>
</ul>

<div><em>{{QuickLinksWithSubpages("/es/docs/Web/Progressive_web_apps/")}}</em></div>
