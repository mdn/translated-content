---
title: Introducción a  aplicaciones web progresivas
slug: Web/Progressive_web_apps/Introduction
tags:
  - Aplicaciones web prograsivas
  - Guía
  - Intermedio
  - Intruducción
  - PWA
  - Servicio Worker
  - aplicaciones
  - js13kGames
  - manifiesto web
  - progresiva
translation_of: Web/Progressive_web_apps/Introduction
---
<div>{{NextMenu("Web/Progressive_web_apps/App_structure", "Web/Progressive_web_apps")}}</div>

<p class="summary"><span class="seoSummary">Este articulo provee una introducción a las Aplicaciones web progresivas (PWAs), explica qué son, y las ventajas que brindan sobre las aplicaciones web convencionales.</span></p>

<h2 id="¿Qué_es_una_aplicación_web_progresiva">¿Qué es una aplicación web progresiva?</h2>

<div class="callout-box">El término "Aplicación web progresiva" no es un nombre formal u oficial. Solo es una abreviatura utilizada inicialmente por Google para el concepto de crear una aplicación flexible y adaptable utilizando solo tecnologías web.</div>

<p>Las PWA son aplicaciones web desarrolladas con una serie de tecnologías específicas y patrones estándar que les permiten aprovechar las funciones de las aplicaciones nativas y web. Por ejemplo, las aplicaciones web son más fáciles de detectar que las aplicaciones nativas; es mucho más fácil y rápido visitar un sitio web que instalar una aplicación, y también puedes compartir aplicaciones web simplemente enviando un enlace.</p>

<p>Por otro lado, las aplicaciones nativas están mejor integradas con el sistema operativo y, por lo tanto, ofrecen una experiencia más fluida para los usuarios. Puedes instalar una aplicación nativa para que funcione sin conexión, y a los usuarios les encanta tocar sus íconos para acceder fácilmente a sus aplicaciones favoritas, en lugar de navegar a través de un navegador.</p>

<p>Las PWA brindan la capacidad de crear aplicaciones web que pueden disfrutar de estas mismas ventajas.</p>

<p>No es un concepto completamente nuevo; estas ideas se han revisado muchas veces en la plataforma web con varios enfoques en el pasado. La mejora progresiva y el diseño adaptable ya te permiten crear sitios web compatibles con dispositivos móviles.</p>

<p>Sin embargo, las PWA brindan todo esto y más sin perder ninguna de las características existentes que hacen que la web sea excelente.</p>

<h2 id="¿Qué_hace_que_una_aplicación_sea_una_PWA">¿Qué hace que una aplicación sea una PWA?</h2>

<p>Como dijimos anteriormente, las PWA no se crean con una sola tecnología. Representan una nueva filosofía para la creación de aplicaciones web, que incluye algunos patrones específicos, API y otras características. A primera vista, <em>no</em> es tan obvio si una aplicación web es una PWA o no. Una aplicación se podría considerar una PWA cuando cumple con ciertos requisitos o implementa un conjunto de características determinadas — funciona sin conexión, es instalable, es fácil de sincronizar, puede enviar notificaciones automáticas, etc.</p>

<p>Además, existen herramientas para medir qué tan completa (como porcentaje) es una aplicación web, como <a href="https://developers.google.com/web/tools/lighthouse/">Lighthouse</a>. Al implementar varias ventajas tecnológicas, podemos hacer que una aplicación sea más progresiva, y así terminar con una puntuación de Lighthouse más alta. Pero este es solo un indicador aproximado.</p>

<p>Hay algunos principios clave que una aplicación web debe tratar de observar para ser identificada como PWA. Estos deben ser:</p>

