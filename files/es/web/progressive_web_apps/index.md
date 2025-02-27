---
title: Aplicaciones Web Progresivas
slug: Web/Progressive_web_apps
---

![Logotipo de la comunidad PWA](pwa.png)Las **_aplicaciones web progresivas_** (mejor conocidas como **PWA**s por «_**P**rogressive **W**eb **A**pps_») son aplicaciones web que utilizan APIs y funciones emergentes del navegador web junto a una estrategia tradicional de mejora progresiva para ofrecer una aplicación nativa —como la experiencia del usuario para aplicaciones web multiplataforma. Las aplicaciones web progresivas son un patrón de diseño útil, aunque no son un estándar formalizado. Se puede pensar que PWA es similar a AJAX u otros patrones similares que abarcan un conjunto de atributos de aplicación, incluido el uso de tecnologías y técnicas web específicas. Este conjunto de documentos te dice todo lo que necesitas saber sobre ellas.

Para poder llamar PWA a una aplicación web, técnicamente hablando debe tener las siguientes características: [Contexto seguro](/es/docs/Web/Security/Secure_Contexts) (**{{Glossary("HTTPS")}}**), uno o más [Servicio Workers](/es/docs/Web/API/Service_Worker_API) y un [archivo de manifiesto](/es/docs/Web/Manifest).

- [Contexto seguro](/es/docs/Web/Security/Secure_Contexts) ({{Glossary("HTTPS")}})
  - : La aplicación web se debe servir a través de una red segura. Ser un sitio seguro no solo es una buena práctica, sino que también establece tu aplicación web como un sitio confiable, especialmente si los usuarios necesitan realizar transacciones seguras. La mayoría de las funciones relacionadas con una PWA, como la geolocalización e incluso los servicios _workers_, solamente están disponibles cuando la aplicación se ha cargado mediante HTTPS.
- [Servicio workers](/es/docs/Web/API/Service_Worker_API)
  - : Un servicio _worker_ es un script que permite interceptar y controlar cómo un navegador web maneja tus solicitudes de red y el almacenamiento en caché de activos. Con los servicios _worker_, los desarrolladores web pueden crear páginas web rápidas y fiables junto con experiencias fuera de línea.
- [El archivo manifest](/es/docs/Web/Manifest)
  - : Un archivo {{Glossary("JSON")}} que controla cómo se muestra tu aplicación al usuario y garantiza que las aplicaciones web progresivas sean detectables. Describe el nombre de la aplicación, la URL de inicio, los iconos y todos los demás detalles necesarios para transformar el sitio web en un formato similar al de una aplicación.

## Ventajas de PWA

Las PWA deben ser detectables, instalables, enlazables, independientes de la red, progresivas, reconectables, responsivas y seguras. Para obtener más información sobre lo que esto significa, lee [Ventajas de las aplicaciones web progresivas](/es/docs/Web/Progressive_web_apps).

Para saber cómo implementar PWA, lee la [guía para desarrolladores de PWA](/es/docs/Web/Progressive_web_apps/Guides).

## Documentación

{{LandingPageListSubpages}}

> **Advertencia:** **Todo lo que se encuentra debajo de este punto es un remanente de la versión anterior de esta página y se renovará a medida que se revise el resto del contenido.**

## Guías del núcleo de PWA

Las siguientes guías te muestran lo que debes hacer para implementar una PWA, examinando un ejemplo simple y mostrándote cómo funcionan todas las piezas.

1. [Introducción a las aplicaciones web progresivas](/es/docs/Web/Progressive_web_apps/Tutorials/js13kGames)
2. [Estructura de la aplicación web progresiva](/es/docs/Web/Progressive_web_apps/Tutorials/js13kGames/App_structure)
3. [Hacer que las PWAs funcionen sin conexión con el servicio de workers](/es/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers)
4. [Cómo hacer que las PWAs se puedan instalar](/es/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs)
5. [Cómo hacer que las PWAs puedan volver a interactuar usando Notificaciones y Push](/es/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Re-engageable_Notifications_Push)
6. [Carga progresiva](/es/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Loading)

## Guías tecnológicas

