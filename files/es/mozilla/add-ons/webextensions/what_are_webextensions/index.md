---
title: ¿Qué son las extensiones?
slug: Mozilla/Add-ons/WebExtensions/What_are_WebExtensions
---

{{AddonSidebar}}

Una extensión agrega características y funciones a un explorador. Se ha creado utilizando tecnologías basadas en Web conocidas: HTML, CSS y JavaScript. Puede aprovechar las mismas API Web que JavaScript en una página web, pero una extensión también tiene acceso a su propio conjunto de APIs de JavaScript. Esto significa que puede hacer mucho más en una extensión de lo que puede con el código en una página web. Estos son sólo algunos ejemplos de las cosas que puedes hacer:

**Mejore o complemente un sitio**: Use un Add-on para ofrecer funciones adicionales en el navegador o información de su sitio Web. Permita a los usuarios recopilar detalles de las páginas que visitan para mejorar el servicio que ofrecen.

![](amazon_add_on.png)

**Ejemplos:** [El asistente de Amazon para Firefox](https://addons.mozilla.org/en-US/firefox/addon/amazon-browser-bar/), [OneNote Web Clipper](https://addons.mozilla.org/en-US/firefox/addon/onenote-clipper/) y [Grammarly para Firefox](https://addons.mozilla.org/en-US/firefox/addon/grammarly-1/)

**Permita que los usuarios demuestren su personalidad**: Las extensiones del navegador pueden manipular el contenido de las páginas; por ejemplo, permite a los usuarios agregar su logo favorito o imágen como un fondo de pantalla acada página que visitan. Las extensiones permiten también al usuario actualizar el aspecto de la IU de Firefox, de la misma manera que lo hacen los [complementos de temas](/es/docs/Temas/Theme_concepts).

![](myweb_new_tab_add_on.png)

**Ejemplos:** [MyWeb New Tab](https://addons.mozilla.org/en-US/firefox/addon/myweb-new-tab/), [Tabliss](https://addons.mozilla.org/en-US/firefox/addon/tabliss/) y [VivaldiFox](https://addons.mozilla.org/en-US/firefox/addon/vivaldifox/)

**Agregar o quitar contenido de las páginas web**: es posible que desee ayudar a los usuarios a bloquear los anuncios intrusivos de las páginas web, proporcionar acceso a una guía de viajes siempre que un país o ciudad se menciona en una página web, o reformatear el contenido de la página para ofrecer una experiencia de lectura consistente. Con la capacidad de acceder y actualizar tanto HTML como CSS de una página, las extensiones pueden ayudar a los usuarios a ver la Web de la manera que quieren.

![](ublock_origin_add_on.png)

**Ejemplos:** [Origen uBlock](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/), [Lector](https://addons.mozilla.org/en-US/firefox/addon/reader/) y [Caja de Herramientas para Google Play Store™](https://addons.mozilla.org/en-US/firefox/addon/toolbox-google-play-store/)

**Agregar herramientas y nuevas funciones de navegación**: añada nuevas funciones a un taskboard o genere imágenes de código QR a partir de URLs, hipervínculos o texto de página. Con opciones de interfaz de usuario flexibles y la potencia de las [APIs de WebExtensions](/es/docs/Mozilla/Add-ons/WebExtensions), puede añadir fácilmente nuevas funcionalidades a un navegador. Usted puede realzar casi cualquier característica o funcionalidad de sitios web, no tiene que ser su web.

![](qr_code_image_generator_add_on.png)

**Ejemplos: [QR Code Image Generator](https://addons.mozilla.org/en-US/firefox/addon/qr-code-image-generator/), [Swimlanes for Trello](https://addons.mozilla.org/en-US/firefox/addon/swimlanes-for-trello/), y [Tomato Clock](https://addons.mozilla.org/en-US/firefox/addon/tomato-clock/)**

**Juegos**: ofrecer juegos de ordenador tradicionales, con características de juego fuera de línea, pero también explorar nuevas posibilidades de juego, por ejemplo, mediante la incorporación de gameplay en la navegación cotidiana.

![](asteroids_in_popup_add_on_.png)

Ejemplos: [Asteroids in Popup](https://addons.mozilla.org/en-US/firefox/addon/asteroids-in-popup/), [Solitaire Card Game New Tab](https://addons.mozilla.org/en-US/firefox/addon/solitaire-card-game-new-tab/), and [2048 Prime](https://addons.mozilla.org/en-US/firefox/addon/2048-prime/).

**Agregar herramientas de desarrollo**: puede proporcionar herramientas de desarrollo web como su negocio o ha desarrollado una técnica útil o un enfoque para el desarrollo web que desea compartir. De cualquier manera, puede mejorar las herramientas de desarrollo de Firefox incorporadas añadiendo una nueva ficha a la barra de herramientas del desarrollador.

![](axe_developer_tools_add_on.png)

**Ejemplos:** [Web Developer](https://addons.mozilla.org/en-US/firefox/addon/web-developer/), [Web React Developer Tools](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/), and [aXe Developer Tools](https://addons.mozilla.org/en-US/firefox/addon/axe-devtools/)

Las extensiones para Firefox se construyen utilizando las [APIs de WebExtensions](/es/docs/Mozilla/Add-ons/WebExtensions), un sistema multi-navegador para desarrollar extensiones. En gran medida, la API es compatible con la [extension API](https://developer.chrome.com/extensions) soportada por Google Chrome y Opera. Extensiones escritas para estos navegadores en la mayoría de los casos se ejecutan en Firefox o Microsoft Edge con sólo unos pocos [cambios](/es/docs/Mozilla/Add-ons/WebExtensions/Porting_a_Google_Chrome_extension). La API es también totalmente compatible con los [multiprocesos de Firefox](/es/Firefox/Multiprocess_Firefox).

Si tiene ideas o preguntas, o necesita ayuda para migrar un Add-on heredado a las APIs de WebExtensions, puede comunicarse con nosotros en el [Discourse de Add-ons](https://discourse.mozilla.org/c/add-ons/35) o en [#extdev](irc://irc.mozilla.org/extdev) en [IRC](https://wiki.mozilla.org/IRC).

## ¿Qué sigue?

- Para recorrer el desarrollo de una simple extensión, vea [Tu primera extensión](/es/docs/Mozilla/Add-ons/WebExtensions/Tu_primera_WebExtension).
- Aprende sobre la estructura de una extensión en [anatomía de una extensión](/es/docs/Mozilla/Add-ons/WebExtensions/Anatomia_de_una_WebExtension).
- Pruebe algunos ejemplos de extensiones en [Extensiones de ejemplo](/es/docs/Mozilla/Add-ons/WebExtensions/Examples).