<ul>
 <li>{{web.link("/es/docs/Web/Progressive_web_apps/Advantages", "Detectable", "#Discoverable")}}, por lo que el contenido se puede encontrar a través de motores de búsqueda.</li>
 <li>{{web.link("/es/docs/Web/Progressive_web_apps/Advantages", "Instalable", "#Instalable")}}, por lo que puede estar disponible en la pantalla de inicio del dispositivo o en el lanzador de aplicaciones.</li>
 <li>{{web.link("/es/docs/Web/Progressive_web_apps/Advantages", "Enlazable", "#Enlazable")}}, para que puedas compartirla simplemente enviando una URL.</li>
 <li>{{web.link("/es/docs/Web/Progressive_web_apps/Advantages", "Independiente de la red", "#Independiente_de_la_red")}}, por lo que funciona sin conexión o con una deficiente conexión de red.</li>
 <li>{{web.link("/es/docs/Web/Progressive_web_apps/Advantages", "Progresiva", "#Progresiva")}}, por lo que todavía se puede utilizar en un nivel básico en los navegadores más antiguos, pero completamente funcional en los más recientes.</li>
 <li>{{web.link("/es/docs/Web/Progressive_web_apps/Advantages", "Reconectable", "#Reconectable")}}, por lo que puede enviar notificaciones cuando haya contenido nuevo disponible.</li>
 <li>{{web.link("/es/docs/Web/Progressive_web_apps/Advantages", "Adaptable", "#Adaptable")}}, por lo tanto se puede utilizar en cualquier dispositivo con pantalla y navegador: teléfonos móviles, tabletas, computadoras portátiles, televisores, refrigeradores, etc.</li>
 <li>{{web.link("/es/docs/Web/Progressive_web_apps/Advantages", "Segura", "#Segura")}} por lo que las conexiones entre el usuario, la aplicación y tu servidor están protegidos contra terceros que intenten acceder a datos sensibles.</li>
</ul>

<p>Ofrecer estas funciones y hacer uso de todas las <a href="#ventajas_de_las_aplicaciones_web">Ventajas que ofrecen las aplicaciones web</a> puede crear una oferta atractiva y altamente flexible para tus usuarios y clientes.</p>

<h3 id="¿Vale_la_pena_hacer_todo_eso">¿Vale la pena hacer todo eso?</h3>

<p>¡Absolutamente! Con un esfuerzo relativamente pequeño para implementar las características principales de las PWAs, los beneficios son enormes. Por ejemplo:</p>

<ul>
 <li>Una disminución en los tiempos de carga después de la instalación de la aplicación, gracias al almacenamiento en caché con el {{web.link("/es/docs/Web/API/Service_Worker_API", "servicio workers")}}, además de ahorrar un valioso ancho de banda y tiempo. Los PWAs tienen una carga casi instantánea (a partir de la segunda visita).</li>
 <li>La capacidad de actualizar solo el contenido que ha cambiado cuando hay disponible una actualización de la aplicación. En contraste, con una aplicación nativa, incluso la más mínima modificación puede obligar al usuario a descargar la aplicación completa nuevamente.</li>
 <li>Una apariencia que está más integrada con la plataforma nativa: íconos de aplicaciones en la pantalla de inicio o el lanzador de aplicaciones, aplicaciones que se ejecutan automáticamente en modo de pantalla completa, etc.</li>
 <li>Reconectable para interactuar con los usuarios mediante el uso de notificaciones del sistema y mensajes <code>push</code>, lo cual genera usuarios más comprometidos y mejores tasas de conversión.</li>
</ul>

<h3 id="Historias_de_éxito">Historias de éxito</h3>

<p>Hay muchas historias de éxito de empresas que probaron la ruta PWA, optaron por una experiencia de sitio web mejorada en lugar de una aplicación nativa y, como resultado, obtuvieron importantes beneficios medibles. El sitio web <a href="https://www.pwastats.com/">Estadísticas PWA</a> comparte muchos estudios de casos que indican estos beneficios.</p>

<p>La historia de éxito más conocida probablemente es la de <a href="https://stories.flipkart.com/introducing-flipkart-lite/">Flipkart Lite</a>. El sitio de comercio electrónico más grande de la India se reconstruyó como una aplicación web progresiva en 2015, lo que resultó en un aumento del 70% en las conversiones. La PWA <a href="https://m.aliexpress.com/">AliExpress</a> también ha obtenido resultados mucho mejores que la web o la aplicación nativa, con un aumento del 104% en las tasas de conversión para los nuevos usuarios. Dado el aumento de sus ganancias y la cantidad relativamente baja de trabajo requerida para la conversión de estas aplicaciones a PWA, la ventaja es clara.</p>