- [Almacenamiento del lado del cliente](/es/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage) — una extensa guía que muestra cómo y cuándo utilizar el almacenamiento web, `IndexedDB` y el servicio _workers_.
- [Uso del servicio workers](/es/docs/Web/API/Service_Worker_API/Using_Service_Workers) — una guía más detallada que cubre la API del servicio _workers_.
- [Uso de IndexedDB](/es/docs/Web/API/IndexedDB_API/Using_IndexedDB) — los fundamentos de `IndexedDB`, explicados en detalle.
- [Uso de la API de almacenamiento web](/es/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API) — la API de almacenamiento web simplificada.
- [Aplicaciones web de carga instantánea con una arquitectura de intérprete de aplicaciones](https://developers.google.com/web/updates/2015/11/app-shell) — una guía para usar el patrón de codificación de intérprete de App para crear aplicaciones que se cargan rápidamente.
- [Uso de la API Push](/es/docs/Web/API/Push_API) — aprende los conceptos básicos de la API Web `Push`.
- [Uso de la API de notificaciones](/es/docs/Web/API/Notifications_API/Using_the_Notifications_API) — notificaciones web en pocas palabras.
- [Los componentes básicos del diseño responsivo](/es/docs/Learn/CSS/CSS_layout/Responsive_Design) — aprende los conceptos básicos del diseño responsivo, un tema esencial para el diseño de aplicaciones modernas.
- [Primero móvil](/es/docs/Learn/CSS/CSS_layout/Responsive_Design) — a menudo, al crear diseños de aplicaciones adaptables, tiene sentido crear el diseño móvil como predeterminado y construir diseños más anchos en la parte superior.
- [Guía para agregar la pantalla de inicio](/es/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable) — aprende cómo tus aplicaciones pueden aprovechar agregar la pantalla de inicio (A2HS).

## Herramientas

- [localForage](https://localforage.github.io/localForage/) — una biblioteca de JavaScript sencilla y agradable para almacenar datos en el lado del cliente de manera realmente simple, usa `IndexedDB` y recurre a `Web SQL`/`Web Storage` si es necesario.
- [`ServiceWorkerWare`](https://github.com/fxos-components/serviceworkerware) — un _microframework tipo Express_ para facilitar el desarrollo del Servicio _Worker_.
- [`oghliner`](https://github.com/mozilla/oghliner) — no solo es una plantilla, sino una herramienta para implementar aplicaciones web sin conexión para Páginas de GitHub.
- [`sw-precache`](https://github.com/GoogleChrome/sw-precache) — un módulo de `node` para generar código del servicio _worker que precargará recursos específicos._
- _[workbox](https://github.com/GoogleChrome/workbox): sucesor espiritual de "sw-precache" con estrategias de almacenamiento en caché más avanzadas y sencillas precargas._
- _[upup](https://www.talater.com/upup/): un diminuto script que garantiza que tu sitio siempre esté disponible para tus usuarios._
- _[El libro de recetas para servicios worker](https://github.com/mdn/serviceworker-cookbook/): una serie de excelentes recetas de servicios worker que muestran cómo implementar una aplicación sin conexión, además de otros muchos concejos._
- _[Extensión PWA de VS Code](https://marketplace.visualstudio.com/items?itemName=mayeedwin.vscode-pwa): una colección de todos los fragmentos de código esenciales que necesitas para crear aplicaciones web progresivas correctamente allí en tu entorno de VS Code._

<!---->

- _[Aplicaciones web progresivas](https://developers.google.com/web/progressive-web-apps) en Google Developers._
- _[Aplicaciones web progresivas: escapar de las pestañas sin perder el alma](https://medium.com/@slightlylate/progressive-apps-escaping-tabs-without-losing-our-soul-3b93a8561955#.6czgj0myh) de Alex Russell._
- _[Lista de verificación de aplicaciones web progresivas](https://developers.google.com/web/progressive-web-apps/checklist)._
- _[La herramienta Lighthouse](https://developers.google.com/web/tools/lighthouse) de Google._
- _[Herramientas para crear aplicaciones web progresivas con Angular](https://github.com/angular/mobile-toolkit)._
- _Kit de guía de React PWA._
- _[Sitio web de la Pokedex sin conexión](https://pokedex.org/)._
- _[Lectores de noticias Hacker como aplicaciones web progresivas](https://hnpwa.com/)._
- _[Aplicación web progresiva: ventajas en pocas palabras](https://goingmeta.io/progressive-web-app/)_
- _[Por qué las aplicaciones web progresivas son el futuro de la web móvil (investigación de 2019)](https://ymedialabs.com/progressive-web-apps)._
- _[Aplicaciones web progresivas: todo lo que necesitas saber](https://www.csschopper.com/blog/progressive-web-apps-everything-you-need-to-know/)_
- _[Colección de recursos, laboratorios de código y herramientas que necesitas para crear PWAs por parte del equipo de pwafire.org](https://pwafire.org)_
- _[Configuración de tu entorno de desarrollo de aplicaciones web progresivas](https://github.com/pwafire/pwadev-tips)_

{{QuickLinksWithSubpages("/es/docs/Web/Progressive_web_apps/")}}
