---
title: Introducción a  aplicaciones web progresivas
slug: Web/Progressive_web_apps/Tutorials/js13kGames
---

{{NextMenu("Web/Progressive_web_apps/App_structure", "Web/Progressive_web_apps")}}

Este articulo provee una introducción a las Aplicaciones web progresivas (PWAs), explica qué son, y las ventajas que brindan sobre las aplicaciones web convencionales.

## ¿Qué es una aplicación web progresiva?

El término "Aplicación web progresiva" no es un nombre formal u oficial. Solo es una abreviatura utilizada inicialmente por Google para el concepto de crear una aplicación flexible y adaptable utilizando solo tecnologías web.

Las PWA son aplicaciones web desarrolladas con una serie de tecnologías específicas y patrones estándar que les permiten aprovechar las funciones de las aplicaciones nativas y web. Por ejemplo, las aplicaciones web son más fáciles de detectar que las aplicaciones nativas; es mucho más fácil y rápido visitar un sitio web que instalar una aplicación, y también puedes compartir aplicaciones web simplemente enviando un enlace.

Por otro lado, las aplicaciones nativas están mejor integradas con el sistema operativo y, por lo tanto, ofrecen una experiencia más fluida para los usuarios. Puedes instalar una aplicación nativa para que funcione sin conexión, y a los usuarios les encanta tocar sus íconos para acceder fácilmente a sus aplicaciones favoritas, en lugar de navegar a través de un navegador.

Las PWA brindan la capacidad de crear aplicaciones web que pueden disfrutar de estas mismas ventajas.

No es un concepto completamente nuevo; estas ideas se han revisado muchas veces en la plataforma web con varios enfoques en el pasado. La mejora progresiva y el diseño adaptable ya te permiten crear sitios web compatibles con dispositivos móviles.

Sin embargo, las PWA brindan todo esto y más sin perder ninguna de las características existentes que hacen que la web sea excelente.

## ¿Qué hace que una aplicación sea una PWA?

Como dijimos anteriormente, las PWA no se crean con una sola tecnología. Representan una nueva filosofía para la creación de aplicaciones web, que incluye algunos patrones específicos, API y otras características. A primera vista, _no_ es tan obvio si una aplicación web es una PWA o no. Una aplicación se podría considerar una PWA cuando cumple con ciertos requisitos o implementa un conjunto de características determinadas — funciona sin conexión, es instalable, es fácil de sincronizar, puede enviar notificaciones automáticas, etc.