<p>Las puestas en marcha emergentes en etapa temprana como <a href="https://www.couponmoto.com/">couponmoto</a> también han comenzado a usar aplicaciones web progresivas para impulsar una mayor participación de los consumidores, lo que demuestra que pueden ayudar tanto a pequeñas como a grandes empresas para (re)involucrar a los usuarios de manera más eficaz.</p>

<p>Puedes consultar la lista en <a href="#" title="https://pwa.rocks/">pwa.rocks</a> para obtener más ejemplos. Vale la pena mencionar en particular la página <a href="https://hnpwa.com/">hnpwa.com</a>, que muestra una implementación de ejemplo del sitio web de Hacker News (en lugar de la aplicación habitual TodoMVC), en la que puedes ver el uso de varios marcos de desarrollo de la interfaz de usuario web.</p>

<p>Incluso puedes generar PWA en línea utilizando el sitio web <a href="https://www.pwabuilder.com/">PWABuilder</a>.</p>

<p>Para obtener información específica sobre el servicio <em>worker</em> y la inserción, asegúrate de consultar el <a href="https://serviceworke.rs/">Libro de recetas del servicio <em>worker</em></a>, una colección de recetas que utilizan los servicios <em>worker</em> en sitios modernos.</p>

<p>Vale la pena probar un enfoque de PWA, para que puedas ver por ti mismo si funciona para tu aplicación.</p>

<h2 id="Ventajas_de_las_aplicaciones_web">Ventajas de las aplicaciones web</h2>

<p>Una aplicación web progresiva totalmente capaz debería proporcionar todas las siguientes ventajas al usuario.</p>

<h3 id="Reconocible">Reconocible</h3>

<p><img alt="Detectabilidad" src="https://mdn.mozillademos.org/files/12654/discoverable.svg" style="float: left; height: 60px; margin-right: 1em; width: 50px;">El objetivo final es que las aplicaciones web tengan una mejor representación en los motores de búsqueda, sean más fáciles de exponer, catalogar y clasificar, y tener metadatos utilizables por los navegadores para brindarles capacidades especiales.</p>

<p>Algunas de las capacidades ya se han habilitado en ciertas plataformas basadas en web mediante tecnologías patentadas como <a href="http://ogp.me/">Open Graph</a>, que proporciona un formato para especificar metadatos similares en el bloque {{HTMLElement("head")}} de {{Glossary("HTML")}} con etiquetas {{HTMLElement("meta")}}.</p>

<p>El estándar web relevante aquí es el {{web.link("/es/docs/Web/Manifest", "manifiesto de la aplicación web")}}, que define las características de una aplicación, como el nombre, el icono, la pantalla de presentación y los colores del tema en un archivo de manifiesto con formato {{Glossary("JSON")}}. Esto es para usar en contextos como listas de aplicaciones y pantallas de inicio de dispositivos.</p>

<h3 id="Instalable">Instalable</h3>

<p><img alt="Instalabilidad" src="https://mdn.mozillademos.org/files/12656/installable.svg" style="float: left; height: 60px; margin-right: 1em; width: 60px;"></p>

<p>Una parte fundamental de la experiencia de la aplicación web es que los usuarios tengan iconos de aplicaciones en su pantalla de inicio y los puedan tocar para abrir aplicaciones en su propio contenedor nativo que se sienta bien integrado con la plataforma subyacente.</p>

<p>Las aplicaciones web modernas pueden hacer que esta aplicación nativa se sienta a través de las propiedades establecidas dentro del manifiesto de la aplicación web y mediante una función disponible en los navegadores de teléfonos inteligentes modernos llamada {{web.link("/es/docs/Web/Progressive_web_apps/Developer_guide/Installing", "instalación de la aplicación web")}}.</p>

<h3 id="Enlazable">Enlazable</h3>

<p><img alt="Enlazable" src="https://mdn.mozillademos.org/files/12658/linkable.svg" style="float: left; height: 60px; margin-right: 1em; width: 60px;"></p>

<p>Una de las características más poderosas de la web es la capacidad de vincularse a una aplicación en una URL específica sin la necesidad de una tienda de aplicaciones o un proceso de instalación complejo. Así ha sido siempre.</p>

<h3 id="Independiente_de_la_red">Independiente de la red</h3>

<p><img alt="Independencia de la red" src="https://mdn.mozillademos.org/files/12660/network-independent.svg" style="float: left; height: 60px; margin-right: 1em; width: 60px;"></p>

<p>Las aplicaciones web modernas pueden funcionar cuando hay mala (o incluso inexistente) conectividad con la red. Las ideas básicas detrás de la independencia de la red son poder:</p>

<ul>
 <li>Volver a visitar un sitio y obtener su contenido incluso si no hay una red disponible.</li>
 <li>Explorar cualquier tipo de contenido que el usuario haya visitado anteriormente al menos una vez, incluso en situaciones de mala conectividad.</li>
 <li>Controlar lo que se muestra al usuario en situaciones donde no hay conectividad.</li>
</ul>

<p>Esto se consigue mediante una combinación de tecnologías: el {{web.link("/es/docs/Web/API/Service_Worker_API", "servicio Workers")}} para controlar las solicitudes de página (por ejemplo, almacenarlas sin conexión), la {{web.link("/es/docs/Web/API/Cache", "API de caché")}} para almacenar respuestas a solicitudes de red sin conexión (muy útil para almacenar activos del sitio) y tecnologías de almacenamiento de datos secundarios como {{web.link("/es/docs/Web/API/Web_Storage_API", "Almacenamiento Web")}} y {{web.link("/es/docs/Web/API/IndexedDB_API", "IndexedDB")}} para almacenar datos de aplicaciones sin conexión.</p>

<h3 id="Compatibilidad_de_mejora_progresiva">Compatibilidad de mejora progresiva</h3>

<p><img alt="Mejora progresiva" src="https://mdn.mozillademos.org/files/12662/progressive.svg" style="float: left; height: 60px; margin-right: 1em; width: 60px;"></p>

<p>Se pueden desarrollar aplicaciones web modernas para proporcionar una experiencia excelente a los navegadores totalmente compatibles y una experiencia aceptable (aunque no tan brillante) a los navegadores menos capaces. Hemos estado haciendo esto durante años con las mejores prácticas, como la mejora progresiva. Al utilizar {{Glossary("Progressive_Enhancement", "Mejora progresiva")}}, las PWAs se utilizan en varios navegadores. Esto significa que los desarrolladores deben tener en cuenta las diferencias en la implementación de algunas características y tecnologías PWA entre diferentes implementaciones de navegadores.</p>

<h3 id="Reconectable">Reconectable</h3>

<p><img alt="Reconectable" src="https://mdn.mozillademos.org/files/12666/re-engageable.svg" style="float: left; height: 60px; margin-right: 1em; width: 60px;"></p>

<p>Una de las principales ventajas de las plataformas nativas es la facilidad con la que los usuarios pueden volver a interactuar con las actualizaciones y el contenido nuevo, incluso cuando no están mirando la aplicación o usando sus dispositivos. Las aplicaciones web modernas ahora también pueden hacer esto, utilizando nuevas tecnologías como Servicio <em>Workers</em> para controlar páginas, la {{web.link("/es/docs/Web/API/Push_API", "API Web Push")}} para enviar actualizaciones. directamente del servidor a la aplicación a través de un servicio <em>workers</em> y la {{web.link("/es/docs/Web/API/Notifications_API", "API de notificaciones")}} para generar notificaciones del sistema para ayudar a involucrar a los usuarios cuando no están utilizando activamente su navegador web.</p>

<h3 id="Adaptable">Adaptable</h3>

<p><img alt="Adaptable" src="https://mdn.mozillademos.org/files/12650/responsive.svg" style="float: left; height: 61px; margin-right: 1em; width: 60px;"></p>

<p>Las aplicaciones web adaptables utilizan tecnologías como {{web.link("/es/docs/Web/CSS/Media_Queries", "consultas de medios")}} y {{web.link("/es/docs/Glossary/Viewport", "viewport")}} para asegurarte de que tu IU se ajuste a cualquier factor de forma: computadora de escritorio, dispositivo móvil, tableta o lo que venga a continuación.</p>

<h3 id="Segura">Segura</h3>

<p><img alt="Segura" src="https://mdn.mozillademos.org/files/12664/safe.svg" style="float: left; height: 74px; margin-right: 1em; width: 60px;"></p>