Además, existen herramientas para medir qué tan completa (como porcentaje) es una aplicación web, como [Lighthouse](https://developers.google.com/web/tools/lighthouse/). Al implementar varias ventajas tecnológicas, podemos hacer que una aplicación sea más progresiva, y así terminar con una puntuación de Lighthouse más alta. Pero este es solo un indicador aproximado.

Hay algunos principios clave que una aplicación web debe tratar de observar para ser identificada como PWA. Estos deben ser:

- [Detectable](/es/docs/Web/Progressive_web_apps/Advantages"#Discoverable), por lo que el contenido se puede encontrar a través de motores de búsqueda.
- [Instalable](/es/docs/Web/Progressive_web_apps/Advantages#Instalable), por lo que puede estar disponible en la pantalla de inicio del dispositivo o en el lanzador de aplicaciones.
- [Enlazable](/es/docs/Web/Progressive_web_apps/Advantages#Enlazable), para que puedas compartirla simplemente enviando una URL.
- [Independiente de la red](/es/docs/Web/Progressive_web_apps/Advantages#Independiente_de_la_red), por lo que funciona sin conexión o con una deficiente conexión de red.
- [Progresiva](/es/docs/Web/Progressive_web_apps/AdvantagesProgresiva), por lo que todavía se puede utilizar en un nivel básico en los navegadores más antiguos, pero completamente funcional en los más recientes.
- [Reconectable](/es/docs/Web/Progressive_web_apps/Advantages#Reconectable), por lo que puede enviar notificaciones cuando haya contenido nuevo disponible.
- [Adaptable](/es/docs/Web/Progressive_web_apps/Advantages#Adaptable), por lo tanto se puede utilizar en cualquier dispositivo con pantalla y navegador: teléfonos móviles, tabletas, computadoras portátiles, televisores, refrigeradores, etc.
- [Segura](/es/docs/Web/Progressive_web_apps/Advantages#Segura) por lo que las conexiones entre el usuario, la aplicación y tu servidor están protegidos contra terceros que intenten acceder a datos sensibles.

Ofrecer estas funciones y hacer uso de todas las [Ventajas que ofrecen las aplicaciones web](#ventajas_de_las_aplicaciones_web) puede crear una oferta atractiva y altamente flexible para tus usuarios y clientes.

### ¿Vale la pena hacer todo eso?

¡Absolutamente! Con un esfuerzo relativamente pequeño para implementar las características principales de las PWAs, los beneficios son enormes. Por ejemplo:

- Una disminución en los tiempos de carga después de la instalación de la aplicación, gracias al almacenamiento en caché con el [servicio workers](/es/docs/Web/API/Service_Worker_API), además de ahorrar un valioso ancho de banda y tiempo. Los PWAs tienen una carga casi instantánea (a partir de la segunda visita).
- La capacidad de actualizar solo el contenido que ha cambiado cuando hay disponible una actualización de la aplicación. En contraste, con una aplicación nativa, incluso la más mínima modificación puede obligar al usuario a descargar la aplicación completa nuevamente.
- Una apariencia que está más integrada con la plataforma nativa: íconos de aplicaciones en la pantalla de inicio o el lanzador de aplicaciones, aplicaciones que se ejecutan automáticamente en modo de pantalla completa, etc.
- Reconectable para interactuar con los usuarios mediante el uso de notificaciones del sistema y mensajes `push`, lo cual genera usuarios más comprometidos y mejores tasas de conversión.

### Historias de éxito

Hay muchas historias de éxito de empresas que probaron la ruta PWA, optaron por una experiencia de sitio web mejorada en lugar de una aplicación nativa y, como resultado, obtuvieron importantes beneficios medibles. El sitio web [Estadísticas PWA](https://www.pwastats.com/) comparte muchos estudios de casos que indican estos beneficios.

La historia de éxito más conocida probablemente es la de [Flipkart Lite](https://stories.flipkart.com/introducing-flipkart-lite/). El sitio de comercio electrónico más grande de la India se reconstruyó como una aplicación web progresiva en 2015, lo que resultó en un aumento del 70% en las conversiones. La PWA [AliExpress](https://m.aliexpress.com/) también ha obtenido resultados mucho mejores que la web o la aplicación nativa, con un aumento del 104% en las tasas de conversión para los nuevos usuarios. Dado el aumento de sus ganancias y la cantidad relativamente baja de trabajo requerida para la conversión de estas aplicaciones a PWA, la ventaja es clara.

Las puestas en marcha emergentes en etapa temprana como [couponmoto](https://www.couponmoto.com/) también han comenzado a usar aplicaciones web progresivas para impulsar una mayor participación de los consumidores, lo que demuestra que pueden ayudar tanto a pequeñas como a grandes empresas para (re)involucrar a los usuarios de manera más eficaz.

Puedes consultar la lista en pwa.rocks para obtener más ejemplos. Vale la pena mencionar en particular la página [hnpwa.com](https://hnpwa.com/), que muestra una implementación de ejemplo del sitio web de Hacker News (en lugar de la aplicación habitual TodoMVC), en la que puedes ver el uso de varios marcos de desarrollo de la interfaz de usuario web.

Incluso puedes generar PWA en línea utilizando el sitio web [PWABuilder](https://www.pwabuilder.com/).

Para obtener información específica sobre el servicio _worker_ y la inserción, asegúrate de consultar el [Libro de recetas del servicio _worker_](https://github.com/mdn/serviceworker-cookbook/), una colección de recetas que utilizan los servicios _worker_ en sitios modernos.

Vale la pena probar un enfoque de PWA, para que puedas ver por ti mismo si funciona para tu aplicación.

## Ventajas de las aplicaciones web

Una aplicación web progresiva totalmente capaz debería proporcionar todas las siguientes ventajas al usuario.

### Reconocible

El objetivo final es que las aplicaciones web tengan una mejor representación en los motores de búsqueda, sean más fáciles de exponer, catalogar y clasificar, y tener metadatos utilizables por los navegadores para brindarles capacidades especiales.

Algunas de las capacidades ya se han habilitado en ciertas plataformas basadas en web mediante tecnologías patentadas como [Open Graph](http://ogp.me/), que proporciona un formato para especificar metadatos similares en el bloque {{HTMLElement("head")}} de {{Glossary("HTML")}} con etiquetas {{HTMLElement("meta")}}.

El estándar web relevante aquí es el [manifiesto de la aplicación web](/es/docs/Web/Manifest), que define las características de una aplicación, como el nombre, el icono, la pantalla de presentación y los colores del tema en un archivo de manifiesto con formato {{Glossary("JSON")}}. Esto es para usar en contextos como listas de aplicaciones y pantallas de inicio de dispositivos.

### Instalable

Una parte fundamental de la experiencia de la aplicación web es que los usuarios tengan iconos de aplicaciones en su pantalla de inicio y los puedan tocar para abrir aplicaciones en su propio contenedor nativo que se sienta bien integrado con la plataforma subyacente.

Las aplicaciones web modernas pueden hacer que esta aplicación nativa se sienta a través de las propiedades establecidas dentro del manifiesto de la aplicación web y mediante una función disponible en los navegadores de teléfonos inteligentes modernos llamada [instalación de la aplicación web](/es/docs/Web/Progressive_web_apps/Developer_guide/Installing).

### Enlazable

Una de las características más poderosas de la web es la capacidad de vincularse a una aplicación en una URL específica sin la necesidad de una tienda de aplicaciones o un proceso de instalación complejo. Así ha sido siempre.

### Independiente de la red

Las aplicaciones web modernas pueden funcionar cuando hay mala (o incluso inexistente) conectividad con la red. Las ideas básicas detrás de la independencia de la red son poder:

- Volver a visitar un sitio y obtener su contenido incluso si no hay una red disponible.
- Explorar cualquier tipo de contenido que el usuario haya visitado anteriormente al menos una vez, incluso en situaciones de mala conectividad.
- Controlar lo que se muestra al usuario en situaciones donde no hay conectividad.

Esto se consigue mediante una combinación de tecnologías: el [servicio Workers](/es/docs/Web/API/Service_Worker_API) para controlar las solicitudes de página (por ejemplo, almacenarlas sin conexión), la [API de caché](/es/docs/Web/API/Cache) para almacenar respuestas a solicitudes de red sin conexión (muy útil para almacenar activos del sitio) y tecnologías de almacenamiento de datos secundarios como [Almacenamiento Web](/es/docs/Web/API/Web_Storage_API) y [IndexedDB](/es/docs/Web/API/IndexedDB_API) para almacenar datos de aplicaciones sin conexión.

### Compatibilidad de mejora progresiva

Se pueden desarrollar aplicaciones web modernas para proporcionar una experiencia excelente a los navegadores totalmente compatibles y una experiencia aceptable (aunque no tan brillante) a los navegadores menos capaces. Hemos estado haciendo esto durante años con las mejores prácticas, como la mejora progresiva. Al utilizar {{Glossary("Progressive_Enhancement", "Mejora progresiva")}}, las PWAs se utilizan en varios navegadores. Esto significa que los desarrolladores deben tener en cuenta las diferencias en la implementación de algunas características y tecnologías PWA entre diferentes implementaciones de navegadores.

### Reconectable

Una de las principales ventajas de las plataformas nativas es la facilidad con la que los usuarios pueden volver a interactuar con las actualizaciones y el contenido nuevo, incluso cuando no están mirando la aplicación o usando sus dispositivos. Las aplicaciones web modernas ahora también pueden hacer esto, utilizando nuevas tecnologías como Servicio _Workers_ para controlar páginas, la [API Web Push](/es/docs/Web/API/Push_API) para enviar actualizaciones. directamente del servidor a la aplicación a través de un servicio _workers_ y la [API de notificaciones](/es/docs/Web/API/Notifications_API) para generar notificaciones del sistema para ayudar a involucrar a los usuarios cuando no están utilizando activamente su navegador web.

### Adaptable

Las aplicaciones web adaptables utilizan tecnologías como [consultas de medios](/es/docs/Web/CSS/Media_Queries) y [viewport](/es/docs/Glossary/Viewport) para asegurarte de que tu IU se ajuste a cualquier factor de forma: computadora de escritorio, dispositivo móvil, tableta o lo que venga a continuación.

### Segura

La plataforma web proporciona un mecanismo de entrega seguro que evita espionaje y, al mismo tiempo, garantiza que el contenido no haya sido manipulado, siempre que aproveche {{Glossary("HTTPS")}} y desarrolles tus aplicaciones pensando en la seguridad.

También es fácil para los usuarios asegurarse de que están instalando la aplicación correcta, porque su URL coincidirá con el dominio de tu sitio. Esto es muy diferente de las aplicaciones en las tiendas de aplicaciones, que pueden tener varias aplicaciones con nombres similares, algunas de las cuales incluso pueden estar basadas en su propio sitio, lo que aumenta la confusión. Las aplicaciones web eliminan esa confusión y garantizan que los usuarios obtengan la mejor experiencia posible.

## Compatibilidad con el navegador

Como se mencionó anteriormente, las PWAs no dependen de una sola API, sino que utilizan varias tecnologías para lograr el objetivo de brindar la mejor experiencia web posible.

El ingrediente clave requerido para las PWAs es la asistencia de [servicio workers](/es/docs/Web/API/Service_Worker_API). Afortunadamente, los servicios de _workers_ [ahora son compatibles con los principales navegadores](https://jakearchibald.github.io/isserviceworkerready/) en computadoras de escritorio y dispositivos móviles.

Otras características como [manifiesto de App Web](/es/docs/Web/Manifest), [Push](/es/docs/Web/API/Push_API), [Notificaciones](/es/docs/Web/API/Notifications_API) y la funcionalidad [Agregar a la pantalla de inicio](/es/docs/Web/Progressive_web_apps/Add_to_home_screen) también tienen un amplio soporte. Actualmente, Safari tiene soporte limitado para el manifiesto de aplicaciones web y Agregar a la pantalla de inicio y no admite notificaciones _push web_. Sin embargo, otros navegadores importantes admiten todas estas funciones.

Por encima de todo, debes seguir la regla de mejora progresiva: usa tecnologías que mejoren la apariencia y la utilidad de tu aplicación cuando estén disponibles, pero que sigan ofreciendo la funcionalidad básica de tu aplicación cuando esas funciones no estén disponibles. Presentar un sitio web confiable con un buen rendimiento es una consecuencia del uso de estas mejoras; esto, a su vez, significa crear aplicaciones web que sigan las mejores prácticas. De esta manera, todos podrán usar la aplicación, pero aquellos con navegadores modernos se beneficiarán aún más de las funciones de PWA.

## Una aplicación de ejemplo

En esta serie de artículos, examinaremos el código fuente de un sitio web súper simple que enumera información sobre juegos enviados a la [categoría A-Frame](http://js13kgames.com/aframe) en la Competición [js13kGames 2017](http://2017.js13kgames.com/). No tienes que pensar en cuál es el contenido real del sitio web; el punto principal es aprender a utilizar las funciones de PWA en sus propios proyectos.

Puedes [ver esta aplicación en acción](https://mdn.github.io/pwa-examples/js13kpwa/) en línea, y el código fuente está [disponible en GitHub](https://github.com/mdn/pwa-examples/tree/master/js13kpwa). Examinaremos este código detenidamente a lo largo de esta serie de artículos.

Por ahora, ve a la segunda parte de esta serie, donde verás la estructura de la aplicación de ejemplo.

{{NextMenu("Web/Progressive_web_apps/App_structure", "Web/Progressive_web_apps")}}

{{QuickLinksWithSubpages("/es/docs/Web/Progressive_web_apps/")}}