<p><img alt='Captura de pantalla que muestra una gran cantidad de resultados al buscar "Messenger" al intentar encontrar Facebook Messenger. ¿Cuál es el correcto?' src="https://mdn.mozillademos.org/files/17175/InstalingMessengerSoManyOptionsEek.jpeg" style="border-style: solid; border-width: 1px; float: right; height: 267px; margin-left: 1em; width: 130px;">La plataforma web proporciona un mecanismo de entrega seguro que evita espionaje y, al mismo tiempo, garantiza que el contenido no haya sido manipulado, siempre que aproveche {{Glossary("HTTPS")}} y desarrolles tus aplicaciones pensando en la seguridad.</p>

<p>También es fácil para los usuarios asegurarse de que están instalando la aplicación correcta, porque su URL coincidirá con el dominio de tu sitio. Esto es muy diferente de las aplicaciones en las tiendas de aplicaciones, que pueden tener varias aplicaciones con nombres similares, algunas de las cuales incluso pueden estar basadas en su propio sitio, lo que aumenta la confusión. Las aplicaciones web eliminan esa confusión y garantizan que los usuarios obtengan la mejor experiencia posible.</p>

<h2 id="Compatibilidad_con_el_navegador">Compatibilidad con el navegador</h2>

<p>Como se mencionó anteriormente, las PWAs no dependen de una sola API, sino que utilizan varias tecnologías para lograr el objetivo de brindar la mejor experiencia web posible.</p>

<p>El ingrediente clave requerido para las PWAs es la asistencia de {{web.link("/es/docs/Web/API/Service_Worker_API", "servicio workers")}}. Afortunadamente, los servicios de <em>workers</em> <a href="https://jakearchibald.github.io/isserviceworkerready/">ahora son compatibles con los principales navegadores</a> en computadoras de escritorio y dispositivos móviles.</p>

<p>Otras características como {{web.link("/es/docs/Web/Manifest", "manifiesto de App Web")}}, {{web.link("/es/docs/Web/API/Push_API", "Push")}}, {{web.link("/es/docs/Web/API/Notifications_API", "Notificaciones")}} y la funcionalidad {{web.link("/es/docs/Web/Progressive_web_apps/Add_to_home_screen", "Agregar a la pantalla de inicio")}} también tienen un amplio soporte. Actualmente, Safari tiene soporte limitado para el manifiesto de aplicaciones web y Agregar a la pantalla de inicio y no admite notificaciones <em>push web</em>. Sin embargo, otros navegadores importantes admiten todas estas funciones.</p>

<p>Por encima de todo, debes seguir la regla de mejora progresiva: usa tecnologías que mejoren la apariencia y la utilidad de tu aplicación cuando estén disponibles, pero que sigan ofreciendo la funcionalidad básica de tu aplicación cuando esas funciones no estén disponibles. Presentar un sitio web confiable con un buen rendimiento es una consecuencia del uso de estas mejoras; esto, a su vez, significa crear aplicaciones web que sigan las mejores prácticas. De esta manera, todos podrán usar la aplicación, pero aquellos con navegadores modernos se beneficiarán aún más de las funciones de PWA.</p>

<h2 id="Una_aplicación_de_ejemplo">Una aplicación de ejemplo</h2>

<p>En esta serie de artículos, examinaremos el código fuente de un sitio web súper simple que enumera información sobre juegos enviados a la <a href="http://js13kgames.com/aframe">categoría A-Frame</a> en la Competición <a href="http://2017.js13kgames.com/">js13kGames 2017</a>. No tienes que pensar en cuál es el contenido real del sitio web; el punto principal es aprender a utilizar las funciones de PWA en sus propios proyectos.</p>

<p>Puedes <a href="https://mdn.github.io/pwa-examples/js13kpwa/">ver esta aplicación en acción</a> en línea, y el código fuente está <a href="https://github.com/mdn/pwa-examples/tree/master/js13kpwa">disponible en GitHub</a>. Examinaremos este código detenidamente a lo largo de esta serie de artículos.</p>

<p>Por ahora, ve a la segunda parte de esta serie, donde verás la estructura de la aplicación de ejemplo.</p>

<p>{{NextMenu("Web/Progressive_web_apps/App_structure", "Web/Progressive_web_apps")}}</p>

<div>{{QuickLinksWithSubpages("/es/docs/Web/Progressive_web_apps/")}}</div>
